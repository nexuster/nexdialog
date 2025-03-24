window.onload = function() {
    const speakerEntry = document.querySelector('#speaker');
    const submitButton = document.querySelector('#submitSpeaker');
    const entrySpeaker = document.querySelector('#entrySpeaker');

    submitButton.addEventListener('click', function(e) {
        if (entrySpeaker.text == "") {
            alert(entrySpeaker.text + 'is not a valid speaker') //i HATE this
        } else {
            let newSpeaker = document.createElement('option');
            let speaker = speakerEntry.text;
            newSpeaker.text = speaker;
            newSpeaker.value = speaker;
            entrySpeaker.appendChild(newSpeaker);
        }
    });
}