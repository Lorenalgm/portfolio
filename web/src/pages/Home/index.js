import React from 'react';
import Header from '../../components/Header';
import Project from '../../components/Project';
import Video from '../../components/Video';
import Article from '../../components/Article';
import profile from '../../assets/profile.png';
import './styles.css';

export default function Home(){
    return(
        <div className="home-container">
            <Header />
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Lorena</h1>
                    <h2>Desenvolvedora</h2>
                </div>
                <img src={profile} alt="Lorena Góes Montes" />
            </div>
            <div className="projects">
                <Project title="xxxxx" description="saasda" github_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" />
                <Project title="xxxxx" description="saasda" github_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" />
                <Project title="xxxxx" description="saasda" github_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" />
            </div>
            <div className="videos">
                {/* <Video title="xxxxx" video_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
                {/* <Video title="xxxxx" video_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
                {/* <Video title="xxxxx" video_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
            </div>
            <div className="articles">
                {/* <Project title="xxxxx" article_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
                {/* <Project title="xxxxx" article_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
                {/* <Project title="xxxxx" article_url="https://github.com/Lorenalgm" image_url="https://i.imgur.com/7LVYmDo.png" /> */}
            </div>
        </div>
    )
}