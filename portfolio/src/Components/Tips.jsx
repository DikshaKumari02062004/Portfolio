import react from 'react'
import { useState } from 'react'
import { FaShieldAlt, FaSmile, FaTooth } from 'react-icons/fa';
import { GiToothbrush,GiWaterDrop } from 'react-icons/gi';
const Tips=()=>{
    const [activeTip,setActiveTip]=useState(0);
    const tips=[
        {
            title:'Proper Brushing Technique',
            content:'Proper brushing technique involves placing the toothbrush at a 45-degree angle to the gums, using gentle, short, back-and-forth or circular motions, and ensuring all tooth surfaces (outer, inner, and chewing surfaces) are cleaned.',
            icon:<GiToothbrush className='w-8 h-8 text-sky-500'/>
        },
        {
            title:'Cavity Prevention',
            content:'Cavity prevention focuses on maintaining good oral hygiene and making smart dietary choices to minimize the risk of tooth decay. This includes regular brushing and flossing, using fluoride toothpaste, and limiting sugary and acidic foods and drinks. Regular dental checkups and cleanings are also crucial for early detection and prevention of cavities. ',
            icon:<FaTooth className='w-8 h-8 text-blue-500'/>
        },
        {
            title:'Gum care',
            content:'Gumcare" generally refers to products and practices aimed at maintaining healthy gums. This includes toothpaste, gels, and other oral hygiene products designed to prevent and treat gum problems like gingivitis and bleeding gums. Various brands offer gumcare products, often highlighting ingredients like Triclosan + Zinc citrate technology or Ayurvedic ingredients such as Babul, Neem, and Bakul. ',
            icon:<GiWaterDrop className='w-8 h-8 text-pink-500'/>
        },
        {
            title:'Tooth Protection',
            content:'Brush your teeth twice a day with fluoride toothpaste. Floss or clean between your teeth once daily. Visit your dentist routinely for a checkup and cleaning. Tell the dentist about any medical conditions you have and medications you take',
            icon:<FaShieldAlt className='w-8 h-8 text-yellow-500'/>
        },
        {
            title:'Regular Checkup',
            content:'A regular checkup, also known as a routine health checkup or physical, is a preventative medical appointment designed to assess your overall health and detect potential issues before they become serious',
            icon:<FaSmile className='w-8 h-8 text-emerald-500'/>
        }
    ]
return (
    <>
    <div>
        <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                To maintain optimal oral hygiene, it's crucial to brush your teeth at least twice a day with
                 fluoride toothpaste, floss daily, and consider using an antibacterial mouthwash. Regular dental 
                 check-ups and cleanings are also essential for detecting and preventing potential problems early.
                  Additionally, adopting healthy habits like avoiding tobacco and limiting sugary foods and drinks
                   can significantly improve your overall dental health           </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
            {tips.map((tip,index)=>(
                <button
                    key={index}
                    onClick={()=>setActiveTip(index)}
                    className={`p-4 rounded-xl transition-all duration-300 flex flex-col 
                    items-center ${activeTip===index
                    ?'bg-white shadow-lg border-b-4 border-sky-400':
                    'bg-gray-100 hover:bg-blue-200'}`}>
                        <div className='mb-2'>{tip.icon}</div>
                        <h3 className='font-medium text-gray-800 text-sm md:text-base'>{tip.title}</h3>
                </button>
            ))}
        </div>
        <div className='bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm'>
            <div className='flex flex-col md:flex-row items-center gap-6'>
                <div className='flex-shrink-0 bg:white p-6 rounded-xl shadow-md'>
                    {tips[activeTip].icon}
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-3'>{tips[activeTip].title}</h3>
                    <p className='text-gray-600 text-lg leading-relaxed'>{tips[activeTip].content}</p>
                </div>
            </div>
        </div>
        <div className='mt-8 flex justify-center'>
            <div className='flex space-x-2'>
                {tips.map((__,index)=>(
                    <button key={index} onClick={()=>setActiveTip(index)}
                    className={`w-3 h-3 rounded-full transition-all ${activeTip===index
                        ?'bg-sky-500 w-6':'bg-gray-300'
                    }`} aria-label={`Go to Tip ${index+1}`}>
                    </button>
                ))}
            </div>
        </div>
        </section>
    </div>
    </>
);
};
export default Tips