import React from 'react'
import PersonalText from '../components/index/personalText/PersonalText';
import bioPic from '../images/bioPic.png';

export default function Index() {
    return (
        <div className="pageRow">
            <img className="bioPic" src={bioPic} alt />
            <div className="emptySpace" />
            <div className="card light">
                <PersonalText />
            </div>
            <div className="emptySpace" />
        </div>
    )
}
