'use client';
import { Card } from 'flowbite-react';


const MyFoodRequestCard = ({ foodReq, handleDeleteRequestFood }) => {
    const { _id, Donator_Name,
        Pickup_Location,
        Expired_Date,
        Requst_Date,
        Donated_Money,
        Food_Status,
        Food_Image
    } = foodReq
    //  Cancel Request Button.


    return (
        <Card className="max-w-sm" imgSrc={Food_Image} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My Requested Foods
            </h5>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Donator name : {Donator_Name}
            </p>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Pickup location :  {Pickup_Location}
            </p>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Expired date : {Expired_Date}
            </p>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Request date : {Requst_Date}
            </p>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Donated money :  {Donated_Money}
            </p>
            <p className=" ralway font-semibold text-gray-700 dark:text-gray-400">
                Food status :  {Food_Status}
            </p>
            <button onClick={() => handleDeleteRequestFood(_id)} className=' bg-blue-400 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white'>Cancel</button>
        </Card>
    );
};

export default MyFoodRequestCard;