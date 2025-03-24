window.onload = function() {
    const speakerEntry = document.querySelector('#speaker');
    const submitButton = document.querySelector('#submitSpeaker');
    const entrySpeaker = document.querySelector('#entrySpeaker');
    const speakers = document.querySelector('#speakers');

    submitButton.addEventListener('click', function(e) {
        addValueToDropdown(entrySpeaker,speakerEntry);
        let newOutput = document.createElement('div');
        newOutput.textcontent = entrySpeaker.value;
        let deleteButton = document.createElement('button');
        deleteButton.text = '-'
        newOutput.appendChild(deleteButton);
        speakers.appendChild(newOutput);
        deleteButton.addEventListener('click', function(e) {
            newOutput.remove();
        });
    });
}

function addValueToDropdown(dropdown,entry) {
    if (dropdown.value.trim() === "") {
        alert(dropdown.text + 'is not valid');
    } else {
        let newSpeaker = document.createElement('option');
        let speaker = entry.value;
        newSpeaker.text = speaker;
        newSpeaker.value = speaker;
        dropdown.appendChild(newSpeaker);
    }
    entry.value == '';
}