import laptop from '../../../assets/images/laptop.png'
function Features() {
    return (
        <section className='relative p-container py-20'>
            <div className="flex justify-center">
                <h1 className='absolute z-10 text-[200px] font-meladu'>Responsif</h1>
            </div>
            <div className="w-full grid grid-cols-[400px_1fr_400px] items-center gap-10 mt-32">
                <div className="text-end">
                    <div className="">
                        <p>Musik latar belakang</p>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <img src={laptop} alt="" className='w-full'/>
                </div>
                <div className="">
                    <div className="">
                        <p>Musik latar belakang</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features