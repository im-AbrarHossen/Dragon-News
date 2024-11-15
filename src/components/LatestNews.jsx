import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] flex items-center gap-3 p-4">
            <button className="btn rounded-none bg-[#D72050] text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi, ullam earum nobis molestias, eaque, exercitationem totam dolorum ad nesciunt voluptates quas similique aspernatur mollitia illo odit! Pariatur, ratione itaque.</Link>
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi, ullam earum nobis molestias, eaque, exercitationem totam dolorum ad nesciunt voluptates quas similique aspernatur mollitia illo odit! Pariatur, ratione itaque.</Link>
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi, ullam earum nobis molestias, eaque, exercitationem totam dolorum ad nesciunt voluptates quas similique aspernatur mollitia illo odit! Pariatur, ratione itaque.</Link>
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi, ullam earum nobis molestias, eaque, exercitationem totam dolorum ad nesciunt voluptates quas similique aspernatur mollitia illo odit! Pariatur, ratione itaque.</Link>
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi, ullam earum nobis molestias, eaque, exercitationem totam dolorum ad nesciunt voluptates quas similique aspernatur mollitia illo odit! Pariatur, ratione itaque.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;