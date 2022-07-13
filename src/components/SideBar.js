import { NavLink } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { RiFileList3Line } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
 import { MdOutlineCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
 import { AiTwotoneBell, AiFillCar} from "react-icons/ai";
 import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import '../styles/adminNavBar.css';
import '../styles/adminNavBar1.css';



const routes = [
  {
    path: "/admin-dashboard",
    name: "Admin Dashboard",
    icon: <FaHome />,
  },
  
  {
    path: "/brand-management",
    name: "Brand Management",
    icon: <SiBrandfolder />,
  },
  
  {
    path: "/car-bookings",
    name: "Car Bookings",
    icon: <RiFileList3Line />,
    subRoutes: [
      {
        path: "new-bookings",
        name: "New Bookings ",
        icon: <AiTwotoneBell />,
      },
      {
        path: "/cancelled-bookings",
        name: "Cancelled Bookings",
        icon: <MdOutlineCancel />,
      },
      {
        path: "/confirmed-bookings",
        name: "Confirmed Bookings",
        icon: <GiConfirmed />,
      },

      {
        path: "/admin-bookings",
        name: "Admin Bookings",
        icon: <IoIosAdd />,
      },
      
    ],
  },
 
  {
    path: "/car-management",
    name: "Car Management",
    icon: <AiFillCar />,
  },
];

<body className="bodyc"></body>
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    
      <div className="main-container">
      
        <motion.div
          animate={{
            width: isOpen ? "270px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Rent4U
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
      
    </>
  );
};

export default SideBar;
