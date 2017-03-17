//all check box
// document.addEventListener("DOMContentLoaded", function (event) {
//     var allSelector = document.querySelector('input[name=all]');
//     allSelector.addEventListener('change', function (event) {
//         if (allSelector.checked) {
//             $("section").find('article').css("display", "inline-block");
//             console.log("all checked");
//         } else {
//         	console.log("all unchecked")
//         	$("section").find('article').css("display", "none");
//         }
//     });
// });

//pop up filter
var filterForm = document.getElementById("filterForm");
var filterLink = document.getElementById("filterLink");

function filterDisplay(){
    if(filterForm.style.display == "inline-block"){
        filterForm.style.display = "none";
        filterLink.style.fontWeight = "normal";
    }
    else{
        filterForm.style.display = 'inline-block';
        filterLink.style.fontWeight = "bold";
        filterLink.style.background = "white";

    }
}

document.addEventListener("DOMContentLoaded", function (event){
	filterLink.addEventListener('click',filterDisplay)
});

//filter form
var powerSelector = document.querySelector('input[name=power]');
var techSelector = document.querySelector('input[name=tech]');
var crimpSelector = document.querySelector('input[name=crimp]');
var oneMoverSelector = document.querySelector('input[name=oneMover]');
var enduroSelector = document.querySelector('input[name=enduro]');
var openHandSelector = document.querySelector('input[name=openHand]');
var allSelector = document.querySelector('input[name=all]');

//Power check box
function powerBox(event){
	if (powerSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.power').css("display", "inline-block");
        } else {
        	$("section").find('.power').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    powerSelector.addEventListener('change', powerBox)
});

//enduro check box
function enduroBox(event){
    if (enduroSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.enduro').css("display", "inline-block");
        } else {
            $("section").find('.enduro').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    enduroSelector.addEventListener('change', enduroBox)
});

//openHand check box
function openHandBox(event){
    if (openHandSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.openHand').css("display", "inline-block");
        } else {
            $("section").find('.openHand').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    openHandSelector.addEventListener('change', openHandBox)
});

//oneMover check box
function oneMoverBox(event){
    if (oneMoverSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.oneMover').css("display", "inline-block");
        } else {
            $("section").find('.oneMover').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    oneMoverSelector.addEventListener('change', oneMoverBox)
});

//tech check box
function techBox(event){
	if (techSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.tech').css("display", "inline-block");
        } else {
        	$("section").find('.tech').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    techSelector.addEventListener('change', techBox)
});

//crimp check box
function crimpBox(event){
	if (crimpSelector.checked) {
            document.getElementsByName('all')[0].checked = false;
            allBox(event);
            $("section").find('.crimp').css("display", "inline-block");
        } else {
        	$("section").find('.crimp').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    crimpSelector.addEventListener('change', crimpBox)
});

//All check box
function allBox(event){
	if (allSelector.checked) {
            document.getElementsByName('crimp')[0].checked = false;
            crimpBox(event);
            document.getElementsByName('power')[0].checked = false;
            powerBox(event);
            document.getElementsByName('tech')[0].checked = false;
            techBox(event);
            $("section").find('article').css("display", "inline-block");
        } else {
        	$("section").find('article').css("display", "none");
        }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var allSelector = document.querySelector('input[name=all]');
    allSelector.addEventListener('change', allBox)
});

//new check box
var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=new]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
            $("section").find('article:not(.' +year+')').css("display", "none");
            $("section").find('article:not(.' +month+')').css("display", "none");
        } else {
            $("section").find('article').css("display", "inline-block");
        }
    });
});

//grade selector
var stepSlider = document.getElementById('slider-step');

noUiSlider.create(stepSlider, {
    start: [0, 12],
    step: 1,
    connect: true,
    range: {
      'min': 0,
      'max': 12
    }
});

var stepValues = [
  document.getElementById('slider-step-value-lower'),
  document.getElementById('slider-step-value-upper')
];

stepSlider.noUiSlider.on('update', function( values, handle ) {
  stepValues[handle].innerHTML = "V"+Math.trunc(values[handle]);
  for(i=0; i<climbs.length; i++){
    if(climbs[i].grade>=stepSlider.noUiSlider.get()[0] && climbs[i].grade<=stepSlider.noUiSlider.get()[1]){
        document.getElementById(climbs[i].name).style.display = "inline-block";
    }
    else{
        document.getElementById(climbs[i].name).style.display = "none";
    }
  }
});

//set by
function setBy(event){
    var setBy = this.options[this.selectedIndex].text;
    for(i=0; i<climbs.length; i++){
        if(setBy == 'All'){
            document.getElementById(climbs[i].name).style.display = "inline-block";
        }
        else if(climbs[i].setBy != setBy){
            document.getElementById(climbs[i].name).style.display = "none";
        }
        else{
            document.getElementById(climbs[i].name).style.display = "inline-block";
        }
    }
};