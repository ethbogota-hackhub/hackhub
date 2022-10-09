import { useState } from 'react';
import { useAccount } from 'wagmi';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { scrollToTop } from "../common/utils";
import { ATTENDEES_CONST, SKILLS_CONST, ROLE_CONST } from '../const';

const Attendees = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(8);

  const { address, connector } = useAccount();
  const [attendees,] = useState(ATTENDEES_CONST);

  const onSubmit = (/*{ skills = [], roles = [] }*/) => {

    const roles = ['Backend Engineer', 'Frontend Engineer'];
    const skills = ['JavaScript'];

    try {
      setError(null);

      const filteredAttendees = attendees.filter(attendee => {
        // get attendee's skills
        const attendeeSkills = attendee.attributes.find(attribute => attribute.key === "skills");
        if (!attendeeSkills) return; // if attendee has no skills, skip

        const attendeeSkillsArray = attendeeSkills.value.split(";");
        const attendeeSkillsArrayTrimmed = attendeeSkillsArray.map(skill => skill.trim());

        // get attendee's role
        const attendeeRole = attendee.attributes.find(attribute => attribute.key === "role");
        if (!attendeeRole) return; // if attendee has no role, skip

        const attendeeRoleArray = attendeeRole.value.split(";");
        const attendeeRoleArrayTrimmed = attendeeRoleArray.map(role => role.trim());

        // check if attendee's skills match the selected skills
        const someSkillMatch = skills.some(skill => attendeeSkillsArrayTrimmed.includes(skill));

        // check if attendee's role match the selected role
        const someRoleMatch = roles.some(role => attendeeRoleArrayTrimmed.includes(role));

        if (someSkillMatch && someRoleMatch) {
          console.log("match", attendee);
          return attendee;
        }
        else setError('No results found');
      });

      if (filteredAttendees.length === 0) return setError('No results found');

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

      <form onSubmit={handleSubmit(onSubmit)}
        className='container-attendees container-sm border p-5 mb-5'>

        <div className='py-2 m-0'>
          <p className="mb-1">What type of individual are you looking for?</p>
          <select
            type="select"
            {...register('attendeeAs')}
            className="form-select">
            {ROLE_CONST.map((opt, index) => <option key={`${opt}${index}`} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div className='py-2 m-0'>
          <h4 className='mx-0 mt-0 mb-1 fw-bold'>Advanced Search</h4>
          <p className="mb-1">Skill(s)</p>
          <select
            type="select"
            {...register('mainLanguage')}
            className="form-select">
            {SKILLS_CONST.map((opt, index) => <option key={`${opt}${index}`} value={opt}>{opt}</option>)}
          </select>
        </div>

        {/* <div className='py-2 m-0'>
          <p className="mb-1">Spoken Language</p>
          <select
            type="select"
            {...register('spokenLanguage', { required: true })}
            className="form-select">
            {option5.map((opt, index) => <option key={`${opt}${index}`} value={opt}>{opt}</option>)}
          </select>
        </div> */}

        {error && <div className='m-2 text-center text-danger'>{error}</div>}

        <div className='d-flex justify-content-center align-items-center mt-2'>
          <button type='reset' onClick={() => { setError(null); setPagination(8); }} className='btn rounded-pill btn-join-us btn-outline-primary m-2'>reset</button>
          <button type='submit' className='btn rounded-pill btn-join-us btn-primary m-2'>submit</button>
        </div>
      </form>

      <div className="container-attendees container-sm border p-5">
        <h4 className='m-0 fw-bold'>Attendees</h4>

        <div className='row mx-0 pt-2 d-flex justify-content-center'>
          {attendees.map((attende, index) => index < pagination && <div
            className='col-6 col-md-4 p-2 grid-attendees'
            key={`${attende.id}-${attende.name}`}>
            <div className='d-flex flex-column justify-content-center align-content-center shadow border p-4 h-100 card-attendees'>
              <div className='d-flex justify-content-center'>
                <img src={attende.picture.original.url} alt={attende.name} height="100px" width="100px" className='border rounded-circle' />
              </div>
              <h6 className='text-center fw-bold mb-0 mt-2'>{attende.name} {attende.last}</h6>
              <p className='m-0 text-center' style={{ fontSize: "0.8rem" }}>{attende.role}</p>
            </div>
          </div>)}
        </div>

        {attendees.length > pagination &&
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