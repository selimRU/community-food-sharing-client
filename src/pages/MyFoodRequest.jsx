
import { useLoaderData } from 'react-router-dom';
import MyFoodRequestCard from './MyFoodRequestCard';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';
const MyFoodRequest = () => {
    const requestedFood = useLoaderData()
    const [requFood, setRequFood] = useState(requestedFood)
    console.log(requFood);

    const handleDeleteRequestFood = (id) => {
        axios.delete(`https://community-food-sharing-server-side-azure.vercel.app/api/v1/requestedFoodDelete/${id}`,{ withCredential: true })
            .then(res => {

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food request has been deleted.",
                                icon: "success"
                            });
                            const remaining = requFood.filter(rFood => rFood._id !== id)
                            setRequFood(remaining)
                        }
                    });

                }
            }).catch(error => {
                toast(error.message)
            })

    }
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 max-w-6xl mx-auto '>
            {
                requFood.map(foodReq => <MyFoodRequestCard
                    key={foodReq._id}
                    foodReq={foodReq}
                    handleDeleteRequestFood={handleDeleteRequestFood}
                ></MyFoodRequestCard>)
            }
        </div>
    );
};

export default MyFoodRequest;