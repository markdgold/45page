// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "http://i.imgur.com/lrEgqY6.jpg";
    captionText.innerHTML = "Sphere Grippin, V8";
}

// Get the modal
var modalTwo = document.getElementById('myModalTwo');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgTwo = document.getElementById('myImgTwo');
var modalImgTwo = document.getElementById("img02");
var captionTextTwo = document.getElementById("captionTwo");
imgTwo.onclick = function(){
    modalTwo.style.display = "block";
    modalImgTwo.src = "http://i.imgur.com/R6ttzpn.jpg";
    captionText.innerHTML = "So Many Circles, V8";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}