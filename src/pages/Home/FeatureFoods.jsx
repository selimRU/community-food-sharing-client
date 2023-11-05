import UseAuth from "../../hooks/UseAuth";
import FeatureFoodsCard from "./FeatureFoodsCard";


const FeatureFoods = () => {
    const { featureFoods } = UseAuth()
    return (
        <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center max-w-6xl mx-auto my-10 gap-5 ">
                {
                    featureFoods.map(food => <FeatureFoodsCard
                        key={food._id}
                        food={food}
                    ></FeatureFoodsCard>)
                }
            </div>
            <div className="flex justify-center">
                <button className=" hover:text-white hover:bg-blue-600 bg-blue-500 text-center px-4 py-2 rounded-md">Show all</button>
            </div>
        </div>
    );
};

export default FeatureFoods;