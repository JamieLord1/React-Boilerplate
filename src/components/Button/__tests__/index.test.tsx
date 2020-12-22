import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

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
