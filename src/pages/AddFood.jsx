'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const AddFood = () => {
    return (
        <div className="flex bg-blue-300 flex-col gap-4 max-w-6xl mx-auto my-5 rounded-md p-5">
            <form className="  ">
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Food name" />
                        </div>
                        <TextInput id="name" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="food-image" value="Food image" />
                        </div>
                        <TextInput id="food image" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="quantity" value="Food quantity" />
                        </div>
                        <TextInput id="quantity" type="number" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="location" value="Pickup location" />
                        </div>
                        <TextInput id="location" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="time" value="Expired time" />
                        </div>
                        <TextInput id="time" type="date" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="donator's name" value="Donator's name" />
                        </div>
                        <TextInput id="donator's name" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="donator's image" value="Donator's image" />
                        </div>
                        <TextInput id="donator image" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Donator's email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="Donator's email" required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Additional Notes" value="Additional Notes" />
                    </div>
                    <textarea className=' w-full' name="" id="Additional Notes" cols="30" rows="10"></textarea>
                </div>
                <Button className=' w-full my-3' type="submit">Add Food</Button>
            </form>
        </div>
    );
};

export default AddFood;