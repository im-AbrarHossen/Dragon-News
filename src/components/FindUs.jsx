import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] text-[20px] font-[600] mb-5">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start"><span className="rounded-full p-2 border"><FaFacebookF></FaFacebookF></span>Facebook</button>
                <button className="btn join-item justify-start"><span className="rounded-full p-2 border"><FaTwitter></FaTwitter></span>Twitter</button>
                <button className="btn join-item justify-start"><span className="rounded-full p-2 border"><FaInstagram></FaInstagram></span>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;