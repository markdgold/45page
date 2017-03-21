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



//filter form selections
var powerSelector = document.querySelector('input[name=power]');
var techSelector = document.querySelector('input[name=tech]');
var crimpSelector = document.querySelector('input[name=crimp]');
var oneMoverSelector = document.querySelector('input[name=oneMover]');
var enduroSelector = document.querySelector('input[name=enduro]');
var newSelector = document.querySelector('input[name=new]');
var year = new Date().getFullYear();
var month = new Date().getMonth()+1;

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
  filterClimbs();
});
//

function checkClimb(){
    for(i=0;i<climbs.length;i++){
        var climb = $('[data-id ='+i+']');        
        if(powerSelector.checked && climb.hasClass('power')){
            climb.css("display", "inline-block");
        }
        else if(techSelector.checked && climb.hasClass('tech')){
            climb.css("display", "inline-block");
        }
        else if(crimpSelector.checked && climb.hasClass('crimp')){
            climb.css("display", "inline-block");
        }
        else if(oneMoverSelector.checked && climb.hasClass('oneMover')){
            climb.css("display", "inline-block");
        }
        else if(enduroSelector.checked && climb.hasClass('enduro')){
            climb.css("display", "inline-block");
        }
        else if(powerSelector.checked == false && techSelector.checked == false && crimpSelector.checked == false && oneMoverSelector.checked == false && enduroSelector.checked == false){
            climb.css("display", "inline-block");
        }
        else{
            climb.css("display", "none");
        }
        if(newSelector.checked){
            $("section").find('article:not(.' +year+')').css("display", "none");
            $("section").find('article:not(.' +month+')').css("display", "none");
        }
        if(climbs[i].grade >stepSlider.noUiSlider.get()[1] || climbs[i].grade <stepSlider.noUiSlider.get()[0]){
            climb.css("display", "none");
        }
    }
}

function filterClimbs(){
    $('article').css('display', 'none');
    checkClimb()
}


powerSelector.addEventListener('change',filterClimbs);
crimpSelector.addEventListener('change',filterClimbs);
enduroSelector.addEventListener('change', filterClimbs);
techSelector.addEventListener('change',filterClimbs);
oneMoverSelector.addEventListener('change',filterClimbs);
newSelector.addEventListener('change',filterClimbs);


//set by
function setBy(event){
    var setBy = this.options[this.selectedIndex].text;
    console.log(document.getElementById('MDGset').innerHTML)
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