import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        const check = form.get("check");
        //console.log({ name, email, photo, password, check });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                //console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               // console.log(errorCode, errorMessage);
            })
    };

    return (
        <div className="bg-base-200 grid place-items-center w-11/12 mx-auto pb-10">
            <div className="bg-base-100 shrink-0 shadow-2xl rounded-xl">
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-5">
                        <h1 className="text-center text-[35px] font-[600] text-[#403F3F]">Register your account</h1>
                    </div>
                    <hr />
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-[20px] font-[600] text-[#403F3F]">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-[20px] font-[600] text-[#403F3F]">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control mt-5">
                        <label className="label justify-end gap-3 flex-row-reverse cursor-pointer">
                            <span className="label-text">Accept Term & Conditions</span>
                            <input name="check" type="checkbox" className="checkbox" required />
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;