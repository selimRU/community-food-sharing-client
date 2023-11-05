import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const AvailableFoodsCard = ({ food }) => {
    const navigate = useNavigate()
    const { _id, Food_Image, Additional_Notes, Donator, Expired_Time, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = food;

    const handleDetails = () => {
        navigate(`/availableFoodDetails/${_id}`)
    }
    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={Food_Image}
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
            <button onClick={handleDetails}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
                Details
            </button>
        </Card>
    );
};

export default AvailableFoodsCard;