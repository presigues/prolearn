





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
    element = "&lt;h1&gt;";
    elementend = "&lt;/h1&gt;";
    console.log("Element Chosen : " + elementword);
    break;
    case 2:
    elementword = "Heading 2";
    element = "&lt;h2&gt;";
    elementend = "&lt;/h2&gt;";
    console.log("Element Chosen : " + elementword);
    break;
    case 3:
    elementword = "Heading 3";
    element = "&lt;h3&gt;";
    elementend = "&lt;/h3&gt;";
    console.log("Element Chosen : " + elementword);
    break;
    case 4:
    elementword = "Heading 4";
    element = "&lt;h4&gt;";
    elementend = "&lt;/h4&gt;";
    console.log("Element Chosen : " + elementword);
    break;
    case 5:
    elementword = "Heading 5";
    element = "&lt;h5&gt;";
    elementend = "&lt;/h5&gt;";
    console.log("Element Chosen : " + elementword);
    break;
    case 6:
    elementword = "Heading 6";
    element = "&lt;h6&gt;";
    elementend = "&lt;/h6&gt";
    console.log("Element Chosen : " + elementword);
    break;
    case 7:
    elementword = "Paragraph";
    element = "&lt;p&gt";
    elementend = "&lt;/p&gt";
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
        option2element = "&lt;h1&gt;";
        option2elementend = "&lt;/h1&gt;";
        console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 2:
            option2element = "&lt;h2&gt;";
            option2elementend = "&lt;/h2&gt;";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 3:
            option2element = "&lt;h3&gt;";
            option2elementend = "&lt;/h3&gt;";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 4:
            option2element = "&lt;h4&gt;";
            option2elementend = "&lt;/h4&gt;";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 5:
            option2element = "&lt;h5&gt;";
            option2elementend = "&lt;/h5&gt;";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 6:
            option2element = "&lt;h6&gt;";
            option2elementend = "&lt;/h6&gt;";
            console.log("Option 2 Element Chosen : " + option2element);
        break;
        case 7:
            option2element = "&lt;p&gt;";
            option2elementend = "&lt;/p&gt;";
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
        option3element = "&lt;h1&gt;";
        option3elementend = "&lt;/h1&gt;";
        console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 2:
            option3element = "&lt;h2&gt;";
            option3elementend = "&lt;/h2&gt;";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 3:
            option3element = "&lt;h3&gt;";
            option3elementend = "&lt;/h3&gt;";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 4:
            option3element = "&lt;h4&gt;";
            option3elementend = "&lt;/h4&gt;";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 5:
            option3element = "&lt;h5&gt;";
            option3elementend = "&lt;/h5&gt;";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 6:
            option3element = "&lt;h6&gt;";
            option3elementend = "&lt;h6&gt;";
            console.log("Option 2 Element Chosen : " + option3element);
        break;
        case 7:
            option3element = "&lt;p&gt;";
            option3elementend = "&lt;/p&gt;";
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
        option4element = "&lt;h1&gt;";
        option4elementend = "&lt;h1&gt;";
        console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 2:
            option4element = "&lt;h1&gt;";
            option4elementend = "&lt;h2&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 3:
            option4element = "&lt;h3&gt;";
            option4elementend = "&lt;h3&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 4:
            option4element = "&lt;h4&gt;";
            option4elementend = "&lt;h4&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 5:
            option4element = "&lt;h5&gt;";
            option4elementend = "&lt;h5&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 6:
            option4element = "&lt;h6&gt;";
            option4elementend = "&lt;h6&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
        case 7:
            option4element = "&lt;p&gt;";
            option4elementend = "&lt;p&gt;";
            console.log("Option 4 Element Chosen : " + option4element);
        break;
      }

      option4final = "option4element +  wordw + option4elementend";
      console.log(option4element +  wordw + option4elementend)



 console.log("FINAL CHOICES - " + element + wordw + elementend + " " + option2element  +  wordw + option2elementend + " " + option3element  +  wordw  + option3elementend + " " + option4element +  wordw + option4elementend);
    





}

