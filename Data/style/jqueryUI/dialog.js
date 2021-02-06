var ttf = document.createElement('link')
ttf.setAttribute('rel', 'stylesheet')
ttf.setAttribute('type', 'text/css')
ttf.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap')
document.head.appendChild(ttf)

function createDialog(title, text) {
 var dialogBg=document.createElement("div")
 var dialogHeader=document.createElement("div")
 var dialogTitle=document.createElement("h3")
 var dialogText=document.createElement("h3")
 var dialogX=document.createElement("button")
 
 dialogBg.style.background="gray"
 dialogBg.style.position="absolute"
 dialogBg.style.left=window.innerWidth/2
 dialogBg.style.top=window.innerHeight/2
 dialogBg.style.width=300
 dialogBg.style.height=200
 dialogBg.style.transform = "translate(-50%, -50%)"
 dialogBg.id="dialogBg"

 dialogHeader.style.background="#000000"
 dialogHeader.style.position="absolute"
 dialogHeader.style.width=300
 dialogHeader.style.height=30
 dialogHeader.style.cursor="grab"
 dialogBg.id="dialogHeader"

 dialogTitle.style.position="absolute"
 dialogTitle.style.color="#ffffff"
 dialogTitle.style.fontFamily="Roboto"
 dialogTitle.style.left=parseInt(dialogHeader.style.width.split("px").join(""))/3
 dialogTitle.style.top=parseInt(dialogHeader.style.height.split("px").join(""))-45
 dialogTitle.innerHTML=title

 dialogText.style.position="absolute"
 dialogText.style.color="#000000"
 dialogText.style.fontFamily="Roboto"
 dialogText.style.left=parseInt(dialogBg.style.width.split("px").join(""))-290
 dialogText.style.top=parseInt(dialogBg.style.height.split("px").join(""))-185
 dialogText.innerHTML=text

 dialogX.style.position="absolute"
 dialogX.style.background="darkred"
 dialogX.style.color="#000000"
 dialogX.style.width=30
 dialogX.style.height=30
 dialogX.style.outline="none"
 dialogX.style.border="none"
 dialogX.style.fontFamily="Roboto"
 dialogX.style.cursor="pointer"
 dialogX.style.left=parseInt(dialogBg.style.width.split("px").join(""))-30
 dialogX.style.top=parseInt(dialogBg.style.height.split("px").join(""))-200
 dialogX.innerHTML="X"
 dialogX.onmouseover=function(){dialogX.style.background="red"}
 dialogX.onmouseout=function(){dialogX.style.background="darkred"}
 dialogX.onclick=function(){dialogBg.remove()}
 
 document.body.appendChild(dialogBg)
 dialogBg.appendChild(dialogHeader)
 dialogBg.appendChild(dialogTitle)
 dialogBg.appendChild(dialogText)
 dialogBg.appendChild(dialogX)

 var isDown = false
var elem = dialogBg
var div = dialogHeader
div.addEventListener('mousedown', function(e) {
    isDown = true;
    dialogHeader.style.cursor="grabbing"
    offset = [
        elem.offsetLeft - e.clientX,
        elem.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    dialogHeader.style.cursor="grab"
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        dialogHeader.style.cursor="grabbing"
        elem.style.left = (mousePosition.x + offset[0]) + 'px';
        elem.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
function ungrab() {
 return false
 }
}