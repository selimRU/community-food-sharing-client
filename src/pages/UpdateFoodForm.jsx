
// import { Button, Label, TextInput } from 'flowbite-react';
import axios from "axios";
import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../hooks/UseAuth';
import { useLoaderData } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const UpdateFoodForm = () => {
    const managedFood = useLoaderData()
    console.log(managedFood);
    const { _id, Food_Image, Additional_Notes, Donator_Email, Donator_Image, Donator_Name, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location, Donated_Money } = managedFood

    const newFood = {
        Food_Quantity: Food_Quantity,
        Donator_Image: Donator_Image,
        Food_Name: Food_Name,
        Food_Image: Food_Image,
        Donator_Email: Donator_Email,
        Pickup_Location: Pickup_Location,
        Expired_Date: Expired_Date,
        Additional_Notes: Additional_Notes,
        Food_Status: Food_Status
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/v1/updateFoodByDonator/${_id}`, newFood)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast('Updated successfully')
                }
                
            }).catch(error=>{
                toast(error.message)
            })
    }
    return (
        <div className='bg-blue-300 max-w-6xl mx-auto my-5 rounded-md p-5'>
            <h2 className=' text-3xl rancho font-semibold text-center'>Update A Food Here</h2>
            < div className="flex flex-col gap-4  ">
                <form onSubmit={handleUpdate} className="  ">
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Food name" />
                            </div>
                            <TextInput defaultValue={Food_Name} id="name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="food-image" value="Food image" />
                            </div>
                            <TextInput defaultValue={Food_Image} id="food image" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="quantity" value="Food quantity" />
                            </div>
                            <TextInput defaultValue={Food_Quantity} id="quantity" type="number" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="location" value="Pickup location" />
                            </div>
                            <TextInput defaultValue={Pickup_Location} id="location" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="time" value="Expired date" />
                            </div>
                            <TextInput defaultValue={Expired_Date} id="time" type="date" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's name" value="Donator's name" />
                            </div>
                            <TextInput defaultValue={Donator_Name} id="donator's name" type="text" readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="food status" value="Food status" />
                            </div>
                            <TextInput defaultValue={Food_Status} id="status" type="text" readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Donator's email" />
                            </div>
                            <TextInput defaultValue={Donator_Email} id="email1" type="email" placeholder="Donator's email" readOnly />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="image2" value="Donator's image" />
                        </div>
                        <TextInput defaultValue={Donator_Image} id="image2" type="text" placeholder="Donator's image" readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Additional Notes" value="Additional Notes" />
                        </div>
                        <textarea defaultValue={Additional_Notes} className=' w-full' name="" id="Additional Notes" cols="30" rows="10"></textarea>
                    </div>
                    <Button className=' w-full my-3' type="submit">Update Food</Button>
                </form>
            </div>
        </div >
    );
};

export default UpdateFoodForm;