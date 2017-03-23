var modal = document.getElementById('modal');
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");

function openModal(){
    modal.style.display = "block"; 
    var dataId = this.getAttribute('data-id');
    modalImg.src = climbs[dataId].climbImage;
    captionText.innerHTML = climbs[dataId].displayName + ", "+climbs[dataId].displayGrade;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	modal.style.display = "none";
}

for(i=0;i<climbs.length;i++){
	document.getElementById(climbs[i].name).addEventListener('click', openModal);
}