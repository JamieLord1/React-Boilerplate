import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '..';

afterEach(cleanup)

it('Modal shows the children and a close button', () => {
	// Arrange
	const handleClose = jest.fn()

	// Act
	render(
		<Modal open onClose={handleClose}><div>Hi</div></Modal>,
	)
	// Assert
	expect(screen.getByText('Hi')).toBeTruthy()

	// Act
	userEvent.click(screen.getByText('Close Modal'))

	// Assert
	expect(handleClose).toHaveBeenCalledTimes(1)
});

it('Modal shows the children and closes via overlay', () => {
	// Arrange
	const handleClose = jest.fn()

	// Act
	render(
		<Modal open onClose={handleClose}><div>Hi</div></Modal>,
	)
	// Assert
	expect(screen.getByText('Hi')).toBeTruthy()

	// Act
	userEvent.click(screen.getByTestId('overlay'))

	// Assert
	expect(handleClose).toHaveBeenCalledTimes(1)
});

it('Modal returns null when closed', () => {
	// Arrange
	const handleClose = jest.fn()

	// Act
	render(
		<Modal open={false} onClose={handleClose}><div>Hi</div></Modal>,
	)
})
