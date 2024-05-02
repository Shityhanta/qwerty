import React from 'react'

import adhd_pic from '../../assets/adhd_pic.png';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function Cards() {
    return (
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={adhd_pic} alt="card"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      );
    }

export default Cards
