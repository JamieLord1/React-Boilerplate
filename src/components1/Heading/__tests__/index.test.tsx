import React from 'react';
import { render } from '@testing-library/react';
import Heading from '..';

it('Buttons return correct data', () => {
	const { getByText } = render(<Heading as="h2" name="Heading" />)
	getByText('Heading')
});
