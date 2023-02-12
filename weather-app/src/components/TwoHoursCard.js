import React from 'react'
import '../style/twoHoursCardStyle.css'

const TwoHoursCard = ({description, image, temperature})=>{


return(

<div className='weatherCard'>
<p className='description'>{description}</p>
<img className='image 'src={image} alt={description} />
<p className = 'temperature'>{temperature}°C</p>
</div>
)
}

export default TwoHoursCard