import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';

//include layout
import Header from './layouts/Header';
import Highlights from './layouts/Highlights';
import Sidebar from './layouts/Sidebar';
import Today from './layouts/Today';
import Week from './layouts/Week';
import Container from './layouts/Container';
import { StyledGlobal,StyledDashboard } from '../styles';
import {themeLight, themeDark} from '../constants';

const Dashboard = () =>{
    const [nightMode, setNightMode] = useState(false);
    return(
        <ThemeProvider theme = {nightMode ? themeDark : themeLight} >
        <StyledDashboard>
            <Sidebar />
            <Container>
                <Header />
                <Week />
                {/*<Today /> */}
                <Highlights />
            </Container>
            <StyledGlobal />
        </StyledDashboard>
        </ThemeProvider>
        
    )
}
export default Dashboard;