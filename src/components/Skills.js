import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ReactComponent as ReactIcon } from 'devicon/icons/react/react-original.svg';
import { ReactComponent as HTMLIcon } from 'devicon/icons/html5/html5-original.svg';
import { ReactComponent as CSSIcon } from 'devicon/icons/css3/css3-original.svg';
import { ReactComponent as JSIcon } from 'devicon/icons/javascript/javascript-original.svg';
import { ReactComponent as BootIcon } from 'devicon/icons/bootstrap/bootstrap-original.svg';
import { ReactComponent as LinuxIcon } from 'devicon/icons/linux/linux-original.svg';
import { ReactComponent as GitIcon } from 'devicon/icons/git/git-original.svg';
import { ReactComponent as JavaIcon } from 'devicon/icons/java/java-original.svg';



import "./Skills.css"

export default function Skills() {
  return (
    <Box>
        <section className='skills' >
            <h2 id='skills' className='skill-title'>Skills</h2>
            <Grid container spacing={4} >
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <ReactIcon/>
                            <div className='tech-item-label'>React</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <HTMLIcon/>
                            <div className='tech-item-label'>HTML</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <CSSIcon/>
                            <div className='tech-item-label'>CSS</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <JSIcon/>
                            <div className='tech-item-label'>JavaScript</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <BootIcon/>
                            <div className='tech-item-label'>BootStrap</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <LinuxIcon/>
                            <div className='tech-item-label'>Linux</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <div className='tech-item'>
                            <GitIcon/>
                            <div className='tech-item-label'>Git</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} >
                        <div className='tech-item'>
                            <JavaIcon/>
                            <div className='tech-item-label'>Java</div>
                        </div>
                    </Grid>
            </Grid>
        </section>
    </Box>
  )
}
