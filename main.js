function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  x=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded (){
console.log(modelLoaded);
}
function draw(){
  image(video,0,0,300,300)
  x.classify(video,y);
}
var previous_result = '';
function y(error,result){
  if(error){
console.log(error);
  }
  else{
    if((result[0].confidence > 0.5) && (previous_result != result[0].label)){
console.log(result);
previous_result = result[0].label;
document.getElementById("a").innerHTML=result[0].label;
document.getElementById("b").innerHTML=result[0].confidence;
var synth=window.speechSynthesis;
speak_data="Object detected is -"+result[0].label;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

    }
  }
}


