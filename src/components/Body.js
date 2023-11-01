import React from 'react'

function Body() {
  return (
    <div>

        <img src="https://payh.org/wp-content/uploads/AdobeStock_268325095-scaled.jpeg" style={{width:'100%',height:'450px',objectFit:'cover',marginTop:"18px"}}></img>

        <div style={{backgroundColor:"red",textAlign:"center",color:"white",height:"300px",display:"flex",flexDirection:'column',justifyContent:"center"}}>
            <h1 style={{paddingTop:"40px"}}>Think Health. Think Massage.</h1>
            <p style={{width:"600px",margin:"auto"}}>We are open 9am to 6pm.Monday through saturday.If you woulf like to sechedule an appointment with us,please call us at+91987656765 today!</p>

            <div style={{paddingBottom:"40px"}}>
                <button style={{backgroundColor:"transparent",border:'3px solid white',padding:'7px',color:'white',marginRight:"10px"}}>Learn more about us</button>
                <button style={{backgroundColor:"transparent",border:'3px solid white',padding:'7px',color:'white'}}>Contact us today</button>
            </div>
        </div>

        <div style={{marginTop:"50px",padding:'0px 20px'}}>
            <p style={{color:"red"}}> Family wellness starts with a commitment to a healthy lifestyle. This includes regular exercise, a balanced diet, and maintaining a healthy body weight.Family wellness starts with a commitment to a healthy lifestyle.</p>
            <p style={{margin:"30px 0px"}}>Family members should prioritize their emotional well-being by practicing good communication, managing stress, and supporting each other through life's ups and downs.Family wellness starts with a commitment to a healthy lifestyle.</p>
            <p>Regular check-ups and preventive care are essential for family wellness. This includes vaccinations, screenings, and routine medical examinations to detect and prevent health issues early.</p>
        </div>
        <div style={{border:"1px solid black",margin:"20px 0px"}}></div>

        <div style={{textAlign:"center",margin:"30px 0px"}}>
            <h3 style={{color:"red"}}>Family Wellness Massage Therapy</h3>
            <h4>104,main street suite123,mainland,india<br/>phone:987656788</h4>
        </div>
    </div>
  )
}

export default Body