/*! autosize - v1.0 - 2013-10-10 2:49:35 PM
* Copyright (c) 2013 石霸; Licensed  */
KISSY.add("gallery/autosize/1.0/index",function(a,b,c){function d(b){var c=this,d={callback:!1,resizeDelay:10};d=a.mix(d,b||{});var f='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',g=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],h=e(f).data("autosize",!0)[0];h.style.lineHeight="99px","99px"===e(h).css("lineHeight")&&g.push("lineHeight"),h.style.lineHeight="",c.mirrored=null,c.cfg=d,c.mirror=h,c.typographyStyles=g,c.init()}var e=b.all;return a.extend(d,c,{init:function(){this.autoSize(this.cfg)},autoSize:function(b){var c=this,d=e(b.node);return 0===d.length?(a.log("\u6ca1\u6709\u627e\u5230\u8282\u70b9! selector "+b.node),void 0):(c.mirror.parentNode!==document.body&&e(document.body).append(c.mirror),d.each(function(){function d(){var b,d;"getComputedStyle"in window?(b=window.getComputedStyle(l),d=l.getBoundingClientRect().width,a.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(a,c){d-=parseInt(b[c],10)}),c.mirror.style.width=d+"px"):c.mirror.style.width=Math.max(m.width(),0)+"px"}function f(){var f={};if(c.mirrored=l,c.mirror.className=b.className,i=parseInt(m.css("maxHeight"),10),a.each(c.typographyStyles,function(a){f[a]=m.css(a)}),e(c.mirror).css(f),d(),window.chrome){var g=l.style.width;l.style.width="0px",l.offsetWidth,l.style.width=g}}function g(){var a,e;c.mirrored!==l?f():d(),c.mirror.value=l.value,c.mirror.style.overflowY=l.style.overflowY,e=parseInt(l.style.height,10),c.mirror.scrollTop=0,c.mirror.scrollTop=9e4,a=c.mirror.scrollTop,i&&a>i?(l.style.overflowY="scroll",a=i):(l.style.overflowY="hidden",j>a&&(a=j)),a+=n,e!==a&&(l.style.height=a+"px",o&&b.callback.call(l,l))}function h(){clearTimeout(k),k=setTimeout(function(){var a=m.width();a!==q&&(q=a,g())},b.resizeDelay)}var i,j,k,l=this[0],m=e(l),n=0,o=a.isFunction(b.callback),p={height:l.style.height,overflow:l.style.overflow,overflowY:l.style.overflowY,wordWrap:l.style.wordWrap,resize:l.style.resize},q=m.width();m.data("autosize")||(m.data("autosize",!0),("border-box"===m.css("box-sizing")||"border-box"===m.css("-moz-box-sizing")||"border-box"===m.css("-webkit-box-sizing"))&&(n=m.outerHeight()-m.height()),j=Math.max(parseInt(m.css("minHeight"),10)-n||0,m.height()),m.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===m.css("resize")||"vertical"===m.css("resize")?"none":"horizontal"}),"onpropertychange"in l?"oninput"in l?m.on("input.autosize keyup.autosize",g):m.on("propertychange.autosize",function(){"value"===event.propertyName&&g()}):m.on("input.autosize",g),b.resizeDelay!==!1&&e(window).on("resize.autosize",h),m.on("autosize.resize",g),m.on("autosize.resizeIncludeStyle",function(){c.mirrored=null,g()}),m.on("autosize.destroy",function(){c.mirrored=null,clearTimeout(k),e(window).off("resize",h),m.detach("autosize").detach(".autosize").css(p).removeData("autosize")}),g())}),void 0)}},{ATTRS:{}}),d},{requires:["node","base"]});