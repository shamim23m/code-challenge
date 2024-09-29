const speedLimit = 70;//speedLimit is 70

function speedDetector(speed) {
    if (speed < 70) {
        console.log("Ok");
//if speed is less than 70 driver get's an ok
    } else {
    const demeritPoints = Math.floor((speed - speedLimit) / 5);//driver get's 1 point for exceeding the speedLimit by 5
    console.log(`Points: ${demeritPoints}`);
    
    if (demeritPoints > 12) {
        console.log("License suspended");//driver's license get's suspended after getting more than 12 points
    }
}
}
speedDetector(50);  
speedDetector(100);  
speedDetector(150);