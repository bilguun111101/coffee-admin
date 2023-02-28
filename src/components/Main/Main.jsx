import { collection, onSnapshot } from 'firebase/firestore';
import React, { lazy, useEffect, useState } from 'react';
import { db } from '../firebase/firestore/db';
import titles from "./Titles.json";

const Circles = lazy(() => import("../Circles"));
const Order = lazy(() => import("./Build/Order"));

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <section className='w-full h-full pl-10 pr-10 pt-10 relative overflow-hidden'>
      <Circles />
      <div 
        className='w-full h-full flex overflow-hidden backdrop-blur-lg relative z-10 rounded-3xl overflow-scroll p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      >
        <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-400'>
              {titles.map((item, id) => {
                const { title, width } = item;
                return (
                  <th className={`text-sm text-white pb-5 text-left`} key={id}>
                    { title }
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* <Order /> */}
            { data?.map((el, idx) => {
              return (
                <Order element={el} />
              )
            }) }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Main
