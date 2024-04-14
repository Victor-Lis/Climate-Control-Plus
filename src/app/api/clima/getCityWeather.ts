type WeatherType = {
    main: {
        temp: number
        humidity: number
    }
}

export async function getCityWeather(city: String): Promise<WeatherType | undefined>{
    let data: WeatherType = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEAN_WEATHER_API_KEY}`).then(res => res.json())

    if(data){
        return data as WeatherType
    }
} 