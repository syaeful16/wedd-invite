import dataOurServices from '../../../data/static/DataService'

function OurServices() {
    return (
        <section className="w-screen py-14 bg-black-custom p-container">
            <div className="flex items-center gap-5 mb-20">
                <div className="w-32 h-[2px] bg-[#F2CE8C]"></div>
                <h1 className='text-[#F2CE8C] text-6xl font-meladu'>Layanan Kami</h1>
            </div>
            <div className="grid grid-cols-3 gap-28">
                {dataOurServices.map((item, i) => (
                    <div key={i} className='text-white-custom'>
                        <h1 className='text-2xl font-bold mb-4'>{item.title}</h1>
                        <p className='text-greyTxt'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurServices