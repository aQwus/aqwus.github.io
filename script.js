// var list = document.getElementById('demo');

// var enterPressed = function(){
//     document.getElementById("todo").onkeyup = function(event) {
//     if(event.which == 13)
//         changeText();
//   };
// };

// function changeText() {
//     var data = document.getElementById('todo').value;
// 	var d = new Date();
//     if(data!='')
// 	{
//         var entry = document.createElement('li');
// 		<!-->entry.icon=document.createElement('icon');entry.icon.class="fa-fa-trash";entry.appendChild(entry.icon);<-->
//         entry.description = document.createElement('span');
//         entry.appendChild(entry.description);
//         entry.description.appendChild(document.createTextNode(data));
//         var dates = document.createElement("div");
//         dates.appendChild(document.createTextNode(d.toDateString()));
//         dates.className = "myClass";
//         entry.appendChild((dates));
//         <!-->entry.onclick = () => struck(entry);<-->
//         list.appendChild(entry);
// 	}
// }

// <!-->function struck(ele) {    ele.description.style = "text-decoration:line-through; list-style-type:none";}<-->

// enterPressed();

function foo () {

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const v = urlParams.get('dr');
    console.log(v);

    document.getElementById('dr').innerText = v;

    var picker = new AppointmentPicker(document.getElementById('time'), {
        interval: 30,
        mode: '12h',
        minTime: 11,
        maxTime: 20,
        startTime: 09, // time<10 needs trailing zero
        endTime: 23,
        disabled: ['1:00 pm', '4:00 pm', '5:30 pm']
    });

}

function foo2 () {
    document.getElementById('loader').style.display = 'inline';
    var sheetAppUrl = 'https://script.google.com/macros/s/AKfycbzvZvWaXBp_yioVKpgCA-41TWq7rG9-CXV-udCGBYxgJymFn5DqPZc30mVBFsK4CUTKIA/exec';
    //var $form = $('form#test-form');
    console.log(sheetAppUrl);

    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
      e.preventDefault()
    })

    fetch(sheetAppUrl, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            document.getElementById('email').value = '';
            document.getElementById('name').value = '';
            document.getElementById('loader').style.display = 'none';
        })
        .catch(error => console.error('Error!', error.message))

}

document.addEventListener('DOMContentLoaded', foo);
