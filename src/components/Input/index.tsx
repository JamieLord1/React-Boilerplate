import React, { ChangeEvent } from 'react'
import styles from './index.module.css'

interface Props {
	type?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<Props> = ({ type, onChange }) => (
	<div className={styles.container}>
		<input onChange={onChange} className={styles.input} type={type} />
	</div>
)

export default Input
