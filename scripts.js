// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    let movement = 0;
    let upDown = 0;
    document.getElementById("takeoff").addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }
    });
    document.getElementById("landing").addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });
    document.getElementById("missionAbort").addEventListener("click", function(event){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });
    document.getElementById("up").addEventListener("click", function(event) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        upDown+=10;
        rocket.style.bottom = upDown + 'px';
    });
    document.getElementById("down").addEventListener("click", function(event) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        upDown-=10;
        rocket.style.bottom = upDown + 'px';
    });
    document.getElementById("left").addEventListener("click", function(event) {
    movement-=10;
    rocket.style.left = movement + 'px';
    });
    document.getElementById("right").addEventListener("click", function(event) {
    movement+=10;
    rocket.style.left = movement + 'px';
    });
}
window.addEventListener("load", init);

//movement = parseInt(imgObj.style.left) -10 + 'px';
        //imgObj.style.left = movement;