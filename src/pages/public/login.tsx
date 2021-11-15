import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Login: FC = () => {
	const Navigate = useNavigate();
	const location = useLocation();
	return <div>
		login
		<button onClick={() => {
			localStorage.setItem('user', 'ok')
			Navigate(location.state?.from?.pathname ?? '/');
		}}>login</button>
	</div>
};
export default Login