// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);

/*original*/
$(function(){
    if($(".main-menu .col-xs-4").hasClass("now-select")){
        $(".now-select").append('<div class="now"><'+'/'+'div>');
    }
});
$(function(){
    $(".gacharank,.jizen-app,.haisin-app").click(function(){
        $(".col-xs-4.now-select").each(function(){
            $(this).removeClass("now-select");
            $(this).children(".now").remove();
        });
    });
    $(".gacharank").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").show();
    });
    $(".jizen-app").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").hide();
        $(".jizen").show();
        $(".haisin").hide();
    });
    $(".haisin-app").click(function(){
        $(this).addClass("now-select");
        $(this).append('<div class="now"><'+'/'+'div>');
        $(".all-gacha-num").hide();
        $(".haisin").show();
        $(".jizen").hide();
    });
});
$(function(){
    var flg = {a:'close',k:'close',s:'close',t:'close',n:'close',h:'close',m:'close',y:'close',r:'close',w:'close',other:'close' };
    
    $(".item>a").click(function(){
        Id=$(this).attr('id');
        flg[Id]=SearchToggle(flg[Id],this); 
    });
});
function SearchToggle(flag,item){
    $(item).next("ul").toggle();
    if(flag == "close"){
        $(item).html("ー");
        flag="open";
    }
    else{
        $(item).html("＋");
        flag="close";
    }
    return flag;    
}
$(function(){
    $("img.menu-icon").click(function(){
        $("body").toggleClass('side-open');          
    });
    $("#js__overlay").click(function () {
      $("body").removeClass('side-open');
    });
});
$(document).ready(function() {
  $(".drawer").drawer();
});
$(function() {
    $( 'a[rel*=leanModal]').leanModal({
        top: 250,                     // モーダルウィンドウの縦位置を指定
        overlay : 0.5,               // 背面の透明度 
        closeButton: ".modal_close",  // 閉じるボタンのCSS classを指定
        modalparent: "#many-modals"
    });
}); 
