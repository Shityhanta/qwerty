import React from 'react';
import "../../css files/DoctorList.css";
import dune_pic from '../../assets/dune.jpg';
import { Link } from 'react-router-dom';

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

  const doctorsRosario = [
    {
      name: "Dr. Dune 1",
      specialization: "Cardiology",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 2",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 3",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 4",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 5",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 6",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 7",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 8",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 9",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Dune 10",
      specialization: "Pediatrics",
      picture: dune_pic,
    }
  ];

  const doctorsPMSH = [
    {
      name: "Dr. Medusa",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. Lexipedia",
      specialization: "Neurosurgeon ",
      picture: dune_pic,
    },
    {
      name: "Dr. 007",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. G.I. Joe",
      specialization: "Head of Trauma",
      picture: dune_pic,
    },
    {
      name: "Dr. Evil Spawn",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Medusa",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. Lexipedia",
      specialization: "Neurosurgeon ",
      picture: dune_pic,
    },
    {
      name: "Dr. 007",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. G.I. Joe",
      specialization: "Head of Trauma",
      picture: dune_pic,
    },
    {
      name: "Dr. Evil Spawn",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
  ]

  const doctorsDiosdado = [
    {
      name: "Dr. Medusa",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. Lexipedia",
      specialization: "Neurosurgeon ",
      picture: dune_pic,
    },
    {
      name: "Dr. 007",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. G.I. Joe",
      specialization: "Head of Trauma",
      picture: dune_pic,
    },
    {
      name: "Dr. Evil Spawn",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
    {
      name: "Dr. Medusa",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. Lexipedia",
      specialization: "Neurosurgeon ",
      picture: dune_pic,
    },
    {
      name: "Dr. 007",
      specialization: "General Surgery",
      picture: dune_pic,
    },
    {
      name: "Dr. G.I. Joe",
      specialization: "Head of Trauma",
      picture: dune_pic,
    },
    {
      name: "Dr. Evil Spawn",
      specialization: "Pediatrics",
      picture: dune_pic,
    },
  ]

  // Function para maging tig 5 lang yung mga nakalitaw sa page
  function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }


  // Chunk the doctors array into groups of five
  const chunkedDoctors = chunkArray(doctors, 5);
  const rosarioDoctors = chunkArray(doctorsRosario, 5);
  const pmshDoctors = chunkArray(doctorsPMSH, 5);
  const diosdadoDoctors = chunkArray(doctorsDiosdado, 5);

  return (
    <div>
      <section className='greenCityDoctors'>
        <h1>GREEN CITY MEDICAL CENTER DOCTOR</h1>
        {chunkedDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((doctor, doctorIndex) => (
              <Link to="/hospitals/doctors/doctor-page" key={doctorIndex}>
                <div className='doctor'>
                  <img src={doctor.picture} alt={doctor.name} />
                  <div className="doctor-details">
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialization}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section id="pmshDoctors" className='pmshDoctors'>
        <h1>PMSH</h1>
        {pmshDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((pmshDoctors, doctorIndex) => (
              <Link to="/hospitals/doctors/doctor-page" key={doctorIndex}>
                <div className='pmshDoctor'>
                  <img src={pmshDoctors.picture} alt={pmshDoctors.name} />
                  <div className="doctor-details">
                    <h2>{pmshDoctors.name}</h2>
                    <p>{pmshDoctors.specialization}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className='rosarioDoctors'>
        <h1>ROSARIO MEDICAL CENTER DOCTORS</h1>
        {rosarioDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((rosarioDoctor, doctorIndex) => (
              <Link to="/hospitals/doctors/doctor-page" key={doctorIndex}>
                <div className='rosarioDoctor'>
                  <img src={rosarioDoctor.picture} alt={rosarioDoctor.name} />
                  <div className="doctor-details">
                    <h2>{rosarioDoctor.name}</h2>
                    <p>{rosarioDoctor.specialization}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className='diosdadoDoctors'>
        <h1>DIOSDADO MACAPAGAL MEMORIAL HOSPITAL DOCTORS</h1>
        {diosdadoDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((diosdadoDoctor, doctorIndex) => (
              <Link to="/hospitals/doctors/doctor-page" key={doctorIndex}>
                <div className='diosdadoDoctor'>
                  <img src={diosdadoDoctor.picture} alt={diosdadoDoctor.name} />
                  <div className="doctor-details">
                    <h2>{diosdadoDoctor.name}</h2>
                    <p>{diosdadoDoctor.specialization}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default DoctorList;
