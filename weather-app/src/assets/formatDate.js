export const formatDate = (apiDate, format)=>{
   if(apiDate)
   {

      let year = apiDate.slice(0, 4)
      let month = apiDate.slice(5, 7)-1
      let day = apiDate.slice(8,10)
      let hours =apiDate.slice(11, 13)
      let minutes =  apiDate.slice(14, 16)
      let date = new Date(year, month, day, hours, minutes);
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let months = ["January", "February", "March", "April", "May", "Juin", "July", "August", "September", "October", "November", "December"]
      let today= days[date.getDay()];

        switch(true)
        {
        case format == 'dayAndTime':
            return `${today}, ${hours}:${minutes}`
        case format == "date":
            return ("0"+date.getDate()).slice(-2)
                   + "/"+("0"+(date.getMonth()+1)).slice(-2)
                   + "/"+date.getFullYear()
        case format == 'standardDate':

            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        default:
        return "No available date"
        }

   }

}