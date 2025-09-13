import aboutImg from '../assets/smile.jpeg'
import { FaUserMd } from 'react-icons/fa'
function About(){
    return(
        <section id="about" className='py-20 scroll-mt-20 bg-sky-50 flex'>
            <div className='container mx-auto px-4 flex-col-reverse lg:flex-row items-center gap-12'>
                <img src={aboutImg} alt="About" className='w-80 lg:w-[420px] rounded-full shadow-md'/>
            </div>
            <div className='w-full ld:w-1/2 space-y-6 text-center lg:text-left'>
            <div className='flex items-center justify-center lg:justify-start space-x-2'>
                <FaUserMd className='text-sky-600 w-7 h-7'/>
                <h2 className='text-3xl font-bold text-sky-900'>
                    About Our Clinic
                </h2>
            </div>
            <p className='text-gray-700 text-lg leading-relaxed'>
               A dental clinic is a healthcare facility specializing in oral health, offering a range of services from 
               routine check-ups and cleanings to more complex procedures like fillings, root canals, and orthodontics.  
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
               These clinics are equipped with modern dental chairs, advanced tools, and sterile environments to 
               ensure patient safety and comfort. Dental professionals, including dentists, hygienists, and 
               assistants, are dedicated to providing compassionate care and educating patients on preventative 
               oral hygiene practices. 
            </p>
            </div>
        </section>
    )
}
export default About