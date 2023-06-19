// speedlimit 70
// ok
// 5km above the speed limit 1
// 12 point License suspended

checkSpeed(70);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return console.log('ok');

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) return console.log('License Suspended');
  else return console.log('Points', points);
}
