import React from 'react';

//include layouts
import Header from './layouts/Header';
import Highlights from './layouts/Highlights';
import Sidebar from './layouts/Sidebar';
import Today from './layouts/Today';
import Week from './layouts/Week';
import Container from './layouts/Container';

const Dashboard = () =>{
    return(
        <>
            <Sidebar />
            <Container>
                <Header />
                <Week />
                <Today />
                <Highlights />
            </Container>
        </>
        
    )
}
export default Dashboard;