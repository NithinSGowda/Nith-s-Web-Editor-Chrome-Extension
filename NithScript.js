var childrenactivated=0;
function activateChildren(parent){
  var allChildren = parent.children;
  for(child of allChildren){
    if(child.children.length>0){
      activateChildren(child);
    }
    else{
      child.classList.add("et");
      childrenactivated++;
    }
  }
}
activateChildren(document);

const allLinks=document.querySelectorAll("a");
for(linki of allLinks){
  linki.href="javascript:void(0)";
}

var vbox = document.createElement('div');
vbox.innerHTML="<div class=\"words\"><\div>";
vbox.style.display='none'
document.body.appendChild(vbox);


var inpbox="<div class=\"inputArea\"><div class=\"inputBox\"><div class=\"InputBoxes-out\"><textarea class=\"textInput-area InputBoxes\" cols=\"30\" rows=\"10\" placeholder=\"Enter text here\"></textarea><br><textarea name=\"link\" class=\"textarea-link InputBoxes\" cols=\"30\" placeholder=\"Enter link here ( Optional )\"></textarea><br><input type=\"submit\" class=\"input-submit-button\"></div></div></div>";
inpBOX = document.createElement('span');
inpBOX.innerHTML=inpbox;
document.body.appendChild(inpBOX);

var downInst=document.createElement('div');
downInst.innerHTML="<div class=\"downloader\"><div class=\"intoMark\" onclick=\"remover()\">X</div><div class=\"DBox\"><div class=\"h1h\">You are just 2 steps away from downloading your website</div><div class=\"h2h\">Step 1 : Close this instruction box </div><div class=\"h2h\">Step 2 : Press <span class=\"h4h\">CTRL + S </span></div></div></div>";
document.body.appendChild(downInst);

var i=0;

var htmlElement1 = document.createElement('div');
htmlElement1.innerHTML="<a href=\"mailto:oneandonlytobe@gmail.com\" class=\"a5\"><img src=\"http://nithins.cf/personalCloud/question-circle-solid.svg\" width=\"35px\"></a><div class=\"Download a4\" onclick=\"download()\"><img src=\"http://nithins.cf/personalCloud/download-solid.svg\" width=\"30px\"></div>";
document.body.appendChild(htmlElement1);

console.log(childrenactivated);
alert(childrenactivated+" editable elements found. Happy editing :)");

var headpart=document.querySelector('head');
var styleChild = document.createElement("div");
styleChild.innerHTML="<link href=\"classicStyle.css\" type=\"text/stylesheet\" rel=\"stylesheet\">";
headpart.appendChild(styleChild);


const elements=document.querySelectorAll('.et');

for(element of elements){
  element.addEventListener("dblclick",function(){
    let myEdit=this;
    document.querySelector('.inputArea').style.display='block';
    document.querySelector('.textInput-area').value=this.innerHTML;
    document.querySelector('.input-submit-button').addEventListener('click',function(event){
      if(document.querySelector('.textarea-link').value==''){
        myEdit.innerHTML=document.querySelector('.textInput-area').value;
        console.log(document.querySelector('.textInput-area').value)
      }
      else{
        myEdit.innerHTML="<a href=\""+ document.querySelector('.textarea-link').value +"\">"+ document.querySelector('.textInput-area').value + "</a>";
        console.log("done")
      }
      document.querySelector('.inputArea').style.display='none';
      event.stopPropagation();
      event.cancelBubble = true;
    },false)
  })
}




/* ITS CHANGING EVERYTHING

for(element of elements){
element.addEventListener("dblclick",function(){
    document.querySelector('.inpt').style.display='block';
    console.log(this.innerHTML)
    document.querySelector('.iinput').value=this.innerHTML;
    bcpp=this.innerHTML;

    var iarea=document.querySelector('.inpt');
    isubmitButton=document.querySelector('.isubmit');
    
    isubmitButton.addEventListener('click',()=>{
    var textHTML= document.querySelector('.iinput').value;
    if(textHTML==""){textHTML=bcpp}
    console.log(textHTML)
    iarea.style.display='none';
    this.innerHTML=textHTML;
    this.classList.remove('active');
    textHTML="";
    bcpp="";
    console.log(this);
  });
});
}
*/

//document.querySelector('.iinput').value="<a href=\""+ textLINK +"\">"+ document.querySelector('.iinput').value + "</a>";




