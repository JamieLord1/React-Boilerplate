import React from 'react'
import styles from './index.module.css'

interface Props {
	children: string;
	onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

const Button: React.FC<Props> = ({ children, onClick }) => (
	<button onClick={onClick} className={styles.buttonStyle} type="button">{children}</button>
)

export default Button
