import React from 'react'
import { useForm } from 'react-hook-form'
import organizer from '../../assets/organizer.svg'


const Organizer = () => {
  const { register, setError, clearErrors, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => {
    try {
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className='container-fluid'>
      <h1 className='text-center mb-5'>Get to know your event</h1>
      <img className='w-25 rounded mx-auto d-block' src={organizer} alt="" />
      <form onSubmit={ handleSubmit(onSubmit) } action="" id="" className='d-flex flex-column align-items-center shadow mx-5'>
        <div className='d-flex flex-column w-75 my-4 form-floating'>
            <input {...register("organizerName", { required: true })} className={ `border border-primary border-1 rounded shadow-sm form-control ${ errors.userDescription ? 'is-invalid' : '' }` } type="text" name="floatingInput" id="floatingInput" aria-label='' placeholder='Organizer Name' />
            <label htmlFor="floatingInput">Organizer Name</label>
          </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventName", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingEvent" id="floatingEvent" aria-label='' placeholder='Event Name'/>
            <label htmlFor="floatingEvent">Event Name</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventDescription", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingDesc" id="floatingDesc" aria-label='' placeholder='Event Description' />
            <label htmlFor="floatingDesc">Event Description</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventLocation", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingLocation" id="floatingLocation" aria-label='' placeholder='Event Location' />
            <label htmlFor="floatingLocation">Event Location</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventDateAndTime", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingDate&Time" id="floatingDate&Time" aria-label='' placeholder='Event Date and Time' />
            <label htmlFor="floatingDate&Time">Event Date and time</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventCover", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingCoverImg" id="floatingCoverImg" aria-label='' placeholder='Event Cover Image' />
            <label htmlFor="floatingCoverImg">Event Cover Image</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventType", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingType" id="floatingType" aria-label='' placeholder='Event Type' />
            <label htmlFor="floatingType">Event Type</label>
        </div>
        <div className='d-flex flex-column w-75 mb-4 form-floating'>
            <input {...register("eventTopic", { required: true })} className='border border-primary border-1 rounded shadow-sm form-control' type="text" name="floatingTopic" id="floatingTopic" aria-label='' placeholder='Event Topic' />
            <label htmlFor="floatingTopic">Event Topic</label>
        </div>
        <div className='w-75 mb-4'>
            <label htmlFor="">Event Options</label>
            <div className='d-flex justify-content-evenly'>
              <div>
                <input {...register("paidEvents", { required: true })} type="checkbox" name="paid" id="paid" aria-label='' />
                <label htmlFor="paid" className='px-2'>Paid Events</label>
              </div>
              <div>
                <input {...register("freeEvents", { required: true })} type="checkbox" name="free" id="free" aria-label='' />
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
              <input {...register("limitedTickets", { required: true })} type="checkbox" name="limited" id="limited" aria-label='' />
              <label htmlFor="limited" className='px-2'>Limited Tickets</label>
            </div>
          </div>
            <div className='w-75 mb-4'>
              <h3>Terms and conditions</h3>
              <div>
                <input {...register("termsAndConditions", { required: true })} type="checkbox" className='red' name="terms" id="terms" aria-label='' />
                <label htmlFor="terms" className='px-2'>By creating and event, I agree to the policies and terms of use.</label>
              </div>
            </div>
          <div className=''>
            <button type='submit' className='btn btn-dark btn-lg border border-0 mb-5'>Create your event</button>
        </div>
      </form>
    </div>
  )
}

export default Organizer
