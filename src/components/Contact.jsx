import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';

const Contact = () => {
  return (
<div name='contact' className='w-full h-screen bg-[#fde0e0] flex justify-center items-center p-4'>
        <div>

            <form action="https://getform.io/f/2f09242a-dcd8-4e11-8e1c-b017b68f83cc" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <h3 className='text-4xl font-bold text-center'>
                    Drop me a line
                    </h3>
                <p>Whether you'd like to collaborate, hire or just dropping by to say hi, I would love to hear from you :) !</p>
                </div>
                <input className='p-2' type='text' placeholder='Name' name='name' />
                    <input className='my-4 p-2' type='email' placeholder='Email' name='email' />
                        <textarea className='p-2' rows='10' placeholder='Message' name="message"></textarea>

                                <input type="hidden" name="_gotcha" />
                                    <button className = 'text-[#103463] border-2 border-[#103463] rounded-full px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#103463] hover:text-white' type ='submit'> <HiOutlineMail size ={20} /> Submit Message </button>
            </form>
                
        </div>
  </div>


  )
}

export default Contact