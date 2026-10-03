import { Box, Paper, Slide, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface TalkToUsCardProps{
    cardVisible : boolean;
}

const TalkToUsCard = ({cardVisible}: TalkToUsCardProps) => {
  return (
<Slide direction="left" in={cardVisible} mountOnEnter unmountOnExit>

    <Paper elevation={16} sx={{
        height:'500px',
        width:'300px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius:'12px',
        bgcolor:"primary.main",
        position:'relative'}}>
            
            <Box sx={{
                flex:'1',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'}}>
                <Typography variant='h5' sx={{color:'white'}}> para contatar Ax</Typography>
                <Typography variant='h5' sx={{color:'white', fontWeight:'bold'}}>(51) 98922-4500</Typography>
            </Box>
            <Box sx={{
                flex:'1',
                width:'100%',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                bgcolor:'secondary.main',
                borderRadius:'12px'}}>

                <Paper sx={{display:'flex', flexDirection:'row', flex:'1'}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>textoTeste</Typography>
                        <Typography>AAAA</Typography>
                    </Box>
                </Paper>
            </Box>
    </Paper>
</Slide>
  )
}

export default TalkToUsCard