import{j as l}from"./jsx-runtime-DiklIkkE.js";import{r as f}from"./index-DRjF_FHU.js";import{L as de}from"./index-Do02Yr6G.js";const ue=6048e5,De=864e5,J=Symbol.for("constructDateFrom");function w(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&J in n?n[J](e):n instanceof Date?new n.constructor(e):new Date(e)}function h(n,e){return w(e||n,n)}function V(n,e,t){const a=h(n,t==null?void 0:t.in);return isNaN(e)?w((t==null?void 0:t.in)||n,NaN):(e&&a.setDate(a.getDate()+e),a)}function A(n,e,t){const a=h(n,t==null?void 0:t.in);if(isNaN(e))return w((t==null?void 0:t.in)||n,NaN);if(!e)return a;const r=a.getDate(),o=w((t==null?void 0:t.in)||n,a.getTime());o.setMonth(a.getMonth()+e+1,0);const s=o.getDate();return r>=s?o:(a.setFullYear(o.getFullYear(),o.getMonth(),r),a)}let Me={};function T(){return Me}function P(n,e){var i,c,d,m;const t=T(),a=(e==null?void 0:e.weekStartsOn)??((c=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,r=h(n,e==null?void 0:e.in),o=r.getDay(),s=(o<a?7:0)+o-a;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}function W(n,e){return P(n,{...e,weekStartsOn:1})}function le(n,e){const t=h(n,e==null?void 0:e.in),a=t.getFullYear(),r=w(t,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=W(r),s=w(t,0);s.setFullYear(a,0,4),s.setHours(0,0,0,0);const i=W(s);return t.getTime()>=o.getTime()?a+1:t.getTime()>=i.getTime()?a:a-1}function z(n){const e=h(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Q(n,...e){const t=w.bind(null,n||e.find(a=>typeof a=="object"));return e.map(t)}function U(n,e){const t=h(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function _e(n,e,t){const[a,r]=Q(t==null?void 0:t.in,n,e),o=U(a),s=U(r),i=+o-z(o),c=+s-z(s);return Math.round((i-c)/De)}function xe(n,e){const t=le(n,e),a=w(n,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),W(a)}function ke(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ve(n){return!(!ke(n)&&typeof n!="number"||isNaN(+h(n)))}function fe(n,e){const t=h(n,e==null?void 0:e.in),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function pe(n,e){const[t,a]=Q(n,e.start,e.end);return{start:t,end:a}}function he(n,e){const{start:t,end:a}=pe(e==null?void 0:e.in,n);let r=+t>+a;const o=r?+t:+a,s=r?a:t;s.setHours(0,0,0,0);let i=(e==null?void 0:e.step)??1;if(!i)return[];i<0&&(i=-i,r=!r);const c=[];for(;+s<=o;)c.push(w(t,s)),s.setDate(s.getDate()+i),s.setHours(0,0,0,0);return r?c.reverse():c}function me(n,e){const t=h(n,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Oe(n,e){const t=h(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=(n,e,t)=>{let a;const r=Se[n];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+a:a+" ago":a};function E(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const We={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ye={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Te={date:E({formats:We,defaultWidth:"full"}),time:E({formats:Ne,defaultWidth:"full"}),dateTime:E({formats:Ye,defaultWidth:"full"})},Fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ee=(n,e,t,a)=>Fe[n];function v(n){return(e,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let r;if(a==="formatting"&&n.formattingValues){const s=n.defaultFormattingWidth||n.defaultWidth,i=t!=null&&t.width?String(t.width):s;r=n.formattingValues[i]||n.formattingValues[s]}else{const s=n.defaultWidth,i=t!=null&&t.width?String(t.width):n.defaultWidth;r=n.values[i]||n.values[s]}const o=n.argumentCallback?n.argumentCallback(e):e;return r[o]}}const Ie={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},je={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},qe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Re={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$e={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},He={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Le=(n,e)=>{const t=Number(n),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Be={ordinalNumber:Le,era:v({values:Ie,defaultWidth:"wide"}),quarter:v({values:je,defaultWidth:"wide",argumentCallback:n=>n-1}),month:v({values:qe,defaultWidth:"wide"}),day:v({values:Re,defaultWidth:"wide"}),dayPeriod:v({values:$e,defaultWidth:"wide",formattingValues:He,defaultFormattingWidth:"wide"})};function p(n){return(e,t={})=>{const a=t.width,r=a&&n.matchPatterns[a]||n.matchPatterns[n.defaultMatchWidth],o=e.match(r);if(!o)return null;const s=o[0],i=a&&n.parsePatterns[a]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(i)?Ae(i,b=>b.test(s)):Ve(i,b=>b.test(s));let d;d=n.valueCallback?n.valueCallback(c):c,d=t.valueCallback?t.valueCallback(d):d;const m=e.slice(s.length);return{value:d,rest:m}}}function Ve(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function Ae(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function Qe(n){return(e,t={})=>{const a=e.match(n.matchPattern);if(!a)return null;const r=a[0],o=e.match(n.parsePattern);if(!o)return null;let s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;const i=e.slice(r.length);return{value:s,rest:i}}}const Xe=/^(\d+)(th|st|nd|rd)?/i,Ge=/\d+/i,Je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ue={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ke={any:[/1/i,/2/i,/3/i,/4/i]},Ze={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},et={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},at={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:Qe({matchPattern:Xe,parsePattern:Ge,valueCallback:n=>parseInt(n,10)}),era:p({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:p({matchPatterns:Ue,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any",valueCallback:n=>n+1}),month:p({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),day:p({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:at,defaultMatchWidth:"any",parsePatterns:rt,defaultParseWidth:"any"})},st={code:"en-US",formatDistance:Pe,formatLong:Te,formatRelative:Ee,localize:Be,match:ot,options:{weekStartsOn:0,firstWeekContainsDate:1}};function it(n,e){const t=h(n,e==null?void 0:e.in);return _e(t,Oe(t))+1}function ct(n,e){const t=h(n,e==null?void 0:e.in),a=+W(t)-+xe(t);return Math.round(a/ue)+1}function ye(n,e){var m,b,x,k;const t=h(n,e==null?void 0:e.in),a=t.getFullYear(),r=T(),o=(e==null?void 0:e.firstWeekContainsDate)??((b=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(x=r.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)??1,s=w((e==null?void 0:e.in)||n,0);s.setFullYear(a+1,0,o),s.setHours(0,0,0,0);const i=P(s,e),c=w((e==null?void 0:e.in)||n,0);c.setFullYear(a,0,o),c.setHours(0,0,0,0);const d=P(c,e);return+t>=+i?a+1:+t>=+d?a:a-1}function dt(n,e){var i,c,d,m;const t=T(),a=(e==null?void 0:e.firstWeekContainsDate)??((c=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,r=ye(n,e),o=w((e==null?void 0:e.in)||n,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),P(o,e)}function ut(n,e){const t=h(n,e==null?void 0:e.in),a=+P(t,e)-+dt(t,e);return Math.round(a/ue)+1}function u(n,e){const t=n<0?"-":"",a=Math.abs(n).toString().padStart(e,"0");return t+a}const C={y(n,e){const t=n.getFullYear(),a=t>0?t:1-t;return u(e==="yy"?a%100:a,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):u(t+1,2)},d(n,e){return u(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return u(n.getHours()%12||12,e.length)},H(n,e){return u(n.getHours(),e.length)},m(n,e){return u(n.getMinutes(),e.length)},s(n,e){return u(n.getSeconds(),e.length)},S(n,e){const t=e.length,a=n.getMilliseconds(),r=Math.trunc(a*Math.pow(10,t-3));return u(r,e.length)}},M={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},K={G:function(n,e,t){const a=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(a,{width:"abbreviated"});case"GGGGG":return t.era(a,{width:"narrow"});case"GGGG":default:return t.era(a,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const a=n.getFullYear(),r=a>0?a:1-a;return t.ordinalNumber(r,{unit:"year"})}return C.y(n,e)},Y:function(n,e,t,a){const r=ye(n,a),o=r>0?r:1-r;if(e==="YY"){const s=o%100;return u(s,2)}return e==="Yo"?t.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(n,e){const t=le(n);return u(t,e.length)},u:function(n,e){const t=n.getFullYear();return u(t,e.length)},Q:function(n,e,t){const a=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return t.ordinalNumber(a,{unit:"quarter"});case"QQQ":return t.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(a,{width:"wide",context:"formatting"})}},q:function(n,e,t){const a=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return t.ordinalNumber(a,{unit:"quarter"});case"qqq":return t.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(a,{width:"wide",context:"standalone"})}},M:function(n,e,t){const a=n.getMonth();switch(e){case"M":case"MM":return C.M(n,e);case"Mo":return t.ordinalNumber(a+1,{unit:"month"});case"MMM":return t.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(a,{width:"wide",context:"formatting"})}},L:function(n,e,t){const a=n.getMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return t.ordinalNumber(a+1,{unit:"month"});case"LLL":return t.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(a,{width:"wide",context:"standalone"})}},w:function(n,e,t,a){const r=ut(n,a);return e==="wo"?t.ordinalNumber(r,{unit:"week"}):u(r,e.length)},I:function(n,e,t){const a=ct(n);return e==="Io"?t.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):C.d(n,e)},D:function(n,e,t){const a=it(n);return e==="Do"?t.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(n,e,t){const a=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(a,{width:"short",context:"formatting"});case"EEEE":default:return t.day(a,{width:"wide",context:"formatting"})}},e:function(n,e,t,a){const r=n.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(n,e,t,a){const r=n.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(n,e,t){const a=n.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return u(r,e.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(a,{width:"short",context:"formatting"});case"iiii":default:return t.day(a,{width:"wide",context:"formatting"})}},a:function(n,e,t){const r=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){const a=n.getHours();let r;switch(a===12?r=M.noon:a===0?r=M.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,e,t){const a=n.getHours();let r;switch(a>=17?r=M.evening:a>=12?r=M.afternoon:a>=4?r=M.morning:r=M.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let a=n.getHours()%12;return a===0&&(a=12),t.ordinalNumber(a,{unit:"hour"})}return C.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):C.H(n,e)},K:function(n,e,t){const a=n.getHours()%12;return e==="Ko"?t.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(n,e,t){let a=n.getHours();return a===0&&(a=24),e==="ko"?t.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):C.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):C.s(n,e)},S:function(n,e){return C.S(n,e)},X:function(n,e,t){const a=n.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return ee(a);case"XXXX":case"XX":return D(a);case"XXXXX":case"XXX":default:return D(a,":")}},x:function(n,e,t){const a=n.getTimezoneOffset();switch(e){case"x":return ee(a);case"xxxx":case"xx":return D(a);case"xxxxx":case"xxx":default:return D(a,":")}},O:function(n,e,t){const a=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z(a,":");case"OOOO":default:return"GMT"+D(a,":")}},z:function(n,e,t){const a=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z(a,":");case"zzzz":default:return"GMT"+D(a,":")}},t:function(n,e,t){const a=Math.trunc(+n/1e3);return u(a,e.length)},T:function(n,e,t){return u(+n,e.length)}};function Z(n,e=""){const t=n>0?"-":"+",a=Math.abs(n),r=Math.trunc(a/60),o=a%60;return o===0?t+String(r):t+String(r)+e+u(o,2)}function ee(n,e){return n%60===0?(n>0?"-":"+")+u(Math.abs(n)/60,2):D(n,e)}function D(n,e=""){const t=n>0?"-":"+",a=Math.abs(n),r=u(Math.trunc(a/60),2),o=u(a%60,2);return t+r+e+o}const te=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ge=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},lt=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],a=t[1],r=t[2];if(!r)return te(n,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",te(a,e)).replace("{{time}}",ge(r,e))},ft={p:ge,P:lt},ht=/^D+$/,mt=/^Y+$/,yt=["D","DD","YY","YYYY"];function gt(n){return ht.test(n)}function wt(n){return mt.test(n)}function bt(n,e,t){const a=Ct(n,e,t);if(console.warn(a),yt.includes(n))throw new RangeError(a)}function Ct(n,e,t){const a=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_t=/^'([^]*?)'?$/,xt=/''/g,kt=/[a-zA-Z]/;function X(n,e,t){var m,b,x,k;const a=T(),r=a.locale??st,o=a.firstWeekContainsDate??((b=(m=a.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,s=a.weekStartsOn??((k=(x=a.locale)==null?void 0:x.options)==null?void 0:k.weekStartsOn)??0,i=h(n,t==null?void 0:t.in);if(!ve(i))throw new RangeError("Invalid time value");let c=e.match(Mt).map(g=>{const y=g[0];if(y==="p"||y==="P"){const F=ft[y];return F(g,r.formatLong)}return g}).join("").match(Dt).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const y=g[0];if(y==="'")return{isToken:!1,value:vt(g)};if(K[y])return{isToken:!0,value:g};if(y.match(kt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:g}});r.localize.preprocessor&&(c=r.localize.preprocessor(i,c));const d={firstWeekContainsDate:o,weekStartsOn:s,locale:r};return c.map(g=>{if(!g.isToken)return g.value;const y=g.value;(wt(y)||gt(y))&&bt(y,e,String(n));const F=K[y[0]];return F(i,y,r.localize,d)}).join("")}function vt(n){const e=n.match(_t);return e?e[1].replace(xt,"'"):n}function I(n,e){return h(n,e==null?void 0:e.in).getDay()}function we(n,e,t){const[a,r]=Q(t==null?void 0:t.in,n,e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function be(n,e,t){return V(n,-e,t)}function Ce(n,e,t){return A(n,-e,t)}const pt={value:new Date,onChange:()=>{},currentMonth:new Date,setCurrentMonth:()=>{}},_=f.createContext(pt);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const j=f.forwardRef(function({children:e,value:t,onChange:a,...r},o){const[s,i]=f.useState(t),c={value:t,onChange:a,currentMonth:s,setCurrentMonth:i};return l.jsx(_.Provider,{value:c,children:l.jsx("div",{ref:o,...r,children:e},X(s,"yyyy-MM"))})});try{j.displayName="Calendar",j.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}}}}}catch{}const Ot="_container_uyjbu_1",St="_number_uyjbu_8",ne={container:Ot,number:St};function Pt(n,e){const{currentMonth:t,value:a,onChange:r}=f.useContext(_),o=a&&a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate(),s=we(n,t);return{isChosen:o,isInCurrentMonth:s,handleDayNumberClick:()=>{s&&(r(n),e&&e(n))}}}const N=f.forwardRef(function({className:e="",children:t,value:a,onClick:r,style:o,...s},i){const{isChosen:c,isInCurrentMonth:d,handleDayNumberClick:m}=Pt(a,r),b={backgroundColor:d&&c?"#0d6efd":"transparent",color:c&&d?"#ffffff":"#000000",opacity:d?1:.25,cursor:c?"default":"pointer",...o};return l.jsx("div",{className:`${ne.container} ${e}`,children:l.jsx("button",{ref:i,type:"button",className:ne.number,...s,onClick:m,style:b,children:t||X(a,"d")})})});try{N.displayName="CalendarDay",N.__docgenInfo={description:"",displayName:"CalendarDay",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: Date) => void) | undefined"}}}}}catch{}const Wt="_container_6phwy_1",Nt={container:Wt};function Yt(n){const e=me(n),t=fe(e),a=he({start:e,end:t}),r=I(e),o=I(t),s=new Array(r).fill(null).map((c,d)=>be(e,r-d)),i=new Array(6-o).fill(null).map((c,d)=>V(t,d+1));return s.concat(a,i)}const q=f.forwardRef(function({children:e,className:t="",...a},r){const{currentMonth:o}=f.useContext(_);return l.jsx("div",{ref:r,className:`${Nt.container} ${t}`,...a,children:e||l.jsx(Tt,{currentMonth:o})})});function Tt({currentMonth:n}){return Yt(n).map((t,a)=>l.jsx(N,{value:t},a))}try{q.displayName="CalendarDays",q.__docgenInfo={description:"",displayName:"CalendarDays",props:{}}}catch{}const Ft="_container_11a2r_1",Et={container:Ft},R=f.forwardRef(function({children:e,className:t="",...a},r){return l.jsx("div",{ref:r,className:`${Et.container} ${t}`,...a,children:e})});try{R.displayName="CalendarHeader",R.__docgenInfo={description:"",displayName:"CalendarHeader",props:{}}}catch{}const It="_container_1fiyd_1",jt={container:It},$=f.forwardRef(function({children:e,onClick:t,className:a="",...r},o){const{currentMonth:s,setCurrentMonth:i}=f.useContext(_),c=()=>{const d=Ce(s,1);i(d),t&&t(d)};return l.jsx("button",{ref:o,type:"button",onClick:c,className:`${jt.container} ${a}`,...r,children:e||l.jsx("div",{children:"◀"})})});try{$.displayName="CalendarLeft",$.__docgenInfo={description:"",displayName:"CalendarLeft",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const qt="_container_1fiyd_1",Rt={container:qt},H=f.forwardRef(function({children:e,onClick:t,className:a="",...r},o){const{currentMonth:s,setCurrentMonth:i}=f.useContext(_),c=()=>{const d=A(s,1);i(d),t&&t(d)};return l.jsx("button",{ref:o,type:"button",onClick:c,className:`${Rt.container} ${a}`,...r,children:e||l.jsx("div",{children:"▶"})})});try{H.displayName="CalendarRight",H.__docgenInfo={description:"",displayName:"CalendarRight",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const $t="_container_efdnd_1",Ht={container:$t},L=f.forwardRef(function({children:e,className:t="",...a},r){const{currentMonth:o}=f.useContext(_);return l.jsx("div",{ref:r,className:`${Ht.container} ${t}`,...a,children:e||X(o,"MMMM yyyy")})});try{L.displayName="CalendarTitle",L.__docgenInfo={description:"",displayName:"CalendarTitle",props:{}}}catch{}const Lt="_container_x8whq_1",Bt={container:Lt},Y=f.forwardRef(function({children:e,className:t="",...a},r){return l.jsx("div",{ref:r,className:`${Bt.container} ${t}`,...a,children:e})});try{Y.displayName="CalendarWeekday",Y.__docgenInfo={description:"",displayName:"CalendarWeekday",props:{}}}catch{}const Vt="_container_1865v_1",At={container:Vt},Qt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],B=f.forwardRef(function({children:e,className:t="",...a},r){return l.jsx("div",{ref:r,className:`${At.container} ${t}`,...a,children:e||Qt.map(o=>l.jsx(Y,{children:o},o))})});try{B.displayName="CalendarWeekdays",B.__docgenInfo={description:"",displayName:"CalendarWeekdays",props:{}}}catch{}const G=Object.assign(j,{Day:N,Days:q,Header:R,Left:$,Right:H,Title:L,Weekday:Y,Weekdays:B}),Xt=`function Example() {
  const [value, setValue] = React.useState(new Date(2026, 2, 26))

  const containerStyle = {
    width: 360,
    padding: 20,
    border: '1px solid #e2e8f0',
    borderRadius: 16,
    background: '#ffffff',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
  }

  const headerStyle = {
    justifyContent: 'space-between'
  }

  const directionButtonStyle = {
    cursor: 'pointer'
  }

  const weekdaysStyle = {
    marginBottom: 12
  }

  const daysStyle = {
    flexWrap: 'wrap',
    rowGap: 12
  }

  return (
    <div style={containerStyle}>
      <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={headerStyle}>
          <Calendar.Left style={directionButtonStyle}>
            ◀
          </Calendar.Left>

          <Calendar.Title />

          <Calendar.Right style={directionButtonStyle}>
            ▶
          </Calendar.Right>
        </Calendar.Header>

        <Calendar.Weekdays style={weekdaysStyle} />

        <Calendar.Days style={daysStyle} />
      </Calendar>
    </div>
  )
}

render(<Example />)`,Gt=`
  function Example() {
    const [chosenDate, setChosenDate] = React.useState(new Date())
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ]

    function getDatesInMonth() {
      const firstDay = startOfMonth(currentMonth)
      const lastDay = endOfMonth(firstDay)
      const allDaysInMonth = eachDayOfInterval({
        start: firstDay,
        end: lastDay,
      })

      // Determine the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
      const firstDayIndex = getDay(firstDay)

      // Determine the weekday index of the last day of the month
      const lastDayIndex = getDay(lastDay)

      // Calculate the number of days to add before and after the current month to complete the week
      const daysBefore = new Array(firstDayIndex)
        .fill(null)
        .map((_, index) => subDays(firstDay, firstDayIndex - index))
      const daysAfter = new Array(6 - lastDayIndex)
        .fill(null)
        .map((_, index) => addDays(lastDay, index + 1))

      // Concatenate the arrays with days before, days of the month, and days after
      return daysBefore.concat(allDaysInMonth, daysAfter)
    }

    return (
      <div
        style={{
          width: 360,
          padding: 20,
          border: '1px solid #e2e8f0',
          borderRadius: 16,
          background: '#ffffff',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
        }}
      >
        <Calendar value={chosenDate} onChange={(date) => setChosenDate(date)}>
          <Calendar.Header>
            <Calendar.Left
              onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              ◀
            </Calendar.Left>

            <Calendar.Title>
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </Calendar.Title>

            <Calendar.Right
              onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              ▶
            </Calendar.Right>
          </Calendar.Header>

          <Calendar.Weekdays>
            {weekdays.map((weekday) => (
              <Calendar.Weekday key={weekday}>{weekday}</Calendar.Weekday>
            ))}
          </Calendar.Weekdays>

          <Calendar.Days>
            {getDatesInMonth().map((date) => {
              const isChosen =
                chosenDate &&
                chosenDate.getFullYear() === date.getFullYear() &&
                chosenDate.getMonth() === date.getMonth() &&
                chosenDate.getDate() === date.getDate()

              return (
                <Calendar.Day
                  value={date}
                  onClick={(date) => setChosenDate(date)}
                  key={date.toISOString()}
                  style={{
                    backgroundColor:
                      isSameMonth(date, currentMonth) && isChosen
                        ? 'lightblue'
                        : 'transparent',
                  }}
                  textStyle={{ color: '#000000' }}
                >
                  {date.getDate()}
                </Calendar.Day>
              )
            })}
          </Calendar.Days>
        </Calendar>
      </div>
    )
  }

  render(<Example />)`,Jt={title:"Components/Calendar",component:G,tags:["!autodocs"],parameters:{layout:"fullscreen"},args:{value:new Date(2026,2,26),onChange:()=>{}}},O={tags:["!dev"],render:()=>l.jsx(de,{code:Xt,noInline:!0,scope:{Calendar:G}})},S={tags:["!dev"],render:()=>l.jsx(de,{code:Gt,noInline:!0,scope:{Calendar:G,addDays:V,addMonths:A,endOfMonth:fe,eachDayOfInterval:he,getDay:I,isSameMonth:we,startOfMonth:me,subDays:be,subMonths:Ce}})};var ae,re,oe;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={basicCalendarCode} noInline scope={{
    Calendar
  }} />
}`,...(oe=(re=O.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={customCalendarCode} noInline scope={{
    Calendar,
    addDays,
    addMonths,
    endOfMonth,
    eachDayOfInterval,
    getDay,
    isSameMonth,
    startOfMonth,
    subDays,
    subMonths
  }} />
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const zt=["BasicCalendar","CustomCalendar"],en=Object.freeze(Object.defineProperty({__proto__:null,BasicCalendar:O,CustomCalendar:S,__namedExportsOrder:zt,default:Jt},Symbol.toStringTag,{value:"Module"}));export{O as B,S as C,en as S,G as a,$ as b,H as c,N as d};
