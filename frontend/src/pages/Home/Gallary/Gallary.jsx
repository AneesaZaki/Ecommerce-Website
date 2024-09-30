import React from 'react'
import Lapis1 from '../../../assets/gallary/Lapis1.jpg'
import Lapis2 from '../../../assets/gallary/lapis2.jpg'
import Lapis2a from '../../../assets/gallary/lapis2a.jpg'

import Lapis1a from '../../../assets/gallary/Lapis1a.jpg'
import Lapis4 from '../../../assets/gallary/lapis4.jpg'


const Gallary = () => {
  return (
    <div className='md:w-[80%] mx-auto my-28'>
        <div className='mb-16'>
            <h1 className='text-5xl font-bold text-center'> Our Gallary</h1>
        </div>

        {/* This is the image container code  */}

        <div className='md:grid grid-cols-2 items-center justify-center gap-6'>
            <div>
                <img src={Lapis1} alt="" className='md:h-[720px] w-full mx-auto rounded-sm'/>
            </div>

            <div className='gap-4 grid grid-cols-2 items-start'>

            <div>
                <img src={Lapis2} alt="" className='md:h-[350px] rounded-sm'  />

            </div>


            <div>
                <img src={Lapis1a} alt="" className='md:h-[350px] rounded-sm' />

            </div>


            <div>
                <img src={Lapis4} alt="" className='md:h-[350px] rounded-sm' />

            </div>


            <div>
                <img src={Lapis2a} alt="" className='md:h-[350px] rounded-sm' />

            </div>

            </div>


        </div>
    
    </div>
  )
}

export default Gallary