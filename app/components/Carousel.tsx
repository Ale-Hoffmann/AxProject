import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Carousel = () => {
  return (  
    <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height: "500px"}}>
    <Paper elevation={3} sx={{height: "175px",width: "300px"}}>
        <Typography variant='h3' sx={{textAlign: "center"}}>
            First Panel
        </Typography>
    </Paper>
    </Box>
  )
}

export default Carousel