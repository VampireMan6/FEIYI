var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8276c848'])
Z([3,'_view 8276c848 center'])
Z([3,'_view 8276c848 logo'])
Z([3,'_view 8276c848 logo-title'])
Z([[7],[3,'token']])
Z([[2,'!'],[[7],[3,'token']]])
Z(z[5])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8276c848'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'269b2f48'])
Z([3,'_view 269b2f48 index'])
Z([3,'_view 269b2f48 card'])
Z([[6],[[7],[3,'data']],[3,'text']])
Z([[6],[[7],[3,'data']],[3,'img']])
Z([[6],[[7],[3,'data']],[3,'video']])
Z([[7],[3,'loading']])
Z([[6],[[7],[3,'replylist']],[3,'length']])
Z([[7],[3,'showlogin']])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'269b2f48'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'512e99d8'])
Z([3,'_view 512e99d8 index'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'_view 512e99d8 card'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[7],[3,'loading']])
Z([[7],[3,'showlogin']])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'512e99d8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1ea31a1c'])
Z([3,'_view 1ea31a1c index'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'_view 1ea31a1c card'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[7],[3,'loading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1ea31a1c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4380f27c'])
Z([3,'_view 4380f27c index'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'_view 4380f27c card'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[7],[3,'loading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4380f27c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7dade2fe'])
Z([3,'_view 7dade2fe index'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'_view 7dade2fe card'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[7],[3,'loading']])
Z([[7],[3,'showlogin']])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7dade2fe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'21cbad1c'])
Z([3,'_view 21cbad1c index'])
Z([[2,'||'],[[7],[3,'showlogin']],[[2,'!'],[[7],[3,'token']]]])
Z([[7],[3,'token']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'21cbad1c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a060af9e'])
Z([3,'_view a060af9e content'])
Z([[2,'=='],[[7],[3,'type']],[1,'login']])
Z([[2,'=='],[[7],[3,'type']],[1,'reg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a060af9e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./common/slots.wxml','./pages/center/center.vue.wxml','./pages/center/center.wxml','./center.vue.wxml','./pages/detail/detail.vue.wxml','./pages/detail/detail.wxml','./detail.vue.wxml','./pages/hot/hot.vue.wxml','./pages/hot/hot.wxml','./hot.vue.wxml','./pages/like/like.vue.wxml','./pages/like/like.wxml','./like.vue.wxml','./pages/my/my.vue.wxml','./pages/my/my.wxml','./my.vue.wxml','./pages/new/new.vue.wxml','./pages/new/new.wxml','./new.vue.wxml','./pages/tougao/tougao.vue.wxml','./pages/tougao/tougao.wxml','./tougao.vue.wxml','./platforms/app-plus/login/login.vue.wxml','./platforms/app-plus/login/login.wxml','./login.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["8276c848"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':8276c848'
r.wxVkey=b
gg.f=$gdc(f_["./pages/center/center.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./pages/center/center.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/center/center.vue.wxml:view:1:63")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
cs.push("./pages/center/center.vue.wxml:view:1:266")
var cF=_n('view')
_rz(z,cF,'class',3,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,4,e,s,gg)){hG.wxVkey=1
cs.push("./pages/center/center.vue.wxml:text:1:306")
cs.pop()
}
var oH=_v()
_(cF,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
cs.push("./pages/center/center.vue.wxml:button:1:463")
cs.pop()
}
hG.wxXCkey=1
oH.wxXCkey=1
cs.pop()
_(oD,cF)
var fE=_v()
_(oD,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
cs.push("./pages/center/center.vue.wxml:text:1:665")
cs.pop()
}
fE.wxXCkey=1
cs.pop()
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,7,e,s,gg)){xC.wxVkey=1
cs.push("./pages/center/center.vue.wxml:view:1:1759")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
cs.push("./pages/center/center.wxml:template:2:6")
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
cs.pop()
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["269b2f48"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':269b2f48'
r.wxVkey=b
gg.f=$gdc(f_["./pages/detail/detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./pages/detail/detail.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/detail/detail.vue.wxml:view:1:62")
var hG=_n('view')
_rz(z,hG,'class',2,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,3,e,s,gg)){oH.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:1:96")
cs.pop()
}
var cI=_v()
_(hG,cI)
if(_oz(z,4,e,s,gg)){cI.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:image:1:242")
cs.pop()
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,5,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:video:1:421")
cs.pop()
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
cs.pop()
_(oB,hG)
var xC=_v()
_(oB,xC)
if(_oz(z,6,e,s,gg)){xC.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:text:1:1055")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:1:1568")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:button:1:2270")
cs.pop()
}
var cF=_v()
_(oB,cF)
if(_oz(z,9,e,s,gg)){cF.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:1:2486")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/detail/detail.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["512e99d8"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':512e99d8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/hot/hot.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./pages/hot/hot.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var cF=_v()
_(oB,cF)
cs.push("./pages/hot/hot.vue.wxml:block:1:62")
var hG=function(cI,oH,oJ,gg){
cs.push("./pages/hot/hot.vue.wxml:view:1:158")
var aL=_n('view')
_rz(z,aL,'class',6,cI,oH,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,7,cI,oH,gg)){tM.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:view:1:192")
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,8,cI,oH,gg)){eN.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:image:1:338")
cs.pop()
}
var bO=_v()
_(aL,bO)
if(_oz(z,9,cI,oH,gg)){bO.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:video:1:524")
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,4,hG,e,s,gg,cF,'item','index','index')
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:text:1:1399")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:button:1:1476")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,12,e,s,gg)){fE.wxVkey=1
cs.push("./pages/hot/hot.vue.wxml:view:1:1692")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/hot/hot.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["1ea31a1c"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':1ea31a1c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/like/like.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./pages/like/like.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/like/like.vue.wxml:block:1:62")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/like/like.vue.wxml:view:1:158")
var oJ=_n('view')
_rz(z,oJ,'class',6,hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,7,hG,cF,gg)){lK.wxVkey=1
cs.push("./pages/like/like.vue.wxml:view:1:192")
cs.pop()
}
var aL=_v()
_(oJ,aL)
if(_oz(z,8,hG,cF,gg)){aL.wxVkey=1
cs.push("./pages/like/like.vue.wxml:image:1:338")
cs.pop()
}
var tM=_v()
_(oJ,tM)
if(_oz(z,9,hG,cF,gg)){tM.wxVkey=1
cs.push("./pages/like/like.vue.wxml:video:1:524")
cs.pop()
}
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'item','index','index')
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
cs.push("./pages/like/like.vue.wxml:text:1:1399")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/like/like.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["4380f27c"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':4380f27c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
cs.push("./pages/my/my.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
cs.push("./pages/my/my.vue.wxml:block:1:62")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/my/my.vue.wxml:view:1:158")
var oJ=_n('view')
_rz(z,oJ,'class',6,hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,7,hG,cF,gg)){lK.wxVkey=1
cs.push("./pages/my/my.vue.wxml:view:1:192")
cs.pop()
}
var aL=_v()
_(oJ,aL)
if(_oz(z,8,hG,cF,gg)){aL.wxVkey=1
cs.push("./pages/my/my.vue.wxml:image:1:338")
cs.pop()
}
var tM=_v()
_(oJ,tM)
if(_oz(z,9,hG,cF,gg)){tM.wxVkey=1
cs.push("./pages/my/my.vue.wxml:video:1:524")
cs.pop()
}
var eN=_v()
_(oJ,eN)
if(_oz(z,10,hG,cF,gg)){eN.wxVkey=1
cs.push("./pages/my/my.vue.wxml:view:1:656")
cs.pop()
}
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'item','index','index')
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
cs.push("./pages/my/my.vue.wxml:text:1:1295")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=e_[x[14]].i
_ai(o6,x[15],e_,x[14],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/my/my.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[14],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[14],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["7dade2fe"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':7dade2fe'
r.wxVkey=b
gg.f=$gdc(f_["./pages/new/new.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
cs.push("./pages/new/new.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var cF=_v()
_(oB,cF)
cs.push("./pages/new/new.vue.wxml:block:1:62")
var hG=function(cI,oH,oJ,gg){
cs.push("./pages/new/new.vue.wxml:view:1:158")
var aL=_n('view')
_rz(z,aL,'class',6,cI,oH,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,7,cI,oH,gg)){tM.wxVkey=1
cs.push("./pages/new/new.vue.wxml:view:1:192")
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,8,cI,oH,gg)){eN.wxVkey=1
cs.push("./pages/new/new.vue.wxml:image:1:338")
cs.pop()
}
var bO=_v()
_(aL,bO)
if(_oz(z,9,cI,oH,gg)){bO.wxVkey=1
cs.push("./pages/new/new.vue.wxml:video:1:524")
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,4,hG,e,s,gg,cF,'item','index','index')
cs.pop()
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
cs.push("./pages/new/new.vue.wxml:text:1:1389")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
cs.push("./pages/new/new.vue.wxml:button:1:1466")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,12,e,s,gg)){fE.wxVkey=1
cs.push("./pages/new/new.vue.wxml:view:1:1682")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lCB=e_[x[17]].i
_ai(lCB,x[18],e_,x[17],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/new/new.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[17],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[17],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["21cbad1c"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':21cbad1c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tougao/tougao.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
cs.push("./pages/tougao/tougao.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/tougao/tougao.vue.wxml:button:1:144")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tougao/tougao.vue.wxml:block:1:269")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oJB=e_[x[20]].i
_ai(oJB,x[21],e_,x[20],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/tougao/tougao.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[20],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[20],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["a060af9e"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[22]+':a060af9e'
r.wxVkey=b
gg.f=$gdc(f_["./platforms/app-plus/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
cs.push("./platforms/app-plus/login/login.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./platforms/app-plus/login/login.vue.wxml:block:1:64")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./platforms/app-plus/login/login.vue.wxml:block:1:962")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lQB=e_[x[23]].i
_ai(lQB,x[24],e_,x[23],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./platforms/app-plus/login/login.wxml:template:2:6")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[23],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[23],2,18)
cs.pop()
lQB.pop()
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[x[24]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/new/new","pages/hot/hot","pages/tougao/tougao","pages/like/like","pages/center/center","pages/my/my","platforms/app-plus/login/login","pages/detail/detail"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"笑一波","navigationBarBackgroundColor":"#f44336","backgroundColor":"#ffffff"},"usingComponents":{},"tabBar":{"color":"#777777","selectedColor":"#f44336","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/new/new","iconPath":"static/index-0.png","selectedIconPath":"static/index-1.png","text":"最新"},{"pagePath":"pages/hot/hot","iconPath":"static/hot-0.png","selectedIconPath":"static/hot-1.png","text":"最热"},{"pagePath":"pages/tougao/tougao","iconPath":"static/tag-0.png","selectedIconPath":"static/tag-1.png","text":"投稿"},{"pagePath":"pages/center/center","iconPath":"static/center-0.png","selectedIconPath":"static/center-1.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"appname":"笑一波"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], { "00aa": function aa(e, t, n) {"use strict";n.r(t);var a = n("528b");for (var u in a) {"default" !== u && function (e) {n.d(t, e, function () {return a[e];});}(u);}n("86aa");var r,i,o = n("2877"),c = Object(o["a"])(a["default"], r, i, !1, null, null, null);t["default"] = c.exports;}, "0103": function _(e, t, n) {"use strict";n("9e4e");var a = r(n("f3d3")),u = r(n("00aa"));function r(e) {return e && e.__esModule ? e : { default: e };}function i(e) {for (var t = 1; t < arguments.length; t++) {var n = null != arguments[t] ? arguments[t] : {},a = Object.keys(n);"function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (e) {return Object.getOwnPropertyDescriptor(n, e).enumerable;}))), a.forEach(function (t) {o(e, t, n[t]);});}return e;}function o(e, t, n) {return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;}a.default.config.productionTip = !1, u.default.mpType = "app";var c = new a.default(i({}, u.default));c.$mount();}, "36e1": function e1(e, t, n) {}, "528b": function b(e, t, n) {"use strict";n.r(t);var a = n("67b6"),u = n.n(a);for (var r in a) {"default" !== r && function (e) {n.d(t, e, function () {return a[e];});}(r);}t["default"] = u.a;}, "67b6": function b6(e, t, n) {"use strict";(function (e) {Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;var a = u(n("bc1b"));function u(e) {return e && e.__esModule ? e : { default: e };}var r = { onLaunch: function onLaunch() {plus.screen.lockOrientation("portrait-primary");var t = a.default.apiurl + "syj/index/checkupdate",n = { appid: plus.runtime.appid, version: plus.runtime.version, imei: plus.device.imei, shebei: a.default.shebei };e.request({ url: t, data: n, method: "POST", dataType: "json", header: { auth: a.default.httpauth }, success: function success(t) {if (console.log(JSON.stringify(t.data)), 200 == t.statusCode && t.data && t.data.isUpdate) {var n = "iOS" === plus.os.name ? t.data.iOS : t.data.Android;e.showModal({ title: "更新提示", content: t.data.note ? t.data.note : "是否选择更新", success: function success(e) {e.confirm && plus.runtime.openURL(n);} });}} }), e.getProvider({ service: "push", success: function success(t) {~t.provider.indexOf("igexin") && e.subscribePush({ provider: "igexin", success: function success(e) {} });} }), e.onPush({ provider: "igexin", callback: function callback(t) {var n = "",a = JSON.parse(t.data);for (var u in a) {n += u + "=" + a[u];}e.showModal({ title: "提示", content: n, success: function success(e) {e.confirm || e.cancel;} });} });} };t.default = r;}).call(this, n("649d")["default"]);}, "86aa": function aa(e, t, n) {"use strict";var a = n("36e1"),u = n.n(a);u.a;} }, [["0103", "common/runtime", "common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return C}),n.d(e,"mapState",function(){return S}),n.d(e,"mapMutations",function(){return E}),n.d(e,"mapGetters",function(){return P}),n.d(e,"mapActions",function(){return I}),n.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var p=function(t){this.register([],t,!1)};function l(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;l(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},p.prototype.update=function(t){l([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&C(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,_(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function _(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){h.set(s,c,r.state)})}var u=r.context=w(t,a,n);r.forEachMutation(function(e,n){var r=a+n;$(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;x(t,r,o,u)}),r.forEachGetter(function(e,n){var r=a+n;O(t,r,e,u)}),r.forEachChild(function(r,i){_(t,e,n.concat(i),r,o)})}function w(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return k(t.state,n)}}}),o}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function $(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function x(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function j(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function C(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=j(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=j(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),m(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var S=D(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),E=D(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=M(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=D(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),I=D(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=M(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),T=function(t){return{mapState:S.bind(null,t),mapGetters:P.bind(null,t),mapMutations:E.bind(null,t),mapActions:I.bind(null,t)}};function N(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function D(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){var r=t._modulesNamespaceMap[n];return r}var L={Store:d,install:C,version:"3.0.1",mapState:S,mapMutations:E,mapGetters:P,mapActions:I,createNamespacedHelpers:T};e["default"]=L},"649d":function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"===typeof t},o=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},i=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!i.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},c=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(a.success)||r(a.fail)||r(a.complete)?t.apply(void 0,[a].concat(n)):o(new Promise(function(e,r){t.apply(void 0,[Object.assign({},a,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,f=750,p=!1,l=0,h=0;function d(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;l=r,h=n,p="ios"===e}function v(t,e){if(0===l&&d(),0===t)return 0;var n=t/f*(e||l);return n<0&&(n=-n),n=Math.floor(n+u),0===n?1!==h&&p?.5:1:t<0?-n:n}function y(t){return __requireNativePlugin__(t)}var m={},g={os:{plus:!0}};"undefined"!==typeof Proxy?m=new Proxy({},{get:function(t,e){return g.hasOwnProperty(e)?g[e]:"upx2px"===e?v:"requireNativePlugin"===e?y:wx.hasOwnProperty(e)?s(e)?c(wx[e]):wx[e]:void 0}}):(m.upx2px=v,m.requireNativePlugin=y,Object.keys(g).forEach(function(t){m[t]=g[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?m[t]=c(wx[t]):m[t]=wx[t])}));var _=m;e["default"]=_},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=w;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(I([])));g&&g!==r&&o.call(g,a)&&(y=g);var _=O.prototype=$.prototype=Object.create(y);x.prototype=_.constructor=O,O.constructor=x,O[c]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[s]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,n,r){var o=new k(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=j(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function x(){}function O(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,i,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function j(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:l,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9e4e":function(t,e,n){},a34a:function(t,e,n){t.exports=n("bbdd")},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},bc1b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.parGetData=a,e.parSetData=s,e.default=void 0;var n="https://api.xf512.com/",r="asdgladsjgs3454adooewauatg454443452",o="";o="app";var i="IQJ3VC4FIwpiBiAAMQUm";function a(t){return 0===t.indexOf("obj-")?(t=t.slice(4),JSON.parse(t)):0===t.indexOf("str-")?t.slice(4):void 0}function s(t){return"object"==typeof t?(t=JSON.stringify(t),t="obj-"+t):t="str-"+t,t}function c(){var e=t.getStorageSync("wxopenid");e=e?a(e):"";var n=t.getStorageSync("userinfo");n=n?a(n):"";var r=t.getStorageSync("token");r=r?a(r):"";var o=t.getStorageSync("appusername");return o=o?a(o):"",{openid:e,userinfo:n,token:r,appusername:o}}function u(e,n){t.showModal({title:"请登录",content:"请登录后继续操作",confirmText:"去登录",success:function(e){if(e.confirm)return t.navigateTo({url:"/platforms/app-plus/login/login"}),!1}})}function f(e,i,a,s){return e.token?!i.type&&("like"==a?(i.type="like",i.like+=1):(i.type="hate",i.hate+=1),void t.request({url:n+"syj/index/setlike",method:"POST",dataType:"json",data:{type:a,id:s,token:e.token,shebei:o},header:{auth:r}})):(u(),!1)}function p(t,e){return Object.keys(e).forEach(function(n){t.push(e[n])}),t}var l={apiurl:n,shebei:o,appkey:i,httpauth:r,parSetData:s,parGetData:a,checklogin:c,logincomm:u,setlike:f,concat:p};e.default=l}).call(this,n("649d")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function h(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var m=y("key,ref,slot,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,x=b(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),O=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,k=b(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function S(t,e){for(var n in e)t[n]=e[n];return t}function E(t){for(var e={},n=0;n<t.length;n++)t[n]&&S(e,t[n]);return e}function P(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function D(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var L="data-server-rendered",R=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:P,parsePlatformTagName:T,mustUseProp:I,_lifecycleHooks:B},F=Object.freeze({});function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function W(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=P;function q(t,e,n){if(V.errorHandler)V.errorHandler.call(null,t,e,n);else{if(!Q||"undefined"===typeof console)throw t;console.error(t)}}var z,K="__proto__"in{},Q="undefined"!==typeof window,X=["mpvue-runtime"].join(),Y=(X&&/msie|trident/.test(X),X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),Z=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)),tt=(X&&/chrome\/\d+/.test(X),{}.watch);if(Q)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===z&&(z=!Q&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),z},rt=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Z&&setTimeout(P)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){g(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var ht=Array.prototype,dt=Object.create(ht);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ht[t];G(dt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(dt),yt={shouldConvert:!0},mt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,G(t,"__ob__",this),Array.isArray(t)){var e=K?gt:_t;e(t,dt,vt),this.observeArray(t)}else this.walk(t)};function gt(t,e,n){t.__proto__=e}function _t(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];G(t,i,e[i])}}function wt(t,e){var n;if(u(t))return w(t,"__ob__")&&t.__ob__ instanceof mt?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new mt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&wt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&wt(e),i.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(w(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}mt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},mt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)wt(t[e])};var At=V.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],w(t,n)?p(r)&&p(o)&&kt(r,o):$t(t,n,o);return t}function jt(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Ct(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function St(t,e){var n=Object.create(t||null);return e?S(n,e):n}At.data=function(t,e,n){return n?jt(t,e,n):e&&"function"!==typeof e?t:jt.call(this,t,e)},B.forEach(function(t){At[t]=Ct}),R.forEach(function(t){At[t+"s"]=St}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in S(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return S(n,t),S(n,e),n},At.provide=jt;var Et=function(t,e){return void 0===e?t:e};function Pt(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function It(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),Pt(e),It(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)w(t,a)||c(a);function c(r){var o=At[r]||Et;s[r]=o(t[r],e[r],n,r)}return s}function Dt(t,e,n,r){if("string"===typeof n){var o=t[e];if(w(o,n))return o[n];var i=x(n);if(w(o,i))return o[i];var a=O(i);if(w(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Mt(t,e,n,r){var o=e[t],i=!w(n,t),a=n[t];if(Bt(Boolean,o.type)&&(i&&!w(o,"default")?a=!1:Bt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Lt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,wt(a),yt.shouldConvert=s}return a}function Lt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Rt(e.type)?r.call(t):r}}function Rt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Bt(t,e){if(!Array.isArray(e))return Rt(e)===Rt(t);for(var n=0,r=e.length;n<r;n++)if(Rt(e[n])===Rt(t))return!0;return!1}var Vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ft={child:{}};Ft.child.get=function(){return this.componentInstance},Object.defineProperties(Vt.prototype,Ft);var Ut=function(t){void 0===t&&(t="");var e=new Vt;return e.text=t,e.isComment=!0,e};function Gt(t){return new Vt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Vt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Wt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Jt,qt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function zt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=zt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Qt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Xt(a,c,u,f,!0)||Xt(a,s,u,f,!1)}return a}}function Xt(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Yt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Zt(t){return c(t)?[Gt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Gt(r)):te(r)&&te(s)?u[u.length-1]=Gt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ut();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=M(function(n){t.resolved=ne(n,e),s||c()}),p=M(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?C(r):r;for(var o=C(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function he(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?he(t[n],e):e[t[n].key]=t[n].fn;return e}var de=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&$e(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=de;de=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),de=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$e(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$e(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function me(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ut),$e(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Me(t,r,P),n=!1,null==t.$vnode&&(t._isMounted=!0,$e(t,"mounted")),t}function ge(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==F);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Mt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function _e(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,_e(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);$e(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!_e(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);$e(t,"deactivated")}}function $e(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],Ae={},ke=!1,je=!1,Ce=0;function Se(){Ce=xe.length=Oe.length=0,Ae={},ke=je=!1}function Ee(){var t,e;for(je=!0,xe.sort(function(t,e){return t.id-e.id}),Ce=0;Ce<xe.length;Ce++)t=xe[Ce],e=t.id,Ae[e]=null,t.run();var n=Oe.slice(),r=xe.slice();Se(),Te(n),Pe(r),rt&&V.devtools&&rt.emit("flush")}function Pe(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&$e(r,"updated")}}function Ie(t){t._inactive=!1,Oe.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}function Ne(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,je){var n=xe.length-1;while(n>Ce&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(Ee))}}var De=0,Me=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Me.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Re(t),lt(),this.cleanupDeps()}return t},Me.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Me.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Me.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},Me.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Me.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Me.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Me.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Le=new it;function Re(t){Le.clear(),Be(t,Le)}function Be(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Be(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Be(t[r[n]],e)}}}var Ve={enumerable:!0,configurable:!0,get:P,set:P};function Fe(t,e,n){Ve.get=function(){return this[e][n]},Ve.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ve)}function Ue(t){t._watchers=[];var e=t.$options;e.props&&Ge(t,e.props),e.methods&&Qe(t,e.methods),e.data?He(t):wt(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Xe(t,e.watch)}function Ge(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Mt(i,e,n,t);bt(r,i,a),i in t||Fe(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?We(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&w(r,i)||U(i)||Fe(t,"_data",i)}wt(e,!0)}function We(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Je={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Me(t,i,P,Je),r in t||ze(t,r,o)}}function ze(t,e,n){"function"===typeof n?(Ve.get=Ke(e),Ve.set=P):(Ve.get=n.get?!1!==n.cache?Ke(e):n.get:P,Ve.set=n.set?n.set:P),Object.defineProperty(t,e,Ve)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Qe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?P:j(e[n],t)}function Xe(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Ye(t,n,r[o]);else Ye(t,n,r)}}function Ye(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ze(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Ye(r,t,e,n);n=n||{},n.user=!0;var o=new Me(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Mt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Vt&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,de,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;ge(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$e(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ie(n):we(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Qt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}fn(e);var d=t.options.name||s,v=new Vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var hn=1,dn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=dn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ut();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ut();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Zt(r):o===hn&&(r=Yt(r)),"string"===typeof e)?(s=V.getTagNamespace(e),a=V.isReservedTag(e)?new Vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Dt(t.$options,"components",e))?cn(c,n,t,r,e):new Vt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&mn(a,s),a):Ut()}function mn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&mn(a,e)}}function gn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function _n(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=S(S({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function wn(t){return Dt(this.$options,"filters",t,!0)||T}function bn(t,e,n){var r=V.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function $n(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=E(n));var a=function(a){if("class"===a||"style"===a||m(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Wt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function On(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function jn(t,e){if(e)if(p(e)){var n=t.on=t.on?S({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Cn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=F,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function Sn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Wt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||F,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Vt||(t=Ut()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=d,t.prototype._l=gn,t.prototype._t=_n,t.prototype._q=N,t.prototype._i=D,t.prototype._m=xn,t.prototype._f=wn,t.prototype._k=bn,t.prototype._b=$n,t.prototype._v=Gt,t.prototype._e=Ut,t.prototype._u=he,t.prototype._g=jn}var En=0;function Pn(t){t.prototype._init=function(t){var e=this;e._uid=En++,e._isVue=!0,t&&t._isComponent?In(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Cn(e),$e(e,"beforeCreate"),en(e),Ue(e),tn(e),$e(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function In(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&S(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Dn(n[i],r[i],o[i]));return e}function Dn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Mn(t){this._init(t)}function Ln(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Rn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Bn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Vn(a),a.options.computed&&Fn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,R.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=S({},a.options),o[r]=a,a}}function Vn(t){var e=t.options.props;for(var n in e)Fe(t.prototype,"_props",n)}function Fn(t){var e=t.options.computed;for(var n in e)ze(t.prototype,n,e[n])}function Un(t){R.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}Pn(Mn),Ze(Mn),fe(Mn),ye(Mn),Sn(Mn);var Gn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Wn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var zn={name:"keep-alive",abstract:!0,props:{include:Gn,exclude:Gn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return Wn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!Wn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!Wn(this.include,n)||this.exclude&&Wn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:zn};function Qn(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:S,mergeOptions:Nt,defineReactive:bt},t.set=$t,t.delete=xt,t.nextTick=st,t.options=Object.create(null),R.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,S(t.options.components,Kn),Ln(t),Rn(t),Bn(t),Un(t)}Qn(Mn),Object.defineProperty(Mn.prototype,"$isServer",{get:nt}),Object.defineProperty(Mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Mn.version="2.4.1",Mn.mpvueVersion="1.0.12";var Xn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Yn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Zn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function hr(t){return or}function dr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var mr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:hr,tagName:dr,setTextContent:vr,setAttribute:yr}),gr={create:function(t,e){_r(e)},update:function(t,e){t.data.ref!==e.data.ref&&(_r(t,!0),_r(e))},destroy:function(t){_r(t,!0)}};function _r(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?g(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var wr=new Vt("",{},[]),br=["create","activate","update","remove","destroy"];function $r(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Ar(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function f(t){return new Vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,o){if(t.isRootInsert=!o,!d(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),$(t),_(t,c,e),i(s)&&b(t,e),g(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function d(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&m(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(b(t,e),$(t)):(_r(t),e.push(t))}function m(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](wr,s);e.push(s);break}g(n,t.elm,o)}function g(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o](wr,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(wr,t),i(e.insert)&&n.push(t))}function $(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=de)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)h(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),O(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function j(t,e,n,r,a){var s,c,f,p,l=0,d=0,v=e.length-1,y=e[0],m=e[v],g=n.length-1,_=n[0],w=n[g],b=!a;while(l<=v&&d<=g)o(y)?y=e[++l]:o(m)?m=e[--v]:$r(y,_)?(C(y,_,r),y=e[++l],_=n[++d]):$r(m,w)?(C(m,w,r),m=e[--v],w=n[--g]):$r(y,w)?(C(y,w,r),b&&u.insertBefore(t,y.elm,u.nextSibling(m.elm)),y=e[++l],w=n[--g]):$r(m,_)?(C(m,_,r),b&&u.insertBefore(t,m.elm,y.elm),m=e[--v],_=n[++d]):(o(s)&&(s=Or(e,l,v)),c=i(_.key)?s[_.key]:null,o(c)?(h(_,r,t,y.elm),_=n[++d]):(f=e[c],$r(f,_)?(C(f,_,r),e[c]=void 0,b&&u.insertBefore(t,f.elm,y.elm),_=n[++d]):(h(_,r,t,y.elm),_=n[++d])));l>v?(p=o(n[g+1])?null:n[g+1].elm,x(t,p,n,d,g,r)):d>g&&A(t,e,l,v)}function C(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,h=e.children;if(i(p)&&w(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(h)?l!==h&&j(c,l,h,n,s):i(h)?(i(t.text)&&u.setTextContent(c,""),x(c,null,h,0,h.length-1,n)):i(l)?A(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function S(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var E=y("attrs,style,class,staticClass,staticStyle,key");function P(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!P(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else _(n,c,r);if(i(s))for(var l in s)if(!E(l)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,d=[];if(o(t))l=!0,h(e,d,c,p);else{var v=i(t.nodeType);if(!v&&$r(t,e))C(t,e,d,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(L)&&(t.removeAttribute(L),n=!0),a(n)&&P(t,e,d))return S(e,d,!0),t;t=f(t)}var y=t.elm,m=u.parentNode(y);if(h(e,d,y._leaveCb?null:m,u.nextSibling(y)),i(e.parent)){var g=e.parent;while(g)g.elm=e.elm,g=g.parent;if(w(e))for(var _=0;_<r.create.length;++_)r.create[_](wr,e.parent)}i(m)?A(m,[t],0,0):i(t.tag)&&O(t)}}return S(e,d,l),e.elm}i(t)&&O(t)}}var kr=[gr],jr=Ar({nodeOps:mr,modules:kr});function Cr(){jr.apply(this,arguments),this.$updateDataToMP()}function Sr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Sr(t,e,r)}),o}function Er(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Pr(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Ir(t){var e=t.$options.properties,n=t.$options.props,r={};return Pr(e,r,t),Pr(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Fe(t,"_mpProps",n),e[n]=void 0)}),wt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Sr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Sr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Sr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Sr(r,"onShow",t)},onHide:function(){o.status="hide",Sr(r,"onHide")},onError:function(t){Sr(r,"onError",t)},onUniNViewMessage:function(t){Sr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Ir(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Sr(r,"attached")},ready:function(){o.status="ready",Sr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Sr(r,"moved")},detached:function(){o.status="detached",Sr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Er(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Sr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Sr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Sr(r,"onReady"),n()},onHide:function(){o.status="hide",Sr(r,"onHide")},onUnload:function(){o.status="unload",Sr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Sr(r,"onPullDownRefresh")},onReachBottom:function(){Sr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Sr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Sr(r,"onPageScroll",t)},onTabItemTap:function(t){Sr(r,"onTabItemTap",t)}})}}function Dr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Mr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Mr(r,e):e):e}function Lr(t){var e=Mr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Dr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Rr(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Rr(t,e)}),Object.assign(e,Lr(t))}function Br(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Vr=Br(function(t,e){t(e)},50);function Fr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Ur(){var t=Fr(this);if(t){var e=JSON.parse(JSON.stringify(Lr(this)));Vr(t.setData.bind(t),r(e,t.data))}}function Gr(){var t=Fr(this);if(t){var e=Rr(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Wr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Wr(t,e,n))})}):a.forEach(function(t){r=r.concat(Wr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:P,preventDefault:P};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=Wr(u._vnode,c,f);if(p.length){var l=Jr(t);if(1===p.length){var h=p[0](l);return h}p.forEach(function(t){return t(l)})}}}return Mn.config.mustUseProp=Zn,Mn.config.isReservedTag=Xn,Mn.config.isReservedAttr=Yn,Mn.config.getTagNamespace=tr,Mn.config.isUnknownElement=er,Mn.prototype.__patch__=Cr,Mn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return me(n,void 0,void 0)})}return me(this,void 0,void 0)},Mn.prototype._initMP=Nr,Mn.prototype.$updateDataToMP=Ur,Mn.prototype._initDataToMP=Gr,Mn.prototype.$handleProxyWithVue=qr,Mn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/new/new';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/new/new.js';

define('pages/new/new.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/new/new"],{"44f2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[t._l(t.list,function(e,n){return i("block",{key:n},[i("view",{staticClass:"card"},[e.text?i("view",{staticClass:"car-title-view"},[i("rich-text",{attrs:{nodes:e.text,mpcomid:"7dade2fe-0-"+n}})],1):t._e(),e.img?i("image",{staticClass:"card-img",attrs:{src:e.img,mode:"widthFix",eventid:"7dade2fe-0-"+n},on:{click:function(i){t.previmg(e.img)}}}):t._e(),e.video?i("video",{attrs:{src:e.video,controls:""}}):t._e(),i("view",{staticClass:"iconbottom"},[i("view",{staticClass:"iconfont icon-appreciate_light",class:e.type&&"like"==e.type?"active":"",attrs:{eventid:"7dade2fe-1-"+n},on:{click:function(i){t.setlike("like",n,e.id)}}},[i("text",[t._v(t._s(e.like))])]),i("view",{staticClass:"icon-oppose_light iconfont",class:e.type&&"hate"==e.type?"active":"",attrs:{eventid:"7dade2fe-2-"+n},on:{click:function(i){t.setlike("hate",n,e.id)}}},[i("text",[t._v(t._s(e.hate))])]),i("view",{staticClass:"icon-pinglun iconfont",attrs:{eventid:"7dade2fe-3-"+n},on:{click:function(i){t.showreply(e.id,n)}}},[i("text",[t._v(t._s(e.replycount?e.replycount:0))])])])])])}),t.loading?i("text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e(),t.showlogin?i("button",{attrs:{"open-type":"getUserInfo",id:"showlogin",type:"warn",eventid:"7dade2fe-4"},on:{getuserinfo:t.login}},[t._v("使用微信登录")]):t._e(),t.showlogin?i("view",{attrs:{id:"mask",eventid:"7dade2fe-5"},on:{click:function(e){t.showlogin=!1}}}):t._e()],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},4810:function(t,e,i){"use strict";i("9e4e");var n=a(i("b0ce")),o=a(i("bc34"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},"876f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("bc1b"));function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}var a={data:function(){return{refreshing:!1,providerList:[],list:[],openid:"",userinfo:"",token:"",fetchPageNum:1,loading:!0,showlogin:!1}},mounted:function(){plus.navigator.closeSplashscreen()},onShow:function(){this.checkstat()},onLoad:function(){console.log("11111111111111111"),this.checkstat(),this.getData()},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){this.refreshing=!0,this.getData()},onShareAppMessage:function(){return{title:"最新最好笑的趣事趣图，来看下吧",path:"/pages/new/new"}},methods:{checkstat:function(){var t=n.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},getData:function(){this.loading=!0;var e=this;console.log(n.default.apiurl+"syj/index/getlist"),t.request({url:n.default.apiurl+"syj/index/getlist",method:"POST",dataType:"json",data:{page:this.refreshing?1:this.fetchPageNum,pagesize:20,status:1,order:"addtime",token:this.token,shebei:n.default.shebei},success:function(i){if(200!==i.statusCode)t.showToast({title:"请求数据失败请重试"+i.statusCode,duration:2e3,icon:"none"});else{if(i.data.data.length<1)return t.showToast({title:"没有了",icon:"none"}),!1;if(e.refreshing&&i.data.data[0].id===e.list[0].id)return t.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void t.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,t.stopPullDownRefresh(),e.list=i.data.data,e.fetchPageNum=2):(e.list=e.list.concat(i.data.data),e.fetchPageNum+=1)}},fail:function(e){console.log(JSON.stringify(e)),t.showToast({title:"请求数据失败请重试1",duration:2e3,icon:"none"})},complete:function(){this.loading=!1},header:{auth:n.default.httpauth}})},showreply:function(e,i){t.setStorage({key:"detail-"+e,data:(0,n.parSetData)(this.list[i])}),t.navigateTo({url:"../detail/detail?id="+e})},setlike:function(t,e,i){n.default.setlike(this,this.list[e],t,i)},previmg:function(e){t.previewImage({urls:[e]})},login:function(t){n.default.logincomm(t,this)}}};e.default=a}).call(this,i("649d")["default"])},8800:function(t,e,i){"use strict";i.r(e);var n=i("876f"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},bc34:function(t,e,i){"use strict";i.r(e);var n=i("44f2"),o=i("8800");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["4810","common/runtime","common/vendor"]]]);
});
require('pages/new/new.js');
__wxRoute = 'pages/hot/hot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/hot/hot.js';

define('pages/hot/hot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hot/hot"],{"0832":function(t,e,i){"use strict";var n=i("d482"),o=i.n(n);o.a},"8cb5":function(t,e,i){"use strict";i.r(e);var n=i("f250"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"94b5":function(t,e,i){"use strict";i("9e4e");var n=a(i("b0ce")),o=a(i("f588"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},b570:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[t._l(t.list,function(e,n){return i("block",{key:n},[i("view",{staticClass:"card"},[e.text?i("view",{staticClass:"car-title-view"},[i("rich-text",{attrs:{nodes:e.text,mpcomid:"512e99d8-0-"+n}})],1):t._e(),e.img?i("image",{staticClass:"card-img",attrs:{src:e.img,mode:"widthFix",eventid:"512e99d8-0-"+n},on:{click:function(i){t.previmg(e.img)}}}):t._e(),e.video?i("video",{attrs:{src:e.video,controls:""}}):t._e(),i("view",{staticClass:"iconbottom"},[i("view",{staticClass:"iconfont icon-appreciate_light",class:e.type&&"like"==e.type?"active":"",attrs:{eventid:"512e99d8-1-"+n},on:{click:function(i){t.setlike("like",n,e.id)}}},[i("text",[t._v(t._s(e.like))])]),i("view",{staticClass:"icon-oppose_light iconfont",class:e.type&&"hate"==e.type?"active":"",attrs:{eventid:"512e99d8-2-"+n},on:{click:function(i){t.setlike("hate",n,e.id)}}},[i("text",[t._v(t._s(e.hate))])]),i("view",{staticClass:"icon-pinglun iconfont",attrs:{eventid:"512e99d8-3-"+n},on:{click:function(i){t.showreply(e.id,n)}}},[i("text",[t._v(t._s(e.replycount?e.replycount:0))])])])])])}),t.loading?i("text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e(),t.showlogin?i("button",{attrs:{"open-type":"getUserInfo",id:"showlogin",type:"warn",eventid:"512e99d8-4"},on:{getuserinfo:t.login}},[t._v("使用微信登录")]):t._e(),t.showlogin?i("view",{attrs:{id:"mask",eventid:"512e99d8-5"},on:{click:function(e){t.showlogin=!1}}}):t._e()],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},d482:function(t,e,i){},f250:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("2f62");var n=o(i("bc1b"));function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}var a={data:function(){return{refreshing:!1,providerList:[],list:[],openid:"",userinfo:"",token:"",fetchPageNum:1,loading:!0,showlogin:!1}},onShow:function(){this.checkstat()},onShareAppMessage:function(){return{title:"最新最好笑的趣事趣图，来看下吧",path:"/pages/hot/hot"}},onLoad:function(){this.checkstat(),this.getData()},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){this.refreshing=!0,this.getData()},methods:{checkstat:function(){var t=n.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},previmg:function(e){t.previewImage({urls:[e]})},showreply:function(e,i){t.setStorage({key:"detail-"+e,data:(0,n.parSetData)(this.list[i])}),t.navigateTo({url:"../detail/detail?id="+e})},getData:function(){var e=this;this.loading=!0,t.request({url:n.default.apiurl+"syj/index/getlist",method:"POST",dataType:"json",data:{page:this.refreshing?1:this.fetchPageNum,pagesize:20,status:1,order:"like",token:this.token,shebei:n.default.shebei},success:function(i){if(200!==i.statusCode)t.showToast({title:"请求数据失败请重试"+i.statusCode,duration:2e3,icon:"none"});else{if(i.data.data.length<1)return t.showToast({title:"没有了",icon:"none"}),!1;if(e.refreshing&&i.data.data[0].id===e.list[0].id)return t.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void t.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,t.stopPullDownRefresh(),e.list=i.data.data,e.fetchPageNum=2):(e.list=e.list.concat(i.data.data),e.fetchPageNum+=1)}},fail:function(e){t.showToast({title:"请求数据失败请重试",duration:2e3,icon:"none"})},complete:function(){this.loading=!1},header:{auth:n.default.httpauth}})},setlike:function(t,e,i){n.default.setlike(this,this.list[e],t,i)},login:function(t){n.default.logincomm(t,this)}}};e.default=a}).call(this,i("649d")["default"])},f588:function(t,e,i){"use strict";i.r(e);var n=i("b570"),o=i("8cb5");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("0832");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["94b5","common/runtime","common/vendor"]]]);
});
require('pages/hot/hot.js');
__wxRoute = 'pages/tougao/tougao';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tougao/tougao.js';

define('pages/tougao/tougao.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tougao/tougao"],{"571f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a")),o=(i("2f62"),n(i("bc1b")));function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};a.get||a.set?Object.defineProperty(e,i,a):e[i]=t[i]}return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,i,a,o,n,s){try{var u=t[n](s),c=u.value}catch(r){return void i(r)}u.done?e(c):Promise.resolve(c).then(a,o)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(a,o){var n=t.apply(e,i);function s(t){u(n,a,o,s,c,"next",t)}function c(t){u(n,a,o,s,c,"throw",t)}s(void 0)})}}var r={data:function(){return{text:"",image:"",imageurl:"",video:"",openid:"",userinfo:"",token:"",showlogin:!1}},onShow:function(){this.checkstat(),this.token||(this.showlogin=!0)},methods:{checkstat:function(){var t=o.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},close:function(t){this[t]=""},chooseImage:function(){var e=c(a.default.mark(function e(){var i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i=this,i.image&&t.showToast({title:"只可上传一张图片,将自动替换为新选择的",icon:"none"}),t.chooseImage({count:1,sizeType:"compressed ",success:function(e){i.image=e.tempFilePaths[0],t.uploadFile({url:o.default.apiurl+"syj/index/upimg",filePath:e.tempFilePaths[0],name:"image",header:{auth:o.default.httpauth},success:function(e){e.data=JSON.parse(e.data),200==e.statusCode&&e.data.code<1?i.imageurl=e.data.imageurl:(t.showToast({title:e.data.msg,icon:"none"}),i.image=i.imageurl="")}})}});case 3:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),send:function(e){if(!this.token)return this.showlogin=!0,!1;if(!this.text&&!this.image&&!this.video)return t.showToast({title:"文字、图片、视频三者至少填写一个",icon:"none"}),!1;t.showLoading({title:"发布中请稍等..."});var i=this;i.video?t.uploadFile({url:o.default.apiurl+"syj/index/tougao",filePath:i.video,name:"video",formData:{text:i.text,image:i.imageurl},header:{auth:o.default.httpauth},success:function(e){"string"===typeof e.data&&(e.data=JSON.parse(e.data)),200==e.statusCode&&e.data.code<1?(t.showToast({title:e.data.msg}),setTimeout(function(){t.hideLoading()},1e3),i.text=i.image=i.video=""):(t.showToast({title:e.data.msg,icon:"none"}),setTimeout(function(){t.hideLoading()},1e3))},fail:function(){t.hideLoading()}}):t.request({url:o.default.apiurl+"syj/index/tougao",method:"POST",data:{text:i.text,image:i.imageurl,token:i.token,shebei:o.default.shebei},success:function(e){200==e.statusCode&&e.data.code<1?(i.text=i.image=i.video="",t.showToast({title:e.data.msg}),setTimeout(function(){t.hideLoading()},1e3)):(t.showToast({title:e.data.msg,icon:"none"}),setTimeout(function(){t.hideLoading()},1e3))},fail:function(){t.hideLoading()},header:{auth:o.default.httpauth}})},chooseVideo:function(){var e=this;t.chooseVideo({sourceType:["album","camera"],success:function(t){e.video=t.tempFilePath}})},login:function(t){o.default.logincomm(t,this)}}};e.default=r}).call(this,i("649d")["default"])},"5e66":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[i("navigator",{attrs:{url:"../../platforms/app-plus/login/login"}},[t.showlogin||!t.token?i("button",{attrs:{id:"showlogin",type:"warn"}},[t._v("请先登录")]):t._e()],1),t.token?i("block",[i("view",{staticClass:"textcontent"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"feedback-textare",attrs:{placeholder:"输入文字内容...",eventid:"21cbad1c-0"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),i("view",{staticClass:"uni-uploader"},[i("view",{staticClass:"uni-uploader-body"},[i("view",{directives:[{name:"show",rawName:"v-show",value:t.image,expression:"image"}],staticClass:"uni-uploader__files"},[i("view",{staticClass:"uni-uploader__file"},[i("view",{staticClass:"iconfont icon-close",attrs:{eventid:"21cbad1c-1"},on:{click:function(e){t.close("image")}}}),i("image",{staticClass:"uni-uploader__img",attrs:{src:t.image,"data-src":t.image}})])]),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"21cbad1c-2"},on:{tap:t.chooseImage}}),i("view",{staticClass:"image-plus-text"},[t._v("只可添加一张图片")])])])]),i("view",{staticClass:"uni-uploader"},[i("view",{staticClass:"uni-uploader-body"},[i("view",{directives:[{name:"show",rawName:"v-show",value:t.video,expression:"video"}],staticClass:"uni-uploader__files"},[i("view",{staticClass:"uni-uploader__file"},[i("view",{staticClass:"iconfont icon-close",attrs:{eventid:"21cbad1c-3"},on:{click:function(e){t.close("video")}}}),i("video",{staticClass:"uni-uploader__video",attrs:{src:t.video}})])]),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"21cbad1c-4"},on:{tap:t.chooseVideo}}),i("view",{staticClass:"image-plus-text"},[t._v("只可添加一部视频")])])])]),i("button",{staticClass:"feedback-submit",attrs:{type:"warn",eventid:"21cbad1c-5"},on:{click:t.send}},[t._v("立即投稿")])],1):t._e()],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},6590:function(t,e,i){},"6d08":function(t,e,i){"use strict";var a=i("6590"),o=i.n(a);o.a},9259:function(t,e,i){"use strict";i.r(e);var a=i("5e66"),o=i("bb9d");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("6d08");var s=i("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},b035:function(t,e,i){"use strict";i("9e4e");var a=n(i("b0ce")),o=n(i("9259"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},bb9d:function(t,e,i){"use strict";i.r(e);var a=i("571f"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a}},[["b035","common/runtime","common/vendor"]]]);
});
require('pages/tougao/tougao.js');
__wxRoute = 'pages/like/like';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/like/like.js';

define('pages/like/like.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/like/like"],{"0980":function(t,e,i){"use strict";i.r(e);var n=i("4bf1"),a=i("3a75");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b9b3");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},2639:function(t,e,i){},"3a75":function(t,e,i){"use strict";i.r(e);var n=i("a9b2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"4bf1":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[t._l(t.list,function(e,n){return i("block",{key:n},[i("view",{staticClass:"card"},[e.text?i("view",{staticClass:"car-title-view"},[i("rich-text",{attrs:{nodes:e.text,mpcomid:"1ea31a1c-0-"+n}})],1):t._e(),e.img?i("image",{staticClass:"card-img",attrs:{src:e.img,mode:"widthFix",eventid:"1ea31a1c-0-"+n},on:{click:function(i){t.previmg(e.img)}}}):t._e(),e.video?i("video",{attrs:{src:e.video,controls:""}}):t._e(),i("view",{staticClass:"iconbottom"},[i("view",{staticClass:"iconfont icon-appreciate_light",class:e.type&&"like"==e.type?"active":"",attrs:{eventid:"1ea31a1c-1-"+n},on:{click:function(i){t.setlike("like",n,e.id)}}},[i("text",[t._v(t._s(e.like))])]),i("view",{staticClass:"icon-oppose_light iconfont",class:e.type&&"hate"==e.type?"active":"",attrs:{eventid:"1ea31a1c-2-"+n},on:{click:function(i){t.setlike("hate",n,e.id)}}},[i("text",[t._v(t._s(e.hate))])]),i("view",{staticClass:"icon-pinglun iconfont",attrs:{eventid:"1ea31a1c-3-"+n},on:{click:function(i){t.showreply(e.id,n)}}},[i("text",[t._v(t._s(e.replycount?e.replycount:0))])])])])])}),t.loading?i("text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e()],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"4c95":function(t,e,i){"use strict";i("9e4e");var n=o(i("b0ce")),a=o(i("0980"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},a9b2:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("2f62");var n=a(i("bc1b"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}var o={data:function(){return{refreshing:!1,providerList:[],list:[],openid:"",token:"",userinfo:"",fetchPageNum:1,loading:!0,showlogin:!1}},onLoad:function(){if(this.checkstat(),!this.token)return t.showToast({title:"请先登录",icon:"none"}),t.redirectTo({url:"../center/center"}),!1;this.getData()},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){this.refreshing=!0,this.getData()},methods:{checkstat:function(){var t=n.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},previmg:function(e){t.previewImage({urls:[e]})},showreply:function(e,i){t.setStorage({key:"detail-"+e,data:(0,n.parSetData)(this.list[i])}),t.navigateTo({url:"../detail/detail?id="+e})},getData:function(){var e=this;this.loading=!0,t.request({url:n.default.apiurl+"syj/index/mylike",method:"POST",dataType:"json",data:{page:this.refreshing?1:this.fetchPageNum,pagesize:20,token:this.token,shebei:n.default.shebei},success:function(i){if(200!==i.statusCode)t.showToast({title:"请求数据失败请重试"+i.statusCode,duration:2e3,icon:"none"});else{if(i.data.data.length<1)return t.showToast({title:"没有了",icon:"none"}),!1;if(e.refreshing&&i.data.data[0].id===e.list[0].id)return t.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void t.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,t.stopPullDownRefresh(),e.list=i.data.data,e.fetchPageNum=2):(e.list=e.list.concat(i.data.data),e.fetchPageNum+=1)}},fail:function(e){t.showToast({title:"请求数据失败请重试",duration:2e3,icon:"none"})},complete:function(){this.loading=!1},header:{auth:n.default.httpauth}})},setlike:function(t,e,i){n.default.setlike(this,this.list[e],t,i)}}};e.default=o}).call(this,i("649d")["default"])},b9b3:function(t,e,i){"use strict";var n=i("2639"),a=i.n(n);a.a}},[["4c95","common/runtime","common/vendor"]]]);
});
require('pages/like/like.js');
__wxRoute = 'pages/center/center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/center/center.js';

define('pages/center/center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"0720":function(t,e,n){"use strict";n("9e4e");var i=o(n("b0ce")),a=o(n("3838"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},1841:function(t,e,n){},1993:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("a34a")),a=o(n("bc1b"));function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,o,s){try{var r=t[o](s),c=r.value}catch(l){return void n(l)}r.done?e(c):Promise.resolve(c).then(i,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)})}}var l={data:function(){return{avatarUrl:"../../static/logo.png",openid:"",token:"",userinfo:"",appusername:""}},onShow:function(){this.checkstat()},methods:{toggleavatar:function(){var e=c(i.default.mark(function e(){var n,o=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.token){e.next=3;break}return t.navigateTo({url:"/platforms/app-plus/login/login"}),e.abrupt("return",!1);case 3:n=this,t.chooseImage({count:1,sizeType:"compressed ",success:function(e){n.image=e.tempFilePaths[0],t.showLoading({title:"上传中",icon:"none"}),t.uploadFile({url:a.default.apiurl+"syj/index/setavatar",filePath:e.tempFilePaths[0],name:"image",header:{auth:a.default.httpauth},success:function(e){e.data=JSON.parse(e.data),200==e.statusCode&&e.data.code<1?(o.$set(n.userinfo,"avatar",e.data.imageurl),t.setStorageSync("userinfo",(0,a.parSetData)(n.userinfo))):t.showToast({title:e.data.msg,icon:"none"})},complete:function(){t.hideLoading()}})}});case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),gologinpage:function(){t.navigateTo({url:"/platforms/app-plus/login/login"})},tougao:function(){t.switchTab({url:"../tag/tag"})},gobind:function(){if(this.token&&!this.appusername)return t.navigateTo({url:"/platforms/mp-weixin/login/login"}),!1},my:function(){if(!this.token)return t.showToast({title:"请先登录",icon:"none"}),!1;t.navigateTo({url:"../my/my"})},checkstat:function(){var t=a.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token,this.appusername=t.appusername},logout:function(){this.openid="",this.userinfo="",this.token="",this.appusername="",t.removeStorageSync("wxopenid"),t.removeStorageSync("userinfo"),t.removeStorageSync("token"),t.removeStorageSync("appusername")},mylike:function(){if(!this.token)return t.showToast({title:"请先登录",icon:"none"}),!1;t.navigateTo({url:"../list/list"})},login:function(t){a.default.logincomm(t,this)}}};e.default=l}).call(this,n("649d")["default"])},"21ea":function(t,e,n){"use strict";var i=n("1841"),a=n.n(i);a.a},3838:function(t,e,n){"use strict";n.r(e);var i=n("80e1"),a=n("e555");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("21ea");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"80e1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"center"},[n("view",{staticClass:"logo"},[n("image",{staticClass:"logo-img",attrs:{src:t.token?t.userinfo.avatar:t.avatarUrl,eventid:"8276c848-0"},on:{click:t.toggleavatar}}),n("view",{staticClass:"logo-title"},[t.token?n("text",{attrs:{eventid:"8276c848-1"},on:{click:t.toggleavatar}},[t._v("Hi，"+t._s(t.userinfo.nickName))]):t._e(),t.token?t._e():n("button",{attrs:{id:"loginbutton",type:"primary",eventid:"8276c848-2"},on:{click:t.gologinpage}},[t._v("用户名登录或注册！")])],1),t.token?t._e():n("text",{staticClass:"go-login navigat-arrow"},[t._v("")])]),n("view",{staticClass:"center-list"},[n("view",{staticClass:"center-list-item border-bottom",attrs:{eventid:"8276c848-3"},on:{click:t.mylike}},[n("text",{staticClass:"list-icon iconfont icon-zans"}),n("text",{staticClass:"list-text"},[t._v("我喜欢的")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])]),n("view",{staticClass:"center-list-item border-bottom",attrs:{eventid:"8276c848-4"},on:{click:t.my}},[n("text",{staticClass:"list-icon iconfont icon-listview"}),n("text",{staticClass:"list-text"},[t._v("我发布的")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])]),n("view",{staticClass:"center-list-item border-bottom",attrs:{eventid:"8276c848-5"},on:{click:t.tougao}},[n("text",{staticClass:"list-icon iconfont icon-edit"}),n("text",{staticClass:"list-text"},[t._v("立即投稿")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])])]),t.token?n("view",{staticClass:"center-list",attrs:{eventid:"8276c848-6"},on:{click:t.logout}},[t._m(0)]):t._e()])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"center-list-item"},[n("text",{staticClass:"list-icon iconfont icon-jinzhide"}),n("text",{staticClass:"list-text"},[t._v("退出登录")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e555:function(t,e,n){"use strict";n.r(e);var i=n("1993"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["0720","common/runtime","common/vendor"]]]);
});
require('pages/center/center.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"244e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("2f62");var n=a(i("bc1b"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}var o={data:function(){return{refreshing:!1,providerList:[],list:[],openid:"",userinfo:"",token:"",fetchPageNum:1,loading:!0}},onLoad:function(){if(this.checkstat(),!this.token)return t.showToast({title:"请先登录",icon:"none"}),t.switchTab({url:"../center/center"}),!1;this.getData()},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){this.refreshing=!0,this.getData()},methods:{checkstat:function(){var t=n.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},previmg:function(e){t.previewImage({urls:[e]})},showreply:function(e,i){t.setStorage({key:"detail-"+e,data:(0,n.parSetData)(this.list[i])}),t.navigateTo({url:"../detail/detail?id="+e})},getData:function(){var e=this;this.loading=!0,t.request({url:n.default.apiurl+"syj/index/mytougao",method:"POST",dataType:"json",data:{page:this.refreshing?1:this.fetchPageNum,pagesize:20,order:"addtime",token:this.token,shebei:n.default.shebei},success:function(i){if(200!==i.statusCode)t.showToast({title:"请求数据失败请重试"+i.statusCode,duration:2e3,icon:"none"});else{if(i.data.data.length<1)return t.showToast({title:"没有了",icon:"none"}),!1;e.list=e.list.concat(i.data.data),e.fetchPageNum+=1}},fail:function(e){t.showToast({title:"请求数据失败请重试",duration:2e3,icon:"none"})},complete:function(){this.loading=!1},header:{auth:n.default.httpauth}})}}};e.default=o}).call(this,i("649d")["default"])},"85fd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[t._l(t.list,function(e,n){return i("block",{key:n},[i("view",{staticClass:"card"},[e.text?i("view",{staticClass:"car-title-view"},[i("rich-text",{attrs:{nodes:e.text,mpcomid:"4380f27c-0-"+n}})],1):t._e(),e.img?i("image",{staticClass:"card-img",attrs:{src:e.img,mode:"widthFix",eventid:"4380f27c-0-"+n},on:{click:function(i){t.previmg(e.img)}}}):t._e(),e.video?i("video",{attrs:{src:e.video,controls:""}}):t._e(),i("view",{staticClass:"iconbottom"},[1!=e.status?i("view",{staticClass:"active iconfont"},[i("text",[t._v(t._s(e.status<1?"审核中":"未通过"))])]):t._e(),i("view",{staticClass:"iconfont icon-appreciate_light"},[i("text",[t._v(t._s(e.like))])]),i("view",{staticClass:"icon-oppose_light iconfont"},[i("text",[t._v(t._s(e.hate))])]),i("view",{staticClass:"icon-pinglun iconfont",attrs:{eventid:"4380f27c-1-"+n},on:{click:function(i){t.showreply(e.id,n)}}},[i("text",[t._v(t._s(e.replycount?e.replycount:0))])])])])])}),t.loading?i("text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e()],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},ac69:function(t,e,i){"use strict";i.r(e);var n=i("244e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},b138:function(t,e,i){"use strict";i("9e4e");var n=o(i("b0ce")),a=o(i("b2b7"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},b2b7:function(t,e,i){"use strict";i.r(e);var n=i("85fd"),a=i("ac69");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("e6e1");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},c14d:function(t,e,i){},e6e1:function(t,e,i){"use strict";var n=i("c14d"),a=i.n(n);a.a}},[["b138","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'platforms/app-plus/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'platforms/app-plus/login/login.js';

define('platforms/app-plus/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["platforms/app-plus/login/login"],{"5a21":function(t,e,a){"use strict";a.r(e);var o=a("c2d7"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},"81dc":function(t,e,a){"use strict";a("9e4e");var o=s(a("b0ce")),n=s(a("bf5d"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},bf5d:function(t,e,a){"use strict";a.r(e);var o=a("ce7b"),n=a("5a21");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("dc9e");var i=a("2877"),r=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},c2d7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("bc1b"));function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};o.get||o.set?Object.defineProperty(e,a,o):e[a]=t[a]}return e.default=t,e}var s={data:function(){return{account:"",password:"",password2:"",token:"",type:"login"}},methods:{toggle:function(){this.type="login"==this.type?"reg":"login"},gopwd:function(){t.showModal({title:"未绑定手机，无法找回密码",confirmText:"知道了",content:"请联系客服处理,客服email: 2867557054@qq.com",success:function(t){}})},bindLogin:function(){if(this.account.length<5||this.account.length>12)t.showToast({icon:"none",title:"账号长度必须为5-12个字符"});else if(this.password.length<6||this.password.length>18)t.showToast({icon:"none",title:"密码长度必须为6-18个字符"});else{t.showLoading({title:"登录中",icon:"none"});var e={username:this.account,password:this.password,shebei:o.default.shebei};t.request({url:o.default.apiurl+"syj/index/loginbyname",method:"POST",data:e,success:function(e){200==e.statusCode&&e.data.code<1?(t.setStorageSync("userinfo",(0,o.parSetData)(e.data.data)),t.setStorageSync("token",(0,o.parSetData)(e.data.token)),t.switchTab({url:"/pages/center/center"})):(t.showToast({title:e.data.msg,icon:"none"}),setTimeout(function(){t.hideLoading()},1e3))},complete:function(){t.hideLoading()},header:{auth:o.default.httpauth}})}},bindReg:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password==this.password2){t.showLoading({title:"注册中",icon:"none"});var e={username:this.account,password:this.password,shebei:o.default.shebei};t.request({url:o.default.apiurl+"syj/index/reg",method:"POST",data:e,success:function(e){200==e.statusCode&&e.data.code<1?(t.setStorageSync("userinfo",(0,o.parSetData)(e.data.data)),t.setStorageSync("token",(0,o.parSetData)(e.data.token)),t.switchTab({url:"/pages/center/center"})):(t.showToast({title:e.data.msg,icon:"none"}),setTimeout(function(){t.hideLoading()},1e3))},complete:function(){t.hideLoading()},header:{auth:o.default.httpauth}})}else t.showToast({icon:"none",title:"两次密码不同"})}},onLoad:function(){}};e.default=s}).call(this,a("649d")["default"])},ce7b:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},["login"==t.type?a("block",[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("账号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入你的账号",eventid:"a060af9e-0"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入你的密码",eventid:"a060af9e-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("view",{staticClass:"btn-row"},[a("button",{attrs:{type:"warn",eventid:"a060af9e-2"},on:{tap:t.bindLogin}},[t._v("立即登录")])],1)]):t._e(),"reg"==t.type?a("block",[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("用户名：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"长度5-12个字符",eventid:"a060af9e-3"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"长度6-18个字符",eventid:"a060af9e-4"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("确认密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"text",password:"true",placeholder:"请再次输入密码",eventid:"a060af9e-5"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})])]),a("view",{staticClass:"btn-row"},[a("button",{attrs:{type:"warn",eventid:"a060af9e-6"},on:{tap:t.bindReg}},[t._v(t._s("login"==t.type?"立即登录":"注册帐号"))])],1)]):t._e(),a("view",{staticClass:"action-row"},[a("text",{attrs:{eventid:"a060af9e-7"},on:{click:t.toggle}},[t._v(t._s("login"==t.type?"注册账号":"已有帐号直接登录"))]),a("text",{attrs:{eventid:"a060af9e-8"},on:{tap:t.gopwd}},[t._v("忘记密码")])])],1)},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},dc01:function(t,e,a){},dc9e:function(t,e,a){"use strict";var o=a("dc01"),n=a.n(o);n.a}},[["81dc","common/runtime","common/vendor"]]]);
});
require('platforms/app-plus/login/login.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"71a5":function(t,e,i){"use strict";i("9e4e");var a=s(i("b0ce")),n=s(i("f503"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},"75e1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[i("view",{staticClass:"card"},[t.data.text?i("view",{staticClass:"car-title-view"},[i("rich-text",{attrs:{nodes:t.data.text,mpcomid:"269b2f48-0"}})],1):t._e(),t.data.img?i("image",{staticClass:"card-img",attrs:{src:t.data.img,mode:"widthFix",eventid:"269b2f48-0"},on:{click:function(e){t.previmg(t.data.img)}}}):t._e(),t.data.video?i("video",{attrs:{src:t.data.video,controls:""}}):t._e(),i("view",{staticClass:"iconbottom"},[i("view",{staticClass:"iconfont icon-appreciate_light",class:t.data.type&&"like"==t.data.type?"active":"",attrs:{eventid:"269b2f48-1"},on:{click:function(e){t.setlike("like",0,t.data.id)}}},[i("text",[t._v(t._s(t.data.like))])]),i("view",{staticClass:"icon-oppose_light iconfont",class:t.data.type&&"hate"==t.data.type?"active":"",attrs:{eventid:"269b2f48-2"},on:{click:function(e){t.setlike("hate",0,t.data.id)}}},[i("text",[t._v(t._s(t.data.hate))])])])]),t.loading?i("text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e(),i("view",{staticClass:"section"},[i("form",{attrs:{eventid:"269b2f48-4"},on:{submit:t.send}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"期待你的神评论",eventid:"269b2f48-3"},domProps:{value:t.text},on:{focus:t.checklogin,input:function(e){e.target.composing||(t.text=e.target.value)}}}),i("button",{attrs:{"form-type":"submit",size:"mini"}},[t._v("发表评论")])],1)],1),t.replylist.length?i("view",{staticClass:"uni-list"},t._l(t.replylist,function(e,a){return i("view",{key:a,staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-media-list"},[i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-bottom"},[i("image",{staticClass:"uni-media-list-logo",attrs:{src:e.avatar?e.avatar:"../../static/logo.png"}}),i("text",[t._v(t._s(e.nickName))]),i("text",[t._v("评论于"+t._s(e.pubtime))])]),i("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.text))])])])])})):t._e(),t.showlogin?i("button",{attrs:{"open-type":"getUserInfo",id:"showlogin",type:"warn",eventid:"269b2f48-5"},on:{getuserinfo:t.login}},[t._v("使用微信登录")]):t._e(),t.showlogin?i("view",{attrs:{id:"mask",eventid:"269b2f48-6"},on:{click:function(e){t.showlogin=!1}}}):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"7c9c":function(t,e,i){},aba6:function(t,e,i){"use strict";i.r(e);var a=i("ea9f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},b8d6:function(t,e,i){"use strict";var a=i("7c9c"),n=i.n(a);n.a},ea9f:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("2f62");var a=n(i("bc1b"));function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};a.get||a.set?Object.defineProperty(e,i,a):e[i]=t[i]}return e.default=t,e}var s={data:function(){return{data:{},detailDec:"",text:"",id:"",showlogin:!1,replylist:[],fetchPageNum:1,openid:"",token:"",userinfo:"",loading:!0}},onShow:function(){this.checkstat(),this.fetchPageNum=1,this.getData(this.id)},onLoad:function(e){this.id=e.id;var i=this;t.getStorage({key:"detail-"+this.id,success:function(e){i.data=(0,a.parGetData)(e.data);var n=i.data.text;n&&(n=n.replace(/<*?>/gi,"").substr(0,12),i.detailDec=n,t.setNavigationBarTitle({title:n}))},complete:function(){this.loading=!1}})},onShareAppMessage:function(){return{title:this.detailDec?this.detailDec:"最新最好笑的趣事趣图，来看下吧",path:"/pages/detail/detail?id="+this.id}},methods:{checkstat:function(){var t=a.default.checklogin();this.openid=t.openid,this.userinfo=t.userinfo,this.token=t.token},checklogin:function(){return!!this.token||(t.showModal({title:"请登录",content:"请登录后继续操作",confirmText:"去登录",success:function(e){if(e.confirm)return t.navigateTo({url:"/platforms/app-plus/login/login"}),!1}}),!1)},send:function(e){if(!this.checklogin())return!1;if(!this.text)return t.showToast({title:"请输入评论内容",icon:"none"}),!1;var i=this;i.replylist.unshift({text:this.text,avatar:this.userinfo.avatarUrl,nickName:this.userinfo.nickName,pubtime:"刚刚"}),t.request({url:a.default.apiurl+"syj/index/setpinglun",method:"POST",data:{text:i.text,id:i.id,token:i.token,shebei:a.default.shebei},success:function(e){200==e.statusCode&&e.data.code<1?(i.text="",t.showToast({title:"审核后显示"}),setTimeout(function(){t.hideLoading()},1e3)):(t.showToast({title:e.data.msg,icon:"none"}),setTimeout(function(){t.hideLoading()},1e3))},fail:function(){t.hideLoading()},complete:function(){this.loading=!1},header:{auth:a.default.httpauth}})},setlike:function(t,e,i){a.default.setlike(this,this.data,t,i)},previmg:function(e){t.previewImage({urls:[e]})},onReachBottom:function(){this.getData(this.id)},getData:function(e){var i=this;i.loading=!0,t.request({url:a.default.apiurl+"syj/index/getpinglun",method:"POST",dataType:"json",data:{page:i.fetchPageNum,pagesize:20,order:"addtime",id:i.id,token:i.token,shebei:a.default.shebei},success:function(e){if(i.loading=!1,200!==e.statusCode)t.showToast({title:"请求数据失败请重试"+e.statusCode,duration:2e3,icon:"none"});else{if(i.fetchPageNum<2);else if(e.data.replylist.length<1)return t.showToast({title:"没有更多评论了",icon:"none"}),!1;i.replylist=i.replylist.concat(e.data.replylist),i.fetchPageNum+=1}},fail:function(e){t.showToast({title:"请求数据失败请重试",duration:2e3,icon:"none"})},complete:function(){i.loading=!1},header:{auth:a.default.httpauth}})},login:function(t){a.default.logincomm(t,this)}}};e.default=s}).call(this,i("649d")["default"])},f503:function(t,e,i){"use strict";i.r(e);var a=i("75e1"),n=i("aba6");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("b8d6");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["71a5","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');

