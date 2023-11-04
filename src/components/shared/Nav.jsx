import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <Navbar fluid rounded className=' bg-blue-200'>
            <Navbar.Brand>
                <img className=' w-[60px] h-[60px] rounded-full mr-2' src="https://i.postimg.cc/Ls6RJJX1/logo2.jpg" alt="" />
                <span className="self-center whitespace-nowrap text-xl md:text-2xl lg:text-2xl font-semibold dark:text-white rancho">Food For All</span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-1">
                <Avatar className=' mr-2 md:mr-0 lg:mr-0' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                <Link to={'/logIn'}><Button color="blue">Log In</Button></Link>
                <Link to={'/register'}><Button color="blue">Log Out</Button></Link>
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
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/availableFoods">Available Foods</NavLink>
                <NavLink to="/addFood">Add Food</NavLink>
                <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                <NavLink to="myFoodRequest">My Foods Request</NavLink>
                <NavLink to="/about">About</NavLink>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Nav;