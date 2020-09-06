import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .today-week{
        font-family: "Averta-Regular";
        span{
            cursor:pointer;
            margin-right:20px;
            color:${props => props.theme.textLightColor};
        }
        .active{
            color:${props => props.theme.textColor};
            border-bottom: 1px solid;
            padding-bottom: 5px;
         }
    }
    .temperature{
        display:flex;
        justify-content: space-between;
        max-width:90px;
        width:100%;
        div{
            font-family: "Averta-Regular";
            background:${props => props.theme.bgTemp};
            border-radius:30px;
            width:39px;
            height:39px;
            color:${props => props.theme.bgTempText};
            justify-content: center;
            align-items: center;
            display: flex;
            cursor:pointer;
        }
        .active{
            background:${props => props.theme.bgTempActive};
            color:${props => props.theme.bgTempTextActive};
        }
    }
    .checkbox {
        opacity: 0;
        position: absolute;
    }
    
    .label {
        background-color: #111;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 26px;
        width: 50px;
        margin-right:15px;
        transform: scale(1.5);
    }
    .label .ball {
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        height: 22px;
        width: 22px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }
    
    .checkbox:checked + .label .ball {
        transform: translateX(24px);
    }
    .sun{
        padding-top:2px;
    }
    .moon,.sun{
        color:${props => props.theme.bgIcon};
    }
    .toggle-theme{
        @media(max-width:768px){
            position: absolute;
            top: 30px;
            right: 20px;
        }
    }
`;
export default StyledHeader;