import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import React, { lazy, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firestore/db';

const Circles = lazy(() => import("../Circles"));

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const handleImpormation = (event) => {
    if(!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || !event.firstName || !event.lastName || !event.phoneName || !event.password || !event.confirmPassword) return;
    if(!(event.password === event.confirmPassword)) return;
    const information = { firstName: event.firstName, lastName: event.lastName, phoneNumber: event.phoneName }
    createUserWithEmailAndPassword(auth, email, event.password).then(userCredential => {
      const user = userCredential.user;
      setDoc(doc(db, "employees", user.uid), information);
      navigate("login");
    })
  }
  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden backdrop-blur relative'>
      <Circles />
      <form onSubmit={handleSubmit(handleImpormation)} className="z-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input { ...register("firstName") } type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input { ...register("lastName") } type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" 
                  { ...register("phoneName") }
                  required 
                />
            </div>
        </div>
        <div class="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div class="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input { ...register("password") } type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div class="mb-6">
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input { ...register("confirmPassword") } type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Enter" />
      </form>
    </div>
  )
}

export default SignUp;