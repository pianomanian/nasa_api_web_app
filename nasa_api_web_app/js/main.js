//Use Postman.com to test API's !

document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', hideButtonShowReset)
document.getElementById('reset').addEventListener('click', refreshPage)

function hideButtonShowReset(){
  document.querySelector('button').classList.add("hideDisplay")
  document.getElementById('reset').classList.add("showButton")
  document.getElementById('reset').classList.remove("hideDisplay")
  document.querySelector('h1').classList.add("hideDisplay")
  document.querySelector('input').classList.add("hideDisplay")
}

function refreshPage(){
  window.location.reload();
}



function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.querySelector('img').classList.add("showImage")
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').classList.add("showIframe")
          document.querySelector('iframe').src = data.url
        }else{
          alert('Media not supported - please choose a different date')
        }
       
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

