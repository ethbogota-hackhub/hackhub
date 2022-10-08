import { ConnectKitButton } from 'connectkit';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import toast from 'react-hot-toast';

import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { CHALLENGE_QUERY, AUTHENTICATE_MUTATION } from '../lib/apollo/queries';
import { useSignMessage } from 'wagmi';

const LoginButton = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const address = '0xC9eBA01b7249EB0d7F019946e5358a28E31edE33';

    const { signMessageAsync, isLoading: signLoading } = useSignMessage();

    const [loadChallenge, { error: errorChallenge, loading: challengeLoading }] = useLazyQuery(CHALLENGE_QUERY, { fetchPolicy: 'no-cache' });
    const [authenticate, { error: errorAuthenticate, loading: authLoading }] =
        useMutation(AUTHENTICATE_MUTATION);

    const handleSign = async () => {
        try {
            // Get challenge
            const challenge = await loadChallenge({ variables: { address } });
            if (!challenge?.data?.challenge?.text) return toast.error('Signing error');

            // Get signature
            const signature = await signMessageAsync({ message: challenge?.data?.challenge?.text });

            // Auth user and set cookies
            const auth = await authenticate({ variables: { address, signature } });
            console.log(auth);

            // save auth token
            localStorage.setItem('accessToken', auth.data?.authenticate.accessToken);
            localStorage.setItem('refreshToken', auth.data?.authenticate.refreshToken);
        } catch (e) {
            console.log('>>>>>>>>>>error', e);
        }
    };

    /* <ConnectKitButton className="btn btn-primary rounded-pill px-3" /> */
    /* <button className='btn btn-primary rounded-pill px-3'>
        Connect Wallet
    </button> */
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName }) => {

                return (
                    !isConnected
                        ? <button onClick={show} className="btn btn-primary rounded-pill px-3">
                            {isConnected ? address : "Connect Wallet"}
                        </button>
                        : <button onClick={handleSign} className="btn btn-primary rounded-pill px-3">
                            Lens Login
                        </button>
                );
            }}
        </ConnectKitButton.Custom>
    );
}

export default LoginButton;