import React from 'react'

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
        <div className="container mx-auto h-full">
            <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center' >
                <h3 className='text-3xl font-semibold mb-8'>Explore product in new way</h3>
                <p className='max-w-xs mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam aspernatur in delectus dolores facere eligendi numquam soluta eos voluptates!</p>
                <form className='flex flex-col space-y-4 gap-x-4 lg:flex-row lg:space-y-0'>
                    <input 
                        type="text" 
                        placeholder='Your email'
                        className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 p-4 outline-none rounded-md'
                    />
                    <button className='btn'>Start</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Explore