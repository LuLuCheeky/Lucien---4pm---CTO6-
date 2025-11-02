let box1, box2, box3, box4, box5;
let button;
let words = ["noun", "verb", "adjective", "adverb", "place"];
let displayText1, displayText2, displayText3, displayText4, displayText5;
let arr2 = [];
let story = "";
let storyTemplate = []

function setup() {
    createCanvas(600,600);

    box1 = createInput();
    box1.position(width / 2 - box1.width / 2, 100);
    box2 = createInput();
    box2.position(width / 2 - box2.width / 2, 140);
    box3 = createInput();
    box3.position(width / 2 - box3.width / 2, 180);
    box4 = createInput();
    box4.position(width / 2 - box4.width / 2, 220);
    box5 = createInput();
    box5.position(width / 2 - box5.width / 2, 260);

    button = createButton("Generate story");
    button.position(width / 2 - button.width / 2, 350);
    button.mousePressed(display);

        storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
    ];
}

function draw() {
    background(220);

    for(let i = 0; i < words.length; i++){
        textSize(20);
        text(words[i], 50, 115 + i * 40);
    }

    for(let i = 0; i< arr2.length; i++){
        textSize(20);
        text(arr2[i], 50, 400 + i * 35);
    }
}

function display() {
    displayText1 = "noun: " + box1.value();
    arr2.push(displayText1);
    displayText2 =  "verb: " + box2.value();
    arr2.push(displayText2);
    displayText3 = "adjetive: " + box3.value();
    arr2.push(displayText3);
    displayText4 = "adverb: " + box4.value();
    arr2.push(displayText4);
    displayText5 = "place: " +box5.value();
    arr2.push(displayText5);
}