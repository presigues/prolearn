





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

elementword;
  element;
  elementend;
  wordw;

  function ElementSelection(){

  let Element = getRandomInt(1,7)
  

  switch(Element){ // chose element 
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

    option1 = answr;

// option 2
    option2element;
    option2elementend;
    option2word;
    option2final;
 

    option2elementnum = getRandomInt(1,7);
    option2wordnum = getRandomInt(1, 10);

// option 3

option3element;
option3elementend;
option3word;
option3final;

option3elementnum = getRandomInt(1,7);
option3wordnum = getRandomInt(1, 10);

// option 4

option4element;
option4elementend;
option4word;
option4final;

option4elementnum = getRandomInt(1,7);
option4wordnum = getRandomInt(1, 10);

    do{ // option 2 hard part

    switch(option2wordnum){
        case 1:
            option2word = "Hello World!";
            console.log("Option2 Word Chosen : " + option2word);
            break;
            case 2:
                option2word = "Hack Club!";
            console.log("Option2 Word Chosen : " + option2word);
                break;
                case 3:
                    option2word= "Welcome to the World of CODE";
            console.log("Option2 Word Chosen : " + option2word);
                    break;
                    case 4:
                        option2word = "Would you Rather?...";
            console.log("Option2 Word Chosen : " + option2word);
                        break;
                        case 5:
                            option2word = "What is your Name?";
            console.log("Option2 Word Chosen : " + option2word);
                            break;
                            case 6:
                                option2word = "html is very cool";
            console.log("Option2 Word Chosen : " + option2word);
                                break;
                                case 7:
                                    option2word = "First Robotics Competition!";
            console.log("Option2 Word Chosen : " + option2word);
                                    break;
                                    case 8:
                                        option2word = "FIRST!";
            console.log("Option2 Word Chosen : " + option2word);
                                        break;
                                        case 9:
                                            option2word = "Welcome to my Website";
            console.log("Option2 Word Chosen : " + option2word);
                                            break;
                                            case 10:
                                                option2word = "Coding is Cool";
            console.log("Option2 Word Chosen : " + option2word);
                                                break;
    }

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

      option2final = option2element + " " +  option2word + " " + option2elementend;

 }while(option2final != option1) // makes sure option 2 isnt identical to option 1
   
 do{ // option 2 hard part

    switch(option3wordnum){
        case 1:
            option3word = "Hello World!";
            console.log("Option2 Word Chosen : " + option2word);
            break;
            case 2:
                option3word = "Hack Club!";
            console.log("Option2 Word Chosen : " + option2word);
                break;
                case 3:
                    option3word= "Welcome to the World of CODE";
            console.log("Option2 Word Chosen : " + option2word);
                    break;
                    case 4:
                        option3word = "Would you Rather?...";
            console.log("Option2 Word Chosen : " + option2word);
                        break;
                        case 5:
                            option3word = "What is your Name?";
            console.log("Option2 Word Chosen : " + option2word);
                            break;
                            case 6:
                                option3word = "html is very cool";
            console.log("Option2 Word Chosen : " + option2word);
                                break;
                                case 7:
                                    option3word = "First Robotics Competition!";
            console.log("Option2 Word Chosen : " + option2word);
                                    break;
                                    case 8:
                                        option3word = "FIRST!";
            console.log("Option2 Word Chosen : " + option2word);
                                        break;
                                        case 9:
                                            option3word = "Welcome to my Website";
            console.log("Option2 Word Chosen : " + option2word);
                                            break;
                                            case 10:
                                                option3word = "Coding is Cool";
            console.log("Option2 Word Chosen : " + option2word);
                                                break;
    }

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

      option2final = option2element + " " +  option2word + " " + option2elementend;

 }while(option2final != option1) // makes sure option 2 isnt identical to option 1
    
}