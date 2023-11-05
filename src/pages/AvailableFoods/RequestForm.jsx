import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

const RequestForm = ({ Food_Image, Additional_Notes, Donator, Expired_Time, Food_Name, Food_Quantity, Food_Status, Pickup_Location, handleFoodRequest }) => {


    return (
        <div className='bg-blue-300 max-w-6xl mx-auto my-5 rounded-md p-5'>
            <h2 className=' text-3xl rancho font-semibold text-center'>Add Food Here</h2>
            <div className="flex flex-col gap-4  ">
                <form onSubmit={handleFoodRequest} className="  ">
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
                                <Label htmlFor="time" value="Expired time" />
                            </div>
                            <TextInput defaultValue={Expired_Time} id="time" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's name" value="Donator's name" />
                            </div>
                            <TextInput defaultValue={Donator.Name} id="donator's name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="donator's image" value="Donator's image" />
                            </div>
                            <TextInput defaultValue={Donator.Image} id="donator image" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Donator's email" />
                            </div>
                            <TextInput defaultValue={Donator.Email} id="email1" type="email" placeholder="Donator's email" required />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Additional Notes" value="Additional Notes" />
                        </div>
                        <textarea onBlur={(e) => { setAdditionalNotes(e.target.value) }} className=' w-[50%]' name="" id="Additional Notes" cols="30" rows="10"></textarea>
                    </div>
                    <Button className=' w-full my-3' type="submit">Request</Button>
                </form>
            </div>
        </div>
    );
};

export default RequestForm;