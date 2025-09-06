import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl text-center tracking-wide">
            VR Studio, construindo ferramentas <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>para desenvolvedores</span>
        </h1>
        <p className='mt-10 txt-lg text-center text-neutral-500 max-w-4xl'>Capacite à sua criatividade e dê vida às suas ideias de aplicativos de VR com nossas
            ferramentas de desenvolvimento intuitivas. Comece hoje mesmo e transforme sua imaginação
            em realidade imersiva!
        </p>
        <div className='flex justify-center my-10'>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'>Comece gratuitamente</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentacao</a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg border w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4' src={video1} type='video/mp4'>Seu navegador nao suporta os videos</video>
            <video autoPlay loop muted className='rounded-lg border w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4' src={video2} type='video/mp4'>Seu navegador nao suporta os videos</video>
        </div>
    </div>
  )
}

export default Hero
