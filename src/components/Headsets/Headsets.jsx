import React from 'react'
import Headsets1 from '../../assets/img/headset-1.png'
import Headsets2 from '../../assets/img/headset-2.png'
import Headsets3 from '../../assets/img/headset-3.png'
import Headsets4 from '../../assets/img/headset-4.png'
const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
        <div className="container mx-auto">
            <h2 className='text-3xl font-bold mb-6'>Mixed Reality Headsets</h2>
            <div className='grid gap-y-2 lg:grid-cols-2 lg:gap-y-9'>
                {/* Item */}
                <div className='relative'>
                    <img src={Headsets1} alt="" />
                    <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                        <h4 className='font-semibold mb-2 text-xl'>Metaverse</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quisquam. Libero quos ab laboriosam cum?</p>
                    </div>
                </div>
                {/* Item */}
                <div className='relative'>
                    <img src={Headsets2} alt="" />
                    <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                        <h4 className='font-semibold mb-2 text-xl'>AIoT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quisquam. Libero quos ab laboriosam cum?</p>
                    </div>
                </div>
                {/* Item */}
                <div className='relative'>
                    <img src={Headsets3} alt="" />
                    <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                        <h4 className='font-semibold mb-2 text-xl'>HoloLens</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quisquam. Libero quos ab laboriosam cum?</p>
                    </div>
                </div>
                {/* Item */}
                <div className='relative'>
                    <img src={Headsets4} alt="" />
                    <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
                        <h4 className='font-semibold mb-2 text-xl'>TPCASTT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quisquam. Libero quos ab laboriosam cum?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Headsets