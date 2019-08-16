setTimeout(init,1000);
function init(){
    console.log("start init");
/* all musique*/
var songs = document.getElementsByTagName('audio');
for (let i = 0; i < songs.length; i++) {
    var elem = songs[i];
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
    console.log(song,btn,musique,songBar);
    
    if(musique.paused){
        musique.play();
        btn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';
        song.classList.add('song-running');
    }else{
        musique.pause();
        btn.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
        song.classList.remove('song-running');
    }
    musique.addEventListener('timeupdate',function(e){
        console.log("in : ",Math.round((this.currentTime/this.duration)*100)/100);
        songBar.setAttribute('value',Math.round((this.currentTime/this.duration)*100)/100);
        if((this.currentTime/this.duration)==1){
            this.currentTime="0";
            btn.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
            song.classList.remove('song-running');
        }
        console.log(songBar)
    });
    // musique.on('timeupdate',function(){
    //     songBar.setAttribute('value',this.currentTime/this.duration);
    // });
    // $('#player').on('timeupdate', function() {
    //     $('#seekbar').attr("value", this.currentTime / this.duration);
    // });
}

function restart(song){
    var musique = document.getElementById(song);
    musique.currentTime = 0;
    if(musique.paused){
        playpause(song);
    }
}