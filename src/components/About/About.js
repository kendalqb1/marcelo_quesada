import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from "../../portafolio"
import './About.css'

const About = () => {
    const { name, role, description, resume, social } = about;
    const { github, linkedin } = social;

    return (
        <div className='about center'>
            {
                name && (
                    <h1>
                        Hola, Soy <span className='about__name'>{name}.</span>
                    </h1>
                )
            }
            {  role && <h2 className='about__role'>{role}.</h2> }
            
            <p className='about__desc'>{description && description}</p>
        
            <div className='about__contact center'>
                {
                    resume && (
                        <a href={resume} download='CVMarceloQuesada'>
                            <span type='button' className='btn btn--outline'>
                                Curriculum
                            </span>
                        </a>
                    )
                }
                {
                    social && (
                        <>
                            {
                                github && (
                                    <a
                                        href={github}
                                        aria-label='github'
                                        className='link link--icon'
                                    >
                                        <GitHubIcon />
                                    </a>
                                )
                            }
                            {
                                linkedin && (
                                    <a
                                        href={linkedin}
                                        aria-label='linkedin'
                                        className='link link--icon'
                                    >
                                        <LinkedInIcon />
                                    </a>
                                )
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default About
