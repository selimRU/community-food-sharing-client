import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import FeatureFoodsCard from "./FeatureFoodsCard";
import { useEffect, useState } from "react";
import axios from "axios";


const FeatureFoods = () => {
    const [featureFoods, setFeatureFoods] = useState([])
    // const { featureFoods } = UseAuth()


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/availableFoods')
            .then(res => {
                if (res.data) {
                    setFeatureFoods(res.data)
                }
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h3 className=" text-4xl rancho text-center font-semibold text-blue-400 border-b-2 border-blue-300 py-3">Featured Foods</h3>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 my-10 ">
                {
                    featureFoods?.slice(0, 6).map(food => <FeatureFoodsCard
                        key={food._id}
                        food={food}
                    ></FeatureFoodsCard>)
                }
            </div>
            <div className="flex justify-center">
                <button className=" hover:text-white hover:bg-blue-600 bg-blue-500 text-center px-4 py-2 rounded-md"><Link to='/availableFoods'>Show all</Link></button>
            </div>
        </div>
    );
};

export default FeatureFoods;