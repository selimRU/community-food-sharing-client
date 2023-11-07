'use client';

import axios from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../hooks/UseAuth';

const AddFood = () => {
    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodQuantity, setFoodQuantity] = useState('')
    const [foodStatus, setFoodStatus] = useState('Available')
    // const [donatorName, setDonatorName] = useState('')
    // const [donatorImage, setDonatorImage] = useState('')
    const [expiredTime, setExpiredTime] = useState('')
    const [pickLocation, setPickLocation] = useState('')
    const [additionalNotes, setAdditionalNotes] = useState('')

    const { user } = UseAuth()
    console.log(user);
    const donatorName = user?.displayName
    const donatorImage = user?.photoURL

    const email = user?.email

    const newFood = {
        Food_Name: foodName,
        Food_Image: foodImage,
        Food_Quantity: foodQuantity,
        Food_Status: foodStatus,
        Donator_Email: email,
        Donator_Image: donatorImage,
        Donator_Name: donatorName,
        Expired_Date: expiredTime,
        Pickup_Location: pickLocation,
        Additional_Notes: additionalNotes,
    }
    const handleAddFood = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/v1/availableFoodsAdd', newFood)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Successfully added food')
                }
            })
    }
    return (
        <div className='bg-blue-300 max-w-6xl mx-auto my-5 rounded-md p-5'>
            <h2 className=' text-3xl rancho font-semibold text-center'>Add Food Here</h2>
            <div className="flex flex-col gap-4  ">
                <form onSubmit={handleAddFood} className="  ">
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Food name" />
                            </div>
                            <TextInput onBlur={(e) => { setFoodName(e.target.value) }} id="name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="food-image" value="Food image" />
                            </div>
                            <TextInput onBlur={(e) => { setFoodImage(e.target.value) }} id="food image" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="quantity" value="Food quantity" />
                            </div>
                            <TextInput onBlur={(e) => { setFoodQuantity(e.target.value) }} id="quantity" type="number" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="location" value="Pickup location" />
                            </div>
                            <TextInput onBlur={(e) => { setPickLocation(e.target.value) }} id="location" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="time" value="Expired date" />
                            </div>
                            <TextInput onBlur={(e) => { setExpiredTime(e.target.value) }} id="time" type="date" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's name" value="Donator's name" />
                            </div>
                            <TextInput defaultValue={donatorName} id="donator's name" type="text" readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="food status" value="Food status" />
                            </div>
                            <TextInput defaultValue={foodStatus} id="status" type="text" readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Donator's email" />
                            </div>
                            <TextInput defaultValue={email} id="email1" type="email" placeholder="Donator's email" readOnly />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="image2" value="Donator's image" />
                        </div>
                        <TextInput defaultValue={donatorImage} id="image2" type="text" placeholder="Donator's image" readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Additional Notes" value="Additional Notes" />
                        </div>
                        <textarea onBlur={(e) => { setAdditionalNotes(e.target.value) }} className=' w-full' name="" id="Additional Notes" cols="30" rows="10"></textarea>
                    </div>
                    <Button className=' w-full my-3' type="submit">Add Food</Button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;