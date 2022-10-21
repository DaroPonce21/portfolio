import { makeStyles, Paper, Typography } from '@material-ui/core'
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import React from 'react'
import c from '../image/C.jpg'
import css from '../image/css.jpg'
import html from '../image/html.jpg'
import java from '../image/java.jpg'
import js from '../image/JS.jpg'
import node from '../image/nodejs.jpg'
import react from '../image/react.jpg'
import redux from '../image/redux.jpg'
import sql from '../image/sql.jpg'
import StarRating from './StarRating'


const Technologies = () => {
    const classes = useStyles()
    const skills = [
        {
            year: "2022",
            src: js,
            title: "Javascript ES6",
            stars: '4',
        },
        {
            year: "2022",
            src: node,
            title: "NodeJs",
            stars: '4',
        },
        {
            year: "2022",
            src: react,
            title: "React",
            stars: '4',
        },
        {
            year: "2022",
            src: redux,
            title: "React Redux",
            stars: '4',
        },
        {
            year: "2021",
            src: html,
            title: "HTML5",
            stars: '4',
        },
        {
            year: "2022",
            src: css,
            title: "CSS",
            stars: '3',
        },
        {
            year: "2021",
            src: java,
            title: "Java",
            stars: '2'
        },
        {
            year: "2020",
            src: c,
            title: "C#",
            stars: '2'
        },
        {
            year: "2020",
            src: sql,
            title: "SQL",
            stars: '3'
        },

    ]

    return (

        <Timeline align="left">
            {
                skills.map(({ year, src, title, stars }, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant='h6' color='textSecondary'>
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <img src={src} alt={title} className={classes.customLogo} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={9} className={classes.paper}>
                                <Typography variant='h6' component='h1'>
                                    {title}
                                </Typography>
                                <StarRating stars={stars}/>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    )
}


const useStyles = makeStyles((theme) => ({
    customLogo: {
        width: "80px",
    },
    paper: {
        padding:'6px 16px',
        maxWidth:"200px",
        backgroundColor: "#F1DCC9",
        "& h1":{
            color:'#42313A',
            fontWeight:'bold'

        },
    },

}))

export default Technologies