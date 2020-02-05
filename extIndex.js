var id=0;
document.querySelector('.img').onclick=changeit
function changeit(){
    console.log(id)
    if(id<1){
        chrome.tabs.executeScript({file: "NithScript.js"});
        id=0;
        document.querySelector('.img').src="power_off.png";
        return;
    }
    if(id>0){
        chrome.tabs.executeScript({file: "null.js"});
        id=1;
        document.querySelector('.img').src="power_on.png";
    }
    
}