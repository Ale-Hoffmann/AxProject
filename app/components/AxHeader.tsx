import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import React from 'react'

const AxHeader = () => {
  return (
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: "black"}}>
          AX Serigrafia
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block', color: "black"} }}>
          <Button color="inherit">Orçamento</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AxHeader