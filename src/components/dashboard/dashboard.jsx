import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import GradingIcon from '@mui/icons-material/Grading';
import DashCard from './dashcard';
import DashTable from './dashTable';
import { useNavigate } from 'react-router-dom';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const usenavigate = useNavigate();


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           WEKRAFT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <h1 style={{padding:'1rem 2rem'}}>WEKRAFT</h1>
        <Divider />
        <List>
         
         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <DashboardIcon /> 
             </ListItemIcon>
             <ListItemText primary="DASHBOARD" sx={{ opacity: open ? 1 : 0 }}/>
           </ListItemButton>
         </ListItem>
         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }} onClick={()=>{usenavigate("/products")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <ShoppingCartIcon /> 
             </ListItemIcon>
             <ListItemText primary="PRODUCTION" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <GradingIcon /> 
             </ListItemIcon>
             <ListItemText primary="ORDERING" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/order")}}/>
           </ListItemButton>
         </ListItem>
         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <HelpIcon /> 
             </ListItemIcon>
             <ListItemText primary="DID YOU KNOW" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/messages")}}/>
           </ListItemButton>
         </ListItem>

         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <CloudUploadIcon /> 
             </ListItemIcon>
             <ListItemText primary="UPLOAD" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/upload")}}/>
           </ListItemButton>
         </ListItem>

         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <Diversity1Icon /> 
             </ListItemIcon>
             <ListItemText primary="OUR-TEAM" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/tearm")}}/>
           </ListItemButton>
         </ListItem>

         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <MailIcon/> 
             </ListItemIcon>
             <ListItemText primary="EMAIL MESSAGE" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/message")}}/>
           </ListItemButton>
         </ListItem>


         <ListItem key="ORDERING" disablePadding sx={{ display: 'block' }}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <GroupIcon /> 
             </ListItemIcon>
             <ListItemText primary="CUSTOMERS" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{usenavigate("/customers")}}/>
           </ListItemButton>
         </ListItem>
     </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <DashCard/>
     <DashTable/>
      </Box>
    </Box>
  );
}