
'use client';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../hooks/UseAuth';
import ManageFoodCard from './ManageFoodCard';
import toast from 'react-hot-toast';
const ManageMyFood = () => {
    const [requestFoods, setRequestFoods] = useState([])
    console.log(requestFoods);
    const { user } = UseAuth()
    console.log(user);

    const filteredRequestedFood = requestFoods?.filter(food => food.Donator_Email === user?.email)
    console.log(filteredRequestedFood);

    const handleDeleteFoods = (id) => {
        axios.delete(`/api/v1/deleteFoodByDonator/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast('Successfully deleted food')
                }
                const remainingFood = filteredRequestedFood.filter(food => food._id !== id)
                setRequestFoods(remainingFood)
            }).catch(error => {
                toast(error.message)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/availableFoods')
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    setRequestFoods(res.data)
                }

            })
    }, [])
    return (
        <Table striped>
            <Table.Head>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Color</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
            {
                filteredRequestedFood.map(food => <ManageFoodCard
                    key={food._id}
                    food={food}
                    handleDeleteFoods={handleDeleteFoods}
                ></ManageFoodCard>)
            }
        </Table>
    );
};

export default ManageMyFood;