import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
	const navigate = useNavigate();

	const handleRegister = (e: any) => {
		e.preventDefault();
		navigate('/login');
	};

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<form
				onSubmit={handleRegister}
				className='bg-white p-8 rounded shadow max-w-sm w-full space-y-4'
			>
				<h2 className='text-2xl font-bold text-center'>Register</h2>

				<input
					type='text'
					placeholder='Full Name'
					className='w-full border p-2 rounded'
					required
				/>
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
					Register
				</button>

				<p className='text-sm text-center'>
					Already have an account?{' '}
					<Link to='/login' className='text-blue-600 font-semibold'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
