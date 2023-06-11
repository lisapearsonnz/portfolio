import React from 'react';
import pfp from '../assets/Lisa.webp';

const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-[var(--light-color)]'>
        <div className='flex flex-col mx-auto px-8 flex-col justify-center items-center w-full h-full'>
            <div className = 'max-w-[1200px] w-full'>           
                <div className='sm:text-center pb-8 pl-4'>
                    <h3 className = 'text-4xl font-bold inline text-[var(--text-primary)]'>About Me</h3>
                </div>
            </div>

        <div className='max-w-[1200px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='text-[var(--text-primary)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia dolores laborum maxime autem, veniam molestias! Est consectetur aliquam provident illo nihil. Atque iste neque quod. Dolor quasi doloribus rerum.</p><br />
            <p className='text-[var(--text-primary)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus. Id totam impedit blanditiis aliquam consequatur doloribus facilis esse quam quidem molestiae eveniet, sapiente voluptatibus natus eius obcaecati deleniti praesentium.</p><br />
            <p className='text-[var(--text-primary)]'>Feel free to <a href='mailto:lisapearson.nz@gmail.com'>email</a> or use the contact form below.</p>
          </div>
          <div className ='flex justify-center'>
            <img className='rounded-full flex' src={pfp} alt ='Lisa Pearson Logo' style = {{width: '50%'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About