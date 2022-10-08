import './index.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useApp } from '../../hooks/useApp';
import { scrollToTop } from '../../common/utils';
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
                <Link to='/attendees' onClick={() => scrollToTop(0)}>
                    attendees
                </Link>

                <Link to='/events' onClick={() => scrollToTop(0)}>
                    events
                </Link>

                <Link to='/organizer' onClick={() => scrollToTop(0)}>
                    organizer
                </Link>
                
                <LoginButton onClick={() => scrollToTop(0)} />
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