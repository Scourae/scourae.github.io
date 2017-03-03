var km;
var miles;
var m;
var foot;
var m2;
var yards;
var cm;
var inches;
var c;
var f;
var msup2;
var acres;
var litres;
var ounces;
var litres2;
var pints;
var litres3;
var quarts;
var litres4;
var gallons;

window.addEventListener('load', function () {
	km = document.getElementById("km");
	miles = document.getElementById("miles");
	km.addEventListener('input', function (event) {
		km_miles(0);
	});
	miles.addEventListener('input', function (event) {
		km_miles(1);
	});
	m = document.getElementById("m");
	foot = document.getElementById("foot");
	m.addEventListener('input', function (event) {
		m_foot(0);
	});
	foot.addEventListener('input', function (event) {
		m_foot(1);
	});
	m2 = document.getElementById("m2");
	yards = document.getElementById("yards");
	m2.addEventListener('input', function (event) {
		m2_yards(0);
	});
	yards.addEventListener('input', function (event) {
		m2_yards(1);
	});
	cm = document.getElementById("cm");
	inches = document.getElementById("inches");
	cm.addEventListener('input', function (event) {
		cm_inches(0);
	});
	inches.addEventListener('input', function (event) {
		cm_inches(1);
	});
	c = document.getElementById("c");
	f = document.getElementById("f");
	c.addEventListener('input', function (event) {
		c_f(0);
	});
	f.addEventListener('input', function (event) {
		c_f(1);
	});
	msup2 = document.getElementById("msup2");
	acres = document.getElementById("acres");
	msup2.addEventListener('input', function (event) {
		msup2_acres(0);
	});
	acres.addEventListener('input', function (event) {
		msup2_acres(1);
	});
	litres = document.getElementById("litres");
	ounces = document.getElementById("ounces");
	litres.addEventListener('input', function (event) {
		litres_ounces(0);
	});
	ounces.addEventListener('input', function (event) {
		litres_ounces(1);
	});
	litres2 = document.getElementById("litres2");
	pints = document.getElementById("pints");
	litres2.addEventListener('input', function (event) {
		litres2_pints(0);
	});
	pints.addEventListener('input', function (event) {
		litres2_pints(1);
	});
	litres3 = document.getElementById("litres3");
	quarts = document.getElementById("quarts");
	litres3.addEventListener('input', function (event) {
		litres3_quarts(0);
	});
	quarts.addEventListener('input', function (event) {
		litres3_quarts(1);
	});
	litres4 = document.getElementById("litres4");
	gallons = document.getElementById("gallons");
	litres4.addEventListener('input', function (event) {
		litres4_gallons(0);
	});
	gallons.addEventListener('input', function (event) {
		litres4_gallons(1);
	});
});

function km_miles(update) {
	var km_var = parseFloat(km.value);
	var miles_var = parseFloat(miles.value);
	if ((update == 0) && !isNaN(km_var))  {
		miles.value = (Math.round((km_var * 0.621371) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(miles_var))  {
		km.value = (Math.round((miles_var * 1.60934) * 10000) / 10000.0).toString();
	}
}

function m_foot(update) {
	var m_var = parseFloat(m.value);
	var foot_var = parseFloat(foot.value);
	if ((update == 0) && !isNaN(m_var))  {
		foot.value = (Math.round((m_var * 3.28084) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(foot_var))  {
		m.value = (Math.round((foot_var * 0.3048) * 10000) / 10000.0).toString();
	}
}

function m2_yards(update) {
	var m2_var = parseFloat(m2.value);
	var yards_var = parseFloat(yards.value);
	if ((update == 0) && !isNaN(m2_var))  {
		yards.value = (Math.round((m2_var * 1.09361) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(yards_var))  {
		m2.value = (Math.round((yards_var * 0.9144) * 10000) / 10000.0).toString();
	}
}

function cm_inches(update) {
	var cm_var = parseFloat(cm.value);
	var inches_var = parseFloat(inches.value);
	if ((update == 0) && !isNaN(cm_var))  {
		inches.value = (Math.round((cm_var * 0.393701) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(inches_var))  {
		cm.value = (Math.round((inches_var * 2.54) * 10000) / 10000.0).toString();
	}
}

function c_f(update) {
	var c_var = parseFloat(c.value);
	var f_var = parseFloat(f.value);
	if ((update == 0) && !isNaN(c_var))  {
		f.value = (Math.round((c_var * 9 / 5 + 32) * 100) / 100.0).toString();
	}
	else if ((update == 1) && !isNaN(f_var))  {
		c.value = (Math.round(((f_var - 32) / 9 * 5) * 100) / 100.0).toString();
	}
}

function msup2_acres(update) {
	var msup2_var = parseFloat(msup2.value);
	var acres_var = parseFloat(acres.value);
	if ((update == 0) && !isNaN(msup2_var))  {
		acres.value = (Math.round((msup2_var * 0.000247105) * 100000) / 100000.0).toString();
	}
	else if ((update == 1) && !isNaN(acres_var))  {
		msup2.value = (Math.round((acres_var * 4046.86) * 100000) / 100000.0).toString();
	}
}

function litres_ounces(update) {
	var litres_var = parseFloat(litres.value);
	var ounces_var = parseFloat(ounces.value);
	if ((update == 0) && !isNaN(litres_var))  {
		ounces.value = (Math.round((litres_var * 33.814) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(ounces_var))  {
		litres.value = (Math.round((ounces_var * 0.0295735) * 10000) / 10000.0).toString();
	}
}

function litres2_pints(update) {
	var litres2_var = parseFloat(litres2.value);
	var pints_var = parseFloat(pints.value);
	if ((update == 0) && !isNaN(litres2_var))  {
		pints.value = (Math.round((litres2_var * 2.11338) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(pints_var))  {
		litres2.value = (Math.round((pints_var * 0.473176) * 10000) / 10000.0).toString();
	}
}

function litres3_quarts(update) {
	var litres3_var = parseFloat(litres3.value);
	var quarts_var = parseFloat(quarts.value);
	if ((update == 0) && !isNaN(litres3_var))  {
		quarts.value = (Math.round((litres3_var * 1.05669) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(quarts_var))  {
		litres3.value = (Math.round((quarts_var * 0.946353) * 10000) / 10000.0).toString();
	}
}

function litres4_gallons(update) {
	var litres4_var = parseFloat(litres4.value);
	var gallons_var = parseFloat(gallons.value);
	if ((update == 0) && !isNaN(litres4_var))  {
		gallons.value = (Math.round((litres4_var * 0.264172) * 10000) / 10000.0).toString();
	}
	else if ((update == 1) && !isNaN(gallons_var))  {
		litres4.value = (Math.round((gallons_var * 3.78541) * 10000) / 10000.0).toString();
	}
}