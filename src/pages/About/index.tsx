import React from 'react';
import Header from "../../components/Header";
import './style.sass';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="about">
                <h3>Ворожейкина Кристина Алесандровна</h3>
                <ul>
                    <li>React 4/5</li>
                    <li>TypeScript 4/5</li>
                    <li>Css 5/5</li>
                    <li>HTML 5/5</li>
                </ul>
                <a href="https://tomsk.hh.ru/resume/3417cd88ff08cb98b00039ed1f664d69686967">Портфолио</a>
            </div>
        </div>
    );
};

export default About;