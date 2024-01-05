import React from 'react';
import { Box, HStack, Heading,Text } from '@chakra-ui/react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import PieCharts from './Piechart';

const BarCharts = () => {
  const data = [
    {
      "name": "Jan",
      "2023": 200,
      "2022": 250,
    },
    {
      "name": "Feb",
      "2023": 480,
      "2022": 580,
    },
    {
      "name": "Mar",
      "2023": 680,
      "2022": 900,
    },
    {
      "name": "Apr",
      "2023": 240,
      "2022": 270,
    },
    {
      "name": "May",
      "2023": 260,
      "2022": 280,
    },
    {
      "name": "Jun",
      "2023": 770,
      "2022": 710,
    },
    {
      "name": "Jul",
      "2023": 860,
      "2022": 880,
    },
    {
      "name": "Aug",
      "2023": 720,
      "2022": 630,
    },
    {
      "name": "Sep",
      "2023": 310,
      "2022": 490,
    },
    {
      "name": "Oct",
      "2023": 190,
      "2022": 180,
    },
    {
      "name": "Nov",
      "2023": 630,
      "2022": 600,
    },
    {
      "name": "Dec",
      "2023": 330,
      "2022": 220,
    }
  ];

  return (
  
 <Box w={"979px"} h={"458px"}>
    <Heading textAlign={"left"} fontSize={"lg"} p={"10px"}> Emission /Revenue</Heading>
      <ComposedChart width={979} height={458} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
       <Bar dataKey="2023" fill="#8884d8" /> 
       <Text> Emission</Text>
        <Bar dataKey="2022" fill="#82ca9d" />
        <Line type="monotone" dataKey="2023" stroke="#d88a84" />
        <Line type="monotone" dataKey="2022" stroke="#ff7300" />
        
      </ComposedChart>
      <HStack>
      <Text ml={"20px"}>X-axis is co2e</Text>
       <Text>Y-axis is Emmission</Text>
     
      </HStack>
      <PieCharts/>
    </Box>
    
  );
};





export default BarCharts;






                            
