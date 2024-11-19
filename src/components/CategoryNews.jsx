import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "./SingleNewsCard";

const CategoryNews = () => {
    const {data: news}  = useLoaderData();
    // console.log(news);
    return (
        <div className="mr-5">
            {
                news.map((singleNews)=>(
                    <SingleNewsCard key={singleNews._id} news={singleNews}></SingleNewsCard>
                ))
            }
        </div>
    );
};

export default CategoryNews;