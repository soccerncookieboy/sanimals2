function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/jyalV9Aj-/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotresults);
}