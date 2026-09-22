"use client"
import { Box, Paper, Typography } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import PanelsRouter from './PanelsRouter'
import Image from 'next/image';



const InfoPanels = () => {
  const [selecionado, setSelecionado] = useState<string | null>(null);
  
  return (
<Box sx={{display:'flex', flexDirection:"column", height: "60vh", paddingTop:"3vh"}}>
  <Typography variant='h3'>
    Elementos da serigrafia
  </Typography>
  <Typography>
    Aqui estão alguns elementos da serigrafia
  </Typography>
  <Box 
  sx={{
    display:'flex',
    flexDirection:"row",
    flex:"1",
    paddingTop:'3vh'
    }}>

    <PanelsRouter selecionado={selecionado} onSelect={setSelecionado}></PanelsRouter>

     <Box sx={{ position: 'relative', height: '100vh' }}>
      {selecionado !== null && (
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
          <Image src={selecionado} alt="Selecionado" fill style={{ objectFit: 'cover' }} />
        </Box>
      )}
    </Box>
    </Box>
</Box>
  )
}

export default InfoPanels