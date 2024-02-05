function myMove2(Day2){
				const days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
				let i, l;
				for(i = 0, l = days.length; i < l; i++){
					if(days[i] != Day2){
						document.getElementById(days[i]).style.top = '-450px';
						document.getElementById(days[i]).style.bottom = '-450px';
						document.getElementById(days[i]).style.transition = 'all 1.5s';
					}
				}
			}
let id = null;
function myMove(day) {
 
  var elem = document.getElementById(day);   
  myMove2(day);
  let pos = -450;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos != 160) {
		document.getElementById(day).style.transition = 'all 1s';
		if(day == "Monday"){
			document.getElementById("Monday").style.borderColor = "red";
			document.getElementById("Monday").style.backgroundColor = "red";
		}else if(day == "Tuesday"){
			document.getElementById("Tuesday").style.borderColor = "blue";
			document.getElementById("Tuesday").style.backgroundColor = "blue";
		}else if(day == "Wednesday"){
			document.getElementById("Wednesday").style.borderColor = "green";
			document.getElementById("Wednesday").style.backgroundColor = "green";
		}else if(day == "Thursday"){
			document.getElementById("Thursday").style.borderColor = "yellow";
			document.getElementById("Thursday").style.backgroundColor = "yellow";
		}else if(day == "Friday"){
			document.getElementById("Friday").style.borderColor = "purple";
			document.getElementById("Friday").style.backgroundColor = "purple";
		}else if(day == "Saturday"){
			document.getElementById("Saturday").style.borderColor = "orange";
			document.getElementById("Saturday").style.backgroundColor = "orange";
		}else if(day == "Sunday"){
			document.getElementById("Sunday").style.borderColor = "pink";
			document.getElementById("Sunday").style.backgroundColor = "pink";
		}
		
        pos++;
		pos++;
		elem.style.top = pos + 'px'; 
		elem.style.bottom = pos + 'px';
    } else {
      document.getElementById(day).style.backgroundColor = "white";
	  clearInterval(id);	  

    }
  }
}




