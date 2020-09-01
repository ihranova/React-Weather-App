import styled from 'styled-components';

const StyledSpinner = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    height: 100vh;
    span{
        font-size:17px;
        padding-top:20px;
        color:${props => props.theme.textColor};
        font-family: "Averta-Regular";
        font-style:italic;
    }
    .fill{
        fill:${props => props.theme.textColor};
    }
`;

export default StyledSpinner;