
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"logo { position: relative; background: #f44336; }\n.",[1],"center { overflow: hidden; }\n.",[1],"logo-title { color: #ffffff; }\n.",[1],"appusername { font-size: ",[0,20],"; color: #fff; margin-left: ",[0,10],"; }\n.",[1],"center .",[1],"list-icon { color: #f44336; }\n#loginbutton { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin: 0; border: none; -webkit-box-shadow: none; box-shadow: none; background: transparent; font-size: ",[0,30],"; z-index: 999; color: #ffffff; width: auto; position: absolute; top: 0; left: 0; text-align: center; width: 100%; height: 100%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n#loginbutton:after, #loginbutton:before { display: none; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/center/center.wxss:49:1)",{path:"./pages/center/center.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/center/center.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      