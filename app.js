window.onload = function() {
    const speakerEntry = document.querySelector('#speaker');
    const submitButton = document.querySelector('#submitSpeaker');
    const entrySpeaker = document.querySelector('#entrySpeaker');

    submitButton.addEventListener('click', function(e) {
        if (trim(entrySpeaker.textcontent) != "") {
            let newSpeaker = document.createElement('option');
            let speaker = speakerEntry.textcontent;
            newSpeaker.textcontent = speaker;
            newSpeaker.value = speaker;
            entrySpeaker.add(speakerEntry);
        } else {
            alert(entrySpeaker.text + 'is not a valid speaker') //i HATE this
        }
    });
}