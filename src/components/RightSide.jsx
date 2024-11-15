import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightSide = () => {
    return (
        <div className="flex flex-col gap-10">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightSide;