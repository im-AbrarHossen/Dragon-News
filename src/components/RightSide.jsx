import FindUs from "./FindUs";
import QZone from "./QZone";
import Rectangle from "./Rectangle";
import SocialLogin from "./SocialLogin";

const RightSide = () => {
    return (
        <div className="flex flex-col gap-10">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <Rectangle></Rectangle>
        </div>
    );
};

export default RightSide;