import { Box, Button, IconButton, Table, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', bgcolor:'primary.main', width:'100wv', height: '200px', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{flex:'1',padding:'10px', display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',gap:'20px'}}>
            <Image src='/AxImages/AxTemporaryLogo.jpg' alt='' width={48}  height={48}></Image>
            <Typography sx={{color:'white'}}> AxSerigrafia@gmail.com </Typography>
            <Typography sx={{color:'white'}}> Telefone: (51) 98922-4500 </Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <IconButton>
                <Image src='/AxImages/facebook.png' alt='' width={46}  height={46}></Image>
            </IconButton>
            <IconButton>
                <Image src='/AxImages/instagram.png' alt='' width={46}  height={46}></Image>
            </IconButton>
            <IconButton>
                <Image src='/AxImages/whatsapp.png' alt='' width={46}  height={46}></Image>
            </IconButton>
        </Box>
    </Box>
  )
}

export default Footer