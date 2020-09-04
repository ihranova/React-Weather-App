import styled from 'styled-components';

const StyledContainer = styled.div`
    @media (min-width: 991px){
        float:left;
        width:calc(100% - 300px);
    }
    background:${props => props.theme.bgContent};
    padding: 30px;
`;
export default StyledContainer;