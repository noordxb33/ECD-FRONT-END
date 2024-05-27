import * as React from 'react';
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import DeblurIcon from '@mui/icons-material/Deblur';
import { Toaster } from 'react-hot-toast';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PaletteIcon from '@mui/icons-material/Palette';
import ListItem from '@mui/material/ListItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import { SettingsInputAntennaSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 230;



// when you open the drawer this is used for styling 
const openedMixin = (theme) => ({
  backgroundColor: 'var(--drawer-bg-color)',
  color: 'var(--color) !important',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [`& *`]: {
    color: 'var(--color) !important',
  },
});

// when you close the drawer this is used for styling
const closedMixin = (theme) => ({
  backgroundColor: 'var(--drawer-bg-color)',
  color: `var(--color) !important`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [`& *`]: {
    color: `var(--color) !important`,
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Wrapper component
const PageWrapper = styled('body')(({ theme }) => ({
  background: 'var(--bg-color)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  color: 'var(--color)',
}));

//this is used for the app bar styling 
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background:'var(--headings-color)',
  color: 'var(--color)',
  boxShadow: 'var(--box-shadow)',
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


////style code for the new App Bar and its Components 

const Search = styled('div')(({ theme }) => ({
  color:'var(--desc-color)',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function MiniDrawer(props) {
  const changeRoute=useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openAdmission, setOpenAdmission] = React.useState(false);
  const [finance, setOpenFinance] = React.useState(false);
  const [settings, setSettings] = React.useState(false);

///start block of newly inserted code for app bar
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem  onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem >
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle  />
      </IconButton >
      <p>Profile</p>
    </MenuItem>
  </Menu>
);





// end block of inserted code

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const listItems = [
    {
      text: 'Home',
      icon: <GroupsIcon />,
      onClick:()=>changeRoute('/'),
      state:null,
      nestedItems: [
        // Add more nested items here
      ],
    },
    {
      text: 'Addmission',
      icon: <GroupsIcon />,
      onClick:()=>setOpenAdmission(!openAdmission),
      state:openAdmission,
      nestedItems: [
        { text: 'Add', icon: <MailIcon  />,onClick:()=>changeRoute('/Add-Admission')},
        { text: 'List', icon: <MailIcon />}
        // Add more nested items here
      ],
    },
    {
      text: 'Finance',
      icon: <InboxIcon />,
      onClick:()=>setOpenFinance(!finance),
      state:finance,
      nestedItems: [
        { text: 'Pay Fee', icon: <MailIcon />},
        { text: 'List of Fee', icon: <MailIcon />,},
        // Add more nested items here
      ],
    },
    {
      text: 'Accessories',
      icon: <SettingsInputAntennaSharp />,
      onClick:()=>setSettings(!settings),
      state:settings,
      nestedItems: [
        { text: 'Gender', icon: <MailIcon />, onClick:()=>changeRoute('/Gender')},
        { text: 'Year', icon: <MailIcon />, onClick:()=>changeRoute('/Year')},
        { text: 'Month', icon: <MailIcon />, onClick:()=>changeRoute('/Month')},
        { text: 'Occupations', icon: <MailIcon />, onClick:()=>changeRoute('/Occupations')},

        // Add more nested items here
      ],
    },
    // Add more main items here
  ];

  return (
    <PageWrapper>
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
            boxShadow:1,
              marginRight: 5,
              ...(open && { display: 'none' }),
              border:'0.5px solid var(--desc-color)'
            }}
          >
            <MenuIcon 
            sx={{
              color:'var(--desc-color)'
            }}
            
            />
          </IconButton>
          <Typography style={{color:'var(--desc-color)'}} variant="h6" noWrap component="div">
            ECD MIS
          </Typography>
          {/* search Bar */}
          <Search sx={{
            boxShadow:1,
            border:'0.5px solid var(--desc-color)'
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton 
          sx={{
            boxShadow:1,
            border:'1px solid var(--desc-color)',
            marginRight: 0.5,

          }}
          size="large" onClick={()=>document.body.setAttribute("data-theme", "sharp-theme")} color="inherit">
              
              <DeblurIcon 
              sx={{
                color:'var(--desc-color)',
              }}
              />
          </IconButton>
          <IconButton 
          sx={{
            boxShadow:1,
            border:'1px solid var(--desc-color)',
            marginRight: 0.5,

          }}
          size="large" onClick={()=>document.body.setAttribute("data-theme", "dark-theme")} color="inherit">
              <NightlightIcon         
              sx={{
                color:'var(--desc-color)',
              }}
              />
          </IconButton>
          <IconButton
              sx={{
                boxShadow:1,
                border:'1px solid var(--desc-color)',
                marginRight: 5,

              }}
          size="large" onClick={()=>document.body.setAttribute("data-theme", "sea-theme")} color="inherit">
                <LightModeIcon     
              sx={{
                color:'var(--desc-color)',
              }}
                />
            </IconButton>
            <IconButton
             sx={{
              boxShadow:1,
              border:'1px solid var(--desc-color)',
              marginRight: 0.5,

            }}
            size="large" aria-label="show 4 new mails" color="inherit">
              <Badge 
              sx={{
                color:'var(--desc-color)'
              }}
              badgeContent={4} color="error">
                <MailIcon sx={{
                  color:'var(--desc-color)'
                }} />
              </Badge>
            </IconButton>
            <IconButton
                sx={{
                  boxShadow:1,
                  border:'1px solid var(--desc-color)',
                  marginRight: 0.5,

                }}

            >
              <Badge
            sx={{
              color:'var(--desc-color)'
            }}
              badgeContent={17} color="error">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton
                sx={{
                  boxShadow:1,
                  border:'1px solid var(--desc-color)'
                }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle
                sx={{
                  color:'var(--desc-color)',
                }}            

              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon   sx={{
                  color:'var(--desc-color)',
                }}            
                />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer 
      sx={{
        boxShadow:4,
      }}
      
      variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color:'var(--desc-color)'}} /> : <ChevronLeftIcon sx={{color:'var(--desc-color)'}} />}
          </IconButton>
        </DrawerHeader>


              {/* /// our List Start at here.... */}
          <List>
            {listItems.map((item, index) => (
            <>
          <Divider />

        <ListItemButton sx={{color:'var(--desc-color)'}} key={index} onClick={item.onClick}>
                <ListItemIcon sx={{color:'var(--desc-dolor)'}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.state===null ? null :item.state ? <ExpandLess  sx={{color:'var(--desc-color)'}}/> : <ExpandMore  sx={{color:'var(--desc-color)'}}/>}
        </ListItemButton>


              <Collapse in={item.state} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/*             Nested List will be here */}
                  {item.nestedItems.length>0 ? item.nestedItems.map((nestedItem, nestedIndex) => (
                    <ListItemButton sx={{color:'var(--desc-color)'}} onClick={nestedItem.onClick}  key={nestedIndex} sx={{ pl: 4 }} >
                      <ListItemIcon sx={{color:'var(--desc-color)'}}> {nestedItem.icon}</ListItemIcon>
                      <ListItemText primary={nestedItem.text} />
                    </ListItemButton>
                  ))
                  :null}
                </List>
              </Collapse>
              </>
          ))}
        </List>

      </Drawer>
      <Box component="main" 
      sx={{ flexGrow: 1, p: 3,
        height:'100vh',
        background:'var(--bg-color)',
       }}>
        <DrawerHeader />
          {props.pageContent}
      </Box>
      <Toaster />

    </Box>

    </PageWrapper>
    
  );
}






