import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import picture from "../assets/Artboard_1.png"

function FAQs() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className='h-screen w-full flex'>
      <div>
        <img src={picture} className='w-full'></img>
      </div>
      <div className='w-1/2 mx-8 mt-10'>
        <Accordion open={open === 1} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What is Self-Diagnosis?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Self-diagnosis is a feature that allows users to input their symptoms and receive a potential diagnosis based 
            on those inputs. It serves as a preliminary guide to help users understand what health conditions they might be 
            experiencing.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            How Do I Use Self-Diagnosis?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            You can simply go to our self-diagnosis section and tell us which part of your body is experiencing any 
            discomforts, abnormality, etc. Answer all the field with all due honesty and after submitting, you will get your 
            results shortly and may it serve as a guide on what health condition you are experiencing right now.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Is Your Self-Diagnosis Feature Accurate?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            The purpose of our self-diagnosis feature is to serve as a guide or give the user an accurate guide of what their 
            health condition is. However, it’s accuracy also depends on the user’s inputs. Our tool only computes what’s being 
            inputted by the user. As long as the user is accurate on explaining their condition(s), rest assured that we can 
            give them the guide/diagnosis with utmost accuracy possible.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors ${
              open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Can I Rely Solely on Self-Diagnosis?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            While self-diagnosis can provide useful insights, it should not replace professional medical advice. It is always 
            recommended to consult a healthcare professional for a thorough diagnosis and treatment plan.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`border-b-0 transition-colors ${
              open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            How Do I Know If the Self-Diagnosis Is Correct?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            The accuracy of the self-diagnosis largely depends on the precision and honesty of the information provided by the 
            user. The more accurate and detailed your inputs are, the more accurate the diagnosis will be. However, for 
            confirmation, a visit to a healthcare provider is essential.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className={`border-b-0 transition-colors ${
              open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What Should I Do After Receiving a Self-Diagnosis?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
          After receiving a self-diagnosis, it is advised to consult with a healthcare professional to discuss the 
          findings. They can provide a comprehensive examination and recommend appropriate treatment if necessary.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7} className="mb-9 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className={`border-b-0 transition-colors ${
              open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Is My Personal Information Safe?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Yes, we prioritize the privacy and security of your personal information. All data entered into the 
            self-diagnosis tool is encrypted and handled with the utmost confidentiality.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 8} className="rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(8)}
            className={`border-b-0 transition-colors ${
              open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Can I Use Self-Diagnosis for Emergency Situations?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Self-diagnosis is not intended for use in emergency situations. If you are experiencing a medical emergency, 
            please seek immediate assistance by calling emergency services THAT CAN BE ALSO FOUND ON OUR WEBSITE or BY 
            visiting the nearest emergency room.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
