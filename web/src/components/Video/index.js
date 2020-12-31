import React from 'react';
import './styles.css';

export default function Video(props){
    return(
        <a alt={props.title} href={props.video_url} target="_blank">
            <img src={props.image_url} alt={props.title} /> 
        </a>
    )
}