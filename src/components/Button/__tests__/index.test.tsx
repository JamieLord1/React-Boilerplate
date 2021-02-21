import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../index';
import Ripple from '../ripple'

it('Buttons return correct data', () => {
	// Arrange
	const handleOnClick = jest.fn()

	// Assert
	const { getByText } = render(<Button onClick={handleOnClick}>Contact Us</Button>)

	// Act
	getByText('Contact Us').click()

	// Assert
	expect(handleOnClick).toHaveBeenCalledTimes(1)
});

it('Create Ripple', () => {
	// Assert
	const { getByLabelText } = render(<Ripple ariaLabel="button" />)

	// Act
	fireEvent.mouseDown(getByLabelText('button'))
});
