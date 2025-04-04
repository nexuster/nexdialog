let counter = 0;

function assignUniqueId(element, prefix) {
    counter++;
    element.id = prefix + counter;
}

const positions = [];
// const entriesArray = [];
const outputFile = [];

outputFile.unshift('-90 -70 180 -150'); // adding the default coords values for the dialog box

window.onload = function() {
    const speakerEntry = document.querySelector('#speaker');
    const submitButton = document.querySelector('#submitSpeaker');
    const entrySpeaker = document.querySelector('#entrySpeaker');
    const speakers = document.querySelector('#speakers');

    submitButton.addEventListener('click', function(e) {
        if (speakerEntry.value.trim() === "") {
            alert(speakerEntry.value + ' is not valid');
            return;
        }
        let newSpeaker = addValueToDropdown(entrySpeaker, speakerEntry);
        let newOutput = document.createElement('div');
        
        let speakerNameSpan = document.createElement('span');
        speakerNameSpan.textContent = speakerEntry.value;
        newOutput.appendChild(speakerNameSpan);
    
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '-';
    
        newOutput.appendChild(deleteButton);
        speakers.appendChild(newOutput);
    
        deleteButton.addEventListener('click', function(e) {
            newOutput.remove(); //deletes div that contains the button
            newSpeaker.remove(); //deletes the speaker that the button is paired with
        });
    });

    const entrySubmitButton = document.querySelector('#entrySubmit');

    const entries = document.querySelector('#entries');

    entrySubmitButton.addEventListener('click', function(e) {
        let entrySpeakerValue = document.querySelector('#entrySpeaker').value;
        let entryDialog = document.querySelector('#entryDialog').value;
        let entrySound = document.querySelector('#entrySound').value;
        let entryEvent = document.querySelector('#entryEvent').value;

        let outputString = `${entrySpeakerValue}§${entryDialog}§${entrySound}`;
        if (entryEvent) {
            outputString = `${outputString}§${entryEvent}`; //adding the event parameter
        }
        let newEntry = document.createElement('div');
        newEntry.textContent = outputString;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '-';

        newEntry.appendChild(deleteButton);
        entries.appendChild(newEntry);

        outputFile.push(outputString);
        let index = outputFile.indexOf(outputString);

        deleteButton.addEventListener('click', function(e) {
            newEntry.remove(); //deletes div that contains the button
            outputFile.splice(index, 1);
        });
    });

    const exportButton = document.querySelector('#export');
    exportButton.addEventListener('click', function(e) {
        exportAsTXT(outputFile);
    });
}

function addValueToDropdown(dropdown, entry) {
    let newSpeaker = document.createElement('option');
    assignUniqueId(newSpeaker, 'speaker-');
    let speaker = entry.value;
    newSpeaker.text = speaker;
    newSpeaker.value = speaker;
    dropdown.appendChild(newSpeaker);
    entry.value = '';

    return newSpeaker;
}

function exportAsTXT(array) {
    let text = array.join('\n');
    let blob = new Blob([text], { type: 'text/plain' });
    let link = document.createElement('a');
    link.download = 'dialog.txt';
    link.href = window.URL.createObjectURL(blob);
    link.click();
}