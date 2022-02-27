// 날짜
const today = document.getElementById("today");
let date = new Date();
var strDate = date.getFullYear +'년 '+ (date.getMonth+1) +'월 ' + date.getDate + '일';
today.innerHTML = (date.getFullYear() +'년 '+ (date.getMonth()+1) +'월 ' + date.getDate() + '일');

// 버튼 클릭시 
const menuicons = document.getElementsByClassName('menuicon');

for(var i = 0; i < menuicons.length; i++){
  menuicons[i].addEventListener('click', (e) => {
    // 0. 누른거 내용 가져오기 
    const menu = e.srcElement;
    console.log(menu.innerText);
    // 1. 추가할 값을 읽어 오기 
   const lastli = document.getElementById('chatul');

   // 2. 추가할 li, div 생성
   const li = document.createElement('li');
   const div2 = document.createElement('div');
   const div = document.createElement('div');

   // 3. li, div에 class 추가 
   li.setAttribute('class', 'right');
   div.setAttribute('class', 'menuright');
   div2.setAttribute('class', 'blank');
   div.innerHTML = menu.innerText;
   div2.innerHTML = '';
  

   
   li.appendChild(div2);
   li.appendChild(div);

   lastli.appendChild(li);

   // 스크롤
   var objUl = document.getElementById("chatul");
    objUl.scrollTop = objUl.scrollHeight;


  })
};

// about_me 버튼 눌렀을때
// 도넛 그래프 
const aboutBtn = document.getElementById("aboutme");




aboutBtn.addEventListener('click', (e) => {
    const chatul = document.getElementById("chatul");
    var temp = document.getElementById('aboutmeli');
    var btnli = temp.cloneNode(true);
    btnli.style.display = 'grid';
    chatul.append(btnli);
    const chart1btn = document.getElementsByClassName("chart1");
    const chart2btn = document.getElementsByClassName("chart2");
    const chart3btn = document.getElementsByClassName("chart3");
    // draw(102, chart1btn[chart1btn.length-1], 'RGB(247,204,7)');
    // draw(102, chart2btn[chart2btn.length-1], 'RGB(236,19,46)');
    // draw(102, chart3btn[chart3btn.length-1],'RGB(58,199,59)');
    draw(102, chart1btn[chart1btn.length-1], 'RGB(151,106,189)');
    draw(102, chart2btn[chart2btn.length-1], 'RGB(129,106,198)');
    draw(102, chart3btn[chart3btn.length-1],'RGB(83,105,216)');

    // 스크롤
    var objUl = document.getElementById("chatul");
    objUl.scrollTop = objUl.scrollHeight;

  
});

function draw(max, id, colorname){
    var i=1;
        var func1 = setInterval(function(){
        if(i<max){
            color1(i,id,colorname);
            i++;
        } else{
            clearInterval(func1);
        }
        },10);
 }
function color1(i, id,colorname){
    id.style.background = "conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    const chartcenter = document.getElementsByClassName("chartcenter");
    chartcenter[chartcenter.length-3].innerHTML =  i-1 + '%' + ' 성실';
    chartcenter[chartcenter.length-2].innerHTML =  i-1 + '%' + ' 열정';
    chartcenter[chartcenter.length-1].innerHTML =  i-1 + '%' + ' 협동';
 }


// sills 

const sillsBtn = document.getElementById("skills");

sillsBtn.addEventListener('click', (e) => {
    const skill = document.getElementById("chatul");
    var temp = document.getElementById('skillsli');
    var btnli = temp.cloneNode(true);
    btnli.style.display = 'grid';
    chatul.append(btnli);

    // 스크롤
    var objUl = document.getElementById("chatul");
    objUl.scrollTop = objUl.scrollHeight;
});

//portfolio

const portfolioBtn = document.getElementById("portfolio");

portfolioBtn.addEventListener('click', (e) => {
    const menuleft = document.getElementById("menuleft");
    const menu = document.getElementById("menu");
    const temp = document.getElementById("portfoliomenu");
    // const portfoliomenu = temp.cloneNode(true);
    const footer = document.getElementById("footer");

    portfoliomenu.setAttribute('class', 'portfolioclass');
    menu.style.display = 'none';
    temp.style.display = 'block';

    footer.append(portfoliomenu);

    const chatul = document.getElementById("chatul");
    const li = document.createElement('li');
    li.innerText = '보고싶은 프로젝트를 클릭해주세요 🖱️';
    li.setAttribute('class','ment2');
    chatul.append(li);

    // 스크롤
    var objUl = document.getElementById("chatul");
    objUl.scrollTop = objUl.scrollHeight;
});

const exit = document.getElementById("exit");

exit.addEventListener('click', (e) => {
    const menu = document.getElementById("menu");
    const temp = document.getElementById("portfoliomenu");

    temp.style.display = 'none';
    menu.style.display = 'block';
    
});

const pos = document.getElementById("pos");
pos.addEventListener('click', (e) => {
    const oneteampos = document.getElementById("oneteampos");
    oneteampos.style.display = 'block';

    const lastli = document.getElementById('chatul');

    // 2. 추가할 li, div 생성
    const li = document.createElement('li');
//     const div2 = document.createElement('div');
//     const div = document.createElement('div');


//       // 3. li, div에 class 추가 
   li.setAttribute('class', 'right');
//    div.setAttribute('class', 'menuright');
//    div2.setAttribute('class', 'blank');
//    div.innerHTML = menu.innerText;
//    div2.innerHTML = '';
  

   
//    li.appendChild(div2);
   li.appendChild(oneteampos);

   lastli.appendChild(li);

   // 스크롤
   var objUl = document.getElementById("chatul");
  objUl.scrollTop = objUl.scrollHeight;

});

//pos final
const final = document.getElementById("final");

final.addEventListener('click', (e) => {

    const chatul = document.getElementById("chatul");
    const li = document.createElement('li');
    const li2 = document.createElement('li');
   
    li.innerText = '4월중 업데이트';
    li2.innerText = '조금만 기다려주세요.😊';
    li.setAttribute('class','ment2');
    li2.setAttribute('class','ment2');
    li.style.width = '7vw';
    li2.style.width = '10vw';
    li2.style.animation = 'ment2 1.2s';
    chatul.append(li);
    chatul.append(li2);

    
    var objUl = document.getElementById("chatul");
    objUl.scrollTop = objUl.scrollHeight;
});


const contact = document.getElementById("contact");

contact.addEventListener('click', (e) => {
    const chatul = document.getElementById("chatul");
    const li = document.getElementById("contactli");
    const li2 = document.createElement('li');
    li.style.display = 'block';
    li2.innerText = "아이콘을 눌러주세요."
    li2.setAttribute('class','ment2');
    li2.style.animation = 'ment2 1.2s';
    li2.style.width = '9vw';
    chatul.append(li);
    chatul.append(li2);
});

const emaila = document.getElementById("emaila");

emaila.addEventListener('click', (e) => {
    var url = 'codexminy@gmail.com';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	// url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
    const chatul = document.getElementById("chatul");
    const li = document.createElement("li");
    li.innerText = "이메일이 복사되었습니다.";
    li.setAttribute('class','ment2');
    li.style.width = '11vw';
    chatul.append(li);
});