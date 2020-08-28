
<h1  align="center">Welcome to cloudy 👋</h1>

<img alt="David" src="https://img.shields.io/david/doravantebeto/cloudy?style=plastic">


> A simple weather app that gives information about current day weather based on user location, and also shows weather preview for next seven days.

## PREVIEW
![Main screen preview](https://github.com/doravantebeto/cloudy/blob/master/cloudy.gif?raw=true)
  

## Install

  

```sh
yarn
```
or
```sh
npm install
```

  

## Usage

  

```sh
yarn android
```
or
```sh
npm run android
```

## Important

In way to provide a better experience, i used these two APIs in order to get precisely the user location and fetch the weather data of the current location:
- # [OpenCage Geocoder](https://opencagedata.com/)
- # [OpenWeather](https://openweathermap.org/)
Both APIs can be used by getting a free API key by registering on their website.

To use your API keys, just place them in:
`
src\config\api.ts
`

And the file must be like:
```sh
const  weatherKey  =  'OpenWeather API Key';
const  geolocationKey  =  'OpenCage Geocode API Key';
export {weatherKey, geolocationKey};
```

## Run tests 

```sh
yarn test
```  

## Author

👤 **Roberto Araújo**

  - Github: [@doravantebeto](https://github.com/doravantebeto)

- LinkedIn: [@doravante-beto](https://linkedin.com/in/doravante-beto)
