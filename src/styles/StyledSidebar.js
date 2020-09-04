import styled from 'styled-components';

const StyledSidebar = styled.div`
@media (min-width: 991px){
    max-width:300px;
    width:100%;
    float:left;
}
    background:${props => props.theme.bgSidebar};
    padding:30px;
    /*justify-content: center;
    align-items: center;
    display: flex;*/

  
  
    .search_content{
        display:flex;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width:768px){
       
                margin-top:35px;
            
        }

        input{
            padding-left:10px;
            border:0;
            font-size:16px;
            background:transparent;
            color:${props => props.theme.textColor};
            font-family: "AvertaStd-Thin";
            margin-right:10px;
            :focus,:active{
                outline:none;
            }
            ::placeholder{
                color:${props => props.theme.textColor};
                opacity:1;
                font-size:16px;
            }

        }
        .gray-border{
            color:${props => props.theme.textColor};
            border-radius:50px;
            height:30px;
            width:30px;
            padding:5px;
            background:${props => props.theme.bgContent};
            cursor:pointer;
        }
        .search-color{
            color:${props => props.theme.textColor};
        }
    }
.icon_weather{
    margin:30px 0;
}
    
.temperature{
    padding-bottom:30px;
    font-size:75px;
    font-weight: 300;
    color:${props => props.theme.textColor};
    span{
        position: relative;
        top: -17px;
    }
    .degree{
        font-size: 40px;
        padding-left:5px;
        font-weight: 700;
    }
    .unit{
        top: -22px;
        font-size: 35px;
        margin-left:-15px;
        font-weight: 900;
    }
   
}    
.error{
    font-size:16px;
    color:red;
}

.day{
    font-size:18px;
    color:${props => props.theme.textColor};
    font-weight:900;
}
.hours{
    font-size:18px;
    color:${props => props.theme.textLightColor};
    padding-left:5px;
}
hr{
    border-width: 0px;
    border-color: transparent;
    background:${props => props.theme.bgContent};
    height:1.5px;
    width:100%;
    margin:30px 0;
}
.info-weather{
    font-size:14px;
    color:${props => props.theme.textColor};
    line-height:30px;
    font-weight:900;
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span{
            margin-left:10px;
        }
        path{
            stroke:${props => props.theme.textColor};
        }
    }
}
.location{
    margin:15% 0;
    .location_inner{
        position:relative;
        border-radius:20px;
        overflow:hidden;
        height:100px;
        width:100%;
        :before{
            content:'';
            background: rgba(0,0,0,0.35);
            position:absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            height:100%;
            width:100%;
        }
        img{
            object-fit: cover;
            object-position: center -20px;  
        }
        span{
           position:absolute;
           left:50%;
           top:50%;
           transform: translate(-50%,-50%);
           -webkit-transform: translate(-50%,-50%);
           -moz-transform: translate(-50%,-50%);
           color:#fff;
           font-size:17px;
           font-family:"Averta-Regular";
           width:100%;
           text-align:center;
           
        }
    }
}
    
`;
export default StyledSidebar;