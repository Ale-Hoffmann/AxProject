import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const TalkToUsCard = () => {
  return (
    <Paper sx={{
        height:'500px',
        width:'300px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius:'35px',
        bgcolor:"primary.main"}}>

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
                bgcolor:'secondary.main'}}>

                <Paper sx={{display:'flex', flexDirection:'row', flex:'1'}}>
                    <Image src="" alt=" " height ={10} width={10}></Image>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>textoTeste</Typography>
                        <Typography>AAAAAAAAAAAAAAAAA</Typography>
                    </Box>
                </Paper>
            </Box>
    </Paper>
  )
}

export default TalkToUsCard