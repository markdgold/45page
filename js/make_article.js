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

var theFuture = new Climb("The Future (hold for 3 sec)", 0, 'oneMover', 'MDG', 5, 10, 2016, "http://i.imgur.com/EXo4DXl.jpg");
climbs.push(theFuture);

var pinchTrifecta = new Climb("Pinch Trifecta", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/72862T0.jpg");
climbs.push(pinchTrifecta);

var scarabs = new Climb("Scarabs", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/skMeQJF.jpg");
climbs.push(scarabs);

var bn1 = new Climb("BN1", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/rFAXEtU.jpg");
climbs.push(bn1);

var bn2 = new Climb("BN2", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/0vR8H5l.jpg");
climbs.push(bn2);

var bn3 = new Climb("BN3", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/4MXTb5r.jpg");
climbs.push(bn3);

var bn4 = new Climb("BN4", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/6LglAb2.jpg");
climbs.push(bn4);

var bn5 = new Climb('BN5', 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/TM0YD46.jpg");
climbs.push(bn5);

var bn6 = new Climb('BN6', 8, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/N5uuhRn.jpg");
climbs.push(bn6);

var bn7 = new Climb("BN7", 7, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/wxeGL6F.jpg");
climbs.push(bn7);

var bn8 = new Climb("BN8", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/0SE4fvH.jpg");
climbs.push(bn8);

var noShoes = new Climb("No Shoes", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/WI3GFEM.jpg");
climbs.push(noShoes);

var ironCross = new Climb("Iron Cross", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/PhmaQIj.jpg");
climbs.push(ironCross);

var bigPapaUndies = new Climb("Big Papa Undies", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/hFGTjYg.jpg");
climbs.push(bigPapaUndies);

var crimpTrainer = new Climb("Crimp Trainer", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/gHlkubA.jpg");
climbs.push(crimpTrainer);

var jugFeet = new Climb("Jug Feet", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/oJl4PRf.jpg");
climbs.push(jugFeet);

var brianWins = new Climb("Brian Wins", 0, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/uWE5oYx.jpg");
climbs.push(brianWins);

var bumpDyno = new Climb("Bump Dyno (bump to finish hold)", 0, 'oneMover', 'NUG', 5, 10, 2016, "http://i.imgur.com/8zW8fIF.jpg");
climbs.push(bumpDyno);

var campus = new Climb("Campus", 0, 'crimp', 'NUG', 5, 10, 2016, "http://i.imgur.com/8H7F1uO.jpg");
climbs.push(campus);

var crimpterbator = new Climb("Crimpterbator", 0, 'enduro', 'NUG', 5, 10, 2016, "http://i.imgur.com/sDKlkCv.jpg");
climbs.push(crimpterbator);

var pinchShuffle = new Climb("Pinch Shuffle", 8, 'power', 'NUG', 5, 10, 2016, "http://i.imgur.com/avf0hHa.jpg");
climbs.push(pinchShuffle);

var marksProj = new Climb("Mark's Proj", 8, 'oneMover', 'NUG', 5, 10, 2016, "http://i.imgur.com/HNrAS5q.jpg");
climbs.push(marksProj);

var markWins = new Climb("Mark Wins", 6, 'oneMover', 'NUG', 5, 10, 2016, "http://i.imgur.com/IZdjmR6.jpg");
climbs.push(markWins);

var lockOffTrainer = new Climb("Lock Off Trainer", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/d4xD01J.jpg");
climbs.push(lockOffTrainer);

var blackScarabs = new Climb("Black Scarabs", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/0ZtfDeF.jpg");
climbs.push(blackScarabs);

var theOG = new Climb("The OG", 8, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/jGfYq6y.jpg");
climbs.push(theOG);

var bigCrossLeft = new Climb("Big Cross Left", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/Yj8dkVw.jpg");
climbs.push(bigCrossLeft);

var cross = new Climb("Cross", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/o889r1t.jpg");
climbs.push(cross);

var flagg = new Climb("Flagg", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/Kf0WnEf.jpg");
climbs.push(flagg);

var gormenghast = new Climb("Gormenghast", 9, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/GuKGoOr.jpg");
climbs.push(gormenghast);

var heardYouLikeSofties = new Climb("Heard You Like Softies", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/yBHbe6l.jpg");
climbs.push(heardYouLikeSofties);

var roseFinish = new Climb("Rose Finish", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/MfQldUs.jpg");
climbs.push(roseFinish);

var leftVar = new Climb("Left Var", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/1wNIqR0.jpg");
climbs.push(leftVar);

var noHeels = new Climb("No Heels", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/JzJhhDO.jpg");
climbs.push(noHeels);

var nugies = new Climb("Nugies", 0, 'crimp', 'DNA', 5, 10, 2016, "http://i.imgur.com/zkFSFk0.jpg");
climbs.push(nugies);

var rightVar = new Climb("Right Var", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/vws41x5.jpg");
climbs.push(rightVar);

var shorty = new Climb("Shorty", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/V31i8pT.jpg");
climbs.push(shorty);

var tallVersion = new Climb("Tall Version", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/SCeE2tn.jpg");

var wodPenchLeft = new Climb("Wod Pench Left", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/1cOAq4z.jpg");
climbs.push(wodPenchLeft);

var wodPenchRight = new Climb("Wod Pench Right", 0, 'power', 'DNA', 5, 10, 2016, "http://i.imgur.com/owUVr8k.jpg");
climbs.push(wodPenchRight);






var pinchPunch = new Climb("Pinch Punch", 9, 'power', "MDG", 3, 2, 2017, "http://i.imgur.com/ZP4bFn5.jpg");
climbs.unshift(pinchPunch);

var CSS = new Climb("CSS", 10, 'power', "MDG", 3, 19, 2017, "http://i.imgur.com/VxbESLA.jpg");
climbs.unshift(CSS);

var HTML = new Climb("HTML", 10, 'power', "MDG", 3, 19, 2017, "http://i.imgur.com/2AyoGBs.jpg");
climbs.unshift(HTML);

var JS = new Climb("JS", 10, 'crimp', "MDG", 3, 19, 2017, "http://i.imgur.com/ztQin95.jpg");
climbs.unshift(JS);

var moon6b = new Climb("Moon 6B", 7, 'power', "MDG", 3, 19, 2017, "http://i.imgur.com/PMFpw9O.jpg");
climbs.unshift(moon6b);



makeClimbs();