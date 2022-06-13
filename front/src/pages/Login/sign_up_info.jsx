import React from 'react';
import { Text, InputDivWrap, Input } from './customer_signup_style';

export default function SignUpInfo({ text, name, data, onChangefunc }) {
	return (
		<InputDivWrap>
			<Text>{text}</Text>
			{text === '비밀번호' || text === '비밀번호 확인' ? (
				<Input name={name} type="password" value={data} onChange={onChangefunc} />
			) : (
				<Input name={name} value={data} onChange={onChangefunc} />
			)}
		</InputDivWrap>
	);
}
