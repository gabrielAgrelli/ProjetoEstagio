/*
 jQWidgets v3.9.0 (2015-Oct)
 Copyright (c) 2011-2015 jQWidgets.
 License: http://jqwidgets.com/license/
 */

(function(a){a.jqx.jqxWidget("jqxNavigationBar", "", {}); a.extend(a.jqx._jqxNavigationBar.prototype, {defineInstance:function(){var b = {width:"auto", height:"auto", expandAnimationDuration:250, collapseAnimationDuration:250, animationType:"slide", toggleMode:"click", showArrow:true, arrowPosition:"right", disabled:false, initContent:null, rtl:false, easing:"easeInOutSine", expandMode:"singleFitHeight", expandedIndexes:[], _expandModes:["singleFitHeight", "single", "multiple", "toggle", "none"], aria:{"aria-disabled":{name:"disabled", type:"boolean"}}, events:["expandingItem", "expandedItem", "collapsingItem", "collapsedItem"]}; a.extend(true, this, b); return b}, createInstance:function(b){this._isTouchDevice = a.jqx.mobile.isTouchDevice(); a.jqx.aria(this); this.render()}, val:function(b){if (arguments.length == 0 || typeof (b) == "object"){return this.expandedIndexes}if (typeof b == "string"){this.expandedIndexes.push(parseInt(b)); this._applyExpandedIndexes()} else{if (a.isArray(b)){this.expandedIndexes = b} else{this.expandedIndexes = new Array(); this.expandedIndexes.push(b)}this._applyExpandedIndexes()}return this.expandedIndexes}, expandAt:function(d){var g = this; if (this.expandMode == "single" || this.expandMode == "singleFitHeight" || this.expandMode == "toggle"){a.each(this.items, function(j, k){if (j != d){g.collapseAt(j)}})}var h = this.items[d]; if (h.disabled == false && h.expanded == false && h._expandChecker == 1){var g = this; h._expandChecker = 0; this._raiseEvent("0", {item:d}); h._header.removeClass(this.toThemeProperty("jqx-fill-state-normal")); h._header.addClass(this.toThemeProperty("jqx-fill-state-pressed")); h._header.addClass(this.toThemeProperty("jqx-expander-header-expanded")); h._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down")); h._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-hover")); h._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up-hover")); h._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected")); h._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top")); h._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up")); h._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up-selected")); h._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-bottom")); h._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-expanded")); if (this.heightFlag == false){this.host.css({"overflow-x":"hidden", "overflow-y":"hidden"})}this.eCFlag = 1; switch (this.animationType){case"slide":var f = h._content; var b = f.height(); var c = {}; c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "show"; var i = 0; var e = f.outerHeight(); if (a.jqx.browser.msie && a.jqx.browser.version < 9){var c = {}; c.height = c.paddingTop = c.paddingBottom = "show"}f.animate(c, {duration:this.expandAnimationDuration, easing:this.easing, step:function(j, k){k.now = Math.round(j); if (k.prop !== "height"){i += k.now} else{if (g._collapseContent){k.now = Math.round(e - g._collapseContent.outerHeight() - i); i = 0} else{k.now = Math.round(j)}}}, complete:function(){h.expanded = true; a.jqx.aria(h._header, "aria-expanded", true); a.jqx.aria(h._content, "aria-hidden", false); g._updateExpandedIndexes(); g._raiseEvent("1", {item:d}); g._checkHeight(); if (g.heightFlag == true){g.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}if (g.initContent && h._initialized == false){g.initContent(d); h._initialized = true}g.eCFlag = 0}}); break; case"fade":setTimeout(function(){h._content.fadeIn(this.expandAnimationDuration, function(){h.expanded = true; a.jqx.aria(h._header, "aria-expanded", true); a.jqx.aria(h._content, "aria-hidden", false); g._updateExpandedIndexes(); g._raiseEvent("1", {item:d}); g._checkHeight(); if (g.heightFlag == true){g.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}if (g.initContent && h._initialized == false){g.initContent(d); h._initialized = true}g.eCFlag = 0})}, this.collapseAnimationDuration); break; case"none":h._content.css("display", "inherit"); h.expanded = true; a.jqx.aria(h._header, "aria-expanded", true); a.jqx.aria(h._content, "aria-hidden", false); this._updateExpandedIndexes(); this._raiseEvent("1", {item:d}); this._checkHeight(); if (this.heightFlag == true){this.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}if (this.initContent && h._initialized == false){this.initContent(d); h._initialized = true}this.eCFlag = 0; break}}}, collapseAt:function(b){var f = this.items[b]; if (f.disabled == false && f.expanded == true && f._expandChecker == 0){var d = this; f._expandChecker = 1; this._raiseEvent("2", {item:b}); f._header.removeClass(this.toThemeProperty("jqx-fill-state-pressed")); f._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded")); f._header.addClass(this.toThemeProperty("jqx-fill-state-normal")); f._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up")); f._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up-selected")); f._arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected")); f._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-bottom")); f._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-expanded")); f._arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down")); f._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top")); if (this.heightFlag == false){this.host.css({"overflow-x":"hidden", "overflow-y":"hidden"})}this.eCFlag = 1; this._collapseContent = f._content; switch (this.animationType){case"slide":var e = {}; e.height = e.paddingTop = e.paddingBottom = e.borderTopWidth = e.borderBottomWidth = "hide"; if (a.jqx.browser.msie && a.jqx.browser.version < 9){var e = {}; e.height = e.paddingTop = e.paddingBottom = "hide"}var c = f._content; c.animate(e, {duration:this.collapseAnimationDuration, step:function(g, h){h.now = Math.round(g)}, easing:this.easing, complete:function(){f.expanded = false; c.hide(); a.jqx.aria(f._header, "aria-expanded", false); a.jqx.aria(f._content, "aria-hidden", true); d._updateExpandedIndexes(); d._raiseEvent("3", {item:b}); d._checkHeight(); if (d.heightFlag == true){d.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}d.eCFlag = 0; d._collapseContent = null}}); break; case"fade":f._content.fadeOut(this.collapseAnimationDuration, function(){f.expanded = false; a.jqx.aria(f._header, "aria-expanded", false); a.jqx.aria(f._content, "aria-hidden", true); d._updateExpandedIndexes(); d._raiseEvent("3", {item:b}); d._checkHeight(); if (d.heightFlag == true){d.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}d.eCFlag = 0}); break; case"none":f._content.css("display", "none"); f.expanded = false; a.jqx.aria(f._header, "aria-expanded", false); a.jqx.aria(f._content, "aria-hidden", true); this._updateExpandedIndexes(); this._raiseEvent("3", {item:b}); this._checkHeight(); if (this.heightFlag == true){this.host.css({"overflow-x":"hidden", "overflow-y":"auto"})}this.eCFlag = 0; break}}}, setHeaderContentAt:function(b, c){this.items[b]._header_text.html(c)}, getHeaderContentAt:function(b){return this.items[b]._header_text.html()}, setContentAt:function(b, c){this.items[b]._content.html(c); this._checkContent(b)}, getContentAt:function(b){return this.items[b]._content.html()}, showArrowAt:function(b){this.items[b]._arrow.css("display", "block")}, hideArrowAt:function(b){this.items[b]._arrow.css("display", "none")}, enable:function(){this.disabled = false; a.each(this.items, function(b, c){this.disabled = false}); this._enabledDisabledCheck(); this.refresh(); a.jqx.aria(this, "aria-disabled", false)}, disable:function(){this.disabled = true; a.each(this.items, function(b, c){this.disabled = true}); this._enabledDisabledCheck(); this.refresh(); a.jqx.aria(this, "aria-disabled", true)}, enableAt:function(b){this.items[b].disabled = false; this.refresh()}, disableAt:function(b){this.items[b].disabled = true; this.refresh()}, invalidate:function(){this.refresh()}, refresh:function(b){if (b == true){return}this._removeHandlers(); if (this.showArrow == true){a.each(this.items, function(c, e){var d = this; d._arrow.css("display", "block")})} else{a.each(this.items, function(c, e){var d = this; d._arrow.css("display", "none")})}this._updateExpandedIndexes(); this._setTheme(); this._setSize(); this._toggle(); this._keyBoard()}, render:function(){this.widgetID = this.element.id; var m = this; if (this._expandModes.indexOf(this.expandMode) == - 1){this.expandMode = "singleFitHeight"}a.jqx.utilities.resize(this.host, function(){m._setSize()}); this.host.attr("role", "tablist"); if (this.items){this._removeHandlers(); a.each(this.items, function(){this._header.removeClass(); this._header.attr("tabindex", null); this._content.attr("tabindex", null); this._header[0].className = ""; this._header_text.removeClass(); this._header_text[0].className = ""; this._header.css("margin-top", 0); this._header[0].innerHTML = this._header_text[0].innerHTML})}this.items = new Array(); var h = this.host.children().length; var n = "Invalid jqxNavigationBar structure. Please add an even number of child div elements that will represent each item's header and content."; try{if (h % 2 != 0){throw n}} catch (d){alert(d)}var e = "Invalid jqxNavigationBar structure. Please make sure all the children elements of the navigationbar are divs."; try{var c = this.host.children(); for (var l = 0; l < h; l++){if (c[l].tagName.toLowerCase() != "div"){throw e}}} catch (d){alert(d)}var o; for (var p = 0; p < h; p += 2){o = this.host.children("div:eq(" + p + ")"); o.wrap("<div></div>")}var l = 0; var f; for (var g = 0; g < h / 2; g++){f = l + 1; this.items[g] = new Object(); this.items[g]._header = this.host.children("div:eq(" + l + ")"); this.items[g]._header.attr("role", "tab"); this.items[g]._content = this.host.children("div:eq(" + f + ")"); this.items[g]._content.attr("role", "tabpanel"); l += 2}var b = this.expandedIndexes.length; a.each(this.items, function(i, j){this.expandedFlag = false; this.focusedH = false; this.focusedC = false}); if (this.items && this.items.length == 0){return}if (this.expandMode == "single" || this.expandMode == "singleFitHeight" || this.expandMode == "toggle" || this.expandMode == "none"){a.each(this.items, function(i, k){var j = this; j.expanded = false}); if (b != 0){this.items[this.expandedIndexes[0]].expanded = true} else{if (b == 0 && (this.expandMode == "single" || this.expandMode == "singleFitHeight")){this.items[0].expanded = true}}} else{if (this.expandMode == "multiple"){if (b != 0){a.each(this.items, function(j, r){var q = this; for (var k = 0; k < b; k++){if (m.expandedIndexes[k] == j){q.expanded = true; break} else{q.expanded = false}}})} else{a.each(this.items, function(i, k){var j = this; j.expanded = false})}} else{if (this.expandMode == "none"){a.each(this.items, function(i, k){var j = this; j.expanded = false})}}}this._enabledDisabledCheck(); a.each(this.items, function(i, k){var j = this; j._header_text = j._header.children("div:eq(0)"); if (!m.rtl){j._header_text.addClass(m.toThemeProperty("jqx-expander-header-content"))} else{j._header_text.addClass(m.toThemeProperty("jqx-expander-header-content-rtl"))}j._header.append("<div></div>"); j._arrow = j._header.children("div:eq(1)"); if (m.showArrow == true){j._arrow.css("display", "block")} else{j._arrow.css("display", "none")}}); a.each(this.items, function(i, k){var j = this; if (j.expanded == true){j._arrow.addClass(m.toThemeProperty("jqx-icon-arrow-up")); j._arrow.addClass(m.toThemeProperty("jqx-icon-arrow-up-selected")); j._arrow.addClass(m.toThemeProperty("jqx-expander-arrow-bottom")); j._arrow.addClass(m.toThemeProperty("jqx-expander-arrow-expanded")); if (m.initContent){setTimeout(function(){m.initContent(i)}, 10)}j._initialized = true; j._expandChecker = 0; a.jqx.aria(j._header, "aria-expanded", true); a.jqx.aria(j._content, "aria-hidden", false)} else{if (j.expanded == false){j._arrow.addClass(m.toThemeProperty("jqx-icon-arrow-down")); j._arrow.addClass(m.toThemeProperty("jqx-expander-arrow-top")); j._initialized = false; j._expandChecker = 1; j._content.css("display", "none"); a.jqx.aria(j._header, "aria-expanded", false); a.jqx.aria(j._content, "aria-hidden", true)}}}); this.tI = 0; a.each(this.items, function(i, k){var j = this; if (j._header.attr("tabindex") == undefined){m.tI++; j._header.attr("tabindex", m.tI)}if (j._content.attr("tabindex") == undefined){m.tI++; j._content.attr("tabindex", m.tI)}}); this._setTheme(); a.each(this.items, function(i, k){var j = this; m._checkContent(i)}); this._setSize(); this._toggle(); this._keyBoard()}, insert:function(c, f, d){var b = "<div>" + f + "</div><div>" + d + "</div>"; if (c != - 1){a(b).insertBefore(this.items[c]._header)} else{var e = this.items.length - 1; a(b).insertAfter(this.items[e]._content)}this.render()}, add:function(c, b){this.insert( - 1, c, b)}, update:function(b, d, c){this.setHeaderContentAt(b, d); this.setContentAt(b, c)}, remove:function(b){if (isNaN(b)){b = this.items.length - 1}if (!this.items[b]){return}this.items[b]._header.remove(); this.items[b]._content.remove(); this.items.splice(b, 1); var c = this.expandedIndexes.indexOf(b); if (c > - 1){this.expandedIndexes.splice(c, 1)}this.render()}, destroy:function(){this._removeHandlers(); this.host.remove()}, focus:function(){try{a.each(this.items, function(c, e){var d = this; if (d.disabled == false){d._header.focus(); return false}})} catch (b){}}, _applyExpandedIndexes:function(){var d = this; var c = this.expandedIndexes.length; for (var b = 0; b < c; b++){var e = d.expandedIndexes[b]; a.each(this.items, function(f, h){var g = this; if (f == e){g.expandedFlag = true; if (g.expanded == false){d.expandAt(f)}if (d.expandMode == "single" || d.expandMode == "singleFitHeight" || d.expandMode == "toggle" || d.expandMode == "none"){return false}}}); a.each(this.items, function(f, h){var g = this; if (f != e && g.expandedFlag == false){d.collapseAt(f)}})}a.each(this.items, function(f, g){this.expandedFlag = false})}, propertyChangedHandler:function(c, d, g, f){var e = c; var b = f; if (d == "disabled"){c._enabledDisabledCheck()} else{if (d == "expandedIndexes"){c._applyExpandedIndexes()} else{c.refresh()}}}, _raiseEvent:function(g, e){var c = this.events[g]; var f = new a.Event(c); f.owner = this; f.args = e; f.item = f.args.item; try{var b = this.host.trigger(f)} catch (d){}return b}, resize:function(c, b){this.width = c; this.height = b; this._setSize()}, _setSize:function(){var e = this; this.headersHeight = 0; var d = this.items && this.items.length > 0?parseInt(this.items[0]._header.css("padding-left")):0; var f = this.items && this.items.length > 0?parseInt(this.items[0]._header.css("padding-right")):0; var b = 2; var c = d + f + b; if (isNaN(c)){c = 12}if (this.width == "auto"){this.host.width(this.width)} else{if (this.width != null && this.width.toString().indexOf("%") != - 1){this.host.width(this.width)} else{this.host.width(parseInt(this.width) + c)}}this.host.height(this.height); a.each(this.items, function(g, j){var i = this; var h = e.arrowPosition; if (e.rtl){switch (h){case"left":h = "right"; break; case"right":h = "left"; break}}if (h == "right"){i._header_text.css({"float":"left", "margin-left":"0px"}); i._arrow.css({"float":"right", position:"relative"})} else{if (h == "left"){if (e.width == "auto"){i._header_text.css({"float":"left", "margin-left":"17px"}); i._arrow.css({"float":"left", position:"absolute"})} else{i._header_text.css({"float":"right", "margin-left":"0px"}); i._arrow.css({"float":"left", position:"relative"})}}}i._header.height("auto"); i._header_text.css("min-height", i._arrow.height()); e.headersHeight += i._header.outerHeight(); i._arrow.css("margin-top", i._header_text.height() / 2 - i._arrow.height() / 2)}); a.each(this.items, function(g, i){var h = this; if (e.height != "auto"){if (e.expandMode == "single" || e.expandMode == "toggle" || e.expandMode == "multiple"){e.host.css({"overflow-x":"hidden", "overflow-y":"auto"})} else{if (e.expandMode == "singleFitHeight"){var j = parseInt(h._content.css("padding-top")) + parseInt(h._content.css("padding-bottom")); if (e.height && e.height.toString().indexOf("%") >= 0){h._content.height(e.host.height() - e.headersHeight - j + 2)} else{h._content.height(e.host.height() - e.headersHeight - j)}}}}}); e._checkHeight()}, _toggle:function(){var b = this; if (this._isTouchDevice == false){switch (this.toggleMode){case"click":a.each(this.items, function(c, e){var d = this; if (d.disabled == false){b.addHandler(d._header, "click.navigationbar" + b.widgetID, function(){b.focusedH = true; b._animate(c)})}}); break; case"dblclick":a.each(this.items, function(c, e){var d = this; if (d.disabled == false){b.addHandler(d._header, "dblclick.navigationbar" + b.widgetID, function(){b.focusedH = true; b._animate(c)})}}); break; case"none":break}} else{if (this.toggleMode != "none"){a.each(this.items, function(c, e){var d = this; if (d.disabled == false){b.addHandler(d._header, a.jqx.mobile.getTouchEventName("touchstart") + "." + b.widgetID, function(){b._animate(c)})}})} else{return}}}, _animate:function(c, b){var d = this; this.eCFlag; var e = this.items[c]; if (this.expandMode != "none" && this.eCFlag != 1){if (this.items[c].expanded == true){if (this.expandMode == "multiple" || this.expandMode == "toggle"){this.collapseAt(c)}} else{this.expandAt(c)}if (!d._isTouchDevice){if (b != true){e._header.addClass(this.toThemeProperty("jqx-fill-state-hover")); e._header.addClass(this.toThemeProperty("jqx-expander-header-hover")); e._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover")); e._arrow.addClass(this.toThemeProperty("jqx-expander-arrow-down-hover"))} else{e._header.removeClass(this.toThemeProperty("jqx-fill-state-hover")); e._header.removeClass(this.toThemeProperty("jqx-expander-header-hover")); e._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover")); e._arrow.removeClass(this.toThemeProperty("jqx-expander-arrow-down-hover"))}}}}, _removeHandlers:function(){var b = this; this.removeHandler(this.host, "keydown.navigationbar" + this.widgetID); a.each(this.items, function(c, e){var d = this; b.removeHandler(d._header, "click.navigationbar" + b.widgetID); b.removeHandler(d._header, "dblclick.navigationbar" + b.widgetID); b.removeHandler(d._header, "mouseenter.navigationbar" + b.widgetID); b.removeHandler(d._header, "mouseleave.navigationbar" + b.widgetID); b.removeHandler(d._header, "focus.navigationbar" + b.widgetID); b.removeHandler(d._header, "blur.navigationbar" + b.widgetID); b.removeHandler(d._content, "focus.navigationbar" + b.widgetID); b.removeHandler(d._content, "blur.navigationbar" + b.widgetID); b.removeHandler(d._header_text, "focus.navigationbar" + b.widgetID); b.removeHandler(d._arrow, "focus.navigationbar" + b.widgetID)})}, _setTheme:function(){var b = this; this.host.addClass(this.toThemeProperty("jqx-reset")); this.host.addClass(this.toThemeProperty("jqx-widget")); if (this.rtl == true){this.host.addClass(this.toThemeProperty("jqx-rtl"))}a.each(this.items, function(c, e){var d = this; d._header.css("position", "relative"); d._content.css("position", "relative"); d._header.addClass(b.toThemeProperty("jqx-widget-header")); d._header.addClass(b.toThemeProperty("jqx-item")); d._content.addClass(b.toThemeProperty("jqx-widget-content")); if (d.disabled == false){d._header.removeClass(b.toThemeProperty("jqx-fill-state-disabled")); d._content.removeClass(b.toThemeProperty("jqx-fill-state-disabled")); if (d.expanded == true){d._header.addClass(b.toThemeProperty("jqx-fill-state-pressed")); d._header.addClass(b.toThemeProperty("jqx-expander-header-expanded"))} else{d._header.addClass(b.toThemeProperty("jqx-fill-state-normal")); d._header.removeClass(b.toThemeProperty("jqx-expander-header-expanded"))}if (!b._isTouchDevice){b.addHandler(d._header, "mouseenter.navigationbar" + b.widgetID, function(){if (d._expandChecker == 1){if (!d.focusedH){d._header.css("z-index", 5)}d._header.removeClass(b.toThemeProperty("jqx-fill-state-normal")); d._header.removeClass(b.toThemeProperty("jqx-fill-state-pressed")); d._header.addClass(b.toThemeProperty("jqx-fill-state-hover")); d._header.addClass(b.toThemeProperty("jqx-expander-header-hover")); d._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-top-hover")); d._arrow.addClass(b.toThemeProperty("jqx-expander-arrow-down-hover")); if (d.expanded){d._arrow.addClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))} else{d._arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))}}}); b.addHandler(d._header, "mouseleave.navigationbar" + b.widgetID, function(){if (!d.focusedH){d._header.css("z-index", 0)}d._header.removeClass(b.toThemeProperty("jqx-fill-state-hover")); d._header.removeClass(b.toThemeProperty("jqx-expander-header-hover")); d._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-top-hover")); d._arrow.removeClass(b.toThemeProperty("jqx-expander-arrow-down-hover")); if (d._expandChecker == 1){d._header.addClass(b.toThemeProperty("jqx-fill-state-normal"))} else{d._header.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}d._arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-hover")); d._arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))})}} else{d._header.addClass(b.toThemeProperty("jqx-fill-state-disabled")); d._content.addClass(b.toThemeProperty("jqx-fill-state-disabled"))}b.host.addClass(b.toThemeProperty("jqx-navigationbar")); d._header.addClass(b.toThemeProperty("jqx-expander-header")); d._content.addClass(b.toThemeProperty("jqx-expander-content")); d._content.addClass(b.toThemeProperty("jqx-expander-content-bottom")); if (c != 0){d._header.css("margin-top", - 1)}d._arrow.addClass(b.toThemeProperty("jqx-expander-arrow"))})}, _checkContent:function(b){var d = this.items[b]; var c = d._content; this._cntntEmpty = /^\s*$/.test(this.items[b]._content.html()); if (this._cntntEmpty == true){c.css("display", "none"); c.height(0); c.addClass(this.toThemeProperty("jqx-expander-content-empty"))} else{if (d.expanded){c.css("display", "block")}if (this.expandMode == "singleFitHeight"){var e = 1; if (b != 0){e = 2}c.height(this.host.height() - this.headersHeight + e)} else{c.height("auto")}c.removeClass(this.toThemeProperty("jqx-expander-content-empty"))}}, _checkHeight:function(){var f = this; this.totalHeight = 0; this.heightFlag; var e = this.items && this.items.length > 0?parseInt(this.items[0]._header.css("padding-left")):0; var g = this.items && this.items.length > 0?parseInt(this.items[0]._header.css("padding-right")):0; var b = 2; var c = e + g + b; if (isNaN(c)){c = 12}var d = 17; a.each(this.items, function(h, j){var i = this; f.totalHeight += (i.expanded?i._content.outerHeight():0) + i._header.outerHeight()}); if (this.width != "auto" && this.height != "auto" && this.expandMode != "singleFitHeight"){if (this.totalHeight > this.host.height()){this.host.width(this.width + c + d); this.heightFlag = true} else{this.host.width(this.width + c); this.heightFlag = false}}}, _enabledDisabledCheck:function(){var b = this; if (this.disabled == true){a.each(this.items, function(c, e){var d = this; d.disabled = true})} else{a.each(this.items, function(c, e){var d = this; d.disabled = false})}}, _updateExpandedIndexes:function(){var b = this; this.expandedIndexes = []; a.each(this.items, function(c, e){var d = this; if (d.expanded == true){b.expandedIndexes.push(c); if (b.expandMode == "single" || b.expandMode == "singleFitHeight" || b.expandMode == "toggle" || b.expandMode == "none"){return false}}})}, _keyBoard:function(){var b = this; this._focus(); this.addHandler(this.host, "keydown.navigationbar" + this.widgetID, function(c){var d = false; a.each(b.items, function(e, h){var g = this; var f = b.items.length; if ((g.focusedH == true || g.focusedC == true) && g.disabled == false){switch (c.keyCode){case 13:case 32:if (b.toggleMode != "none"){if (g.focusedH == true){b._animate(e, true)}d = true}break; case 37:if (e != 0){b.items[e - 1]._header.focus()} else{var f = b.items.length; b.items[f - 1]._header.focus()}d = true; break; case 38:if (c.ctrlKey == false){if (e != 0){b.items[e - 1]._header.focus()} else{var f = b.items.length; b.items[f - 1]._header.focus()}} else{if (g.focusedC == true){g._header.focus()}}d = true; break; case 39:if (e != f - 1){b.items[e + 1]._header.focus()} else{b.items[0]._header.focus()}d = true; break; case 40:if (c.ctrlKey == false){if (e != f - 1){b.items[e + 1]._header.focus()} else{b.items[0]._header.focus()}} else{if (g.expanded == true){g._content.focus()}}d = true; break; case 35:if (e != f - 1){b.items[f - 1]._header.focus()}d = true; break; case 36:if (e != 0){b.items[0]._header.focus()}d = true; break}return false}}); if (d && c.preventDefault){c.preventDefault()}return !d})}, _focus:function(){var b = this; if (this.disabled){return}a.each(this.items, function(c, e){var d = this; b.addHandler(d._header, "focus.navigationbar" + this.widgetID, function(){d.focusedH = true; a.jqx.aria(d._header, "aria-selected", true); d._header.addClass(b.toThemeProperty("jqx-fill-state-focus")); d._header.css("z-index", 10)}); b.addHandler(d._header, "blur.navigationbar" + this.widgetID, function(){d.focusedH = false; a.jqx.aria(d._header, "aria-selected", false); if (d._header.hasClass("jqx-expander-header-hover")){d._header.css("z-index", 5)} else{d._header.css("z-index", 0)}d._header.removeClass(b.toThemeProperty("jqx-fill-state-focus"))}); b.addHandler(d._header_text, "focus.navigationbar" + this.widgetID, function(){d._header.focus()}); b.addHandler(d._arrow, "focus.navigationbar" + this.widgetID, function(){d._header.focus()}); b.addHandler(d._content, "focus.navigationbar" + this.widgetID, function(){d.focusedC = true; d._content.addClass(b.toThemeProperty("jqx-fill-state-focus"))}); b.addHandler(d._content, "blur.navigationbar" + this.widgetID, function(){d.focusedC = false; d._content.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})})}})})(jqxBaseFramework);