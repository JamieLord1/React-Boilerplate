import React, { useState } from 'react'
import styles from './index.module.css'

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
	const [valid, setValid] = useState(true)

	const handleOnChange = (e: any) => {
		setValue(e.target.value)
		onChange(e.target.value)
		setValid(!!e.target.value)
	}

	const handleOnBlur = () => {
		setFocused(false)
		setValid(!!value)
	}

	return (
		<div
			className={`
			${styles.formField}
			${focused ? styles.isFocused : ''}
			${value.length > 0 ? styles.hasValue : ''}
			${valid ? '' : styles.error}
			`}
		>
			<div className={styles.control}>
				<label className={styles.label} htmlFor={id}>{label}</label>
				{
					valid
						? null
						: <span className={styles.validation}>Please enter a valid email address</span>
				}
				<input
					style={style}
					id={id}
					type={type}
					value={value}
					onChange={handleOnChange}
					onFocus={() => setFocused(true)}
					onBlur={handleOnBlur}
				/>
			</div>
		</div>
	)
}

export default Input
