import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    height: 80vh;
    width:100%;
    span{
        font-size:15px;
        padding-top:15px;
        color:${props => props.theme.textColor};
        font-family: "Averta-Regular";
        font-style:italic;
    }
    .loader{
        border: 5px solid #f3f3f3; /* Light grey */
        border-top: 5px solid ${props => props.theme.textColor};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 0.8s linear infinite;
        margin: 20px auto;
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
    }
`;

export default StyledSpinnerContainer;