function ChildBrowser(){}ChildBrowser.CLOSE_EVENT=0;ChildBrowser.LOCATION_CHANGED_EVENT=1;ChildBrowser.prototype.showWebPage=function(b,a){a=a||{showLocationBar:true,locationBarAlign:"top"};cordova.exec(this._onEvent,this._onError,"ChildBrowser","showWebPage",[b,a])};ChildBrowser.prototype.close=function(){cordova.exec(null,null,"ChildBrowser","close",[])};ChildBrowser.prototype.openExternal=function(a,b){if(b===true){navigator.app.loadUrl(a)}else{cordova.exec(null,null,"ChildBrowser","openExternal",[a,b])}};ChildBrowser.prototype._onEvent=function(a){if(a.type==ChildBrowser.CLOSE_EVENT&&typeof window.plugins.childBrowser.onClose==="function"){window.plugins.childBrowser.onClose()}if(a.type==ChildBrowser.LOCATION_CHANGED_EVENT&&typeof window.plugins.childBrowser.onLocationChange==="function"){window.plugins.childBrowser.onLocationChange(a.location)}};ChildBrowser.prototype._onError=function(a){if(typeof window.plugins.childBrowser.onError==="function"){window.plugins.childBrowser.onError(a)}};ChildBrowser.prototype.install=function(){};if(!window.plugins){window.plugins={}}if(!window.plugins.childBrowser){window.plugins.childBrowser=new ChildBrowser()};