import './index.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useApp } from '../../hooks/useApp';
import LoginButton from '../LoginButton';

const Navbar = () => {
    const { setIsOpenTopbar } = useApp();

    return (
        <nav className="navbar">
            <h1 className='m-3 fw-bold m-0 color-primary logo'>
                <Link to=''>
                    hackhub
                </Link>
            </h1>
            <ul className='d-flex flex-row justify-content-end m-2'>
                <Link to='/attendee'>
                    attendee
                </Link>

                <Link to='/organizer'>
                    organizer
                </Link>
                
                <LoginButton />
            </ul>

            <div className='navbar-mobile'>
                <div className='icon-menu me-3' onClick={() => setIsOpenTopbar(true)}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

        </nav>
    );
}
 
export default Navbar;