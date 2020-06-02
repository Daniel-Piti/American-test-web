const numOfQuestions = 20;
console.log(document.domain)
//a b c d ans
var qs = [
  [00,"0","----------","----------","----------",'a'],
  [01,"1","----------","----------","----------",'a'],
  [02,"2","----------","----------","----------",'a'],
  [03,"3","----------","----------","----------",'a'],
  [04,"4","----------","----------","----------",'a'],
  [05,"5","----------","----------","----------",'a'],
  [06,"6","----------","----------","----------",'a'],
  [07,"7","----------","----------","----------",'a'],
  [08,"8","----------","----------","----------",'a'],
  [09,"9","----------","----------","----------",'a'],
  
  [10,"----------","10","----------","----------",'b'],
  [11,"----------","11","----------","----------",'b'],
  [12,"----------","12","----------","----------",'b'],
  [13,"----------","13","----------","----------",'b'],
  [14,"----------","14","----------","----------",'b'],
  [15,"----------","15","----------","----------",'b'],
  [16,"----------","16","----------","----------",'b'],
  [17,"----------","17","----------","----------",'b'],
  [18,"----------","18","----------","----------",'b'],
  [19,"----------","19","----------","----------",'b'],

  [20,"----------","----------","20","----------",'c'],
  [21,"----------","----------","21","----------",'c'],
  [22,"----------","----------","22","----------",'c'],
  [23,"----------","----------","23","----------",'c'],
  [24,"----------","----------","24","----------",'c'],
  [25,"----------","----------","25","----------",'c'],
  [26,"----------","----------","26","----------",'c'],
  [27,"----------","----------","27","----------",'c'],
  [28,"----------","----------","28","----------",'c'],
  [29,"----------","----------","29","----------",'c'],

  [30,"----------","----------","----------","30",'d'],
  [31,"----------","----------","----------","31",'d'],
  [32,"----------","----------","----------","32",'d'],
  [33,"----------","----------","----------","33",'d'],
  [34,"----------","----------","----------","34",'d'],
  [35,"----------","----------","----------","35",'d'],
  [36,"----------","----------","----------","36",'d'],
  [37,"----------","----------","----------","37",'d'],
  [38,"----------","----------","----------","38",'d'],
  [39,"----------","----------","----------","39",'d'],
];

var that=[];
var index = -1;
var mone = 0;
var q;
var a;
var b;
var c;
var d;
var count;

window.onload = function start() {
  q = document.getElementById('q');
  a = document.getElementById('a');
  b = document.getElementById('b');
  c = document.getElementById('c');
  d = document.getElementById('d');
  count = document.getElementById('count');
  newTest();
  this.setQuestion();
}

function newTest(){
  let temp = 0;
  let ran;
  let i;
  let flag;
  while(temp<20){
    flag = 1;
    ran = parseInt(Math.random()*100%40);
    for(i=0;i<that.length;i++)
      if(ran==that[i])
        flag = 0;
    if(flag == 1)
      that[temp++]=ran;
  }
  console.log(that);
}

function setQuestion() {
  index++;
  q.innerText = qs[that[index]][0];
  a.innerHTML = qs[that[index]][1];
  b.innerHTML = qs[that[index]][2];
  c.innerHTML = qs[that[index]][3];
  d.innerHTML = qs[that[index]][4];
  count.innerText = index + 1 + ' / 5';
}

function pressOne(temp) {
  if (qs[that[index]][5] == temp)
    mone++;
  if (index > 3)
    finish();
  else
    setQuestion();
}

function finish(){
  document.getElementById('againBtn').disabled= false;
  a.disabled = true;
  b.disabled = true;
  c.disabled = true;
  d.disabled = true;
  document.getElementById('score').innerHTML='u answerred ' + mone + ' questions right!';
  document.getElementById('item').style.visibility='visible';
  document.getElementById('item').style.animation='fadeIn 0.4s';
}

function fadeOut(){
  document.getElementById('againBtn').disabled=true;
  document.getElementById('item').style.animation='fadeOut 0.4s';
  setTimeout(function(){  document.getElementById('item').style.visibility='hidden';},380);
  index = -1;
  mone = 0;
  newTest();
  setQuestion();
  a.disabled = false;
  b.disabled = false;
  c.disabled = false;
  d.disabled = false;
}