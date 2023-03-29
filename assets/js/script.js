// Query Selectors
const currentDate = document.querySelector(".current-date");
const prompt = document.querySelector(".prompt");
const newPrompt = document.querySelector("#new-prompt");
const clearPrompt = document.querySelector("#clear-prompt")

// Current Date
const theCurrentDate = dayjs().format("dddd, MMMM DD, YYYY");
console.log(theCurrentDate)

currentDate.innerHTML = theCurrentDate;

// Random Prompt Generator
function generateRandomPrompt(prompts){
    return prompts[Math.floor(Math.random()*prompts.length)]
    
}

const randomPrompt = generateRandomPrompt(prompts);

prompt.innerHTML = randomPrompt;

// New Prompt
function updatePrompt(){
    const newRandomPrompt = generateRandomPrompt(prompts);
    prompt.innerHTML = newRandomPrompt;
}

// Here I made a mistake by setting updatePrompt() to a variable. I thought i needed to pass that in, but by saving that function to a variable, all I was doing was passing in the returned value when I in fact needed to pass in the function.
newPrompt.addEventListener("click", updatePrompt)

// Clear Prompt
function removePrompt(){
    prompt.innerHTML = "";
}

clearPrompt.addEventListener("click", removePrompt)