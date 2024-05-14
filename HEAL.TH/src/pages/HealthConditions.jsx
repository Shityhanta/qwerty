import React from 'react';
import '../css files/Healthandconditions.css';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const HealthConditions = () => {
  return (
    <div>
      <h1 id='headingHC' className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">Fever (types of fever)</h1>
      <hr id='hr'></hr>
      
      <section className='hcMainContainer'>  
        <div className='hcLeftChildCon'>
          <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">What is Fever?</h2>
          <p>
            A temporary increase in body temperature, often a sign of infection or illness. Symptoms may include sweating, 
            chills, and body aches. While usually harmless, high fevers can indicate a more serious condition. Treatment 
            typically involves rest, hydration, and fever-reducing medications
          </p>
          <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Symptoms</h2>
          <p>Here are the possible symptoms:</p>
          <li>
            list 1
          </li>
          <li>
            list 2
          </li>
          <li>
            list 3
          </li>
          <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Causes</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod optio magni a laborum voluptatibus eveniet ab, voluptates, sapiente unde adipisci 
            necessitatibus soluta obcaecati alias rem officiis, labore minima nam perferendis!</p>
          <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Risk Factors</h2>
          <li>
            list 1
          </li>
          <li>
            list 2
          </li>
          <li>
            list 3
          </li>
          <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Complications</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa sint laboriosam animi!
            Animi molestias perspiciatis repudiandae? Ullam, eius distinctio.</p>
        </div>

        <div className='hcRightChildCon'>
          <div className='selfDiagnosisContainer'>
            <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Try Self Diagnosis</h2>
            <p>Still not sure of what condition you are experiencing? you can try our Self Diagnosis Tool!</p>
            <Link to='/self-diagnosis'>
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded">Self Diagnosis</Button>
            </Link>
          </div>

          <div className='checkHospitalsContainer'>
            <h2 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">Want to see a doctor?</h2>
            <p>Want to see a doctor? Click to button below to choose a hospital and schedule an appointment now.</p>
            <Link to='/hospitals'>
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded">Check our Hospitals</Button>
            </Link>
          </div>

          <div className='preventionContainer'>
            <h3 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-inherit">Prevention</h3>
            <p>There is no vaccine to prevent valley fever.</p>
            <p>If you live in or visit areas where valley fever is common, take common-sense precautions, especially during the dry season following a rainy season when the chance of infection is highest.</p>
            <p>Consider these tips:
              <li>
                Wear a mask.
              </li>
              <li>
                Avoid very dusty areas, such as construction sites.
              </li>
              <li>
                Stay inside during dust storms.
              </li>
              <li>
                Wet the soil before digging in it, or avoiding soil if you're at higher risk of infection.
              </li>
              <li>
                Keep doors and windows tightly closed.
              </li>
              <li>
                Clean skin injuries with soap and water.
              </li>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthConditions;
