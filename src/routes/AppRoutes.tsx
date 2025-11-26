import { Route } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout';
import Register from '../Pages/auth/Register';
import Jobs from '../Pages/Jobs/Joblist';
import Jobcard from '../Pages/Jobs/Jobcard';
import Applications from '../Pages/Home/Home';
import SignIn from '../Pages/Login/SignIn';

export const appRoutes = (
	<>
		{/* Public Routes */}
		<Route path='/signin' element={<SignIn/>} />
		<Route path='/register' element={<Register />} />

		{/* Protected Routes inside Layout */}
		<Route element={<MainLayout />}>
			<Route path='/' element={<Jobs />} />
			<Route path='/:jobname' element={<Jobcard />} />
			<Route path='/applications' element={<Applications />} />
		</Route>
	</>
);
