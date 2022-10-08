import './index.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useApp } from '../../hooks/useApp';

const Navbar = () => {
    const { setIsOpenTopbar } = useApp();

    return (
        <nav className="navbar">
            <h1 className='m-3 fw-bold m-0 color-primary logo'>
                <Link to=''>
                    hackhub
                </Link>
            </h1>

            <div className='navbar-mobile'>
                <div className='icon-menu me-3' onClick={() => setIsOpenTopbar(true)}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

        </nav>
    );
}
 
export default Navbar;