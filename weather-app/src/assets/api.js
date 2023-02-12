/* MIT License

   Copyright (c) 2020-2022 Bas Milius

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions: */

import clear from './dayWeatherIcons/clear.svg'
import cloudy from './dayWeatherIcons/cloudy.svg'
import fog from './dayWeatherIcons/fog.svg'
import overcast from './dayWeatherIcons/overcast.svg'
import overcastAndLightRain from './dayWeatherIcons/overcastAndLightRain.svg'
import overcastAndLightSnow from './dayWeatherIcons/overcastAndLightSnow.svg'
import overcastAndLightWetSnow from './dayWeatherIcons/overcastAndLightWetSnow.svg'
import overcastAndRain from './dayWeatherIcons/overcastAndRain.svg'
import overcastThunderstormsWithRain from './dayWeatherIcons/overcastThunderstormsWithRain.svg'
import partlyCloudy from './dayWeatherIcons/partlyCloudy.svg'
import partlyCloudyAndLightRain from './dayWeatherIcons/partlyCloudyAndLightRain.svg'
import partlyCloudyAndLightSnow from './dayWeatherIcons/partlyCloudyAndLightWetSnow.svg'
import partlyCloudyAndLightWetSnow from './dayWeatherIcons/partlyCloudyAndLightWetSnow.svg'
import partlyCloudyThunderstormsWithRain from './dayWeatherIcons/partlyCloudyThunderstormsWithRain.svg'
import thinUpperCloud from './dayWeatherIcons/thinUpperCloud.svg'
import partlyCloudyAndShowers from './dayWeatherIcons/partlyCloudyAndShowers.svg'

import clearNight from './nightWeatherIcons/clearNight.svg'
import cloudyNight from './nightWeatherIcons/cloudyNight.svg'
import fogNight from './nightWeatherIcons/fogNight.svg'
import overcastNight from './nightWeatherIcons/overcastNight.svg'
import overcastAndLightRainNight from './nightWeatherIcons/overcastAndLightRainNight.svg'
import overcastAndLightSnowNight from './nightWeatherIcons/overcastAndLightSnowNight.svg'
import overcastAndLightWetSnowNight from './nightWeatherIcons/overcastAndLightWetSnowNight.svg'
import overcastAndRainNight from './nightWeatherIcons/overcastAndRainNight.svg'
import overcastThunderstormsWithRainNight from './nightWeatherIcons/overcastThunderstormsWithRainNight.svg'
import partlyCloudyNight from './nightWeatherIcons/partlyCloudyNight.svg'
import partlyCloudyAndLightRainNight from './nightWeatherIcons/partlyCloudyAndLightRainNight.svg'
import partlyCloudyAndLightSnowNight from './nightWeatherIcons/partlyCloudyAndLightWetSnowNight.svg'
import partlyCloudyAndLightWetSnowNight from './nightWeatherIcons/partlyCloudyAndLightWetSnowNight.svg'
import partlyCloudyThunderstormsWithRainNight from './nightWeatherIcons/partlyCloudyThunderstormsWithRainNight.svg'
import thinUpperCloudNight from './nightWeatherIcons/thinUpperCloudNight.svg'
import partlyCloudyAndShowersNight from './nightWeatherIcons/partlyCloudyAndShowersNight.svg'



