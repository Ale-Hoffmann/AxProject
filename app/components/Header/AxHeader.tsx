import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const AxHeader = () => {
  return (
      <AppBar position="static"  color="secondary" >
      <Toolbar sx={{ color: "secondary.main" }}>
        {/* Menu Icon for Mobile Navigation */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0, display: { sm: 'none' } }} // Hidden on screens desktop sized and larger
        >
        </IconButton>

        {/* Website Title */}
       <Image
          src="/AxImages/AxTemporaryLogo.jpg"
          alt="AX Serigrafia Logo"
          width={58}
          height={58}
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h6" component="div" sx={{flex:'1', color: "black", paddingLeft: "10px"}}>
          AX Serigrafia
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block', color: "black"} }}>
          <Button color="inherit">Simule seu pedido</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AxHeader