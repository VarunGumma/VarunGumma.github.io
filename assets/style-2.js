// Initialize font properties
const fontname = "Nunito";
const fontweights = [300, 400]

// Color properties
const basecolor = "#000";
const accentcolor = "#222";
const highlightcolor = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "11pt";
const backgroundcolor = "#fff";

// Link properties
// const acolor = accentcolor;
const adecoration = "none";

// Menu properties
const menucolor = basecolor;
const menufontsize = "13pt";
const menudecoration = "none";

// Header properties
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "20pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = "bold";
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

// $("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor + " !important");
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor + " !important");
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", "#B51E21");
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);

$(document).ready(function() {
  $('.header').click(function() {
    var dropdownContainer = $(this).next('.dropdown-container');
    dropdownContainer.toggleClass('active');
  });
});

document.getElementById('news-arrow').addEventListener('click', function() {
  const dropdown = document.getElementById('news-dropdown');
  const arrowIcon = document.querySelector('#news-arrow i');
  
  if(dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
      arrowIcon.classList.remove('fa-chevron-right');
      arrowIcon.classList.add('fa-chevron-down');
  } else {
      dropdown.style.display = 'none';
      arrowIcon.classList.remove('fa-chevron-down');
      arrowIcon.classList.add('fa-chevron-right');
  }
});

document.getElementById('publication-arrow').addEventListener('click', function() {
  const dropdown = document.getElementById('publications-dropdown');
  const arrowIcon = document.querySelector('#publication-arrow i');
  
  if(dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
      arrowIcon.classList.remove('fa-chevron-right');
      arrowIcon.classList.add('fa-chevron-down');
  } else {
      dropdown.style.display = 'none';
      arrowIcon.classList.remove('fa-chevron-down');
      arrowIcon.classList.add('fa-chevron-right');
  }
});