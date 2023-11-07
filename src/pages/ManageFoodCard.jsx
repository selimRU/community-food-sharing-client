import { Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'


const ManageFoodCard = ({ _id, Food_Image, Additional_Notes, Donator, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location }) => {
    const { _id, Food_Image, Additional_Notes, Donator, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = food

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

    return (
        <div>

        </div>
    );
};

export default ManageFoodCard;