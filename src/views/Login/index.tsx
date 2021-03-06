import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './index.module.css'

const Login = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	return (
		<div className={styles.container}>
			<div className={styles.backgroundImg}>
				<div className={styles.loginContainer}>
					<form className={styles.form}>
						<div style={{
							background: 'white', padding: 15, borderRadius: 15, display: 'flex', flexDirection: 'column', boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.2)',
						}}
						>
							<h2 className={styles.heading}>Login</h2>
							<Input autoComplete="username" label="Username" onChange={(val: string) => setUsername(val)} id="login" type="email" validate />
							<br />
							<Input autoComplete="current-password" label="Password" onChange={(val: string) => setPassword(val)} id="password" type="password" />
							<br />
							<Button onClick={() => toast.error(`Login failed ${username} ${password}`)}>Login</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
