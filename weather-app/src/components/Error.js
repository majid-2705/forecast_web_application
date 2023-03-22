import React from 'react'
import '../style/errorStyle.css'
let Error =({city})=>{
return(
<>
    <div className="errorContainer">
    {
    city ?
    <h1>Error, "{city}" doesn&#39;t exist</h1> :
    <h1>Error, your location isn&#39;t detectable</h1>

    }

    </div>
</>
)
}

export default Error