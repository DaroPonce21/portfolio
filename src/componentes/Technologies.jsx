import { makeStyles, Typography } from '@material-ui/core'
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
import scrum from '../image/scrum.png'
import PSQL from '../image/PostgreSQL.png'


const Technologies = () => {

    const classes = useStyles()

    const front = [
        {
            img: html,
            title: "HTML5",
        },

        {
            img: css,
            title: "CSS",
        },
        {
            img: js,
            title: "Javascript ES6",
        },
        {
            img: react,
            title: "React",
        },
        {
            img: redux,
            title: "React Redux",
        },


    ]
    const back = [
        {
            img: node,
            title: "NodeJs",
        },
        {
            img: c,
            title: "C#",
        },
        {
            img: java,
            title: "Java",
        },

    ]
    const dbs = [
        {
            img: sql,
            title: "SQL",
        },
        {
            img: PSQL,
            title: "PostgreSQL",
        },

    ]
    const meto = [
        {
            img: scrum,
            title: "Scrum",
        },
    ]
    return (
        <div className={classes.superdiv}>
            <div className={classes.div1}>
                <Typography variant='h4' color='primary' component='h1' align='center'>Front-End</Typography>
                <div className={classes.tech}>
                    {front.map((item) => (
                         <div>
                         <img
                             className={classes.imgs}
                             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                             alt={item.title}
                             loading="lazy"
                         />
                         <Typography variant='h6' color='primary' component='h1' align='center'>
                             {item.title}
                             </Typography>
                     </div>
                    ))}

                </div>
            </div>
            <div className={classes.div1}>
                <Typography variant='h4' color='primary' component='h1' align='center'>Back-End</Typography>
                <div className={classes.tech}>
                    {back.map((item) => (
                         <div>
                         <img
                             className={classes.imgs}
                             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                             alt={item.title}
                             loading="lazy"
                         />
                         <Typography variant='h6' color='primary' component='h1' align='center'>
                             {item.title}
                             </Typography>
                     </div>
                    ))}
                </div>
            </div>
            <div className={classes.div1}>
                <Typography variant='h4' color='primary' component='h1' align='center'>Data Base</Typography>
                <div className={classes.tech}>
                    {
                        dbs.map((item) => (
                            <div>
                                <img
                                    className={classes.imgs}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <Typography variant='h6' color='primary' component='h1' align='center'>
                                    {item.title}
                                    </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.div1}>
                <Typography variant='h4' color='primary' component='h1' align='center'>Methodologies</Typography>
                <div className={classes.tech}>
                    {meto.map((item) => (
                         <div>
                         <img
                             className={classes.imgs}
                             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                             alt={item.title}
                             loading="lazy"
                         />
                         <Typography variant='h6' color='primary' component='h1' align='center'>
                             {item.title}
                             </Typography>
                     </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    superdiv: {
        marginTop: theme.spacing(10),
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        justifyContent: "center"
    },
    div1: {
        margin: theme.spacing(3),
        backgroundColor: '#6C2D2C',
        padding: "1rem"

    },
    tech: {
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap"
    },
    imgs:
    {
        height: "80px",
        padding: "1rem",
        alignItems:"center"

    },
    title: {
        padding: "0.5rem",
        color: '#F1DCC9',
        fontSize: "1.2rem",
        fontWeight: "bold",
    },

}))
export default Technologies