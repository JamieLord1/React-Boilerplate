import React from 'react'
import styles from './index.module.css'
import Ripple from './ripple'

	interface Props {
		children: string;
		onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
	}

const Button: React.FC<Props> = ({ children, onClick }) => (
	<button aria-label={children} onClick={onClick} className={styles.buttonStyle} type="button">
		{children}
		<Ripple ariaLabel={children} />
	</button>
)

export default Button
