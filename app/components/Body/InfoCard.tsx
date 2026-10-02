import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

interface InfoCardProps{
    title: string;
    subtitle: string;
    imagePath: string;
}

const InfoCard = ({
    title,
    subtitle,
    imagePath
}:InfoCardProps
) => {
  return (
    <Paper sx={{display:'flex', flexDirection:'column', padding:'20px'}}>
        <Box sx={{display:'flex', flexDirection:'row'}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Typography variant='h6' sx={{p:'2'}}>{title}</Typography>
                <Typography sx={{p:'2'}}>{subtitle}</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', flex:'1', alignItems:'center'}} >
            <Image src={imagePath} alt="" width={400} height={250}></Image>
            </Box>
        </Box>
    </Paper>
  )
}

export default InfoCard