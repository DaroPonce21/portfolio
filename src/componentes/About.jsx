import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import TypeWriterEffect from 'react-typewriter-effect'
import yo from '../image/yo1.jpg'
import pdf from '../image/Dario_Ponce_FullStack_Web.pdf'


const About = ({ title, dark, id }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={yo} className={classes.cardMedia} title='picture' />
                    <CardContent className={classes.cardContent}>
                        <TypeWriterEffect
                            text="Hi, I'm Dario Ponce"
                            textStyle={
                                {
                                    fontSize: "2.5rem",
                                    fontWeight: '700px',
                                    color: '#6C2D2C'
                                }
                            }
                            startDelay={100}
                            cursorColor="#6C2D2C"
                            typeSpeed={100}
                        />
                        <TypeWriterEffect
                            text='and I am a Full Stack Developer'
                            textStyle={
                                {
                                    fontSize: "1.5rem",
                                    fontWeight: '700px',
                                    color: '#9F4636'
                                }
                            }
                            startDelay={2300}
                            cursorColor="#9F4636"
                            typeSpeed={100}
                        />
                        
                        <Typography variant='h6'>   
                        I'm from Argentina Buenos Aires. I graduated as a Full Stack Web Developer at the SoyHenry Bootcamp 
                        </Typography>
                        <Typography variant='h6'>
                        and completed 2 of 3 years of the Systems Analyst degree at the Raul Scalabrini Ortiz Institute, which I have yet to finish due to the covid-19 pandemic. 
                        </Typography>
                        <Typography variant='h6'>
                        I am passionate about technology and programming, I love learning new skills and perfecting the ones I have. I invite you to get to know me a little more
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' className={classes.pdfbutton}>
                            <a href={pdf} download>
                                Download CV
                            </a>

                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",

    },
    sectiondark: {
        background: "#6C2D2C",
        color: '#F1DCC9',
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    cardMedia: {
        width: '250px',
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardContent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(6),
            fontSize:'0.9rem',
            fontWeight:'bold',
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    },
    pdfbutton: {
        position: 'absolute',
        bottom: "5rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "1rem",
            width: "150px",
            height: "80px",
            fontSize: "12px",
            

        },
        backgroundColor: "#6C2D2C",
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#F1DCC9",
        },
        "& a": {
            color: "#F1DCC9",
            textDecoration: "none",
            fontWeight: 900,

        },
        "& a:hover": {
            color: "#6C2D2C"
        },
    },
}))

export default About