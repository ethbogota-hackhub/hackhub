import { useState } from 'react';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { scrollToTop } from "../common/utils";

const Attendees = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(8);

  const [attendees,] = useState([
    {
      "id": "0x01",
      "name": "LensProtocol.eth 🌿",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x02",
      "name": "AlcalaWill.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/C4E03AQEbmj_k42bYsA/profile-displayphoto-shrink_800_800/0/1663165729434?e=1670457600&v=beta&t=B-Y1yQld250jKMvNimXtnp4zsKMOY59yrc-79dRvTag",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x03",
      "name": "Berrodriquez.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/D5635AQHf3LxTBLxZ_g/profile-framedphoto-shrink_800_800/0/1661313923976?e=1665853200&v=beta&t=IpSWVHFEP_MSbR-jpEa--QRXRtaZDHsnWleg3KlQDVc",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x04",
      "name": "ManuelLozada.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/C4D03AQEfir7uIqOGeQ/profile-displayphoto-shrink_800_800/0/1643763266465?e=1670457600&v=beta&t=pJV-5QIJUMu6oY9LqYx9ztoCgZzjZY1vcb2et9KYbS0",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x05",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x06",
      "name": "LensProtocol.eth 🌿",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x07",
      "name": "AlcalaWill.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/C4E03AQEbmj_k42bYsA/profile-displayphoto-shrink_800_800/0/1663165729434?e=1670457600&v=beta&t=B-Y1yQld250jKMvNimXtnp4zsKMOY59yrc-79dRvTag",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x08",
      "name": "Berrodriquez.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/D5635AQHf3LxTBLxZ_g/profile-framedphoto-shrink_800_800/0/1661313923976?e=1665853200&v=beta&t=IpSWVHFEP_MSbR-jpEa--QRXRtaZDHsnWleg3KlQDVc",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x09",
      "name": "ManuelLozada.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://media-exp1.licdn.com/dms/image/C4D03AQEfir7uIqOGeQ/profile-displayphoto-shrink_800_800/0/1643763266465?e=1670457600&v=beta&t=pJV-5QIJUMu6oY9LqYx9ztoCgZzjZY1vcb2et9KYbS0",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x0b",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x0c",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x0d",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x0e",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x0f",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x10",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x11",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    },
    {
      "id": "0x12",
      "name": "Mark.xyz",
      "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
      "attributes": [
        {
          "displayType": null,
          "traitType": "string",
          "key": "location",
          "value": "Developer Garden"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "website",
          "value": "https://lens.dev/"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "twitter",
          "value": "lensprotocol"
        },
        {
          "displayType": null,
          "traitType": "boolean",
          "key": "isBeta",
          "value": "true"
        },
        {
          "displayType": null,
          "traitType": "string",
          "key": "app",
          "value": "Lenster"
        }
      ],
      "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
      "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
      "isDefault": false,
      "picture": {
        "original": {
          "url": "https://trello-members.s3.amazonaws.com/5b893f096ccbb2837f9aab45/0b88f284060257136bbb8946a14fc73c/original.png",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "handle": "lensprotocol.test",
      "coverPicture": {
        "original": {
          "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
          "mimeType": null
        },
        "__typename": "MediaSet"
      },
      "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
      "dispatcher": null,
      "stats": {
        "totalFollowers": 2103,
        "totalFollowing": 0,
        "totalPosts": 2,
        "totalComments": 0,
        "totalMirrors": 0,
        "totalPublications": 2,
        "totalCollects": 1354
      },
      "followModule": null
    }
  ]);

  const [option4,] = useState([
    "Select all necessary",
    "APL",
    "Assembly",
    "Bash/Shell",
    "C",
    "C#",
    "C++",
    "Cairo",
    "Clojure",
    "COBOL",
    "Crystal",
    "Dart",
    "Delphi",
    "Elixir",
    "Erland",
    "F#",
    "Go ",
    "Groovy",
    "Haskell",
    "Java",
    "Javascript",
    "Julia",
    "Kotlin",
    "LISP",
    "Matlab",
    "Node.js",
    "Noir",
    "Objective-C",
    "Perl",
    "PHP",
    "Powershell",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Solidity",
    "SQL",
    "Swift",
    "TypeScript",
    "VBA",
    "Vyper",
    "Zinc"
  ]);
  
  const [option1,] = useState([
    "Select all necessary",
    "Artist",
    "Backend Engineer",
    "Blockchain Engineer",
    "Creator",
    "Database Engineer",
    "Founder/CEO",
    "Frontend Engineer",
    "Full Stack Engineer",
    "Musician",
    "Product Designer",
    "Product Manager",
    "UI/UX Designer",
    "Visual Designer"
  ]);
  
  const [option5,] = useState([
    "Select all necessary",
    "English",
    "Spanish",
    "German",
    "French",
    "Portuguese",
    "Japanese",
    "Chinese",
    "Turkish",
    "Hindi",
    "Arabic",
    "Russian",
    "Bengali",
    "Indonesian",
    "Italian",
    "Swedish",
    "Gaelic",
  ]);

  const onSubmit = (data) => {
    try {
      setError(null);
      if (data.mainLanguage === "Select all necessary" && data.attendeeAs === "Select all necessary" || data.spokenLanguage === "Select all necessary") return setError('You must select at least one value to do a search');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div className='container-fluid'>
      <div className="row mx-0">
          <div className="col-12 col-md-8">
              <h1 className="home-title ps-3">
                Find your teammate. <span className="fw-bold">Build your team.</span>   
              </h1>
          </div>

          <div className="col-12 col-md-4 pb-5 d-flex justify-content-center align-items-center">
              <img src="/img/management.png" alt="networking" width="190px" />
          </div>
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }
        className='container-attendees container-sm border p-5 mb-5'>
        <div className='py-2 m-0'>
          <h4 className='mx-0 mt-0 mb-1 fw-bold'>Advanced Search</h4>
          <p className="mb-1">Programming Language(s)</p>
          <select 
              type="select"
              {...register('mainLanguage')} 
              className="form-select">
              { option4.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
          </select>
        </div>

        <div className='py-2 m-0'>
          <p className="mb-1">What type of individual are you looking for?</p>
            <select
              type="select"
              {...register('attendeeAs')} 
              className="form-select">
              { option1.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
          </select>
        </div>
        
        <div className='py-2 m-0'>
          <p className="mb-1">Spoken Language</p>
          <select 
              type="select"
              {...register('spokenLanguage', { required: true })} 
              className="form-select">
              { option5.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
          </select>
        </div>

        { error && <div className='m-2 text-center text-danger'>{ error }</div> }

        <div className='d-flex justify-content-center align-items-center mt-2'>
          <button type='reset' onClick={() => { setError(null); setPagination(8); }} className='btn rounded-pill btn-join-us btn-outline-primary m-2'>reset</button>
          <button type='submit' className='btn rounded-pill btn-join-us btn-primary m-2'>submit</button>
        </div>
      </form>
      
      <div className="container-attendees container-sm border p-5">
        <h4 className='m-0 fw-bold'>Attendees</h4>

        <div className='row mx-0 pt-2 d-flex justify-content-center'>
          { attendees.map((attende, index) => index < pagination && <div 
              className='col-6 col-md-4 p-2 grid-attendees'
              key={ `${ attende.id }-${ attende.name }` }>
              <div className='d-flex flex-column justify-content-center align-content-center shadow border p-4 h-100 card-attendees'>
                  <div className='d-flex justify-content-center'>
                    <img src={ attende.picture.original.url } alt={ attende.name } height="100px" width="100px" className='border rounded-circle' />
                  </div>
                  <h6 className='text-center fw-bold mb-0 mt-2'>{ attende.name } { attende.last }</h6>
                  <p className='m-0 text-center' style={{ fontSize: "0.8rem" }}>{ attende.role }</p>
              </div>
          </div>) }
        </div>

        { attendees.length > pagination && 
          <div onClick={() => setPagination(pagination + 8)} className='mt-2 mb-0 d-flex justify-content-end me-3 color-primary fw-bold cursor-pointer'>Show more...</div> 
        }
      </div>

      <div className='container-fluid text-center'>
        <button type='button' className='btn btn-outline-primary me-3 mt-3' onClick={() => scrollToTop(0)}>Go up</button>
      </div>
      
      <Footer />
    </div>
  )
}

export default Attendees;