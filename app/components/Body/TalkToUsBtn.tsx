"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import TalkToUsCard from './InfoPanel/TalkToUsCard'



const TalkToUsBtn = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Box sx={{
      position: 'fixed',
    bottom: 24,      // distância do fundo da tela
    right: 30,       // distância da direita da tela
    zIndex: 1000,
    display:'flex',
    flexDirection:'column',
    alignItems:'end',
    gap:'30px'
    }}>
        <TalkToUsCard cardVisible={visible}></TalkToUsCard>
        <Button variant="outlined" sx={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          bgcolor:visible ?'secondary.main': 'primary.main',
          borderColor:visible ?'primary.main': 'secondary.main',
          borderWidth:'3px',
          borderRadius:'10px',
          transition: 'all 0.5s ease',
          }} onClick={() => setVisible(!visible)}>
           <Typography variant='h6' sx={{color:visible ?'primary.main': 'secondary.main', transition: 'all 0.5s ease'}}>Fale conosco</Typography>
        </Button>
    </Box>
  )
}

export default TalkToUsBtn