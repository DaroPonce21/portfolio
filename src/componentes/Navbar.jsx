import { AppBar, List, makeStyles, IconButton, Toolbar, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../image/logoreal.png'
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import LaptopChromebookTwoToneIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"



const links = [
    {
        id: 'about',
        text: 'About me',
        icon: <InfoTwoToneIcon fontSize='large'  />
    },
    {
        id: 'skills',
        text: 'Skills',
        icon: <CodeTwoToneIcon fontSize='large' />
    },
    {
        id: 'work',
        text: 'My Work',
        icon: <LaptopChromebookTwoToneIcon fontSize='large' />
    },
    {
        id: 'contact',
        text: 'Contact me',
        icon: <ContactMailTwoToneIcon fontSize='large' />
    },
]

const Navbar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const scrollToTop = () =>{
        scroll.scrollToTop()
    }
    return (
        <>
            <AppBar position='sticky' className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img 
                    src={logo} 
                    className={classes.logo} 
                    alt="Logo" 
                    onClick={scrollToTop}
                    />
                    <List className={classes.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link
                                    key={index}
                                    to={id}
                                    spy={true}
                                    activeClass='active'
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            ))
                        }
                    </List>
                    <IconButton
                        edge='end'
                        className={classes.menuButton}
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='right'
                open={open}
                onClose={() => setOpen(false)}
            >
                <IconButton onClick={() => setOpen(false)} className={classes.cancelIcon}>
                    <CancelIcon fontSize='large' />
                </IconButton>
                <Divider />
                {
                    links.map(({ id, text, icon }, index) => (
                        <Link
                            key={index}
                            className={classes.sidebar}
                            to={id}
                            spy={true}
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //marginLeft:"11rem",
    },
    logo: {
        height: '4rem',
        objectFit: 'contain',
        "&:hover": {
            cursor: "pointer"
        }
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        "& a": {
            color: "#42313A",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#9F4636",
            borderBottom: "3px solid #9F4636",
        },
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#9F4636",
            position: "absolute",
            top: "0.5rem",
            right: 10,
        }
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#42313A",
            fontWeight: "bold",
        },
        "& h5:hover": {
            color: "#9F4636",
            cursor: "pointer"
        }
    },
    cancelIcon: {
        color: '#9F4636',
        position: 'absolute',
        top: 0,
        right: 10,


    }
}))

export default Navbar