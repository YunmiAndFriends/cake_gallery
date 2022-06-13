import React from 'react';
import { Text, InputDivWrap, Input } from './customer_signup_style';

export default function SignUpInfo({ text, name, data, onChangefunc }) {
	return (
		<InputDivWrap>
			<Text>{text}</Text>
			<Input name={name} value={data} onChange={onChangefunc} />
		</InputDivWrap>
	);
}
