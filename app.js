const speakerEntry = document.querySelector('#speaker');
const submitButton = document.querySelector('#submitSpeaker');
const entrySpeaker = document.querySelector('#entrySpeaker');

if (submitButton.textContent != "") {
    submitButton.addEventListener('click', function(e) {
        let newSpeaker = document.createElement('option');
        newSpeaker.textContent = speakerEntry.textContent;
        speakerEntry.textContent = "";
        entrySpeaker.appendChild(speakerEntry);
    });
} else {
    alert('invalid name content');
}