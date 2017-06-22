
var img=new Array();
img[0]="img/productslide-1.jpg";
img[1]="img/productslide-2.jpg";
img[2]="img/productslide-3.jpg";
img[3]="img/productslide-4.jpg";
function $img(url){
    return "<img src='"+url+"' onclick='changeborder(this)'/>"
}
function changeborder(obj){
    for (var j=0;j<img.length;j++){
        $("#imgList").find("li")
            .eq(j).find("img")[0].style.borderColor="#ccc";
    }
    obj.style.borderColor="red";
    $("#bImg").html($img(obj.src));
}
window.onload=function(){
    var str='';
    for(var i=0;i<img.length;i++){
            str+=
             "<li>"+$img(img[i])+"</li>" ;
    }
    $("#imgList").html(str);
    if($("#bImg").html()==""){
        $("#bImg").html($img(img[0]));
        $("#imgList").find("li")
            .eq(0).find("img")[0].style.borderColor="red";
    }
}


if(!window.jQuery){
    throw new Error("终止执行");
}
jQuery.fn.tab=function(){
    "use strict";
    //this--->$(a)
    this.click(function(e){
        e.preventDefault();
//this--> a
        //修改a的父元素li上的active
        $(this).parent().addClass("active").siblings(".active").removeClass("active");
        //根据a的href属性值（id）选择显示的div
        var id=$(this).attr("href");
        $(id).addClass('active').siblings(".active").removeClass("active");
    })
};










// JavaScript Document
/*==按钮控制图片左右滚动==*/
(function($){
    $.fn.scrollPic=function(option){
        var div=this.find('.sld-C ul');
        var ulWidth=-(div.find('li').width()+30);
        var leftbut=$(option.left);
        var rightbut=$(option.right);
        var lines=option.line?option.line:this.width()/liWidth;
        var timer=option.stoptime;
        var speeds=option.speed?option.speed:1000;
        var repeat;
        //自动滚动
        var scrollLeft=function(){
            leftbut.unbind('click',scrollLeft);
            div.stop().animate({'marginLeft':ulWidth},speeds,function(){
                for(i=1;i<=lines;i++){
                    div.find('li:first').appendTo(div);
                }
                div.css('marginLeft','0px');
                leftbut.bind('click',scrollLeft)
            });
        }
        //向right
      /*  var scrollRight=function(){
            rightbut.unbind('click',scrollRight);
            for(i=1;i<=lines;i++){
                div.find('li:last').prependTo(div);
            }
            div.css('marginLeft',ulWidth);
            div.stop().animate({'marginLeft':0},speeds,function(){
                rightbut.bind('click',scrollRight);
            });
        }*/
        var autoStop=function(){
            if(timer) window.clearInterval(repeat);
        };
        var autoPlay=function(){
            if(timer) repeat=window.setInterval(scrollLeft,timer);
        };
        div.hover(autoStop,autoPlay).mouseout();
        leftbut.click(scrollLeft).hover(autoStop,autoPlay);
        rightbut.click(scrollRight).hover(autoStop,autoPlay);
    }
})(jQuery)
$(function(){
    $('.sld-box').scrollPic({line:1,speed:1000,stoptime:3000,left:'.sld-R',right:'.sld-L'});
});






