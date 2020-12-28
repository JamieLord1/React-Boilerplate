/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useState, useLayoutEffect } from 'react';
import styles from './index.module.css';

type RippleArray = {
	y: number;
	x: number;
	size: number;
}

const useDebouncedRippleCleanUp:Function = (rippleCount: number, duration: number, cleanUpFunction: Function) => {
	useLayoutEffect(() => {
		let bounce: any = null;
		if (rippleCount > 0) {
			clearTimeout(bounce);

			bounce = setTimeout(() => {
				cleanUpFunction();
				clearTimeout(bounce);
			}, duration * 4);
		}

		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUpFunction]);
};

const Ripple:React.FC = () => {
	const [rippleArray, setRippleArray] = useState <Array<RippleArray>>([]);

	useDebouncedRippleCleanUp(rippleArray.length, 850, () => {
		setRippleArray([]);
	});

	const addRipple = (event: any) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size = rippleContainer.width > rippleContainer.height
			? rippleContainer.width
			: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRipple = {
			x,
			y,
			size,
		};

		setRippleArray([...rippleArray, newRipple]);
	};

	return (
		<div role="button" tabIndex={0} className={styles.rippleContainer} onMouseDown={addRipple}>
			{rippleArray.length > 0
		&& 				rippleArray.map((ripple: RippleArray, index: number) => (
			<span
				className={styles.ripple}
				key={`span${index}`}
				style={{
					top: ripple.y,
					left: ripple.x,
					width: ripple.size,
					height: ripple.size,
				}}
			/>
		))}
		</div>
	);
};

export default Ripple;
