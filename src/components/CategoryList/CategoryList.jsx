import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="text-center grid md:grid-cols-1 lg:grid-cols-4 my-10">
            {
                category.map(cat => <Jobs key={cat.id} cat={cat}></Jobs>)
            }
        </div>
    );
};

export default CategoryList;
