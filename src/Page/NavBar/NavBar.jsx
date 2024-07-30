import { Avatar, Dropdown, Navbar } from "flowbite-react";
import '../../Layout/style/style.css'
import '../../js/hover'
import { Link } from "react-router-dom";

const NavBar = () => {



    return (
        <div id="decoration" className="bg-slate-600">
            <Navbar fluid rounded className="" id="mainNav">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
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
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to={'/'} >
                        Home
                    </Link>
                    <Link className="no-underline" to={'/about'}>About</Link>
                    <Link className="no-underline" to={'/men'} id="men">Men
                    </Link>

                    <div id="blog">
                    <Link className="no-underline" to={'/men'} id="">Blog
                    </Link>

                     <div id="content" className=" h-44 w-full absolute left-0 bg-red-400">
                             sfdf
                             dkfj
                             kjdfhklj
                             kfjskldf
                     </div>
                    </div>
                    <Link className="no-underline" to={'/pricing'}>Pricing</Link>
                    <Link className="no-underline" to={'/contact'}>Contact</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;