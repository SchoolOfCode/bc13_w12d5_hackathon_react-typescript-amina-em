
import clear from '../Assets/weather-icons/01dnclearSkies.png'
import fewClouds from '../Assets/weather-icons/02dn-few-clouds.png'
import clouds from '../Assets/weather-icons/03dn-04dn-clouds.png'
import showerRain from '../Assets/weather-icons/09dn-shower-rain.png'
import rain from '../Assets/weather-icons/10dn-rain.png'
import storm from '../Assets/weather-icons/11dm-thunder.png'
import snow from '../Assets/weather-icons/13dn-snow.png'
import mist from '../Assets/weather-icons/50dn-mist.png'

type obj = {

    clearSky01dn: string,
    fewClouds02dn: string
    scatteredClouds03dn: string,
    brokenClouds04dn: string,
    showerRain09dn: string 
    rain10dn: string,
    thunderstorm11dn: string,
    snow13d: string,
    mist50d: string,
  }
  
  
  const newImages: obj = {
  
    clearSky01dn: clear,
    fewClouds02dn: fewClouds,
    scatteredClouds03dn: clouds,
    brokenClouds04dn: clouds,
    showerRain09dn: showerRain, 
    rain10dn: rain,
    thunderstorm11dn: storm,
    snow13d: snow,
    mist50d: mist,
  }
  
  export const newImageMap: Record<string,string>= {
    "01d" : newImages.clearSky01dn,
    "01n": newImages.clearSky01dn,
    "02d": newImages.fewClouds02dn,
    "02n": newImages.fewClouds02dn,
    "03d": newImages.scatteredClouds03dn,
    "03n": newImages.scatteredClouds03dn,
    "04d":newImages.brokenClouds04dn,
    "04n": newImages.brokenClouds04dn,
    "05d": newImages.showerRain09dn,
    "05n": newImages.showerRain09dn,
    "10d": newImages.rain10dn,
    "10n": newImages.rain10dn,
    "11d": newImages.thunderstorm11dn,
    "11n": newImages.thunderstorm11dn,
    "13d": newImages.snow13d,
    "13n": newImages.snow13d,
    "50d": newImages.mist50d,
    "50n": newImages.mist50d}
   

    export const newDay: Array<string> = [
      'Sunday',
      'Monday', 
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'

    ]