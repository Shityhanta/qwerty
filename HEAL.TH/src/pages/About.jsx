import React from 'react'
import "../css files/About.css";
import pic_1 from '../assets/image1.jpg';
import pic_2 from '../assets/image2.jpg';
import pic_3 from '../assets/image3.jpg';
import pic_4 from '../assets/image4.jpg';

const About = () => {
  return (
    <div>
      <section className='missionVisionSection'>
        <h1 className='text-4xl aboutUsH1'>ABOUT US</h1>
        <section className="bg-custom-color-2 missionSection">
          <h1 className='missionH1'>MISSION</h1>
          <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit missionParagraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quibusdam atque iusto, laborum hic reprehenderit nostrum temporibus, deleniti vitae ab sint maxime consequatur, recusandae iure nisi exercitationem quam cupiditate magni tempore voluptates? Veritatis blanditiis illum iure natus. Expedita alias consequuntur quisquam rerum perspiciatis accusantium, cum inventore officia ex quae. Rem.</p>
        </section>

        <section className='bg-custom-color-2 visionSection'>
          <h1 className='visionH1'>VISION</h1>
          <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit visionParagraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quibusdam atque iusto, laborum hic reprehenderit nostrum temporibus, deleniti vitae ab sint maxime consequatur, recusandae iure nisi exercitationem quam cupiditate magni tempore voluptates? Veritatis blanditiis illum iure natus. Expedita alias consequuntur quisquam rerum perspiciatis accusantium, cum inventore officia ex quae. Rem.</p>
        </section>
      </section>

      <section className='About'>
        <h1 className='top'>About the Developers</h1>

        <div className='all'>
          <div className='person-container'>
            <img className='pics' src={pic_1} alt=''></img>
            <form className='person1'>
              <p>John Paul Anicete<br></br>pauljohnanicete506@gmail.com <br></br> +(63) 9183429388</p>
            </form>
          </div>

          <div className='person-container'>
            <img className='pics' src={pic_2} alt=''></img>
            <form className='person2'>
              <p> Angelaine Sampang<br></br>sampangangelaine@gmail.com <br></br>Contact information</p>
            </form>
          </div>

          <div className='person-container'>
            <img className='pics' src={pic_3} alt=''></img>
            <form className='person3'>
              <p>Marc Ace gayagas<br></br>Gmail <br></br>Contact information</p>
            </form>
          </div>

          <div className='person-container'>
            <img className='pics' src={pic_4} alt=''></img>
            <form className='person4'>
              <p>Justine Dune Sampang<br></br>Gmail <br></br>Contact information</p>
            </form>
          </div>

          <div className='person-container'>
            <img className='pics' src={pic_1} alt=''></img>
            <form className='person5'>
              <p>Kenneth Manarang<br></br>Gmail <br></br>Contact information</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About