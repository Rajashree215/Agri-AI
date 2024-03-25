import styled from "@emotion/styled";

export const ScardStyles=styled('div')(({theme})=>({
    '.title':{
        color:"#5C8D89",
        textAlign:'center',
        fontWeight:'bold'
    },
    '.icon':{
        height:60,
        width:60,
    },
    '.desc':{
        color:'#74B49B'
    },
    '.card':{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        width:'30vh',
        height:'43vh',
        padding:'2vw',
        borderRadius:'1rem',
        boxShadow:'0px 0px 10px #406a5a5c'
    }
}))