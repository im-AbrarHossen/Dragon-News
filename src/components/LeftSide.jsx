import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category));
    },[]);
    return (
        <div>
            <h2 className="text-[#403F3F] text-[20px] font-[600] mb-5">All Caterogy</h2>
            <div className="flex flex-col gap-3">
                {
                    categories.map((category) =>(
                        <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="text-start text-[#9F9F9F] text-[20px] font-[500] border mr-5 py-4 pl-6 rounded-[5px]">{category.category_name}</NavLink>
                    ))
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default LeftSide;