import React , {useState, useEffect} from 'react'
import '../style/twoHoursCardStyle.css'

const TwoHoursCard = ({description, image, temperature})=>{
const [isHover, setIsHover] = useState(false)
const [coord, setCoord] = useState ({top: 0, left: 0})
const handleMouseHover= (hoverState, event) =>
{
setIsHover(hoverState)
}




return(

<div className='weatherCard'>
<div className='description' id="d"
onMouseEnter={(event) => handleMouseHover(true,event)}
onMouseLeave={(event) => handleMouseHover(false,event)}
>
{description}
    {isHover && <div className= 'showDescription'>{description}</div>}
</div>
<img className='image 'src={image} alt={description} />
<p className = 'temperature'>{temperature}°C</p>
</div>
)
}

export default TwoHoursCard