





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

elementword;
  element;
  elementend;
  elementnum = 0;
  wordw;

  

  function ElementSelection(){

 elementnum = getRandomInt(1,7)
  

  switch(elementnum){ // chose element 
    case 1:
    elementword = "Heading 1";
    element = "<h1>";
    elementend = "</h1>";
    console.log("Element Chosen : " + elementword);
    break;
    case 2:
    elementword = "Heading 2";
    element = "<h2>";
    elementend = "</h2>";
    console.log("Element Chosen : " + elementword);
    break;
    case 3:
    elementword = "Heading 3";
    element = "<h3>";
    elementend = "</h3>";
    console.log("Element Chosen : " + elementword);
    break;
    case 4:
    elementword = "Heading 4";
    element = "<h4>";
    elementend = "</h4>";
    console.log("Element Chosen : " + elementword);
    break;
    case 5:
    elementword = "Heading 5";
    element = "<h5>";
    elementend = "</h5>";
    console.log("Element Chosen : " + elementword);
    break;
    case 6:
    elementword = "Heading 6";
    element = "<h6>";
    elementend = "</h6>";
    console.log("Element Chosen : " + elementword);
    break;
    case 7:
    elementword = "Paragraph";
    element = "<p>";
    elementend = "</p>";
    console.log("Element Chosen : " + elementword);
    break;
  }
}

function WordSelection(){

let Word = getRandomInt(1,10)


switch(Word){
    case 1:
        wordw = "Hello World!";
        console.log("Word Chosen : " + wordw);
        break;
        case 2:
            wordw = "Hack Club!";
        console.log("Word Chosen : " + wordw);
            break;
            case 3:
                wordw = "Welcome to the World of CODE";
        console.log("Word Chosen : " + wordw);
                break;
                case 4:
                    wordw = "Would you Rather?...";
        console.log("Word Chosen : " + wordw);
                    break;
                    case 5:
                        wordw = "What is your Name?";
        console.log("Word Chosen : " + wordw);
                        break;
                        case 6:
                            wordw = "html is very cool";
        console.log("Word Chosen : " + wordw);
                            break;
                            case 7:
                                wordw = "First Robotics Competition!";
        console.log("Word Chosen : " + wordw);
                                break;
                                case 8:
                                    wordw = "FIRST!";
        console.log("Word Chosen : " + wordw);
                                    break;
                                    case 9:
                                        wordw = "Welcome to my Website";
        console.log("Word Chosen : " + wordw);
                                        break;
                                        case 10:
                                            wordw = "Coding is Cool";
        console.log("Word Chosen : " + wordw);
                                            break;
}
}

function printFinal(){
    console.log("Write the Sentence : " + wordw + " as a " + elementword);
}



function comp(){
    ElementSelection();
    WordSelection();
    printFinal();
}

function written(){
document.getElementById('question').innerHTML = "Write the Sentence : " + wordw + " as a " + elementword;
}

const answr = element + " " + wordw + " " + elementend;

function thehardpart(){

    option1 = "element + wordw + elementend";
    console.log(element + wordw + elementend)

// option 2
    
    option2elementend = "";
    
    option2final = "";
 option2word = "";
option2element = "";

option2elementnum = getRandomInt(1,7);

while(option2elementnum == elementnum){
    option2elementnum = getRandomInt(1,7);
   }
    // option 2 hard part

    switch(option2elementnum){ // chose element 
        case 1:
        option2element = "<h1>";
        option2elementend = "</h1>";
        console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 2:
            option2element = "<h2>";
            option2elementend = "</h2>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 3:
            option2element = "<h3>";
            option2elementend = "</h3>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 4:
            option2element = "<h4>";
            option2elementend = "</h4>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 5:
            option2element = "<h5>";
            option2elementend = "</h5>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 6:
            option2element = "<h6>";
            option2elementend = "</h6>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 7:
            option2element = "<p>";
            option2elementend = "</p>";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
      }

      option2final = "option2element  +  wordw + option2elementend";
      console.log(option2element  +  wordw + option2elementend);

 // makes sure option 2 isnt identical to option 1

   option3element ="";
option3elementend="";
option3word="";
option3final="";

option3elementnum = 0;
option3elementnum = getRandomInt(1,7);
while(option3elementnum == elementnum || option3elementnum == option2elementnum){
option3elementnum = getRandomInt(1,7);
}

  // option 3 hard part
    switch(option3elementnum){ // chose element 
        case 1:
        option3element = "<h1>";
        option3elementend = "</h1>";
        console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 2:
            option3element = "<h2>";
            option3elementend = "</h2>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 3:
            option3element = "<h3>";
            option3elementend = "</h3>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 4:
            option3element = "<h4>";
            option3elementend = "</h4>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 5:
            option3element = "<h5>";
            option3elementend = "</h5>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 6:
            option3element = "<h6>";
            option3elementend = "</h6>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 7:
            option3element = "<p>";
            option3elementend = "</p>";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
      }

      option3final = "option3element  +  wordw  + option3elementend";
      console.log(option3element  +  wordw  + option3elementend)

 // makes sure option 2 isnt identical to option 1 / option 2

option4element="";
option4elementend="";
option4word="";
option4final="";

option4elementnum = 0;

option4elementnum = getRandomInt(1,7);

while(option4elementnum == elementnum || option4elementnum == option2elementnum || option4elementnum == option3elementnum){
    option4elementnum = getRandomInt(1,7);
}


  // option 4 hard part

    
    switch(option4elementnum){ // chose element 
        case 1:
        option4element = "<h1>";
        option4elementend = "</h1>";
        console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 2:
            option4element = "<h2>";
            option4elementend = "</h2>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 3:
            option4element = "<h3>";
            option4elementend = "</h3>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 4:
            option4element = "<h4>";
            option4elementend = "</h4>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 5:
            option4element = "<h5>";
            option4elementend = "</h5>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 6:
            option4element = "<h6>";
            option4elementend = "</h6>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 7:
            option4element = "<p>";
            option4elementend = "</p>";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
      }

      option4final = "option4element +  wordw + option4elementend";
      console.log(option4element +  wordw + option4elementend)



 console.log("FINAL CHOICES - " + element + wordw + elementend + " " + option2element  +  wordw + option2elementend + " " + option3element  +  wordw  + option3elementend + " " + option4element +  wordw + option4elementend);
    
}