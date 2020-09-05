import styled from 'styled-components';

const StyledHighlights = styled.div`

   h1{
       font-size:21px;
       font-weight:100;
       margin-top:30px;
       font-family: "Averta-Regular";
       color:${props => props.theme.textColor};

   }
   .highlights_inner{
    color:${props => props.theme.textColor};   
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
    text-align: center;
    flex-wrap: wrap;
    flex-direction:row;
    .box_info{
        position:relative;
        background:${props => props.theme.bgSidebar};
        border-radius:20px;
        padding: 20px;
        @media (min-width: 768px){
        margin-left:1%;
        }
        text-align:left;
        font-size:17px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 158px;
        margin-bottom: 20px;
        flex-basis: 30.333333%;
        -webkit-box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);
        -moz-box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);
        box-shadow: -5px 9px 10px -7px rgba(0,0,0,0.10);
        @media (max-width: 991px){
            flex-basis: 48%;
        }
        .type-info{
            color:${props => props.theme.textLightColor};
            font-size:16px;
            position: absolute;
            top: 20px;
            left: 20px;
        }
        .info-text{
            line-height:50px;
        }
        .info-text span{
            font-size:40px;
            font-weight:bold;
            
        }
        .emoticons{
            font-size: 16px;
        }
        .icon-ssw{
            display: inline-block;
            margin-right: 10px;
            background-color: #4d4df3;
            width: 25px;
            height: 25px;
            color: #fff;
            padding:5px;
            border-radius: 50px;
            font-size: 15px;
        }
        .icon{
            margin:10px 0;
        }
        .icon span{
            display:inline-block;
            margin-right: 10px;
            background-color: #f9e241;
            border:2px solid #ffd254;
            width: 30px;
            height: 30px;
            padding:5px;
            color:#fff;
            border-radius: 50px;
            font-size: 15px;

        }
        .sunrise{
            margin-top:30px;
        }
        .icon-h{
            display: inline-block;
            margin-right: 10px;
            background-color: #27a51f;
            border: 2px solid #1d650b;
            width: 30px;
            height: 30px;
            padding: 2px;
            color: #fff;
            border-radius: 50px;
            font-size: 21px;
        }
        .icon-v{
            display: inline-block;
            margin-right: 10px;
            background-color: #8a1fa5;
            border: 2px solid #4c0ba2;
            width: 30px;
            height: 30px;
            padding: 4px;
            color: #fff;
            border-radius: 50px;
            font-size: 18px;
            @media(max-width:480px){
                position: absolute;
                top: 15px;
                right: 8px;
            }
        }
        .result-uv{
            display: inline-block;
            margin-right: 10px;
            background-color: #a5881f;
            border: 2px solid #c5a713;
            width: 30px;
            height: 30px;
            padding: 4px;
            color: #fff;
            border-radius: 50px;
            font-size: 18px;
        

        }
        .icon-p{
            margin-right: 10px;
            background-color: #a51f1f;
            border: 2px solid #a20b0b;
            display: inline-block;
            width: 30px;
            height: 30px;
            padding: 2px;
            color: #fff;
            border-radius: 50px;
            font-size: 21px;
            @media(max-width:480px){
                position: absolute;
                top: 15px;
                right: 8px;
            }
        }
        
    }
    .flex-box{
        margin-top:25px;
    }

   }
`;
export default StyledHighlights;