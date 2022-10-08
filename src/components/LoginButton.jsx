import { Modal } from "react-bootstrap";
import { useState } from "react";

const LoginButton = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    return (
        <>
            <button className='btn btn-primary rounded-pill px-3'>
                Connect Wallet
            </button>
        </>
    );
}

export default LoginButton;