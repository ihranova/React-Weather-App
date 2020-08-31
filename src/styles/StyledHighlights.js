import styled from 'styled-components';

const StyledHighlights = styled.div`

   h1{
       font-size:23px;
       margin-top:30px;
   }
   .highlights_inner{
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
    text-align: center;
    .box_info{
        background:#fff;
        border-radius:20px;
        padding: 15px;
        max-width: 32%;
        min-height:32%;
        height:100%;
        width: 100%;
        text-align:left;
        font-size:17px;
        min-height:120px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .type-info{
            color:${props => props.theme.textLightColor};
            font-size:16px;
        }
        .info-text{
            line-height:80px;
        }
        .info-text span{
            font-size:40px;
            font-weight:bold;
            
        }
        .emoticons{
            font-size: 16px;
        }
    }

   }
`;
export default StyledHighlights;