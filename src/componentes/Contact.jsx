import {  makeStyles, Paper, Radio,  Typography } from '@material-ui/core'
import lin from '../image/linkedin.png'
import gh from '../image/github.png'
import youtube from '../image/youtube.png'
import React, { useState } from 'react'

const Contact = ({ title, dark, id }) => {
    const classes = useStyles()
    const [value, setValue] = useState("Say Hi")

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoices}>
                        <Typography variant="h5">More info</Typography>
                        <div className={classes.choices}>
                            <span>Email</span>
                            <Radio
                                value="Say Hi"
                                checked={value === 'Say Hi'}
                                color='primary'
                                onChange={handleChange}
                            />
                            <span>Social Networks</span>
                            <Radio
                                value="Get a Quote"
                                checked={value === 'Get a Quote'}
                                color='primary'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {
                        value === "Get a Quote" ? (
                            <>
                                <a href="https://www.linkedin.com/in/dario-ponce/" target='_blank' rel='noopener noreferrer'>
                                    <img className={classes.links} src={lin} alt="linkedin" />
                                    <label className={classes.label}>My LinkedIn profile</label>
                                </a>
                                <a href="https://github.com/DaroPonce21" target='_blank' rel='noopener noreferrer'>
                                    <img className={classes.links} src={gh} alt="GitHub" />
                                    <label className={classes.label}>My Repositories on GitHub</label>
                                </a>
                                <a href="https://www.youtube.com/channel/UCZwJd0XnW0Lj3XRr-AQztNg" target='_blank' rel='noopener noreferrer'>
                                    <img className={classes.links} src={youtube} alt="YouTube" />
                                    <label className={classes.label}>My demos on YouTube</label>
                                </a>
                            </>
                        ) :
                            <form className={classes.form} action="https://formsubmit.co/55590b0b4251a5bcc2e5af51ed9989a1 " method="POST">
                                <input type="text" name="name" required placeholder='Your name' />
                                <input type="email" name="email" required placeholder='email@email.com' />
                                <textarea type='textarea' name='message' rows="10" required placeholder='your mensseger' />
                                <button type="submit">Send</button>
                            </form>
                    }
                </Paper>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: 'center',
        color:'#6C2D2C'

    },
    sectiondark: {
        background: "#2A3132",
        color: '#fff',
    },
    root: {
        marginTop: theme.spacing(4),
        background: '#6C2D2C',
        color: "#F1DCC9",
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: "#F1DCC9",
            color: "#6C2D2C",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4)
        },
        "& button:hover": {
            backgroundColor: "#9F4636",
            color: "#F1DCC9"
        },
        "& a":{
            display:"flex",
            alignItems: "center",
            
            
        },
        "& label":{
            fontSize:"1rem",
            fontWeight: "bold",
            padding:"5px",
        }

    },
    sectioncontent: {
        maxWidth: "90vw",
    },
    titleandchoices: {
        "& h5": {
            marginTop: theme.spacing(1)
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        "& input": {
            marginBottom: theme.spacing(1),
            backgroundColor: "#F1DCC9",
            border: "transparent",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#42313A"
        },
        "& textarea": {
            marginBottom: theme.spacing(1),
            backgroundColor: "#F1DCC9",
            border: "transparent",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#42313A"
        }
    },
    links:{
        minHeight: "3vw",
        maxWidth:"3vw",
        padding: theme.spacing(1),
    },
    label:{
        color:"#F1DCC9",
    },

}))

export default Contact

