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
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const dr = urlParams.get('dr')
	console.log(dr);

	document.getElementById("dr").innerText = dr;
}

document.addEventListener('DOMContentLoaded', foo);
