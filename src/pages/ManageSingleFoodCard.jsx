'use client';
import { Card } from 'flowbite-react';

const ManageSingleFoodCard = ({ food, handleUpdate }) => {
    const { Requester_Name,
        Requester_Image,
        Requester_Email,
        Requst_Date,
    } = food


    return (
        <Card className="max-w-sm">
            <div className="flex flex-col items-center pb-10">
                <img
                    alt="Bonnie image"
                    height="96"
                    src={Requester_Image}
                    width="96"
                    className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Requester name: {Requester_Name}</h5>
                <h5 className="mb-1 text-sm ont-medium text-gray-900 dark:text-white">Requeste date: {Requst_Date}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400"> Requester email: {Requester_Email}</span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <button
                        onClick={handleUpdate}
                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                        Add friend
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default ManageSingleFoodCard;