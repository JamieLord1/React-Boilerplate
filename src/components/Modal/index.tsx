import React, { FC, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.css'

interface Props {
	open: boolean;
	children: any;
	onClose: Function;
}

let modalRoot = document.getElementById('modal') as HTMLElement;
if (!modalRoot) {
	modalRoot = document.createElement('div')
	modalRoot.setAttribute('id', 'modal')
	document.body.appendChild(modalRoot)
}

const Modal: FC<Props> = ({ open, children, onClose }) => {
	if (!open) return null

	const container = useRef(document.createElement('div'))

	const isVisible = (e: any) => {
		if (container.current.contains(e.target)) {
			onClose()
			window.removeEventListener('click', isVisible)
		}
	}

	useEffect(() => {
		window.addEventListener('click', isVisible)
		return () => {
			window.removeEventListener('click', isVisible)
		}
	}, [])

	return ReactDOM.createPortal(
		<div>
			<div data-testid="overlay" ref={container} className={styles.overlay} />
			<div className={styles.modal}>
				<button
					type="button"
					onClick={() => {
						onClose()
						window.removeEventListener('click', isVisible)
					}}
				>
					Close Modal
				</button>
				{children}
			</div>
		</div>,
		modalRoot,
	)
}

export default Modal
