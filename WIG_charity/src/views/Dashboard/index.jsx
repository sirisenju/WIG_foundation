import React from 'react'

function Dashboard() {
    return (
        <section className='w-full h-full bg-orange-200'>
            <h1 className="text-center text-4xl font-bold">Dashboard</h1>
            <div className='h-screen grid grid-cols-5'>
                <div className='bg-blue-400 col-span-1 h-full'>
                    <div className='w-full bg-slate-600 text-center mt-10 mb-5'>
                        <div className='w-full h-full bg-red-300'>
                            <img className='w-[100px] h-[100px] rounded-full mx-auto' src="./assets/girlHolder.jpg" alt="" />
                        </div>
                        <h1 className='pt-4 text-2xl'>Adolf Hitler</h1>
                        <h3 className='pt-2 pb-2'>user status</h3>
                    </div>
                    <div className='bg-green-400 p-2'>
                        <ul className='bg-red-400 list-none flex flex-col gap-4'>
                            <li>Dashboard</li>
                            <li>Project</li>
                            <li>Report</li>
                        </ul>
                        <div className='mt-10'>
                            <p>Any trouble?</p>
                            <button>Contact admin</button>
                        </div>
                    </div>
                </div>
                <div className='bg-pink-400 col-span-3'>
                    <h2>main Dashboard</h2>
                </div>
                <div className=' bg-purple-400 col-span-1'>
                    <h2>other side stiff</h2>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
