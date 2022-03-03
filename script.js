$("form").submit(function(e) {
    e.preventDefault()
    let name = $("input[name=city]").val()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=5cdd7030c3a607d6b5e4833354268c7f`).then(res => res.json()).then(data => {
      let temp = data.main.temp;
      let icon = data.weather[0].icon
      let weather = data.weather[0].description
      $("h2").text(`The temperate in ${name} is ${temp}° celcius`)
      $("img").attr("src", `http://openweathermap.org/img/wn/${icon}@4x.png`)
      $("p").text(`The weather in ${name} is ${weather}`)
  })
})