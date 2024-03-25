import styled from "@emotion/styled";

export const InfoStyles=styled('div')(({theme})=>({
    '.wrapperbox':{
        display:"flex",
        flexWrap:'wrap',
        padding:'8vh 2vw',
        justifyContent:'space-around',
        gap:'5vh 0'
    },
    ".wrapreversebox":{
        display:"flex",
        flexWrap:'wrap-reverse',
        padding:'2vw',
        justifyContent:'space-around',
        gap:'5vh 0'
    },
    '.title':{
        textTransform:'uppercase',
        color:'#387C77',
        fontWeight:550,
        fontSize:'1.5rem'
    },
    '.infotxt':{
        fontSize:'1rem',
        lineHeight:2,
        letterSpacing:.5,
        textAlign:'justify'
    },
    '.infobox':{
        width:'75vh',
        display:'flex',
        flexDirection:'column',
        gap:'5vh'
    },
    '.image':{
        height:'50vh',
        width:'80vh',
    }
}))