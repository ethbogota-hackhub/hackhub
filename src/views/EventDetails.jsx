import { useEffect, useState } from "react";
import { getStorageValue, removeItemStorage } from "../common/utils";
import { MdLocationOn } from "react-icons/md";
import Footer from "../components/Footer";

const EventDetails = () => {
    const [event,] = useState(getStorageValue('eventDetails'));

    return (
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12 col-md-8">
                    <h1 className="home-title ps-3">
                        All details, <span className="fw-bold">are here.</span>   
                    </h1>
                </div>
    
                <div className="col-12 col-md-4 pb-3 d-flex justify-content-center align-items-center">
                    <img src="/img/management.png" alt="networking" width="190px" />
                </div>
            </div>

            <div className='container-fluid p-5'>
                <div className="mx-0 container-event shadow border d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-end align-items-center"><MdLocationOn size={ 65 } /></div>
                    <div className="d-flex flex-column card-event-details p-5">
                        <h1 className="event-title">{ event === null
                            ? <>Loading...</>
                            : event?.eventName
                        }</h1>
                        <p>{ event === null
                            ? <>Loading...</>
                            : event?.eventLocation
                        }</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-5 pb-5">
                <h2>You need to <span className="fw-bold">know</span>...</h2>
                <p>{ event === null
                   ? <>Loading...</>
                   : event?.eventDescription 
                }</p>
            </div>

            <div className="container-fluid d-flex justify-content-between px-5 pb-5">
                <div className="d-flex flex-column">
                    <h3 className="fw-bold">Cost</h3>
                    <p>$ 0.00</p>
                </div>
                <div>
                    <button className="btn btn-primary btn-join-us p-2">See attendees</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EventDetails;