import clearNight from '../Assets/weather-icons/01dClearNight.png'
import clear from '../Assets/weather-icons/01dnclearSkies.png'
import fewClouds from '../Assets/weather-icons/02dn-few-clouds.png'
import nightFewClouds from '../Assets/weather-icons/02d-few-clouds-night.png'
import clouds from '../Assets/weather-icons/03dn-04dn-clouds.png'
import showerRain from '../Assets/weather-icons/09dn-shower-rain.png'
import nightShowerRain from '../Assets/weather-icons/09d-night-shower.png'
import rain from '../Assets/weather-icons/10dn-rain.png'
import nightRain from '../Assets/weather-icons/10d-rain.png'
import storm from '../Assets/weather-icons/11dm-thunder.png'
import snow from '../Assets/weather-icons/13dn-snow.png'
import nightSnow from '../Assets/weather-icons/13d-snow.png'
import mist from '../Assets/weather-icons/50dn-mist.png'
import nightThunder from '../Assets/weather-icons/11d-thunder.png'

type obj = {

    clearSky01dn: string,
    clear01night: string,
    fewClouds02dn: string,
    fewClouds02night: string,
    scatteredClouds03dn: string,
    scatteredClouds03night: string,
    brokenClouds04dn: string,
    brokenClouds04night: string,
    showerRain09dn: string,
    showerRain09night: string,
    rain10dn: string,
    rain10night: string,
    thunderstorm11dn: string,
    thunderstorm11night: string,
    snow13d: string,
    snow13night: string,
    mist50d: string,
  }
  
  
  const newImages: obj = {
  
    clearSky01dn: clear,
    clear01night: clearNight,
    fewClouds02dn: fewClouds,
    fewClouds02night: nightFewClouds,
    scatteredClouds03dn: clouds,
    scatteredClouds03night: nightFewClouds,
    brokenClouds04dn: clouds,
    brokenClouds04night: nightFewClouds,
    showerRain09dn: showerRain, 
    showerRain09night: nightShowerRain, 
    rain10dn: rain,
    rain10night:nightRain,
    thunderstorm11dn: storm,
    thunderstorm11night:nightThunder,
    snow13d: snow,
    snow13night: nightSnow,
    mist50d: mist,
  }
  
  export const newImageMap: Record<string,string>= {
    "01d" : newImages.clearSky01dn,
    "01n": newImages.clear01night,
    "02d": newImages.fewClouds02dn,
    "02n": newImages.fewClouds02night,
    "03d": newImages.scatteredClouds03dn,
    "03n": newImages.scatteredClouds03night,
    "04d":newImages.brokenClouds04dn,
    "04n": newImages.brokenClouds04night,
    "05d": newImages.showerRain09dn,
    "05n": newImages.showerRain09night,
    "10d": newImages.rain10dn,
    "10n": newImages.rain10night,
    "11d": newImages.thunderstorm11dn,
    "11n": newImages.thunderstorm11night,
    "13d": newImages.snow13d,
    "13n": newImages.snow13night,
    "50d": newImages.mist50d,
    "50n": newImages.mist50d}
   

    export const newDay: Array<string> = [
      'Sun',
      'Mon', 
      'Tues',
      'Wed',
      'Thur',
      'Fri',
      'Sat'

    ]