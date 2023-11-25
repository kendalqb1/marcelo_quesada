import { Tooltip, Zoom } from '@mui/material';
import uniqid from 'uniqid'
import { skillsWithIMG } from "../../portafolio";
import './Skills.css'

const Skills = () => {
    if (!skillsWithIMG.length) return null;

    return (
        <section className="section skills" id='skills'>
            <h2 className='section__title'>Habilidades</h2>
            <ul className='skills__list'>
                {
                    skillsWithIMG.map((skill) => (
                        <Tooltip 
                            title={skill.name} 
                            key={uniqid()}
                            placement="top" 
                            TransitionComponent={Zoom}
                        >
                            <li
                            key={uniqid()}
                            className='skills__list-item btn btn--plain'
                            >
                                <img src={skill.img} alt={skill.name} className='img__skills' />
                            </li>
                        </ Tooltip>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills;