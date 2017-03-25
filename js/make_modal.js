var modal = document.getElementById('modal');
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function openModal(){
    /*var modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    modal.className = 'modal';
    this.appendChild(modal);

    var captionText = document.createElement('div');
    captionText.setAttribute('id', 'caption');
    modal.appendChild(captionText);

    var span = document.createElement('span');
    span.className = 'close';
    modal.appendChild(span);
    window.span = span;

    var modalImg = document.createElement('img');
    modalImg.setAttribute('id', 'img');
    modalImg.className = 'modal-content';
    modalImg.setAttribute('src', "");
    modal.appendChild(modalImg);*/
    var thisArticle = this;
    modal.style.display = "block"; 
    var dataId = this.getAttribute('data-id');
    modalImg.src = climbs[dataId].climbImage;
    captionText.innerHTML = climbs[dataId].displayName /*+ ", "+climbs[dataId].displayGrade*/;
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  alignWithTop = true;
  thisArticle.scrollIntoView(alignWithTop);
}
    
}



for(i=0;i<climbs.length;i++){
	document.getElementById(climbs[i].name).addEventListener('click', openModal);
}