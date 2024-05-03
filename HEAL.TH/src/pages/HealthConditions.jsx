import React from 'react';
import '../css files/Healthandconditions.css';

const HealthConditions = () => {
  return (
    <div className='healthandconditions'>
      <h1>Fever (types of fever)</h1>
      <hr />

      <section className='grids'> 
        <form className='fever'>
          <h2>What is fever?</h2>
          <p>Fever is the temporary increase in the body's temperature in response to a disease or illness. 
              A child has a fever when the temperature is at or above one of these levels: 100.4°F (38°C) 
              measured in the bottom (rectally) 99.5°F (37.5°C) measured in the mouth (orally)</p>
        </form>

        <form className='symptoms'> 
          <h2>Symptoms</h2>
            <li>Fever</li>
            <li>Headache</li>
        </form>

        <form className='diagnosis'>
          <h2>Try Self Diagnosis</h2>
          <p>Still not sure of what condition you are experiencing? You can try our Self Diagnosis Tool</p>
          <button className='button'>Self Diagnosis</button>
        </form>

        <form className='doctor'>
          <h2>Want to see a doctor?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. </p>
          <button className='button'>Check our Hospitals</button>
        </form>
        
        <form className='causes'>
          <h2>Causes</h2>
          <p>nynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenye</p>
        </form>

        <form className='risk'> 
          <h2>Risk Factors</h2>
            <li>Fever</li>
            <li>Headache</li>
        </form>

        <form className='complication'>
          <h2>Complications</h2>
          <p>nynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenyenynyenye</p>
        </form>
      
        <form className='prevention'>
          <h2 className='prev'>Prevention</h2>
          <p className='par'>There is no vaccine to prevent valley fever. <br></br><br></br>If you live in or visit areas where valley 
          fever is common, take common-sense precautions, especially during the dry season following a rainy 
          season when the chance of infection is highest. <br></br><br></br>Consider these tips:
            <li>Wear a mask.</li>
            <li>Avoid very dusty areas, such as construction sites.</li>
            <li>Wet the soil before digging in it, or avoiding soil if you're at higher risk of infection.</li>
            <li>Clean skin injuries with soap and water.</li>
          </p>
        </form>
      </section>
    </div>
  );
}

export default HealthConditions;
