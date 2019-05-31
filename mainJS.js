//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
const yup = document.getElementById("total_income");
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
const yup2 = document.getElementById("expenses");
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
const yup3 = document.getElementById("budget__value");
//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
function funkcija_1(){
    document.getElementById('budget__value').innerHTML = value;
}
//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function funkcija_2(ienakumi,type,desc,value){
consonle.log("ienakumi",ienakumi,"type",type,"desc",desc,"value",value);
}
//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
function myfunction(){
    console.log("rtv");
}

//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts

//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības

//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības

//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
funkcija_1(123123);
funkcija_2(ienakumi,true, 'Alga2',136);



function myFunction2() {
  var str = "Visit W3Schools";
  var patt = /w3schools/i;
  var result = str.match(patt);
  document.getElementById("demo").innerHTML = result;
}

// #region Variables
const inc = document.getElementById('all_income');
const exp = document.getElementById('all_expenses');
const budg = document.getElementById('budget__value');

const tincome = document.querySelector('.total_income');
const texpenses = document.querySelector('.total_expenses');
// #endregion

inc.innerHTML = localStorage.getItem('income');
exp.innerHTML = localStorage.getItem('expenses');

let BudgSaveData = {}, id = 0;

//TotalBudget, kas izmaina pieejamā budžeta vertību
function TotalBudget(tbudg) {
  budg.innerHTML = parseInt(budg.innerHTML, 0) + parseInt(tbudg, 0);
  localstorage();
}

//5.additem funkcija, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function additem(isincome, description, value) {
  var item = document.createElement('DIV');
  item.className += 'list_item';
  var valdiv = document.createElement('DIV');
  valdiv.className += 'list_valdivue';
  var descrdiv = document.createElement('DIV');
  descrdiv.className += 'list_description';
  descrdiv.innerHTML = description;

  if (isincome == 'income') {
    valdiv.innerHTML = '+' + value + '€';
    BudgSaveData['income' + id.toString()] = 'id:' + id + 'description:' + description + 'value:' + value;
    // console.log('BudgSavedData', BudgSaveData);
    inc.appendChild(item);
  } else {
    valdiv.innerHTML = '-' + value + '€';
    exp.appendChild(item);
    value = -Math.abs(value);
  }
  id++;
  item.appendChild(descrdiv);
  item.appendChild(valdiv);
  updatetotals(value, isincome);
  TotalBudget(value);
}

function addtolist() {
  var val = document.getElementById('add_value');
  var descr = document.getElementById('add_description');
  var isitincome = document.getElementById('add_type');
  if (val.value == '' || descr.value == '') {
    alert('Visi lauki nav aizpildīti!');
  } else {
    additem(isitincome.value, descr.value, val.value);
  }
}

function updatetotals(value, income) {
  if (income == 'true') {
    tincome.innerHTML = parseInt(tincome.innerHTML, 0) + parseInt(value, 0);
  } else {
    texpenses.innerHTML = parseInt(texpenses.innerHTML, 0) - parseInt(value, 0);
  }
}

function localstorage() {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('income', inc.innerHTML);
    console.log('2')
    localStorage.setItem('expenses', exp.innerHTML);
    localStorage.setItem('budleft', budg.innerHTML);
  }
}

function clearlocal() {
  localStorage.clear();
  location.reload();
}

//Salabot localStorage tā, lai pēc lapas refresha nepazūd pieejamais budžets un kopējā izdevumu un ienākumu vērtība
clearElement.addEventListener("click", function(){
  localStorage.clear()
  location.reload()
})
//Pievienot iespēju izveidot jaunu ierakstu budzeta kalkulātora izmantojot enter taustinu

//Izveidot vienu mainīgo, kurā veido sarakstu ar ienākumiem un izdevumiem un to visu glabāt objektā, kuru pēc tam saglabā localStorage

//Optimizēt kodu, atbrīvoties no liekā

//Pievienot iespēju nodzēst sarakstu elementu un tas automātiski atrēķinās nost

//ja lauki ir aizpildīti, tad pievienot ierakstu sarakstam var uzspiežot enter (Poga paliek pieejama)

//Pievienot iespēju izveidot jaunu mēnesi. Opcija Jauns mēnesis saglabās iepriekšējā mēneša datus un nodzēsīs laukus priekš jaunā mēneša.

//Pēc vajadzības var atvērt iepriekšējos mēnešus un apskatīt to ienākumus un izdevumus

