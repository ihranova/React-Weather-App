import styled from 'styled-components';

const StyledContainer = styled.div`
    float:left;
    padding-left:300px;
    width:calc(100% - 300px);
    background:${props => props.theme.bgContent};
    padding: 30px;
`;
export default StyledContainer;