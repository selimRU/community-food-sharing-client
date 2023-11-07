import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import { RotatingLines } from "react-loader-spinner";


const AvailableFoods = () => {
    const { loading, count } = UseAuth()
    const [availableFoods, setAvailableFoods] = useState([])
    const [searchResult, setSearchResult] = useState('')
    const [notFound, setNotFound] = useState('')
    const [pageNumber, setPageNumber] = useState(0)
    const [size, setSize] = useState(6)
    const [sortOrder, setSortOrder] = useState('asc');

    const totalPages = Math.ceil(count/ size)
    console.log(totalPages);

    console.log(count);

    // available foods
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/availableFoods?page=${pageNumber}&size=${size}}`)
            .then(res => {
                console.log(res.data);
                setAvailableFoods(res.data)
            })
    }, [pageNumber, size])

    const sortedDateLowToHigh = [...availableFoods]?.sort((a, b) => new Date(a.Expired_Date) - new Date(b.Expired_Date))
    // console.log(sortedDateLowToHigh);
    const sortedDateHighToLow = [...availableFoods]?.sort((a, b) => new Date(b.Expired_Date) - new Date(a.Expired_Date))
    // console.log(sortedDateHighToLow);

    const handleSort = (e) => {
        if (sortOrder === 'asc') {
            setAvailableFoods(sortedDateHighToLow)
        } else {
            setAvailableFoods(sortedDateLowToHigh)
        }
        setSortOrder(e.target.value)
    }


    const { user } = UseAuth()

    // handle page set

    const handleSearchFoods = () => {
        setNotFound('')
        setAvailableFoods([])
        setSearchResult('')

        const searchedFoods = availableFoods?.filter(food => (food.Food_Name).toLowerCase().includes((searchResult).toLowerCase()))
        if (!searchResult) {
            setNotFound('write something first')
            return
        }
        if (searchedFoods.length === 0) {
            setNotFound('No result founds')
            setAvailableFoods([])
        }
        else {
            setAvailableFoods(searchedFoods)
            setNotFound('')
        }
        window.location.reset()
    }

    return (
        <div className="max-w-6xl mx-auto my-10">
            <label className=" flex flex-row justify-end items-center">
                <span className="ralway">Sort Order :</span>
                <select className="border-blue-300 ml-1" value={sortOrder} onChange={handleSort}>
                    <option className="raleway" value="asc">Ascending</option>
                    <option className="raleway" value="desc">Descending</option>
                </select>
            </label>
            <div className=" flex flex-col items-center gap-3 md:gap-0 lg:gap-0 md:flex-row lg:flex-row justify-center my-5">
                <input onBlur={(e) => setSearchResult(e.target.value)} className=" w-[40%] py-[11px] border-blue-300 text-base font-light " type="text" placeholder="Search foods here" placeholder-glow name="" id="" />
                <button onClick={handleSearchFoods} className=" rounded-md md:rounded-none lg:rounded-none  md:rounded-r-md lg:rounded-r-md bg-blue-500 px-8 py-3 hover:bg-blue-600 hover:text-white">Search</button>
            </div>
            <h3 className=" text-center text-base font-semibold my-5">{notFound}</h3>
            <h3 className=" text-4xl rancho text-center font-semibold text-blue-400 border-b-2 border-blue-300 py-3">Available Foods</h3>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center my-10 gap-5 ">
                {
                    availableFoods?.map(food => <AvailableFoodsCard
                        key={food._id}
                        food={food}
                    ></AvailableFoodsCard>)
                }
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center">
                {
                    loading ? <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                        :
                        [...Array(totalPages).keys()].map((page, index) => <button
                            onClick={() => setPageNumber(page)}
                            className={`mr-5 px-5 rounded-md py-1 ${pageNumber === page ? 'bg-blue-400' : 'bg-blue-200'} `}
                            key={index}
                        >
                            {page + 1}
                        </button>)
                }
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default AvailableFoods;