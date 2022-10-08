import { useState } from 'react';
import Footer from '../components/Footer';

const Events = () => {
  const [events,] = useState([
    {
        "id": 72115,
        "fancy_id": "built-on-superfluid-ethonline-2022-undefined",
        "name": "Built on Superfluid: ETHOnline 2022",
        "event_url": "http://superfluid.finance/",
        "image_url": "https://assets.poap.xyz/built-on-superfluid-ethonline-2022-undefined-logo-1664909444458.png",
        "country": "",
        "city": "",
        "description": "This POAP is awarded to developers that built a project on Superfluid at ETHOnline 2022! It is distributed via e-mail.",
        "year": 2022,
        "start_date": "04-Oct-2022",
        "end_date": "04-Oct-2022",
        "expiry_date": "30-Jun-2023",
        "supply": 51
    }
  ]);
  
  return (
    <div className='container-fluid'>
      <div className="row mx-0">
          <div className="col-12 col-md-8">
              <h1 className="events-title ps-3">
                  one event, a lot of <span className="fw-bold">experiencies.</span>   
              </h1>
          </div>

          <div className="col-12 col-md-4 pb-5 d-flex justify-content-center align-items-center">
              <img src="/img/conference.png" alt="networking" width="190px" />
          </div>
      </div>
      
      <div className="container-attendees container-sm border p-5 rounded">
        <h5 className='pb-2'>events for everyone, <span className='fw-bold'>anywhere...</span></h5>

        <div className='py-4 border-top border-bottom'>
          we need to do here some filters
        </div>

        <div className='row mx-0 pt-3 d-flex justify-content-center'>
          { events.map(event => <div 
              className='col-6 col-md-4 p-2 grid-attendees'
              key={ `${ event.id }-${ event.name }` }>
              <div className='d-flex flex-column justify-content-center align-content-center shadow border p-4 h-100 card-attendees'>
                  <div className='d-flex justify-content-center'>
                    <img src={ event.image_url } alt={ event.name } height="100px" width="100px" className='border rounded-circle' />
                  </div>
                  <h6 className='text-center fw-bold mb-0 mt-2'>{ event.name } { event.last }</h6>
                  <p className='m-0 text-center' style={{ fontSize: "0.8rem" }}>{ event.city }</p>
              </div>
          </div>) }
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Events;