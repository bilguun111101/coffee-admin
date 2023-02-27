import { DashboardProvider, useDashboard } from "./context";
import { BiPlanet } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { RiHome6Line } from "react-icons/ri";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { HiChatAlt2, HiOutlineBell, HiOutlineNewspaper } from 'react-icons/hi';
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const page_buttons = (log) => {
    return [
        { text: "DASHBOARD", icon: <RiHome6Line color='rgb(148 163 184)' size={25} />, path: "" },
        { text: "ALERTS", icon: <HiOutlineBell color='rgb(148 163 184)' size={25} />, path: "/" },
        { text: "STUDIO", icon: <BiPlanet color='rgb(148 163 184)' size={25} />, path: "/" },
        { text: "REPORTS", icon: <HiOutlineNewspaper color='rgb(148 163 184)' size={25} />, path: "/" },
        { text: "SETTINGS", icon: <CiSettings color='rgb(148 163 184)' size={25} />, path: "/" },
        { text: log ? "LOG IN" : "LOG OUT", icon: log ? <FiLogIn color='rgb(148 163 184)' size={25} /> : <FiLogOut color='rgb(148 163 184)' size={25} />, path: log ? "/login" : "/" },
    ]
}


const NavbarBtn = (props) => {
    const { icon, text, path } = props.element;
    const { index } = props;
    const { active_button, setActive_button } = useDashboard();
    const navigate = useNavigate();
    const click = () => {
        setActive_button(active_button.map((el, idx) => idx === index ? el = true : el = false));
        navigate(path);
    }
    return (
        <button 
            className={`w-full rounded-lg flex items-center gap-3 px-3 py-2 ${active_button[index] && "backdrop-blur-lg"} opacity-${active_button[index] ? 100 : 70} duration-200`}
            style={{ backgroundColor: active_button[index] && 'rgba(255, 255, 255, 0.2)' }}
            onClick={click}
        >
            { icon }
            <h3 className='text-xs text-slate-300 font-black'>{ text }</h3>
        </button>
    )
}

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
        <section className='w-full h-screen flex dark:bg-slate-900'>
            {/* navbar */}
            <div className='w-1/6 relative h-full p-8 overflow-hidden backdrop-blur'>
                <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -160, top: 100 }} />
                <div className='w-52 h-64 rounded-full absolute bg-gradient-to-b from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: 300 }} />
                <div className='w-52 h-64 rounded-full absolute bg-gradient-to-l from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -100, top: 480 }} />
                <div className='flex w-full justify-between items-center backdrop-blur-lg z-10'>
                    <div className='text-base text-slate-300 font-black'>
                        <img src={logo} alt="logo" className="w-16 h-auto" />
                    </div>
                    <button>
                        <HiChatAlt2 color='rgb(148 163 184)' />
                    </button>
                </div>
                <div className='mt-20 flex flex-col w-full gap-1'>
                    { page_buttons(true).map((el, idx) => <NavbarBtn element={el} key={idx} index={idx} />) }
                </div>
            </div>
            { children }
        </section>
    </DashboardProvider>
  )
}

export default Layout;