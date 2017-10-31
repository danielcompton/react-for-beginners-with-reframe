// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__19806__auto__,writer__19807__auto__,opt__19808__auto__){
return cljs.core._write.call(null,writer__19807__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23757 = arguments.length;
var i__20351__auto___23758 = (0);
while(true){
if((i__20351__auto___23758 < len__20350__auto___23757)){
args__20357__auto__.push((arguments[i__20351__auto___23758]));

var G__23759 = (i__20351__auto___23758 + (1));
i__20351__auto___23758 = G__23759;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq23756){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23756));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23761 = arguments.length;
var i__20351__auto___23762 = (0);
while(true){
if((i__20351__auto___23762 < len__20350__auto___23761)){
args__20357__auto__.push((arguments[i__20351__auto___23762]));

var G__23763 = (i__20351__auto___23762 + (1));
i__20351__auto___23762 = G__23763;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq23760){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23760));
});

var g_QMARK__23764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_23765 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23764){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__23764))
,null));
var mkg_23766 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23764,g_23765){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__23764,g_23765))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__23764,g_23765,mkg_23766){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23764).call(null,x);
});})(g_QMARK__23764,g_23765,mkg_23766))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__23764,g_23765,mkg_23766){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_23766).call(null,gfn);
});})(g_QMARK__23764,g_23765,mkg_23766))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__23764,g_23765,mkg_23766){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_23765).call(null,generator);
});})(g_QMARK__23764,g_23765,mkg_23766))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__20449__auto___23786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__20449__auto___23786){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23787 = arguments.length;
var i__20351__auto___23788 = (0);
while(true){
if((i__20351__auto___23788 < len__20350__auto___23787)){
args__20357__auto__.push((arguments[i__20351__auto___23788]));

var G__23789 = (i__20351__auto___23788 + (1));
i__20351__auto___23788 = G__23789;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23786))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23786){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23786),args);
});})(g__20449__auto___23786))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__20449__auto___23786){
return (function (seq23767){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23767));
});})(g__20449__auto___23786))
;


var g__20449__auto___23790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__20449__auto___23790){
return (function cljs$spec$gen$alpha$list(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23791 = arguments.length;
var i__20351__auto___23792 = (0);
while(true){
if((i__20351__auto___23792 < len__20350__auto___23791)){
args__20357__auto__.push((arguments[i__20351__auto___23792]));

var G__23793 = (i__20351__auto___23792 + (1));
i__20351__auto___23792 = G__23793;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23790))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23790){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23790),args);
});})(g__20449__auto___23790))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__20449__auto___23790){
return (function (seq23768){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23768));
});})(g__20449__auto___23790))
;


var g__20449__auto___23794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__20449__auto___23794){
return (function cljs$spec$gen$alpha$map(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23795 = arguments.length;
var i__20351__auto___23796 = (0);
while(true){
if((i__20351__auto___23796 < len__20350__auto___23795)){
args__20357__auto__.push((arguments[i__20351__auto___23796]));

var G__23797 = (i__20351__auto___23796 + (1));
i__20351__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23794))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23794){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23794),args);
});})(g__20449__auto___23794))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__20449__auto___23794){
return (function (seq23769){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23769));
});})(g__20449__auto___23794))
;


var g__20449__auto___23798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__20449__auto___23798){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23799 = arguments.length;
var i__20351__auto___23800 = (0);
while(true){
if((i__20351__auto___23800 < len__20350__auto___23799)){
args__20357__auto__.push((arguments[i__20351__auto___23800]));

var G__23801 = (i__20351__auto___23800 + (1));
i__20351__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23798))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23798),args);
});})(g__20449__auto___23798))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__20449__auto___23798){
return (function (seq23770){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23770));
});})(g__20449__auto___23798))
;


var g__20449__auto___23802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__20449__auto___23802){
return (function cljs$spec$gen$alpha$set(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23803 = arguments.length;
var i__20351__auto___23804 = (0);
while(true){
if((i__20351__auto___23804 < len__20350__auto___23803)){
args__20357__auto__.push((arguments[i__20351__auto___23804]));

var G__23805 = (i__20351__auto___23804 + (1));
i__20351__auto___23804 = G__23805;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23802))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23802),args);
});})(g__20449__auto___23802))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__20449__auto___23802){
return (function (seq23771){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23771));
});})(g__20449__auto___23802))
;


