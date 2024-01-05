import React from 'react';
import { Box, Flex, Heading, Image, Select, Text } from '@chakra-ui/react';
import info from '../Assets/moreinfo.svg';

const FirstRow = () => {
  return (
    <>

<Flex alignItems="center" justifyContent="center" flexWrap="wrap" mt="20px">
      {/** Purchased Goods and Services */}
      <Box w={{ base: '100%', md: '300px' }} p="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" mb={{ base: '4', md: '0' }}>
        <Flex align="center">
          <Heading size="md" color="#000000CC">
            Purchased Goods and Services
          </Heading>
          <Image src={info} alt="Info Icon" ml={2} />
        </Flex>
        <Text mt={2} fontSize="sm">
          Contribution to Scope3
        </Text>
        <Box display="flex" justifyContent="space-between" textAlign="center" border="1px solid red" p="10px" borderRadius="10px">
          <Text>441510.9 CO2 e</Text>
          <Text color="red">25% YoY</Text>
        </Box>
      </Box>

      {/** Purchased Goods and Services to Revenue Ratio */}
      <Box w={{ base: '100%', md: '300px' }} p="10px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" mb={{ base: '4', md: '0' }} ml={{ base: '0', md: '4' }}>
        <Heading size="md" color="#000000CC">
          Purchased Goods and Services to Revenue Ratio
        </Heading>
        <Image src={info} alt="Info Icon" />
        <Box display="flex" justifyContent="space-between" textAlign="center" border="1px solid orange" p="10px" borderRadius="10px">
          <Text>323586.2 CO2 e</Text>
          <Text color="green">24% YoY</Text>
        </Box>
      </Box>

      {/** Category-1 */}
      <Box w={{ base: '100%', md: '300px' }} p="10px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" mb={{ base: '4', md: '0' }} ml={{ base: '0', md: '4' }}>
        <Flex align="center">
          <Heading size="md" color="#000000CC">
            Category-1
          </Heading>
          <Image src={info} alt="Info Icon" ml={2} />
        </Flex>
        <Text mt={2}>Contribution to Scope3</Text>
        <Box display="flex" justifyContent="space-between" textAlign="center" border="1px solid green" p="10px" borderRadius="10px">
          <Text>32% of Scope3</Text>
          <Text color="red">25% YoY</Text>
        </Box>
      </Box>

      {/** Total Number of Reached Suppliers */}
      <Box
        w={{ base: '100%', md: '156px' }}
        h={{ base: '156px', md: 'auto' }}
        p="20px"
        bgColor="#02AB6C"
        color="#FFFFFF"
        borderRadius="5px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        ml={{ base: '0', md: '4' }}
        mb={{ base: '4', md: '0' }}
      >
        <Text>Total Number of Reached Suppliers</Text>
        <Heading>143</Heading>
      </Box>
    </Flex>
    </>
  );
};

export default FirstRow;
