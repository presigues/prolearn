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