import { Table } from 'flowbite-react';
import { Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'


const ManageFoodCard = ({ food, handleDeleteFoods }) => {
    const { _id, Food_Image, Additional_Notes, Donator_Email, Donator_Image, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = food

    return (
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                    </a>
                </Table.Cell>
                <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Cancel
                    </a>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    );
};

export default ManageFoodCard;