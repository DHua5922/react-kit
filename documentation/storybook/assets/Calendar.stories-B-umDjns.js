import{j as l}from"./jsx-runtime-DFAAy_2V.js";import{r as M}from"./index-Bc2G9s8g.js";import{u as D}from"./styled-components.browser.esm-BWXllbBW.js";import{L as he}from"./LiveCodeBlock-DYl2xIvc.js";const fe=6048e5,pe=864e5,U=Symbol.for("constructDateFrom");function g(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&U in t?t[U](e):t instanceof Date?new t.constructor(e):new Date(e)}function h(t,e){return g(e||t,t)}function X(t,e,n){const a=h(t,n==null?void 0:n.in);return isNaN(e)?g((n==null?void 0:n.in)||t,NaN):(e&&a.setDate(a.getDate()+e),a)}function $(t,e,n){const a=h(t,n==null?void 0:n.in);if(isNaN(e))return g((n==null?void 0:n.in)||t,NaN);if(!e)return a;const r=a.getDate(),o=g((n==null?void 0:n.in)||t,a.getTime());o.setMonth(a.getMonth()+e+1,0);const s=o.getDate();return r>=s?o:(a.setFullYear(o.getFullYear(),o.getMonth(),r),a)}let ve={};function F(){return ve}function P(t,e){var i,d,u,f;const n=F(),a=(e==null?void 0:e.weekStartsOn)??((d=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,r=h(t,e==null?void 0:e.in),o=r.getDay(),s=(o<a?7:0)+o-a;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}function Y(t,e){return P(t,{...e,weekStartsOn:1})}function me(t,e){const n=h(t,e==null?void 0:e.in),a=n.getFullYear(),r=g(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=Y(r),s=g(n,0);s.setFullYear(a,0,4),s.setHours(0,0,0,0);const i=Y(s);return n.getTime()>=o.getTime()?a+1:n.getTime()>=i.getTime()?a:a-1}function K(t){const e=h(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function G(t,...e){const n=g.bind(null,t||e.find(a=>typeof a=="object"));return e.map(n)}function Z(t,e){const n=h(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function ke(t,e,n){const[a,r]=G(n==null?void 0:n.in,t,e),o=Z(a),s=Z(r),i=+o-K(o),d=+s-K(s);return Math.round((i-d)/pe)}function _e(t,e){const n=me(t,e),a=g(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),Y(a)}function Oe(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Pe(t){return!(!Oe(t)&&typeof t!="number"||isNaN(+h(t)))}function ye(t,e){const n=h(t,e==null?void 0:e.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}function We(t,e){const[n,a]=G(t,e.start,e.end);return{start:n,end:a}}function ge(t,e){const{start:n,end:a}=We(e==null?void 0:e.in,t);let r=+n>+a;const o=r?+n:+a,s=r?a:n;s.setHours(0,0,0,0);let i=(e==null?void 0:e.step)??1;if(!i)return[];i<0&&(i=-i,r=!r);const d=[];for(;+s<=o;)d.push(g(n,s)),s.setDate(s.getDate()+i),s.setHours(0,0,0,0);return r?d.reverse():d}function we(t,e){const n=h(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Se(t,e){const n=h(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ye={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Te=(t,e,n)=>{let a;const r=Ye[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function I(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Ne={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ee={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ie={date:I({formats:Ne,defaultWidth:"full"}),time:I({formats:Fe,defaultWidth:"full"}),dateTime:I({formats:Ee,defaultWidth:"full"})},je={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qe=(t,e,n,a)=>je[t];function _(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,i=n!=null&&n.width?String(n.width):s;r=t.formattingValues[i]||t.formattingValues[s]}else{const s=t.defaultWidth,i=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[i]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return r[o]}}const He={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Le={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Re={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Be={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ae={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qe=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Xe={ordinalNumber:Qe,era:_({values:He,defaultWidth:"wide"}),quarter:_({values:Le,defaultWidth:"wide",argumentCallback:t=>t-1}),month:_({values:Re,defaultWidth:"wide"}),day:_({values:Be,defaultWidth:"wide"}),dayPeriod:_({values:Ve,defaultWidth:"wide",formattingValues:Ae,defaultFormattingWidth:"wide"})};function O(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const s=o[0],i=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(i)?Ge(i,w=>w.test(s)):$e(i,w=>w.test(s));let u;u=t.valueCallback?t.valueCallback(d):d,u=n.valueCallback?n.valueCallback(u):u;const f=e.slice(s.length);return{value:u,rest:f}}}function $e(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ge(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Je(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const i=e.slice(r.length);return{value:s,rest:i}}}const ze=/^(\d+)(th|st|nd|rd)?/i,Ue=/\d+/i,Ke={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ze={any:[/^b/i,/^(a|c)/i]},et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},tt={any:[/1/i,/2/i,/3/i,/4/i]},nt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},at={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ot={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},st={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},it={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ct={ordinalNumber:Je({matchPattern:ze,parsePattern:Ue,valueCallback:t=>parseInt(t,10)}),era:O({matchPatterns:Ke,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any"}),quarter:O({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:O({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any"}),day:O({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:st,defaultMatchWidth:"any",parsePatterns:it,defaultParseWidth:"any"})},dt={code:"en-US",formatDistance:Te,formatLong:Ie,formatRelative:qe,localize:Xe,match:ct,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ut(t,e){const n=h(t,e==null?void 0:e.in);return ke(n,Se(n))+1}function lt(t,e){const n=h(t,e==null?void 0:e.in),a=+Y(n)-+_e(n);return Math.round(a/fe)+1}function be(t,e){var f,w,b,k;const n=h(t,e==null?void 0:e.in),a=n.getFullYear(),r=F(),o=(e==null?void 0:e.firstWeekContainsDate)??((w=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(b=r.locale)==null?void 0:b.options)==null?void 0:k.firstWeekContainsDate)??1,s=g((e==null?void 0:e.in)||t,0);s.setFullYear(a+1,0,o),s.setHours(0,0,0,0);const i=P(s,e),d=g((e==null?void 0:e.in)||t,0);d.setFullYear(a,0,o),d.setHours(0,0,0,0);const u=P(d,e);return+n>=+i?a+1:+n>=+u?a:a-1}function ht(t,e){var i,d,u,f;const n=F(),a=(e==null?void 0:e.firstWeekContainsDate)??((d=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,r=be(t,e),o=g((e==null?void 0:e.in)||t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),P(o,e)}function ft(t,e){const n=h(t,e==null?void 0:e.in),a=+P(n,e)-+ht(n,e);return Math.round(a/fe)+1}function c(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const C={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return c(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return c(r,e.length)}},p={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ee={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return C.y(t,e)},Y:function(t,e,n,a){const r=be(t,a),o=r>0?r:1-r;if(e==="YY"){const s=o%100;return c(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=me(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return c(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return c(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return C.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return c(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=ft(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},I:function(t,e,n){const a=lt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):C.d(t,e)},D:function(t,e,n){const a=ut(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):c(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return c(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=p.noon:a===0?r=p.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=p.evening:a>=12?r=p.afternoon:a>=4?r=p.morning:r=p.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return C.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):C.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):C.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):C.s(t,e)},S:function(t,e){return C.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return ne(a);case"XXXX":case"XX":return x(a);case"XXXXX":case"XXX":default:return x(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return ne(a);case"xxxx":case"xx":return x(a);case"xxxxx":case"xxx":default:return x(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+te(a,":");case"OOOO":default:return"GMT"+x(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+te(a,":");case"zzzz":default:return"GMT"+x(a,":")}},t:function(t,e,n){const a=Math.trunc(+t/1e3);return c(a,e.length)},T:function(t,e,n){return c(+t,e.length)}};function te(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return o===0?n+String(r):n+String(r)+e+c(o,2)}function ne(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):x(t,e)}function x(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=c(Math.trunc(a/60),2),o=c(a%60,2);return n+r+e+o}const ae=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ce=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},mt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return ae(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",ae(a,e)).replace("{{time}}",Ce(r,e))},yt={p:Ce,P:mt},gt=/^D+$/,wt=/^Y+$/,bt=["D","DD","YY","YYYY"];function Ct(t){return gt.test(t)}function Dt(t){return wt.test(t)}function xt(t,e,n){const a=Mt(t,e,n);if(console.warn(a),bt.includes(t))throw new RangeError(a)}function Mt(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const pt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,kt=/^'([^]*?)'?$/,_t=/''/g,Ot=/[a-zA-Z]/;function J(t,e,n){var f,w,b,k;const a=F(),r=a.locale??dt,o=a.firstWeekContainsDate??((w=(f=a.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??1,s=a.weekStartsOn??((k=(b=a.locale)==null?void 0:b.options)==null?void 0:k.weekStartsOn)??0,i=h(t,n==null?void 0:n.in);if(!Pe(i))throw new RangeError("Invalid time value");let d=e.match(vt).map(y=>{const m=y[0];if(m==="p"||m==="P"){const E=yt[m];return E(y,r.formatLong)}return y}).join("").match(pt).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const m=y[0];if(m==="'")return{isToken:!1,value:Pt(y)};if(ee[m])return{isToken:!0,value:y};if(m.match(Ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:y}});r.localize.preprocessor&&(d=r.localize.preprocessor(i,d));const u={firstWeekContainsDate:o,weekStartsOn:s,locale:r};return d.map(y=>{if(!y.isToken)return y.value;const m=y.value;(Dt(m)||Ct(m))&&xt(m,e,String(t));const E=ee[m[0]];return E(i,m,r.localize,u)}).join("")}function Pt(t){const e=t.match(kt);return e?e[1].replace(_t,"'"):t}function q(t,e){return h(t,e==null?void 0:e.in).getDay()}function De(t,e,n){const[a,r]=G(n==null?void 0:n.in,t,e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function xe(t,e,n){return X(t,-e,n)}function Me(t,e,n){return $(t,-e,n)}const v=M.createContext({value:new Date,onChange:()=>{},currentMonth:new Date,setCurrentMonth:()=>{}});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function H({children:t,value:e,onChange:n,...a}){const[r,o]=M.useState(e);return l.jsx(v.Provider,{value:{value:e,onChange:n,currentMonth:r,setCurrentMonth:o},children:l.jsx("div",{...a,children:t},J(r,"yyyy-MM"))})}try{H.displayName="Calendar",H.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}}}}}catch{}const Wt=D.div`
  width: 14.28%;
`,St=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${t=>t.$backgroundColor};
  padding: 8px;
`,Yt=D.div`
  color: ${t=>t.$color};
  opacity: ${t=>t.$opacity};
`,j=Object.assign(Wt,{Number:St,Value:Yt});function T({children:t,value:e,onClick:n,textStyle:a,...r}){const{currentMonth:o,value:s,onChange:i}=M.useContext(v),d=s&&s.getFullYear()===e.getFullYear()&&s.getMonth()===e.getMonth()&&s.getDate()===e.getDate(),u=De(e,o);return l.jsx(j,{children:l.jsx(j.Number,{$backgroundColor:u&&d?"#0d6efd":"transparent",onClick:()=>{u&&(i(e),n&&n(e))},...r,children:l.jsx(j.Value,{$color:d&&u?"#ffffff":"#000000",$opacity:u?1:.25,style:a,children:t||J(e,"d")})})})}try{T.displayName="CalendarDay",T.__docgenInfo={description:"",displayName:"CalendarDay",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: Date) => void) | undefined"}},textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const Tt=D.div`
  display: flex;
  flex-wrap: wrap;
`;function L({children:t,...e}){const{currentMonth:n}=M.useContext(v);function a(){const r=we(n),o=ye(r),s=ge({start:r,end:o}),i=q(r),d=q(o),u=new Array(i).fill(null).map((w,b)=>xe(r,i-b)),f=new Array(6-d).fill(null).map((w,b)=>X(o,b+1));return u.concat(s,f)}return l.jsx(Tt,{...e,children:t||a().map((r,o)=>l.jsx(T,{value:r},o))})}try{L.displayName="CalendarDays",L.__docgenInfo={description:"",displayName:"CalendarDays",props:{}}}catch{}const Nt=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;function R({children:t,...e}){return l.jsx(Nt,{...e,children:t})}try{R.displayName="CalendarHeader",R.__docgenInfo={description:"",displayName:"CalendarHeader",props:{}}}catch{}function B({children:t,onPress:e,...n}){const{currentMonth:a,setCurrentMonth:r}=M.useContext(v);return l.jsx("div",{onClick:()=>{const o=Me(a,1);r(o),e&&e(o)},...n,children:t||l.jsx("div",{children:"◀"})})}try{B.displayName="CalendarLeft",B.__docgenInfo={description:"",displayName:"CalendarLeft",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}function V({children:t,onPress:e,...n}){const{currentMonth:a,setCurrentMonth:r}=M.useContext(v);return l.jsx("div",{onClick:()=>{const o=$(a,1);r(o),e&&e(o)},...n,children:t||l.jsx("div",{children:"▶"})})}try{V.displayName="CalendarRight",V.__docgenInfo={description:"",displayName:"CalendarRight",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const Ft=D.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 16px;
`;function A({children:t,...e}){const{currentMonth:n}=M.useContext(v);return l.jsx(Ft,{...e,children:t||J(n,"MMMM yyyy")})}try{A.displayName="CalendarTitle",A.__docgenInfo={description:"",displayName:"CalendarTitle",props:{}}}catch{}const Et=D.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  color: #757575;
`;function N({children:t,...e}){return l.jsx(Et,{...e,children:t})}try{N.displayName="CalendarWeekday",N.__docgenInfo={description:"",displayName:"CalendarWeekday",props:{}}}catch{}const It=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],jt=D.div`
  display: flex;
`;function Q({children:t,...e}){return l.jsx(jt,{...e,children:t||It.map(n=>l.jsx(N,{children:n},n))})}try{Q.displayName="CalendarWeekdays",Q.__docgenInfo={description:"",displayName:"CalendarWeekdays",props:{}}}catch{}const z=Object.assign(H,{Day:T,Days:L,Header:R,Left:B,Right:V,Title:A,Weekday:N,Weekdays:Q}),re=`function Example() {
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

render(<Example />)`,oe=`
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
              {'<'}
            </Calendar.Left>

            <Calendar.Title>
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </Calendar.Title>

            <Calendar.Right
              onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              {'>'}
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

  render(<Example />)`,Bt={title:"Components/Calendar",component:z,tags:["autodocs"],parameters:{layout:"centered"}},W={args:{value:new Date(2026,2,26),onChange:()=>{}},parameters:{layout:"padded",docs:{source:{code:re}}},render:()=>l.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:l.jsx(he,{title:"Calendar Live Playground",code:re,editorHeight:"360px",noInline:!0,scope:{Calendar:z}})})},S={args:{value:new Date(2026,2,26),onChange:()=>{}},parameters:{layout:"padded",docs:{source:{code:oe}}},render:()=>l.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:l.jsx(he,{title:"Calendar Live Playground",code:oe,editorHeight:"360px",noInline:!0,scope:{Calendar:z,addDays:X,addMonths:$,endOfMonth:ye,eachDayOfInterval:ge,getDay:q,isSameMonth:De,startOfMonth:we,subDays:xe,subMonths:Me}})})};var se,ie,ce;W.parameters={...W.parameters,docs:{...(se=W.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {}
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: basicCalendarCode
      }
    }
  },
  render: () => <div style={{
    maxWidth: 1080,
    margin: '0 auto'
  }}>
      <LiveCodeBlock title="Calendar Live Playground" code={basicCalendarCode} editorHeight="360px" noInline scope={{
      Calendar
    }} />
    </div>
}`,...(ce=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,le;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {}
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: customCalendarCode
      }
    }
  },
  render: () => <div style={{
    maxWidth: 1080,
    margin: '0 auto'
  }}>
      <LiveCodeBlock title="Calendar Live Playground" code={customCalendarCode} editorHeight="360px" noInline scope={{
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
    </div>
}`,...(le=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};const Vt=["BasicCalendar","CustomCalendar"];export{W as BasicCalendar,S as CustomCalendar,Vt as __namedExportsOrder,Bt as default};
