/*   Init   */
document.querySelectorAll('.son audio').forEach(function (e) {
    e.addEventListener('timeupdate', syncSon, this);
    e.addEventListener('ended',finZic,this);
});
document.querySelectorAll('.son input[type="range"]').forEach(function (e) {
    e.addEventListener('change', updateSon, this);
});
document.querySelectorAll('.son').forEach(function(e){
    e.addEventListener('onmouseover',mouseSon,this);
    console.log(e);
    var id = e.id;
    document.querySelector('#'+id+' img').addEventListener('onmouseover',mouseSon,id);
    console.log("Mouse Over add");
})

function syncSon(audio) {
    var audio = audio.target;
    var range = document.querySelector('#' + audio.id.replace('a', 'd') + ' input[type="range"]');
    range.value = audio.currentTime / audio.duration;
}
function finZic(audio){
    var audio = audio.target;
    var son = document.querySelector('#'+audio.id.replace('a','d'));
    var btn = document.querySelector('#'+audio.id.replace('a','d')+' button');
    son.classList.remove('son-running');
    btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}
function updateSon(range) {
    var range = range.target;
    var audio = document.querySelector('#' + range.id.replace('r', 'd') + ' audio');
    audio.currentTime = audio.duration * range.value;
}
function mouseSon(div){
    console.log("mouseOver");
    // console.log("style chage for",div)
    // div = div.target;
    // document.querySelector('#'+div.id+' .bar-Titre').style.display="initial";
    // document.querySelector('#'+div.id+' .bar-controle').style.display="flex";
}
/**
 * Met play ou pause l'audio envoyer en paramettre fonction de la musique
 * @param {*} son ex:'a-01'
 */
function playPause(son) {
    var audioElem = document.querySelector('#' + son);
    var sonElem = document.querySelector('#' + son.replace('a', 'd'));

    if (audioElem.paused) {
        audioElem.play();
        document.querySelector('#' + sonElem.id + ' button').innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        sonElem.classList.add('son-running');
    } else {
        audioElem.pause();
        document.querySelector('#' + sonElem.id + ' button').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        sonElem.classList.remove('son-running');
    }
}