var g__20449__auto___23806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__20449__auto___23806){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23807 = arguments.length;
var i__20351__auto___23808 = (0);
while(true){
if((i__20351__auto___23808 < len__20350__auto___23807)){
args__20357__auto__.push((arguments[i__20351__auto___23808]));

var G__23809 = (i__20351__auto___23808 + (1));
i__20351__auto___23808 = G__23809;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23806))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23806),args);
});})(g__20449__auto___23806))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__20449__auto___23806){
return (function (seq23772){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23772));
});})(g__20449__auto___23806))
;


var g__20449__auto___23810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__20449__auto___23810){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23811 = arguments.length;
var i__20351__auto___23812 = (0);
while(true){
if((i__20351__auto___23812 < len__20350__auto___23811)){
args__20357__auto__.push((arguments[i__20351__auto___23812]));

var G__23813 = (i__20351__auto___23812 + (1));
i__20351__auto___23812 = G__23813;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23810))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23810),args);
});})(g__20449__auto___23810))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__20449__auto___23810){
return (function (seq23773){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23773));
});})(g__20449__auto___23810))
;


var g__20449__auto___23814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__20449__auto___23814){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23815 = arguments.length;
var i__20351__auto___23816 = (0);
while(true){
if((i__20351__auto___23816 < len__20350__auto___23815)){
args__20357__auto__.push((arguments[i__20351__auto___23816]));

var G__23817 = (i__20351__auto___23816 + (1));
i__20351__auto___23816 = G__23817;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23814))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23814),args);
});})(g__20449__auto___23814))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__20449__auto___23814){
return (function (seq23774){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23774));
});})(g__20449__auto___23814))
;


var g__20449__auto___23818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__20449__auto___23818){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23819 = arguments.length;
var i__20351__auto___23820 = (0);
while(true){
if((i__20351__auto___23820 < len__20350__auto___23819)){
args__20357__auto__.push((arguments[i__20351__auto___23820]));

var G__23821 = (i__20351__auto___23820 + (1));
i__20351__auto___23820 = G__23821;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23818))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23818),args);
});})(g__20449__auto___23818))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__20449__auto___23818){
return (function (seq23775){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23775));
});})(g__20449__auto___23818))
;


var g__20449__auto___23822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__20449__auto___23822){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23823 = arguments.length;
var i__20351__auto___23824 = (0);
while(true){
if((i__20351__auto___23824 < len__20350__auto___23823)){
args__20357__auto__.push((arguments[i__20351__auto___23824]));

var G__23825 = (i__20351__auto___23824 + (1));
i__20351__auto___23824 = G__23825;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23822))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23822),args);
});})(g__20449__auto___23822))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__20449__auto___23822){
return (function (seq23776){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23776));
});})(g__20449__auto___23822))
;


var g__20449__auto___23826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__20449__auto___23826){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23827 = arguments.length;
var i__20351__auto___23828 = (0);
while(true){
if((i__20351__auto___23828 < len__20350__auto___23827)){
args__20357__auto__.push((arguments[i__20351__auto___23828]));

var G__23829 = (i__20351__auto___23828 + (1));
i__20351__auto___23828 = G__23829;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23826))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23826),args);
});})(g__20449__auto___23826))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__20449__auto___23826){
return (function (seq23777){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23777));
});})(g__20449__auto___23826))
;


var g__20449__auto___23830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__20449__auto___23830){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23831 = arguments.length;
var i__20351__auto___23832 = (0);
while(true){
if((i__20351__auto___23832 < len__20350__auto___23831)){
args__20357__auto__.push((arguments[i__20351__auto___23832]));

var G__23833 = (i__20351__auto___23832 + (1));
i__20351__auto___23832 = G__23833;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23830))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23830),args);
});})(g__20449__auto___23830))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__20449__auto___23830){
return (function (seq23778){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23778));
});})(g__20449__auto___23830))
;


