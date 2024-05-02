import React from 'react';
import "../css files/SelfDiag.css";

function SelfDiagnosis() {
  return (
    <div>
        <section className='parentContainer'>
          <div className='childContainer'>
            <h1>SELF DIAGNOSIS</h1>
            <p>
              In self diagnosis, please be sure that the data you provide us is accurate, 
              in order for us to give you proper diagnosis and instructions. Thank you!
            </p>
            <div className='startDiagContainer'>
              <p id='startDiagParagraph'>Start your diagnosis</p>
              <div className='nameAgeContainer'>
                <input id='nameInput' placeholder='Name'></input>
                <input id='ageInput' placeholder='Age'></input>
              </div>
              <div className='sexHistoContainer'>
                <input id='sexInput' placeholder='Sex'></input>
                <input id='historyInput' placeholder='History'></input>
              </div>
              <div>
                <button id='continueBtn'>Continue</button>
              </div>
              <div>
                <button id='otherBtn'>&gt;</button>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default SelfDiagnosis;
