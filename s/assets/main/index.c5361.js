window.__require=function t(e,o,r){function n(i,s){if(!o[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var a="function"==typeof __require&&__require;if(!s&&a)return a(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return n(e[i][1][t]||t)},u,u.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({AssignButton:[function(t,e,o){"use strict";cc._RF.push(e,"08846wm01lKeoL+L+gbNtFa","AssignButton");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){var t=cc.find("Canvas/Graph").getComponent("Graph");t.isShowing||(t.createMode=1)})},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],Graph:[function(t,e,o){"use strict";cc._RF.push(e,"6faaf0cLmVGr6gUrzMYRmZ+","Graph");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(){function t(t){this.x_pos=0,this.y_pos=0,this.imgScript=null,this.name="",this.resources=new Array,this.resourceNeedsNumber=new Array,this.resourceGetsNumber=new Array,this.numberLabels=new Array,this.imgScript=t}return t.prototype.setName=function(t){this.name=t,this.imgScript.setName(t)},t.prototype.updatePos=function(t,e){this.x_pos=t,this.y_pos=e,this.imgScript.setPosition(t,e)},t.prototype.get_x=function(){return this.x_pos},t.prototype.get_y=function(){return this.y_pos},t.prototype.getResourceNeed=function(t){return this.resourceNeedsNumber[this.resources.indexOf(t)]},t.prototype.getResourceGet=function(t){return this.resourceGetsNumber[this.resources.indexOf(t)]},t.prototype.requestResource=function(t,e){var o=this.resources.indexOf(t);-1==o?(this.resources.push(t),this.resourceNeedsNumber.push(e),this.resourceGetsNumber.push(0)):this.resourceNeedsNumber[o]+=e},t}(),a=function(){function t(t){this.left=0,this.imgScript=null,this.imgScript=t}return t.prototype.setName=function(t){this.name=t,this.imgScript.setName(t)},t.prototype.updateNumber=function(t){this.left+=t,this.imgScript.updateNumber(t)},t.prototype.updatePos=function(t,e){this.x_pos=t,this.y_pos=e,this.imgScript.setPosition(t,e)},t.prototype.get_x=function(){return this.x_pos},t.prototype.get_y=function(){return this.y_pos},t.prototype.setPosition=function(t,e){this.x_pos=t,this.y_pos=e,this.imgScript.setPosition(t,e)},t.prototype.delieverResource=function(t){this.left=this.left-t},t.prototype.getResource=function(t){this.left+=t},t}(),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isShowing=!1,e.processImg=null,e.resourceImg=null,e.label=null,e.text="hello",e.createMode=0,e.pen=null,e.massageBoard=null,e.processes=new Array,e.resources=new Array,e}return r(e,t),e.prototype.show=function(t){this.massageBoard.string=t;var e=this.massageBoard;this.scheduleOnce(function(){e.string==t&&(e.string="")},5)},e.prototype.assignResource1=function(t,e,o){if(t.left<o)return this.show("\u8d44\u6e90\u4e0d\u8db3\u5206\u914d"),-1;t.updateNumber(-o);var r=e.resources.indexOf(t);if(-1==r){e.resources.push(t),e.resourceNeedsNumber.push(0),e.resourceGetsNumber.push(o);var n=new cc.Node;n.addComponent(cc.Label),n.getComponent(cc.Label).string=""+o;var c=(t.get_x()+e.get_x())/2,i=(t.get_y()+e.get_y())/2;n.setPosition(c,i),this.node.addChild(n),e.numberLabels.push(n),this.show("\u8d44\u6e90\u5206\u914d\u6210\u529f")}else{if(e.resourceNeedsNumber[r]>0)return-2;e.resourceGetsNumber[r]+=o,e.numberLabels[r].getComponent(cc.Label).string=""+e.resourceGetsNumber[r]}return this.updateLines(),0},e.prototype.assignResource=function(t,e,o){for(var r=null,n=null,c=0;c<this.resources.length;++c)this.resources[c].imgScript.node!=t&&this.resources[c].imgScript.node!=e||(r=this.resources[c]);for(c=0;c<this.processes.length;++c)this.processes[c].imgScript.node!=t&&this.processes[c].imgScript.node!=e||(n=this.processes[c]);return this.assignResource1(r,n,o)},e.prototype.requestResource1=function(t,e,o){var r=e.resources.indexOf(t);if(-1==r){e.resources.push(t),e.resourceNeedsNumber.push(o),e.resourceGetsNumber.push(0);var n=new cc.Node;n.addComponent(cc.Label),n.getComponent(cc.Label).string=""+o;var c=(t.get_x()+e.get_x())/2,i=(t.get_y()+e.get_y())/2;n.setPosition(c,i),this.node.addChild(n),e.numberLabels.push(n)}else{if(e.resourceGetsNumber[r]>0)return-2;e.resourceNeedsNumber[r]+=o,e.numberLabels[r].getComponent(cc.Label).string=""+e.resourceNeedsNumber[r]}return this.show("\u8d44\u6e90\u7533\u8bf7\u6210\u529f"),this.updateLines(),0},e.prototype.requestResource=function(t,e,o){for(var r=null,n=null,c=0;c<this.resources.length;++c)this.resources[c].imgScript.node!=t&&this.resources[c].imgScript.node!=e||(r=this.resources[c]);for(c=0;c<this.processes.length;++c)this.processes[c].imgScript.node!=t&&this.processes[c].imgScript.node!=e||(n=this.processes[c]);return this.requestResource1(r,n,o)},e.prototype.addProcess=function(t,e,o){var r=cc.instantiate(this.processImg);r.zIndex=1,this.node.addChild(r);var n=new p(r.getComponent("ProcessImg"));n.setName(t),n.updatePos(e,o),this.show("\u8fdb\u7a0b\u5df2\u521b\u5efa"),this.processes.push(n)},e.prototype.removeProcess=function(){for(;this.processes.length>0;){var t=this.processes.pop();t.imgScript.node.removeAllChildren();for(var e=0;e<t.numberLabels.length;++e)t.numberLabels[e].destroy();t.imgScript.node.destroy()}this.updateLines()},e.prototype.removeResource=function(){for(;this.resources.length>0;){var t=this.resources.pop();t.imgScript.node.removeAllChildren(),t.imgScript.node.destroy()}this.updateLines()},e.prototype.addResource=function(t,e,o,r){var n=cc.instantiate(this.resourceImg);n.zIndex=1;var c=new a(n.getComponent("ResourceImg"));c.setName(t),c.updatePos(o,r),c.updateNumber(e),this.resources.push(c),this.show("\u8d44\u6e90\u5df2\u6dfb\u52a0"),this.node.addChild(n)},e.prototype.drawRequestLine=function(t,e){var o=t.get_x(),r=t.get_y(),n=e.get_x(),c=e.get_y();this.pen.moveTo(o,r),this.pen.strokeColor=(new cc.Color).fromHEX("#AA3737"),this.pen.lineTo(n,c),this.pen.stroke()},e.prototype.drawAssignLine=function(t,e){var o=t.get_x(),r=t.get_y(),n=e.get_x(),c=e.get_y();this.pen.moveTo(o,r),this.pen.strokeColor=(new cc.Color).fromHEX("#000000"),this.pen.lineTo(n,c),this.pen.stroke()},e.prototype.updateLines=function(){this.pen.clear();for(var t=0;t<this.processes.length;++t)for(var e=this.processes[t],o=0;o<e.resources.length;++o)e.resourceNeedsNumber[o]>0?this.drawRequestLine(e.resources[o],e):e.resourceGetsNumber[o]>0&&this.drawAssignLine(e.resources[o],e)},e.prototype.checkProcess=function(t){if(0==t.resources.length)return!1;for(var e=0;e<t.resources.length;++e)if(t.resourceGetsNumber[e]+t.resources[e].left<t.resourceNeedsNumber[e])return!1;return!0},e.prototype.releaseProcess=function(t,e){var o=t.resourceGetsNumber.pop();t.numberLabels.pop().destroy(),t.resources.pop().updateNumber(o),t.resourceNeedsNumber.pop();var r=e.releaseProcess,n=t,c=e;e.updateLines(),t.resources.length>0&&this.scheduleOnce(function(){r(n,c)},2)},e.prototype.simplify=function(t){for(var e=-1,o=0,r=0;r<t.processes.length;++r)if(t.checkProcess(t.processes[r])){e=r,o=t.processes[r].resources.length;break}if(-1!=e){var n=t.simplify,c=t;t.releaseProcess(t.processes[e],t),t.scheduleOnce(function(){n(c)},o)}else t.show("\u7ea6\u7b80\u5b8c\u6210")},e.prototype.onLoad=function(){this.pen=this.node.getComponent(cc.Graphics),this.massageBoard=cc.find("Canvas/MassageBoard/info").getComponent(cc.Label),this.pen.lineWidth=10},e.prototype.start=function(){},e.prototype.checkStatus=function(t,e){for(var o=null,r=null,n=0;n<this.resources.length;++n)this.resources[n].imgScript.node!=t&&this.resources[n].imgScript.node!=e||(o=this.resources[n]);for(n=0;n<this.processes.length;++n)this.processes[n].imgScript.node!=t&&this.processes[n].imgScript.node!=e||(r=this.processes[n]);var c=r.resources.indexOf(o);return-1==c?0:r.resourceGetsNumber[c]>0?1:r.resourceNeedsNumber[c]>0?2:void 0},n([s(cc.Prefab)],e.prototype,"processImg",void 0),n([s(cc.Prefab)],e.prototype,"resourceImg",void 0),n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),n([s(cc.Graphics)],e.prototype,"pen",void 0),e=n([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],LineCreator:[function(t,e,o){"use strict";cc._RF.push(e,"697825QpjROMbPUaHWnky4C","LineCreator");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.graphScript=null,e.numberInput=null,e.pen=null,e.startNode=null,e.endNode=null,e}return r(e,t),e.prototype.onLoad=function(){this.pen=this.node.getComponent(cc.Graphics),this.pen.lineWidth=10,this.graphScript=cc.find("Canvas/Graph").getComponent("Graph"),this.node.on(cc.Node.EventType.MOUSE_MOVE,function(t){if(!this.graphScript.isShowing&&0!=this.penMode){var e=this.startNode.x,o=this.startNode.y,r=t.getLocationX()-800,n=t.getLocationY()-450;this.drawLine(e,o,r,n)}},this)},e.prototype.setBlackColor=function(){this.pen.strokeColor=cc.Color.BLACK},e.prototype.setPenMode=function(t){this.penMode=t},e.prototype.setRedColor=function(){this.pen.strokeColor=(new cc.Color).fromHEX("#AA3737")},e.prototype.start=function(){},e.prototype.createLine=function(){this.penMode=0;var t=this.graphScript.checkStatus(this.startNode,this.endNode);if((1!=t||20!=this.graphScript.createMode&&21!=this.graphScript.createMode)&&(2!=t||10!=this.graphScript.createMode&&11!=this.graphScript.createMode)){var e=cc.instantiate(this.numberInput),o=e.getChildByName("commit");e.zIndex=100,cc.find("Canvas").addChild(e),this.graphScript.isShowing=!0,o.on(cc.Node.EventType.TOUCH_END,function(){var t=+e.getChildByName("editBox").getComponent(cc.EditBox).string;if(t>0){if(10==this.graphScript.createMode||11==this.graphScript.createMode){if(-1==this.graphScript.assignResource(this.startNode,this.endNode,t))return;this.graphScript.isShowing=!1,this.graphScript.createMode=0}else 20!=this.graphScript.createMode&&21!=this.graphScript.createMode||(this.graphScript.isShowing=!1,this.graphScript.requestResource(this.startNode,this.endNode,t),this.graphScript.createMode=0);e.destroy()}},this)}},e.prototype.drawLine=function(t,e,o,r){this.pen.clear(),this.pen.moveTo(t,e),this.pen.lineTo(o,r),this.pen.stroke()},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),n([s],e.prototype,"penMode",void 0),n([s(cc.Prefab)],e.prototype,"numberInput",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ProcessCreator:[function(t,e,o){"use strict";cc._RF.push(e,"b31d25bKWFF8I2jNGPZ1n10","ProcessCreator");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.nameInput=null,e.text="hello",e.graphScript=null,e.isCreating=!1,e}return r(e,t),e.prototype.createProcess=function(t,e){var o=cc.instantiate(this.nameInput);o.scale=1,o.zIndex=100,o.x=0,o.y=0,this.graphScript.isShowing=!0,cc.find("Canvas").addChild(o),cc.log("\u8f93\u5165\u6846:x"+o.x+"y:"+o.y),this.isCreating=!0,o.getComponent("ProcessInput").x=t,o.getComponent("ProcessInput").y=e,cc.log(t),cc.log(e)},e.prototype.getProcessName=function(){},e.prototype.setProcessName=function(t){this.processName=t},e.prototype.onLoad=function(){this.graphScript=cc.find("Canvas/Graph").getComponent("Graph")},e.prototype.start=function(){},n([s(cc.Label)],e.prototype,"label",void 0),n([s(cc.Prefab)],e.prototype,"nameInput",void 0),n([s],e.prototype,"text",void 0),n([s(cc.Component)],e.prototype,"graphScript",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ProcessImgStalker:[function(t,e,o){"use strict";cc._RF.push(e,"f01faa4u/FLf5lrVP0P6acb","ProcessImgStalker");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.creatorScript=null,e.graphScript=!1,e}return r(e,t),e.prototype.onLoad=function(){this.creatorScript=cc.find("Canvas/toolsBar/ProcessCreator").getComponent("ProcessCreator"),this.graphScript=cc.find("Canvas/Graph").getComponent("Graph"),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){if(!this.graphScript.isShowing){var e=this.node;e.opacity=100;var o=t.touch.getDelta();e.x+=o.x,e.y+=o.y}},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(!this.graphScript.isShowing)return this.node.x<-523?(this.node.x=-700,void(this.node.y=360)):void this.creatorScript.createProcess(this.node.x,this.node.y)},this)},e.prototype.start=function(){},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ProcessImg:[function(t,e,o){"use strict";cc._RF.push(e,"8ed11nMI5dKGp2MvKoJ+H/y","ProcessImg");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.graphScript=null,e.pen=null,e.lineCreator=null,e}return r(e,t),e.prototype.onLoad=function(){var t=cc.find("Canvas/Graph");this.graphScript=t.getComponent("Graph"),this.lineCreator=cc.find("Canvas/LineCreator").getComponent("LineCreator"),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(!this.graphScript.isShowing)switch(this.graphScript.createMode){case 1:this.lineCreator.startNode=this.node,this.lineCreator.setPenMode(1),this.lineCreator.setBlackColor(),this.graphScript.createMode=10;break;case 2:this.lineCreator.startNode=this.node,this.lineCreator.setPenMode(2),this.lineCreator.setRedColor(),this.graphScript.createMode=20;break;case 21:case 11:this.lineCreator.endNode=this.node,this.lineCreator.pen.clear(),this.lineCreator.createLine()}},this)},e.prototype.start=function(){cc.log("\u8fdb\u7a0b\u56fe"+this.node.z)},e.prototype.disappear=function(){cc.tween(this.node.getChildByName("background")).to(.6,{opacity:0},{easing:"cubicOut"}).start(),cc.tween(this.node.getChildByName("name")).to(.6,{opacity:0},{easing:"cubicOut"}).start()},e.prototype.appear=function(){cc.tween(this.node.getChildByName("background")).to(.6,{opacity:255},{easing:"cubicOut"}).start(),cc.tween(this.node.getChildByName("name")).to(.6,{opacity:255},{easing:"cubicOut"}).start()},e.prototype.setPosition=function(t,e){this.node.setPosition(t,e)},e.prototype.setName=function(t){this.node.getChildByName("name").getChildByName("nameLabel").getComponent(cc.Label).string=t},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),n([s(cc.Component)],e.prototype,"graphScript",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ProcessInput:[function(t,e,o){"use strict";cc._RF.push(e,"2ddd4d7N9xD6IHNGfQ6Pkhm","ProcessInput");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.graphScript=null,e.x=0,e.y=0,e}return r(e,t),e.prototype.start=function(){this.graphScript=cc.find("Canvas/Graph").getComponent("Graph"),this.node.getChildByName("commit").on(cc.Node.EventType.TOUCH_END,function(){this.graphScript.isShowing=!1;var t=this.node.getChildByName("editBox").getComponent(cc.EditBox).string;cc.find("Canvas/Graph").getComponent("Graph").addProcess(t,this.x,this.y);var e=cc.find("Canvas/ProcessImgStalker");e.x=-700,e.y=360,this.node.destroy()},this)},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],RequestButton:[function(t,e,o){"use strict";cc._RF.push(e,"c49baXclQVA2reB28Aaw0oq","RequestButton");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(){var t=cc.find("Canvas/Graph").getComponent("Graph");t.isShowing||(t.createMode=2)})},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ResourceCreator:[function(t,e,o){"use strict";cc._RF.push(e,"5628eUYzIxBErz+6aQvfhDQ","ResourceCreator");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.nameInput=null,e.graphScript=null,e}return r(e,t),e.prototype.createResource=function(t,e){var o=cc.instantiate(this.nameInput);o.scale=1,o.zIndex=10,o.x=0,o.y=0,this.graphScript.isShowing=!0,cc.find("Canvas").addChild(o),o.getComponent("ResourceInput").x=t,o.getComponent("ResourceInput").y=e,cc.log(t),cc.log(e)},e.prototype.onLoad=function(){this.graphScript=cc.find("Canvas/Graph").getComponent("Graph")},e.prototype.start=function(){},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),n([s(cc.Prefab)],e.prototype,"nameInput",void 0),n([s(cc.Component)],e.prototype,"graphScript",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ResourceImgStalker:[function(t,e,o){"use strict";cc._RF.push(e,"8ad84wUpkdEaatBHnjxkD0V","ResourceImgStalker");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.creatorScript=null,e.graphScript=!1,e}return r(e,t),e.prototype.onLoad=function(){this.graphScript=cc.find("Canvas/Graph").getComponent("Graph"),this.creatorScript=cc.find("Canvas/toolsBar/ResourceCreator").getComponent("ResourceCreator"),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){if(!this.graphScript.isShowing){var e=this.node;e.opacity=100;var o=t.touch.getDelta();e.x+=o.x,e.y+=o.y}},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(!this.graphScript.isShowing)return this.node.x<-523?(this.node.x=-700,void(this.node.y=215)):void this.creatorScript.createResource(this.node.x,this.node.y)},this)},e.prototype.start=function(){},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ResourceImg:[function(t,e,o){"use strict";cc._RF.push(e,"5ac384ZThJNA7ey9kR2q1Zg","ResourceImg");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.lineCreator=null,e.graphScript=null,e}return r(e,t),e.prototype.onLoad=function(){var t=cc.find("Canvas/Graph");this.graphScript=t.getComponent("Graph"),this.lineCreator=cc.find("Canvas/LineCreator").getComponent("LineCreator"),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(!this.graphScript.isShowing)switch(cc.log("\u88ab\u70b9\u51fb"),this.graphScript.createMode){case 1:this.lineCreator.startNode=this.node,this.lineCreator.setPenMode(1),this.lineCreator.setBlackColor(),this.graphScript.createMode=11;break;case 2:this.lineCreator.startNode=this.node,this.lineCreator.setPenMode(2),this.lineCreator.setRedColor(),this.graphScript.createMode=21;break;case 10:case 20:this.lineCreator.endNode=this.node,this.lineCreator.pen.clear(),this.lineCreator.createLine()}},this)},e.prototype.start=function(){},e.prototype.disappear=function(){cc.tween(this.node.getChildByName("background")).to(.6,{opacity:0},{easing:"cubicOut"}).start(),cc.tween(this.node.getChildByName("name")).to(.6,{opacity:0},{easing:"cubicOut"}).start()},e.prototype.appear=function(){cc.tween(this.node.getChildByName("background")).to(.6,{opacity:255},{easing:"cubicOut"}).start(),cc.tween(this.node.getChildByName("name")).to(.6,{opacity:255},{easing:"cubicOut"}).start()},e.prototype.updateNumber=function(t){var e=+this.node.getChildByName("left").getChildByName("number").getComponent(cc.Label).string;e+=t,this.node.getChildByName("left").getChildByName("number").getComponent(cc.Label).string=e.toString()},e.prototype.setName=function(t){this.node.getChildByName("name").getComponent(cc.Label).string=t},e.prototype.setPosition=function(t,e){this.node.setPosition(t,e)},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ResourceInput:[function(t,e,o){"use strict";cc._RF.push(e,"43502UxyzpM+KlagmyY9FmS","ResourceInput");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.graphScript=null,e}return r(e,t),e.prototype.start=function(){this.graphScript=cc.find("Canvas/Graph").getComponent("Graph"),this.node.getChildByName("commit").on(cc.Node.EventType.TOUCH_END,function(){var t=this.node.getChildByName("name").getChildByName("editBox").getComponent(cc.EditBox).string,e=+this.node.getChildByName("number").getChildByName("editBox").getComponent(cc.EditBox).string;if(cc.log(e),!(e<=0||isNaN(e))){this.graphScript.isShowing=!1,cc.find("Canvas/Graph").getComponent("Graph").addResource(t,e,this.x,this.y);var o=cc.find("Canvas/ResourceImgStalker");o.x=-700,o.y=215,this.node.destroy()}},this)},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],RestartButton:[function(t,e,o){"use strict";cc._RF.push(e,"30140gt8pNCuqlHnUuC1Mp7","RestartButton");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){var t=cc.find("Canvas/Graph").getComponent("Graph");this.node.on(cc.Node.EventType.TOUCH_END,function(){t.isShowing||(t.removeProcess(),t.removeResource())})},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],SimplifyButton:[function(t,e,o){"use strict";cc._RF.push(e,"6654fL1qipAOY8i1osgREJ8","SimplifyButton");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.onLoad=function(){var t=cc.find("Canvas/Graph").getComponent("Graph");this.node.on(cc.Node.EventType.TOUCH_END,function(){t.isShowing||(t.simplify(t),t.show("\u6b63\u5728\u7ea6\u7b80"))})},e.prototype.start=function(){},n([s(cc.Label)],e.prototype,"label",void 0),n([s],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["AssignButton","Graph","LineCreator","ProcessCreator","ProcessImg","ProcessImgStalker","ProcessInput","RequestButton","ResourceCreator","ResourceImg","ResourceImgStalker","ResourceInput","RestartButton","SimplifyButton"]);