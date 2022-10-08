import React from 'react'
import organizer from '../../assets/organizer.svg'


const Organizer = () => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center mb-5'>Get to know your event</h1>
      <img className='w-50 rounded mx-auto d-block' src={organizer} alt="" />
      <form action="" id="" className='d-flex flex-column align-items-center'>
        <div className='d-flex flex-column w-75 my-4'>
            <label htmlFor="">Organizer Name</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
          </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Name</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Description</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Location</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Date and time</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Cover Image</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Type</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='d-flex flex-column w-75 mb-4'>
            <label htmlFor="">Event Topic</label>
            <input className='border border-primary border-1 rounded shadow-sm' type="text" name="" id="" aria-label='' />
        </div>
        <div className='w-75 mb-4'>
            <label htmlFor="">Event Options</label>
            <div className='d-flex justify-content-evenly'>
              <div>
                <input type="checkbox" name="paid" id="paid" aria-label='' />
                <label htmlFor="paid" className='px-2'>Paid Events</label>
              </div>
              <div>
                <input type="checkbox" name="free" id="free" aria-label='' />
                <label htmlFor="free" className='px-2'>Free Events</label>
              </div>
            </div>
        </div>
          <div className='mb-4 w-75'>
            <label htmlFor="">Ticket Price</label>
            {/* <input type="radio" name="" id="" aria-label='' /> */}
          </div>
          <div className='mb-4 w-75'>
            <label htmlFor="">Ticket Options</label>
            <div>
              <input type="checkbox" name="limited" id="limited" aria-label='' />
              <label htmlFor="limited" className='px-2'>Limited Tickets</label>
            </div>
          </div>
            <div className='w-75 mb-4'>
              <h3>Terms and conditions</h3>
              <div>
                <input type="checkbox" name="terms" id="terms" aria-label='' />
                <label htmlFor="terms" className='px-2'>By creating and event, I agree to the policies and terms of use.</label>
              </div>
            </div>
          <div className=''>
            <button type='button' className='btn btn-dark btn-lg border border-0'>Create your event</button>
        </div>
      </form>
    </div>
  )
}

export default Organizer
