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
        <>
            <div className="container-fluid px-0">
                <div className='row mx-0 ps-5'>
                    <h1 className="home-title">
                        meet. <span className='fw-bold'>build. </span>
                        all in one place.
                    </h1>
                </div>

                <div className='row mx-0'>
                    <div className="col-12 col-md-8 p-4 text-left">
                        <div className='home-card bgnd-secondary text-light shadow'>
                            Some text explain <span className='fw-bold'>what is the problem</span> we solved
                        </div>
                    </div>

                    <div className="col-12 col-md-4 p-4 d-flex justify-content-center align-items-center">
                        <img src="/img/networking.png" alt="networking" width="170px" />
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='p-4'>
                        <h3>Some text, talking about how we implement</h3>
                        <h1 className='fw-bold title'>the solution</h1>
                    </div>
                </div>

                <div className='container-fluid bgnd-primary text-center p-5'>
                    <div className='py-5'>
                        <h5 className='mb-4'>What are we using?</h5>

                        <div className='row mx-0 d-flex justify-content-center'>
                            { techStack.map(tech => <div 
                                className='col-4 p-2 tech-card'
                                key={ `${ tech.id }-${ tech.name }` }>
                                <div className='bg-light shadow rounded p-3 h-100'>
                                    <img src={ tech.path } alt={ tech.name } height="100%"  className='stack-img' />
                                </div>
                            </div>) }
                        </div>
                    </div>
                </div>

                <div className='container-fluid px-5 pt-5 text-center'>
                    <h3 className='p-5'>search. <span className='fw-bold'>connect.</span> make it possible.</h3>
                </div>
                                
                <div className='container-fluid p-5'>
                    <div className='text-center home-card bgnd-secondary text-light'>
                        <h4>
                            Another paragraph, talking about <span className='fw-bold'>why we develop</span> this idea
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Home;