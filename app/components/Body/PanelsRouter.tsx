"use client"

import { Box } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import PanelRouterButton from './PanelRouterButton'

interface PanelsRouterProps {
  selecionado: string | null;
  onSelect: (path: string) => void;
}

const opcoes = [
  { title: 'Camiseta', subtitle: 'Modelo básico', imagePath: '/AxImages/camisetaTemp.jpg' },
  { title: 'Moletom', subtitle: 'Modelo inverno', imagePath: '/AxImages/moletomTemp.jpg' },
  { title: 'Boné', subtitle: 'Ajustável', imagePath: '/AxImages/regataTemp.jpg' },
]

const PanelsRouter = ({selecionado, onSelect}: PanelsRouterProps) => {
  return (
    <Box sx={{display:'flex', flexDirection: 'column'}}>
        {opcoes.map((opcao)=>
        <PanelRouterButton
        key={opcao.imagePath}
        title={opcao.title}
        subtitle={opcao.subtitle}
        imgPath={opcao.imagePath}
        selectedState={selecionado === opcao.imagePath}
        OnSelected={onSelect}
        >
        </PanelRouterButton>
        )}
    </Box>
  )
}

export default PanelsRouter