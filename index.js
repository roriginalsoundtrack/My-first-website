
document.addEventListener("DOMContentLoaded", function() { // Ensure script runs after the DOM is fully loaded
  const button = document.getElementById("seeAnswerButton");
  const answerWrapper = document.getElementById("answerWrapper");

  basicpulleyacc();

  // Optionally, hide the div on page load using JS or add the 'hidden' class to the HTML
  // div.classList.add("hidden");

  button.addEventListener("click", function() {
    answerWrapper.classList.toggle("hidden"); // Toggles the 'hidden' class
  });
});




function basicpulleyacc() {
    const getRandomMass = () => Math.floor(Math.random() * 25) + 1;

    const mass1 = getRandomMass();
    const mass2 = getRandomMass();
    const gravity = 9.81;
    const masstotal = mass1 + mass2;
    let acceleration1;

    if (mass1>mass2){
        acceleration1 = 0
    } else{
        acceleration1 = (mass2 * gravity) / masstotal
    }

    document.getElementById('bpaccres').textContent = acceleration1.toFixed(2);
    document.getElementById('mass1').textContent=mass1.toFixed();
    document.getElementById('mass2').textContent=mass2.toFixed();

    return acceleration1;
}
                
const bpaccres = basicpulleyacc();

const display = document.getElementbyId("display");

document.getElementById('seeAnswerBtn').addEventListener('click', basicpulleyacc);


function appendtodisplay(input){
    display.bpaccres
}
function hidedisplay(){

}

function showanswer(){

}
