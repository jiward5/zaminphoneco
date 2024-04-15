/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2024 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function($){"use strict";var vcGridStyleAll=function(grid){this.grid=grid,this.settings=grid.settings,this.filterValue=null,this.$el=!1,this.$content=!1,this.isLoading=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.init()};vcGridStyleAll.prototype.init=function(){_.bindAll(this,"addItems","showItems","setIsLoading")},vcGridStyleAll.prototype.render=function(){this.$el=this.grid.$el,this.$content=this.$el,this.$content.find(".vc_grid-item").length?(this.grid.initFilter(),this.filter(),this.showItems(),this.filterValue=-1,window.vc_prettyPhoto()):(_.defer(this.setIsLoading),this.grid.ajax({},this.addItems))},vcGridStyleAll.prototype.setIsLoading=function(){this.$content.append(this.$loader),this.isLoading=!0},vcGridStyleAll.prototype.unsetIsLoading=function(){this.isLoading=!1,this.$loader&&this.$loader.remove()},vcGridStyleAll.prototype.filter=function(filter){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;var animation=this.$content.closest(".vc_grid-container").data("initial-loading-animation");window.vcGridSettings.addItemsAnimation=animation,this.$content.find(".vc_visible-item").removeClass("vc_visible-item "+window.vcGridSettings.addItemsAnimation+" animated"),this.filterValue=filter,_.defer(this.showItems)},vcGridStyleAll.prototype.showItems=function(){var $els=this.$content.find(".vc_grid-item"+this.filterValue),animation=(this.setIsLoading(),this.$content.closest(".vc_grid-container").data("initial-loading-animation"));window.vcGridSettings.addItemsAnimation=animation,$els.addClass("vc_visible-item "+("none"!==window.vcGridSettings.addItemsAnimation?window.vcGridSettings.addItemsAnimation+" animated":"")),this.unsetIsLoading(),$(window).trigger("grid:items:added",this.$el)},vcGridStyleAll.prototype.addItems=function(html){html&&html.length&&(html=$(html),this.$el.html(html),this.unsetIsLoading(),this.$content=html.find('[data-vc-grid-content="true"]'),this.grid.initFilter(),this.filter(),window.vc_prettyPhoto())},window.vcGridStyleAll=vcGridStyleAll}(window.jQuery),function($){"use strict";var vcGridStyleLoadMore=function(grid){this.grid=grid,this.settings=grid.settings,this.$loadMoreBtn=!1,this.$el=!1,this.filterValue=null,this.$content=!1,this.isLoading=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.init()};vcGridStyleLoadMore.prototype.setIsLoading=function(){this.$loadMoreBtn&&this.$loadMoreBtn.hide(),this.isLoading=!0},vcGridStyleLoadMore.prototype.unsetIsLoading=function(){this.isLoading=!1,this.setLoadMoreBtn()},vcGridStyleLoadMore.prototype.init=function(){_.bindAll(this,"addItems")},vcGridStyleLoadMore.prototype.render=function(){this.$el=this.grid.$el,this.$content=this.$el,this.grid.initFilter(),this.filter(void 0,!0),this.showItems(!0),this.filterValue=-1,window.vc_prettyPhoto(),this.$content.append(this.$loader),this.grid.ajax({},this.addItems)},vcGridStyleLoadMore.prototype.showItems=function(animate){var $els=this.$content.find(".vc_grid_filter-item:not(.vc_visible-item):lt("+this.settings.items_per_page+")"),animation=(this.setIsLoading(),this.$content.closest(".vc_grid-container").data("initial-loading-animation"));window.vcGridSettings.addItemsAnimation=animation,$els.addClass("vc_visible-item"),animate&&$els.addClass(window.vcGridSettings.addItemsAnimation+" animated"),this.unsetIsLoading(),$(window).trigger("grid:items:added",this.$el)},vcGridStyleLoadMore.prototype.filter=function(filter,animate){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;this.$content.find(".vc_visible-item, .vc_grid_filter-item").removeClass("vc_visible-item vc_grid_filter-item "),this.filterValue=filter,this.$content.find(".vc_grid-item"+this.filterValue).addClass("vc_grid_filter-item"),this.showItems(animate)},vcGridStyleLoadMore.prototype.addItems=function(html){var self;html&&html.length&&(html=$(html),this.$el.html(html),this.unsetIsLoading(),this.$content=html.find('[data-vc-grid-content="true"]'),this.$loadMoreBtn=html.find('[data-vc-grid-load-more-btn="true"] .vc_btn3'),this.$loadMoreBtn.length||(this.$loadMoreBtn=html.find('[data-vc-grid-load-more-btn="true"] .vc_btn')),(self=this).$loadMoreBtn.on("click",function(e){e.preventDefault(),self.showItems(!0)}),this.$loadMoreBtn.hide(),this.grid.initFilter(),this.filter(),this.$loader.remove(),window.vc_prettyPhoto())},vcGridStyleLoadMore.prototype.setLoadMoreBtn=function(){$('.vc_grid_filter-item:not(".vc_visible-item")',this.$content).length&&$(".vc_grid_filter-item",this.$content).length?this.$loadMoreBtn&&this.$loadMoreBtn.show():this.$loadMoreBtn&&this.$loadMoreBtn.hide()},window.vcGridStyleLoadMore=vcGridStyleLoadMore}(window.jQuery),function($){"use strict";var vcGridStyleLazy;!function($){var VcWaypoint=window.VcWaypoint;window.VcGridInfinite=function($el,options){var opts=$.extend({},window.VcWaypoint.defaults,{container:"auto",items:".infinite-item",offset:"bottom-in-view"},options);opts.element=$el,opts.handler=function(direction){"down"!==direction&&"right"!==direction||($el.data("vcWaypoint")&&$el.data("vcWaypoint").destroy(),opts.handle.load.call(this,opts))},$el.data("vcWaypoint",new VcWaypoint(opts))}}(window.jQuery),(vcGridStyleLazy=function(grid){this.grid=grid,this.settings=grid.settings,this.$el=!1,this.filterValue=null,this.$content=!1,this.isLoading=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.init()}).prototype.setIsLoading=function(){this.$content.append(this.$loader),this.isLoading=!0},vcGridStyleLazy.prototype.unsetIsLoading=function(){this.isLoading=!1,this.$loader&&this.$loader.remove()},vcGridStyleLazy.prototype.init=function(){_.bindAll(this,"addItems","showItems","setIsLoading")},vcGridStyleLazy.prototype.render=function(){this.$el=this.grid.$el,this.$content=this.$el,this.grid.initFilter(),this.filter(),this.showItems(),this.filterValue=-1,window.vc_prettyPhoto(),_.defer(this.setIsLoading),this.grid.ajax({},this.addItems)},vcGridStyleLazy.prototype.showItems=function(){var $els=this.$content.find(".vc_grid_filter-item:not(.vc_visible-item):lt("+this.settings.items_per_page+")"),animation=(this.setIsLoading(),this.$content.closest(".vc_grid-container").data("initial-loading-animation"));vcGridSettings.addItemsAnimation=animation,$els.addClass("vc_visible-item "+vcGridSettings.addItemsAnimation+" animated"),this.unsetIsLoading(),$(window).trigger("grid:items:added",this.$el)},vcGridStyleLazy.prototype.filter=function(filter){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;var animation=this.$content.closest(".vc_grid-container").data("initial-loading-animation");vcGridSettings.addItemsAnimation=animation,this.$content.find(".vc_visible-item, .vc_grid_filter-item").removeClass("vc_visible-item vc_grid_filter-item "+("none"!==vcGridSettings.addItemsAnimation?vcGridSettings.addItemsAnimation+" animated":"")),this.filterValue=filter,this.$content.find(".vc_grid-item"+this.filterValue).addClass("vc_grid_filter-item"),_.defer(this.showItems),this.initScroll()},vcGridStyleLazy.prototype.addItems=function(html){html&&html.length&&(html=$(html),this.$el.html(html),this.unsetIsLoading(),this.$content=html.find('[data-vc-grid-content="true"]'),this.grid.initFilter(),this.filter(),window.vc_prettyPhoto())},vcGridStyleLazy.prototype.initScroll=function(){var self=this;this.$content.unbind(".vcwaypoint"),new window.VcGridInfinite(this.$content,{container:"auto",items:".vc_grid-item",handle:{load:function(opts){self.showItems(),self.checkNext(opts)}}})},vcGridStyleLazy.prototype.checkNext=function(opts){var self;this.$content.find('.vc_grid_filter-item:not(".vc_visible-item")').length&&(self=this,_.defer(function(){return self.$content.vcwaypoint(opts)}))},window.vcGridStyleLazy=vcGridStyleLazy}(window.jQuery),function($){"use strict";var vcGridStylePagination=function(grid){this.grid=grid,this.settings=grid.settings,this.$el=!1,this.$content=!1,this.filterValue=null,this.isLoading=!1,this.htmlCache=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.init()};vcGridStylePagination.prototype.init=function(){_.bindAll(this,"addItems","initCarousel")},vcGridStylePagination.prototype.setIsLoading=function(){this.$loader.show(),this.isLoading=!0},vcGridStylePagination.prototype.unsetIsLoading=function(){this.isLoading=!1,this.$loader.hide()},vcGridStylePagination.prototype.render=function(){this.$el=this.grid.$el,this.$content=this.$el,this.$content.append(this.$loader),this.setIsLoading(),this.grid.ajax({},this.addItems)},vcGridStylePagination.prototype.filter=function(filter){var $html;return filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue!=filter&&!(!this.htmlCache||!this.htmlCache.length)&&(this.$content.data("owl.vccarousel")&&(this.$content.off("initialized.owl.vccarousel"),this.$content.off("changed.owl.vccarousel"),this.$content.data("vcPagination")&&this.$content.data("vcPagination").twbsPagination("destroy"),this.$content.data("owl.vccarousel").destroy()),this.$content.empty(),$html=$(".vc_grid-item",this.htmlCache),""!==filter&&($html=$html.filter(filter)),this.filterValue=filter,void this.buildSlides($html.addClass("vc_visible-item")))},vcGridStylePagination.prototype.buildSlides=function($html){for(var tempArray,chunk=parseInt(this.settings.items_per_page,10),i=0,j=$html.length;i<j;i+=chunk)tempArray=$html.slice(i,i+chunk),$('<div class="vc_pageable-slide-wrapper">').append($(tempArray)).appendTo(this.$content);this.$content.find(".vc_pageable-slide-wrapper:first").imagesLoaded(this.initCarousel)},vcGridStylePagination.prototype.addItems=function(html){this.$el.append(html),!1===this.htmlCache&&(this.htmlCache=html),this.unsetIsLoading(),this.$content=this.$el.find('[data-vc-pageable-content="true"]'),this.$content.addClass("owl-carousel vc_grid-owl-theme"),this.grid.initFilter(),this.filter(),window.vc_prettyPhoto()},vcGridStylePagination.prototype.initCarousel=function(){var that,$vcCarousel;$.fn.vcOwlCarousel&&(($vcCarousel=(that=this).$content.data("owl.vccarousel"))&&$vcCarousel.destroy(),this.$content.on("initialized.owl.vccarousel",function(event){var $pagination,$carousel=event.relatedTarget,event=$carousel.items(),animation=that.$content.closest(".vc_grid-container").data("initial-loading-animation");event.forEach(function(i){jQuery(i).find(".vc_grid-item").addClass(animation+" animated")}),-1<that.settings.paging_design.indexOf("pagination")&&(event=$carousel.items().length,($pagination=$("<div></div>").addClass("vc_grid-pagination").appendTo(that.$el)).twbsPagination({totalPages:event,visiblePages:that.settings.visible_pages,onPageClick:function(event,page){$carousel.to(page-1),window.setTimeout(function(){var activeSlide=$carousel.$element.find(".owl-item.active");activeSlide.length&&activeSlide.offset().top<$(window).scrollTop()&&$("html, body").animate({scrollTop:activeSlide.offset().top-100},500)},16)},paginationClass:"vc_grid-pagination-list vc_grid-"+that.settings.paging_design+" vc_grid-pagination-color-"+that.settings.paging_color,nextClass:"vc_grid-next",first:20<event&&" ",last:20<event&&" ",prev:5<event&&" ",next:5<event&&" ",prevClass:"vc_grid-prev",lastClass:"vc_grid-last",loop:that.settings.loop,firstClass:"vc_grid-first",pageClass:"vc_grid-page",activeClass:"vc_grid-active",disabledClass:"vc_grid-disabled"}),$(this).data("vcPagination",$pagination),that.$content.on("changed.owl.vccarousel",function(event){var $pag_object=$(this).data("vcPagination").data("twbsPagination");$pag_object.render($pag_object.getPages(1+event.page.index)),$pag_object.setupEvents()}),window.vc_prettyPhoto())}).vcOwlCarousel({items:1,loop:this.settings.loop,margin:10,nav:!0,navText:["",""],navContainerClass:"vc_grid-owl-nav vc_grid-owl-nav-color-"+this.settings.arrows_color,dotClass:"vc_grid-owl-dot",dotsClass:"vc_grid-owl-dots vc_grid-"+this.settings.paging_design+" vc_grid-owl-dots-color-"+this.settings.paging_color,navClass:["vc_grid-owl-prev "+this.settings.arrows_design+" vc_grid-nav-prev-"+this.settings.arrows_position,"vc_grid-owl-next "+this.settings.arrows_design.replace("_left","_right")+" vc_grid-nav-next-"+this.settings.arrows_position],animateIn:"none"!==this.settings.animation_in&&this.settings.animation_in,animateOut:"none"!==this.settings.animation_out&&this.settings.animation_out,autoHeight:!0,autoplay:!0===this.settings.auto_play,autoplayTimeout:this.settings.speed,autoplayHoverPause:!0,callbacks:!0,onTranslated:function(){setTimeout(function(){$(window).trigger("grid:items:added",that.$el)},750)},onRefreshed:function(){setTimeout(function(){$(window).trigger("grid:items:added",that.$el)},750)}}))},window.vcGridStylePagination=vcGridStylePagination}(window.jQuery),function($){"use strict";var vcGridStyleAllMasonry=function(grid){this.grid=grid,this.settings=grid.settings,this.filterValue=null,this.$el=!1,this.$content=!1,this.isLoading=!1,this.filtered=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.masonryEnabled=!1,_.bindAll(this,"setMasonry"),this.init()};vcGridStyleAllMasonry.prototype=_.extend({},window.vcGridStyleAll.prototype,{render:function(){this.$el=this.grid.$el,this.$content=this.$el,_.defer(this.setIsLoading),this.grid.ajax({},this.addItems)},showItems:function(){var $els=this.$content.find(".vc_grid-item"+this.filterValue),self=this;this.setIsLoading(),$els.imagesLoaded(function(){$els.addClass("vc_visible-item"),self.setItems($els),self.filtered&&(self.filtered=!1,self.setMasonry()),self.unsetIsLoading(),window.vc_prettyPhoto(),$(window).trigger("grid:items:added",self.$el)})},filter:function(filter){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;this.filterValue=filter,this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1,this.$content.find(".vc_visible-item").removeClass("vc_visible-item"),this.$content.find(".vc_grid-item"+this.filterValue),this.filtered=!0,$(window).on("resize",this.setMasonry),this.setMasonry(),this.showItems()},setIsLoading:function(){this.$el.append(this.$loader),this.isLoading=!0},unsetIsLoading:function(){this.isLoading=!1,this.$loader&&this.$loader.remove()},setItems:function(els){this.masonryEnabled?this.$content.masonry("appended",els):this.setMasonry()},setMasonry:function(e){var _this,animation,settings;window.innerWidth<window.vcGridSettings.mobileWindowWidth?(this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1):this.masonryEnabled?(this.$content.masonry("reloadItems"),this.$content.masonry("layout")):(animation=this.$content.closest(".vc_grid-container").data("initial-loading-animation"),settings={itemSelector:".vc_visible-item",isResizeBound:!1},"none"===animation?(settings.hiddenStyle={visibility:"hidden",transition:"none"},settings.visibleStyle={visibility:"visible",transition:"none"}):"fadeIn"===animation?(settings.hiddenStyle={opacity:0},settings.visibleStyle={opacity:1}):(settings.hiddenStyle={opacity:0,transform:"scale(0.001)"},settings.visibleStyle={opacity:1,transform:"scale(1)"}),this.$content.masonry(settings),e||(_this=this,setTimeout(function(){_this.$content.masonry(settings)},100)),this.masonryEnabled=!0)}}),window.vcGridStyleAllMasonry=vcGridStyleAllMasonry}(window.jQuery),function($){"use strict";var vcGridStyleLazyMasonry=function(grid){this.grid=grid,this.settings=grid.settings,this.$el=!1,this.filterValue=null,this.filtered=!1,this.$content=!1,this.isLoading=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.masonryEnabled=!1,_.bindAll(this,"setMasonry"),this.init()};vcGridStyleLazyMasonry.prototype=_.extend({},window.vcGridStyleLazy.prototype,{render:function(){this.$el=this.grid.$el,this.$content=this.$el,this.setIsLoading(),this.grid.ajax({},this.addItems)},showItems:function(){if(!0===this.isLoading)return!1;this.setIsLoading();var $els=this.$content.find(".vc_grid_filter-item:not(.vc_visible-item):lt("+this.settings.items_per_page+")"),self=this;$els.imagesLoaded(function(){$els.addClass("vc_visible-item"),self.setItems($els),self.filtered&&(self.filtered=!1,self.setMasonry(),self.initScroll(),window.vc_prettyPhoto()),self.unsetIsLoading(),$(window).trigger("grid:items:added",self.$el)})},setIsLoading:function(){this.$el.append(this.$loader),this.isLoading=!0},filter:function(filter){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1,this.$content.find(".vc_visible-item, .vc_grid_filter-item").removeClass("vc_visible-item vc_grid_filter-item"),this.filterValue=filter,this.$content.find(".vc_grid-item"+this.filterValue).addClass("vc_grid_filter-item"),this.filtered=!0,$(window).on("resize",this.setMasonry),this.setMasonry(),_.defer(this.showItems)},setItems:function(els){this.masonryEnabled?this.$content.masonry("appended",els):this.setMasonry()},setMasonry:function(){var animation,settings;window.innerWidth<window.vcGridSettings.mobileWindowWidth?(this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1):this.masonryEnabled?(this.$content.masonry("reloadItems"),this.$content.masonry("layout")):(settings={itemSelector:".vc_visible-item",isResizeBound:!1},"none"===(animation=this.$content.closest(".vc_grid-container").data("initial-loading-animation"))?(settings.hiddenStyle={visibility:"hidden"},settings.visibleStyle={visibility:"visible"}):"fadeIn"===animation?(settings.hiddenStyle={opacity:0},settings.visibleStyle={opacity:1}):(settings.hiddenStyle={opacity:0,transform:"scale(0.001)"},settings.visibleStyle={opacity:1,transform:"scale(1)"}),this.$content.masonry(settings),this.masonryEnabled=!0)}}),window.vcGridStyleLazyMasonry=vcGridStyleLazyMasonry}(window.jQuery),function($){"use strict";var vcGridStyleLoadMoreMasonry=function(grid){this.grid=grid,this.settings=grid.settings,this.$loadMoreBtn=!1,this.$el=!1,this.filterValue=null,this.$content=!1,this.isLoading=!1,this.filtered=!1,this.$loader=$('<div class="vc_grid-loading"></div>'),this.masonryEnabled=!1,_.bindAll(this,"setMasonry"),this.init()};vcGridStyleLoadMoreMasonry.prototype=_.extend({},window.vcGridStyleLoadMore.prototype,{render:function(){this.$el=this.grid.$el,this.$content=this.$el,this.setIsLoading(),this.grid.ajax({},this.addItems)},showItems:function(){if(!0===this.isLoading)return!1;this.setIsLoading();var $els=this.$content.find(".vc_grid_filter-item:not(.vc_visible-item):lt("+this.settings.items_per_page+")"),self=this;$els.imagesLoaded(function(){$els.addClass("vc_visible-item"),self.setItems($els),self.filtered&&(self.filtered=!1,self.setMasonry(),window.vc_prettyPhoto()),self.unsetIsLoading(),$(window).trigger("grid:items:added",self.$el)})},filter:function(filter){if(filter=_.isUndefined(filter)||"*"===filter?"":filter,this.filterValue==filter)return!1;this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1,this.$content.find(".vc_visible-item, .vc_grid_filter-item").removeClass("vc_visible-item vc_grid_filter-item"),this.filterValue=filter,this.$content.find(".vc_grid-item"+this.filterValue).addClass("vc_grid_filter-item"),this.filtered=!0,$(window).on("resize",this.setMasonry),this.setMasonry(),this.showItems()},setIsLoading:function(){this.$el.append(this.$loader),this.$loadMoreBtn&&this.$loadMoreBtn.hide(),this.isLoading=!0},unsetIsLoading:function(){this.isLoading=!1,this.$loader&&this.$loader.remove(),this.setLoadMoreBtn()},setItems:function(els){this.masonryEnabled?this.$content.masonry("appended",els):this.setMasonry()},setMasonry:function(){var animation,settings;window.innerWidth<window.vcGridSettings.mobileWindowWidth?(this.$content.data("masonry")&&this.$content.masonry("destroy"),this.masonryEnabled=!1):this.masonryEnabled?(this.$content.masonry("reloadItems"),this.$content.masonry("layout")):(settings={itemSelector:".vc_visible-item",isResizeBound:!1},"none"===(animation=this.$content.closest(".vc_grid-container").data("initial-loading-animation"))?(settings.hiddenStyle={visibility:"hidden"},settings.visibleStyle={visibility:"visible"}):"fadeIn"===animation?(settings.hiddenStyle={opacity:0},settings.visibleStyle={opacity:1}):(settings.hiddenStyle={opacity:0,transform:"scale(0.001)"},settings.visibleStyle={opacity:1,transform:"scale(1)"}),this.$content.masonry(settings),this.masonryEnabled=!0)}}),window.vcGridStyleLoadMoreMasonry=vcGridStyleLoadMoreMasonry}(window.jQuery),function($){"use strict";var VcGrid,vcGridSettings={addItemsAnimation:"zoomIn",mobileWindowWidth:768,itemAnimationSpeed:1e3,itemAnimationDelay:[],clearAnimationDelays:function(){_.each(this.itemAnimationDelay,function(id){window.clearTimeout(id)}),this.itemAnimationDelay=[]}};(VcGrid=function(el){this.$el=$(el),this.settings={},this.$filter=!1,this.gridBuilder=!1,this.init()}).prototype.init=function(){_.bindAll(this,"filterItems","filterItemsDropdown"),this.setSettings(),this.initStyle(),this.initHover(),this.initZoneLink()},VcGrid.prototype.setSettings=function(){this.settings=$.extend({visible_pages:5},this.$el.data("vcGridSettings")||{});

//TREETHEMES
if ( !jQuery('body').hasClass('page') || jQuery('body').hasClass('page-template-template-home')){
	if (!jQuery('body').hasClass('single')){
		var realID = parseInt(this.$el.closest('section.page_content').attr('id').replace('section_page-',''),10);
		this.$el.data( 'vcGridSettings' ).page_id = realID;
		this.$el.data( 'vcPostId', realID )
		this.$el.attr('data-vc-post-id',realID);
		this.settings.page_id = realID;	
	}
}
//ENDOF TREETHEMES

},VcGrid.prototype.initStyle=function(){var styleObject=!!this.settings.style&&$.camelCase("vc-grid-style-"+this.settings.style);styleObject&&!_.isUndefined(window[styleObject])&&window[styleObject].prototype.render&&(this.gridBuilder=new window[styleObject](this),this.gridBuilder.render())},VcGrid.prototype.initFilter=function(){this.$filter=this.$el.find("[data-vc-grid-filter]"),this.$filterDropdown=this.$el.find("[data-vc-grid-filter-select]"),this.$filter.length&&this.$filter.find(".vc_grid-filter-item").off("click.vc-grid").on("click.vc-grid",this.filterItems),this.$filterDropdown.length&&this.$filterDropdown.off("change.vc-grid").on("change.vc-grid",this.filterItemsDropdown)},VcGrid.prototype.initHover=function(){this.$el.off("mouseover.vc-grid").off("mouseleave.vc-grid").on("mouseover.vc-grid",".vc_grid-item-mini",function(){$(this).addClass("vc_is-hover")}).on("mouseleave.vc-grid",".vc_grid-item-mini",function(){$(this).removeClass("vc_is-hover")})},VcGrid.prototype.initZoneLink=function(){window.vc_iframe?(this.$el.off("click.zonePostLink").on("click.zonePostLink","[data-vc-link]",function(){$(this);var href=$(this).data("vcLink");window.open(href)}),this.$el.off("click.vc-grid-zone").on("click.vc-grid-zone",".vc_gitem-link",function(e){e&&e.prevenDefault&&e.preventDefault();e=$(this);e.hasClass("vc-gitem-link-ajax")||window.open(e.attr("href"))})):(this.$el.off("click.zonePostLink").on("click.zonePostLink","[data-vc-link]",function(){var $this=$(this),href=$(this).data("vcLink");"_blank"===$this.data("vcTarget")?window.open(href):window.location.href=href}),this.$el.off("click.vc-grid-zone").on("click.vc-grid-zone",".vc_gitem-link",function(e){var httpRequest,removeSpinner,timeout,$this=$(this);$this.hasClass("vc-gitem-link-ajax")&&(e.preventDefault(),httpRequest=new XMLHttpRequest,$this.addClass("vc-spinner"),httpRequest.open("GET",$this.attr("href"),!0),httpRequest.send(),removeSpinner=function(){$this.removeClass("vc-spinner vc-spinner-complete vc-spinner-failed")},timeout=0,httpRequest.onreadystatechange=function(){XMLHttpRequest.DONE===httpRequest.readyState&&(timeout=(200===httpRequest.status?$this.addClass("vc-spinner-complete"):$this.addClass("vc-spinner-failed"),timeout&&(window.clearTimeout(timeout),timeout=0),window.setTimeout(removeSpinner,500)))})}))},VcGrid.prototype.initHover_old=function(){this.$el.on("mouseover",".vc_grid-item",function(){var $this=$(this);$this.hasClass("vc_is-hover")||(vcGridSettings.clearAnimationDelays(),$this.addClass("vc_is-hover vc_is-animated"),$this.find(".vc_grid-item-row-animate").each(function(){var $animate=$(this),animationIn=$animate.data("animationIn"),animationOut=$animate.data("animationOut");$animate.removeClass(animationOut).addClass(animationIn),vcGridSettings.itemAnimationDelay.push(_.delay(function(){$animate.removeClass(animationIn),$this.removeClass("vc_is-animated")},vcGridSettings.itemAnimationSpeed))}))}).on("mouseleave",".vc_grid-item",function(){var $this=$(this);vcGridSettings.clearAnimationDelays(),$this.addClass("vc_is-animated").removeClass("vc_is-hover"),$this.find(".vc_grid-item-row-animate").each(function(){var $animate=$this.find(".vc_grid-item-row-animate"),animationOut=$animate.data("animationOut"),animationIn=$animate.data("animationIn");$animate.addClass(animationOut),vcGridSettings.itemAnimationDelay.push(_.delay(function(){$animate.removeClass(animationOut+" "+animationIn),$this.removeClass("vc_is-animated")},vcGridSettings.itemAnimationSpeed-1))})})},VcGrid.prototype.filterItems=function(e){var filter;if(e&&e.preventDefault&&e.preventDefault(),this.style&&$.camelCase("filter-"+this.style),filter=(e=$(e.currentTarget).find("[data-vc-grid-filter-value]")).data("vcGridFilterValue"),e.hasClass("vc_active"))return!1;this.$filter.find(".vc_active").removeClass("vc_active"),this.$filterDropdown.find(".vc_active").removeClass("vc_active"),this.$filterDropdown.find('[value="'+filter+'"]').addClass("vc_active").attr("selected","selected"),e.parent().addClass("vc_active"),this.gridBuilder.filter(filter)},VcGrid.prototype.filterItemsDropdown=function(e){var $control=this.$filterDropdown.find(":selected"),filter=$control.val();if($control.hasClass("vc_active"))return!1;this.$filterDropdown.find(".vc_active").removeClass("vc_active"),this.$filter.find(".vc_active").removeClass("vc_active"),this.$filter.find('[data-vc-grid-filter-value="'+filter+'"]').parent().addClass("vc_active"),$control.addClass("vc_active"),this.gridBuilder.filter(filter)},VcGrid.prototype.ajax=function(data,callback){_.isUndefined(data)&&(data={}),data=_.extend({action:"vc_get_vc_grid_data",vc_action:"vc_get_vc_grid_data",tag:this.settings.tag,data:this.settings,vc_post_id:this.$el.data("vcPostId"),_vcnonce:this.$el.data("vcPublicNonce")},data),$.ajax({type:"POST",dataType:"html",url:this.$el.data("vcRequest"),data:data}).done(callback)},$.fn.vcGrid=function(option){return this.each(function(){var $this=$(this),data=$this.data("vcGrid");data||$this.data("vcGrid",data=new VcGrid(this)),"string"==typeof option&&data[option]()})},$.fn.vcGrid.Constructor=VcGrid,$(document).ready(function(){$("[data-vc-grid-settings]").vcGrid()}),window.VcGrid=VcGrid,window.vcGridSettings=vcGridSettings}(window.jQuery);