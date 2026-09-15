'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { newtheme } from './theme';
import AxHeader from './components/AxHeader';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={newtheme}>
      <AxHeader></AxHeader>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}