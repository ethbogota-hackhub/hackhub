import { gql } from '@apollo/client';

export const CHALLENGE_QUERY = gql`
query Challenge($address: EthereumAddress!) {
  challenge(request: { address: $address }) {
	text
  }
}
`;

export const AUTHENTICATE_MUTATION = gql`
mutation Authenticate ($address: EthereumAddress!, $signature: Signature!) {
  authenticate(request: {
    address: $address,
    signature: $signature
  }) {
    accessToken
    refreshToken
  }
}`;