import { Route } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout';
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';
import Jobs from '../Pages/Jobs/Joblist';
import Jobcard from '../Pages/Jobs/Jobcard';
import Applications from '../Pages/Home/Home';

export const appRoutes = (
	<>
		{/* Public Routes */}
		<Route path='/login' element={<Login />} />
		<Route path='/register' element={<Register />} />

		{/* Protected Routes inside Layout */}
		<Route element={<MainLayout />}>
			<Route path='/' element={<Jobs />} />
			<Route path='/:jobname' element={<Jobcard />} />
			<Route path='/applications' element={<Applications />} />
		</Route>
	</>
);
