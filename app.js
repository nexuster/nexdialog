let counter = 0;

function assignUniqueId(element, prefix) {
    counter++;
    element.id = prefix + counter;
}

window.onload = function() {
    const speakerEntry = document.querySelector('#speaker');
    const submitButton = document.querySelector('#submitSpeaker');
    const entrySpeaker = document.querySelector('#entrySpeaker');
    const speakers = document.querySelector('#speakers');

    submitButton.addEventListener('click', function(e) {
        if (entrySpeaker.value.trim() === "") {
            alert(dropdown.text + 'is not valid');
            return
        }
        let newSpeaker = addValueToDropdown(entrySpeaker,speakerEntry);
        let newOutput = document.createElement('div');
        newOutput.textcontent = speakerEntry.value;
        let deleteButton = document.createElement('button');
        deleteButton.textcontent = '-'
        newOutput.appendChild(deleteButton);
        speakers.appendChild(newOutput);
        deleteButton.addEventListener('click', function(e) {
            newOutput.remove();
            newSpeaker.remove();
        });
    });
}

function addValueToDropdown(dropdown,entry) {
    let newSpeaker = document.createElement('option');
    assignUniqueId(newSpeaker, 'speaker-')
    let speaker = entry.value;
    newSpeaker.text = speaker;
    newSpeaker.value = speaker;
    dropdown.appendChild(newSpeaker);

    entry.value == '';
    return newSpeaker;
}