import React from 'react'

export default function PersonalText() {
    return (
        <React.Fragment>
            <h4 className="greeting">Hello everybody, my name is</h4>
                <h1 className="brand name"><strong>James Stacy</strong></h1>
            <h4 className="title">Junior Full Stack Web Developer</h4>
            <hr />
            <p>I am a Full Stack Web Developer with a background in Weighing and Measurement and a life-long dedication to solving problems. I have been recognized as effective at solving problems based on customer or client needs, and being able to adapt to unfamiliar situations. I am also well known for my quick wit, attention to detail, and decisive leadership as a Project Manager in several small projects.
            </p>
            <ul className="list info" >
                <h3>Contact and Location Info:</h3>
                <li>
                    <i className="fas fa-home" /> Southern California
                </li>
                <li>
                    <i className="fas fa-phone" /> 1(951) 805-3811
                </li>
                <li>
                    <i className="fas fa-envelope" /> <a href ="mailto:jamesmichaelstacy@gmail.com">JamesMichaelStacy@gmail.com</a>
                </li>
                </ul>
                <ul className="list social">
                <h3>Professional Social Media:</h3>
                <li>
                    <i className="fab fa-facebook" /> <a href="https://www.facebook.com/jmswebdesigns/">Facebook</a>
                </li>
                <li>
                    <i className="fab fa-github" /> <a href="https://github.com/SirHexxus">Github</a>
                </li>
                <li>
                    <i className="fab fa-linkedin" /> <a href="https://www.linkedin.com/in/james-m-stacy">LinkedIn</a>
                </li>
            </ul>
        </React.Fragment>
    )
}
