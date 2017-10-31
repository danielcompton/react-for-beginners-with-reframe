// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22737){
var map__22738 = p__22737;
var map__22738__$1 = ((((!((map__22738 == null)))?((((map__22738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22738):map__22738);
var m = map__22738__$1;
var n = cljs.core.get.call(null,map__22738__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22740_22762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22741_22763 = null;
var count__22742_22764 = (0);
var i__22743_22765 = (0);
while(true){
if((i__22743_22765 < count__22742_22764)){
var f_22766 = cljs.core._nth.call(null,chunk__22741_22763,i__22743_22765);
cljs.core.println.call(null,"  ",f_22766);

var G__22767 = seq__22740_22762;
var G__22768 = chunk__22741_22763;
var G__22769 = count__22742_22764;
var G__22770 = (i__22743_22765 + (1));
seq__22740_22762 = G__22767;
chunk__22741_22763 = G__22768;
count__22742_22764 = G__22769;
i__22743_22765 = G__22770;
continue;
} else {
var temp__4657__auto___22771 = cljs.core.seq.call(null,seq__22740_22762);
if(temp__4657__auto___22771){
var seq__22740_22772__$1 = temp__4657__auto___22771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22740_22772__$1)){
var c__20020__auto___22773 = cljs.core.chunk_first.call(null,seq__22740_22772__$1);
var G__22774 = cljs.core.chunk_rest.call(null,seq__22740_22772__$1);
var G__22775 = c__20020__auto___22773;
var G__22776 = cljs.core.count.call(null,c__20020__auto___22773);
var G__22777 = (0);
seq__22740_22762 = G__22774;
chunk__22741_22763 = G__22775;
count__22742_22764 = G__22776;
i__22743_22765 = G__22777;
continue;
} else {
var f_22778 = cljs.core.first.call(null,seq__22740_22772__$1);
cljs.core.println.call(null,"  ",f_22778);

var G__22779 = cljs.core.next.call(null,seq__22740_22772__$1);
var G__22780 = null;
var G__22781 = (0);
var G__22782 = (0);
seq__22740_22762 = G__22779;
chunk__22741_22763 = G__22780;
count__22742_22764 = G__22781;
i__22743_22765 = G__22782;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22783 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19181__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19181__auto__)){
return or__19181__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22783);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22783)))?cljs.core.second.call(null,arglists_22783):arglists_22783));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22744_22784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22745_22785 = null;
var count__22746_22786 = (0);
var i__22747_22787 = (0);
while(true){
if((i__22747_22787 < count__22746_22786)){
var vec__22748_22788 = cljs.core._nth.call(null,chunk__22745_22785,i__22747_22787);
var name_22789 = cljs.core.nth.call(null,vec__22748_22788,(0),null);
var map__22751_22790 = cljs.core.nth.call(null,vec__22748_22788,(1),null);
var map__22751_22791__$1 = ((((!((map__22751_22790 == null)))?((((map__22751_22790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22751_22790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22751_22790):map__22751_22790);
var doc_22792 = cljs.core.get.call(null,map__22751_22791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22793 = cljs.core.get.call(null,map__22751_22791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22789);

cljs.core.println.call(null," ",arglists_22793);

if(cljs.core.truth_(doc_22792)){
cljs.core.println.call(null," ",doc_22792);
} else {
}

var G__22794 = seq__22744_22784;
var G__22795 = chunk__22745_22785;
var G__22796 = count__22746_22786;
var G__22797 = (i__22747_22787 + (1));
seq__22744_22784 = G__22794;
chunk__22745_22785 = G__22795;
count__22746_22786 = G__22796;
i__22747_22787 = G__22797;
continue;
} else {
var temp__4657__auto___22798 = cljs.core.seq.call(null,seq__22744_22784);
if(temp__4657__auto___22798){
var seq__22744_22799__$1 = temp__4657__auto___22798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22744_22799__$1)){
var c__20020__auto___22800 = cljs.core.chunk_first.call(null,seq__22744_22799__$1);
var G__22801 = cljs.core.chunk_rest.call(null,seq__22744_22799__$1);
var G__22802 = c__20020__auto___22800;
var G__22803 = cljs.core.count.call(null,c__20020__auto___22800);
var G__22804 = (0);
seq__22744_22784 = G__22801;
chunk__22745_22785 = G__22802;
count__22746_22786 = G__22803;
i__22747_22787 = G__22804;
continue;
} else {
var vec__22753_22805 = cljs.core.first.call(null,seq__22744_22799__$1);
var name_22806 = cljs.core.nth.call(null,vec__22753_22805,(0),null);
var map__22756_22807 = cljs.core.nth.call(null,vec__22753_22805,(1),null);
var map__22756_22808__$1 = ((((!((map__22756_22807 == null)))?((((map__22756_22807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22756_22807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22756_22807):map__22756_22807);
var doc_22809 = cljs.core.get.call(null,map__22756_22808__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22810 = cljs.core.get.call(null,map__22756_22808__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22806);

cljs.core.println.call(null," ",arglists_22810);

if(cljs.core.truth_(doc_22809)){
cljs.core.println.call(null," ",doc_22809);
} else {
}

var G__22811 = cljs.core.next.call(null,seq__22744_22799__$1);
var G__22812 = null;
var G__22813 = (0);
var G__22814 = (0);
seq__22744_22784 = G__22811;
chunk__22745_22785 = G__22812;
count__22746_22786 = G__22813;
i__22747_22787 = G__22814;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__22758 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22759 = null;
var count__22760 = (0);
var i__22761 = (0);
while(true){
if((i__22761 < count__22760)){
var role = cljs.core._nth.call(null,chunk__22759,i__22761);
var temp__4657__auto___22815__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22815__$1)){
var spec_22816 = temp__4657__auto___22815__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22816));
} else {
}

var G__22817 = seq__22758;
var G__22818 = chunk__22759;
var G__22819 = count__22760;
var G__22820 = (i__22761 + (1));
seq__22758 = G__22817;
chunk__22759 = G__22818;
count__22760 = G__22819;
i__22761 = G__22820;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__22758);
if(temp__4657__auto____$1){
var seq__22758__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22758__$1)){
var c__20020__auto__ = cljs.core.chunk_first.call(null,seq__22758__$1);
var G__22821 = cljs.core.chunk_rest.call(null,seq__22758__$1);
var G__22822 = c__20020__auto__;
var G__22823 = cljs.core.count.call(null,c__20020__auto__);
var G__22824 = (0);
seq__22758 = G__22821;
chunk__22759 = G__22822;
count__22760 = G__22823;
i__22761 = G__22824;
continue;
} else {
var role = cljs.core.first.call(null,seq__22758__$1);
var temp__4657__auto___22825__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22825__$2)){
var spec_22826 = temp__4657__auto___22825__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22826));
} else {
}

var G__22827 = cljs.core.next.call(null,seq__22758__$1);
var G__22828 = null;
var G__22829 = (0);
var G__22830 = (0);
seq__22758 = G__22827;
chunk__22759 = G__22828;
count__22760 = G__22829;
i__22761 = G__22830;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
