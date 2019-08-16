setTimeout(init,1000);
function init(){
    console.log("start init");
/* all musique*/
var songs = document.getElementsByTagName('audio');
for (let i = 0; i < songs.length; i++) {
    var elem = songs[i];
    elem.addEventListener('timeupdate',rangeUpdate,elem);
    console.log("timeupdate seted");
    console.log('mon id :'+elem.id);
}
console.log("end init", songs);
}

/*play pause*/
function playpause(song){
    /*btn play pause*/
    var idBtn= '#btn-'+song;
    var btn = document.querySelector(idBtn);
    /*audio*/
    var audioBtn = '#'+song;
    var musique = document.querySelector(audioBtn);
    /*Song Conteneur*/
    var contSong = '.'+song;
    var song = document.querySelector(contSong);
    /*Song bar*/
    var selctBar = contSong+' input[type="range"';
    var songBar= document.querySelector(selctBar);
   /* console.log(song,btn,musique,songBar);*/
    
    if(musique.paused){
        musique.play();
        btn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';
        song.classList.add('song-running');
    }else{
        musique.pause();
        btn.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
        song.classList.remove('song-running');
    }/*
    musique.addEventListener('timeupdate',function(e){
        console.log("in : ",Math.round((this.currentTime/this.duration)*100)/100);
        songBar.setAttribute('value',Math.round((this.currentTime/this.duration)*100)/100);
        if((this.currentTime/this.duration)==1){
            this.currentTime="0";
            btn.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
            song.classList.remove('song-running');
        }
        console.log(songBar)
    });*/
}

/**
 * Cette fonction met à jour la position du temps d'un audio
 * @param {*} obj c'est le range  
 * @param {string} song c'est l'id du song
 * exemple : change(this,"m-01")
 */
function change(obj,song){
    var audioBtn = '#'+song;
    var musique = document.querySelector(audioBtn);
    musique.currentTime=musique.duration*obj.value;
}
/**
 * Cette fonction mes à jour la valeur de l'input de type range 
 * @param {*} audio (l'élément doit avoir un id)
 */
function rangeUpdate(audio){
    audio=audio.target;
    var rangeBar = document.querySelector('.'+audio.id +' input[type="range"]');
    rangeBar.removeAttribute('value');
    rangeBar.setAttribute('value',String((this.currentTime/this.duration)*100)/100);
    console.log(audio.currentTime, rangeBar);
}