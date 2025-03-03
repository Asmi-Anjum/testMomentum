document.getElementById("speakButton").addEventListener("click", function() {
    const text = document.getElementById("text").value;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
});