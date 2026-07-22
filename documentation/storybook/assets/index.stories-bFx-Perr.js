import{j as l}from"./jsx-runtime-DiklIkkE.js";import{r as D}from"./index-DRjF_FHU.js";import{L as ue}from"./index-QgfrSyUJ.js";const de=6048e5,De=864e5,J=Symbol.for("constructDateFrom");function g(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&J in t?t[J](e):t instanceof Date?new t.constructor(e):new Date(e)}function h(t,e){return g(e||t,t)}function V(t,e,n){const a=h(t,n==null?void 0:n.in);return isNaN(e)?g((n==null?void 0:n.in)||t,NaN):(e&&a.setDate(a.getDate()+e),a)}function A(t,e,n){const a=h(t,n==null?void 0:n.in);if(isNaN(e))return g((n==null?void 0:n.in)||t,NaN);if(!e)return a;const r=a.getDate(),o=g((n==null?void 0:n.in)||t,a.getTime());o.setMonth(a.getMonth()+e+1,0);const s=o.getDate();return r>=s?o:(a.setFullYear(o.getFullYear(),o.getMonth(),r),a)}let Me={};function T(){return Me}function P(t,e){var i,u,d,m;const n=T(),a=(e==null?void 0:e.weekStartsOn)??((u=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,r=h(t,e==null?void 0:e.in),o=r.getDay(),s=(o<a?7:0)+o-a;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}function W(t,e){return P(t,{...e,weekStartsOn:1})}function le(t,e){const n=h(t,e==null?void 0:e.in),a=n.getFullYear(),r=g(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=W(r),s=g(n,0);s.setFullYear(a,0,4),s.setHours(0,0,0,0);const i=W(s);return n.getTime()>=o.getTime()?a+1:n.getTime()>=i.getTime()?a:a-1}function z(t){const e=h(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Q(t,...e){const n=g.bind(null,t||e.find(a=>typeof a=="object"));return e.map(n)}function U(t,e){const n=h(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function _e(t,e,n){const[a,r]=Q(n==null?void 0:n.in,t,e),o=U(a),s=U(r),i=+o-z(o),u=+s-z(s);return Math.round((i-u)/De)}function xe(t,e){const n=le(t,e),a=g(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),W(a)}function ke(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ve(t){return!(!ke(t)&&typeof t!="number"||isNaN(+h(t)))}function he(t,e){const n=h(t,e==null?void 0:e.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}function pe(t,e){const[n,a]=Q(t,e.start,e.end);return{start:n,end:a}}function fe(t,e){const{start:n,end:a}=pe(e==null?void 0:e.in,t);let r=+n>+a;const o=r?+n:+a,s=r?a:n;s.setHours(0,0,0,0);let i=(e==null?void 0:e.step)??1;if(!i)return[];i<0&&(i=-i,r=!r);const u=[];for(;+s<=o;)u.push(g(n,s)),s.setDate(s.getDate()+i),s.setHours(0,0,0,0);return r?u.reverse():u}function me(t,e){const n=h(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Oe(t,e){const n=h(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=(t,e,n)=>{let a;const r=Se[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function E(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const We={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ye={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Te={date:E({formats:We,defaultWidth:"full"}),time:E({formats:Ne,defaultWidth:"full"}),dateTime:E({formats:Ye,defaultWidth:"full"})},Fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ee=(t,e,n,a)=>Fe[t];function v(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,i=n!=null&&n.width?String(n.width):s;r=t.formattingValues[i]||t.formattingValues[s]}else{const s=t.defaultWidth,i=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[i]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return r[o]}}const Ie={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},je={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},qe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},$e={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},He={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Le={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Be=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Re={ordinalNumber:Be,era:v({values:Ie,defaultWidth:"wide"}),quarter:v({values:je,defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:qe,defaultWidth:"wide"}),day:v({values:$e,defaultWidth:"wide"}),dayPeriod:v({values:He,defaultWidth:"wide",formattingValues:Le,defaultFormattingWidth:"wide"})};function p(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const s=o[0],i=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(i)?Ae(i,w=>w.test(s)):Ve(i,w=>w.test(s));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;const m=e.slice(s.length);return{value:d,rest:m}}}function Ve(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ae(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Qe(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const i=e.slice(r.length);return{value:s,rest:i}}}const Xe=/^(\d+)(th|st|nd|rd)?/i,Ge=/\d+/i,Je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ue={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ke={any:[/1/i,/2/i,/3/i,/4/i]},Ze={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},et={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},at={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:Qe({matchPattern:Xe,parsePattern:Ge,valueCallback:t=>parseInt(t,10)}),era:p({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:p({matchPatterns:Ue,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any",valueCallback:t=>t+1}),month:p({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),day:p({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:at,defaultMatchWidth:"any",parsePatterns:rt,defaultParseWidth:"any"})},st={code:"en-US",formatDistance:Pe,formatLong:Te,formatRelative:Ee,localize:Re,match:ot,options:{weekStartsOn:0,firstWeekContainsDate:1}};function it(t,e){const n=h(t,e==null?void 0:e.in);return _e(n,Oe(n))+1}function ct(t,e){const n=h(t,e==null?void 0:e.in),a=+W(n)-+xe(n);return Math.round(a/de)+1}function ye(t,e){var m,w,x,k;const n=h(t,e==null?void 0:e.in),a=n.getFullYear(),r=T(),o=(e==null?void 0:e.firstWeekContainsDate)??((w=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(x=r.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)??1,s=g((e==null?void 0:e.in)||t,0);s.setFullYear(a+1,0,o),s.setHours(0,0,0,0);const i=P(s,e),u=g((e==null?void 0:e.in)||t,0);u.setFullYear(a,0,o),u.setHours(0,0,0,0);const d=P(u,e);return+n>=+i?a+1:+n>=+d?a:a-1}function ut(t,e){var i,u,d,m;const n=T(),a=(e==null?void 0:e.firstWeekContainsDate)??((u=(i=e==null?void 0:e.locale)==null?void 0:i.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,r=ye(t,e),o=g((e==null?void 0:e.in)||t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),P(o,e)}function dt(t,e){const n=h(t,e==null?void 0:e.in),a=+P(n,e)-+ut(n,e);return Math.round(a/de)+1}function c(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const b={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return c(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return c(r,e.length)}},M={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},K={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,a){const r=ye(t,a),o=r>0?r:1-r;if(e==="YY"){const s=o%100;return c(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=le(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return c(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return c(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return c(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=dt(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},I:function(t,e,n){const a=ct(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){const a=it(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):c(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return c(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=M.noon:a===0?r=M.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=M.evening:a>=12?r=M.afternoon:a>=4?r=M.morning:r=M.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return ee(a);case"XXXX":case"XX":return C(a);case"XXXXX":case"XXX":default:return C(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return ee(a);case"xxxx":case"xx":return C(a);case"xxxxx":case"xxx":default:return C(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z(a,":");case"OOOO":default:return"GMT"+C(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z(a,":");case"zzzz":default:return"GMT"+C(a,":")}},t:function(t,e,n){const a=Math.trunc(+t/1e3);return c(a,e.length)},T:function(t,e,n){return c(+t,e.length)}};function Z(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return o===0?n+String(r):n+String(r)+e+c(o,2)}function ee(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):C(t,e)}function C(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=c(Math.trunc(a/60),2),o=c(a%60,2);return n+r+e+o}const te=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ge=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},lt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return te(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",te(a,e)).replace("{{time}}",ge(r,e))},ht={p:ge,P:lt},ft=/^D+$/,mt=/^Y+$/,yt=["D","DD","YY","YYYY"];function gt(t){return ft.test(t)}function wt(t){return mt.test(t)}function bt(t,e,n){const a=Ct(t,e,n);if(console.warn(a),yt.includes(t))throw new RangeError(a)}function Ct(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_t=/^'([^]*?)'?$/,xt=/''/g,kt=/[a-zA-Z]/;function X(t,e,n){var m,w,x,k;const a=T(),r=a.locale??st,o=a.firstWeekContainsDate??((w=(m=a.locale)==null?void 0:m.options)==null?void 0:w.firstWeekContainsDate)??1,s=a.weekStartsOn??((k=(x=a.locale)==null?void 0:x.options)==null?void 0:k.weekStartsOn)??0,i=h(t,n==null?void 0:n.in);if(!ve(i))throw new RangeError("Invalid time value");let u=e.match(Mt).map(y=>{const f=y[0];if(f==="p"||f==="P"){const F=ht[f];return F(y,r.formatLong)}return y}).join("").match(Dt).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const f=y[0];if(f==="'")return{isToken:!1,value:vt(y)};if(K[f])return{isToken:!0,value:y};if(f.match(kt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:y}});r.localize.preprocessor&&(u=r.localize.preprocessor(i,u));const d={firstWeekContainsDate:o,weekStartsOn:s,locale:r};return u.map(y=>{if(!y.isToken)return y.value;const f=y.value;(wt(f)||gt(f))&&bt(f,e,String(t));const F=K[f[0]];return F(i,f,r.localize,d)}).join("")}function vt(t){const e=t.match(_t);return e?e[1].replace(xt,"'"):t}function I(t,e){return h(t,e==null?void 0:e.in).getDay()}function we(t,e,n){const[a,r]=Q(n==null?void 0:n.in,t,e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function be(t,e,n){return V(t,-e,n)}function Ce(t,e,n){return A(t,-e,n)}const pt={value:new Date,onChange:()=>{},currentMonth:new Date,setCurrentMonth:()=>{}},_=D.createContext(pt);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function j({children:t,value:e,onChange:n,...a}){const[r,o]=D.useState(e),s={value:e,onChange:n,currentMonth:r,setCurrentMonth:o};return l.jsx(_.Provider,{value:s,children:l.jsx("div",{...a,children:t},X(r,"yyyy-MM"))})}try{j.displayName="Calendar",j.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}}}}}catch{}const Ot="_container_uyjbu_1",St="_number_uyjbu_8",ne={container:Ot,number:St};function Pt(t,e){const{currentMonth:n,value:a,onChange:r}=D.useContext(_),o=a&&a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate(),s=we(t,n);return{isChosen:o,isInCurrentMonth:s,handleDayNumberClick:()=>{s&&(r(t),e&&e(t))}}}function N({className:t="",children:e,value:n,onClick:a,style:r,...o}){const{isChosen:s,isInCurrentMonth:i,handleDayNumberClick:u}=Pt(n,a),d={backgroundColor:i&&s?"#0d6efd":"transparent",color:s&&i?"#ffffff":"#000000",opacity:i?1:.25,cursor:s?"default":"pointer",...r};return l.jsx("div",{className:`${ne.container} ${t}`,children:l.jsx("button",{className:ne.number,...o,onClick:u,style:d,children:e||X(n,"d")})})}try{N.displayName="CalendarDay",N.__docgenInfo={description:"",displayName:"CalendarDay",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: Date) => void) | undefined"}}}}}catch{}const Wt="_container_6phwy_1",Nt={container:Wt};function Yt(t){const e=me(t),n=he(e),a=fe({start:e,end:n}),r=I(e),o=I(n),s=new Array(r).fill(null).map((u,d)=>be(e,r-d)),i=new Array(6-o).fill(null).map((u,d)=>V(n,d+1));return s.concat(a,i)}function q({children:t,className:e="",...n}){const{currentMonth:a}=D.useContext(_);return l.jsx("div",{className:`${Nt.container} ${e}`,...n,children:t||l.jsx(Tt,{currentMonth:a})})}function Tt({currentMonth:t}){return Yt(t).map((n,a)=>l.jsx(N,{value:n},a))}try{q.displayName="CalendarDays",q.__docgenInfo={description:"",displayName:"CalendarDays",props:{}}}catch{}const Ft="_container_11a2r_1",Et={container:Ft};function $({children:t,className:e="",...n}){return l.jsx("div",{className:`${Et.container} ${e}`,...n,children:t})}try{$.displayName="CalendarHeader",$.__docgenInfo={description:"",displayName:"CalendarHeader",props:{}}}catch{}const It="_container_1fiyd_1",jt={container:It};function H({children:t,onClick:e,className:n="",...a}){const{currentMonth:r,setCurrentMonth:o}=D.useContext(_),s=()=>{const i=Ce(r,1);o(i),e&&e(i)};return l.jsx("button",{onClick:s,className:`${jt.container} ${n}`,...a,children:t||l.jsx("div",{children:"◀"})})}try{H.displayName="CalendarLeft",H.__docgenInfo={description:"",displayName:"CalendarLeft",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const qt="_container_1fiyd_1",$t={container:qt};function L({children:t,onClick:e,className:n="",...a}){const{currentMonth:r,setCurrentMonth:o}=D.useContext(_),s=()=>{const i=A(r,1);o(i),e&&e(i)};return l.jsx("button",{onClick:s,className:`${$t.container} ${n}`,...a,children:t||l.jsx("div",{children:"▶"})})}try{L.displayName="CalendarRight",L.__docgenInfo={description:"",displayName:"CalendarRight",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((date: Date) => void) | undefined"}}}}}catch{}const Ht="_container_efdnd_1",Lt={container:Ht};function B({children:t,className:e="",...n}){const{currentMonth:a}=D.useContext(_);return l.jsx("div",{className:`${Lt.container} ${e}`,...n,children:t||X(a,"MMMM yyyy")})}try{B.displayName="CalendarTitle",B.__docgenInfo={description:"",displayName:"CalendarTitle",props:{}}}catch{}const Bt="_container_x8whq_1",Rt={container:Bt};function Y({children:t,className:e="",...n}){return l.jsx("div",{className:`${Rt.container} ${e}`,...n,children:t})}try{Y.displayName="CalendarWeekday",Y.__docgenInfo={description:"",displayName:"CalendarWeekday",props:{}}}catch{}const Vt="_container_1865v_1",At={container:Vt},Qt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function R({children:t,className:e="",...n}){return l.jsx("div",{className:`${At.container} ${e}`,...n,children:t||Qt.map(a=>l.jsx(Y,{children:a},a))})}try{R.displayName="CalendarWeekdays",R.__docgenInfo={description:"",displayName:"CalendarWeekdays",props:{}}}catch{}const G=Object.assign(j,{Day:N,Days:q,Header:$,Left:H,Right:L,Title:B,Weekday:Y,Weekdays:R}),Xt=`function Example() {
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

  render(<Example />)`,Jt={title:"Components/Calendar",component:G,tags:["!autodocs"],parameters:{layout:"fullsceen"}},O={tags:["!dev"],render:()=>l.jsx(ue,{code:Xt,noInline:!0,scope:{Calendar:G}})},S={tags:["!dev"],render:()=>l.jsx(ue,{code:Gt,noInline:!0,scope:{Calendar:G,addDays:V,addMonths:A,endOfMonth:he,eachDayOfInterval:fe,getDay:I,isSameMonth:we,startOfMonth:me,subDays:be,subMonths:Ce}})};var ae,re,oe;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const zt=["BasicCalendar","CustomCalendar"],en=Object.freeze(Object.defineProperty({__proto__:null,BasicCalendar:O,CustomCalendar:S,__namedExportsOrder:zt,default:Jt},Symbol.toStringTag,{value:"Module"}));export{O as B,S as C,en as S,j as a,H as b,L as c,N as d};
