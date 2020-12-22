/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import './index.css'

interface Props {
	type?: string;
	onChange: Function
	style?: Object;
	id: string;
	label: string;
}
const Input: React.FC<Props> = ({
	type, style, id, onChange, label,
}) => {
	const [focused, setFocused] = useState(false);
	const [value, setValue] = useState('');

	const handleOnChange = (e: any) => {
		setValue(e.target.value)
		onChange(e.target.value)
	}
	return (
		<div
			className={`form-field ${focused ? 'is-focused' : ''} ${
				value.length > 0 ? 'has-value' : ''
			}`}
		>
			<div className="control">
				<label htmlFor={id}>{label}</label>
				<input
					style={style}
					id={id}
					type={type}
					value={value}
					onChange={handleOnChange}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
			</div>
		</div>
	)
}

export default Input
