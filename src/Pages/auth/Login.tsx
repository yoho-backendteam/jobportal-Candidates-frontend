import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();

	const handleLogin = (e: any) => {
		e.preventDefault();
		navigate('/');
	};

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<form
				onSubmit={handleLogin}
				className='bg-white p-8 rounded shadow max-w-sm w-full space-y-4'
			>
				<h2 className='text-2xl font-bold text-center'>Login</h2>

				<input
					type='email'
					placeholder='Email'
					className='w-full border p-2 rounded'
					required
				/>
				<input
					type='password'
					placeholder='Password'
					className='w-full border p-2 rounded'
					required
				/>

				<button className='bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700'>
					Login
				</button>

				<p className='text-sm text-center'>
					Don't have an account?{' '}
					<Link to='/register' className='text-blue-600 font-semibold'>
						Register
					</Link>
				</p>
			</form>
		</div>
	);
}
