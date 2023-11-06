import UseAuth from '../../hooks/UseAuth';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from "axios";
import { useState } from 'react';
import toast from 'react-hot-toast';

const RequestForm = ({ _id, Food_Image, Additional_Notes, Donator, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location }) => {
    const [date, setDate] = useState(new Date())
    const [money, setMoney] = useState('')
    const { user } = UseAuth()

    // user
    const email = user?.email

    const requestedFood = {
        Food_Name: Food_Name,
        Food_Image: Food_Image,
        Food_id: _id,
        Donator_Email: Donator?.Email,
        Donator_Name: Donator?.Name,
        User_Email: email,
        Pickup_Location: Pickup_Location,
        Expired_Date: Expired_Date,
        Additional_Notes: Additional_Notes,
        Donated_Money: money,
        Requst_Date: date,
    }

    const handleFoodRequest = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/v1/requestedFood', requestedFood)
        .then(res => {
            console.log(res.data.insertedId);
            toast('Successfully requested food')
        })
}
return (
    <div className='bg-blue-300 max-w-6xl mx-auto my-5 rounded-md p-5'>
        <h2 className=' text-3xl rancho font-semibold text-center'>Add Food Here</h2>
        < div className="flex flex-col gap-4  ">
            <form onSubmit={handleFoodRequest} className="  ">
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Food name" />
                        </div>
                        <TextInput defaultValue={Food_Name} id="name" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="food-image" value="Food image" />
                        </div>
                        <TextInput defaultValue={Food_Image} id="food image" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="food id" value="Food id" />
                        </div>
                        <TextInput defaultValue={_id} id="id" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="location" value="Pickup location" />
                        </div>
                        <TextInput defaultValue={Pickup_Location} id="location" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="time" value="Expired date" />
                        </div>
                        <TextInput defaultValue={Expired_Date} id="time" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="donator's name" value="Donator's name" />
                        </div>
                        <TextInput defaultValue={Donator?.Name} id="donator's name" type="text" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Request date" value="Request date" />
                        </div>
                        <TextInput defaultValue={date} id="Request date" type="text" readOnly required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Donator's email" />
                        </div>
                        <TextInput defaultValue={Donator?.Email} id="email1" type="email" placeholder="Donator's email" required readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="User's email" />
                        </div>
                        <TextInput defaultValue={user.email} id="email1" type="email" placeholder="User's email" readOnly required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="money" value="Donation money" />
                        </div>
                        <TextInput onBlur={(e) => setMoney(e.target.value)} id="money" type="text" placeholder="Donation money" required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Additional Notes" value="Additional Notes" />
                    </div>
                    <textarea defaultValue={Additional_Notes} className=' w-[40%] h-[100px] md:h-[150px] lg:[200px]' name="" id="Additional Notes" cols="30" rows="10"></textarea>
                </div>
                <Button className=' w-full my-3' type="submit">Request</Button>
            </form>
        </div>
    </div >
);
};

export default RequestForm;