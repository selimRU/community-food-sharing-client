import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import UseAuth from "../hooks/UseAuth";
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'
import { useState } from 'react';
const ManageMyFood = () => {
    const { manageFoods } = UseAuth()

    const { _id, Food_Image, Additional_Notes, Donator_name, Donator_Image, Expired_Date, Food_Name, Food_Quantity, Food_Status, Pickup_Location } = food;
    console.log(manageFoods);
    const handleScroll = () => {
        manageFoods.length
    };

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }
    return (
        <Table
            height={500}
            data={manageFoods}
            onScroll={handleScroll}
            cellBordered
            bordered
            onRowClick={manageFoods => {
                manageFoods
            }}
        >
            <Column width={300} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="_id" />
            </Column>

            <Column width={180} fixed>
                <HeaderCell>Food Name</HeaderCell>
                <Cell dataKey="Food_Name" />
            </Column>

            <Column width={130}>
                <HeaderCell>Expired Date</HeaderCell>
                <Cell dataKey="Expired_Date" />
            </Column>

            <Column width={100}>
                <HeaderCell>Food Quantity
                </HeaderCell>
                <Cell dataKey="Food_Quantity" />
            </Column>

            <Column width={200}>
                <HeaderCell>Pickup Location</HeaderCell>
                <Cell dataKey="Pickup_Location" />
            </Column>

            <Column width={200}>
                <HeaderCell>Donator_Email</HeaderCell>
                <Cell dataKey="Donator_Email"></Cell>
            </Column>

            {/* <Column width={200}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="" />
            </Column> */}

            <Column width={200}>
                <HeaderCell>Food Status</HeaderCell>
                <Cell dataKey="Food_Status" />
            </Column>

            <Column width={200} fixed="right">
                <HeaderCell>Action</HeaderCell>

                <Cell>
                    {rowData => {
                        function handleAction() {
                            alert(`id:${rowData.id}`);
                        }
                        return (
                            <span>
                                <Button onClick={() => setOpenModal(true)}>Edit</Button>
                                <Modal show={openModal} size="6xl" className=" h-[600px]" onClose={onCloseModal} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Request for Food</h3>
                                        <RequestForm
                                            Food_Image={Food_Image}
                                            Additional_Notes={Additional_Notes}
                                            Donator={Donator}
                                            Expired_Date={Expired_Date}
                                            Food_Name={Food_Name}
                                            Food_Quantity={Food_Quantity}
                                            Food_Status={Food_Status}
                                            Pickup_Location={Pickup_Location}
                                            Donator_name={Donator_name} Donator_Image={Donator_Image}
                                            _id={_id}
                                        ></RequestForm>
                                    </Modal.Body>
                                </Modal>
                            </span>
                        );
                    }}
                </Cell>
            </Column>
        </Table>

    );
};

export default ManageMyFood;