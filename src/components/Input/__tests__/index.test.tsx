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
		<Input label="Username" id="test" onChange={onChange} validate />,
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
			<Input label="Username" id="test" onChange={onChange} validate />,
		)

		// Act
		screen.getByRole('textbox').focus()

		// Act
		screen.getByRole('textbox').blur()
	});

	it('Tests blur and focus with email type with valid email address', () => {
		// Act
		render(
			<Input label="Username" id="test" onChange={onChange} validate type="email" />,
		)

		// Act
		userEvent.type(screen.getByRole('textbox'), 'email@google.com')

		// Assert
		expect(screen.getByRole('textbox')).toHaveValue('email@google.com')

		// Act
		screen.getByRole('textbox').focus()

		// Act
		screen.getByRole('textbox').blur()
	});

	it('Tests blur and focus with email type without valid email address', () => {
		// Act
		render(
			<Input label="Username" id="test" onChange={onChange} validate type="email" />,
		)

		// Act
		userEvent.type(screen.getByRole('textbox'), 'email')

		// Assert
		expect(screen.getByRole('textbox')).toHaveValue('email')

		// Act
		screen.getByRole('textbox').focus()

		// Act
		screen.getByRole('textbox').blur()
	});
});
