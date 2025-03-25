    const posSubmit = document.querySelector('#posSubmit');
    let submitted = false

    posSubmit.addEventListener('click', function(e) {
        if (!submitted) {
            let submitted = true

            let x1 = document.querySelector('x1').value;
            let y1 = document.querySelector('y1').value;
            let x2 = document.querySelector('x2').value;
            let y2 = document.querySelector('y2').value;

            let outputString = "${x1}§${y1}§${x2}§${y2}"
            let newPos = document.createElement('div');
            newPos.textContent = outputString;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'edit';

            newPos.appendChild(deleteButton);
            entries.appendChild(newPos);
            positions = [x1,y1,x2,y2];
        }
        deleteButton.addEventListener('click', function(e) {
            newPos.remove(); //deletes div that contains the button
            let submitted = false
        })
    });