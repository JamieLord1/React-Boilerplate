import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '..';

afterEach(cleanup)

it('Checks input returns text', () => {
	// Arrange
	const onChange = jest.fn()

	// Act
	render(
		<Input onChange={onChange} />,
	)

	// Act
	userEvent.type(screen.getByRole('textbox'), 'Hello, World!')

	// Assert
	expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
});
