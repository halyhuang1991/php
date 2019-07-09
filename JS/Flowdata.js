var json={
    id:0,
    text:"",
    nextid:1,
    step:0,
    x:0, y:0, w:0, h:0

}
function Flow(id){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.x1=120;this.y1=20;this.x2=120;this.y2=20;
}
Flow.prototype.drawArrowhead=function(x, y, radians) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x, y);
    this.ctx.rotate(radians);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(5, 10);
    this.ctx.lineTo(-5, 10);
    this.ctx.closePath();
    this.ctx.restore();
    this.ctx.fill();
}
Flow.prototype.drawRoundRect=function(x, y, w, h) {
    var r = h / 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x + r, y);//到右弧起点
    this.ctx.arcTo(x + w, y, x + w, y + h, r);//右上半圆弧
    this.ctx.arcTo(x + w, y + h, x, y + h, r);//右下半圆弧
    this.ctx.arcTo(x, y + h, x, y, r);
    this.ctx.arcTo(x, y, x + w, y, r);//左上半圆弧
    this.ctx.closePath();
    this.ctx.stroke();
}

Flow.prototype.drawRhombus=function(x, y, l) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y + l);
    this.ctx.lineTo(x - l * 2, y);
    this.ctx.lineTo(x, y - l);
    this.ctx.lineTo(x + l * 2, y);
    this.ctx.closePath();
    this.ctx.stroke();
}
Flow.prototype.step=function(x,y,offset){
    this.x1=x;this.y1=y;
    this.offset=offset==undefined?10:offset;
}
Flow.prototype.draw=function(x, y, w, h){
    this.drawRoundRect(x, y, w, h);
    this.x1=x+w/2;this.y1=y+h;
}
Flow.prototype.drawToBottom=function(offsetx,offsety,targettype,targettext){
    var offsetpy=this.y1+this.offset;
    this.x2=this.x1-offsetx;this.y2=this.y1-offsety;
    this.ctx.moveTo(this.x1,this.y1);
    this.ctx.lineTo(this.x1, offsetpy);
    this.ctx.closePath();
    this.ctx.stroke();
    var tox=this.x2+40;
    var endRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
    endRadians += ((this.x2 >= this.x1) ? 90 : -90) * Math.PI / 180;
    if(targettype=="step"){
        this.drawArrowhead(this.x2, this.y2, endRadians);
        this.drawRhombus(this.x2, this.y2, 30);
    }else{
        this.ctx.moveTo(this.x1, offsetpy);
        this.ctx.lineTo(tox, offsetpy);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.moveTo(tox, offsetpy);
        this.ctx.lineTo(tox, this.y2);
        this.ctx.closePath();
        this.ctx.stroke();
        this.drawArrowhead(tox, this.y2, -3.15);
        if(targettype=="rect"){
            this.ctx.rect(this.x2,this.y2,80,50);
            this.ctx.stroke();
        }else{
            this.drawRoundRect(this.x2, this.y2, 80,50);
        }
        this.ctx.font="10px Verdana";
        if(targettext==null){
            targettext="test";
        }
        this.ctx.fillText(targettext,this.x2+20,this.y2+25);
    }
    return {x:this.x2+40,y:this.y2+50};
}
Flow.prototype.clear=function(){
    this.canvas.height=this.canvas.height;
}
var init=function(){
    var f=new Flow("myCanvas");
    f.clear();
    f.step(420,420);
    f.draw(420,100,80,50);
    var a0=f.drawToBottom(5,-40,"");
    var a=f.drawToBottom(-100,-40,"rect");f.drawToBottom(100,-40,"rect","1");
    console.log(a);
    f.step(a.x,a.y);f.drawToBottom(-100,-40,"");
    f.step(a0.x,a0.y,20);f.drawToBottom(-100,-40,"rect","1");f.drawToBottom(-10,-40,"","ok");
    f.step(a0.x,a0.y,20);f.drawToBottom(100,-40,"rect","1");
    f.canvas.onmousedown = function(e) { //给canvas添加点击事件
        e = e || event; //获取事件对象
        //获取事件在canvas中发生的位置
        var x = e.clientX - f.canvas.offsetLeft;
        var y = e.clientY - f.canvas.offsetTop;
        //如果事件位置在矩形区域中
        console.log('x:' + x + "  y:" + y);
        //  if(x>=rect.x&&x<=rect.x+rect.w&&y>=rect.y&&y<=rect.y+rect.h){
        //      alert('clicked')
        //  }
    }
}

init();


