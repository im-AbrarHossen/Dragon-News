import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log({ email, password });
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                alert(error.code);
            });
    };

    return (
        <div className="bg-base-200 lg:h-[82vh] h-[80vh] grid place-items-center w-11/12 mx-auto">
            <div className="bg-base-100 shrink-0 shadow-2xl rounded-xl">
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-5">
                        <h1 className="text-center text-[35px] font-[600] text-[#403F3F]">Login your account</h1>
                    </div>
                    <hr />
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-[20px] font-[600] text-[#403F3F]">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[20px] font-[600] text-[#403F3F]">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                    <div className="mt-5">
                        <p className="text-center text-[16px] font-[600] text-[#706F6F]">Dont't Have An Account ? <Link to="/auth/register" className="text-[#FF8C47]">Register</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;