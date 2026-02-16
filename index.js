

function basicpulleyacc() {
    const mass1 = 5;
    const mass2 = 7;
    const gravity = 9.81;
    const masstotal = mass1 + mass2;
    const acceleration1 = (mass2 * gravity) / masstotal;

    document.getElementById('bpaccres').textContent = acceleration1.toFixed(2);
    document.getElementById('mass1').textContent=mass1.toFixed();

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