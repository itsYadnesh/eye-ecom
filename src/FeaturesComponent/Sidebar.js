import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import titleIcon from "../assets/Rectangle.svg";
import libraryicon from "../assets/Vector.svg"
import staricon from "../assets/Vectora.svg"
import contact from "../assets/contact.svg"
import logout from "../assets/Logout.svg"
import ShowAdd from './ShowAdd';
import { Container } from '@mui/system';
const drawerWidth = 276;

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
    width: `calc(${theme.spacing(7)} + 10px)`,
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

export default function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        if (open === false) {
            setOpen(true);
        }else{
            setOpen(false)
        }
    };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <AppBar open={open} sx={{ backgroundColor: "white" }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                open={open}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                }}
                            >
                                <MenuIcon sx={{ color: "#00CBFF" }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Drawer variant="permanent" open={open} style={{ display: "flex", justifyContent: "space-between" }}>
                    <DrawerHeader style={{ borderColor: "red" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "43px", marginRight: "24px" }}>
                            <img alt="Remy Sharp" src={titleIcon} className={classes.titleimage} />
                            <Typography edge="start" className={classes.title} variant="h5" component="div" sx={{ fontWeight: 900 }}>
                                Eye of Ecom
                            </Typography>
                        </Box>
                        {/* <IconButton onClick={handleDrawerClose}>
                            <MenuIcon sx={{ color: "#00CBFF" }} />
                        </IconButton> */}
                    </DrawerHeader>
                    <Box sx={{ height: "64px", marginTop: "117px", background: "linear-gradient(270deg, rgba(0, 203, 255, 0.5) 0%, rgba(0, 203, 255, 0.03) 100%)", borderRadius: "30px", display: "flex" }}>
                        <img alt="libraryicon" src={libraryicon} className={classes.libraryimg} />
                        <Addlib>
                            <Typography >Adilbrary Database</Typography>
                        </Addlib>
                    </Box>

                    <Box sx={{ marginTop: "6px", height: "64px", backgroundColor: "#FFFFFF", display: "flex" }}>
                        <img alt="staricon" src={staricon} className={classes.libraryimg} />
                        <Addlib>
                            <Typography >Saved Ads</Typography>
                        </Addlib>
                    </Box>

                    <Box sx={{ height: "64px", marginTop: "345px", display: "flex" }}>
                        <img alt="contact support" src={contact} className={classes.libraryimg} />
                        <Addlib>
                            <Typography >Contact Support</Typography>
                        </Addlib>
                    </Box>

                    <Box sx={{ height: "64px", marginTop: "3px", display: "flex" }}>
                        <img alt="Logout" src={logout} className={classes.libraryimg} />
                        <Addlib>
                            <Typography >Log Out</Typography>
                        </Addlib>
                    </Box>
                </Drawer>

                <Box component="main" sx={{ margin: "0%", padding: "0%" }}>
                    {/* <ShowAdd/> */}
                </Box>
            </Box>
            <Container maxWidth="fixed" sx={{ height: '100vh' }} >
                <ShowAdd />
            </Container>
        </>

    );
}

const useStyles = makeStyles(() => ({
    title: {
        background: "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // margin:
    },
    titleimage: {
        height: "37px !important",
        width: "41px !important",
        marginRight: "10px"
    },
    staricon: {
        marginLeft: "20px"
    },
    libraryimg: {
        marginLeft: "20px"
    }
}));

const Addlib = styled('div')(({ theme }) => ({
    margin: "20px 30px",
    fontWeight: 500
}))


