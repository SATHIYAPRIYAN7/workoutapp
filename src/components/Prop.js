import React from 'react'

const Prop = ({name,color,style1}) => {
    
    const nn={
        color:name
    }

  return (
    <div style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width:"150px",height:"240px",margin:"20px"}}>
        <div style={style1} >
              
        </div>
        <div style={{marginLeft:"8px"}}>
            <h4>{name}</h4>
            <p style={nn}>{color}</p>
        </div>
        
    </div>
  )
}

export default Prop