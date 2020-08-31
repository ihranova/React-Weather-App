import styled from 'styled-components';

const StyledSidebar = styled.div`
    flex:1;
    max-width:330px;
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
            border-radius:50px;
            height:30px;
            width:30px;
            padding:5px;
            background:${props => props.theme.bgContent};
            cursor:pointer;
        }
    }
    
.temperature{
    padding-bottom:30px;
    font-size:75px;
    font-weight: 300;
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
            background:rgba(0,0,0,0.2);
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