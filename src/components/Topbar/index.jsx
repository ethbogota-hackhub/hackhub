import { Link } from 'react-router-dom';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { useApp } from '../../hooks/useApp';
import { scrollToTop } from '../../common/utils';
import './index.css';
import { version } from '../../../package.json';

const Topbar = () => {
    const { isOpenTopbar, setIsOpenTopbar } = useApp();

    return (
        <div className={`shadow bgnd-primary d-flex flex-column justify-content-center topbar topbar-${isOpenTopbar ? 'open' : 'close'}`}>
            <div className='p-4 mb-auto d-flex justify-content-between'>
                <h1 className='fw-bold p-0'>hackhub</h1>
                <AiOutlineClose size={25} onClick={() => setIsOpenTopbar(false)}/> 
            </div>

            <ul>
                <Link onClick={() => { setIsOpenTopbar(false); scrollToTop(0); }} to='' className='py-2 d-flex flex-inline'>
                    <AiFillHome color='black' size={25} />
                    <h5 className='mx-3'>Inicio</h5>
                </Link>

                <Link onClick={() => { setIsOpenTopbar(false); scrollToTop(0); }} to='' className='py-2 d-flex flex-inline'>
                    <AiFillHome color='black' size={25} />
                    <h5 className='mx-3'>Events</h5>
                </Link>

                <Link onClick={() => { setIsOpenTopbar(false); scrollToTop(0); }} to='' className='py-2 d-flex flex-inline'>
                    <AiFillHome color='black' size={25} />
                    <h5 className='mx-3'>Attendee</h5>
                </Link>

                <Link onClick={() => { setIsOpenTopbar(false); scrollToTop(0); }} to='' className='py-2 d-flex flex-inline'>
                    <AiFillHome color='black' size={25} />
                    <h5 className='mx-3'>Organizer</h5>
                </Link>
            </ul>

            <div className='p-4 mt-auto text-center d-flex flex-column' style={{ fontSize: 15 }}>
                <div>ver { version }</div>
            </div>
        </div>
    );
}
 
export default Topbar;