import{j as u}from"./jsx-runtime-DFAAy_2V.js";import{r as C,R as ke}from"./index-Bc2G9s8g.js";import{u as M,C as _e,L as Pe}from"./LiveCodeBlock-Ck6Guhcd.js";const ye=6048e5,Oe=864e5,K=Symbol.for("constructDateFrom");function b(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&K in t?t[K](e):t instanceof Date?new t.constructor(e):new Date(e)}function y(t,e){return b(e||t,t)}function $(t,e,n){const a=y(t,n==null?void 0:n.in);return isNaN(e)?b(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function J(t,e,n){const a=y(t,n==null?void 0:n.in);if(isNaN(e))return b(t,NaN);if(!e)return a;const r=a.getDate(),s=b(t,a.getTime());s.setMonth(a.getMonth()+e+1,0);const o=s.getDate();return r>=o?s:(a.setFullYear(s.getFullYear(),s.getMonth(),r),a)}let We={};function H(){return We}function S(t,e){var c,i,l,h;const n=H(),a=(e==null?void 0:e.weekStartsOn)??((i=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:i.weekStartsOn)??n.weekStartsOn??((h=(l=n.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??0,r=y(t,e==null?void 0:e.in),s=r.getDay(),o=(s<a?7:0)+s-a;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function F(t,e){return S(t,{...e,weekStartsOn:1})}function ge(t,e){const n=y(t,e==null?void 0:e.in),a=n.getFullYear(),r=b(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const s=F(r),o=b(n,0);o.setFullYear(a,0,4),o.setHours(0,0,0,0);const c=F(o);return n.getTime()>=s.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function Z(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function z(t,...e){const n=b.bind(null,e.find(a=>typeof a=="object"));return e.map(n)}function ee(t,e){const n=y(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Se(t,e,n){const[a,r]=z(n==null?void 0:n.in,t,e),s=ee(a),o=ee(r),c=+s-Z(s),i=+o-Z(o);return Math.round((c-i)/Oe)}function Ye(t,e){const n=ge(t,e),a=b(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),F(a)}function Te(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ne(t){return!(!Te(t)&&typeof t!="number"||isNaN(+y(t)))}function we(t,e){const n=y(t,e==null?void 0:e.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}function Fe(t,e){const[n,a]=z(t,e.start,e.end);return{start:n,end:a}}function be(t,e){const{start:n,end:a}=Fe(e==null?void 0:e.in,t);let r=+n>+a;const s=r?+n:+a,o=r?a:n;o.setHours(0,0,0,0);let c=1;const i=[];for(;+o<=s;)i.push(b(n,o)),o.setDate(o.getDate()+c),o.setHours(0,0,0,0);return r?i.reverse():i}function De(t,e){const n=y(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function je(t,e){const n=y(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ee={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ie=(t,e,n)=>{let a;const r=Ee[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function q(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const He={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Le={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Re={date:q({formats:He,defaultWidth:"full"}),time:q({formats:qe,defaultWidth:"full"}),dateTime:q({formats:Le,defaultWidth:"full"})},Ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ae=(t,e,n,a)=>Ve[t];function O(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):o;r=t.formattingValues[c]||t.formattingValues[o]}else{const o=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[c]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}const Be={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Qe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Xe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ge={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$e={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Je={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ze=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ue={ordinalNumber:ze,era:O({values:Be,defaultWidth:"wide"}),quarter:O({values:Qe,defaultWidth:"wide",argumentCallback:t=>t-1}),month:O({values:Xe,defaultWidth:"wide"}),day:O({values:Ge,defaultWidth:"wide"}),dayPeriod:O({values:$e,defaultWidth:"wide",formattingValues:Je,defaultFormattingWidth:"wide"})};function W(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;const o=s[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],i=Array.isArray(c)?Ze(c,w=>w.test(o)):Ke(c,w=>w.test(o));let l;l=t.valueCallback?t.valueCallback(i):i,l=n.valueCallback?n.valueCallback(l):l;const h=e.slice(o.length);return{value:l,rest:h}}}function Ke(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ze(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function et(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const c=e.slice(r.length);return{value:o,rest:c}}}const tt=/^(\d+)(th|st|nd|rd)?/i,nt=/\d+/i,at={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rt={any:[/^b/i,/^(a|c)/i]},st={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ot={any:[/1/i,/2/i,/3/i,/4/i]},it={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ut={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ht={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ft={ordinalNumber:et({matchPattern:tt,parsePattern:nt,valueCallback:t=>parseInt(t,10)}),era:W({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),quarter:W({matchPatterns:st,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any",valueCallback:t=>t+1}),month:W({matchPatterns:it,defaultMatchWidth:"wide",parsePatterns:ct,defaultParseWidth:"any"}),day:W({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:dt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:lt,defaultMatchWidth:"any",parsePatterns:ht,defaultParseWidth:"any"})},mt={code:"en-US",formatDistance:Ie,formatLong:Re,formatRelative:Ae,localize:Ue,match:ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};function yt(t,e){const n=y(t,e==null?void 0:e.in);return Se(n,je(n))+1}function gt(t,e){const n=y(t,e==null?void 0:e.in),a=+F(n)-+Ye(n);return Math.round(a/ye)+1}function Ce(t,e){var h,w,D,p;const n=y(t,e==null?void 0:e.in),a=n.getFullYear(),r=H(),s=(e==null?void 0:e.firstWeekContainsDate)??((w=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:w.firstWeekContainsDate)??r.firstWeekContainsDate??((p=(D=r.locale)==null?void 0:D.options)==null?void 0:p.firstWeekContainsDate)??1,o=b((e==null?void 0:e.in)||t,0);o.setFullYear(a+1,0,s),o.setHours(0,0,0,0);const c=S(o,e),i=b((e==null?void 0:e.in)||t,0);i.setFullYear(a,0,s),i.setHours(0,0,0,0);const l=S(i,e);return+n>=+c?a+1:+n>=+l?a:a-1}function wt(t,e){var c,i,l,h;const n=H(),a=(e==null?void 0:e.firstWeekContainsDate)??((i=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:i.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(l=n.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??1,r=Ce(t,e),s=b((e==null?void 0:e.in)||t,0);return s.setFullYear(r,0,a),s.setHours(0,0,0,0),S(s,e)}function bt(t,e){const n=y(t,e==null?void 0:e.in),a=+S(n,e)-+wt(n,e);return Math.round(a/ye)+1}function d(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const x={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return d(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):d(n+1,2)},d(t,e){return d(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return d(t.getHours()%12||12,e.length)},H(t,e){return d(t.getHours(),e.length)},m(t,e){return d(t.getMinutes(),e.length)},s(t,e){return d(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return d(r,e.length)}},_={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},te={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return x.y(t,e)},Y:function(t,e,n,a){const r=Ce(t,a),s=r>0?r:1-r;if(e==="YY"){const o=s%100;return d(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):d(s,e.length)},R:function(t,e){const n=ge(t);return d(n,e.length)},u:function(t,e){const n=t.getFullYear();return d(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return d(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return d(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return x.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return d(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=bt(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):d(r,e.length)},I:function(t,e,n){const a=gt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):d(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):x.d(t,e)},D:function(t,e,n){const a=yt(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):d(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),s=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return d(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),s=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return d(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return d(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=_.noon:a===0?r=_.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=_.evening:a>=12?r=_.afternoon:a>=4?r=_.morning:r=_.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return x.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):x.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):d(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):d(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):x.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):x.s(t,e)},S:function(t,e){return x.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return ae(a);case"XXXX":case"XX":return k(a);case"XXXXX":case"XXX":default:return k(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return ae(a);case"xxxx":case"xx":return k(a);case"xxxxx":case"xxx":default:return k(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ne(a,":");case"OOOO":default:return"GMT"+k(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ne(a,":");case"zzzz":default:return"GMT"+k(a,":")}},t:function(t,e,n){const a=Math.trunc(+t/1e3);return d(a,e.length)},T:function(t,e,n){return d(+t,e.length)}};function ne(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),s=a%60;return s===0?n+String(r):n+String(r)+e+d(s,2)}function ae(t,e){return t%60===0?(t>0?"-":"+")+d(Math.abs(t)/60,2):k(t,e)}function k(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=d(Math.trunc(a/60),2),s=d(a%60,2);return n+r+e+s}const re=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},xe=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Dt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return re(t,e);let s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",re(a,e)).replace("{{time}}",xe(r,e))},Ct={p:xe,P:Dt},xt=/^D+$/,Mt=/^Y+$/,pt=["D","DD","YY","YYYY"];function vt(t){return xt.test(t)}function kt(t){return Mt.test(t)}function _t(t,e,n){const a=Pt(t,e,n);if(console.warn(a),pt.includes(t))throw new RangeError(a)}function Pt(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,St=/^'([^]*?)'?$/,Yt=/''/g,Tt=/[a-zA-Z]/;function U(t,e,n){var h,w,D,p;const a=H(),r=a.locale??mt,s=a.firstWeekContainsDate??((w=(h=a.locale)==null?void 0:h.options)==null?void 0:w.firstWeekContainsDate)??1,o=a.weekStartsOn??((p=(D=a.locale)==null?void 0:D.options)==null?void 0:p.weekStartsOn)??0,c=y(t,n==null?void 0:n.in);if(!Ne(c))throw new RangeError("Invalid time value");let i=e.match(Wt).map(g=>{const m=g[0];if(m==="p"||m==="P"){const v=Ct[m];return v(g,r.formatLong)}return g}).join("").match(Ot).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const m=g[0];if(m==="'")return{isToken:!1,value:Nt(g)};if(te[m])return{isToken:!0,value:g};if(m.match(Tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:g}});r.localize.preprocessor&&(i=r.localize.preprocessor(c,i));const l={firstWeekContainsDate:s,weekStartsOn:o,locale:r};return i.map(g=>{if(!g.isToken)return g.value;const m=g.value;(kt(m)||vt(m))&&_t(m,e,String(t));const v=te[m[0]];return v(c,m,r.localize,l)}).join("")}function Nt(t){const e=t.match(St);return e?e[1].replace(Yt,"'"):t}function j(t,e){return y(t,e==null?void 0:e.in).getDay()}function Me(t,e,n){const[a,r]=z(n==null?void 0:n.in,t,e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function pe(t,e,n){return $(t,-e,n)}function ve(t,e,n){return J(t,-1,n)}const P=C.createContext({value:new Date,onChange:()=>{},currentMonth:new Date,setCurrentMonth:()=>{}});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function R({children:t,value:e,onChange:n,...a}){const[r,s]=C.useState(e);return u.jsx(P.Provider,{value:{value:e,onChange:n,currentMonth:r,setCurrentMonth:s},children:u.jsx("div",{...a,children:t},U(r,"yyyy-MM"))})}try{R.displayName="Calendar",R.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}}}}}catch{}const Ft=M(_e)`
  width: 14.28%;
`,jt=M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${t=>t.$backgroundColor};
  padding: 8px;
`,Et=M.div`
  color: ${t=>t.$color};
  opacity: ${t=>t.$opacity};
`,L=Object.assign(Ft,{Number:jt,Value:Et});function E({children:t,value:e,onClick:n,textStyle:a,...r}){const{currentMonth:s,value:o,onChange:c}=C.useContext(P),i=o&&o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&o.getDate()===e.getDate(),l=Me(e,s);return u.jsx(L,{children:u.jsx(L.Number,{$backgroundColor:l&&i?"#0d6efd":"transparent",onClick:()=>{l&&(c(e),n&&n(e))},...r,children:u.jsx(L.Value,{$color:i&&l?"#ffffff":"#000000",$opacity:l?1:.25,style:a,children:t||U(e,"d")})})})}try{E.displayName="CalendarDay",E.__docgenInfo={description:"",displayName:"CalendarDay",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: Date) => void) | undefined"}},textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const It=M.div`
  display: flex;
  flex-wrap: wrap;
`;function V({children:t,...e}){const{currentMonth:n}=C.useContext(P);function a(){const r=De(n),s=we(r),o=be({start:r,end:s}),c=j(r),i=j(s),l=new Array(c).fill(null).map((w,D)=>pe(r,c-D)),h=new Array(6-i).fill(null).map((w,D)=>$(s,D+1));return l.concat(o,h)}return u.jsx(It,{...e,children:t||a().map((r,s)=>u.jsx(E,{value:r},s))})}try{V.displayName="CalendarDays",V.__docgenInfo={description:"",displayName:"CalendarDays",props:{}}}catch{}const Ht=M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;function A({children:t,...e}){return u.jsx(Ht,{...e,children:t})}try{A.displayName="CalendarHeader",A.__docgenInfo={description:"",displayName:"CalendarHeader",props:{}}}catch{}function B({children:t,onPress:e,...n}){const{currentMonth:a,setCurrentMonth:r}=C.useContext(P);return u.jsx("div",{onClick:()=>{const s=ve(a);r(s),e&&e(s)},...n,children:t||u.jsx("div",{children:"◀"})})}try{B.displayName="CalendarLeft",B.__docgenInfo={description:"",displayName:"CalendarLeft",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}function Q({children:t,onPress:e,...n}){const{currentMonth:a,setCurrentMonth:r}=C.useContext(P);return u.jsx("div",{onClick:()=>{const s=J(a,1);r(s),e&&e(s)},...n,children:t||u.jsx("div",{children:"▶"})})}try{Q.displayName="CalendarRight",Q.__docgenInfo={description:"",displayName:"CalendarRight",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const qt=M.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 16px;
`;function X({children:t,...e}){const{currentMonth:n}=C.useContext(P);return u.jsx(qt,{...e,children:t||U(n,"MMMM yyyy")})}try{X.displayName="CalendarTitle",X.__docgenInfo={description:"",displayName:"CalendarTitle",props:{}}}catch{}const Lt=M.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  color: #757575;
`;function I({children:t,...e}){return u.jsx(Lt,{...e,children:t})}try{I.displayName="CalendarWeekday",I.__docgenInfo={description:"",displayName:"CalendarWeekday",props:{}}}catch{}const Rt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Vt=M.div`
  display: flex;
`;function G({children:t,...e}){return u.jsx(Vt,{...e,children:t||Rt.map(n=>u.jsx(I,{children:n},n))})}try{G.displayName="CalendarWeekdays",G.__docgenInfo={description:"",displayName:"CalendarWeekdays",props:{}}}catch{}const f=Object.assign(R,{Day:E,Days:V,Header:A,Left:B,Right:Q,Title:X,Weekday:I,Weekdays:G}),se=`function Example() {
  const [value, setValue] = React.useState(new Date(2026, 2, 26))

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
      <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={{ justifyContent: 'space-between' }}>
          <Calendar.Left style={{ cursor: 'pointer' }}>◀</Calendar.Left>
          <Calendar.Title />
          <Calendar.Right style={{ cursor: 'pointer' }}>▶</Calendar.Right>
        </Calendar.Header>
        <Calendar.Weekdays style={{ marginBottom: 12 }} />
        <Calendar.Days style={{ flexWrap: 'wrap', rowGap: 12 }} />
      </Calendar>
    </div>
  )
}

render(<Example />)`,Xt={title:"Components/Calendar",component:f,tags:["autodocs"],parameters:{layout:"centered"}},Y={args:{value:new Date(2026,2,26),onChange:()=>{}},render:function(){const[e,n]=ke.useState(new Date(2026,2,26));return u.jsxs(f,{value:e,onChange:n,children:[u.jsxs(f.Header,{style:{justifyContent:"space-between"},children:[u.jsx(f.Left,{style:{cursor:"pointer"}}),u.jsx(f.Title,{}),u.jsx(f.Right,{style:{cursor:"pointer"}})]}),u.jsx(f.Weekdays,{style:{marginBottom:12}}),u.jsx(f.Days,{style:{flexWrap:"wrap",rowGap:12}})]})}},T={args:{value:new Date(2026,2,26),onChange:()=>{}},render:function(){const[e,n]=C.useState(new Date),[a,r]=C.useState(new Date),s=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function c(){const i=De(a),l=we(i),h=be({start:i,end:l}),w=j(i),D=j(l),p=new Array(w).fill(null).map((m,v)=>pe(i,w-v)),g=new Array(6-D).fill(null).map((m,v)=>$(l,v+1));return p.concat(h,g)}return u.jsxs(f,{value:e,onChange:i=>n(i),children:[u.jsxs(f.Header,{children:[u.jsx(f.Left,{onPress:()=>r(ve(a)),children:"<"}),u.jsxs(f.Title,{children:[s[a.getMonth()]," ",a.getFullYear()]}),u.jsx(f.Right,{onPress:()=>r(J(a,1)),children:">"})]}),u.jsx(f.Weekdays,{children:o.map(i=>u.jsx(f.Weekday,{children:i},i))}),u.jsx(f.Days,{children:c().map(i=>{const l=e&&e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth()&&e.getDate()===i.getDate();return u.jsx(f.Day,{value:i,onClick:h=>n(h),style:{backgroundColor:Me(i,a)&&l?"lightblue":"transparent"},textStyle:{color:"#000000"},children:i.getDate()},i.toISOString())})})]})}},N={args:{value:new Date(2026,2,26),onChange:()=>{}},parameters:{layout:"padded",docs:{source:{code:se}}},render:()=>u.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:u.jsx(Pe,{title:"Calendar Live Playground",code:se,editorHeight:"360px",noInline:!0,scope:{Calendar:f}})})};var oe,ie,ce;Y.parameters={...Y.parameters,docs:{...(oe=Y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {}
  },
  render: function DefaultRender() {
    const [value, setValue] = React.useState(new Date(2026, 2, 26));
    return <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={{
        justifyContent: 'space-between'
      }}>
          <Calendar.Left style={{
          cursor: 'pointer'
        }} />
          <Calendar.Title />
          <Calendar.Right style={{
          cursor: 'pointer'
        }} />
        </Calendar.Header>
        <Calendar.Weekdays style={{
        marginBottom: 12
      }} />
        <Calendar.Days style={{
        flexWrap: 'wrap',
        rowGap: 12
      }} />
      </Calendar>;
  }
}`,...(ce=(ie=Y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,le;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {}
  },
  render: function Example() {
    const [chosenDate, setChosenDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function getDatesInMonth() {
      const firstDay = startOfMonth(currentMonth);
      const lastDay = endOfMonth(firstDay);
      const allDaysInMonth = eachDayOfInterval({
        start: firstDay,
        end: lastDay
      });

      // Determine the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
      const firstDayIndex = getDay(firstDay);

      // Determine the weekday index of the last day of the month
      const lastDayIndex = getDay(lastDay);

      // Calculate the number of days to add before and after the current month to complete the week
      const daysBefore = new Array(firstDayIndex).fill(null).map((_, index) => subDays(firstDay, firstDayIndex - index));
      const daysAfter = new Array(6 - lastDayIndex).fill(null).map((_, index) => addDays(lastDay, index + 1));

      // Concatenate the arrays with days before, days of the month, and days after
      return daysBefore.concat(allDaysInMonth, daysAfter);
    }
    return <Calendar value={chosenDate} onChange={date => setChosenDate(date)}>
        <Calendar.Header>
          <Calendar.Left onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            {'<'}
          </Calendar.Left>

          <Calendar.Title>
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Calendar.Title>

          <Calendar.Right onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            {'>'}
          </Calendar.Right>
        </Calendar.Header>

        <Calendar.Weekdays>
          {weekdays.map(weekday => <Calendar.Weekday key={weekday}>{weekday}</Calendar.Weekday>)}
        </Calendar.Weekdays>

        <Calendar.Days>
          {getDatesInMonth().map(date => {
          const isChosen = chosenDate && chosenDate.getFullYear() === date.getFullYear() && chosenDate.getMonth() === date.getMonth() && chosenDate.getDate() === date.getDate();
          return <Calendar.Day value={date} onClick={(date: Date) => setChosenDate(date)} key={date.toISOString()} style={{
            backgroundColor: isSameMonth(date, currentMonth) && isChosen ? 'lightblue' : 'transparent'
          }} textStyle={{
            color: '#000000'
          }}>
                {date.getDate()}
              </Calendar.Day>;
        })}
        </Calendar.Days>
      </Calendar>;
  }
}`,...(le=(de=T.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var he,fe,me;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {}
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: calendarCode
      }
    }
  },
  render: () => <div style={{
    maxWidth: 1080,
    margin: '0 auto'
  }}>
      <LiveCodeBlock title="Calendar Live Playground" code={calendarCode} editorHeight="360px" noInline scope={{
      Calendar
    }} />
    </div>
}`,...(me=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};const Gt=["BasicCalendar","CustomCalendar","LiveExample"];export{Y as BasicCalendar,T as CustomCalendar,N as LiveExample,Gt as __namedExportsOrder,Xt as default};
