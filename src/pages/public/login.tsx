import { Button } from '@chakra-ui/button';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Login: FC = () => {
	const Navigate = useNavigate();
	const location = useLocation();
	return <div>
		login
		<Button variant='with-shadow' onClick={() => {
			localStorage.setItem('user', 'ok')
			Navigate(location.state?.from?.pathname ?? '/');
		}}>login</Button>
	</div>
};
export default Login