let name = "Colin Bennett";
let age = 31;
let birthday = "March 25";
let detroitGC = true;
let lifeEvents = ["I was born in Florida", "I went to The University of Detroit Mercy", "I ran the Miami Marathon in 2019", "I have one younger brother"];

if (detroitGC = true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}
for (let i = 0; i < lifeEvents; i++) {
    console.log(i);
}

console.log(lifeEvents);

let counter = 0;

while (true) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !== 5) {
        console.log("randomNumber !== 5");
        counter++;
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}