import imgHero from '../../../assets/images/hero.png'
import rate from '../../../assets/images/rate.svg'

function Hero() {
    return (
        <section className="w-screen flex flex-col items-center pt-8 px-16 mt-20 bg-[#FDFAF4]">
            <h1 className="text-8xl font-meladu inline-block">Undangan Pernikahan</h1>
            <p className="text-center font-urbanist font-light text-xl text-gray-500">Jasa Pembuatan Undangan Pernikahan Online Profesional: <br/> Desain Elegan yang Menggambarkan Cinta Anda</p>
            <div className="w-full grid grid-cols-[400px_1fr_400px] gap-10 items-center mt-20 font-urbanist">
                <div className="text-end bg-slate-300">
                    <h1 className="text-5xl font-semibold leading-tight mb-2">100+</h1>
                    <p className='text-base leading-tight text-gray-500'>Reaksi positif dari <br/> pasangan pengantin</p>
                </div>
                <div className="flex justify-center">
                    <img src={imgHero} alt="" className='w-full'/>
                </div>
                <div className="">
                    <h1 className="text-5xl font-semibold leading-tight">4.6</h1>
                    <img src={rate} alt=""className='mb-4'/>
                    <p className='text-base leading-tight text-gray-500'>Rating dari pasangan <br/> yang menggunakan <br/> layanan kami</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;