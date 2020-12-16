import React from 'react'

interface Props {
	as: React.ElementType;
	name: string;
}

const Heading: React.FC<Props> = ({ as: As, name }) => (
	<As>{name}</As>
)

export default Heading
