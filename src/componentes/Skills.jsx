import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Technologies from './Technologies'

const Skills = ({ title, dark, id }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Technologies/>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        color:'#6C2D2C'
    },
    sectiondark: {
        background: "#2A3132",
        color: '#fff',
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        marginTop:theme.spacing(3),
        
        "& h4":{
            marginBotton:theme.spacing(6)
        }
    }
}))

export default Skills