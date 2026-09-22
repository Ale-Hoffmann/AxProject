import { Box, Divider, Paper, Typography } from '@mui/material'
import { title } from 'process';
import React from 'react'

interface PanelRouterButtonProps{
    title: string;
    subtitle: string;
    imgPath: string;
    selectedState: boolean;
    OnSelected: (imgPath:string) => void;
}

const PanelRouterButton = ({
    title,
    subtitle,
    imgPath,
    selectedState,
    OnSelected,
}: PanelRouterButtonProps) => {
  return (
        <Paper onClick={() => OnSelected(imgPath)} 
        elevation={0}
        sx={{
            paddingLeft:'5px',
            paddingRight: '5px',
            flex: selectedState ? '2' : '1',
            cursor: 'pointer',
            border: 'none',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            transition: 'all 0.5s ease',
            gap:'5px'
        }}>
            <Divider orientation = "vertical"  sx={{
                orientation: 'vertical',
                borderWidth:selectedState ? 2 : 1,
                borderColor: selectedState ? 'primary.light' : '#d3d3d3',
                height: '100%',}}></Divider>
           
            <Box
            sx={{
                 display: 'flex',
            flexDirection: 'column',
            }}
            >
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold' }}>
            {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            {subtitle}
            </Typography>
            </Box>
        </Paper>
  )
}

export default PanelRouterButton