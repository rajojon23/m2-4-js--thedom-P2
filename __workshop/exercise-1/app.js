// Preset values
const FROGS = 3;


let track =   document.querySelector('#track');
let lanes = []; 

let racers = [];

let positions = [];


for (let i = 0; i < FROGS; i++) {
	lanes[i] = document.createElement("li"); 
	let span = document.createElement("span"); 
	let span_content = `${i+1}`;

	span.insertAdjacentHTML("beforeend", span_content);/*inserts the template literals content*/

	lanes[i].classList.add(`lane-${i+1}`);
	lanes[i].appendChild(span);
	track.appendChild(lanes[i]);
}
let randomly = () => Math.random() - 0.5;
let dynamic_frogstable = [].concat(frogstable).sort(randomly); 

let count = 0;
frogstable.forEach(function(frog, index){
	

	if(count>2){
		return;
	}else{
		racers.push(dynamic_frogstable[index]);/*assign 3 random frogs as racers*/
	}
	
	count++;
});



racers.forEach(function(frog, index){
	lanes[index].childNodes[0].textContent = `${frog.number}`;
	// lanes[index].childNodes[0].style.background = `${frog.color}`;
	lanes[index].childNodes[0].style.backgroundImage = frog.image;
	lanes[index].childNodes[0].style.backgroundSize = "cover";
	lanes[index].childNodes[0].style.backgroundPosition = "center";
	lanes[index].childNodes[0].classList.add('frog');
	lanes[index].childNodes[0].style.border = "none";
	lanes[index].childNodes[0].style.height = "80px";
	lanes[index].childNodes[0].style.width = "80px";

	let span = document.createElement("span"); 
	span.classList.add('frog-name');
	let span_content = `${frog.name}`;
	span.insertAdjacentHTML("beforeend", span_content);/*inserts the template literals content*/
	lanes[index].appendChild(span);

	frog.progress = 0;
	frog.lane = lanes[index].className;





})

racers.forEach(function(racer){
	racingFrog(racer);


	  // if(racer.progress >=100){
	  	
	  	



		  	
		  	
	  // }
});



function racingFrog(racer) {
  	// console.log("racingFrog() ", racer);
	// Calculate the hop distance (as a percentage of the `trackWidth`) with the following formula.
	const trackWidth = track.offsetWidth;

	const hop = setInterval(function () {
	  const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
	  // add hopLength to progress
	  racer.progress += hopLength;
	  // add a console log to verify
	  // console.log(`${racer.name} is at ${racer.progress}`);
	  let lane = document.getElementsByClassName(`${racer.lane}`);

	  lane[0].childNodes[0].style.left = `${racer.progress}%`; 


	  if(racer.progress >=98){
	  	

		  	clearInterval(hop);

		  	positions.push(racer.name);
		  	console.log(`${positions[0]} WINS`);

		  	let win_banner = document.createElement("div"); 
		  	win_banner.classList.add('winner');
		  	win_banner.style.color = "orange";
		  	win_banner.style.position = "absolute";
		  	win_banner.style.left= "40%";
		  	win_banner.style.fontWeight= "bold";
		  	win_banner.style.fontSize= "40px";



		  	win_banner.insertAdjacentHTML("beforeend", `${positions[0]} WINS!`);	

		  	let body =   document.querySelector('body');
	

		  	let win_banner_exists = document.getElementsByClassName("winner");

		  	/*removes winner div before displaying it again*/
			while (document.getElementsByClassName('winner')[0]) {
			        document.getElementsByClassName('winner')[0].remove();
			    }
		  	body.appendChild(win_banner);		  	


	  }
	  


	}, 1000);

	

}

