import moment from "moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-3">
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>
            <h1 className="font-[400] text-[18px] text-[#706F6F]">Journalism Without Fear or Favour</h1>
            <p className="font-[500] text-[20px] text-[#403F3F]">{moment().format("dddd, ")}<span className="text-[#706F6F]">{moment().format("MMMM Do YYYY")}</span></p>
        </div>
    );
};

export default Header;