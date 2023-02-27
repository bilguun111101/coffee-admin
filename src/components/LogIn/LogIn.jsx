import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Circles = () => (
  <>
      <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -160, top: 100 }} />
      <div className='w-52 h-64 absolute bg-gradient-to-b from-violet-300 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: 300 }} />
      <div className='w-52 h-64 absolute bg-gradient-to-l from-violet-200 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: -200 }} />
      <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-50 to-fuchsia-500 blur-2xl z-0' style={{ left: 200, top: -100 }} />
      <div className='w-52 h-64 rounded-full absolute bg-gradient-to-b from-violet-800 to-fuchsia-500 blur-2xl z-0' style={{ left: 100, bottom: -200 }} />
      <div className='w-52 h-64 rounded-full absolute bg-gradient-to-l from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -100, top: 480 }} />
  </>
)

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const handleImpormation = (event) => {
    console.log({
      ...event,
      email
    });
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return;
  }
  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden backdrop-blur relative'>
      <Circles />
      <form onSubmit={handleSubmit(handleImpormation)} className="z-10">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input { ...register("firstName") } type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input { ...register("lastName") } type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" 
                  { ...register("phoneName") }
                  required 
                />
            </div>
        </div>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input { ...register("password") } type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div class="mb-6">
            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input { ...register("confirmPassword") } type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Enter" />
      </form>
    </div>
  )
}

export default LogIn