var g__20449__auto___23834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__20449__auto___23834){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23835 = arguments.length;
var i__20351__auto___23836 = (0);
while(true){
if((i__20351__auto___23836 < len__20350__auto___23835)){
args__20357__auto__.push((arguments[i__20351__auto___23836]));

var G__23837 = (i__20351__auto___23836 + (1));
i__20351__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23834))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23834),args);
});})(g__20449__auto___23834))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__20449__auto___23834){
return (function (seq23779){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23779));
});})(g__20449__auto___23834))
;


var g__20449__auto___23838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__20449__auto___23838){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23839 = arguments.length;
var i__20351__auto___23840 = (0);
while(true){
if((i__20351__auto___23840 < len__20350__auto___23839)){
args__20357__auto__.push((arguments[i__20351__auto___23840]));

var G__23841 = (i__20351__auto___23840 + (1));
i__20351__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23838))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23838),args);
});})(g__20449__auto___23838))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__20449__auto___23838){
return (function (seq23780){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23780));
});})(g__20449__auto___23838))
;


var g__20449__auto___23842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__20449__auto___23842){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23843 = arguments.length;
var i__20351__auto___23844 = (0);
while(true){
if((i__20351__auto___23844 < len__20350__auto___23843)){
args__20357__auto__.push((arguments[i__20351__auto___23844]));

var G__23845 = (i__20351__auto___23844 + (1));
i__20351__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23842))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23842),args);
});})(g__20449__auto___23842))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__20449__auto___23842){
return (function (seq23781){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23781));
});})(g__20449__auto___23842))
;


var g__20449__auto___23846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__20449__auto___23846){
return (function cljs$spec$gen$alpha$return(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23847 = arguments.length;
var i__20351__auto___23848 = (0);
while(true){
if((i__20351__auto___23848 < len__20350__auto___23847)){
args__20357__auto__.push((arguments[i__20351__auto___23848]));

var G__23849 = (i__20351__auto___23848 + (1));
i__20351__auto___23848 = G__23849;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23846))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23846),args);
});})(g__20449__auto___23846))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__20449__auto___23846){
return (function (seq23782){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23782));
});})(g__20449__auto___23846))
;


var g__20449__auto___23850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__20449__auto___23850){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23851 = arguments.length;
var i__20351__auto___23852 = (0);
while(true){
if((i__20351__auto___23852 < len__20350__auto___23851)){
args__20357__auto__.push((arguments[i__20351__auto___23852]));

var G__23853 = (i__20351__auto___23852 + (1));
i__20351__auto___23852 = G__23853;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23850))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23850),args);
});})(g__20449__auto___23850))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20449__auto___23850){
return (function (seq23783){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23783));
});})(g__20449__auto___23850))
;


var g__20449__auto___23854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__20449__auto___23854){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23855 = arguments.length;
var i__20351__auto___23856 = (0);
while(true){
if((i__20351__auto___23856 < len__20350__auto___23855)){
args__20357__auto__.push((arguments[i__20351__auto___23856]));

var G__23857 = (i__20351__auto___23856 + (1));
i__20351__auto___23856 = G__23857;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23854))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23854),args);
});})(g__20449__auto___23854))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__20449__auto___23854){
return (function (seq23784){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23784));
});})(g__20449__auto___23854))
;


var g__20449__auto___23858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__20449__auto___23858){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23859 = arguments.length;
var i__20351__auto___23860 = (0);
while(true){
if((i__20351__auto___23860 < len__20350__auto___23859)){
args__20357__auto__.push((arguments[i__20351__auto___23860]));

var G__23861 = (i__20351__auto___23860 + (1));
i__20351__auto___23860 = G__23861;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20449__auto___23858))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20449__auto___23858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20449__auto___23858),args);
});})(g__20449__auto___23858))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__20449__auto___23858){
return (function (seq23785){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23785));
});})(g__20449__auto___23858))
;

