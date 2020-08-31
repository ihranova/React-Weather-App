import styled from 'styled-components';

const StyledWeek = styled.div`
   display:flex;
   justify-content: space-between;
   margin-top: 41px;
   text-align: center;
   .box_info{
       background:#fff;
       border-radius:20px;
       padding: 15px;
       max-width: 13%;
       width: 100%;
       font-size:17px;
       min-height:120px;
       display: flex;
       justify-content: center;
       flex-direction: column;

       .temp_info{

       }
   }
`;
export default StyledWeek;