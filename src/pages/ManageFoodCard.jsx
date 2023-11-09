import { Button, Modal, Table } from 'flowbite-react';

import { useState } from 'react';
import UpdateFoodForm from './UpdateFoodForm';


const ManageFoodCard = ({ food, handleDeleteFoods }) => {
    const { _id, Food_Image, Additional_Notes, Donator_Email, Donator_Image, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = food


    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);

    }
    return (
        // <div>

        // </div>
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                    <Button onClick={() => setOpenModal(true)}>Edit</Button>
                    <Modal show={openModal} size="6xl" className=" h-[600px]" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Request for Food</h3>
                            <UpdateFoodForm
                                Donator_Email={Donator_Email}
                                Donator_Image={Donator_Image}
                                Food_Image={Food_Image}
                                Additional_Notes={Additional_Notes}
                                Expired_Date={Expired_Date}
                                Food_Name={Food_Name}
                                Food_Quantity={Food_Quantity}
                                Food_Status={Food_Status}
                                Pickup_Location={Pickup_Location}
                                _id={_id}
                            ></UpdateFoodForm>
                        </Modal.Body>
                    </Modal>
                </Table.Cell>
                <Table.Cell>
                    <button onClick={() => handleDeleteFoods(_id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Cancel
                    </button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    );
};

export default ManageFoodCard;