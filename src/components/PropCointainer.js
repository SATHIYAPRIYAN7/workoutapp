import React from 'react'
import Prop from './Prop'

const PropCointainer = () => {

    
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
        <Prop name="#FF6663" color="PINK" style1={{backgroundColor:"#FF6663",height:"180px",width:"100%"}} />
        <Prop name="#333333" color="GRAY" style1={{backgroundColor:"#333333",height:"180px",width:"100%"}} />
        <Prop name="#000000" color="BLACK" style1={{backgroundColor:"#000000",height:"180px",width:"100%"}} />
        <Prop name="#38BB14" color="GREEN" style1={{backgroundColor:"#38BB14",height:"180px",width:"100%"}} />
        <Prop name="#C90B0B" color="RED" style1={{backgroundColor:"#C90B0B",height:"180px",width:"100%"}} />
        <Prop name="#FF8000" color="ORANGE" style1={{backgroundColor:"#FF8000",height:"180px",width:"100%"}} />
        <Prop name="#FF8000" color="YELLOW" style1={{backgroundColor:"#FF8000",height:"180px",width:"100%"}} />
        <Prop name="#CCCCCC" color="LIGHT GRAY" style1={{backgroundColor:"#CCCCCC",height:"180px",width:"100%"}} />
        <Prop name="#7E41A2" color="PURPLE" style1={{backgroundColor:"#7E41A2",height:"180px",width:"100%"}} />
        <Prop name="#C14911" color="BROWN" style1={{backgroundColor:"#C14911",height:"180px",width:"100%"}} />
        
    </div>
  )
}

export default PropCointainer