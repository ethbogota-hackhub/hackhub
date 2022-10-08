import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCalendar3, BsPlus } from "react-icons/bs";
import Footer from '../components/Footer';

const UserProfile = () => {
    const { register, formState: { errors }, setError, clearErrors, handleSubmit } = useForm();
    const [user,] = useState({
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

    const UserAchievements = () => {
        const [poaps, setPoaps] = useState([
            {
                "event": {
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
                  },
                  "tokenId": "5718949",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718950",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718951",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718952",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718953",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718954",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718955",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            }
        ]);
    
        return (
            <div className="container-sm border p-5 profile-container mb-5 rounded profile-section">
                <h4 className="fw-bold">Achievements</h4>
                <div className="d-flex overflow-auto">
                    { poaps.map(poap => <div 
                        className='col-6 col-md-4 p-2 grid-attendees'
                        key={ `${ poap.tokenId }` }>
                        <div className='d-flex flex-column justify-content-center shadow border p-4 h-100 card-attendees'>
                            <p className="text-small text-muted"># { poap.tokenId }</p>
                            <div className='d-flex justify-content-center'>
                                <img src={ poap.event.image_url } alt={ poap.name } height="100px" width="100px" className='border rounded-circle' />
                            </div>
                            <p className='text-center text-small fw-bold mb-0 mt-2'><BsCalendar3 className="me-2" size={13}/> { poap.created }</p>
                        </div>
                    </div>) }
                </div>
            </div>
        );
    }

    const UserAttended = () => {
        const [poaps, setPoaps] = useState([
            {
                "event": {
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
                  },
                  "tokenId": "5718949",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718950",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718951",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718952",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718953",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718954",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            },
            {
                "event": {
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
                  },
                  "tokenId": "5718955",
                  "owner": "0xe09bc8ff94f777809a4056e8192a985c0f497c24",
                  "chain": "xdai",
                  "created": "2022-10-06 22:03:15"
            }
        ]);
    
        return (
            <div className="container-sm border p-5 profile-container mb-5 rounded profile-section">
                <h4 className="fw-bold">Past events atended</h4>
                <div className="d-flex overflow-auto">
                    { poaps.map(poap => <div 
                        className='col-6 col-md-4 p-2 grid-attendees'
                        key={ `${ poap.tokenId }` }>
                        <div className='d-flex flex-column justify-content-center shadow border p-4 h-100 card-attendees'>
                            <p className="text-small text-muted"># { poap.tokenId }</p>
                            <div className='d-flex justify-content-center'>
                                <img src={ poap.event.image_url } alt={ poap.name } height="100px" width="100px" className='border rounded-circle' />
                            </div>
                            <p className='text-center text-small fw-bold mb-0 mt-2'><BsCalendar3 className="me-2" size={13}/> { poap.created }</p>
                        </div>
                    </div>) }
                </div>
            </div>
        );
    }

    const handleTitle = () => {
        if (!user)
            return <h1 className="home-title ps-5">Complete some <span className="fw-bold">basic info</span></h1>

        return (
            <div className="ps-2 mb-5">
                <h1 className="profile-title mt-5 mb-1">
                    { user.name }   
                </h1>

                <div className="row mx-0 mb-3 stats-profile">
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center p-2 border-end">
                        <h6 className="m-0 fw-bold">Followers</h6>
                        <p className="m-0">{ user.stats.totalFollowers }</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center p-2">
                        <h6 className="m-0 fw-bold">Following</h6>
                        <p className="m-0">{ user.stats.totalFollowing }</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center p-2 border-start">
                        <h6 className="m-0 fw-bold">Post</h6>
                        <p className="m-0">{ user.stats.totalPosts }</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center p-2 border-start">
                        <h6 className="m-0 fw-bold">Collects</h6>
                        <p className="m-0">{ user.stats.totalCollects }</p>
                    </div>
                </div>

                <div>
                    <h6 className="fw-bold">bio:</h6>
                    <p className="mb-1">{ user.bio }</p>
                </div>
                { user && <>
                    <button type="button" className="btn btn-outline-primary btn-join-us rounded-pill m-2">Let's Talk</button>
                    <button type="button" className="btn btn-primary btn-join-us rounded-pill m-2"><BsPlus size={25} /> Follow</button>
                </>}
            </div>
        )        
    }

    return (
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12 col-md-8">
                    { handleTitle() }
                </div>
                <div className="col-12 col-md-4 pb-5 d-flex justify-content-center align-items-center">
                    <img src="/img/user.png" alt="networking" width="190px" />
                </div>
            </div>

            { user &&
            <>
                <UserAchievements />
                <UserAttended />
            </>
            }

            <form onSubmit={ handleSubmit(onSubmit) }
                className="container-sm border p-5 profile-container rounded">
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

                { user && ( 
                <div className="pt-4 d-flex justify-content-center align-items-center">
                    {   update ?
                        <>
                            <button className="btn btn-outline-primary m-2" onClick={onCancel} type="reset">Cancel</button>        
                            <button className="btn btn-primary m-2" type="submit">Submit</button>        
                        </>
                        :
                        <button className="btn btn-primary m-2" onClick={() => setUpdate(true)} type="button">Update</button>
                    }
                </div>
                )}      
            </form>

            <Footer />
        </div>
    )
}

export default UserProfile;