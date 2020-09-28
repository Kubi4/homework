let a = prompt('Enter tag id',);

function deleteTagId(a) {
    try {
        let del = document.querySelector('#' + a);
        if (del) {
            del.remove();
        } else {
            alert('error, incorrect id');
        }
    } catch (error) {
        alert('error, invalid id (number)');
    }
}

deleteTagId(a);
