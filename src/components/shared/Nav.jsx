import { Avatar, Navbar, Button } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Nav = () => {
    const { user } = UseAuth()
    return (
        <Navbar fluid rounded className=' bg-blue-200 py-10'>
            <Navbar.Brand>
                <div className=' flex flex-col lg:flex-row'>
                    <img className=' w-[60px] h-[60px] rounded-full mr-2' src="https://i.postimg.cc/Ls6RJJX1/logo2.jpg" alt="" />
                    <span className="self-center whitespace-nowrap text-xl md:text-2xl lg:text-2xl font-semibold dark:text-white rancho">Food For All</span>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-1 items-center ">
                <Avatar className=' mr-2 md:mr-0 lg:mr-0' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                {user ? <button className=' rounded-md bg-blue-300 md:px-2 lg:px-3 py-1' >Log Out</button> :
                    <Link to={'/logIn'}><button color="blue">Log In</button></Link>}
                {/* <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar className=' mr-2 md:mr-0 lg:mr-0' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown> */}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className=' flex flex-col md:flex-row lg:flex-row md:gap-[14px] lg:text-base lg:gap-5'>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/availableFoods">Available-Foods</NavLink>
                    <NavLink to="/addFood">Add-Food</NavLink>
                    <NavLink to="/manageMyFoods">Manage-My-Foods</NavLink>
                    <NavLink to="myFoodRequest">My-Foods-Request</NavLink>
                </div>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Nav;