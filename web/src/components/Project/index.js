import React from 'react';
import './styles.css';

export default function Project(props){
    return(
        <div className="project-container">
            <a alt={props.title} href={props.github_url} target="_blank">
                <img src={props.image_url} alt={props.title} /> 
            </a>

            {props.active && (
                <div className="project-info">
                    <h1>{props.title}</h1>
                    <h3>{props.description}</h3>
                </div>) 
            }
        </div>
    )
}