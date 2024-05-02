import React from 'react';
import "../../css files/DoctorList.css";
import dune_pic from '../../../assets/dune.jpg';

function DoctorList() {
  const doctors = [
    {
      name: "Dr. John Doe 1",
      specialization: "Cardiology",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith ",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 3",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 4",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 5",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 6",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 7",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 8",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 9",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 10",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. John Doe 11",
      specialization: "Cardiology",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 12",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 13",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 14",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Jane Smith 15",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    
  ];

  // Functionpn to chunk the array into groups of five
  function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

  // Chunk the doctors array into groups of five
  const chunkedDoctors = chunkArray(doctors, 5);

  return (
    <div>
      <section className='greenCityDoctors'>
        <h1>GREEN CITY MEDICAL CENTER DOCTOR</h1>
        {chunkedDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((doctor, doctorIndex) => (
              <div className='doctor' key={doctorIndex}>
                <img src={doctor.picture} alt={doctor.name} />
                <div className="doctor-details">
                  <h2>{doctor.name}</h2>
                  <p>{doctor.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default DoctorList;
