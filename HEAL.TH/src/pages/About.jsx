import React from 'react'
// import "../css files/About.css";
import pic_1 from '../assets/image1.jpg';
import pic_2 from '../assets/image2.jpg';
import pic_3 from '../assets/image3.jpg';
import pic_4 from '../assets/image4.jpg';

const About = () => {
  return (
    <div>
      
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white border-gray-200 dark:bg-gray-600 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Vision</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Angelaine</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Kenneth</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Mark Ace</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">John Paul</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Justine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div> 
  )
}

export default About

// <div>
//       <section className='missionVisionSection'>
//         <h1 className='text-4xl aboutUsH1'>ABOUT US</h1>
//         <section className="bg-custom-color-2 missionSection">
//           <h1 className='missionH1'>MISSION</h1>
//           <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit missionParagraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quibusdam atque iusto, laborum hic reprehenderit nostrum temporibus, deleniti vitae ab sint maxime consequatur, recusandae iure nisi exercitationem quam cupiditate magni tempore voluptates? Veritatis blanditiis illum iure natus. Expedita alias consequuntur quisquam rerum perspiciatis accusantium, cum inventore officia ex quae. Rem.</p>
//         </section>

//         <section className='bg-custom-color-2 visionSection'>
//           <h1 className='visionH1'>VISION</h1>
//           <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit visionParagraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quibusdam atque iusto, laborum hic reprehenderit nostrum temporibus, deleniti vitae ab sint maxime consequatur, recusandae iure nisi exercitationem quam cupiditate magni tempore voluptates? Veritatis blanditiis illum iure natus. Expedita alias consequuntur quisquam rerum perspiciatis accusantium, cum inventore officia ex quae. Rem.</p>
//         </section>
//       </section>

//       {/* paul */}

//       <section className='aboutDevsSection'>
//         <h1 className='headingDevSec'>About the Developers</h1>

//         <div className='allDevsContainer'>
//           <div className='person-container'>
//             <img className='pics' src={pic_1} alt=''></img>
//             <form className='person1'>
//               <p>John Paul Anicete<br></br>pauljohnanicete506@gmail.com <br></br> +(63) 9183429388</p>
//             </form>
//           </div>

//           <div className='person-container'>
//             <img className='pics' src={pic_2} alt=''></img>
//             <form className='person2'>
//               <p> Angelaine Sampang<br></br>sampangangelaine@gmail.com <br></br>Contact information</p>
//             </form>
//           </div>

//           <div className='person-container'>
//             <img className='pics' src={pic_3} alt=''></img>
//             <form className='person3'>
//               <p>Marc Ace gayagas<br></br>Gmail <br></br>Contact information</p>
//             </form>
//           </div>

//           <div className='person-container'>
//             <img className='pics' src={pic_4} alt=''></img>
//             <form className='person4'>
//               <p>Justine Dune Sampang<br></br>Gmail <br></br>Contact information</p>
//             </form>
//           </div>

//           <div className='person-container'>
//             <img className='pics' src={pic_1} alt=''></img>
//             <form className='person5'>
//               <p>Kenneth Manarang<br></br>Gmail <br></br>Contact information</p>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>