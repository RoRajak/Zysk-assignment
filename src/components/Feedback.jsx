import sisyphus from '../assets/sisyphus.svg'
import candice from '../assets/candice.svg'
import Companies from './helper/Companies'

const Feedback = () => {
  return (
    <section className='bg-[#F9FAFB] py-16 flex flex-col items-center justify-center space-y-7 md:px-36'>
        <Companies src={sisyphus} title='Sisyphus'/>
        <h1 className='text-3xl md:text-5xl font-medium text-center '>We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine working without it.</h1>
        <div className='flex flex-col justify-center items-center space-y-1'>
        <img src={candice} alt="" />
        <p className='font-bold'>Candice Wu</p>
        <p className='text-gray-500'>Product Manager, Sisyphus</p>
        </div>
        

    </section>
  )
}

export default Feedback