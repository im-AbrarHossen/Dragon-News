import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useState } from "react";

const SingleNewsCard = ({ news }) => {

    const [isReadMore, setIsReadMore] = useState(false);

    const { number } = news.rating;

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<BsStarFill key={i} className="text-[#FF8C47]" />);
            } else if (i - rating <= 0.5) {
                stars.push(<BsStarHalf key={i} className="text-[#FF8C47]" />);
            } else {
                stars.push(<BsStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="border mb-5 rounded-xl">
            <div className="bg-[#F3F3F3] p-5 flex items-center justify-between rounded-t-xl">
                <div className="flex items-center gap-3">
                    <img className="rounded-full w-10" src={news.author.img} alt="" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-[#403F3F] text-[16px] font-[600]">{news.author.name}</h1>
                        <p className="text-[#706F6F] text-[14px] font-[400]">{news.author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <CiBookmark></CiBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>
            <div className="p-5">
                <p className="text-[20px] font-[700] text-[#403F3F]">{news.title}</p>
                <img className="w-full my-5" src={news.image_url} alt="" />
                <p className={`text-[#706F6F] text-[16px] font-[400] ${!isReadMore ? "line-clamp-2" : ""}`}>{news.details}</p>
                {!isReadMore && (
                    <button
                        className="text-[#FF8C47] font-[600] cursor-pointer mb-5"
                        onClick={() => setIsReadMore(true)}
                    >
                        Read More
                    </button>
                )}
                {isReadMore && (
                    <button
                        className="text-[#FF8C47] font-[600] cursor-pointer mb-5"
                        onClick={() => setIsReadMore(false)}
                    >
                        Read Less
                    </button>
                )}
                <hr />
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {generateStars(number)}
                        </div>
                        <p>{number}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoEye></IoEye>
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNewsCard;