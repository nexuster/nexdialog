const speakerEntry = document.querySelector('#speaker');
const submitButton = document.querySelector('#submitSpeaker');
const entrySpeaker = document.querySelector('#entrySpeaker');

if (submitButton.textContent != "") {
    submitButton.addEventListener('click', function(e) {
        let newSpeaker = document.createElement('option');
        let speaker = speakerEntry.text;
        newSpeaker.text = speaker;
        newSpeaker.value = speaker;
        speakerEntry.text = "";
        entrySpeaker.add(speakerEntry);
    });
} else {
    alert('invalid name content');
}