var g__20462__auto___23883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__20462__auto___23883){
return (function cljs$spec$gen$alpha$any(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23884 = arguments.length;
var i__20351__auto___23885 = (0);
while(true){
if((i__20351__auto___23885 < len__20350__auto___23884)){
args__20357__auto__.push((arguments[i__20351__auto___23885]));

var G__23886 = (i__20351__auto___23885 + (1));
i__20351__auto___23885 = G__23886;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23883))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23883){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23883);
});})(g__20462__auto___23883))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__20462__auto___23883){
return (function (seq23862){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23862));
});})(g__20462__auto___23883))
;


var g__20462__auto___23887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__20462__auto___23887){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23888 = arguments.length;
var i__20351__auto___23889 = (0);
while(true){
if((i__20351__auto___23889 < len__20350__auto___23888)){
args__20357__auto__.push((arguments[i__20351__auto___23889]));

var G__23890 = (i__20351__auto___23889 + (1));
i__20351__auto___23889 = G__23890;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23887))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23887){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23887);
});})(g__20462__auto___23887))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__20462__auto___23887){
return (function (seq23863){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23863));
});})(g__20462__auto___23887))
;


var g__20462__auto___23891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__20462__auto___23891){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23892 = arguments.length;
var i__20351__auto___23893 = (0);
while(true){
if((i__20351__auto___23893 < len__20350__auto___23892)){
args__20357__auto__.push((arguments[i__20351__auto___23893]));

var G__23894 = (i__20351__auto___23893 + (1));
i__20351__auto___23893 = G__23894;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23891))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23891){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23891);
});})(g__20462__auto___23891))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__20462__auto___23891){
return (function (seq23864){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23864));
});})(g__20462__auto___23891))
;


var g__20462__auto___23895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__20462__auto___23895){
return (function cljs$spec$gen$alpha$char(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23896 = arguments.length;
var i__20351__auto___23897 = (0);
while(true){
if((i__20351__auto___23897 < len__20350__auto___23896)){
args__20357__auto__.push((arguments[i__20351__auto___23897]));

var G__23898 = (i__20351__auto___23897 + (1));
i__20351__auto___23897 = G__23898;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23895))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23895){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23895);
});})(g__20462__auto___23895))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__20462__auto___23895){
return (function (seq23865){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23865));
});})(g__20462__auto___23895))
;


var g__20462__auto___23899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__20462__auto___23899){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23900 = arguments.length;
var i__20351__auto___23901 = (0);
while(true){
if((i__20351__auto___23901 < len__20350__auto___23900)){
args__20357__auto__.push((arguments[i__20351__auto___23901]));

var G__23902 = (i__20351__auto___23901 + (1));
i__20351__auto___23901 = G__23902;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23899))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23899){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23899);
});})(g__20462__auto___23899))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__20462__auto___23899){
return (function (seq23866){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23866));
});})(g__20462__auto___23899))
;


var g__20462__auto___23903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__20462__auto___23903){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23904 = arguments.length;
var i__20351__auto___23905 = (0);
while(true){
if((i__20351__auto___23905 < len__20350__auto___23904)){
args__20357__auto__.push((arguments[i__20351__auto___23905]));

var G__23906 = (i__20351__auto___23905 + (1));
i__20351__auto___23905 = G__23906;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23903))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23903){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23903);
});})(g__20462__auto___23903))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__20462__auto___23903){
return (function (seq23867){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23867));
});})(g__20462__auto___23903))
;


var g__20462__auto___23907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__20462__auto___23907){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23908 = arguments.length;
var i__20351__auto___23909 = (0);
while(true){
if((i__20351__auto___23909 < len__20350__auto___23908)){
args__20357__auto__.push((arguments[i__20351__auto___23909]));

var G__23910 = (i__20351__auto___23909 + (1));
i__20351__auto___23909 = G__23910;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23907))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23907){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23907);
});})(g__20462__auto___23907))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__20462__auto___23907){
return (function (seq23868){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23868));
});})(g__20462__auto___23907))
;


var g__20462__auto___23911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__20462__auto___23911){
return (function cljs$spec$gen$alpha$double(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23912 = arguments.length;
var i__20351__auto___23913 = (0);
while(true){
if((i__20351__auto___23913 < len__20350__auto___23912)){
args__20357__auto__.push((arguments[i__20351__auto___23913]));

var G__23914 = (i__20351__auto___23913 + (1));
i__20351__auto___23913 = G__23914;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23911))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23911){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23911);
});})(g__20462__auto___23911))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__20462__auto___23911){
return (function (seq23869){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23869));
});})(g__20462__auto___23911))
;


