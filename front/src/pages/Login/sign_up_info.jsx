import React from 'react';
import { Text, InputDivWrap, Input } from './customer_signup_style';

export default function SignUpInfo({ text }) {
	return (
		<InputDivWrap>
			<Text>{text}</Text>
			<Input />
		</InputDivWrap>
	);
}
