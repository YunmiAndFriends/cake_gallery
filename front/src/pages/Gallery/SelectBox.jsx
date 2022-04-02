import React from 'react';

const SelectBox = props => {
	return (
		<select>
			{props.option.map(option => (
				<option
					// key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default SelectBox;