const chngbtn = document.querySelector('.change');
const blueArea = document.querySelector('.blue');
function changeColor(){
    var clr1=document.querySelector('.picker1').value;
    var clr2=document.querySelector('.picker2').value;
    blueArea.style.backgroundImage = 'linear-gradient(50deg,' + clr1 + ', ' + clr2 + ' 100%)';
}
/*
function dl(x){
    x = typeof x !== 'undefined' ? x : 'black' ; 
    document.body.style.backgroundColor = x;
    document.body.style.color = "white";
    document.querySelectorAll('.c1')[0].style.backgroundColor=x;
    document.querySelectorAll('.c1')[0].style.border='1px solid white';
    document.querySelectorAll('.c1')[1].style.backgroundColor=x;
    document.querySelectorAll('.c1')[1].style.border='1px solid white';
    document.querySelectorAll('.c1')[2].style.backgroundColor=x;
    document.querySelectorAll('.c1')[2].style.border='1px solid white';
    
}
*/
/*
function hl(x){
  document.querySelector('.blue').style.backgroundImage='linear-gradient(' + x + ',' + x + ')';
}
*/
function download(e){
      document.querySelector('.downloader').style.display = 'flex';
      document.querySelector('.intoMark').addEventListener('click',remover());
}

function remover(e){
  document.querySelector('.downloader').style.display = 'none';
  document.querySelector('.a5').style.display='none';
document.querySelector('.a4').style.display='none';
  document.querySelector('.jss').innerHTML="";
}


for(element of elements)
{dragElement(element);}







function dragElement(elmnt) {
  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.style.zIndex = "10" ;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.position="absolute";
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*
function nxt1(){
  butn=document.querySelector('.tt1')
  butn.style.display='none';
  butn=document.querySelector('.tt2')
  butn.style.display='block';
  console.log("Done")
}
function nxt2(){
  butn=document.querySelector('.tt2')
  butn.style.display='none';
  butn=document.querySelector('.tt3')
  butn.style.display='block';
  console.log("Done")
}
function nxt3(){
  butn=document.querySelector('.tt3')
  butn.style.display='none';
  butn=document.querySelector('.tutorial')
  butn.style.display='none';
  console.log("Done")
}
*/



function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' '); 
}


function removeActive()
{
  var activeThings = document.querySelector('.active');
  activeThings.classList.remove("active");
}

// Get all buttons with class="btn" inside the container
const btns = document.querySelectorAll(".et");

// Loop through the buttons and add the active class to the current/clicked button
for (texts of btns) {
  texts.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



const smallBox = document.getElementsByClassName('c');
		const header = document.querySelector('.blue');
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.interimResults = true;
		
		let p= document.createElement('p');
		const words = document.querySelector('.words');
		words.appendChild(p);
	
		recognition.addEventListener('result', e => {
      var transcript=Array.from(e.results)
			.map(result=>result[0])
			.map(result=>result.transcript)
			.join('')
			p.textContent = transcript;
			if(e.results[0].isFinal){
				p = document.createElement('p');
				words.appendChild(p);
				transcript = transcript.toUpperCase()
				if(transcript.includes('CHANGE BACKGROUND COLOUR TO')){
				var x=(transcript.split(' '))[4];
				dl(x);
	
				transcript=' ';
				}
				if(transcript.includes('CHANGE HEADER COLOUR TO')){
				var x=(transcript.split(' '))[4];
				hl(x);
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT LEFT') || transcript.includes('MOVE LEFT')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.left = (selectedText.offsetLeft - 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT RIGHT') || transcript.includes('MOVE RIGHT')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.left = (selectedText.offsetLeft + 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT UP') || transcript.includes('MOVE UP')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.top = (selectedText.offsetTop - 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT DOWN')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.top = (selectedText.offsetTop + 100) + "px";
	
				transcript=' ';
        }

        

        if(transcript.includes('CHANGE IT INTO') || transcript.includes('CHANGE IT TO') || transcript.includes('CHANGE TEXT TO')){
          if(document.querySelector('.active')==null){
            alert("Please select something first");
          }
          var selectedText = document.querySelector('.active');    
          selectedText.innerHTML = titleCase(transcript.substring(14));

    
          transcript=' ';
          }



          if(transcript.includes('DESELECT')){
            if(document.querySelector('.active')!=null){
              var selectedText = document.querySelector('.active');
              selectedText.classList.remove("active");

            }    
            transcript=' ';
            }


            if(transcript.includes('RELOAD')){
              document.location.reload()
              transcript=' ';
              }


            if(transcript.includes('CHANGE COLOUR TO') || transcript.includes('CHANGE ITS COLOUR TO')){
              if(document.querySelector('.active')==null){
                alert("Please select something first");
              }
              var selectedText = document.querySelector('.active');    
              selectedText.style.color = titleCase(transcript.substring(17));
    
        
              transcript=' ';
              }

        
        if(transcript.includes('SELECT')){
          if(document.querySelector('.active')!=null){
            removeActive();
          }
          transcript = transcript.substring(7);
          console.log(transcript);
          

          
          for(element of elements){
            if(element.textContent.includes(titleCase(transcript))){
              element.className += " active";
            }
          }
          var selectedText = document.querySelector('.active');    
          transcript=' ';
          }

			}
			
			console.log(transcript);
		});
	
		recognition.addEventListener('end',recognition.start);
	
		//recognition.start();