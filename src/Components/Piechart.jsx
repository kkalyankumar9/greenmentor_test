import { Box, Button, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from 'recharts';
import info from "../Assets/moreinfo.svg"
import downlaodlogo from "../Assets/download.svg"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
const PieCharts = () => {
  // Sample data for the pie chart
  const data = [
    { name: 'Supplier-1', co2e: 800 },
    { name: 'Supplier-2', co2e: 420 },
    { name: 'Supplier-3', co2e: 420 },
    { name: 'Supplier-4', co2e: 889 },
    { name: 'Supplier-5', co2e: 1624 },
    { name: 'Supplier-6', co2e: 889 },
  ];

  // Custom colors for each section of the pie chart
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666'];

  return (
    <Flex p="25px" flexDirection={{ base: 'column', md: 'row' }} justifyContent={"space-between"} textAlign={"center"} gap={"55px"}>
      <Box w={"45%"} >
      <Box boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
          <Heading fontSize={"md"} p={"10px"}>  Top 3 Suppliers contributing to Category-1</Heading>
          <HStack textAlign={"center"} justify={"center"}>
            <Text color={"#AF19FF"}> Supplier-1 65%</Text>
            <Text color={"#0088FE"}> Supplier-2 32%</Text>
            <Text color={"#FF8042"}> Supplier-3 15%</Text>
             </HStack>

        </Box>
        <Box boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
      <Box>
      <Heading fontSize="lg" p="25px"  textAlign="left">
        Emissions by Suppliers
      </Heading>
      <Box w={"55%"} >
        <PieChart width={410} height={350}>
          <Pie data={data} dataKey="co2e"  nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={120} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            <Label value="CO2e" position="center" />
          </Pie>
          <Tooltip formatter={(value, name) => [value, name]} />
          <Legend />
        </PieChart>
      </Box>
      </Box>
      </Box>
    </Box>
    <Box w={{ base: '100%', md: '60%' }}  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" p={"10px"}  >
      <Flex justifyContent={"space-between"}>
        <Box display={"flex"}>
          <Heading>Suppliers-wise</Heading>
          <Image src={info}/>
        </Box>
        <Box display={"flex"}>
        <Image src={downlaodlogo}/>
          <Button>download</Button>
      
         
        </Box>
        
      </Flex>
      <TableContainer  >
  <Table variant='simple' >
   
    <Thead>
      <Tr>
        <Th>SUPPLIER</Th>
        <Th>YEAR</Th>
        <Th>EMISSION/REVENUE RATIO</Th>
        <Th>MOM</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Adani</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>24</Td>
        <Td color={"red"}>25%<ArrowUpIcon/></Td>
      </Tr>
      <Tr>
        <Td>Ambani</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>25</Td>
        <Td color={"green"}>27% <ArrowDownIcon/></Td>

      </Tr>
      <Tr>
        <Td>PwC</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>32</Td>
        <Td color={"green"}>24%<ArrowDownIcon/></Td>
        
      </Tr>
      <Tr>
        <Td>Vijaya steels</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>38</Td>
        <Td color={"green"}>28%<ArrowDownIcon/></Td>
        
      </Tr>
      <Tr>
        <Td>Tata</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>37</Td>
        <Td color={"red"}>34%<ArrowUpIcon/></Td>
        
      </Tr>
      <Tr>
        <Td>Visaka Steel</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>45</Td>
        <Td color={"red"}>67%<ArrowUpIcon/></Td>
        
      </Tr>
      <Tr>
        <Td>Alibaba</Td>
        <Td isNumeric>2023</Td>
        <Td isNumeric>58</Td>
        <Td color={"green"}>54%<ArrowDownIcon/></Td>
        
      </Tr>


    </Tbody>
 
  </Table>
</TableContainer>
    </Box>
    </Flex>
  );
};

export default PieCharts;
