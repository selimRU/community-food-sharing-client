import axios from 'axios';
import { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import ManageSingleFoodCard from './ManageSingleFoodCard';



const ManageSingleFood = () => {
    const [requFood, setrRequFood] = useState([])

    const { user } = UseAuth()

    const filteredRequFood = requFood.filter(food => food.Donator_Email === user?.email)
    console.log(filteredRequFood);
    useEffect(() => {
        axios.get('https://community-food-sharing-server-side-azure.vercel.app/api/v1/requestedFoodDisplayed',{ withCredential: true })
            .then(res => {
                if (res.data) {
                    setrRequFood(res.data)
                }

            })
    }, [])
    
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto '>
            {
                filteredRequFood.map(food => <ManageSingleFoodCard
                    key={food._id}
                    food={food}
                ></ManageSingleFoodCard>)
            }
        </div>
    );
};

export default ManageSingleFood;