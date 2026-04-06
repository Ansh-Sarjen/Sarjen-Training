import React from 'react'

function Weather() {
    const [weather, setWeather] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        

    }, [])
    return (
        <div>Weather</div>
        
    )
}

export default Weather