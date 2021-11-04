import { FC } from 'react';
import styled from 'styled-components';
import { BaseBox } from '../../components';

const HeightBox = styled(BaseBox)`
    height: 100%;
    width: 200px;
    flex: 1;
`;
const User: FC = () => {
    return <HeightBox>user</HeightBox>
}
export default User