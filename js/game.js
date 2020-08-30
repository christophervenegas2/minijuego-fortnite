const width = 400;
const height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let $map = document.getElementById('map');
//$map= hace referencia a un elemento html
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (elemento) {
    clicks ++;
    let distance = getDistance(elemento, target);
    let distancehint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distancehint}</h1>`;
    //los `` se crean con la tecla de las []
    //los `` ayudan a copiar el formato de los h1 del index.html
    //$distance.innerHTML = escribe en el index.html
    if (distance < 20) {
        alert(`Encontraste a Kerry en: ${clicks} clicks!`)
        location.reload();
    }
})