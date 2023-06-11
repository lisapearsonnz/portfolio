import React from 'react';
import {DiHtml5,DiCss3,DiJavascript1,DiWordpress,DiPhotoshop,DiIllustrator, DiReact, DiPhp, DiVisualstudio} from 'react-icons/di';
import{FaYarn} from 'react-icons/fa';
import{SiTailwindcss} from 'react-icons/si';

const Skills = () => {
  return (
<div name='skills' className='w-full h-screen bg-[#103463]'>

    <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
                <h3 className = 'text-4xl font-bold text-white text-center'>Technical Skills</h3>
        </div>
                <div className = 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiHtml5 size={100} /></i>
                        <p className ='py-4 text-white'>HTML 5</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiCss3 size={100} /></i>
                        <p className ='py-4 text-white'>CSS 3</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiJavascript1 size={100} /></i>
                        <p className ='py-4 text-white'>Javascript</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiWordpress size={100} /></i>
                        <p className ='py-4 text-white'>Wordpress</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiPhp size={100} /></i>
                        <p className ='py-4 text-white'>PHP</p>        
                    </div>
                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiVisualstudio size={100} /></i>
                        <p className ='py-4 text-white'>Visual Studio</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiPhotoshop size={100} /></i>
                        <p className ='py-4 text-white'>Photoshop</p>        
                    </div>

                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiIllustrator size={100} /></i>
                        <p className ='py-4 text-white'>Illustrator</p>        
                    </div>

    </div>

    <div className= 'max-w-[1200px] mx-auto p-3 flex flex-col justify-center w-auto'>
        <div>
            <h4 className = 'font-bold text-white text-center'>Currently learning</h4>
        </div>
    
            <div className = 'w-full grid grid-cols-4 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><DiReact size={50} /></i>
                        <p className ='py-4 text-white'>React</p>        
                    </div>
                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><SiTailwindcss size={50} /></i>
                        <p className ='py-4 text-white'>TailwindCSS</p>        
                    </div>
                    <div className ='flex flex-col justiy-center text-center'>
                        <i className='text-white mx-auto'><FaYarn size={50} /></i>
                        <p className ='py-4 text-white'>Yarn</p>        
                    </div>
            </div>
    </div>

</div>


</div>

  )
}

export default Skills