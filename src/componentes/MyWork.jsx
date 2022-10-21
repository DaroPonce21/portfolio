import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'
import mockData from '../mockData.js'

const MyWork = ({ title, dark, id }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        mockData.map(({ title, image, link, deploy, desc }, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                {
                                    <Card className={classes.card}>
                                        {link === null ?
                                            <>
                                                <Link href={image} target='_blank' rel='noopener noreferrer'>
                                                    <CardMedia
                                                        image={image}
                                                        className={classes.caratula}
                                                        titulo='caratula'
                                                    />
                                                </Link>
                                            </>
                                            :
                                            <ReactPlayer
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                url={link}
                                                controls
                                                loop
                                                width='100%'
                                                height="18vw"
                                            />
                                        }
                                        <CardContent>
                                            <Link href={deploy} className={classes.title} target='_blank' rel='noopener noreferrer'>
                                                {title}
                                            </Link>
                                            <Typography>
                                                {desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                }
                            </Grid>
                        ))
                    }
                </Grid>
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
        padding: theme.spacing(5),

    },
    grid: {
        marginTop: theme.spacing(10),
    },
    card: {
        maxWidth: "80vw",
        minHeight: "30vw",
        margin: theme.spacing(3),
        backgroundColor: '#F1DCC9',

    },
    title: {
        color: '#9F4636',
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    caratula: {
        height: '18vw',
    },
}))



export default MyWork

/*

<CardMedia image={image} className={classes.caratula} titulo='caratula' />
                                    <CardContent>
                                        <Link href={link} className={classes.title} target='_blank' rel='noopener noreferrer'>
                                            {title}
                                        </Link>
                                    </CardContent>



                                   
                                    */