// 
//  step.js
//  <流程图对象>
//  
//  Created by DurantSimpson on 2016-12-08.
//  Copyright 2016 DurantSimpson. All rights reserved.
// 
function drawRoundRect(x, y, w, h) {
    var r = h / 2;
    cxt.beginPath();
    cxt.moveTo(x + r, y);//到右弧起点
    cxt.arcTo(x + w, y, x + w, y + h, r);//右上半圆弧
    cxt.arcTo(x + w, y + h, x, y + h, r);//右下半圆弧
    cxt.arcTo(x, y + h, x, y, r);
    cxt.arcTo(x, y, x + w, y, r);//左上半圆弧
    cxt.closePath();
    cxt.stroke();
}

function drawRhombus(x, y, l) {
    cxt.beginPath();
    cxt.moveTo(x, y + l);
    cxt.lineTo(x - l * 2, y);
    cxt.lineTo(x, y - l);
    cxt.lineTo(x + l * 2, y);
    cxt.closePath();
    cxt.stroke();
}

/**
 * 圆角矩形开始对象
 * @param {Object} x
 * @param {Object} y
 */
function Start(x, y) {
    this.h = 50;
    this.w = 2 * this.h;
    this.x = x;
    this.y = y;
    drawRoundRect(x - this.w / 2, y - this.h / 2, this.w, this.h);
}

/**
 * 矩形步骤对象
 * @param {Object} x
 * @param {Object} y
 */
function Step(x, y) {
    this.flag = "step";
    this.h = 50;
    this.w = 2 * this.h;
    this.x = x;
    this.y = y;
    cxt.strokeRect(x - this.w / 2, y - this.h / 2, this.w, this.h);
}

/**
 * 菱形条件对象
 * @param {Object} x
 * @param {Object} y
 */
function Condition(x, y) {
    this.flag = "condition";
    this.l = 30;
    this.x = x;
    this.y = y;
    drawRhombus(x, y, this.l);
}

Start.prototype.drawBottomToTop = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x, this.y + this.h / 2, obj.x, obj.y - obj.h / 2);
        arrow.drawBottomToTop(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x, this.y + this.h / 2, obj.x, obj.y - obj.l);
        arrow.drawBottomToTop(cxt);
    }
}

Step.prototype.drawBottomToTop = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x, this.y + this.h / 2, obj.x, obj.y - obj.h / 2);
        arrow.drawBottomToTop(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x, this.y + this.h / 2, obj.x, obj.y - obj.l);
        arrow.drawBottomToTop(cxt);
    }
}

Condition.prototype.drawBottomToTop = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x, this.y + this.l, obj.x, obj.y - obj.h / 2);
        arrow.drawBottomToTop(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x, this.y + this.l, obj.x, obj.y - obj.l);
        arrow.drawBottomToTop(cxt);
    }
}

Condition.prototype.drawRightToTop = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x + this.l * 2, this.y, obj.x, obj.y - obj.h / 2);
        arrow.drawLeftOrRightToTop(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x + this.l * 2, this.y, obj.x, obj.y - obj.l);
        arrow.drawLeftOrRightToTop(cxt);
    }
}

Condition.prototype.drawLeftToTop = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x - this.l * 2, this.y, obj.x, obj.y - obj.h / 2);
        arrow.drawLeftOrRightToTop(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x - this.l * 2, this.y, obj.x, obj.y - obj.l);
        arrow.drawLeftOrRightToTop(cxt);
    }
}

Condition.prototype.drawRightToLeft = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x + this.l * 2, this.y, obj.x - this.w / 2, obj.y);
        arrow.drawLeftToRightOrRightToLeft(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x + this.l * 2, this.y, obj.x - this.l * 2, obj.y);
        arrow.drawLeftToRightOrRightToLeft(cxt);
    }
}

Condition.prototype.drawLeftToRight = function(obj) {
    if(obj.flag == "step") {
        var arrow = new Arrow(this.x - this.l * 2, this.y, obj.x + this.w / 2, obj.y);
        arrow.drawLeftToRightOrRightToLeft(cxt);
    } else if(obj.flag == "condition") {
        var arrow = new Arrow(this.x - this.l * 2, this.y, obj.x + this.l * 2, obj.y);
        arrow.drawLeftToRightOrRightToLeft(cxt);
    }
}