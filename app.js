//* Used https://www.jokeapi.dev/ for API database
//* Base code came from YouTuber DThompsonDev; video link is https://www.youtube.com/watch?v=6WclW4ThDUU&ab_channel=DThompsonDev
//* Will change around code; but this is good for the base.


const jokeText = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokes)

generateJokes()

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    )
    const data = await res.json();
    console.log(data);
    console.log(data.joke);
    console.log(data.delivery);

    let joke = ""

    if (data.joke == undefined) {
        joke = `${data.setup} <br/> ${data.delivery}`
    } else if(data.delivery == undefined) {
        joke = data.joke
    }else {
        return 'This is not the joke you are looking for'
    }
    jokeText.innerHTML = joke
}