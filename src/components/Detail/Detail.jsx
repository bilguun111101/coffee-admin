import React, { useEffect, useState } from 'react'
import { FiUserPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom'
import { useDashboard } from '../context';
import { db } from '../firebase/firestore/db';

const Detail = () => {
  const { id } = useParams();
  const { data } = useDashboard();
  const [detail, setDetail] = useState({ });
  // const [data, setData] = useState({ });
  useEffect(() => {
    (async() => {
      setDetail(...data.filter(el => el.orderId === id));
    })()
  }, [id])
  return (
    <section className='w-fill h-full flex items-center justify-center p-10'>
      <div className='w-full h-full bg-white'></div>
    </section>
  )
}

export default Detail