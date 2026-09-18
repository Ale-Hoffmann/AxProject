import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const InfoPanels = () => {
  return (
<Box sx={{display:'flex', flexDirection:"row", height: "25vh"}}>

<Paper sx={{flex:"1", p: "30px"}}>
        <Typography variant = "h4" sx={{paddingBottom: "40px"}}>
            Campo de titulo
        </Typography>
        <Typography>
            e aqui vai o texto do campo, coisa boa 
        </Typography>
    </Paper>
    <Box sx={{flex:"2",bgcolor: "black"}}>
        <img src="C:\Users\alexa\OneDrive\Documentos\AxSite\ax-project\public\file.svg" alt="" />
    </Box>
    </Box>
  )
}

export default InfoPanels