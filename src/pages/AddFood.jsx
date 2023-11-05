'use client';

import axios from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddFood = () => {
    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodQuantity, setFoodQuantity] = useState('')
    const [email, setEmail] = useState('')
    const [donatorName, setDonatorName] = useState('')
    const [donatorImage, setDonatorImage] = useState('')
    const [expiredTime, setExpiredTime] = useState('')
    const [pickLocation, setPickLocation] = useState('')
    const [additionalNotes, setAdditionalNotes] = useState('')
    const newFood = {
        foodName,
        foodImage,
        foodQuantity,
        email,
        donatorImage,
        donatorName,
        expiredTime,
        pickLocation,
        additionalNotes,
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
                                <Label htmlFor="time" value="Expired time" />
                            </div>
                            <TextInput onBlur={(e) => { setExpiredTime(e.target.value) }} id="time" type="date" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's name" value="Donator's name" />
                            </div>
                            <TextInput onBlur={(e) => { setDonatorName(e.target.value) }} id="donator's name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's image" value="Donator's image" />
                            </div>
                            <TextInput onBlur={(e) => { setDonatorImage(e.target.value) }} id="donator image" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Donator's email" />
                            </div>
                            <TextInput onBlur={(e) => { setEmail(e.target.value) }} id="email1" type="email" placeholder="Donator's email" required />
                        </div>
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