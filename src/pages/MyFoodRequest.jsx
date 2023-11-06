
import { useLoaderData } from 'react-router-dom';
import MyFoodRequestCard from './MyFoodRequestCard';


const MyFoodRequest = () => {
    const requestedFood = useLoaderData()
console.log(requestedFood);
    return (
        <div>
            {
                requestedFood.map(foodReq => <MyFoodRequestCard
                    key={foodReq._id}

                ></MyFoodRequestCard>)
            }
        </div>
    );
};

export default MyFoodRequest;