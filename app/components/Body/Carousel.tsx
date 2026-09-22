import { Box, Paper, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (  
    <Box sx={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center", height: "600px",position: "relative", bgcolor: "orange", overflow:"hidden"}}>
      <Image
        src="/AxImages/AxCapa.png"
          alt="AX Serigrafia Logo"
          fill
          style={{objectFit : 'cover'}}
        />
    </Box>
  )
}

export default Carousel