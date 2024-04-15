!function(c){"use strict";function r(t,e){var i,s;i=parseInt(e.outerHeight()),t.css("padding-top",(s=i/2)+"px"),t.parent().css("margin-top",s+20+"px"),e.css("top",-i+"px")}function o(t){0<t.find(".timeline-icon-block").length&&c(".timeline-block").each(function(t,e){const i=c(this).find(".timeline-header-block"),s=c(this).find(".timeline-icon-block");s.css({position:"absolute"});var r=s.outerHeight(),o=s.outerWidth(),n=-o/2;parseInt(i.find(".timeline-header").css("padding-left").replace(/[^\d.]/g,""));c(this).hasClass("timeline-post-left")?(s.css({left:n,right:"auto"}),jQuery("body").hasClass("rtl")&&s.css({left:"auto",right:n})):c(this).hasClass("timeline-post-right")&&(s.css({left:"auto",right:n}),jQuery("body").hasClass("rtl")&&s.css({left:n,right:"auto"}));n=i.height();s.css({top:n/2-r/2});n=s.offset().left,r=c(window).width();(n<0||r<n+o)&&(s.css({position:"relative",top:"auto",left:"auto",right:"auto","text-align":"center"}),s.children().children().css({margin:"10px auto"}),i.css({padding:"0"}))})}function i(){jQuery(".ult-animation").each(function(){if(jQuery(this).attr("data-animate")){var e=jQuery(this).children("*");const o=jQuery(this).attr("data-animate"),t=jQuery(this).attr("data-animation-duration")+"s",s=jQuery(this).attr("data-animation-iteration"),r=jQuery(this).attr("data-animation-delay"),n=(jQuery(this).attr("data-opacity_start_effect"),"opacity:1;-webkit-animation-delay:"+r+"s;-webkit-animation-duration:"+t+";-webkit-animation-iteration-count:"+s+"; -moz-animation-delay:"+r+"s;-moz-animation-duration:"+t+";-moz-animation-iteration-count:"+s+"; animation-delay:"+r+"s;animation-duration:"+t+";animation-iteration-count:"+s+";");var i="opacity:1;-webkit-transition-delay: "+r+"s; -moz-transition-delay: "+r+"s; transition-delay: "+r+"s;";if(a(jQuery(this))){let t=jQuery(this).attr("style");void 0===t&&(t="test"),t=t.replace(/ /g,""),"opacity:0;"==t&&0!==t.indexOf(i)&&jQuery(this).attr("style",i),jQuery.each(e,function(t,e){const i=jQuery(e);let s=i.attr("style");void 0===s&&(s="test");let r="";r=0==s.indexOf(n)?s:n+s,i.attr("style",r),a(i)&&i.addClass("animated").addClass(o)})}}})}function a(t){var e,i=jQuery(window).scrollTop(),s=jQuery(window).height();e=void 0===(e=jQuery(t).hasClass("ult-animate-viewport")?jQuery(t).data("opacity_start_effect"):e)||""==e?2:100-e;jQuery(t).outerHeight();return jQuery(t).offset().top-i<=s-s*(e/100)}function n(){const t=jQuery(".ult-new-ib");t.each(function(t,e){const i=jQuery(this);var s,r;i.hasClass("ult-ib-resp")&&(s=jQuery(document).width(),r=i.data("min-width"),s<=i.data("max-width")&&r<=s?i.find(".ult-new-ib-content").hide():i.find(".ult-new-ib-content").show())})}c.fn.vc_translate_row=function(){const u=c(window).scrollTop(),l=c(window).height();c(this).each(function(t,e){let i=c(e).attr("data-row-effect-mobile-disable");if(i=void 0===i?"false":i.toString(),"false"==("true"==(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"true":"false")&&"true"==i?"true":"false")){var s=c(e).outerHeight(),r=c(e).offset().top-u,o=r+s,n=c(e).attr("data-parallax-content-sense")/100,a=0;o<=l-0*l&&r<=0&&!((a=s>l?(l-o)*n:-r*n)<0)||(a=0);c(e).find(".vc-row-translate-wrapper").children().each(function(t,e){jQuery(e).is(".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator,.ult-easy-separator-wrapper")||c(e).css({transform:"translate3d(0,"+a+"px,0)","-webkit-transform":"translate3d(0,"+a+"px,0)","-ms-transform":"translate3d(0,"+a+"px,0)"})})}})},c.fn.vc_fade_row=function(){const n=c(window).scrollTop(),a=c(window).height();c(this).each(function(t,e){let i=c(e).attr("data-row-effect-mobile-disable");if(i=void 0===i?"false":i.toString(),"false"==("true"==(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"true":"false")&&"true"==i?"true":"false")){var s=100-(s=c(e).data("fadeout-percentage")),r=c(e).outerHeight(),o=c(e).offset().top-n+r;let i=1;r=a-a*(s/100),s=(r-o)/r*1;0<s&&(i=1-s),o<=r?(i<0?i=0:1<i&&(i=1),c(e).children().each(function(t,e){c(e).is(".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator")||c(e).css({opacity:i})})):c(e).children().each(function(t,e){c(e).css({opacity:i})})}})},jQuery(document).ready(function(){!function(){let a="";c(".ult-spacer").each(function(t,e){var i=c(e).data("id"),s=(c("body").width(),c(e).data("height-mobile")),r=c(e).data("height-mobile-landscape"),o=c(e).data("height-tab"),n=c(e).data("height-tab-portrait"),e=c(e).data("height");""!=e&&(a+=" .spacer-"+i+" { height:"+e+"px } "),""==o&&"0"!=o&&0!=o||(a+=" @media (max-width: 1199px) { .spacer-"+i+" { height:"+o+"px } } "),void 0===n||""==n&&"0"!=n&&0!=n||(a+=" @media (max-width: 991px) { .spacer-"+i+" { height:"+n+"px } } "),void 0===r||""==r&&"0"!=r&&0!=r||(a+=" @media (max-width: 767px) { .spacer-"+i+" { height:"+r+"px } } "),""==s&&"0"!=s&&0!=s||(a+=" @media (max-width: 479px) { .spacer-"+i+" { height:"+s+"px } } ")}),""!=a&&(a="<style>"+a+"</style>",c("head").append(a))}()}),jQuery(window).on("scroll",function(){var t=jQuery(".ult-no-mobile").length;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&1<=t?jQuery(".ult-animation").css("opacity",1):i(),c(".vc-row-fade").vc_fade_row(),c(".vc-row-translate").vc_translate_row()}),jQuery(window).on("load",function(){jQuery(".ult-banner-block-custom-height").each(function(t,e){const i=jQuery(this).find("img");var s=jQuery(this).width(),r=jQuery(this).height();i.width();r<s&&i.css({width:"100%",height:"auto"})}),jQuery(".ult-new-ib").each(function(t,e){("ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints)&&jQuery(this).find(".ult-new-ib-link").click(function(t){t.preventDefault();const e=jQuery(this).attr("href");let i=jQuery(this).data("touch-delay");null==i&&(i=200),setTimeout(function(){window.location=e},i)})});let t=0,e=0;const i=function(){jQuery(".ifb-jq-height").each(function(){jQuery(this).find(".ifb-back").css("height","auto"),jQuery(this).find(".ifb-front").css("height","auto");var t=parseInt(jQuery(this).find(".ifb-front > div").outerHeight(!0)),e=parseInt(jQuery(this).find(".ifb-back > div").outerHeight(!0)),e=e<t?t:e;jQuery(this).find(".ifb-front").css("height",e+"px"),jQuery(this).find(".ifb-back").css("height",e+"px"),(jQuery(this).hasClass("vertical_door_flip")||jQuery(this).hasClass("horizontal_door_flip")||jQuery(this).hasClass("style_9"))&&jQuery(this).find(".ifb-flip-box").css("height",e+"px")}),jQuery(".ifb-auto-height").each(function(){var t,e;(jQuery(this).hasClass("horizontal_door_flip")||jQuery(this).hasClass("vertical_door_flip"))&&(t=parseInt(jQuery(this).find(".ifb-front > div").outerHeight()),e=(e=parseInt(jQuery(this).find(".ifb-back > div").outerHeight()))<t?t:e,jQuery(this).find(".ifb-flip-box").css("height",e+"px"))})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){i()},500):i(),jQuery(document).on("ultAdvancedTabClicked",function(t,e){i()}),jQuery(window).on("resize",function(){t++,setTimeout(function(){e++,t==e&&i()},500)});let s=0;jQuery(window).on("resize",function(){n(),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){o(jQuery(this))}),c(".jstime .timeline-wrapper").each(function(){o(jQuery(this))}),"none"==jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display")?0===s&&(c(".jstime .timeline-wrapper").masonry("destroy"),s=1):1==s&&(jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block"}),setTimeout(function(){jQuery(".jstime .timeline-wrapper").masonry({itemSelector:".timeline-block",width:"401px"}),jQuery(this).find(".timeline-block").each(function(){jQuery(this).css("left","initial"),"0px"==jQuery(this).css("left")?jQuery(this).addClass("timeline-post-left"):jQuery(this).addClass("timeline-post-right")}),s=0},300))}),c(".smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("timeline-cutom-width");t&&jQuery(this).css("width",2*t+40+"px");parseInt(jQuery(this).width()),parseInt(jQuery(this).find(".timeline-block").width());c(".jstime .timeline-wrapper").each(function(){jQuery(this).masonry({itemSelector:".timeline-block"})}),setTimeout(function(){c(".jstime .timeline-wrapper").each(function(){jQuery(this).find(".timeline-block").each(function(){"0px"==jQuery(this).css("left")?jQuery(this).addClass("timeline-post-left"):jQuery(this).addClass("timeline-post-right"),o(jQuery(this))}),jQuery(".timeline-block").each(function(){var t=parseInt(jQuery(this).css("top"))-parseInt(jQuery(this).next().css("top"));t<14&&0<t||0==t?jQuery(this).next().addClass("time-clash-right"):-14<t&&jQuery(this).next().addClass("time-clash-left")})}),jQuery(".timeline-post-right").each(function(){var t=jQuery(this).find(".timeline-icon-block").clone();jQuery(this).find(".timeline-icon-block").remove(),jQuery(this).find(".timeline-header-block").after(t)}),jQuery(".smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",t),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",t),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",t),jQuery(this).find(".feat-item").css("background-color",t),0<jQuery(this).find(".feat-item").find(".feat-top").length?jQuery(this).find(".feat-item l").css("border-top-color",t):jQuery(this).find(".feat-item l").css("border-bottom-color",t),jQuery(".jstime.timeline_preloader").remove(),jQuery(this).find("div").hasClass("timeline-wrapper")?jQuery(this).css("opacity","1"):jQuery(this).remove()})},1e3),jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text")||jQuery(this).find(".timeline-line").prepend("<span></span>");var t=jQuery(this).data("time_sep_color"),e=jQuery(this).data("time_sep_bg_color"),i=jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");jQuery(this).find(".timeline-dot").css("background-color",e),jQuery(this).find(".timeline-line span").css("background-color",e),jQuery(this).find(".timeline-line span").css("background-color",e),jQuery(this).find(".timeline-separator-text").css("color",t),jQuery(this).find(".timeline-separator-text .sep-text").css("background-color",e),jQuery(this).find(".ult-timeline-arrow s").css("border-color","rgba(255, 255, 255, 0) "+i),jQuery(this).find(".feat-item .ult-timeline-arrow s").css("border-color",i+" rgba(255, 255, 255, 0)"),jQuery(this).find(".timeline-block").css("border-color",i),jQuery(this).find(".feat-item").css("border-color",i)})}),jQuery(document).ready(function(t){var e=jQuery(".ult-no-mobile").length;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&1<=e?jQuery(".ult-animation").css("opacity",1):i(),n(),jQuery(".ubtn").on("mouseenter",function(){const t=jQuery(this);t.find(".ubtn-text").css("color",t.data("hover")),t.find(".ubtn-hover").css("background",t.data("hover-bg")).addClass("ubtn-hover-active");const e=""!=t.data("hover-bg")&&t.data("hover-bg");setTimeout(function(){!1!==e&&t.hasClass(".ubtn-fade-bg")&&t.css("background",t.data("hover-bg"))},150);let i=t.attr("style");var s;""!=t.data("shadow-hover")&&(t.css("box-shadow"),i+="box-shadow:"+t.data("shadow-hover")),t.attr("style",i),""!=t.data("border-hover")&&t.css("border-color",t.data("border-hover")),"none"!=t.data("shadow-click")&&(s=t.data("shd-shadow")-3,""!=t.is(".shd-left")?t.css({right:s}):""!=t.is(".shd-right")?t.css({left:s}):""!=t.is(".shd-top")?t.css({bottom:s}):""!=t.is(".shd-bottom")&&t.css({top:s}))}).on("mouseleave",function(){const t=jQuery(this);t.find(".ubtn-text").removeAttr("style"),t.find(".ubtn-hover").removeClass("ubtn-hover-active"),t.css("background",t.data("bg"));var e=t.data("border-color");let i=t.attr("style");""!=t.data("shadow-hover")&&(i+="box-shadow:"+t.data("shadow")),t.attr("style",i),""!=t.data("border-hover")&&t.css("border-color",e),"none"!=t.data("shadow-click")&&(t.removeClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:"auto"}):""!=t.is(".shd-right")?t.css({left:"auto"}):""!=t.is(".shd-top")?t.css({bottom:"auto"}):""!=t.is(".shd-bottom")&&t.css({top:"auto"}))}),jQuery(".ubtn").on("focus blur mousedown mouseup",function(t){const e=jQuery(this);"none"!=e.data("shadow-click")&&setTimeout(function(){e.is(":focus")?(e.addClass("no-ubtn-shadow"),""!=e.is(".shd-left")?e.css({right:e.data("shd-shadow")+"px"}):""!=e.is(".shd-right")?e.css({left:e.data("shd-shadow")+"px"}):""!=e.is(".shd-top")?e.css({bottom:e.data("shd-shadow")+"px"}):""!=e.is(".shd-bottom")&&e.css({top:e.data("shd-shadow")+"px"})):(e.removeClass("no-ubtn-shadow"),""!=e.is(".shd-left")?e.css({right:"auto"}):""!=e.is(".shd-right")?e.css({left:"auto"}):""!=e.is(".shd-top")?e.css({bottom:"auto"}):""!=e.is(".shd-bottom")&&e.css({top:"auto"}))},0)}),jQuery(".ubtn").on("focusout",function(){const t=jQuery(this);t.removeClass("no-ubtn-shadow"),""!=t.is(".shd-left")?t.css({right:"auto"}):""!=t.is(".shd-right")?t.css({left:"auto"}):""!=t.is(".shd-top")?t.css({bottom:"auto"}):""!=t.is(".shd-bottom")&&t.css({top:"auto"})}),jQuery(".smile-icon-timeline-wrap.jstime").css("opacity","0"),jQuery(".jstime.timeline_preloader").css("opacity","1"),jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function(){jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"),jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right")}),jQuery(".csstime .timeline-post-right").each(function(){jQuery(this).css("float","right"),jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this))}),jQuery(".csstime.smile-icon-timeline-wrap").each(function(){var t=jQuery(this).data("time_block_bg_color");jQuery(this).find(".timeline-block").css("background-color",t),jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color",t),jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color",t),jQuery(this).find(".feat-item").css("background-color",t),0<jQuery(this).find(".feat-item").find(".feat-top").length?jQuery(this).find(".feat-item l").css("border-top-color",t):jQuery(this).find(".feat-item l").css("border-bottom-color",t),o(jQuery(this))}),jQuery(".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector").each(function(){if(jQuery(this).attr("data-animation")){const e=jQuery(this).attr("data-animation"),i="delay-"+jQuery(this).attr("data-animation-delay");if(void 0===e||""===e)return!1;t(this).bsf_appear(function(){const t=jQuery(this);t.addClass("animated").addClass(e),t.addClass("animated").addClass(i)})}}),jQuery(".stats-block").each(function(){t(this).bsf_appear(function(){var t=parseFloat(jQuery(this).find(".stats-number").data("counter-value"));const e=jQuery(this).find(".stats-number").data("counter-value")+" ";var i=parseInt(jQuery(this).find(".stats-number").data("speed")),s=jQuery(this).find(".stats-number").data("id"),r=jQuery(this).find(".stats-number").data("separator");let o=jQuery(this).find(".stats-number").data("decimal"),n=e.split(".");n=n[1]?n[1].length-1:0;let a=!0;"none"==o&&(o=""),a="none"!=r;r={useEasing:!0,useGrouping:a,separator:r,decimal:o};const u=new countUp(s,0,t,n,i,r);setTimeout(function(){u.start()},500)})}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?

/* TREETHEMES*/ jQuery(".ifb-flip-box").off("click").on("click",function(t){const e=jQuery(this);e.hasClass("ifb-hover")?e.removeClass("ifb-hover"):e.addClass("ifb-hover")}):jQuery(document).off("mouseenter mouseleave",".ifb-flip-box").on("mouseenter mouseleave",".ifb-flip-box",function(t){const e=jQuery(this);e.hasClass("ifb-hover")?e.removeClass("ifb-hover"):e.addClass("ifb-hover")}),jQuery(".ifb-flip-box").each(function(t,e){jQuery(this).parent().hasClass("style_9")&&(jQuery(this).off("mouseenter").on("mouseenter",function(){jQuery(this).addClass("ifb-door-hover")}).off("mouseleave").on("mouseleave",function(){jQuery(this).removeClass("ifb-door-hover")}),jQuery(this).off("click").on("click",function(){jQuery(this).toggleClass("ifb-door-right-open"),jQuery(this).removeClass("ifb-door-hover")}))}),jQuery(document).off("click",".ifb-flip-box").on("click",".ifb-flip-box",function(t){t.stopPropagation(),jQuery(document).trigger("ultFlipBoxClicked",jQuery(this))})/* END OF TREETHEMES */

,jQuery(".vertical_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_vertical_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".horizontal_door_flip .ifb-front").each(function(){jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".reverse_horizontal_door_flip .ifb-back").each(function(){jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-front").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-front-1").addClass("ifb-front-2").insertAfter(jQuery(this).parent())}),jQuery(".style_9 .ifb-back").each(function(){jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'),jQuery(this).parent().clone().removeClass("ifb-back-1").addClass("ifb-back-2").insertAfter(jQuery(this).parent())}),/^((?!chrome).)*safari/i.test(navigator.userAgent)&&(jQuery(".vertical_door_flip").each(function(t,e){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-multiple-front").css("width","50.2%")}),jQuery(".horizontal_door_flip").each(function(t,e){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-multiple-front").css("height","50.2%")}),jQuery(".reverse_vertical_door_flip").each(function(t,e){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px")}),jQuery(".reverse_horizontal_door_flip").each(function(t,e){var i=jQuery(this).find(".flip_link").outerHeight();jQuery(this).find(".flip_link").css("top",-i/2+"px"),jQuery(this).find(".ifb-back").css("position","inherit")})),jQuery(".square_box-icon").each(function(t,e){const i=jQuery(this);var s;0<jQuery(this).find(".aio-icon-img").length?(s=jQuery(this).find(".aio-icon-img"),r(i,s),s.find(".img-icon").on("load",function(){r(i,s)})):(s=jQuery(this).find(".aio-icon"),r(i,s),jQuery(window).on("load",function(){r(i,s)}))})})}(jQuery),jQuery(document).ready(function(){function t(){jQuery(".ult-new-ib").each(function(t,e){var i,s=jQuery(this).data("min-height")||"";jQuery(this).find(".ult-new-ib-img").data("min-height"),jQuery(this).find(".ult-new-ib-img").data("max-width");""!=s&&(jQuery(this).addClass("ult-ib2-min-height"),jQuery(this).css("height",s),jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size"),jQuery(this).find(".ult-new-ib-img").width(),i=jQuery(this).find(".ult-new-ib-img").height(),(jQuery(this).width()<=s||i<s)&&jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")),jQuery(this).on("mouseenter",function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("hover-opacity"))}).on("mouseleave",function(){jQuery(this).find(".ult-new-ib-img").css("opacity",jQuery(this).data("opacity"))})})}jQuery(".ult-new-ib").css("opacity","1"),t(),jQuery(window).on("load",function(){t()}),jQuery(window).on("resize",function(){t()})}),jQuery(document).ready(function(){function i(){jQuery(".ultimate-map-wrapper").each(function(t,e){var i=jQuery(e).attr("id");if(void 0===i||""===i)return!1;var s=jQuery(e).find(".ultimate_google_map").attr("id"),r=jQuery("#"+s).attr("data-map_override");let o="true";jQuery("#"+s).css({"margin-left":0}),jQuery("#"+s).css({right:0});let n=jQuery("#"+i).parent();n;if("full"==r&&(n=jQuery("body"),o="false"),"ex-full"==r&&(n=jQuery("html"),o="false"),!isNaN(r))for(t=0;t<r&&"HTML"!=n.prop("tagName");t++)n=n.parent();e=0==r||"0"==r?n.width():n.outerWidth();i=n.offset().left-jQuery("#"+s).offset().left;if(jQuery("#"+s).css({width:e}),0==r&&"0"==r||jQuery("#"+s).css({"margin-left":i}),"full"==r&&jQuery("body").hasClass("rtl")){const a=jQuery("#"+s);i=jQuery(window).width()-(a.offset().left+a.outerWidth());jQuery("#"+s).css({right:-i})}})}i(),jQuery(window).on("load",function(){i()}),jQuery(window).on("resize",function(){i()}),jQuery(".ui-tabs").on("tabsactivate",function(t,e){0<jQuery(this).find(".ultimate-map-wrapper").length&&i()}),jQuery(".ui-accordion").on("accordionactivate",function(t,e){0<jQuery(this).find(".ultimate-map-wrapper").length&&i()}),jQuery(document).on("onUVCModalPopupOpen",function(){i()}),jQuery(document).on("UVCMapResize",function(){i()})});