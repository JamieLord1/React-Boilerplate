import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

it('Buttons return correct data', () => {
	const { getByText } = render(<Button>Contact Us</Button>)
	getByText('Contact Us').click()
	getByText('Contact Us')
});
