import React, { useState } from 'react'
import { emailRegex } from '../../utils/helpers';
import styles from './index.module.css'

interface Props {
	type?: string;
	onChange: Function
	style?: Object;
	id: string;
	label: string;
	validate?: boolean;
}

const Input: React.FC<Props> = ({
	type, style, id, onChange, label, validate,
}) => {
	const [focused, setFocused] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const [valid, setValid] = useState<boolean>(true)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		onChange(e.target.value)
	}

	const handleOnBlur = () => {
		setFocused(false)

		if (validate) {
			switch (type) {
				case 'email':
					if (value.match(emailRegex)) {
						setValid(true)
					} else {
						setValid(false)
					}
					break;
				default:
					setValid(false)
			}
		}
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
						: <span className={styles.validation}>{`Please enter a valid ${type}`}</span>
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
