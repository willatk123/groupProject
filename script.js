/*
Show modal window
*/
var modal = document.getElementsByClassName("modal");

var btn = document.getElementsByClassName("btn");

var span = document.getElementsByClassName("close");

for (let i = 0; i < 4; i++) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };

  span[i].onclick = function () {
    modal[i].style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  };
}

/*
Show modal window end
*/

/*
INFORMATION FROM API
*/
/*
 https://ipdata.co/blog/how-to-get-the-ip-address-in-javascript/
*/
var pInfo = document.querySelector(".information");
function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "627c6d76f95b0ee0e7cef70893447a56f28f3859021e4cab28a183ac";
json(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.latitude, data.longitude);
  pInfo.textContent = `IP Adress: ${data.ip}, City: ${data.city}, Approximate Latitude: ${data.latitude}, Approximate Longitude: ${data.longitude}, Operating System: ${window.navigator.oscpu}`;
});

pInfo.textContent = json(
  `https://api.ipdata.co/27.126.160.0/threat?api-key=${apiKey}`
).then((data) => {
  console.log(data.blocklists);
});

/*
INFORMATION FROM API END
*/

width = window.innerWidth;
height = window.innerHeight;
console.log(width, height);

/*
When clicking on a defintion it will appear or disappear depending on it's current state. Implemented to reduce clutter on mobile.
*/
var x = document.querySelectorAll(".inline-d");

x.forEach((e) => {
  e.addEventListener("click", function () {
    console.log(e.childNodes[1].className);
    console.log(e.childNodes[1].textContent);
    w = e.childNodes[1];
    s = getComputedStyle(w);
    if (s.display === "none") {
      w.style.display = "inline";
    } else if (s.display === "inline") {
      w.style.display = "none";
    }
  });
});

/*
DECLUTTERING END
*/

/* calculating header height for internal link offset due to the sticky header */

var title = document.querySelectorAll(".shift"),
  i;
console.log(title.length);
var header = document.querySelector("header");

for (i = 0; i < title.length; i++) {
  var height = header.offsetHeight;
  // console.log(height);
  var offsetSize = height;
  console.log(offsetSize);
  title[i].style.paddingTop = height + "px";
  console.log(title[i]);
  title[i].style.paddingBottom = -height + "px";
}

console.log(window.navigator.oscpu);

/* calculating header height for offset end */
