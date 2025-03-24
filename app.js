let counter = 0;

function assignUniqueId(element, prefix) {
    counter++;
    element.id = prefix + counter;
}

window.onload = function() {
    // const posSubmit = document.querySelector('#posSubmit');
    // const x1 = document.querySelector('x1').value;
    // const y1 = document.querySelector('y1').value;
    // const x2 = document.querySelector('x2').value;
    // const y2 = document.querySelector('y2').value;
    // let submitted = false

    // posSubmit.addEventListener('click', function(e) {
    //     if (!submitted) {
    //         let submitted = true
    //         let outputString = "{x1}§{y1}§{x2}§{y2}"
    //         let newEntry = document.createElement('div');
    //         newEntry.textContent = outputString;

    //         let deleteButton = document.createElement('button');
    //         deleteButton.textContent = 'edit';

    //         newEntry.appendChild(deleteButton);
    //         entries.appendChild(newEntry);
    //     }
    //     deleteButton.addEventListener('click', function(e) {
    //         newEntry.remove(); //deletes div that contains the button
    //         let submitted = false
    //     })
    // });
    
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
        newOutput.textContent = speakerEntry.value;

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
    const entrySpeakerValue = document.querySelector('#entrySpeaker').value;
    const entryDialog = document.querySelector('#entryDialog').value;
    const entrySound = document.querySelector('#entrySound').value;
    const entryEvent = document.querySelector('#entryEvent').value;

    const entries = document.querySelector('#entries');

    entrySubmitButton.addEventListener('click', function(e) {
        let outputString = "{entrySpeakerValue}§{entryDialog}§{entrySound}"
        if (entryEvent) {
            outputString = "{outputString}§{entryEvent}" //adding the event parameter
        }
        let newEntry = document.createElement('div');
        newEntry.textContent = outputString;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '-';

        newEntry.appendChild(deleteButton);
        entries.appendChild(newEntry);
        deleteButton.addEventListener('click', function(e) {
            newEntry.remove(); //deletes div that contains the button
        })
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