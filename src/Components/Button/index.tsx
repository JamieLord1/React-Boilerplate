import React from 'react'
import styles from './index.module.css'

interface Props {
	children: string;
}

const Button: React.FC<Props> = ({ children }) => (
	<button className={styles.buttonStyle} type="button">{children}</button>
)

export default Button
