import React, { useState } from 'react';
import profile from '../../../assets/image2.jpg';
import "../../../css files/DoctorPage.css";
import { Button } from "@material-tailwind/react";
import { TbLogin2 } from "react-icons/tb";

function DoctorPage() {
  const [sendSMSPU, setShowSendSMSPU] = useState(false);
  const [sendEmailPU, setsendEmailPU] = useState(false);

  const toggleSendSMSPU = () => {
    setShowSendSMSPU(!sendSMSPU);
  };

  const togglesendEmailPU = () => {
    setsendEmailPU(!sendEmailPU);
  };

  return (
    <div>
      <section id='parentContainer'>
        <div id='leftChildCon'>
          {/* contains img, doc name and specialization */}
          <img id='profileImage' src={profile}></img>
          <h1 id='doctor-name-docPage'>Dr. Kwak Kwak</h1>
          <p id='specialization-docPage'>Specialization</p>
        </div>
        <div id='rightChildCon'>
          {/* contains clinic hours, contact info plus buttons */}
          <p id='clinicHoursP-docPage'>Clinic Hours:</p>
          <p id='contactP'>Contact Information</p>
          <input id='input-docPage' type='text' value="09123456789"></input>
          <input id='input-docPage' type='text' value="afgsdfhl@gmail.com"></input>

          <Button onClick={toggleSendSMSPU} id='smsBtn-docPage' className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded ${sendSMSPU ? 'active' : ''}`}>
            Send a SMS
          </Button>
          {sendSMSPU && (
            <div className="smsPopUp-docPage">
              {/* Popup content */}
              <div className='smsContainer-docPage'>
                <button id='closeButton' onClick={toggleSendSMSPU}><TbLogin2 size={25} /></button>
                <h1 id='cfHeader-docPage'>Contact Form</h1>
                <div className='appointmentDiv'>
                  <p>Appointment Type</p>
                  <input placeholder='Enter Appointment Type...'></input>
                </div>
                <input className='messageInput' placeholder='Message Here...'></input>
                <div className='btnsContainer'>
                  {/* <label>Additional Attachments <input type='file'></input></label> */}
                  <button className='AttchBtn'>Additional Attachments</button>
                  <button className='sendBtn'>Send</button>
                </div>
              </div>
                
            </div>
          )}

          <Button onClick={togglesendEmailPU} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded emailBtn ${sendSMSPU ? 'active' : ''}`}>
            Send an Email
          </Button>
            {sendEmailPU && (
              <div className="emailPopUp-docPage">
                {/* Popup content */}
                <div className='emailContainer-docPage'>
                  <button id='closeButton' onClick={togglesendEmailPU}><TbLogin2 size={25} /></button>
                  <h1 id='cfHeader-docPage'>Contact Form</h1>
                  <div className='appointmentDiv'>
                    <p>Appointment Type</p>
                    <input placeholder='Enter Appointment Type...'></input>
                  </div>
                  <input className='messageInput' placeholder='Message Here...'></input>
                  <div className='btnsContainer'>
                    {/* <label>Additional Attachments <input type='file'></input></label> */}
                    <button className='AttchBtn'>Additional Attachments</button>
                    <button className='sendBtn'>Send</button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </section>
    </div>
  )
}

export default DoctorPage

