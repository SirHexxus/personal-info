import React, { Component } from 'react';
import PersonalText from '../components/index/personalText/PersonalText';
import bioPic from '../images/bioPic.png';

export default class About extends Component {
	render() {
		return (
			<div className='pageRow'>
				<img className='bioPic' src={bioPic} alt />
				<PersonalText />
			</div>
		);
	}
}
