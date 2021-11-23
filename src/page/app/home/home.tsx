import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SidebarComponent from '../../../layouts/Sidebar';
import TopbarComponent from '../../../layouts/Topbar'


const mdTheme = createTheme();

function HomeContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopbarComponent open={open} toggleDrawer={toggleDrawer}/>
        <SidebarComponent open={open} toggleDrawer={toggleDrawer}/>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <h3>Micro view</h3>
              </Grid>

              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <h3>Hub Level</h3>
              </Grid>

              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <h3>Reports</h3>
              </Grid>

              <Grid item xs={12} md={2} lg={2}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                }}
                >
                </Paper>
              </Grid>


            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function HomePage() {
  return <HomeContent />;
}