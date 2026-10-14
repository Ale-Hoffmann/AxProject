'use client'
import { Card, Container, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import NumberField from '../components/NumberField'

const page = () => {
  return (
    <Container sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography variant='h2'> Simule seu pedido </Typography>
        
        <Card sx={{width:'80%', display:'flex', flexDirection:'column'}}>
            <Typography variant='h4'> Simule seu pedido </Typography>
            
            <NumberField
              label="P"
              min={10}
              max={40}
              defaultValue={100}
              size="small"
            />
        </Card>

    </Container>
  )
}

export default page