var g__20462__auto___23915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__20462__auto___23915){
return (function cljs$spec$gen$alpha$int(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23916 = arguments.length;
var i__20351__auto___23917 = (0);
while(true){
if((i__20351__auto___23917 < len__20350__auto___23916)){
args__20357__auto__.push((arguments[i__20351__auto___23917]));

var G__23918 = (i__20351__auto___23917 + (1));
i__20351__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23915))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23915){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23915);
});})(g__20462__auto___23915))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__20462__auto___23915){
return (function (seq23870){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23870));
});})(g__20462__auto___23915))
;


var g__20462__auto___23919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__20462__auto___23919){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23920 = arguments.length;
var i__20351__auto___23921 = (0);
while(true){
if((i__20351__auto___23921 < len__20350__auto___23920)){
args__20357__auto__.push((arguments[i__20351__auto___23921]));

var G__23922 = (i__20351__auto___23921 + (1));
i__20351__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23919))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23919){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23919);
});})(g__20462__auto___23919))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__20462__auto___23919){
return (function (seq23871){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23871));
});})(g__20462__auto___23919))
;


var g__20462__auto___23923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__20462__auto___23923){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23924 = arguments.length;
var i__20351__auto___23925 = (0);
while(true){
if((i__20351__auto___23925 < len__20350__auto___23924)){
args__20357__auto__.push((arguments[i__20351__auto___23925]));

var G__23926 = (i__20351__auto___23925 + (1));
i__20351__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23923))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23923){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23923);
});})(g__20462__auto___23923))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__20462__auto___23923){
return (function (seq23872){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23872));
});})(g__20462__auto___23923))
;


var g__20462__auto___23927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__20462__auto___23927){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23928 = arguments.length;
var i__20351__auto___23929 = (0);
while(true){
if((i__20351__auto___23929 < len__20350__auto___23928)){
args__20357__auto__.push((arguments[i__20351__auto___23929]));

var G__23930 = (i__20351__auto___23929 + (1));
i__20351__auto___23929 = G__23930;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23927))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23927){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23927);
});})(g__20462__auto___23927))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__20462__auto___23927){
return (function (seq23873){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23873));
});})(g__20462__auto___23927))
;


var g__20462__auto___23931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__20462__auto___23931){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23932 = arguments.length;
var i__20351__auto___23933 = (0);
while(true){
if((i__20351__auto___23933 < len__20350__auto___23932)){
args__20357__auto__.push((arguments[i__20351__auto___23933]));

var G__23934 = (i__20351__auto___23933 + (1));
i__20351__auto___23933 = G__23934;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23931))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23931){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23931);
});})(g__20462__auto___23931))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__20462__auto___23931){
return (function (seq23874){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23874));
});})(g__20462__auto___23931))
;


var g__20462__auto___23935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__20462__auto___23935){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23936 = arguments.length;
var i__20351__auto___23937 = (0);
while(true){
if((i__20351__auto___23937 < len__20350__auto___23936)){
args__20357__auto__.push((arguments[i__20351__auto___23937]));

var G__23938 = (i__20351__auto___23937 + (1));
i__20351__auto___23937 = G__23938;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23935))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23935){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23935);
});})(g__20462__auto___23935))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__20462__auto___23935){
return (function (seq23875){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23875));
});})(g__20462__auto___23935))
;


var g__20462__auto___23939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__20462__auto___23939){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23940 = arguments.length;
var i__20351__auto___23941 = (0);
while(true){
if((i__20351__auto___23941 < len__20350__auto___23940)){
args__20357__auto__.push((arguments[i__20351__auto___23941]));

var G__23942 = (i__20351__auto___23941 + (1));
i__20351__auto___23941 = G__23942;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23939))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23939){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23939);
});})(g__20462__auto___23939))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__20462__auto___23939){
return (function (seq23876){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23876));
});})(g__20462__auto___23939))
;


