import React from 'react'
import '../style/errorStyle.css'
let Error =({city})=>{
return(
<>
    <div className="errorContainer">
    <h1>Error, "{city}" doesn&#39;t exist</h1>
    </div>
</>
)
}

export default Error