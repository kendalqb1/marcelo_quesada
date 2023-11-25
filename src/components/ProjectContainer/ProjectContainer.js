import uniqid from 'uniqid'
import PreviewIcon from '@mui/icons-material/Preview';

import './ProjectContainer.css'

 const ProjectContainer = ({project}) => {
    return (
        <div className='project'>
            <h3>{project.name}</h3>

            <p className='project__description'>{project.description}</p>
            {
                project.stack && (
                    <ul className='project__stack'>
                        {
                            project.stack.map((item) => (
                                <li key={uniqid()} className='project__stack-item'>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                project.sourceImg && (
                    <a
                        href={project.sourceImg}
                        aria-label='source code'
                        className='link link--icon'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <PreviewIcon />
                    </a>
                )
            }
        </div>
    )
}

export default ProjectContainer