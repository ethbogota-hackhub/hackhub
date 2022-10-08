import { useState } from "react";
import { useForm } from "react-hook-form";

const UserSkills = () => {
    const { register, formState: { errors }, setError, clearErrors, handleSubmit } = useForm();
    const [user,] = useState({
        _id: 123,
        name: 'Manuel',
        lastname: 'Lozada',
        role: 'FullStack Developer',
        events: [
            ""
        ],
        skills: [
            "NodeJS",
            "ReactJS",
            "MongoDB",
            "AWS",
            "MetaMask",
            "SQL Server"
        ]
    });
    const [transError, setTransError] = useState('');
    const [update, setUpdate] = useState(false);

    const [option1,] = useState([
        "Select...",
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
        "Visual Designer",
        "Other (custom input)"
    ]);

    const [option2,] = useState([
        "Select...",
        "Developer",
        "Mentor",
        "Volunteer",
        "Speaker",
        "Sponsor"
    ]);

    const [option3,] = useState([
        "Select...",
        "New to Ethereum",
        "Beginner",
        "Intermediate",
        "Expert"
    ]);

    const [option4,] = useState([
        "Select...",
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

    const [option5,] = useState([
        "Select...",
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
    ])

    const validateInputs = (data) => {
        let error = false;

        if (data.attendeeAs === 'Select...') {
            setError('attendeeAs', null, { shouldFocus: true });
            error = true;
        }

        if (data.ethExperience === 'Select...') {
            setError('ethExperience', null, { shouldFocus: true });
            error = true;
        }
        
        if (data.mainLanguage === 'Select...') {
            setError('mainLanguage', null, { shouldFocus: true });
            error = true;
        }
        
        if (data.spokenLanguage === 'Select...') {
            setError('spokenLanguage', null, { shouldFocus: true });
            error = true;
        }
        
        if (data.userDescription === 'Select...') {
            setError('userDescription', null, { shouldFocus: true });
            error = true;
        }

        return error;
    }

    const onSubmit = (data) => {
        try {
            if (validateInputs(data)) return ;

            console.log('updating data');
            setUpdate(false);
        } catch (e) {
            console.log(data);
            setTransError('Something went wrong');
        }
    }

    const onCancel = () => {
        clearErrors();
        setUpdate(false);
    }

    return (
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12 col-md-8">
                    <h1 className="home-title">
                        Complete some <span className="fw-bold">basic info</span>   
                    </h1>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <img src="/img/user.png" alt="networking" width="190px" />
                </div>
            </div>

            <form onSubmit={ handleSubmit(onSubmit) }
                className="container-sm border p-5 profile-container">
                <h4 className="fw-bold">About your personal info...</h4>

                <div className="pb-3">
                    <p className="mb-1"><span className="text-danger">*</span> How would you describe yourself?</p>
                    <select name="option1"
                        disabled={ !update }
                        type="select"
                        {...register('userDescription', { required: true })} 
                        className={ `form-select ${ errors.userDescription ? 'is-invalid' : '' }` }>
                        { option1.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
                    </select>
                </div>

                <div className="border-bottom pt-3 pb-5">
                    <p className="mb-1"><span className="text-danger">*</span> Spoken Language</p>
                    <select name="option2"
                        disabled={ !update }
                        type="select"
                        {...register('spokenLanguage', { required: true })} className={ `form-select ${ errors.spokenLanguage ? 'is-invalid' : ''  }` }>
                        { option5.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
                    </select>
                </div>

                <h4 className="fw-bold pt-5">About your skills...</h4>

                <div className="pb-3 ">
                    <p className="mb-1"><span className="text-danger">*</span> How do you plan to get involved?</p>
                    <select name="option3"
                        type="select"
                        disabled={ !update }
                        {...register('attendeeAs', { required: true })} 
                        className={ `form-select ${ errors.attendeeAs ? 'is-invalid' : ''  }` }>
                        {  option2.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
                    </select>
                </div>

                <div className="py-3">
                    <p className="mb-1"><span className="text-danger">*</span> Expertise with Ethereum</p>
                    <select
                        type="select"
                        disabled={ !update }
                        {...register('ethExperience', { required: true })} 
                        className={ `form-select ${ errors.ethExperience ? 'is-invalid' : ''  }` }>
                        {  option3.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
                    </select>
                </div>
                
                <div className="pt-3">
                    <p className="mb-1"><span className="text-danger">*</span> Programming Languages</p>
                    <select name="option5"
                        disabled={ !update }
                        type="select"
                        {...register('mainLanguage', { required: true })} 
                        className={ `form-select ${ errors.mainLanguage ? 'is-invalid' : ''  }` }>
                        {  option4.map((opt, index) => <option key={ `${opt}${index}`} value={ opt }>{ opt }</option>) }
                    </select>
                </div>

                <div className="pt-4 d-flex justify-content-center align-items-center">
                { update ?
                    <>
                        <button className="btn btn-outline-primary m-2" onClick={onCancel} type="reset">Cancel</button>        
                        <button className="btn btn-primary m-2" type="submit">Submit</button>        
                    </>
                    :
                    <button className="btn btn-primary m-2" onClick={() => setUpdate(true)} type="button">Update</button>        
                }
                </div>
            </form>
        </div>
    )
}

export default UserSkills;