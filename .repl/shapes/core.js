// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.core');
goog.require('cljs.core');
goog.require('shapes.proportional');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
shapes.core.square = (function square(x){
return (x * x);
});
shapes.core.sqrt = (function sqrt(x){
return Math.sqrt.call(null,x);
});
shapes.core.abs = (function abs(x){
return Math.abs.call(null,x);
});
/**
* @param {...*} var_args
*/
shapes.core.avg = (function() { 
var avg__delegate = function (xs){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,xs) / cljs.core.count.call(null,xs));
};
var avg = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__24222__i = 0, G__24222__a = new Array(arguments.length -  0);
while (G__24222__i < G__24222__a.length) {G__24222__a[G__24222__i] = arguments[G__24222__i + 0]; ++G__24222__i;}
  xs = new cljs.core.IndexedSeq(G__24222__a,0);
} 
return avg__delegate.call(this,xs);};
avg.cljs$lang$maxFixedArity = 0;
avg.cljs$lang$applyTo = (function (arglist__24223){
var xs = cljs.core.seq(arglist__24223);
return avg__delegate(xs);
});
avg.cljs$core$IFn$_invoke$arity$variadic = avg__delegate;
return avg;
})()
;
shapes.core.rand_float = (function() {
var rand_float = null;
var rand_float__2 = (function (min_x,max_x){
return rand_float.call(null,min_x,max_x,0.1);
});
var rand_float__3 = (function (min_x,max_x,step){
return cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_x,max_x,step));
});
rand_float = function(min_x,max_x,step){
switch(arguments.length){
case 2:
return rand_float__2.call(this,min_x,max_x);
case 3:
return rand_float__3.call(this,min_x,max_x,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand_float.cljs$core$IFn$_invoke$arity$2 = rand_float__2;
rand_float.cljs$core$IFn$_invoke$arity$3 = rand_float__3;
return rand_float;
})()
;
shapes.core.x_on_ellipse = (function x_on_ellipse(y,cy,a,b){
return (a * shapes.core.sqrt.call(null,shapes.core.abs.call(null,((1) - shapes.core.square.call(null,((cy - y) / b))))));
});
shapes.core.y_on_ellipse = (function y_on_ellipse(x,cx,a,b){
return (b * shapes.core.sqrt.call(null,shapes.core.abs.call(null,((1) - shapes.core.square.call(null,((cx - x) / a))))));
});
shapes.core.ys_within_ellipse = (function ys_within_ellipse(x,cx,a,b){
var max_y = shapes.core.y_on_ellipse.call(null,x,cx,a,b);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_y),new cljs.core.Keyword(null,"max","max",61366548),max_y], null);
});
/**
* Takes the radius of a circle with origin (0, 0).
* Returns a number w, where (w, w) is on the circumference of the circle.
*/
shapes.core.xy_on_pupil = (function xy_on_pupil(pupil_r){
return shapes.core.sqrt.call(null,(shapes.core.square.call(null,pupil_r) / (2)));
});
shapes.core.pupils = (function pupils(p__24224,avg_QMARK_){
var map__24226 = p__24224;
var map__24226__$1 = ((cljs.core.seq_QMARK_.call(null,map__24226))?cljs.core.apply.call(null,cljs.core.hash_map,map__24226):map__24226);
var measures = map__24226__$1;
var eye_ry = cljs.core.get.call(null,map__24226__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__24226__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__24226__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__24226__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__24226__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var r_max = (function (){var x__11265__auto__ = (function (){var x__11265__auto__ = eye_rx;
var y__11266__auto__ = eye_ry;
return ((x__11265__auto__ < y__11266__auto__) ? x__11265__auto__ : y__11266__auto__);
})();
var y__11266__auto__ = ((function (){var x__11258__auto__ = eye_rx;
var y__11259__auto__ = eye_ry;
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})() - ((function (){var x__11258__auto__ = eye_rx;
var y__11259__auto__ = eye_ry;
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})() / (3)));
return ((x__11265__auto__ < y__11266__auto__) ? x__11265__auto__ : y__11266__auto__);
})();
var r_min = (5);
var pupil_r = (cljs.core.truth_(avg_QMARK_)?((r_min + r_max) / (2)):shapes.core.rand_float.call(null,r_min,r_max));
var pupil_c_measures = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(eye_rx - pupil_r),new cljs.core.Keyword(null,"ry","ry",-334598563),(eye_ry - pupil_r)], null);
var pupil_cx_offset = shapes.core.rand_float.call(null,(- (eye_rx - pupil_r)),(eye_rx - pupil_r));
var pupil_cxa = (cljs.core.truth_(avg_QMARK_)?eye_cxa:(eye_cxa + pupil_cx_offset));
var pupil_cxb = (cljs.core.truth_(avg_QMARK_)?eye_cxb:(eye_cxb + pupil_cx_offset));
var pupil_cy_limits = shapes.core.ys_within_ellipse.call(null,pupil_cx_offset,(0),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(avg_QMARK_)?eye_cy:(((new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) <= new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)))?(eye_cy + new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)):(eye_cy + shapes.core.rand_float.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)))
));
var highlight_r = (cljs.core.truth_(avg_QMARK_)?(pupil_r / shapes.core.avg.call(null,(2),(6))):(pupil_r / shapes.core.rand_float.call(null,(2),(6))));
var highlight_offset = shapes.core.xy_on_pupil.call(null,(pupil_r - highlight_r));
var highlight_cxa = (pupil_cxa + highlight_offset);
var highlight_cxb = (pupil_cxb + highlight_offset);
var highlight_cy = (pupil_cy - highlight_offset);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.core.eyes = (function eyes(p__24227,avg_QMARK_){
var map__24229 = p__24227;
var map__24229__$1 = ((cljs.core.seq_QMARK_.call(null,map__24229))?cljs.core.apply.call(null,cljs.core.hash_map,map__24229):map__24229);
var measures = map__24229__$1;
var head_ry = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var max_cx_off = ((head_rx / (3)) * (2));
var min_cx_off = (head_rx / (6));
var eye_cx_offset = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,max_cx_off,min_cx_off):shapes.core.rand_float.call(null,min_cx_off,max_cx_off));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var min_cy = (head_cy - (0.4 * head_ry));
var max_cy = (head_cy + (head_height / (6)));
var eye_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_cy,max_cy):shapes.core.rand_float.call(null,min_cy,max_cy));
var x_intersect = (head_cx - shapes.core.x_on_ellipse.call(null,eye_cy,head_cy,head_rx,head_ry));
var x_intersect_off = (eye_cxa - x_intersect);
var rx_max = (function (){var x__11265__auto__ = (head_cx - eye_cxa);
var y__11266__auto__ = (x_intersect_off + (x_intersect_off / (4)));
return ((x__11265__auto__ < y__11266__auto__) ? x__11265__auto__ : y__11266__auto__);
})();
var rx_min = (head_width / (15));
var eye_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,rx_max,rx_min):shapes.core.rand_float.call(null,rx_min,rx_max));
var horizontal_a = eye_cy;
var head_top = (head_cy - head_ry);
var head_bottom = (head_cy + head_ry);
var above_a = (eye_cy - head_top);
var below_a = (head_bottom - eye_cy);
var y_max = (horizontal_a + (below_a / (2)));
var ry_max = (y_max - eye_cy);
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,ry_max,ry_min):shapes.core.rand_float.call(null,ry_min,ry_max));
var eye_map = cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929),new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673),new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[eye_cxb,eye_cy,eye_cxa,horizontal_a,eye_cxa,eye_rx,(eye_cy + eye_ry),eye_cxb,eye_ry]));
return cljs.core.merge.call(null,eye_map,shapes.core.pupils.call(null,eye_map,avg_QMARK_));
});
shapes.core.draw_eyes = (function draw_eyes(p__24230){
var map__24232 = p__24230;
var map__24232__$1 = ((cljs.core.seq_QMARK_.call(null,map__24232))?cljs.core.apply.call(null,cljs.core.hash_map,map__24232):map__24232);
var eye_ry = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"id": "eyes"},React.createElement("defs",null,React.createElement("clippath",{"id": "eye-a"},React.createElement("ellipse",{"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry})),React.createElement("clippath",{"id": "eye-b"},React.createElement("ellipse",{"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}))),React.createElement("ellipse",{"id": "eye-a", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-a", "style": {"clipPath": "url(#eye-a)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})),React.createElement("ellipse",{"id": "eye-b", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-b", "style": {"clipPath": "url(#eye-b)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})));
});
shapes.core.nose = (function nose(p__24233,avg_QMARK_){
var map__24235 = p__24233;
var map__24235__$1 = ((cljs.core.seq_QMARK_.call(null,map__24235))?cljs.core.apply.call(null,cljs.core.hash_map,map__24235):map__24235);
var measures = map__24235__$1;
var vertical_b = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_b = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var head_ry = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_cy = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var nose_cx = head_cx;
var a_to_b = (vertical_b - vertical_a);
var max_rx = (a_to_b / (4));
var min_rx = (a_to_b / (12));
var nose_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,max_rx,min_rx):shapes.core.rand_float.call(null,min_rx,max_rx));
var max_ry = nose_rx;
var min_ry = (head_ry / (20));
var nose_ry = shapes.core.avg.call(null,min_ry,max_ry)
;
var min_cy = (horizontal_b + (1.5 * nose_ry));
var below_b = ((head_cy + head_ry) - horizontal_b);
var max_cy = (((head_cy + head_ry) - (below_b / (2))) - nose_ry);
var nose_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_cy,max_cy):(((max_cy < min_cy))?max_cy:shapes.core.rand_float.call(null,min_cy,max_cy)
));
var min_bridge = nose_rx;
var max_bridge = (nose_rx + (nose_rx / 1.5));
var clip_bridge = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_bridge,max_bridge):shapes.core.rand_float.call(null,min_bridge,max_bridge,0.05));
var clip_width = ((4) * nose_rx);
var clip_height = ((4) * nose_ry);
var clip_x_a = ((head_cx - (clip_bridge / (2))) - clip_width);
var clip_x_b = (head_cx + (clip_bridge / (2)));
var clip_y_ab = (nose_cy - (clip_height / (2)));
var clip_x_c = (nose_cx - ((2) * nose_rx));
var clip_y_c = ((nose_cy + (1)) - shapes.core.y_on_ellipse.call(null,(nose_cx + (clip_bridge / (2))),nose_cx,nose_rx,nose_ry));
var shadow_clip_y = (clip_y_c + (1));
return cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592),new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303),new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138),new cljs.core.Keyword(null,"nose-shadow-clip-y","nose-shadow-clip-y",-1293866494),new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635),new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034),new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703),new cljs.core.Keyword(null,"a-to-b","a-to-b",504354032),new cljs.core.Keyword(null,"nose-clip-yab","nose-clip-yab",1476607987),new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324),new cljs.core.Keyword(null,"nose-clip-xc","nose-clip-xc",-1863115051),new cljs.core.Keyword(null,"nose-clip-xb","nose-clip-xb",434604823),new cljs.core.Keyword(null,"nose-clip-yc","nose-clip-yc",-340569830),new cljs.core.Keyword(null,"nose-clip-xa","nose-clip-xa",-1415311041)],[nose_cx,nose_rx,nose_cy,shadow_clip_y,clip_width,nose_ry,((nose_cy + nose_ry) + (6)),a_to_b,clip_y_ab,clip_height,clip_x_c,clip_x_b,clip_y_c,clip_x_a]));
});
shapes.core.draw_nose = (function draw_nose(p__24236){
var map__24238 = p__24236;
var map__24238__$1 = ((cljs.core.seq_QMARK_.call(null,map__24238))?cljs.core.apply.call(null,cljs.core.hash_map,map__24238):map__24238);
var nose_clip_yc = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-yc","nose-clip-yc",-340569830));
var nose_clip_xa = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-xa","nose-clip-xa",-1415311041));
var nose_cx = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592));
var nose_rx = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303));
var nose_shadow_clip_y = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-shadow-clip-y","nose-shadow-clip-y",-1293866494));
var nose_cy = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var nose_clip_width = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635));
var nose_ry = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034));
var nose_clip_yab = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-yab","nose-clip-yab",1476607987));
var nose_clip_height = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324));
var nose_clip_xc = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-xc","nose-clip-xc",-1863115051));
var nose_clip_xb = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"nose-clip-xb","nose-clip-xb",434604823));
return React.createElement("g",{"id": "nose"},React.createElement("defs",null,React.createElement("clippath",{"id": "nose-bridge"},React.createElement("rect",{"x": nose_clip_xa, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height}),React.createElement("rect",{"x": nose_clip_xb, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height}),React.createElement("rect",{"x": nose_clip_xc, "y": nose_clip_yc, "width": nose_clip_width, "height": nose_clip_height})),React.createElement("clippath",{"id": "nose-shadow"},React.createElement("rect",{"x": nose_clip_xc, "y": nose_shadow_clip_y, "width": nose_clip_width, "height": ((3) * nose_clip_height)}))),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (6)), "rx": nose_rx, "ry": nose_ry, "fill": "grey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (4)), "rx": nose_rx, "ry": nose_ry, "fill": "darkgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (2)), "rx": nose_rx, "ry": nose_ry, "fill": "lightgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"cx": nose_cx, "cy": nose_cy, "rx": nose_rx, "ry": nose_ry, "fill": "white", "stroke": "transparent", "style": {"clipPath": "url(#nose-bridge)"}}));
});
shapes.core.mouth = (function mouth(p__24239,avg_QMARK_){
var map__24241 = p__24239;
var map__24241__$1 = ((cljs.core.seq_QMARK_.call(null,map__24241))?cljs.core.apply.call(null,cljs.core.hash_map,map__24241):map__24241);
var measures = map__24241__$1;
var a_to_b = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"a-to-b","a-to-b",504354032));
var horizontal_c = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var head_ry = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var mouth_cx = head_cx;
var below_c = ((head_cy + head_ry) - horizontal_c);
var min_ry = (head_ry - ((5) * (below_c / (6))));
var max_ry = (head_ry - (below_c / (4)));
var mouth_ry = min_ry;
var min_cy = (((head_cy + head_ry) - mouth_ry) - ((3) * (below_c / (4))));
var max_cy = (((head_cy + head_ry) - mouth_ry) - (below_c / (4)));
var mouth_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_cy,max_cy):shapes.core.rand_float.call(null,min_cy,max_cy));
var max_rx = (1.5 * a_to_b);
var min_rx = a_to_b;
var mouth_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_rx,max_rx):shapes.core.rand_float.call(null,min_rx,max_rx));
var min_clip_y = (function (){var x__11258__auto__ = (horizontal_c + (1));
var y__11259__auto__ = (mouth_cy + (mouth_ry / (2)));
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})();
var max_clip_y = (function (){var x__11258__auto__ = (horizontal_c + (1));
var y__11259__auto__ = (mouth_cy + ((9) * (mouth_ry / (10))));
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})();
var mouth_clip_y = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_clip_y,max_clip_y):((cljs.core._EQ_.call(null,min_clip_y,max_clip_y))?max_clip_y:shapes.core.rand_float.call(null,min_clip_y,max_clip_y)
));
var max_x_off = (shapes.core.x_on_ellipse.call(null,(mouth_cy + mouth_ry),head_cy,head_rx,head_ry) - (a_to_b / (6)));
var min_x_off = (a_to_b / (6));
var clip_x_off = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_x_off,max_x_off):(((max_x_off < min_x_off))?max_x_off:shapes.core.rand_float.call(null,min_x_off,max_x_off)
));
var mouth_clip_x = (head_cx - clip_x_off);
var mouth_clip_width = ((2) * clip_x_off);
var mouth_clip_height = head_ry;
return cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686),new cljs.core.Keyword(null,"below-c","below-c",-1689698386),new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240),new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617),new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516),new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801),new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800),new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005),new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953)],[mouth_cy,below_c,mouth_clip_x,mouth_clip_height,mouth_clip_y,mouth_ry,mouth_clip_width,mouth_rx,mouth_cx]));
});
shapes.core.draw_mouth = (function draw_mouth(p__24242){
var map__24244 = p__24242;
var map__24244__$1 = ((cljs.core.seq_QMARK_.call(null,map__24244))?cljs.core.apply.call(null,cljs.core.hash_map,map__24244):map__24244);
var measures = map__24244__$1;
var mouth_clip_height = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617));
var mouth_clip_width = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800));
var mouth_clip_y = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516));
var mouth_clip_x = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240));
var mouth_ry = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801));
var mouth_rx = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005));
var mouth_cy = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686));
var mouth_cx = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953));
return React.createElement("g",{"className": "mouth"},React.createElement("defs",null,React.createElement("clippath",{"id": "mouth-clip"},React.createElement("rect",{"x": mouth_clip_x, "y": mouth_clip_y, "width": mouth_clip_width, "height": mouth_clip_height}))),React.createElement("ellipse",{"className": "mouth", "cx": mouth_cx, "cy": mouth_cy, "rx": mouth_rx, "ry": mouth_ry, "fill": "transparent", "style": {"clipPath": "url(#mouth-clip)"}}));
});
shapes.core.head = (function head(p__24245,avg_QMARK_){
var map__24247 = p__24245;
var map__24247__$1 = ((cljs.core.seq_QMARK_.call(null,map__24247))?cljs.core.apply.call(null,cljs.core.hash_map,map__24247):map__24247);
var height = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});
shapes.core.basic_measurements = (function basic_measurements(avg_QMARK_){
var w = window.innerWidth;
var h = window.innerHeight;
var m = (function (){var x__11265__auto__ = w;
var y__11266__auto__ = h;
return ((x__11265__auto__ < y__11266__auto__) ? x__11265__auto__ : y__11266__auto__);
})();
var max_dimension = (function (){var x__11258__auto__ = (75);
var y__11259__auto__ = (m - (m / (5)));
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})();
var min_dimension = (function (){var x__11258__auto__ = (75);
var y__11259__auto__ = (m / (2));
return ((x__11258__auto__ > y__11259__auto__) ? x__11258__auto__ : y__11259__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(w / (2)),new cljs.core.Keyword(null,"cy","cy",755331060),(h / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension))], null);
});
/**
* @param {...*} var_args
*/
shapes.core.face = (function() { 
var face__delegate = function (avg_QMARK_,p__24248){
var map__24250 = p__24248;
var map__24250__$1 = ((cljs.core.seq_QMARK_.call(null,map__24250))?cljs.core.apply.call(null,cljs.core.hash_map,map__24250):map__24250);
var proportional_QMARK_ = cljs.core.get.call(null,map__24250__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
} else {
return shapes.core.mouth.call(null,shapes.core.nose.call(null,shapes.core.eyes.call(null,shapes.core.head.call(null,shapes.core.basic_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
}
};
var face = function (avg_QMARK_,var_args){
var p__24248 = null;
if (arguments.length > 1) {
var G__24251__i = 0, G__24251__a = new Array(arguments.length -  1);
while (G__24251__i < G__24251__a.length) {G__24251__a[G__24251__i] = arguments[G__24251__i + 1]; ++G__24251__i;}
  p__24248 = new cljs.core.IndexedSeq(G__24251__a,0);
} 
return face__delegate.call(this,avg_QMARK_,p__24248);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__24252){
var avg_QMARK_ = cljs.core.first(arglist__24252);
var p__24248 = cljs.core.rest(arglist__24252);
return face__delegate(avg_QMARK_,p__24248);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.core.draw_face = (function draw_face(p__24253){
var map__24255 = p__24253;
var map__24255__$1 = ((cljs.core.seq_QMARK_.call(null,map__24255))?cljs.core.apply.call(null,cljs.core.hash_map,map__24255):map__24255);
var measures = map__24255__$1;
var head_ry = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return React.createElement("g",{"className": "face", "fill": "white", "stroke": "grey", "strokeWidth": (3)},React.createElement("ellipse",{"cx": head_cx, "cy": head_cy, "rx": head_rx, "ry": head_ry}),sablono.interpreter.interpret.call(null,shapes.core.draw_eyes.call(null,measures)),sablono.interpreter.interpret.call(null,shapes.core.draw_nose.call(null,measures)),sablono.interpreter.interpret.call(null,shapes.core.draw_mouth.call(null,measures)));
});
