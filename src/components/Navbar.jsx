import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-10'>
            <div></div>
            <div className='flex items-center gap-3 text-[#706F6F] text-[18px] font-[400]'>
                <Link>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>
            </div>
            <div className='flex items-center gap-3'>
                <img src="/user.png" alt="" />
                <button className='btn rounded-none bg-[#403F3F] text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;