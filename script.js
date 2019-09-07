myjson();
function init(){
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
    });
}
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

function myjson(){
    console.log("btn fonctionnel");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("Yes");
            afficherMusiques(xhr.response);
        }
    }
    xhr.open('GET','song.json',true);
    xhr.responseType = 'json';
    xhr.send();
}
function afficherMusiques(songs){
    console.log(getObjLength(songs));
    for(let i = 0;i<getObjLength(songs);i++){
        afficherMusique(songs[i]);
    }
    init();
}
function afficherMusique(son){
    let section = document.querySelector('#sonContainer');
    let sonHTML = '<!--'+son.nom+'--> <div class="son" id=\'d-'+son.id+'\'> <img src="'+son.image+'"> <div class="bar-Titre"> <h2>'+son.nom+'</h2> <h3>'+son.description+'</h3> </div> <audio id="a-'+son.id+'"> <source src="'+son.audio+'" type="audio/mp3"> </audio> <div class="bar-controle"> <button onclick="playPause(\'a-'+son.id+'\')"><i class="fa fa-play" aria-hidden="true"></i></button> <input id=\'r-'+son.id+'\' type="range" min="0" max="1" step="0.0001" value="0"> </div> <a href="'+son.video+'"><img src="img/logo/youtube_rond.png"></a> </div></div>';
    section.innerHTML +=sonHTML;
}
function getObjLength(obj){
    let long =-1;
    for(let i = 0;obj[i]!=undefined;i++){
        long = i;
    }
    return long;
}