function thescrambler(option4element, option4elementend , option3elementend ,option3element, option2element,option2elementend, element, elementend, wordw ){
option1 = getRandomInt(1,4);

    option2 = getRandomInt(1,4);
    while(option1 == option2){
        option2 = getRandomInt(1,4);
    }
    
    option3 = getRandomInt(1,4);
    while(option3 == option1 || option3 == option2){
        option3 = getRandomInt(1,4);
    }

      
    option4 = getRandomInt(1,4);
    while(option4 == option1 || option4 == option2 || option4 == option3){
        option4 = getRandomInt(1,4);
    }

    console.log("Option 1 = Position : " + option1 + " " + "Option 2 = Position : " + option2 + " " + "Option 3 = Position : " + option3 + " " + "Option 4 = Position : " + option4)
    
    switch(option1){

        case 1:
            document.getElementById("option1").innerHTML =  + element + wordw + elementend;
            break;
            case 2:
                document.getElementById("option2").innerHTML = element + wordw + elementend;
                break;
                case 3:
                    document.getElementById("option3").innerHTML = element + wordw + elementend;
                    break;
                    case 4:
                        document.getElementById("option4").innerHTML = element + wordw + elementend;
                        break;
    }

    switch(option2){

        case 1:
            document.getElementById("option1").innerHTML =  option2element  +  wordw + option2elementend;
            break;
            case 2:
                document.getElementById("option2").innerHTML = option2element  +  wordw + option2elementend;
                break;
                case 3:
                    document.getElementById("option3").innerHTML = option2element  +  wordw + option2elementend;
                    break;
                    case 4:
                        document.getElementById("option4").innerHTML = option2element  +  wordw + option2elementend;
                        break;
    }

    switch(option3){

        case 1:
            document.getElementById("option1").innerHTML =  option3element  +  wordw  + option3elementend;
            break;
            case 2:
                document.getElementById("option2").innerHTML = option3element  +  wordw  + option3elementend;
                break;
                case 3:
                    document.getElementById("option3").innerHTML = option3element  +  wordw  + option3elementend;
                    break;
                    case 4:
                        document.getElementById("option4").innerHTML = option3element  +  wordw  + option3elementend;
                        break;
    }

    switch(option4){

        case 1:
            document.getElementById("option1").innerHTML =  option4element +  wordw + option4elementend;
            break;
            case 2:
                document.getElementById("option2").innerHTML = option4element +  wordw + option4elementend;
                break;
                case 3:
                    document.getElementById("option3").innerHTML = option4element +  wordw + option4elementend;
                    break;
                    case 4:
                        document.getElementById("option4").innerHTML = option4element +  wordw + option4elementend;
                        break;
    }
}

function theanswer(option1, option2, option3, option4){

    switch(option1){

        case 1:
            document.getElementById("option1").style.borderColor = "green";
            document.getElementById("option1").style.backgroundColor = "green";
           
            break;
            case 2:
                document.getElementById("option2").style.borderColor = "green";
                document.getElementById("option2").style.backgroundColor = "green";
                
                break;
                case 3:
                    document.getElementById("option3").style.borderColor = "green";
                    document.getElementById("option3").style.backgroundColor = "green";
           
                    break;
                    case 4:
                        document.getElementById("option4").style.borderColor = "green";
                        document.getElementById("option4").style.backgroundColor = "green";
                     
                        break;
}

switch(option2){

    case 1:
        document.getElementById("option1").style.borderColor = "red";
        
       
        break;
        case 2:
            document.getElementById("option2").style.borderColor = "red";
            
            
            break;
            case 3:
                document.getElementById("option3").style.borderColor = "red";
                
       
                break;
                case 4:
                    document.getElementById("option4").style.borderColor = "red";
                    
                 
                    break;
}

switch(option3){

    case 1:
        document.getElementById("option1").style.borderColor = "red";
      
       
        break;
        case 2:
            document.getElementById("option2").style.borderColor = "red";
       
            
            break;
            case 3:
                document.getElementById("option3").style.borderColor = "red";
               
       
                break;
                case 4:
                    document.getElementById("option4").style.borderColor = "red";
                  
                 
                    break;
}

switch(option4){

    case 1:
        document.getElementById("option1").style.borderColor = "red";
       
       
        break;
        case 2:
            document.getElementById("option2").style.borderColor = "red";
           
            
            break;
            case 3:
                document.getElementById("option3").style.borderColor = "red";
               
       
                break;
                case 4:
                    document.getElementById("option4").style.borderColor = "red";
                    
                 
                    break;
}







document.getElementById("option1").setAttribute("disabled", "disabled");

document.getElementById("option2").setAttribute("disabled", "disabled");

document.getElementById("option3").setAttribute("disabled", "disabled");

document.getElementById("option4").setAttribute("disabled", "disabled");

}


function turnred(option1, option2, option3, option4){
    
}




function reseteverything(){
    document.getElementById("option1").innerHTML = "...";
    document.getElementById("option2").innerHTML = "...";
    document.getElementById("option3").innerHTML = "...";
    document.getElementById("option4").innerHTML = "...";

    document.getElementById("option4").style.borderColor = "rgb(7, 35, 43)";
                        document.getElementById("option3").style.borderColor = "rgb(7, 35, 43)";
                        document.getElementById("option2").style.borderColor = "rgb(7, 35, 43)";
                        document.getElementById("option1").style.borderColor = "rgb(7, 35, 43)";

                        document.getElementById("option1").style.backgroundColor = "rgb(7, 35, 43)";
                        document.getElementById("option2").style.backgroundColor = "rgb(7, 35, 43)";
                        document.getElementById("option3").style.backgroundColor = "rgb(7, 35, 43)";
                        document.getElementById("option4").style.backgroundColor = "rgb(7, 35, 43)";

                        document.getElementById("option1").removeAttribute("disabled");
                        document.getElementById("option2").removeAttribute("disabled");
                        document.getElementById("option3").removeAttribute("disabled");
                        document.getElementById("option4").removeAttribute("disabled");

}


