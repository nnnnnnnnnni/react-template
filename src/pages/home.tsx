import { FC } from 'react';
import { Link } from "react-router-dom";
const Home: FC = (props) => {
    return <div>
        <div>Home</div>
        <Link to='/about'>about</Link><br/>
        <Link to='/user'>user</Link><br/>
        <Link to='/user/app'>user/app</Link>
    </div>
}
export default Home