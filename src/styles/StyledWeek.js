import styled from 'styled-components';

const StyledWeek = styled.div`
   color:${props => props.theme.textColor};   
   margin-top: 20px;
   .box_info{
       text-align: center;
       display:flex;
       justify-content:center;
       background:${props => props.theme.bgSidebar};
       color:${props => props.theme.textColor};   
       border-radius:20px;
       padding: 15px;
       width: 100%;
       font-size:17px;
       min-height:140px;
       display: flex;
       justify-content: center;
       flex-direction: column;
       -webkit-box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);
        -moz-box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);
        box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);

       .temp_info{
           font-size:18px;
           font-weight:bold;
       }
       img{
            max-width: 80px;
            @media(max-width:480px){
                max-width:120px;
            }
            width:100%;
            margin: 10px auto;
        }
       .light-text{
        color:${props => props.theme.textLightColor};
       }
   
   }
   .swiper-wrapper{
        margin:10px 0px;
    }
`;
export default StyledWeek;