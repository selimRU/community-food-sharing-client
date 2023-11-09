// import * as React from "react";

import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
    useCustom,
} from "@table-library/react-table-library/table";

// import { nodes } from "../../data";
// 'use client';
// // import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../hooks/UseAuth';
import ManageFoodCard from './ManageFoodCard';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ManageMyFood = () => {
    const [requestFoods, setRequestFoods] = useState([])
    // console.log(requestFoods);
    const { user } = UseAuth()
    console.log(user);

    const filteredRequestedFood = requestFoods?.filter(food => food.Donator_Email === user?.email)
    console.log(filteredRequestedFood);


    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const data = {
        nodes: filteredRequestedFood.filter((item) =>
            item.Food_Name.toLowerCase().includes(search.toLowerCase())
        ),
    };
    const handleDeleteFoods = (id) => {
        axios.delete(`https://community-food-sharing-server-side-azure.vercel.app/api/v1/deleteFoodByDonator/${id}`,{ withCredential: true })
            .then(res => {
                if (res.data.deletedCount > 0) {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your food has been deleted.",
                                    icon: "success"
                                });
                                const remainingFood = filteredRequestedFood.filter(food => food._id !== id)
                                setRequestFoods(remainingFood)
                            }
                        });
                    }
                }

            }).catch(error => {
                toast(error.message)
            })
    }

    useEffect(() => {
        axios.get('https://community-food-sharing-server-side-azure.vercel.app/api/v1/availableFoods')
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    setRequestFoods(res.data)
                }

            })
    }, [])
    return (
        <div className=" max-w-6xl mx-auto h-screen my-5">
            <label htmlFor="search">
                Search by Task:&nbsp;
                <input id="search" type="text" value={search} onChange={handleSearch} />
            </label>
            <br />

            <Table data={data}>
                {(filteredRequestedFood) => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCell><p className=" my-4">Food Name</p></HeaderCell>
                                <HeaderCell>Quantity</HeaderCell>
                                <HeaderCell>Update</HeaderCell>
                                <HeaderCell>Action</HeaderCell>
                                <HeaderCell>Manage</HeaderCell>
                            </HeaderRow>
                        </Header>
                        <Body>
                            {filteredRequestedFood.map((item) => (
                                <Row key={item._id} item={item}>
                                    <Cell><p className=" ralway my-5 lg:text-lg font-semibold">{item.Food_Name}</p></Cell>
                                    <Cell><p className=" pl-5">{item.Food_Quantity}</p></Cell>
                                    <Cell><Link to={`/updateFoodsForm/${item._id}`}><button className=" text-blue-400 ralway hover:text-blue-600 hover:underline">Edit</button></Link></Cell>
                                    <Cell><button onClick={() => handleDeleteFoods(item._id)} className=" bg-red-400 text-white px-2 py-1 lg:px-3 md:px-3 md:py-2 lg:py-2 rounded-md ralway hover:bg-red-600 hover:underline">Delete</button></Cell>
                                    <Cell><Link to='/manageSingleFood'><button className=" text-blue-400 ralway hover:text-blue-600 hover:underline">Manage</button></Link></Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>
        </div>
    );
};

export default ManageMyFood;