export const weatherIconsArray =[
{symbol:'d000' , image:clear , description:'Clear' },
{symbol:'d100' , image:partlyCloudy , description:'Mostly clear' },
{symbol:'d200' , image:partlyCloudy , description: 'Partly cloudy'},
{symbol:'d300' , image:cloudy , description: 'Cloudy' },
{symbol:'d400' , image:overcast , description: 'Overcast'},
{symbol:'d500' , image:thinUpperCloud , description: 'Thin upper cloud'},
{symbol:'d600' , image:fog , description: 'Fog'},
{symbol:'d210' , image:partlyCloudyAndLightRain , description: 'Partly cloudy and light rain'},
{symbol:'d310' , image:partlyCloudyAndLightRain , description: 'Cloudy and light rain'},
{symbol:'d410' , image:overcastAndLightRain , description: 'Overcast and light rain'},
{symbol:'d220' , image:partlyCloudyAndShowers , description: 'Partly cloudy and showers'},
{symbol:'d320' , image:partlyCloudyAndShowers , description: 'Cloudy and showers'},
{symbol:'d420' , image:overcastAndRain , description: 'Overcast and showers'},
{symbol:'d430' , image:overcastAndRain , description: 'Overcast and rain'},
{symbol:'d240' , image:partlyCloudyThunderstormsWithRain , description: 'Partly cloudy, thunderstorms with rain'},
{symbol:'d340' , image:partlyCloudyThunderstormsWithRain , description: 'Cloudy, thunderstorms with rain'},
{symbol:'d440' , image:overcastThunderstormsWithRain , description: 'Overcast, thunderstorms with rain'},
{symbol:'d211' , image:partlyCloudyAndLightWetSnow , description: 'Partly cloudy and light wet snow'},
{symbol:'d311' , image:partlyCloudyAndLightWetSnow , description: 'Cloudy and light wet snow'},
{symbol:'d411' , image:overcastAndLightSnow , description: 'Overcast and light wet snow'},
{symbol:'d221' , image:partlyCloudyAndLightSnow , description: 'Partly cloudy and wet snow showers'},
{symbol:'d321' , image:partlyCloudyAndLightSnow , description: 'Cloudy and wet snow showers'},
{symbol:'d421' , image:overcastAndLightWetSnow , description: 'Overcast and wet snow showers'},
{symbol:'d431' , image:overcastAndLightWetSnow, description: 'Overcast cloudy and wet snow'},
{symbol:'d212' , image:partlyCloudyAndLightSnow , description: 'Partly cloudy and light snow'},
{symbol:'d312' , image:partlyCloudyAndLightSnow , description: 'Cloudy and light snow'},
{symbol:'d412' , image:overcastAndLightSnow , description: 'Overcast and light snow'},
{symbol:'d222'  , image:partlyCloudyAndLightSnow , description: 'Partly cloudy and snow showers'},
{symbol:'d322' , image:partlyCloudyAndLightSnow , description: 'Cloudy and snow showers'},
{symbol:'d422' , image:overcastAndLightSnow , description: 'Overcast and snow showers'},
{symbol:'d432' , image:overcastAndLightSnow , description: 'Overcast and snow'},


{symbol:'n000' , image:clearNight , description:'Clear' },
{symbol:'n100' , image:partlyCloudyNight , description:'Mostly clear' },
{symbol:'n200' , image:partlyCloudyNight , description: 'Partly cloudy'},
{symbol:'n300' , image:cloudyNight , description: 'Cloudy' },
{symbol:'n400' , image:overcastNight , description: 'Overcast'},
{symbol:'n500' , image:thinUpperCloudNight , description: 'Thin upper cloud'},
{symbol:'n600' , image:fogNight , description: 'Fog'},
{symbol:'n210' , image:partlyCloudyAndLightRainNight , description: 'Partly cloudy and light rain'},
{symbol:'n310' , image:partlyCloudyAndLightRainNight , description: 'Cloudy and light rain'},
{symbol:'n410' , image:overcastAndLightRainNight , description: 'Overcast and light rain'},
{symbol:'n220' , image:partlyCloudyAndShowersNight , description: 'Partly cloudy and showers'},
{symbol:'n320' , image:partlyCloudyAndShowersNight , description: 'Cloudy and showers'},
{symbol:'n420' , image:overcastAndRainNight , description: 'Overcast and showers'},
{symbol:'n430' , image:overcastAndRainNight , description: 'Overcast and rain'},
{symbol:'n240' , image:partlyCloudyThunderstormsWithRainNight , description: 'Partly cloudy, thunderstorms with rain'},
{symbol:'n340' , image:partlyCloudyThunderstormsWithRainNight , description: 'Cloudy, thunderstorms with rain'},
{symbol:'n440' , image:overcastThunderstormsWithRainNight , description: 'Overcast, thunderstorms with rain'},
{symbol:'n211' , image:partlyCloudyAndLightWetSnowNight , description: 'Partly cloudy and light wet snow'},
{symbol:'n311' , image:partlyCloudyAndLightWetSnowNight , description: 'Cloudy and light wet snow'},
{symbol:'n411' , image:overcastAndLightSnowNight , description: 'Overcast and light wet snow'},
{symbol:'n221' , image:partlyCloudyAndLightSnowNight , description: 'Partly cloudy and wet snow showers'},
{symbol:'n321' , image:partlyCloudyAndLightSnowNight , description: 'Cloudy and wet snow showers'},
{symbol:'n421' , image:overcastAndLightWetSnowNight , description: 'Overcast and wet snow showers'},
{symbol:'n431' , image:overcastAndLightWetSnowNight, description: 'Overcast cloudy and wet snow'},
{symbol:'n212' , image:partlyCloudyAndLightSnowNight , description: 'Partly cloudy and light snow'},
{symbol:'n312' , image:partlyCloudyAndLightSnowNight , description: 'Cloudy and light snow'},
{symbol:'n412' , image:overcastAndLightSnowNight , description: 'Overcast and light snow'},
{symbol:'n222'  , image:partlyCloudyAndLightSnowNight , description: 'Partly cloudy and snow showers'},
{symbol:'n322' , image:partlyCloudyAndLightSnowNight , description: 'Cloudy and snow showers'},
{symbol:'n422' , image:overcastAndLightSnowNight , description: 'Overcast and snow showers'},
{symbol:'n432' , image:overcastAndLightSnowNight , description: 'Overcast and snow'}

]