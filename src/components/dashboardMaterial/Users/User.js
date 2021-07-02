import React from 'react';
import LayoutDashBoard from '../../Layout/LayoutDashboard';
import RightSide from '../RightSide/Rightside';
import Title from './Title';
import Container from './container/Container';
import ListUsers from './ListUsers';
const User = () =>{
    return(
        <LayoutDashBoard>
            <RightSide>
                <Title/>
                <Container>
                    <ListUsers/>
                </Container>
            </RightSide>
        </LayoutDashBoard>
    )
}

export default React.memo(User);