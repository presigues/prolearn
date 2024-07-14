function getRandomIntforElement(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let Element = getRandomIntforElement(1,7)
  elementword;
  element;
  elementend;

  switch(Element){
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