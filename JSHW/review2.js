let rocket = [
    'MS-31H6',
    'SCUD Missile',
    'Side Winder',
    'A2G Missile',
    'Anti-Infantry round',
    'Napalm Bomb',
    'Hydrogen Heat Seeking missile'


];
 // .map
let Planes = rocket.map(function(item){
    return item + ':Hell From Above';

})
console.log(Planes);

// for
for(var i = 0; i  < rocket.length; i++){
    console.log(i);
    let x = rocket[i];
    console.log(x);
    }
// .filter function
    var planes2 = Planes.filter(item =>{
        return item.length > 30
        })
        
        console.log(planes2);
// 
    rocket.forEach(element => {
        console.log(element);             
        console.log('USAF');
    });