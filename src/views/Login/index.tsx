/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Wave from '../../assets/wave.svg'

const Login = () => (
	<div style={{
		background: '#ccc', width: '100%', height: '100%', position: 'absolute',
	}}
	>
		<div style={{
			backgroundImage: `url(${Wave})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', width: '100%', height: '100%', position: 'absolute',
		}}
		>

			<div style={{
				display: 'flex', justifyContent: 'center', height: '100%',
			}}
			>
				<form style={{
					display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '500px', alignContent: 'center', padding: 15,
				}}
				>
					<h2 style={{ textAlign: 'center' }}>Login</h2>
					<Input label="Username" onChange={(val: string) => console.log(val)} id="login" type="text" />
					<br />
					<Input label="Password" onChange={(val: string) => console.log(val)} id="password" type="password" />
					<br />
					<Button onClick={() => toast.error('Login failed')}>Login</Button>
				</form>
			</div>
		</div>
	</div>
)

Login.propTypes = {

}

export default Login
