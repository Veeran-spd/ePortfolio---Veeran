function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YG58zoeL56":
        Script1();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = false;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

var player = GetPlayer();
var audio = document.getElementById('bgSong');
this.Location= player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
// If song is playing and not paused then do nothing
}
else {
audio.src=Location+"Happy.mp3"; 
audio.load();
audio.play();
}
}

