import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] text-[20px] font-[600] mb-5">Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn"><FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn"><FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;