var g__20462__auto___23943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__20462__auto___23943){
return (function cljs$spec$gen$alpha$string(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23944 = arguments.length;
var i__20351__auto___23945 = (0);
while(true){
if((i__20351__auto___23945 < len__20350__auto___23944)){
args__20357__auto__.push((arguments[i__20351__auto___23945]));

var G__23946 = (i__20351__auto___23945 + (1));
i__20351__auto___23945 = G__23946;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23943))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23943){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23943);
});})(g__20462__auto___23943))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__20462__auto___23943){
return (function (seq23877){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23877));
});})(g__20462__auto___23943))
;


var g__20462__auto___23947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__20462__auto___23947){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23948 = arguments.length;
var i__20351__auto___23949 = (0);
while(true){
if((i__20351__auto___23949 < len__20350__auto___23948)){
args__20357__auto__.push((arguments[i__20351__auto___23949]));

var G__23950 = (i__20351__auto___23949 + (1));
i__20351__auto___23949 = G__23950;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23947))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23947){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23947);
});})(g__20462__auto___23947))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__20462__auto___23947){
return (function (seq23878){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23878));
});})(g__20462__auto___23947))
;


var g__20462__auto___23951 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__20462__auto___23951){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23952 = arguments.length;
var i__20351__auto___23953 = (0);
while(true){
if((i__20351__auto___23953 < len__20350__auto___23952)){
args__20357__auto__.push((arguments[i__20351__auto___23953]));

var G__23954 = (i__20351__auto___23953 + (1));
i__20351__auto___23953 = G__23954;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23951))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23951){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23951);
});})(g__20462__auto___23951))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__20462__auto___23951){
return (function (seq23879){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23879));
});})(g__20462__auto___23951))
;


var g__20462__auto___23955 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__20462__auto___23955){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23956 = arguments.length;
var i__20351__auto___23957 = (0);
while(true){
if((i__20351__auto___23957 < len__20350__auto___23956)){
args__20357__auto__.push((arguments[i__20351__auto___23957]));

var G__23958 = (i__20351__auto___23957 + (1));
i__20351__auto___23957 = G__23958;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23955))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23955){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23955);
});})(g__20462__auto___23955))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__20462__auto___23955){
return (function (seq23880){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23880));
});})(g__20462__auto___23955))
;


var g__20462__auto___23959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__20462__auto___23959){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23960 = arguments.length;
var i__20351__auto___23961 = (0);
while(true){
if((i__20351__auto___23961 < len__20350__auto___23960)){
args__20357__auto__.push((arguments[i__20351__auto___23961]));

var G__23962 = (i__20351__auto___23961 + (1));
i__20351__auto___23961 = G__23962;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23959))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23959){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23959);
});})(g__20462__auto___23959))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__20462__auto___23959){
return (function (seq23881){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23881));
});})(g__20462__auto___23959))
;


var g__20462__auto___23963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__20462__auto___23963){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23964 = arguments.length;
var i__20351__auto___23965 = (0);
while(true){
if((i__20351__auto___23965 < len__20350__auto___23964)){
args__20357__auto__.push((arguments[i__20351__auto___23965]));

var G__23966 = (i__20351__auto___23965 + (1));
i__20351__auto___23965 = G__23966;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});})(g__20462__auto___23963))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20462__auto___23963){
return (function (args){
return cljs.core.deref.call(null,g__20462__auto___23963);
});})(g__20462__auto___23963))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__20462__auto___23963){
return (function (seq23882){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23882));
});})(g__20462__auto___23963))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__20357__auto__ = [];
var len__20350__auto___23969 = arguments.length;
var i__20351__auto___23970 = (0);
while(true){
if((i__20351__auto___23970 < len__20350__auto___23969)){
args__20357__auto__.push((arguments[i__20351__auto___23970]));

var G__23971 = (i__20351__auto___23970 + (1));
i__20351__auto___23970 = G__23971;
continue;
} else {
}
break;
}

var argseq__20358__auto__ = ((((0) < args__20357__auto__.length))?(new cljs.core.IndexedSeq(args__20357__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__20358__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__23967_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23967_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq23968){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23968));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__23972_SHARP_){
return (new Date(p1__23972_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
