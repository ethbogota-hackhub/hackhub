import { useState } from 'react';
import './index.css';

const Home = () => {
    const [techStack,] = useState([
        { name: "lens protocol", path: '/img/lens.png', id: 1 },
        { name: "metamask", path: '/img/metamask.png', id: 2 },
        { name: "wallet connect", path: '/img/walletconnect.png', id: 3 },
        { name: "coinbase", path: '/img/coinbase.webp', id: 4 },
        { name: "ethereum", path: '/img/ethereum.png', id: 5 },
        { name: "polygon", path: '/img/polygon.png', id: 6 },
        { name: "worldcoin", path: '/img/worldcoin.png', id: 7 },
    ]);
    
    return (
        <div className="container-fluid px-0">
            <div className='row mx-0'>
                <div className="col-12 col-md-8 p-5 text-left">
                    <h1 className="home-title">
                        meet. <span className='fw-bold'>build. </span>
                        all in one place.
                    </h1>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary rounded-pill btn-join-us'>Join Us</button>
                </div>
            </div>
        </div>
    );
}
 
export default Home;