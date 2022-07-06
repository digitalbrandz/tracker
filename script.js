var form = localStorage.getItem("form");

if(form) {
var formObj = JSON.parse(form);
  const keys = Object.keys(formObj );
  keys.forEach((key, index) => { 
});
}






/* find next friday */
function nextFriday()
{
var d = new Date();
switch (d.getDay())
{
case 0: d.setDate(d.getDate() + 5);
break;
case 1: d.setDate(d.getDate() + 4);
break;
case 2: d.setDate(d.getDate() + 3);
break;
case 3: d.setDate(d.getDate() + 2);
break;
case 4: d.setDate(d.getDate() + 1);
break;
case 6: d.setDate(d.getDate() + 6);
break;
}
return d;
}

function formatMoney(money) {
    return new Intl.NumberFormat('en-US', {   style: 'currency',  currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(money);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


let 
qtyInp = document.querySelector('#qty'),
iniInp = document.querySelector('#initialprice'),
currInp = document.querySelector('#currentprice');
qtyInp.addEventListener('keyup', updateTotals );
qtyInp.addEventListener('change', updateTotals );
iniInp.addEventListener('keyup', updateTotals );
iniInp.addEventListener('change', updateTotals );
currInp.addEventListener('keyup', updateTotals );
currInp.addEventListener('change', updateTotals );


/* set defaults */
var evt = document.createEvent("HTMLEvents");
evt.initEvent("keyup", false, true);
qtyInp.dispatchEvent(evt);

/* set date default */
// Variables
if(form === null) {
var date = new Date();
	// Remove attributes
	dteInp.removeAttribute('pattern');
	dteInp.removeAttribute('placeholder');
var nextFriday = nextFriday();
// Set the value
dteInp.value = nextFriday.getFullYear().toString() + '-' + (nextFriday.getMonth() + 1).toString().padStart(2, 0) +
    '-' + nextFriday.getDate().toString().padStart(2, 0);
}
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);




function updateTotals(e) {

let qtyInp = document.querySelector('#qty'),
iniInp = document.querySelector('#initialprice'),
currInp = document.querySelector('#currentprice'),
profitLossWrap = document.querySelector('#profitLoss'),
profitLoss = profitLossWrap.querySelector('#money'),
profitLossPercent = document.querySelector('#profitLoss #percent');



if(Number(currInp.value) > Number(iniInp.value)) {
profitLoss.innerHTML =  '+' + formatMoney( ((currInp.value - iniInp.value) * 100) * qtyInp.value ).replace('$','');
profitLossPercent.innerHTML = ' +' + numberWithCommas(((currInp.value-iniInp.value)/iniInp.value * 100).toFixed(2));
profitLossWrap.classList.remove('red');
}else{
  profitLoss.innerHTML = '-' + formatMoney( ((iniInp.value - currInp.value) * 100) * qtyInp.value ).replace('$','');
  profitLossPercent.innerHTML =  ((currInp.value-iniInp.value)/iniInp.value * 100).toFixed(2);
  profitLossWrap.classList.add('red');
}

saveChanges();
}


function saveChanges() {
  let formInputs = document.querySelectorAll('form input, form select');
  var data = {};
  [].forEach.call(formInputs, function(input) {
    // do whatever
  });
  localStorage.setItem('form', JSON.stringify(data));
}