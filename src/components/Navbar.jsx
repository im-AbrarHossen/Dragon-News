import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className='flex justify-between items-center py-10'>
            <div></div>
            <div className='flex items-center gap-3 text-[#706F6F] text-[18px] font-[400]'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='flex items-center gap-3'>
                <img src="/user.png" alt="" />
                {
                    user && user?.email ? (
                        <button onClick={logout} className='btn rounded-none bg-[#403F3F] text-white'>Logout</button>
                    ) : (
                        <Link to="/auth/login" className='btn rounded-none bg-[#403F3F] text-white'>Login</Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;