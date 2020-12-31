import React from 'react';
import './styles.css';

export default function Article(props){
    return(
        <a alt={props.title} href={props.article_url} target="_blank">
            <img src={props.image_url} alt={props.title} /> 
        </a>
    )
}