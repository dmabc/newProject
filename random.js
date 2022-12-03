
const topic = ['He keeps his word.',"He doesn't know how to play the guitar.","Tom held a seat for me.",
"Nothing can force me to give it up.","What are you reading?"];

const rand_phrase = (top) => {
    let rand = Math.floor(Math.random() * top.length)
    console.log(rand + 'Hello')
}


rand_phrase(topic);