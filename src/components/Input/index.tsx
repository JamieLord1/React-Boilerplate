import React, { useEffect, useRef, useState } from 'react'
import { emailRegex } from '../../utils/helpers';
import styles from './index.module.css'

interface Props {
	type?: string;
	onChange: Function
	style?: Object;
	id: string;
	label: string;
	validate?: boolean;
	autoComplete?: string;
}

const validation = (value: string, validate: boolean | undefined, type: string | undefined) => {
	if (validate) {
		switch (type) {
			case 'email':
				if (value.match(emailRegex)) {
					return (true)
				}
				return false
			default:
				return (false)
		}
	}
	return true
}

const Input: React.FC<Props> = ({
	type, style, id, onChange, label, validate, autoComplete,
}) => {
	const [focused, setFocused] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const [valid, setValid] = useState<boolean>(true)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		onChange(e.target.value)
	}

	const init = useRef<boolean>(false)
	useEffect(() => {
		if (init.current) {
			const timeout = setTimeout(() => {
				setValid(validation(value, validate, type))
			}, 300)
			return () => clearTimeout(timeout)
		}
		init.current = true
		return () => clearTimeout()
	}, [value])

	const handleOnBlur = () => {
		setFocused(false)
		setValid(validation(value, validate, type))
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
					!valid && <span className={styles.validation}>{`Please enter a valid ${type}`}</span>
				}
				<input
					style={style}
					id={id}
					type={type}
					value={value}
					onChange={handleOnChange}
					onFocus={() => setFocused(true)}
					onBlur={handleOnBlur}
					autoComplete={autoComplete}
				/>
			</div>
		</div>
	)
}

export default Input
