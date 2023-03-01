import { collection, onSnapshot } from "firebase/firestore";
import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { db } from "../firebase/firestore/db";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [active_button, setActive_button] = useState( new Array(5).fill(false) );
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        (async() => {
          try {
            const orders = collection(db, 'admin', "h3v9RcCwpEgOBccmwgE1Lv89Gyx1", "order");
            onSnapshot(orders, snap => {
              setData(snap.docs.map(el => ({ orderId: el.id, ...el.data() })))
            })
            setLoading(false);
          } catch (error) { console.log(error) }
        })()
      }, []);
    return (
        <DashboardContext.Provider value={{ active_button, setActive_button, data, loading }}>
            { children }
        </DashboardContext.Provider>
    )
}

export const useDashboard = () => useContext(DashboardContext);