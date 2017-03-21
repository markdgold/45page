var Climb = function(displayName, grade, style, setBy, month, day, year, image){
	this.displayName = displayName;
	this.name = displayName.replace(/\s+/g, '')
	this.grade = grade;
	this.displayGrade = "V"+grade;
	this.styles = style;
	this.setBy = setBy;
	this.monthSet = month;
	this.daySet = day;
	this.yearSet = year;
	this.date = month+"/"+day+"/"+year;
	this.climbImage = image;
};

var climbs = [
	{
		displayName: 'Mystic Smilez',
		name: 'mysticSmilez',
		displayGrade: 'V7',
		grade: 7,
		styles: 'tech',
		setBy: 'MDG',
		date: '2/23/17',
		monthSet: 2,
		yearSet: 2017,
		climbImage: 'http://i.imgur.com/KG2y2NS.jpg'
	},
	{
		displayName: 'Sphere Grippin',
		name: 'sphereGrippin',
		displayGrade: 'V8',
		grade: 8,
		styles: 'power',
		setBy: 'MDG',
		date: '5/10/16',
		monthSet: 5,
		yearSet: 2016,
		climbImage: 'http://i.imgur.com/lrEgqY6.jpg'
	},
	{
		displayName: 'So Many Circles',
		name: 'soManyCircles',
		displayGrade: 'V8',
		grade: 8,
		styles: 'power',
		setBy: 'MDG',
		date: '5/10/16',
		monthSet: 3,
		yearSet: 2016,
		climbImage: 'http://i.imgur.com/R6ttzpn.jpg'
	},
	{
		displayName: "Brian's Proj",
		name: 'briansProj',
		displayGrade: 'V9',
		grade: 9,
		styles: 'power',
		setBy: 'MDG',
		date: '5/10/16',
		monthSet: 5,
		yearSet: 2016,
		climbImage: 'http://i.imgur.com/1dXhOzO.jpg'
	},
	{
		displayName: "Red Giant",
		name: 'redGiant',
		displayGrade: 'V6',
		grade: 6,
		styles: 'crimp',
		setBy: 'MDG',
		date: '5/10/16',
		monthSet: 5,
		yearSet: 2016,
		climbImage: "http://i.imgur.com/guOURS7.jpg"
	}
];

var section = document.getElementById('mainContent');


function makeClimbs(){
	for(i=0; i<climbs.length; i++){
		var climbArticle = document.createElement('article');
		climbArticle.setAttribute('id', climbs[i].name);
		climbArticle.setAttribute('data-id',i);
		climbArticle.className += " " + climbs[i].displayGrade;
		climbArticle.className += " " + climbs[i].monthSet;
		climbArticle.className += " " + climbs[i].yearSet;
		climbArticle.className += " " + climbs[i].styles;
		climbArticle.style.backgroundImage = "url("+climbs[i].climbImage+")";
		section.appendChild(climbArticle);

		var climbLink = document.createElement('a');
		climbLink.setAttribute('href', "#");
		climbArticle.appendChild(climbLink);

		var climbHeader = document.createElement('header');
		climbHeader.className = 'problems';
		climbHeader.innerHTML = climbs[i].displayName;
		climbLink.appendChild(climbHeader);

		var climbGrade = document.createElement('p');
		climbGrade.innerHTML = climbs[i].displayGrade;
		climbHeader.appendChild(climbGrade);

		var climbSet = document.createElement('p');
		climbSet.innerHTML = 'Set By: '+climbs[i].setBy+ ", "+ climbs[i].date;
		climbHeader.appendChild(climbSet);
	}
}

//add new climb to climbs list: ("Name", grade, [styles], "set by", month, day, year, "imgur link")

var bigCrossRight = new Climb("Big Cross Right", 9,'crimp', "DNA", 12, 13, 2016, "http://i.imgur.com/lxIqrUn.jpg");
climbs.push(bigCrossRight);

var pinchCrimp25 = new Climb("Pinch Crimp 25", 6, 'power', 'MDG', 5, 10, 2016, "http://i.imgur.com/fwuxaqi.jpg");
climbs.push(pinchCrimp25);

var gonzo = new Climb("Gonzo", 7, 'crimp', 'MDG', 5, 10, 2016, "http://i.imgur.com/O7ECFVz.jpg");
climbs.push(gonzo)

var loafs = new Climb("Loafs", 9, 'power', 'MDG', 2, 16, 2017, "http://i.imgur.com/ApD0Iqw.jpg")
climbs.unshift(loafs);

var stinkyPinky = new Climb("Stinky Pinky", 6, 'power', 'MDG', 2, 23, 2017, "http://i.imgur.com/gHtDkfg.jpg");
climbs.unshift(stinkyPinky);

var woodMixed = new Climb("Wood Mixed", 8, 'crimp', 'MDG', 5, 10, 2016, "http://i.imgur.com/gLLYYfy.jpg");
climbs.push(woodMixed);

var pinchPinch25 = new Climb("Pinch Pinch 25", 6, 'power', 'MDG', 5, 10, 2016, "http://i.imgur.com/HEN3o6R.jpg");
climbs.push(pinchPinch25);

var pullPow = new Climb("Pull Pow", 7, 'power', 'MDG', 5, 10, 2016, "http://i.imgur.com/mPQmTd6.jpg");
climbs.push(pullPow);

var bigPull25 = new Climb("Big Pull 25", 6, 'power', 'MDG', 5, 10, 2016, "http://i.imgur.com/HlwVy6W.jpg");
climbs.push(bigPull25);

var obeyGravity = new Climb("Obey Gravity", 7, 'power', 'MDG', 5, 10, 2016, "http://i.imgur.com/5enasSN.jpg");
climbs.push(obeyGravity);

var dyno = new Climb("Dyno", 6, 'oneMover', 'MDG', 5, 10, 2016, "http://i.imgur.com/tstmYED.jpg");
climbs.push(dyno);

var theFuture = new Climb("The Future (hold for 3 sec)", 12, 'oneMover', 'MDG', 5, 10, 2016, "http://i.imgur.com/EXo4DXl.jpg");
climbs.push(theFuture);




var pinchPunch = new Climb("Pinch Punch", 9, 'power', "MDG", 3, 2, 2017, "http://i.imgur.com/ZP4bFn5.jpg");
climbs.unshift(pinchPunch);

makeClimbs();