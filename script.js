// Graded Learning Activity 1

// create h1
var myName = document.createElement("h1");
myName.innerHTML = "Marie Angelika Maglinte";

// create container - container for input elements and button
var container = document.createElement("div");

// input elements - get 2 input numbers from the user
var inputEle1 = document.createElement("input");
var inputEle2 = document.createElement("input");

// button
var btn = document.createElement("button");
btn.innerHTML = "Get Sum";

// div container - to display my result
var result = document.createElement("div");

// append h1
document.body.appendChild(myName);

// wrap input elements, button and result in the container
document.body.appendChild(container);
container.appendChild(inputEle1);
container.appendChild(inputEle2);
container.appendChild(btn);
container.appendChild(result);

function resetBorderColor() {
    inputEle1.style.borderColor = "";
    inputEle2.style.borderColor = "";
}

const checkSum = () => {
    try {
        var num1 = parseFloat(inputEle1.value);
        var num2 = parseFloat(inputEle2.value);

        resetBorderColor();

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers.");
        }

        var sum = num1 + num2;
        result.textContent = "Sum: " + sum;
    } catch (error) {
        console.error("An error occurred:", error.message);
        result.textContent = error.message;
        
        // note: make border red when input is invalid
        inputEle1.style.borderColor = "red";
        inputEle2.style.borderColor = "red";
    }
}

btn.addEventListener("click", checkSum);


////////////////////////// Styling //////////////////////////

// h1 styling
myName.style.color = "#A9A9A9";
myName.style.textAlign = "center";
myName.style.marginTop = "250px";

// result div styling
result.style.textAlign = "center";

// button styling
btn.style.display = "block";
btn.style.margin = "0 auto";
btn.style.marginTop = "20px";
btn.style.marginBottom = "20px";

// input styling
inputEle1.style.width = "150px";
inputEle1.style.height = "30px";
inputEle1.style.borderRadius = "8px"; 
inputEle1.style.marginBottom = "10px"; 
inputEle1.style.backgroundColor = "white"; 
inputEle1.style.marginRight = "5px";
inputEle1.style.marginTop = "20px";

inputEle2.style.width = "150px"; 
inputEle2.style.height = "30px"; 
inputEle2.style.borderRadius = "8px"; 
inputEle2.style.marginBottom = "10px"; 
inputEle2.style.backgroundColor = "white"; 
inputEle2.style.marginLeft = "5px";
inputEle1.style.marginTop = "20px";

// container styling
container.style.backgroundColor = "lightblue";
container.style.borderRadius = "10px"; 
container.style.textAlign = "center";
container.style.width = "500px" 
container.style.height = "170px";
container.style.margin = "0 auto";

document.body.style.backgroundColor = "lightyellow";