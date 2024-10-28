import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoCloseCircleSharp } from 'react-icons/io5';


const NavBar = () => {

   const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav className="bg-lime-300 p-2">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoCloseCircleSharp></IoCloseCircleSharp>
                     : <IoMenu></IoMenu>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                ${open ? 'top-16' : '-top-60'} bg-lime-300 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;