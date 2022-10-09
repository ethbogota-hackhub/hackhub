import Footer from "../components/Footer";

const Chat = () => {
    
    return (
        <div className="container-fluid px-0">
            <div className='row mx-0 ps-5'>
                <h1 className="home-title">
                    The easiest way to <span className='fw-bold'>find a team.</span>
                </h1>
            </div>

            <div className='p-5'>
                <div className='chat-card bgnd-secondary text-light p-5 shadow'>
                    <div className="chat-bgnd d-flex flex-column align-self-end">
                        <div className="mensajes text-dark d-flex h-100 justify-content-end align-items-bottom">
                            <p>Mensajes</p>
                        </div>
                        <div className="d-flex input-text w-100 text-dark mb-auto">
                            <div className="w-100 text-end">
                                <input type="text" className="m-0 p-0 h-100 form-control text-right" />
                            </div>
                            <div className="d-flex flex-shrink-1">
                                <button type="button" className="btn btn-sm btn-primary p-2 m-0">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
 
export default Chat;