const btn = document.querySelector('button')
const details = document.querySelector('.details')
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const tempC = document.querySelector(".temp")
const iconHolder = document.querySelector('.icon')
const api = 'fabbc03382cd7ff0af9f209fac9d566c'

const input = document.querySelector('#query')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const query = input.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api}&units=metric`
        console.log(url);
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            const temp = data.main.temp
            const place = data.name
            const icon = data.weather[0].icon
            const speed = data.wind.speed
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            tempC.textContent = `${temp}°C`
            name.textContent = `${place}`
            desc.textContent = `${speed}`
            iconHolder.src = iconUrl
            details.style.visibility = "visible"
        })
        .catch((err)=> alert("Enter valid addresss!"))
})