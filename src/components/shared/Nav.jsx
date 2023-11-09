import { Avatar, Navbar, Button } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Nav = () => {
    const { user, logOut, } = UseAuth()

    const handleLogOut = (email, password) => {
        logOut()
    }
    return (
        <Navbar fluid rounded className=' bg-blue-200 py-10'>
            <Navbar.Brand>
                <div className=' flex flex-col lg:flex-row items-center'>
                    <img className=' w-[60px] h-[60px] rounded-full mr-2' src="https://i.postimg.cc/Ls6RJJX1/logo2.jpg" alt="" />
                    <span className="self-center whitespace-nowrap text-xl md:text-2xl lg:text-2xl font-semibold dark:text-white rancho">Food For All</span>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-1 items-center ">
                <div className=' flex flex-row md:flex-col lg:flex-row-reverse gap-2 items-center mx-1'>
                    <img className=' w-8 h-8 rounded-full' src={user?.photoURL} />
                    <p className=' text-xs lg:text-base'>{user?.displayName}</p>
                </div>
                {user ? <button onClick={handleLogOut} className=' text-xs lg:text-lg md:text-xs rounded-md bg-blue-300 px-2 md:px-2 lg:px-3 py-2' >Log Out</button> :
                    <Link to={'/logIn'}><button color="blue">Log In</button></Link>}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className=' flex flex-col md:flex-row lg:flex-row md:gap-[15px] lg:text-base lg:gap-5'>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/availableFoods">Available Foods</NavLink>
                    <NavLink to="/addFood">Add Food</NavLink>
                    <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                    <NavLink to="myFoodRequest">My Foods Request</NavLink>
                </div>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Nav;