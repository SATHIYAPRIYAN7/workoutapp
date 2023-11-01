import React from 'react'

function header() {
   
  return (
    <div>
        <div>
            <h1 style={{color:"red"}}>Family Wellness</h1>
            <p style={{marginTop:"-13px",fontSize:"15px"}}>MASSAGE THERAPY</p>
        </div>

        <div style={{backgroundColor:"gray",width:"100%",height:"30px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{fontSize:"17px",backgroundColor:"red",maxHeight:'100%',width:"20%",textAlign:"center",padding:"6px 0px",color:'white'}}>Home</p>
            <p style={{fontSize:"17px",backgroundColor:"",height:'100%',width:"20%",textAlign:"center",paddingTop:"8px",color:'white'}}>About</p>
            <p style={{fontSize:"17px",backgroundColor:"",height:'100%',width:"20%",textAlign:"center",paddingTop:"8px",color:'white'}}>Services</p>
            <p style={{fontSize:"17px",backgroundColor:"",height:'100%',width:"20%",textAlign:"center",paddingTop:"8px",color:'white'}}>FAQ</p>
            <p style={{fontSize:"17px",height:'100%',width:"20%",textAlign:"center",paddingTop:"8px",color:'white'}}>Contact</p>
        </div>
    </div>
  )
}

export default header