import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '..';

describe('renders input with props', () => {
	afterEach(cleanup)
	// Arrange
	const onChange = jest.fn()

	// Act
	render(
		<Input label="Username" id="test" onChange={onChange} />,
	)

	it('Types text into input and checks in returns', () => {
		// Act
		userEvent.type(screen.getByRole('textbox'), 'Hello, World!')

		// Assert
		expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
	});

	it('Tests blur and focus', () => {
		// Act
		render(
			<Input label="Username" id="test" onChange={onChange} />,
		)

		// Act
		screen.getByRole('textbox').focus()

		// Act
		screen.getByRole('textbox').blur()
	});
});
