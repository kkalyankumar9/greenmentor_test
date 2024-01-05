import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import { Box, Flex } from '@chakra-ui/react'
import FirstRow from './FirstRow'
import PieCharts from './Piechart'
import BarCharts from './BarChart'

const HomePage = () => {
  return (
    < >
    <Flex>
    <Box>
    <SideBar/>
 
    </Box>
    <Box>
    <Navbar/>
    <FirstRow/>
<BarCharts/>
  
    </Box>
    </Flex>
    

       

    </>
  )
}

export default HomePage