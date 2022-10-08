import { useState } from 'react';
import Footer from '../components/Footer';

const Attendees = () => {
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
    }
  ]);
  
  return (
    <div className='container-fluid'>
      <div className="row mx-0">
          <div className="col-12 col-md-8">
              <h1 className="home-title ps-3">
                  All your next <span className="fw-bold">teammates.</span>   
              </h1>
          </div>

          <div className="col-12 col-md-4 pb-5 d-flex justify-content-center align-items-center">
              <img src="/img/management.png" alt="networking" width="190px" />
          </div>
      </div>
      
      <div className="container-attendees container-sm border p-5 rounded">
        <h5 className='pb-2'>If you need it, <span className='fw-bold'>we provide you...</span></h5>

        <div className='py-4 border-top border-bottom'>
          We need to do here some filters
        </div>

        <div className='row mx-0 pt-3 d-flex justify-content-center'>
          { attendees.map(attende => <div 
              className='col-6 col-md-4 p-2'
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
      </div>
      
      <Footer />
    </div>
  )
}

export default Attendees;