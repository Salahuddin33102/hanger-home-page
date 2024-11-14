
import React, { useState } from "react";
import { Link} from "react-router-dom";





const Navbar = () => {
    const ancer = [
        {
            title: "List your hangar",
            Link: "/listyourhangar",
            
        },
        {
            title: "About us",
            Link: "/aboutus",
        
        },
        {
            title: "My bookings",
            Link: "/mybooking",
        
        }, {
            title: "Help",
            Link: "/help",
            
        }
    ]
    const [open, setOpen] = useState(false);
    console.log('open: ', open);
    return (
        <nav className="md:flex lg:justify-around items-center py-8">
            <div className={`bg-[#ffffff] rounded-2xl shadow-2xl  absolute transition-all  block w-[30%] p-2 right-10
            ${open ? "top-[4.5rem]" : 'top-[-11.2rem]'}`} onClick={() => setOpen(!open)} >
                <ul>
                    <li className="flex flex-col gap-2">
                        <a className="text-[13px] font-medium text-[#222]" href="">sign in</a>
                        <a className="text-[13px] font-medium text-[#222]" href="">Help Desk</a>
                     
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center px-5 lg:px-0 w-full lg:w-[271px]  ">
                <img src="images/Logo Full.png" alt="" className="     lg:w-[271px]   hidden lg:block   xl:w-full" />
                <img src="public/images/Vector.png" alt="" className="lg:hidden" />
        <div className="flex items-center gap-5 justify-center\">
  <div className="p-2 lg:p-0    bg-[#00AEEF] rounded-full">
  <img src="public/images/svgviewer-output (2).svg" alt="" className="lg:hidden h-[20px]  "/>
  </div>
        <img src="/images/svgviewer-output (1).svg" alt="" className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

            </div>
            <div className="lg:flex  gap-12 items-center hidden">
                <ul className="flex gap-10">
                    {ancer.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link   className="text-lg font-normal text-[#282828]" to={item.Link}>{item.title}</Link>
                            </li>   
                        )
                    })}
                </ul>
                <div className="border flex items-center border-[#00AEEF] px-7 py-2 gap-1 rounded-full ">
                    <img src="images/Icons.png" alt="" className="h-[20px]" />
                    <button className="text-[#00AEEF] text-[14px] font-normal">Sign in</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;