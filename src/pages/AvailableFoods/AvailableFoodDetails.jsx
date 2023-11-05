import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import RequestForm from "./RequestForm";
import axios from "axios";

const AvailableFoodDetails = () => {
    const availableFood = useLoaderData()

    console.log(availableFood);
    const { _id, Food_Image, Additional_Notes, Donator, Expired_Time, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = availableFood;

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    const food = {
        Food_Image: Food_Image,
        Additional_Notes: Additional_Notes,
        Donator: Donator,
        Expired_Time: Expired_Time,
        Food_Name: Food_Name,
        Food_Quantity: Food_Quantity,
        Food_Status: Food_Status,
        Pickup_Location: Pickup_Location,
        Food_id: _id,
    }
    const handleFoodRequest = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/v1/requestedFood', food)
            .then(res => {
                console.log(res.data.insertedId);
            })
    }
    return (
        <Card
            className="max-w-4xl mx-auto my-10"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc='https://i.postimg.cc/K8YPVJHP/329583300-950998439150256-6260665216662671507-n.jpg'
        >
            <h5 className="text-xl font-semibold tracking-tight ralway text-gray-900 dark:text-white">
                <p className=' ralway text-start'>{Food_Name}</p>
            </h5>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Quantity:</span>
                <p className=' ralway text-start'>{Food_Quantity}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Expired_Time</span>
                <p className=' ralway text-start'>{Expired_Time}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Food_Status</span>
                <p className=' ralway text-start'>{Food_Status}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Pickup_Location</span>
                <p className=' ralway text-start'>{Pickup_Location}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Additional_Notes</span>
                <p className=' ralway text-start'>{Additional_Notes}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Donator's name</span>
                <p className=' ralway text-start'>{Donator.Name}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className=" font-semibold ralway text-gray-900 dark:text-white">Donator's image</span>
                <img className=' w-[50px] h-[50px] rounded-full' src={Donator.Image} alt="" />
            </div>
            <Button onClick={() => setOpenModal(true)}>Request</Button>
            <Modal show={openModal} size="6xl" className=" h-[600px]" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Request for Food</h3>
                    <RequestForm
                        Food_Image={Food_Image}
                        Additional_Notes={Additional_Notes}
                        Donator={Donator}
                        Expired_Time={Expired_Time}
                        Food_Name={Food_Name}
                        Food_Quantity={Food_Quantity}
                        Food_Status={Food_Status}
                        Pickup_Location={Pickup_Location}
                        handleFoodRequest={handleFoodRequest}
                    ></RequestForm>
                </Modal.Body>
            </Modal>
        </Card >
    )
};

export default AvailableFoodDetails;

// Food Name( Not editable )
// ○ Food Image ( Not editable )
// ○ Food Id (Not editable)
// ○ Food Donator email ( Not editable )
// ○ Food Donator Name(not editable)
// ○ User email ( LoggedIn user , Not editable )
// ○ Request Date(current time not editable)