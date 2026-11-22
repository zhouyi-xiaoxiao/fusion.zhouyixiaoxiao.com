var Zl={bg:"#06070c",bg2:"#0c0e17",ink:"#f3f1ea",ink2:"#b9b6ad",ink3:"#7d7b76",plasma:"#ff5ac8",plasmaHot:"#ffe3f6",plasmaDeep:"#7a2cff",flux:"#62e4ff",coil:"#ffb454",good:"#8dfc9f",warn:"#ff6b4a",line:"rgba(255,255,255,0.12)",lineStrong:"rgba(255,255,255,0.28)",fontDisplay:'"Fraunces Variable", "Iowan Old Style", Georgia, serif',fontBody:'"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif',fontMono:'"JetBrains Mono Variable", ui-monospace, "SF Mono", Menlo, monospace'},Xl=new Map;function Tm(n){if(Xl.has(n))return Xl.get(n);let t=typeof window<"u"&&window.__TALK_DATA__&&window.__TALK_DATA__[n],e;if(t!==void 0)e=Promise.resolve(t);else{let i=new URL(`data/${n}`,document.baseURI).href;e=fetch(i).then(s=>{if(!s.ok)throw new Error(`data ${n}: HTTP ${s.status}`);return/\.json$/.test(n)?s.json():s.arrayBuffer()})}return Xl.set(n,e),e}var $o=class{constructor(t){this.host=t,this.el=document.createElement("div"),this.el.className="stage",this.el.style.cssText="position:absolute;left:50%;top:50%;width:1600px;height:900px;transform-origin:0 0;",t.appendChild(this.el),this.scale=1,this.listeners=new Set,this.reducedMotion=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this._fit=this._fit.bind(this),window.addEventListener("resize",this._fit),this._fit()}_fit(){let t=this.host.clientWidth||window.innerWidth,e=this.host.clientHeight||window.innerHeight,i=Math.min(t/1600,e/900),s=Math.abs(i-this.scale)>1e-4;this.scale=i;let r=(t-1600*i)/2,o=(e-900*i)/2;this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.style.transform=`scale(${i})`,s&&this.listeners.forEach(a=>a(i))}onScale(t){return this.listeners.add(t),()=>this.listeners.delete(t)}makeCtx(){let t=this;return{get scale(){return t.scale},get dpr(){return Math.min(window.devicePixelRatio||1,2)},get reducedMotion(){return t.reducedMotion},tokens:Zl,data:Tm,fitCanvas(e,i=3){let s=e.clientWidth||parseFloat(e.style.width)||e.width,r=e.clientHeight||parseFloat(e.style.height)||e.height,o=Math.max(1,Math.min(i,(window.devicePixelRatio||1)*t.scale)),a=Math.round(s*o),l=Math.round(r*o);return e.width!==a&&(e.width=a),e.height!==l&&(e.height=l),{w:s,h:r,ratio:o}}}}};var mi={title:"Pixel-perfect was not enough",subtitle:"Score-aware flux-map regression, and what one student built with AI agents",author:"Xiaoxiao Zhouyi",affiliation:"University of Bristol",event:"FusionEC-26 \xB7 NeurIPS 2026 competition workshop \xB7 Atlanta, 12 December 2026",budgetSeconds:900},Se=[{id:"tokamak",layout:"full",title:"The machine",steps:[{variant:"title",k:"Fusion Equilibrium Challenge 2026",h:"Pixel-perfect was <em>not enough</em>",p:"Second place in Challenge 1. Score-aware flux-map regression on DIII-D, a physics inverse for MAST, and what one student built with AI agents.<br><b>Xiaoxiao Zhouyi</b> \xB7 University of Bristol",say:"Good morning. I'm Xiaoxiao Zhouyi, a first-year PhD student at the University of Bristol. I am not a fusion scientist; I study random walks. This was a solo entry. It finished second in Challenge 1, and I built it together with AI agents. I will show you what worked, what failed, and how the agents were actually used.",x:2},{k:"The machine",h:"A magnetic bottle for a <em>star</em>",p:"Charged particles spiral along the field lines. Neutrons do not: in a reactor they carry the energy out.",say:"First, the machine. A tokamak holds a plasma, hotter than the centre of the sun, in a magnetic bottle. Charged particles spiral along the field lines. Neutrons are not confined: in a reactor, they carry the energy out.",x:2},{k:"The machine",h:'Field lines live on <span class="flux">nested surfaces</span>',p:"Cut the torus open: the field lines trace closed surfaces, one inside the other. The outermost closed one is the edge of the plasma.",say:"Cut the torus open, and the field lines trace nested surfaces, like the layers of an onion. These are the flux surfaces. The last closed one is the edge of the plasma.",x:1},{k:"The task",h:'One number per point: <span class="flux">\u03C8</span> on a 65 \xD7 65 grid',p:'The shape of the surfaces is the equilibrium. This map, plus two scalars, <span class="num">q<sub>95</sub></span> and <span class="num">\u03B2<sub>N</sub></span>, for every time slice of every shot.',say:"The shape of those surfaces is the equilibrium. On a sixty-five by sixty-five grid it is one number per point: the poloidal flux, psi. That map, plus two scalars, q ninety-five and beta N, is what we predict, for every time slice of every shot.",x:1}]},{id:"controlroom",layout:"split",title:"Inputs and outputs",steps:[{k:"What we predict it from",h:'The <span class="coil">coils</span>',p:"DIII-D in cross-section. With no plasma, this is the field of the coils alone.",say:"What do we predict it from? This is DIII-D in cross-section. These are the coils, and with no plasma, this is their field.",x:1},{k:"What we predict it from",h:"Add the plasma current and the surfaces <em>close</em>",p:"The coils decide where the X-point sits and how tall the plasma is.",say:"Add the plasma current, and the surfaces close. The coils shape the plasma: where the X-point sits, how tall it is.",x:2},{k:"Try it",h:"Pull on a coil",p:"The boundary moves with the currents. The <b>Thomson laser</b> sees temperature and density along one line.",say:"Let me pull on a coil. [[drag a coil, or press D]] The boundary moves; the X-point moves. This line is the Thomson laser: it measures temperature and density along one chord. So the inputs are these currents, and that one line.",x:8},{k:"The task",h:'<span class="coil">Currents and Thomson</span> in. <span class="flux">The map</span> out.',p:"<b>No magnetic sensors</b>, which is what a standard reconstruction relies on. About 7,000 labelled DIII-D shots.",foot:"This panel is a toy model written for the talk: a fixed current profile, not a Grad\u2013Shafranov solve.",say:"And that is all. No magnetic sensors, which a standard reconstruction relies on. This panel is a toy model I wrote for the talk. The real targets are EFIT reconstructions of about seven thousand DIII-D shots.",x:1}]},{id:"anatomy",layout:"split",title:"Where the score was lost",steps:[{k:"First model",h:"You cannot tell them <em>apart</em>",p:"In blue, a true map. In pink, a map that is wrong by exactly as much as my first model was.",foot:"First model: principal components of \u03C8, a bag of small networks.",say:"My first model was simple: principal components of psi, and a bag of small networks. Its flux maps had an R-squared of zero point nine nine nine eight. Here is what that looks like: a true map in blue, and in pink a map that is wrong by exactly that much. You cannot tell them apart. [[slider]] I have to magnify the error many times before you see it.",x:5},{k:"First model",h:"And the score said <em>0.9914</em>",p:"The flux map carries 55% of the weight and caused about <b>1%</b> of the loss. <b>73%</b> of the loss came from a term with 20% of the weight.",say:"But the score was zero point nine nine one four. Where were the points going? The flux map has fifty-five percent of the weight, and caused about one percent of my loss. Seventy-three percent came from one term, Consistency, which has only twenty percent of the weight.",x:3},{k:"Consistency",h:"Seven numbers the scorer reads <em>off your map</em>",p:"Axis position, elongation, two triangularities, volume, internal inductance. Nonlinear in \u03C8: a small pixel error in the wrong place moves them a lot.",say:"Consistency takes seven numbers that the scorer reads off your map: the magnetic axis, the elongation, two triangularities, the volume, the internal inductance. They are nonlinear in the map: a tiny pixel error, in the wrong place, moves them a lot. So pixel accuracy was saturated. The real question was how to make a regression get the scorer's own functionals right. I answered it twice.",x:2}]},{id:"metric",layout:"split",title:"Answer 1: in the loss",steps:[{k:"Answer one \xB7 in the loss",h:"Not all errors cost <em>the same</em>",p:"Two errors of the same size in pixels. One leaves the shape alone. The other changes the elongation.",say:"First answer: in the loss. Here are two ways of being wrong. [[drag the error]] Push the map this way: the pixels change, but the shape barely moves. Push it that way, by the same amount: the elongation changes, and the score drops. Mean squared error sees a circle. The scorer sees this ellipse.",x:6},{k:"Answer one \xB7 in the loss",h:"Give the network the <em>ellipse</em>",p:`Differentiate the scorer's seven functionals with the scorer's own code. Weight every error by what it costs in <span class="num">S</span>.`,foot:"M = a\xB7I + \u03A3<sub>j</sub> w<sub>j</sub> E[J<sub>j</sub><sup>T</sup>J<sub>j</sub>] / Var<sub>j</sub>",say:"So I gave the network the ellipse. I differentiated the scorer's seven functionals, numerically, with the scorer's own code, and built a metric, M. An error that moves the elongation now costs what it costs in the score.",x:1},{k:"Answer one \xB7 in the loss",h:"Credit where it is due",p:"The idea of this loss, and of slow current-history features, follows material another participant, <b>pshishkin</b>, published openly during the competition.",say:"Credit where it is due: this loss, and the idea of slow current-history features, follow material that another participant, pshishkin, published openly during the competition. In my runs the loss was worth about twelve units and the features eleven, and they add. One unit is ten to the minus four: that is the scale of this whole competition.",x:1}]},{id:"correct",layout:"split",title:"Answer 2: after the model",steps:[{k:"Answer two \xB7 after the model",h:"Two opinions about the <em>same</em> number",p:"The map implies an elongation. A separate network predicts the elongation directly from the inputs. They disagree a little.",say:"Second answer: after the model. The map implies an elongation. Separate networks predict the elongation directly from the inputs. They disagree a little, and the direct one is usually closer.",x:1},{k:"Answer two \xB7 after the model",h:'Move the map until it <span class="good">agrees</span>',p:"A damped Gauss\u2013Newton step in coefficient space, with M as the prior. It needs no label, so it runs at inference.",say:"So I move the map. [[press D]] A damped Gauss\u2013Newton step pulls it until the numbers the scorer will read off it agree with the direct predictions. The same metric M is its prior, so it moves in directions that are cheap in pixels. It needs no label, so it runs at inference.",x:4},{k:"Answer two \xB7 after the model",h:'Worth <span class="good">four to five units</span>',p:'One step: <span class="num">+2.8</span>. Iterated with the prior: <span class="num">+1.4</span>. Stronger direct heads: <span class="num">+0.3</span> on the board.',say:"That was worth four to five units.",x:2}]},{id:"mirror",layout:"split",title:"Repair 1: reversed shots",steps:[{k:"Repair one \xB7 the data",h:"The same plasma, with the <em>sign flipped</em>",p:"Eight or nine percent of DIII-D shots run with the plasma current reversed. Every input current changes sign. The shape, and the flux map as it is stored, do not.",say:"Then two repairs of the data. One: eight or nine percent of DIII-D shots run with the plasma current reversed. It is the same plasma, mirrored. [[toggle]] Every current in my inputs changes sign. The shape does not, and neither does the flux map as it is stored. So the inputs flip, and the answer stays.",x:3},{k:"Repair one \xB7 the data",h:'Two worlds, <span class="good">folded into one</span>',p:"Of 789 input features, 430 are odd under reversal. Multiply those by the sign of the plasma current.",say:"The network does not know that. It sees two different worlds, with less than a tenth of the data for the second. The organisers had pointed out the sign on the forum. I applied it to everything: of seven hundred and eighty-nine features, four hundred and thirty are odd under reversal. Multiply those by the sign of the current, and the two worlds fold into one.",x:3},{k:"Repair one \xB7 the data",h:"9% of the shots, <em>60 to 68%</em> of the error",p:'On the time-blocked fold, before the fix. After it: <span class="num">+13.7</span> units on that fold, <span class="num">+2.6</span> on the public board.',say:"Before the fix, those few shots carried sixty to sixty-eight percent of the squared error on my time-blocked fold. After it: fourteen units on that fold, three on the public board.",x:1}]},{id:"timeaxis",layout:"split",title:"Repair 2: a clock",steps:[{k:"Repair two \xB7 the data",h:"A clock that was <em>wrong</em>",p:"On 2,111 of 7,041 training shots, from an older acquisition era not covered by the official fix, the plasma-current time axis is shifted against the other signals by 54 to 291 ms.",say:"Two: a clock. The organisers' time fix covers most shots. But on thirty percent of the training shots, from an older acquisition era, the plasma-current clock is still off, by fifty to three hundred milliseconds.",x:1},{k:"Repair two \xB7 the data",h:'One rule that reads <span class="good">inputs only</span>',p:"Start the plasma-current record 8,192 ms after the magnetics record, if that puts breakdown where it should be.",say:"The repair is one rule that reads only the inputs: the plasma-current record starts eight thousand one hundred and ninety-two milliseconds after the magnetics record. [[press D]]",x:4},{k:"Repair two \xB7 the data",h:"Neither repair is <em>machine learning</em>",p:'<span class="num">+6.8</span> units on the time-blocked fold, <span class="num">+1.1</span> on the board. Disclosed to the organisers before the Final phase.',say:"Seven units on the time-blocked fold, one on the board; disclosed to the organisers before the final phase. Neither repair is machine learning. Both came from looking at the worst shots and asking why. I will come back to who was looking.",x:1}]},{id:"ladder",layout:"split",title:"What moved the score",steps:[{k:"The whole climb",h:"Everything happens in the <em>third decimal</em>",p:'First file: flux-map R\xB2 <span class="num">0.99982</span>, score <span class="num">0.99137</span>.',say:"Here is the whole climb. First file: map R-squared zero point nine nine nine eight; score zero point nine nine one four.",x:1},{k:"The whole climb",h:"Eleven accepted changes",p:'<em style="font-style:normal;color:var(--plasma)">Pink</em>: make the model care about the scorer. <span style="color:var(--coil)">Amber</span>: fix the inputs. Grey: the usual ensemble work.',say:"Eleven accepted changes. Pink: make the model care about the scorer. Amber: fix the inputs. Grey: the usual ensemble work.",x:3},{k:"How I decided",h:"A rule written <em>before</em> each test",p:"Paired bootstrap over shots, and a time-blocked fold with a veto. Rejected: a shot-level transformer, a recurrent model, an exact l<sub>i</sub> loss, more members.",say:"Roughly forty percent score-aware, thirty percent inputs, thirty percent ensemble. On shots far from the training period, [[toggle]] the inputs matter most. Every change had an acceptance rule written before the test: a paired bootstrap over shots, and a time-blocked fold with a veto. Much failed that test: a transformer over the whole shot, a recurrent model, more ensemble members.",x:4},{k:"Blind Final",h:"Second, by <em>77 millionths</em>",p:"The ten leading entries were within one thousandth of each other.",say:"The blind final: zero point nine nine seven two five three. Second place, seventy-seven millionths behind first. The top ten were within one thousandth.",x:3}]},{id:"mast",layout:"split",title:"Zero-shot MAST",steps:[{k:"Challenge 2 \xB7 zero-shot",h:"A machine the model has <em>never seen</em>",p:"MAST, a spherical tokamak. No MAST label may be used: not to train, not to tune, not to choose between models.",say:"Challenge two: the same task on MAST, a spherical tokamak in the UK, with no MAST labels at all. Not to train, not to tune, not even to choose between two models.",x:2},{k:"Challenge 2 \xB7 zero-shot",h:'So: physics. <span class="flux">Isotherms are flux surfaces</span>',p:"A free-boundary Grad\u2013Shafranov solve with the MAST coils, fitted to Thomson. Two points with the same temperature, either side of the axis, must lie on the same surface.",say:"A regression trained on DIII-D does not transfer. So here I used physics: a free-boundary Grad\u2013Shafranov solver with the MAST coils, fitted to the Thomson data. The key constraint: temperature is constant on a flux surface. Two points with the same temperature, either side of the axis, must lie on the same surface.",x:2},{k:"Challenge 2 \xB7 zero-shot",h:"The biggest gain was a <em>convention</em>",p:"The solenoid needs a documented factor of one half.",say:"The largest gain was not a model. It was a convention: the solenoid current needs a factor of one half, documented in the MAST literature. With factor one, the map's R-squared was zero point six three. With one half: zero point nine five.",x:3},{k:"Challenge 2 \xB7 zero-shot",h:"Thirteenth, and <em>why</em>",p:'The map was good (R\xB2 <span class="num">0.981</span>). Consistency <span class="num">0.350</span> and scalar R\xB2 <span class="num">0.450</span> carry 89% of the shortfall: vessel currents and the current profile are not in the inputs.',say:"Small steps took it to zero point seven six, and thirteenth place. Why not better? The flux map was good: zero point nine eight. But the shape numbers and q ninety-five were poor. The MAST labels include currents in the vessel wall; my solver has none, and Thomson data say little about the current profile. What I learned on DIII-D transferred in shape, not in mean. For cross-machine work, the missing piece is a model of the currents you cannot see.",x:2}]},{id:"agents",layout:"full",title:"How I used AI",steps:[{k:"How it was built",h:"One student, <em>many agents</em>",p:'A coding agent that can start other agents and run jobs on a supercomputer. <span class="num">22</span> development submissions, <span class="num">3</span> final.',say:"Now, how it was built. One person, from the end of August to late October, working through a coding agent, Claude Code. It could start other agents and run jobs on Isambard-AI, one of the UK's national AI supercomputers, which happens to be in Bristol.",x:2},{k:"Pattern one",h:"Fan out: one question, <em>seven</em> experiments",p:"The lead agent splits a question into variants. Each worker owns one variant and one job. I read the table and choose.",say:"The basic pattern is a fan-out. I ask one question. The lead agent splits it into variants; each worker runs one variant as one job; the results come back as one table. I read the table and choose. Seven experiments in an evening instead of one. On day one, my local score went from zero point three three to zero point nine seven.",x:3},{k:"Pattern two",h:'An adversary, and a <span class="good">gate</span>',p:'A model from a different family tries to break each design. An independent agent checks every file against the rules before upload: <span class="num">35</span> audits, at least <span class="num">7</span> candidates blocked or changed.',say:"The second pattern is an adversary. Before a design was built, a model from a different family was asked to break it. It found a normalisation error in my loss, and three physics errors in an early MAST design. And before any file went to the leaderboard, an independent agent checked it against the rules: thirty-five audits, and at least seven candidates blocked or changed.",x:3},{k:"The honest part",h:"The agents were also <em>wrong</em>",p:"What saved the project was boring: written handoff files, and cluster jobs that kept running.",say:"The agents were also wrong, often. On day one they read the plasma current in amperes; the data are in kiloamperes. A scoring script was left on the wrong machine, and a conclusion had to be withdrawn. Six times, the agents died at a usage limit in the middle of a run. What saved the project was boring: written handoff files, and cluster jobs that kept running.",x:3},{k:"Who did what",h:"Throughput was theirs. <em>The decisions were mine.</em>",p:"The agents multiplied how much I could try. They did not decide what was true.",say:"So who did what? The agents wrote and reviewed the code, ran the experiments, checked the rules. And the two data repairs: an agent, doing forensics on my worst fold, traced the error to the reversed shots, and an agent found the clock rule. I set the goal, asked for an independent audit of every plan, chose between candidates, and decided what to submit and what to disclose. The agents multiplied how much I could try. They did not decide what was true: the official scorer and the held-out shots did that. And the organisers reproduced the entry from scratch.",x:3}]},{id:"close",layout:"full",title:"Takeaways",steps:[{k:"To take home",h:"Four things",say:"Four things I take to the next problem. One: decompose the metric before you model. Two: put the scorer in the loss, and again after the model. Three: fix the data before the network. Four: agents multiply throughput; the rules of evidence stay yours.",x:4},{k:"Thank you",h:"Everything you saw is a <em>web page</em>",say:"The code is open, under MIT. And this talk is a web page: you can open it and play with everything you saw. Thank you to the organisers, to General Atomics and UKAEA for the data, and to Isambard-AI for the compute. I am happy to take questions.",x:2}]}],Am=130/60;function Em(n){return(n||"").replace(/\[\[.+?\]\]/g," ").trim().split(/\s+/).filter(Boolean).length}function Rm(n){return typeof n.t=="number"?n.t:Math.round(Em(n.say)/Am+(n.x||0))}function Yo(){let n=[],t=0;return Se.forEach((e,i)=>{e.steps.forEach((s,r)=>{let o=Rm(s);n.push({scene:i,step:r,t0:t,t:o}),t+=o})}),{list:n,total:t}}var Jo="fusion-talk-v1",Js=class{constructor(t,e){this.role=t,this.onMessage=e,this.peer=null,this.seen=new Set;try{this.bc=new BroadcastChannel(Jo),this.bc.onmessage=i=>this._recv(i.data)}catch{this.bc=null}window.addEventListener("message",i=>{i.data&&i.data.__ch===Jo&&this._recv(i.data)}),t==="presenter"&&window.opener&&(this.peer=window.opener)}attachWindow(t){this.peer=t}_recv(t){!t||t.__ch!==Jo||t.from===this.role||this.seen.has(t.id)||(this.seen.add(t.id),this.seen.size>400&&(this.seen=new Set([...this.seen].slice(-100))),this.onMessage(t))}send(t){let e={...t,__ch:Jo,from:this.role,id:`${this.role}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`};if(this.bc)try{this.bc.postMessage(e)}catch{}if(this.peer&&!this.peer.closed)try{this.peer.postMessage(e,"*")}catch{}}};var xe=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i};function ql(n){return n.replace(/\[\[(.+?)\]\]/g,'<span class="cue">$1</span>')}function Jn(n){let t=Math.max(0,Math.round(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}var Ko=class{constructor(t,e){this.registry=e,this.flat=Yo(),this.el=xe("div","deck"),t.appendChild(this.el),this.stage=new $o(this.el),this.ctx=this.stage.makeCtx(),this.layers=[],this.mounted=new Map,this.si=-1,this.ti=0,this.timer={running:!1,t0:0,acc:0},this.sync=new Js("main",s=>this._onSync(s)),Se.forEach((s,r)=>{let o=xe("section","scene");o.dataset.id=s.id,o.dataset.layout=s.layout;let a=xe("div","scene-root"),l=xe("div","scene-text");o.append(a,l),this.stage.el.appendChild(o),this.layers.push({layer:o,root:a,text:l,block:null})}),this._buildHud(),this._buildNotes(),this._buildOverlays(),this._bind(),this.stage.onScale(()=>{let s=this._module(this.si);s&&s.resize&&s.resize()});let i=this._parseHash();this.go(i.si,i.ti,{instant:!0,initial:!0}),setInterval(()=>this._tick(),250)}_buildHud(){let t=xe("div","hud"),e=xe("div","progress");this.progEls=Se.map(()=>{let l=xe("i"),c=xe("b");return l.appendChild(c),e.appendChild(l),{i:l,b:c}});let i=xe("div","hud-right");this.timerEl=xe("span","hud-timer","00:00"),this.whereEl=xe("span","where");let s=xe("div","hud-nav"),r=l=>`<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${l}"/></svg>`,o=xe("button",null,r("M8.5 2.5 4 7l4.5 4.5"));o.setAttribute("aria-label","Previous step");let a=xe("button",null,r("M5.5 2.5 10 7l-4.5 4.5"));a.setAttribute("aria-label","Next step"),o.addEventListener("click",()=>this.prev()),a.addEventListener("click",()=>this.next()),s.append(o,a),i.append(this.timerEl,this.whereEl,s),this.hintEl=xe("div","hud-hint",'<span class="ui-kbd">\u2192</span> next \xB7 <span class="ui-kbd">D</span> play the demo \xB7 <span class="ui-kbd">N</span> speaker notes \xB7 <span class="ui-kbd">O</span> overview \xB7 <span class="ui-kbd">?</span> keys'),this.demoEl=xe("div","demo-flag","DEMO"),t.append(e,i,this.hintEl,this.demoEl),this.stage.el.appendChild(t)}_buildNotes(){this.notesEl=xe("div","notes"),this.notesInner=xe("div","notes-inner"),this.notesEl.appendChild(this.notesInner),this.stage.el.appendChild(this.notesEl)}_buildOverlays(){this.ovEl=xe("div","overlay"),this.ovEl.appendChild(xe("h2",null,mi.title));let t=xe("div","ov-grid");this.ovCards=Se.map((s,r)=>{let o=this.flat.list.find(l=>l.scene===r).t0,a=xe("button","ov-card",`<div><div class="n">${String(r+1).padStart(2,"0")}</div><div class="t">${s.title}</div></div><div class="m">${Jn(o)} \xB7 ${s.steps.length} steps</div>`);return a.addEventListener("click",()=>{this.toggleOverview(!1),this.go(r,0)}),t.appendChild(a),a}),this.ovEl.appendChild(t),this.stage.el.appendChild(this.ovEl),this.helpEl=xe("div","overlay"),this.helpEl.appendChild(xe("h2",null,"Keys"));let e=[["\u2192 Space PgDn","next step"],["\u2190 PgUp","previous step"],["\u2193 / \u2191","next / previous scene"],["D","play the scripted demo of this step"],["N","speaker notes (the verbatim script)"],["P","open the presenter window (script, clock, pace)"],["T","start / pause the clock \xB7 Shift+T reset"],["O","overview of all scenes"],["F","full screen"],["1 \u2026 9, 0, -","jump to scene 1 \u2026 9, 10, 11"],["Home / End","first / last step"],["Esc","close this"]],i=xe("div","help-grid");e.forEach(([s,r])=>{i.appendChild(xe("div","k",s.split(" ").map(o=>o==="/"||o==="\u2026"||o==="\xB7"?o:`<span class="ui-kbd">${o}</span>`).join(" "))),i.appendChild(xe("div",null,r))}),this.helpEl.appendChild(i),this.stage.el.appendChild(this.helpEl)}_parseHash(){let t=/^#\/?(\d+)(?:[./](\d+))?/.exec(location.hash||"");if(!t)return{si:0,ti:0};let e=Math.max(0,Math.min(Se.length-1,parseInt(t[1],10)-1)),i=Math.max(0,Math.min(Se[e].steps.length-1,parseInt(t[2]||"1",10)-1));return{si:e,ti:i}}_module(t){let e=this.mounted.get(t);return e&&e.module?e.module:null}_ensureMounted(t){if(t<0||t>=Se.length)return Promise.resolve(null);let e=this.mounted.get(t);if(e)return e.promise;let i=Se[t],s=this.registry[i.id];return e={module:null,promise:null},this.mounted.set(t,e),e.promise=Promise.resolve().then(()=>s.mount(this.layers[t].root,this.ctx)).then(()=>(e.module=s,s.steps!==i.steps.length&&console.warn(`[deck] scene "${i.id}" has ${s.steps} steps, content has ${i.steps.length}`),s)).catch(r=>(console.error(`[deck] scene "${i.id}" failed to mount`,r),this.layers[t].root.innerHTML=`<div class="placeholder">scene "${i.id}" failed to load</div>`,e.module={steps:i.steps.length,setStep(){},enter(){},leave(){}},e.module)),e.promise}go(t,e,{instant:i=!1,initial:s=!1}={}){t=Math.max(0,Math.min(Se.length-1,t)),e=Math.max(0,Math.min(Se[t].steps.length-1,e));let r=t!==this.si,o=this.si;if(!r&&e===this.ti)return;this.si=t,this.ti=e;let a=this._navToken=(this._navToken||0)+1;if(r){let l=this._module(o);if(l&&l.leave)try{l.leave()}catch(c){console.error(c)}this.layers.forEach((c,u)=>c.layer.classList.toggle("is-active",u===t))}this._renderText(t,e,r||i),this._renderHud(),this._renderNotes(),s||history.replaceState(null,"",`#/${t+1}.${e+1}`),this._publish(),this._ensureMounted(t).then(l=>{if(a!==this._navToken||!l)return;let c=Math.max(0,(l.steps||1)-1);r&&l.enter&&l.enter();try{l.setStep(Math.min(e,c),{instant:i||r})}catch(h){console.error(h)}(window.requestIdleCallback||(h=>setTimeout(h,400)))(()=>{this._ensureMounted(t+1)})}),!s&&!this.timer.running&&this.timer.acc===0&&(t>0||e>0)&&this.timerStart()}next(){let t=Se[this.si];this.ti<t.steps.length-1?this.go(this.si,this.ti+1):this.si<Se.length-1&&this.go(this.si+1,0)}prev(){this.ti>0?this.go(this.si,this.ti-1,{instant:!0}):this.si>0&&this.go(this.si-1,Se[this.si-1].steps.length-1,{instant:!0})}demo(){let t=this._module(this.si);t&&t.demo&&(t.demo(),this.demoEl.classList.add("is-on"),clearTimeout(this._demoT),this._demoT=setTimeout(()=>this.demoEl.classList.remove("is-on"),1400))}_renderText(t,e,i){let s=Se[t].steps[e],r=this.layers[t],o=(s.k?`<p class="kicker">${s.k}</p>`:"")+(s.h?`<h1 class="headline">${s.h}</h1>`:"")+(s.p?`<p class="body">${s.p}</p>`:"")+(s.big?`<p class="bignum">${s.big}</p>`:"")+(s.foot?`<p class="foot">${s.foot}</p>`:"");r.text.classList.toggle("is-title",s.variant==="title");let a=()=>{let u=xe("div","text-block",o);return s.variant&&(u.dataset.variant=s.variant),u};if(i||!r.block){r.text.innerHTML="",r.block=a(),r.text.appendChild(r.block);return}r.block.classList.add("is-out");let c=a();c.classList.add("is-out"),r.block=c,setTimeout(()=>{r.block===c&&(r.text.innerHTML="",r.text.appendChild(c),c.offsetWidth,c.classList.remove("is-out"))},240)}_renderHud(){this.progEls.forEach(({i:e,b:i},s)=>{e.classList.toggle("is-current",s===this.si);let r=Se[s].steps.length,o=s<this.si?1:s>this.si?0:(this.ti+1)/r;i.style.transform=`scaleX(${o})`}),this.whereEl.innerHTML=`<b>${String(this.si+1).padStart(2,"0")}</b> / ${Se.length} \xB7 ${Se[this.si].title}`,this.ovCards.forEach((e,i)=>e.classList.toggle("is-current",i===this.si));let t=this.si===0&&this.ti===0;this.hintEl.classList.toggle("is-on",t)}_renderNotes(){let t=Se[this.si].steps[this.ti];this.notesInner.innerHTML=ql(t.say||"")}elapsed(){return this.timer.acc+(this.timer.running?(performance.now()-this.timer.t0)/1e3:0)}timerStart(){this.timer.running||(this.timer.running=!0,this.timer.t0=performance.now(),this._publish())}timerPause(){this.timer.running&&(this.timer.acc=this.elapsed(),this.timer.running=!1,this._publish())}timerReset(){this.timer={running:!1,t0:0,acc:0},this._publish(),this._tick()}_tick(){this.timerEl.textContent=Jn(this.elapsed()),this.timer.running&&this._publish(!0)}_publish(t){this.sync.send({type:"state",si:this.si,ti:this.ti,elapsed:this.elapsed(),running:this.timer.running,light:!!t})}_onSync(t){t.type==="hello"?this._publish():t.type==="next"?this.next():t.type==="prev"?this.prev():t.type==="demo"?this.demo():t.type==="goto"?this.go(t.si,t.ti||0):t.type==="timer"&&(t.action==="toggle"&&(this.timer.running?this.timerPause():this.timerStart()),t.action==="reset"&&this.timerReset())}toggleOverview(t){let e=t??!this.ovEl.classList.contains("is-on");this.ovEl.classList.toggle("is-on",e),e&&this.helpEl.classList.remove("is-on")}toggleHelp(t){let e=t??!this.helpEl.classList.contains("is-on");this.helpEl.classList.toggle("is-on",e),e&&this.ovEl.classList.remove("is-on")}openPresenter(){let t=new URL(location.href);t.hash="",t.searchParams.set("presenter","1");let e=window.open(t.href,"fusion-talk-presenter","width=1100,height=760");this.sync.attachWindow(e),setTimeout(()=>this._publish(),600)}_bind(){window.addEventListener("keydown",o=>{if(o.metaKey||o.ctrlKey||o.altKey)return;let a=o.target&&o.target.tagName||"",l=o.key;if(a==="INPUT"&&o.shiftKey&&(l==="ArrowLeft"||l==="ArrowRight"))return;let c=!0;l==="ArrowRight"||l===" "||l==="PageDown"||l==="Enter"?this.next():l==="ArrowLeft"||l==="PageUp"||l==="Backspace"?this.prev():l==="ArrowDown"?this.go(this.si+1,0):l==="ArrowUp"?this.go(this.si-1,0,{instant:!0}):l==="Home"?this.go(0,0,{instant:!0}):l==="End"?this.go(Se.length-1,Se[Se.length-1].steps.length-1,{instant:!0}):l==="d"||l==="D"?this.demo():l==="n"||l==="N"?this.el.classList.toggle("show-notes"):l==="p"||l==="P"?this.openPresenter():l==="T"?this.timerReset():l==="t"?(this.el.classList.add("show-timer"),this.timer.running?this.timerPause():this.timerStart()):l==="o"||l==="O"?this.toggleOverview():l==="?"||l==="/"?this.toggleHelp():l==="f"||l==="F"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen():l==="Escape"?(this.toggleOverview(!1),this.toggleHelp(!1),this.el.classList.remove("show-notes")):/^[0-9]$/.test(l)?this.go(l==="0"?9:parseInt(l,10)-1,0,{instant:!0}):l==="-"?this.go(10,0,{instant:!0}):c=!1,c&&(o.preventDefault(),document.activeElement&&document.activeElement!==document.body&&a==="INPUT"&&document.activeElement.blur())}),window.addEventListener("hashchange",()=>{let o=this._parseHash();this.go(o.si,o.ti,{instant:!0})});let t,e=()=>{this.el.classList.remove("cursor-idle"),clearTimeout(t),t=setTimeout(()=>this.el.classList.add("cursor-idle"),3500)};window.addEventListener("pointermove",e,{passive:!0}),e();let i=0,s=0,r=0;this.el.addEventListener("touchstart",o=>{o.touches.length===1&&(i=o.touches[0].clientX,s=o.touches[0].clientY,r=Date.now())},{passive:!0}),this.el.addEventListener("touchend",o=>{let a=o.changedTouches[0],l=a.clientX-i,c=a.clientY-s;if(Date.now()-r>600||Math.abs(l)<70||Math.abs(c)>60)return;let u=o.target;u&&u.closest&&u.closest("canvas, input, .ui-chip, .ui-toggle")||(l<0?this.next():this.prev())},{passive:!0})}};function pd(n){let t=Yo(),e=t.total;n.innerHTML=`
  <div class="presenter">
    <div class="pr-top">
      <div><span class="pr-clock" id="pr-clock">00:00<small>/ ${Jn(mi.budgetSeconds)}</small></span></div>
      <div class="pr-pace" id="pr-pace">waiting for the deck window\u2026</div>
      <div class="pr-where" id="pr-where"></div>
    </div>
    <div class="pr-main">
      <div>
        <div class="pr-note" id="pr-note"></div>
        <div class="pr-zh" id="pr-zh"></div>
      </div>
      <div class="pr-side">
        <h4>Next</h4>
        <div class="next" id="pr-next"></div>
        <div class="nexttext" id="pr-nexttext"></div>
        <h4 style="margin-top:26px">This step</h4>
        <div id="pr-plan"></div>
      </div>
    </div>
    <div class="pr-bottom">
      <button id="pr-prev">\u2190 Back</button>
      <button id="pr-demo">D \xB7 demo</button>
      <div class="pr-bar"><b id="pr-fill"></b><i id="pr-mark"></i></div>
      <button id="pr-timer">Start clock</button>
      <button id="pr-reset">Reset</button>
      <button class="primary" id="pr-next-btn">Next \u2192</button>
    </div>
  </div>`;let i=u=>n.querySelector(`#${u}`),s={si:0,ti:0,elapsed:0,running:!1},r=performance.now(),o=new Js("presenter",u=>{if(u.type!=="state")return;let h=u.si!==s.si||u.ti!==s.ti;s=u,r=performance.now(),(h||!u.light)&&l(),c()});function a(){return s.elapsed+(s.running?(performance.now()-r)/1e3:0)}function l(){let u=Se[s.si],h=u.steps[s.ti];i("pr-note").innerHTML=ql(h.say||""),i("pr-zh").textContent=h.zh||"",i("pr-where").innerHTML=`<b>${u.title}</b>scene ${s.si+1}/${Se.length} \xB7 step ${s.ti+1}/${u.steps.length}`;let d=t.list.findIndex(v=>v.scene===s.si&&v.step===s.ti),f=t.list[d+1];if(f){let v=Se[f.scene].steps[f.step];i("pr-next").innerHTML=(v.h||"").replace(/<[^>]+>/g,""),i("pr-nexttext").textContent=(v.say||"").replace(/\[\[(.+?)\]\]/g,"[$1]").slice(0,150)+"\u2026"}else i("pr-next").textContent="End of talk",i("pr-nexttext").textContent="";let p=t.list[d];i("pr-plan").innerHTML=`planned <b>${p.t}s</b> \xB7 should start at <b>${Jn(p.t0)}</b><br>talk plan ${Jn(e)} of ${Jn(mi.budgetSeconds)}`,i("pr-timer").textContent=s.running?"Pause clock":"Start clock"}function c(){let u=a();i("pr-clock").firstChild.textContent=Jn(u);let h=t.list.findIndex(p=>p.scene===s.si&&p.step===s.ti),d=t.list[h]||t.list[0],f=i("pr-pace");if(f.classList.remove("is-late","is-early","is-ok"),!s.running&&u===0)f.textContent="clock not started (it starts on the first \u2192)";else{let p=u-(d.t0+d.t),v=d.t0-u;p>12?(f.textContent=`behind by ${Jn(p)}`,f.classList.add("is-late")):v>15?(f.textContent=`ahead by ${Jn(v)}`,f.classList.add("is-early")):(f.textContent="on pace",f.classList.add("is-ok")),u>mi.budgetSeconds&&(f.textContent=`over time by ${Jn(u-mi.budgetSeconds)}`,f.classList.add("is-late"))}i("pr-fill").style.transform=`scaleX(${Math.min(1,u/mi.budgetSeconds)})`,i("pr-mark").style.left=`${Math.min(100,(d.t0+d.t)/mi.budgetSeconds*100)}%`,i("pr-timer").textContent=s.running?"Pause clock":"Start clock"}i("pr-prev").addEventListener("click",()=>o.send({type:"prev"})),i("pr-next-btn").addEventListener("click",()=>o.send({type:"next"})),i("pr-demo").addEventListener("click",()=>o.send({type:"demo"})),i("pr-timer").addEventListener("click",()=>o.send({type:"timer",action:"toggle"})),i("pr-reset").addEventListener("click",()=>o.send({type:"timer",action:"reset"})),window.addEventListener("keydown",u=>{let h=u.key;if(h==="ArrowRight"||h===" "||h==="PageDown"||h==="Enter")o.send({type:"next"});else if(h==="ArrowLeft"||h==="PageUp")o.send({type:"prev"});else if(h==="d"||h==="D")o.send({type:"demo"});else if(h==="t")o.send({type:"timer",action:"toggle"});else if(h==="T")o.send({type:"timer",action:"reset"});else return;u.preventDefault()}),l(),c(),setInterval(c,250),o.send({type:"hello"}),setTimeout(()=>o.send({type:"hello"}),500),document.title="Presenter \xB7 "+mi.title}var Kh="170";var Cm=0,md=1,Pm=2;var Tf=1,Im=2,Ui=3,os=0,_n=1,yn=2,vi=0,dr=1,en=2,gd=3,vd=4,km=5,Ms=100,Lm=101,Um=102,Dm=103,Fm=104,Nm=200,Om=201,Bm=202,zm=203,Ac=204,Ec=205,Hm=206,Vm=207,Gm=208,Wm=209,Xm=210,Zm=211,qm=212,$m=213,Ym=214,Rc=0,Cc=1,Pc=2,gr=3,Ic=4,kc=5,Lc=6,Uc=7,Af=0,Jm=1,Km=2,rs=0,jh=1,Qh=2,tu=3,eu=4,jm=5,nu=6,iu=7;var Ef=300,vr=301,xr=302,Dc=303,Fc=304,ol=306,Nc=1e3,Ts=1001,Oc=1002,ni=1003,Qm=1004;var jo=1005;var gi=1006,$l=1007;var As=1008;var zi=1009,Rf=1010,Cf=1011,po=1012,su=1013,Es=1014,Fi=1015,Ln=1016,ru=1017,ou=1018,yr=1020,Pf=35902,If=1021,kf=1022,ei=1023,Lf=1024,Uf=1025,fr=1026,_r=1027,Df=1028,au=1029,Ff=1030,lu=1031;var cu=1033,Aa=33776,Ea=33777,Ra=33778,Ca=33779,Bc=35840,zc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,Xc=37496,Zc=37808,qc=37809,$c=37810,Yc=37811,Jc=37812,Kc=37813,jc=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,Pa=36492,oh=36494,ah=36495,Nf=36283,lh=36284,ch=36285,hh=36286;var Ia=2300,uh=2301,Yl=2302,xd=2400,yd=2401,_d=2402;var t1=3200,e1=3201;var n1=0,i1=1,ss="",xn="srgb",Tr="srgb-linear",al="linear",pe="srgb";var Ks=7680;var bd=519,s1=512,r1=513,o1=514,Of=515,a1=516,l1=517,c1=518,h1=519,dh=35044,yi=35048;var Md="300 es",Ni=2e3,ka=2001,as=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=1234567,lo=Math.PI/180,mo=180/Math.PI;function Oi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function hu(n,t){return(n%t+t)%t}function u1(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function d1(n,t,e){return n!==t?(e-n)/(t-n):0}function co(n,t,e){return(1-e)*n+e*t}function f1(n,t,e,i){return co(n,t,1-Math.exp(-e*i))}function p1(n,t=1){return t-Math.abs(hu(n,t*2)-t)}function m1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function g1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function v1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function x1(n,t){return n+Math.random()*(t-n)}function y1(n){return n*(.5-Math.random())}function _1(n){n!==void 0&&(wd=n);let t=wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b1(n){return n*lo}function M1(n){return n*mo}function w1(n){return(n&n-1)===0&&n!==0}function S1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function T1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function A1(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bf={DEG2RAD:lo,RAD2DEG:mo,generateUUID:Oi,clamp:We,euclideanModulo:hu,mapLinear:u1,inverseLerp:d1,lerp:co,damp:f1,pingpong:p1,smoothstep:m1,smootherstep:g1,randInt:v1,randFloat:x1,randFloatSpread:y1,seededRandom:_1,degToRad:b1,radToDeg:M1,isPowerOfTwo:w1,ceilPowerOfTwo:S1,floorPowerOfTwo:T1,setQuaternionFromProperEuler:A1,normalize:ve,denormalize:ti},Et=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=s[0],g=s[3],m=s[6],_=s[1],y=s[4],x=s[7],w=s[2],S=s[5],T=s[8];return r[0]=o*v+a*_+l*w,r[3]=o*g+a*y+l*S,r[6]=o*m+a*x+l*T,r[1]=c*v+u*_+h*w,r[4]=c*g+u*y+h*S,r[7]=c*m+u*x+h*T,r[2]=d*v+f*_+p*w,r[5]=d*g+f*y+p*S,r[8]=d*m+f*x+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=e*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new Kt;function zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function E1(){let n=La("canvas");return n.style.display="block",n}var Sd={};function oo(n){n in Sd||(Sd[n]=!0,console.warn(n))}function R1(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function C1(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function P1(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ss?al:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Td=[.64,.33,.3,.6,.15,.06],Ad=[.2126,.7152,.0722],Ed=[.3127,.329],Rd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Tr]:{primaries:Td,whitePoint:Ed,transfer:al,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:Ad,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:Td,whitePoint:Ed,transfer:pe,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:Ad,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});var js,fh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=La("canvas")),js.width=t.width,js.height=t.height;let i=js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},I1=0,Ua=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var k1=0,Wn=class n extends as{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ts,s=Ts,r=gi,o=As,a=ei,l=zi,c=n.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Oi(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nc:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case Oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nc:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case Oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Ef;Wn.DEFAULT_ANISOTROPY=1;var be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,w=(m+1)/2,S=(u+d)/4,T=(h+v)/4,E=(p+g)/4;return y>x&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=T/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=E/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=E/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends as{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Da=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*v,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let w=Math.sqrt(y),S=Math.atan2(w,m*_);g=Math.sin(g*S)/w,a=Math.sin(a*S)/w}let x=a*_;if(l=l*g+d*x,c=c*g+f*x,u=u*g+p*x,h=h*g+v*x,g===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*f-c*d,t[e+1]=l*p+u*d+c*h-a*f,t[e+2]=c*p+u*f+a*d-l*h,t[e+3]=u*p-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new z,Pd=new ls,Xn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),ta.subVectors(this.max,eo),Qs.subVectors(t.a,eo),tr.subVectors(t.b,eo),er.subVectors(t.c,eo),ji.subVectors(tr,Qs),Qi.subVectors(er,tr),ms.subVectors(Qs,er);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-ms.z,ms.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,ms.z,0,-ms.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-ms.y,ms.x,0];return!Ql(e,Qs,tr,er,ta)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,Qs,tr,er,ta))?!1:(ea.crossVectors(ji,Qi),e=[ea.x,ea.y,ea.z],Ql(e,Qs,tr,er,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new z,new z,new z,new z,new z,new z,new z,new z],Kn=new z,Qo=new Xn,Qs=new z,tr=new z,er=new z,ji=new z,Qi=new z,ms=new z,eo=new z,ta=new z,ea=new z,gs=new z;function Ql(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var L1=new Xn,no=new z,tc=new z,ii=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):L1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(tc)),this.expandByPoint(no.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new z,ec=new z,na=new z,ts=new z,nc=new z,ia=new z,ic=new z,go=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ec.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ts.dot(this.direction),l=-ts.dot(na),c=ts.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ec).addScaledVector(na,d),f}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){nc.subVectors(e,t),ia.subVectors(i,t),ic.crossVectors(nc,ia);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);let l=a*this.direction.dot(ia.crossVectors(ts,ia));if(l<0)return null;let c=a*this.direction.dot(nc.cross(ts));if(c<0||l+c>o)return null;let u=-a*ts.dot(ic);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(t,e,i,s,r,o,a,l,c,u,h,d,f,p,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,f,p,v,g)}set(t,e,i,s,r,o,a,l,c,u,h,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,p=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,p=c*u,v=c*h;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,p=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,p=a*u,v=a*h;e[0]=l*u,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+p,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U1,t,D1)}lookAt(t,e,i){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),es.crossVectors(i,Cn),es.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),es.crossVectors(i,Cn)),es.normalize(),sa.crossVectors(Cn,es),s[0]=es.x,s[4]=sa.x,s[8]=Cn.x,s[1]=es.y,s[5]=sa.y,s[9]=Cn.y,s[2]=es.z,s[6]=sa.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],y=i[7],x=i[11],w=i[15],S=s[0],T=s[4],E=s[8],b=s[12],M=s[1],A=s[5],U=s[9],L=s[13],N=s[2],k=s[6],I=s[10],O=s[14],H=s[3],$=s[7],K=s[11],ct=s[15];return r[0]=o*S+a*M+l*N+c*H,r[4]=o*T+a*A+l*k+c*$,r[8]=o*E+a*U+l*I+c*K,r[12]=o*b+a*L+l*O+c*ct,r[1]=u*S+h*M+d*N+f*H,r[5]=u*T+h*A+d*k+f*$,r[9]=u*E+h*U+d*I+f*K,r[13]=u*b+h*L+d*O+f*ct,r[2]=p*S+v*M+g*N+m*H,r[6]=p*T+v*A+g*k+m*$,r[10]=p*E+v*U+g*I+m*K,r[14]=p*b+v*L+g*O+m*ct,r[3]=_*S+y*M+x*N+w*H,r[7]=_*T+y*A+x*k+w*$,r[11]=_*E+y*U+x*I+w*K,r[15]=_*b+y*L+x*O+w*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+e*c*h-e*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],_=h*g*c-v*d*c+v*l*f-a*g*f-h*l*m+a*d*m,y=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,x=u*v*c-p*h*c+p*a*f-o*v*f-u*a*m+o*h*m,w=p*h*l-u*v*l-p*a*d+o*v*d+u*a*g-o*h*g,S=e*_+i*y+s*x+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=_*T,t[1]=(v*d*r-h*g*r-v*s*f+i*g*f+h*s*m-i*d*m)*T,t[2]=(a*g*r-v*l*r+v*s*c-i*g*c-a*s*m+i*l*m)*T,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*T,t[4]=y*T,t[5]=(u*g*r-p*d*r+p*s*f-e*g*f-u*s*m+e*d*m)*T,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*T,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=x*T,t[9]=(p*h*r-u*v*r-p*i*f+e*v*f+u*i*m-e*h*m)*T,t[10]=(o*v*r-p*a*r+p*i*c-e*v*c-o*i*m+e*a*m)*T,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*f-e*a*f)*T,t[12]=w*T,t[13]=(u*v*s-p*h*s+p*i*d-e*v*d-u*i*g+e*h*g)*T,t[14]=(p*a*s-o*v*s-p*i*l+e*v*l+o*i*g-e*a*g)*T,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,v=o*u,g=o*h,m=a*h,_=l*c,y=l*u,x=l*h,w=i.x,S=i.y,T=i.z;return s[0]=(1-(v+m))*w,s[1]=(f+x)*w,s[2]=(p-y)*w,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+m))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(p+y)*T,s[9]=(g-_)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let c=1/r,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,e.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ni){let l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),f,p;if(a===Ni)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ka)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ni){let l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,f=(i+s)*u,p,v;if(a===Ni)p=(o+r)*h,v=-2*h;else if(a===ka)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},nr=new z,jn=new Ie,U1=new z(0,0,0),D1=new z(1,1,1),es=new z,sa=new z,Cn=new z,Id=new Ie,kd=new ls,Hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Id,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Fa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},F1=0,Ld=new z,ir=new ls,Ii=new Ie,ra=new z,io=new z,N1=new z,O1=new ls,Ud=new z(1,0,0),Dd=new z(0,1,0),Fd=new z(0,0,1),Nd={type:"added"},B1={type:"removed"},sr={type:"childadded",child:null},sc={type:"childremoved",child:null},kn=class n extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new Hi,i=new ls,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Kt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Dd,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Ld.copy(t).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Dd,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ra.copy(t):ra.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(io,ra,this.up):Ii.lookAt(ra,io,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ii),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),sr.child=t,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B1),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,N1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,O1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};kn.DEFAULT_UP=new z(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new z,ki=new z,rc=new z,Li=new z,rr=new z,or=new z,Od=new z,oc=new z,ac=new z,lc=new z,cc=new be,hc=new be,uc=new be,ws=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qn.subVectors(s,e),ki.subVectors(i,e),rc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(ki),l=Qn.dot(rc),c=ki.dot(ki),u=ki.dot(rc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(t,e,i,s){return Qn.subVectors(i,e),ki.subVectors(t,e),Qn.cross(ki).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Qn.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,i),or.subVectors(r,i),oc.subVectors(t,i);let l=rr.dot(oc),c=or.dot(oc);if(l<=0&&c<=0)return e.copy(i);ac.subVectors(t,s);let u=rr.dot(ac),h=or.dot(ac);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(rr,o);lc.subVectors(t,r);let f=rr.dot(lc),p=or.dot(lc);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(or,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Od.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(Od,a);let m=1/(g+v+d);return o=v*m,a=d*m,e.copy(i).addScaledVector(rr,o).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},oa={h:0,s:0,l:0};function dc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=hu(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=dc(o,r,t+1/3),this.g=dc(o,r,t),this.b=dc(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let i=Hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return se.fromWorkingColorSpace(tn.copy(this),t),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(tn.copy(this),e);let i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=xn){se.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,i=tn.g,s=tn.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(oa);let i=co(ns.h,oa.h,e),s=co(ns.s,oa.s,e),r=co(ns.l,oa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Wt;Wt.NAMES=Hf;var z1=0,cs=class extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Oi(),this.name="",this.blending=dr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Ec,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},br=class extends cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new z,aa=new Et,re=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dh&&(t.usage=this.usage),t}};var Na=class extends re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Oa=class extends re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ae=class extends re{constructor(t,e,i){super(new Float32Array(t),e,i)}},H1=0,Gn=new Ie,fc=new kn,ar=new z,Pn=new Xn,so=new Xn,Ge=new z,ye=class n extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?Oa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Pn.min,so.min),Pn.expandByPoint(Ge),Ge.addVectors(Pn.max,so.max),Pn.expandByPoint(Ge)):(Pn.expandByPoint(so.min),Pn.expandByPoint(so.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(t,c),Ge.add(ar)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new z,l[E]=new z;let c=new z,u=new z,h=new z,d=new Et,f=new Et,p=new Et,v=new z,g=new z;function m(E,b,M){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[E].add(v),a[b].add(v),a[M].add(v),l[E].add(g),l[b].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let E=0,b=_.length;E<b;++E){let M=_[E],A=M.start,U=M.count;for(let L=A,N=A+U;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new z,x=new z,w=new z,S=new z;function T(E){w.fromBufferAttribute(s,E),S.copy(w);let b=a[E];y.copy(b),y.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(S,b);let A=x.dot(l[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,A)}for(let E=0,b=_.length;E<b;++E){let M=_[E],A=M.start,U=M.count;for(let L=A,N=A+U;L<N;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new re(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bd=new Ie,vs=new go,la=new ii,zd=new z,ca=new z,ha=new z,ua=new z,pc=new z,da=new z,Hd=new z,fa=new z,Re=class extends kn{constructor(t=new ye,e=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(pc.fromBufferAttribute(h,t),o?da.addScaledVector(pc,u):da.addScaledVector(pc.sub(e),u))}e.add(da)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(la.containsPoint(vs.origin)===!1&&(vs.intersectSphere(la,zd)===null||vs.origin.distanceToSquared(zd)>(t.far-t.near)**2))&&(Bd.copy(r).invert(),vs.copy(t.ray).applyMatrix4(Bd),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){let S=a.getX(x),T=a.getX(x+1),E=a.getX(x+2);s=pa(this,m,t,i,c,u,h,S,T,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=pa(this,o,t,i,c,u,h,_,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){let S=x,T=x+1,E=x+2;s=pa(this,m,t,i,c,u,h,S,T,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=g,y=g+1,x=g+2;s=pa(this,o,t,i,c,u,h,_,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function V1(n,t,e,i,s,r,o,a){let l;if(t.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===os,a),l===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:n}}function pa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ha),n.getVertexPosition(c,ua);let u=V1(n,t,e,i,ca,ha,ua,Hd);if(u){let h=new z;ws.getBarycoord(Hd,ca,ha,ua,h),s&&(u.uv=ws.getInterpolatedAttribute(s,a,l,c,h,new Et)),r&&(u.uv1=ws.getInterpolatedAttribute(r,a,l,c,h,new Et)),o&&(u.normal=ws.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};ws.getNormal(ca,ha,ua,d.normal),u.face=d,u.barycoord=h}return u}var vo=class n extends ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(h,2));function p(v,g,m,_,y,x,w,S,T,E,b){let M=x/T,A=w/E,U=x/2,L=w/2,N=S/2,k=T+1,I=E+1,O=0,H=0,$=new z;for(let K=0;K<I;K++){let ct=K*A-L;for(let Y=0;Y<k;Y++){let st=Y*M-U;$[v]=st*_,$[g]=ct*y,$[m]=N,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[m]=S>0?1:-1,u.push($.x,$.y,$.z),h.push(Y/T),h.push(1-K/E),O+=1}}for(let K=0;K<E;K++)for(let ct=0;ct<T;ct++){let Y=d+ct+k*K,st=d+ct+k*(K+1),F=d+(ct+1)+k*(K+1),X=d+(ct+1)+k*K;l.push(Y,st,X),l.push(st,F,X),H+=6}a.addGroup(f,H,b),f+=H,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function dn(n){let t={};for(let e=0;e<n.length;e++){let i=Mr(n[e]);for(let s in i)t[s]=i[s]}return t}function G1(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Un={clone:Mr,merge:dn},W1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W1,this.fragmentShader=X1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=G1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ba=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new z,Vd=new Et,Gd=new Et,fn=class extends Ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,Vd,Gd),e.subVectors(Gd,Vd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},lr=-90,cr=1,gh=class extends kn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new fn(lr,cr,t,e);r.layers=this.layers,this.add(r);let o=new fn(lr,cr,t,e);o.layers=this.layers,this.add(o);let a=new fn(lr,cr,t,e);a.layers=this.layers,this.add(a);let l=new fn(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new fn(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},za=class extends Wn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vh=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vo(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:vi});r.uniforms.tEquirect.value=e;let o=new Re(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=gi),new gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},mc=new z,Z1=new z,q1=new Kt,Di=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=mc.subVectors(i,e).cross(Z1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||q1.getNormalMatrix(t),s=this.coplanarPoint(mc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new ii,ma=new z,Ha=class{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],_=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,g-f,x-m).normalize(),i[1].setComponents(l+r,d+c,g+f,x+m).normalize(),i[2].setComponents(l+o,d+u,g+p,x+_).normalize(),i[3].setComponents(l-o,d-u,g-p,x-_).normalize(),i[4].setComponents(l-a,d-h,g-v,x-y).normalize(),e===Ni)i[5].setComponents(l+a,d+h,g+v,x+y).normalize();else if(e===ka)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $1(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Va=class n extends ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let _=m*d-o;for(let y=0;y<c;y++){let x=y*h-r;p.push(x,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let y=_+c*m,x=_+c*(m+1),w=_+1+c*(m+1),S=_+1+c*m;f.push(y,x,S),f.push(x,w,S)}this.setIndex(f),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Y1,alphahash_pars_fragment:J1,alphamap_fragment:K1,alphamap_pars_fragment:j1,alphatest_fragment:Q1,alphatest_pars_fragment:tg,aomap_fragment:eg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:sg,begin_vertex:rg,beginnormal_vertex:og,bsdfs:ag,iridescence_fragment:lg,bumpmap_pars_fragment:cg,clipping_planes_fragment:hg,clipping_planes_pars_fragment:ug,clipping_planes_pars_vertex:dg,clipping_planes_vertex:fg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:vg,common:xg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:_g,displacementmap_pars_vertex:bg,displacementmap_vertex:Mg,emissivemap_fragment:wg,emissivemap_pars_fragment:Sg,colorspace_fragment:Tg,colorspace_pars_fragment:Ag,envmap_fragment:Eg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Ig,fog_vertex:kg,fog_pars_vertex:Lg,fog_fragment:Ug,fog_pars_fragment:Dg,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:Zg,lights_physical_pars_fragment:qg,lights_fragment_begin:$g,lights_fragment_maps:Yg,lights_fragment_end:Jg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:tv,map_fragment:ev,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:sv,metalnessmap_fragment:rv,metalnessmap_pars_fragment:ov,morphinstance_vertex:av,morphcolor_vertex:lv,morphnormal_vertex:cv,morphtarget_pars_vertex:hv,morphtarget_vertex:uv,normal_fragment_begin:dv,normal_fragment_maps:fv,normal_pars_fragment:pv,normal_pars_vertex:mv,normal_vertex:gv,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:bv,opaque_fragment:Mv,packing:wv,premultiplied_alpha_fragment:Sv,project_vertex:Tv,dithering_fragment:Av,dithering_pars_fragment:Ev,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Iv,shadowmap_vertex:kv,shadowmask_pars_fragment:Lv,skinbase_vertex:Uv,skinning_pars_vertex:Dv,skinning_vertex:Fv,skinnormal_vertex:Nv,specularmap_fragment:Ov,specularmap_pars_fragment:Bv,tonemapping_fragment:zv,tonemapping_pars_fragment:Hv,transmission_fragment:Vv,transmission_pars_fragment:Gv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:Zv,worldpos_vertex:qv,background_vert:$v,background_frag:Yv,backgroundCube_vert:Jv,backgroundCube_frag:Kv,cube_vert:jv,cube_frag:Qv,depth_vert:tx,depth_frag:ex,distanceRGBA_vert:nx,distanceRGBA_frag:ix,equirect_vert:sx,equirect_frag:rx,linedashed_vert:ox,linedashed_frag:ax,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:hx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:vx,meshphysical_vert:xx,meshphysical_frag:yx,meshtoon_vert:_x,meshtoon_frag:bx,points_vert:Mx,points_frag:wx,shadow_vert:Sx,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Ex},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},pn={basic:{uniforms:dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:dn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:dn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:dn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:dn([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:dn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:dn([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:dn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:dn([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:dn([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:dn([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};pn.physical={uniforms:dn([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ga={r:0,b:0,g:0},ys=new Hi,Rx=new Ie;function Cx(n,t,e,i,s,r,o){let a=new Wt(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1,x=p(_);x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,y){let x=p(y);x&&(x.isCubeTexture||x.mapping===ol)?(u===void 0&&(u=new Re(new vo(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:Mr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(y.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(ys)),u.material.toneMapped=se.getTransfer(x.colorSpace)!==pe,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Re(new Va(2,2),new oe({name:"BackgroundMaterial",uniforms:Mr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(ga,Vf(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:g}}function Px(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,A,U,L,N){let k=!1,I=h(L,U,A);r!==I&&(r=I,c(r.object)),k=f(M,L,U,N),k&&p(M,L,U,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(M,A,U,L),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,A,U){let L=U.wireframe===!0,N=i[M.id];N===void 0&&(N={},i[M.id]=N);let k=N[A.id];k===void 0&&(k={},N[A.id]=k);let I=k[L];return I===void 0&&(I=d(l()),k[L]=I),I}function d(M){let A=[],U=[],L=[];for(let N=0;N<e;N++)A[N]=0,U[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,A,U,L){let N=r.attributes,k=A.attributes,I=0,O=U.getAttributes();for(let H in O)if(O[H].location>=0){let K=N[H],ct=k[H];if(ct===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),K===void 0||K.attribute!==ct||ct&&K.data!==ct.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function p(M,A,U,L){let N={},k=A.attributes,I=0,O=U.getAttributes();for(let H in O)if(O[H].location>=0){let K=k[H];K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));let ct={};ct.attribute=K,K&&K.data&&(ct.data=K.data),N[H]=ct,I++}r.attributes=N,r.attributesNum=I,r.index=L}function v(){let M=r.newAttributes;for(let A=0,U=M.length;A<U;A++)M[A]=0}function g(M){m(M,0)}function m(M,A){let U=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;U[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),N[M]!==A&&(n.vertexAttribDivisor(M,A),N[M]=A)}function _(){let M=r.newAttributes,A=r.enabledAttributes;for(let U=0,L=A.length;U<L;U++)A[U]!==M[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function y(M,A,U,L,N,k,I){I===!0?n.vertexAttribIPointer(M,A,U,N,k):n.vertexAttribPointer(M,A,U,L,N,k)}function x(M,A,U,L){v();let N=L.attributes,k=U.getAttributes(),I=A.defaultAttributeValues;for(let O in k){let H=k[O];if(H.location>=0){let $=N[O];if($===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let K=$.normalized,ct=$.itemSize,Y=t.get($);if(Y===void 0)continue;let st=Y.buffer,F=Y.type,X=Y.bytesPerElement,et=F===n.INT||F===n.UNSIGNED_INT||$.gpuType===su;if($.isInterleavedBufferAttribute){let G=$.data,j=G.stride,Q=$.offset;if(G.isInstancedInterleavedBuffer){for(let ft=0;ft<H.locationSize;ft++)m(H.location+ft,G.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ft=0;ft<H.locationSize;ft++)g(H.location+ft);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ft=0;ft<H.locationSize;ft++)y(H.location+ft,ct/H.locationSize,F,K,j*X,(Q+ct/H.locationSize*ft)*X,et)}else{if($.isInstancedBufferAttribute){for(let G=0;G<H.locationSize;G++)m(H.location+G,$.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let G=0;G<H.locationSize;G++)g(H.location+G);n.bindBuffer(n.ARRAY_BUFFER,st);for(let G=0;G<H.locationSize;G++)y(H.location+G,ct/H.locationSize,F,K,ct*X,ct/H.locationSize*G*X,et)}}else if(I!==void 0){let K=I[O];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(H.location,K);break;case 3:n.vertexAttrib3fv(H.location,K);break;case 4:n.vertexAttrib4fv(H.location,K);break;default:n.vertexAttrib1fv(H.location,K)}}}}_()}function w(){E();for(let M in i){let A=i[M];for(let U in A){let L=A[U];for(let N in L)u(L[N].object),delete L[N];delete A[U]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let A=i[M.id];for(let U in A){let L=A[U];for(let N in L)u(L[N].object),delete L[N];delete A[U]}delete i[M.id]}function T(M){for(let A in i){let U=i[A];if(U[M.id]===void 0)continue;let L=U[M.id];for(let N in L)u(L[N].object),delete L[N];delete U[M.id]}}function E(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Ix(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,i,1)}function l(c,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let E=T===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:S}}function Lx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Di,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:i,y=_*4,x=m.clippingState||null;l.value=x,x=u(p,d,y,f);for(let w=0;w!==y;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Ux(n){let t=new WeakMap;function e(o,a){return a===Dc?o.mapping=vr:a===Fc&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dc||a===Fc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var xo=class extends Ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ur=4,Wd=[.125,.215,.35,.446,.526,.582],Ss=20,gc=new xo,Xd=new Wt,vc=null,xc=0,yc=0,_c=!1,bs=(1+Math.sqrt(5))/2,hr=1/bs,Zd=[new z(-bs,hr,0),new z(bs,hr,0),new z(-hr,0,bs),new z(hr,0,bs),new z(0,bs,-hr),new z(0,bs,hr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,xc,yc),this._renderer.xr.enabled=_c,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ln,format:ei,colorSpace:Tr,depthBuffer:!1},s=qd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dx(r)),this._blurMaterial=Fx(r,t,e)}return s}_compileMaterial(t){let e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,i,s){let a=new fn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xd),u.toneMapping=rs,u.autoClear=!1;let f=new br({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new Re(new vo,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Xd),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;va(s,_*y,m>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===vr||t.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;va(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zd[(s-r-1)%Zd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Ss;g>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);let m=[],_=0;for(let T=0;T<Ss;++T){let E=T/v,b=Math.exp(-E*E/2);m.push(b),T===0?_+=b:T<g&&(_+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let x=this._sizeLods[s],w=3*x*(s>y-ur?s-y+ur:0),S=4*(this._cubeSize-x);va(e,w,S,3*x,2*x),l.setRenderTarget(e),l.render(h,gc)}};function Dx(n){let t=[],e=[],i=[],s=n,r=n-ur+1+Wd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ur?l=Wd[o-n+ur-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,E=S>2?0:-1,b=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];_.set(b,v*p*S),y.set(d,g*p*S);let M=[S,S,S,S,S,S];x.set(M,m*p*S)}let w=new ye;w.setAttribute("position",new re(_,v)),w.setAttribute("uv",new re(y,g)),w.setAttribute("faceIndex",new re(x,m)),t.push(w),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qd(n,t,e){let i=new Ze(n,t,e);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fx(n,t,e){let i=new Float32Array(Ss),s=new z(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function $d(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Yd(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Dc||l===Fc,u=l===vr||l===xr;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ga(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Ga(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ox(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bx(n,t,e,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],n.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){let w=_[y+0],S=_[y+1],T=_[y+2];d.push(w,S,S,T,T,w)}}else if(p!==void 0){let _=p.array;v=p.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let w=y+0,S=y+1,T=y+2;d.push(w,S,S,T,T,w)}}else return;let g=new(zf(d)?Oa:Na)(d,1);g.version=v;let m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function h(d,f,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Vx(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*w*4*h),T=new Da(S,x,w,h);T.type=Fi,T.needsUpdate=!0;let E=y*4;for(let M=0;M<h;M++){let A=g[M],U=m[M],L=_[M],N=x*w*4*M;for(let k=0;k<A.count;k++){let I=k*E;f===!0&&(s.fromBufferAttribute(A,k),S[N+I+0]=s.x,S[N+I+1]=s.y,S[N+I+2]=s.z,S[N+I+3]=0),p===!0&&(s.fromBufferAttribute(U,k),S[N+I+4]=s.x,S[N+I+5]=s.y,S[N+I+6]=s.z,S[N+I+7]=0),v===!0&&(s.fromBufferAttribute(L,k),S[N+I+8]=s.x,S[N+I+9]=s.y,S[N+I+10]=s.z,S[N+I+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Et(x,w)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Wa=class extends Wn{constructor(t,e,i,s,r,o,a,l,c,u=fr){if(u!==fr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fr&&(i=Es),i===void 0&&u===_r&&(i=yr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wf=new Wn,Jd=new Wa(1,1),Xf=new Da,Zf=new mh,qf=new za,Kd=[],jd=[],Qd=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Kd[s];if(r===void 0&&(r=new Float32Array(s),Kd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ll(n,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function Zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function $x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;ef.set(i),n.uniformMatrix2fv(this.addr,!1,ef),ze(e,i)}}function Yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;tf.set(i),n.uniformMatrix3fv(this.addr,!1,tf),ze(e,i)}}function Jx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Qd.set(i),n.uniformMatrix4fv(this.addr,!1,Qd),ze(e,i)}}function Kx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function ey(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function ry(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=Of,r=Jd):r=Wf,e.setTexture2D(t||r,s)}function oy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zf,s)}function ay(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qf,s)}function ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xf,s)}function cy(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return Zx;case 35666:return qx;case 35674:return $x;case 35675:return Yx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(n,t){n.uniform1fv(this.addr,t)}function uy(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function dy(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function fy(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function py(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function my(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gy(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vy(n,t){n.uniform1iv(this.addr,t)}function xy(n,t){n.uniform2iv(this.addr,t)}function yy(n,t){n.uniform3iv(this.addr,t)}function _y(n,t){n.uniform4iv(this.addr,t)}function by(n,t){n.uniform1uiv(this.addr,t)}function My(n,t){n.uniform2uiv(this.addr,t)}function wy(n,t){n.uniform3uiv(this.addr,t)}function Sy(n,t){n.uniform4uiv(this.addr,t)}function Ty(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,r[o])}function Ay(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zf,r[o])}function Ey(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function Ry(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function Cy(n){switch(n){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return yy;case 35669:case 35673:return _y;case 5125:return by;case 36294:return My;case 36295:return wy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ry}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},bc=/(\w+)(\])?(\[|\.)?/g;function nf(n,t){n.seq.push(t),n.map[t.id]=t}function Py(n,t,e){let i=n.name,s=i.length;for(bc.lastIndex=0;;){let r=bc.exec(i),o=bc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nf(e,c===void 0?new xh(a,n,t):new yh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new _h(a),nf(e,h)),e=h}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Py(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function sf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Iy=37297,ky=0;function Ly(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var rf=new Kt;function Uy(n){se._getMatrix(rf,se.workingColorSpace,n);let t=`mat3( ${rf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case al:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function of(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ly(n.getShaderSource(t),o)}else return s}function Dy(n,t){let e=Uy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fy(n,t){let e;switch(t){case jh:e="Linear";break;case Qh:e="Reinhard";break;case tu:e="Cineon";break;case eu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case jm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xa=new z;function Ny(){se.getLuminanceCoefficients(xa);let n=xa.x.toFixed(4),t=xa.y.toFixed(4),e=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function By(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ao(n){return n!==""}function af(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(Hy,Gy)}var Vy=new Map;function Gy(n,t){let e=Qt[t];if(e===void 0){let i=Vy.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bh(e)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(Wy,Xy)}function Xy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Im?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function qy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case ol:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $y(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function Yy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Af:t="ENVMAP_BLENDING_MULTIPLY";break;case Jm:t="ENVMAP_BLENDING_MIX";break;case Km:t="ENVMAP_BLENDING_ADD";break}return t}function Jy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ky(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zy(e),c=qy(e),u=$y(e),h=Yy(e),d=Jy(e),f=Oy(e),p=By(r),v=s.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(g=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rs?"#define TONE_MAPPING":"",e.toneMapping!==rs?Qt.tonemapping_pars_fragment:"",e.toneMapping!==rs?Fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Dy("linearToOutputTexel",e.outputColorSpace),Ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=bh(o),o=af(o,e),o=lf(o,e),a=bh(a),a=af(a,e),a=lf(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+o,x=_+m+a,w=sf(s,s.VERTEX_SHADER,y),S=sf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(A){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(w).trim(),N=s.getShaderInfoLog(S).trim(),k=!0,I=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,S);else{let O=of(s,w,"vertex"),H=of(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+O+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||N==="")&&(I=!1);I&&(A.diagnostics={runnable:k,programLog:U,vertexShader:{log:L,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(w),s.deleteShader(S),E=new mr(s,v),b=zy(s,v)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Iy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ky++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var jy=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wh(t),e.set(t,i)),i}},wh=class{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}};function Qy(n,t,e,i,s,r,o){let a=new Fa,l=new Mh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,A,U,L){let N=U.fog,k=L.geometry,I=b.isMeshStandardMaterial?U.environment:null,O=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),H=O&&O.mapping===ol?O.image.height:null,$=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=K!==void 0?K.length:0,Y=0;k.morphAttributes.position!==void 0&&(Y=1),k.morphAttributes.normal!==void 0&&(Y=2),k.morphAttributes.color!==void 0&&(Y=3);let st,F,X,et;if($){let te=pn[$];st=te.vertexShader,F=te.fragmentShader}else st=b.vertexShader,F=b.fragmentShader,l.update(b),X=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);let G=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),Q=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,Ct=!!b.map,bt=!!b.matcap,Dt=!!O,W=!!b.aoMap,Yt=!!b.lightMap,Vt=!!b.bumpMap,Zt=!!b.normalMap,Nt=!!b.displacementMap,ue=!!b.emissiveMap,Bt=!!b.metalnessMap,D=!!b.roughnessMap,R=b.anisotropy>0,J=b.clearcoat>0,ht=b.dispersion>0,rt=b.iridescence>0,ot=b.sheen>0,Pt=b.transmission>0,_t=R&&!!b.anisotropyMap,St=J&&!!b.clearcoatMap,ee=J&&!!b.clearcoatNormalMap,mt=J&&!!b.clearcoatRoughnessMap,Tt=rt&&!!b.iridescenceMap,Gt=rt&&!!b.iridescenceThicknessMap,Xt=ot&&!!b.sheenColorMap,At=ot&&!!b.sheenRoughnessMap,ne=!!b.specularMap,xt=!!b.specularColorMap,qt=!!b.specularIntensityMap,V=Pt&&!!b.transmissionMap,dt=Pt&&!!b.thicknessMap,nt=!!b.gradientMap,at=!!b.alphaMap,yt=b.alphaTest>0,lt=!!b.alphaHash,Rt=!!b.extensions,jt=rs;b.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=n.toneMapping);let ge={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:st,fragmentShader:F,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:Q,instancingColor:Q&&L.instanceColor!==null,instancingMorph:Q&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tr,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:bt,envMap:Dt,envMapMode:Dt&&O.mapping,envMapCubeUVHeight:H,aoMap:W,lightMap:Yt,bumpMap:Vt,normalMap:Zt,displacementMap:d&&Nt,emissiveMap:ue,normalMapObjectSpace:Zt&&b.normalMapType===i1,normalMapTangentSpace:Zt&&b.normalMapType===n1,metalnessMap:Bt,roughnessMap:D,anisotropy:R,anisotropyMap:_t,clearcoat:J,clearcoatMap:St,clearcoatNormalMap:ee,clearcoatRoughnessMap:mt,dispersion:ht,iridescence:rt,iridescenceMap:Tt,iridescenceThicknessMap:Gt,sheen:ot,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:ne,specularColorMap:xt,specularIntensityMap:qt,transmission:Pt,transmissionMap:V,thicknessMap:dt,gradientMap:nt,opaque:b.transparent===!1&&b.blending===dr&&b.alphaToCoverage===!1,alphaMap:at,alphaTest:yt,alphaHash:lt,combine:b.combine,mapUv:Ct&&v(b.map.channel),aoMapUv:W&&v(b.aoMap.channel),lightMapUv:Yt&&v(b.lightMap.channel),bumpMapUv:Vt&&v(b.bumpMap.channel),normalMapUv:Zt&&v(b.normalMap.channel),displacementMapUv:Nt&&v(b.displacementMap.channel),emissiveMapUv:ue&&v(b.emissiveMap.channel),metalnessMapUv:Bt&&v(b.metalnessMap.channel),roughnessMapUv:D&&v(b.roughnessMap.channel),anisotropyMapUv:_t&&v(b.anisotropyMap.channel),clearcoatMapUv:St&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(b.sheenRoughnessMap.channel),specularMapUv:ne&&v(b.specularMap.channel),specularColorMapUv:xt&&v(b.specularColorMap.channel),specularIntensityMapUv:qt&&v(b.specularIntensityMap.channel),transmissionMapUv:V&&v(b.transmissionMap.channel),thicknessMapUv:dt&&v(b.thicknessMap.channel),alphaMapUv:at&&v(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Zt||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Ct||at),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:j,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:ue&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)M.push(A),M.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let M=p[b.type],A;if(M){let U=pn[M];A=Un.clone(U.uniforms)}else A=b.uniforms;return A}function w(b,M){let A;for(let U=0,L=u.length;U<L;U++){let N=u[U];if(N.cacheKey===M){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Ky(n,M,b,r),u.push(A)),A}function S(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:E}}function t_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function e_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function uf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function df(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,p,v,g){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},n[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),t++,m}function a(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||e_),i.length>1&&i.sort(d||uf),s.length>1&&s.sort(d||uf)}function u(){for(let h=t,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function n_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new df,n.set(i,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function i_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Wt};break;case"SpotLight":e={position:new z,direction:new z,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function s_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var r_=0;function o_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function a_(n){let t=new i_,e=s_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new Ie,o=new Ie;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,y=0,x=0,w=0,S=0,T=0;c.sort(o_);for(let b=0,M=c.length;b<M;b++){let A=c[b],U=A.color,L=A.intensity,N=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*L,h+=U.g*L,d+=U.b*L;else if(A.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(A.sh.coefficients[I],L);T++}else if(A.isDirectionalLight){let I=t.get(A);if(I.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let O=A.shadow,H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=A.shadow.matrix,_++}i.directional[f]=I,f++}else if(A.isSpotLight){let I=t.get(A);I.position.setFromMatrixPosition(A.matrixWorld),I.color.copy(U).multiplyScalar(L),I.distance=N,I.coneCos=Math.cos(A.angle),I.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),I.decay=A.decay,i.spot[v]=I;let O=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,O.updateMatrices(A),A.castShadow&&S++),i.spotLightMatrix[v]=O.matrix,A.castShadow){let H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=k,x++}v++}else if(A.isRectAreaLight){let I=t.get(A);I.color.copy(U).multiplyScalar(L),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=I,g++}else if(A.isPointLight){let I=t.get(A);if(I.color.copy(A.color).multiplyScalar(A.intensity),I.distance=A.distance,I.decay=A.decay,A.castShadow){let O=A.shadow,H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=A.shadow.matrix,y++}i.point[p]=I,p++}else if(A.isHemisphereLight){let I=t.get(A);I.skyColor.copy(A.color).multiplyScalar(L),I.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[m]=I,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let E=i.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==_||E.numPointShadows!==y||E.numSpotShadows!==x||E.numSpotMaps!==w||E.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,E.directionalLength=f,E.pointLength=p,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=_,E.numPointShadows=y,E.numSpotShadows=x,E.numSpotMaps=w,E.numLightProbes=T,i.version=r_++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0,g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let y=c[m];if(y.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(y.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function ff(n){let t=new a_(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function l_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ff(n),t.set(s,[a])):r>=o.length?(a=new ff(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Sh=class extends cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Th=class extends cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u_(n,t,e){let i=new Ha,s=new Et,r=new Et,o=new be,a=new Sh({depthPacking:e1}),l=new Th,c={},u=e.maxTextureSize,h={[os]:_n,[_n]:os,[yn]:yn},d=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:c_,fragmentShader:h_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let m=this.type;this.render=function(S,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let L=m!==Ui&&this.type===Ui,N=m===Ui&&this.type!==Ui;for(let k=0,I=S.length;k<I;k++){let O=S[k],H=O.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||L===!0||N===!0){let ct=this.type!==Ui?{minFilter:ni,magFilter:ni}:{};H.map!==null&&H.map.dispose(),H.map=new Ze(s.x,s.y,ct),H.map.texture.name=O.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let K=H.getViewportCount();for(let ct=0;ct<K;ct++){let Y=H.getViewport(ct);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),U.viewport(o),H.updateMatrices(O,ct),i=H.getFrustum(),x(T,E,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&_(H,E),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,A)};function _(S,T){let E=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ze(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,E,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,E,f,v,null)}function y(S,T,E,b){let M=null,A=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=E.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let U=M.uuid,L=T.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let k=N[L];k===void 0&&(k=M.clone(),N[L]=k,T.addEventListener("dispose",w)),M=k}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Ui?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=n.properties.get(M);U.light=E}return M}function x(S,T,E,b,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ui)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);let L=t.update(S),N=S.material;if(Array.isArray(N)){let k=L.groups;for(let I=0,O=k.length;I<O;I++){let H=k[I],$=N[H.materialIndex];if($&&$.visible){let K=y(S,$,b,M);S.onBeforeShadow(n,S,T,E,L,K,H),n.renderBufferDirect(E,null,L,K,S,H),S.onAfterShadow(n,S,T,E,L,K,H)}}}else if(N.visible){let k=y(S,N,b,M);S.onBeforeShadow(n,S,T,E,L,k,null),n.renderBufferDirect(E,null,L,k,S,null),S.onAfterShadow(n,S,T,E,L,k,null)}}let U=S.children;for(let L=0,N=U.length;L<N;L++)x(U[L],T,E,b,M)}function w(S){S.target.removeEventListener("dispose",w);for(let E in c){let b=c[E],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var d_={[Rc]:Cc,[Pc]:Lc,[Ic]:Uc,[gr]:kc,[Cc]:Rc,[Lc]:Pc,[Uc]:Ic,[kc]:gr};function f_(n,t){function e(){let V=!1,dt=new be,nt=null,at=new be(0,0,0,0);return{setMask:function(yt){nt!==yt&&!V&&(n.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){V=yt},setClear:function(yt,lt,Rt,jt,ge){ge===!0&&(yt*=jt,lt*=jt,Rt*=jt),dt.set(yt,lt,Rt,jt),at.equals(dt)===!1&&(n.clearColor(yt,lt,Rt,jt),at.copy(dt))},reset:function(){V=!1,nt=null,at.set(-1,0,0,0)}}}function i(){let V=!1,dt=!1,nt=null,at=null,yt=null;return{setReversed:function(lt){if(dt!==lt){let Rt=t.get("EXT_clip_control");dt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let jt=yt;yt=null,this.setClear(jt)}dt=lt},getReversed:function(){return dt},setTest:function(lt){lt?G(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!V&&(n.depthMask(lt),nt=lt)},setFunc:function(lt){if(dt&&(lt=d_[lt]),at!==lt){switch(lt){case Rc:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Pc:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case kc:n.depthFunc(n.GEQUAL);break;case Lc:n.depthFunc(n.GREATER);break;case Uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=lt}},setLocked:function(lt){V=lt},setClear:function(lt){yt!==lt&&(dt&&(lt=1-lt),n.clearDepth(lt),yt=lt)},reset:function(){V=!1,nt=null,at=null,yt=null,dt=!1}}}function s(){let V=!1,dt=null,nt=null,at=null,yt=null,lt=null,Rt=null,jt=null,ge=null;return{setTest:function(te){V||(te?G(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(te){dt!==te&&!V&&(n.stencilMask(te),dt=te)},setFunc:function(te,ce,ke){(nt!==te||at!==ce||yt!==ke)&&(n.stencilFunc(te,ce,ke),nt=te,at=ce,yt=ke)},setOp:function(te,ce,ke){(lt!==te||Rt!==ce||jt!==ke)&&(n.stencilOp(te,ce,ke),lt=te,Rt=ce,jt=ke)},setLocked:function(te){V=te},setClear:function(te){ge!==te&&(n.clearStencil(te),ge=te)},reset:function(){V=!1,dt=null,nt=null,at=null,yt=null,lt=null,Rt=null,jt=null,ge=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,w=null,S=null,T=new Wt(0,0,0),E=0,b=!1,M=null,A=null,U=null,L=null,N=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,O=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=O>=2);let $=null,K={},ct=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),st=new be().fromArray(ct),F=new be().fromArray(Y);function X(V,dt,nt,at){let yt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(V,lt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<nt;Rt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(dt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return lt}let et={};et[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(gr),Vt(!1),Zt(md),G(n.CULL_FACE),W(vi);function G(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function j(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Q(V,dt){return h[V]!==dt?(n.bindFramebuffer(V,dt),h[V]=dt,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function ft(V,dt){let nt=f,at=!1;if(V){nt=d.get(dt),nt===void 0&&(nt=[],d.set(dt,nt));let yt=V.textures;if(nt.length!==yt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Rt=yt.length;lt<Rt;lt++)nt[lt]=n.COLOR_ATTACHMENT0+lt;nt.length=yt.length,at=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,at=!0);at&&n.drawBuffers(nt)}function Ct(V){return p!==V?(n.useProgram(V),p=V,!0):!1}let bt={[Ms]:n.FUNC_ADD,[Lm]:n.FUNC_SUBTRACT,[Um]:n.FUNC_REVERSE_SUBTRACT};bt[Dm]=n.MIN,bt[Fm]=n.MAX;let Dt={[Nm]:n.ZERO,[Om]:n.ONE,[Bm]:n.SRC_COLOR,[Ac]:n.SRC_ALPHA,[Xm]:n.SRC_ALPHA_SATURATE,[Gm]:n.DST_COLOR,[Hm]:n.DST_ALPHA,[zm]:n.ONE_MINUS_SRC_COLOR,[Ec]:n.ONE_MINUS_SRC_ALPHA,[Wm]:n.ONE_MINUS_DST_COLOR,[Vm]:n.ONE_MINUS_DST_ALPHA,[Zm]:n.CONSTANT_COLOR,[qm]:n.ONE_MINUS_CONSTANT_COLOR,[$m]:n.CONSTANT_ALPHA,[Ym]:n.ONE_MINUS_CONSTANT_ALPHA};function W(V,dt,nt,at,yt,lt,Rt,jt,ge,te){if(V===vi){v===!0&&(j(n.BLEND),v=!1);return}if(v===!1&&(G(n.BLEND),v=!0),V!==km){if(V!==g||te!==b){if((m!==Ms||x!==Ms)&&(n.blendEquation(n.FUNC_ADD),m=Ms,x=Ms),te)switch(V){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFunc(n.ONE,n.ONE);break;case gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,y=null,w=null,S=null,T.set(0,0,0),E=0,g=V,b=te}return}yt=yt||dt,lt=lt||nt,Rt=Rt||at,(dt!==m||yt!==x)&&(n.blendEquationSeparate(bt[dt],bt[yt]),m=dt,x=yt),(nt!==_||at!==y||lt!==w||Rt!==S)&&(n.blendFuncSeparate(Dt[nt],Dt[at],Dt[lt],Dt[Rt]),_=nt,y=at,w=lt,S=Rt),(jt.equals(T)===!1||ge!==E)&&(n.blendColor(jt.r,jt.g,jt.b,ge),T.copy(jt),E=ge),g=V,b=!1}function Yt(V,dt){V.side===yn?j(n.CULL_FACE):G(n.CULL_FACE);let nt=V.side===_n;dt&&(nt=!nt),Vt(nt),V.blending===dr&&V.transparent===!1?W(vi):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function Zt(V){V!==Cm?(G(n.CULL_FACE),V!==A&&(V===md?n.cullFace(n.BACK):V===Pm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),A=V}function Nt(V){V!==U&&(I&&n.lineWidth(V),U=V)}function ue(V,dt,nt){V?(G(n.POLYGON_OFFSET_FILL),(L!==dt||N!==nt)&&(n.polygonOffset(dt,nt),L=dt,N=nt)):j(n.POLYGON_OFFSET_FILL)}function Bt(V){V?G(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function D(V){V===void 0&&(V=n.TEXTURE0+k-1),$!==V&&(n.activeTexture(V),$=V)}function R(V,dt,nt){nt===void 0&&($===null?nt=n.TEXTURE0+k-1:nt=$);let at=K[nt];at===void 0&&(at={type:void 0,texture:void 0},K[nt]=at),(at.type!==V||at.texture!==dt)&&($!==nt&&(n.activeTexture(nt),$=nt),n.bindTexture(V,dt||et[V]),at.type=V,at.texture=dt)}function J(){let V=K[$];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ht(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(V){st.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),st.copy(V))}function At(V){F.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),F.copy(V))}function ne(V,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let at=nt.get(V);at===void 0&&(at=n.getUniformBlockIndex(dt,V.name),nt.set(V,at))}function xt(V,dt){let at=c.get(dt).get(V);l.get(dt)!==at&&(n.uniformBlockBinding(dt,at,V.__bindingPointIndex),l.set(dt,at))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,K={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,w=null,S=null,T=new Wt(0,0,0),E=0,b=!1,M=null,A=null,U=null,L=null,N=null,st.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:j,bindFramebuffer:Q,drawBuffers:ft,useProgram:Ct,setBlending:W,setMaterial:Yt,setFlipSided:Vt,setCullFace:Zt,setLineWidth:Nt,setPolygonOffset:ue,setScissorTest:Bt,activeTexture:D,bindTexture:R,unbindTexture:J,compressedTexImage2D:ht,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Gt,updateUBOMapping:ne,uniformBlockBinding:xt,texStorage2D:ee,texStorage3D:mt,texSubImage2D:ot,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:St,scissor:Xt,viewport:At,reset:qt}}function pf(n,t,e,i){let s=p_(i);switch(e){case If:return n*t;case Lf:return n*t;case Uf:return n*t*2;case Df:return n*t/s.components*s.byteLength;case au:return n*t/s.components*s.byteLength;case Ff:return n*t*2/s.components*s.byteLength;case lu:return n*t*2/s.components*s.byteLength;case kf:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case cu:return n*t*4/s.components*s.byteLength;case Aa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:case Vc:return Math.max(n,16)*Math.max(t,8)/4;case Bc:case Hc:return Math.max(n,8)*Math.max(t,8)/2;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pa:case oh:case ah:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Nf:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ch:case hh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p_(n){switch(n){case zi:case Rf:return{byteLength:1,components:1};case po:case Cf:case Ln:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case Es:case su:case Fi:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function m_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,R){return f?new OffscreenCanvas(D,R):La("canvas")}function v(D,R,J){let ht=1,rt=Bt(D);if((rt.width>J||rt.height>J)&&(ht=J/Math.max(rt.width,rt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ot=Math.floor(ht*rt.width),Pt=Math.floor(ht*rt.height);h===void 0&&(h=p(ot,Pt));let _t=R?p(ot,Pt):h;return _t.width=ot,_t.height=Pt,_t.getContext("2d").drawImage(D,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+ot+"x"+Pt+")."),_t}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,R,J,ht,rt=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ot=R;if(R===n.RED&&(J===n.FLOAT&&(ot=n.R32F),J===n.HALF_FLOAT&&(ot=n.R16F),J===n.UNSIGNED_BYTE&&(ot=n.R8)),R===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.R8UI),J===n.UNSIGNED_SHORT&&(ot=n.R16UI),J===n.UNSIGNED_INT&&(ot=n.R32UI),J===n.BYTE&&(ot=n.R8I),J===n.SHORT&&(ot=n.R16I),J===n.INT&&(ot=n.R32I)),R===n.RG&&(J===n.FLOAT&&(ot=n.RG32F),J===n.HALF_FLOAT&&(ot=n.RG16F),J===n.UNSIGNED_BYTE&&(ot=n.RG8)),R===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RG8UI),J===n.UNSIGNED_SHORT&&(ot=n.RG16UI),J===n.UNSIGNED_INT&&(ot=n.RG32UI),J===n.BYTE&&(ot=n.RG8I),J===n.SHORT&&(ot=n.RG16I),J===n.INT&&(ot=n.RG32I)),R===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),J===n.UNSIGNED_INT&&(ot=n.RGB32UI),J===n.BYTE&&(ot=n.RGB8I),J===n.SHORT&&(ot=n.RGB16I),J===n.INT&&(ot=n.RGB32I)),R===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),J===n.UNSIGNED_INT&&(ot=n.RGBA32UI),J===n.BYTE&&(ot=n.RGBA8I),J===n.SHORT&&(ot=n.RGBA16I),J===n.INT&&(ot=n.RGBA32I)),R===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),R===n.RGBA){let Pt=rt?al:se.getTransfer(ht);J===n.FLOAT&&(ot=n.RGBA32F),J===n.HALF_FLOAT&&(ot=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ot=Pt===pe?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function x(D,R){let J;return D?R===null||R===Es||R===yr?J=n.DEPTH24_STENCIL8:R===Fi?J=n.DEPTH32F_STENCIL8:R===po&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Es||R===yr?J=n.DEPTH_COMPONENT24:R===Fi?J=n.DEPTH_COMPONENT32F:R===po&&(J=n.DEPTH_COMPONENT16),J}function w(D,R){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==ni&&D.minFilter!==gi?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function S(D){let R=D.target;R.removeEventListener("dispose",S),E(R),R.isVideoTexture&&u.delete(R)}function T(D){let R=D.target;R.removeEventListener("dispose",T),M(R)}function E(D){let R=i.get(D);if(R.__webglInit===void 0)return;let J=D.source,ht=d.get(J);if(ht){let rt=ht[R.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(D),Object.keys(ht).length===0&&d.delete(J)}i.remove(D)}function b(D){let R=i.get(D);n.deleteTexture(R.__webglTexture);let J=D.source,ht=d.get(J);delete ht[R.__cacheKey],o.memory.textures--}function M(D){let R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(R.__webglFramebuffer[ht]))for(let rt=0;rt<R.__webglFramebuffer[ht].length;rt++)n.deleteFramebuffer(R.__webglFramebuffer[ht][rt]);else n.deleteFramebuffer(R.__webglFramebuffer[ht]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ht])}else{if(Array.isArray(R.__webglFramebuffer))for(let ht=0;ht<R.__webglFramebuffer.length;ht++)n.deleteFramebuffer(R.__webglFramebuffer[ht]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ht=0;ht<R.__webglColorRenderbuffer.length;ht++)R.__webglColorRenderbuffer[ht]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ht]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=D.textures;for(let ht=0,rt=J.length;ht<rt;ht++){let ot=i.get(J[ht]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(J[ht])}i.remove(D)}let A=0;function U(){A=0}function L(){let D=A;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),A+=1,D}function N(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function k(D,R){let J=i.get(D);if(D.isVideoTexture&&Nt(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){let ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(J,D,R);return}}e.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+R)}function I(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){F(J,D,R);return}e.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+R)}function O(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){F(J,D,R);return}e.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+R)}function H(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){X(J,D,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+R)}let $={[Nc]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},K={[ni]:n.NEAREST,[Qm]:n.NEAREST_MIPMAP_NEAREST,[jo]:n.NEAREST_MIPMAP_LINEAR,[gi]:n.LINEAR,[$l]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},ct={[s1]:n.NEVER,[h1]:n.ALWAYS,[r1]:n.LESS,[Of]:n.LEQUAL,[o1]:n.EQUAL,[c1]:n.GEQUAL,[a1]:n.GREATER,[l1]:n.NOTEQUAL};function Y(D,R){if(R.type===Fi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===gi||R.magFilter===$l||R.magFilter===jo||R.magFilter===As||R.minFilter===gi||R.minFilter===$l||R.minFilter===jo||R.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,$[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,$[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,$[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,K[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,K[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ct[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ni||R.minFilter!==jo&&R.minFilter!==As||R.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function st(D,R){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",S));let ht=R.source,rt=d.get(ht);rt===void 0&&(rt={},d.set(ht,rt));let ot=N(R);if(ot!==D.__cacheKey){rt[ot]===void 0&&(rt[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),rt[ot].usedTimes++;let Pt=rt[D.__cacheKey];Pt!==void 0&&(rt[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(R)),D.__cacheKey=ot,D.__webglTexture=rt[ot].texture}return J}function F(D,R,J){let ht=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=n.TEXTURE_3D);let rt=st(D,R),ot=R.source;e.bindTexture(ht,D.__webglTexture,n.TEXTURE0+J);let Pt=i.get(ot);if(ot.version!==Pt.__version||rt===!0){e.activeTexture(n.TEXTURE0+J);let _t=se.getPrimaries(se.workingColorSpace),St=R.colorSpace===ss?null:se.getPrimaries(R.colorSpace),ee=R.colorSpace===ss||_t===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let mt=v(R.image,!1,s.maxTextureSize);mt=ue(R,mt);let Tt=r.convert(R.format,R.colorSpace),Gt=r.convert(R.type),Xt=y(R.internalFormat,Tt,Gt,R.colorSpace,R.isVideoTexture);Y(ht,R);let At,ne=R.mipmaps,xt=R.isVideoTexture!==!0,qt=Pt.__version===void 0||rt===!0,V=ot.dataReady,dt=w(R,mt);if(R.isDepthTexture)Xt=x(R.format===_r,R.type),qt&&(xt?e.texStorage2D(n.TEXTURE_2D,1,Xt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Xt,mt.width,mt.height,0,Tt,Gt,null));else if(R.isDataTexture)if(ne.length>0){xt&&qt&&e.texStorage2D(n.TEXTURE_2D,dt,Xt,ne[0].width,ne[0].height);for(let nt=0,at=ne.length;nt<at;nt++)At=ne[nt],xt?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Tt,Gt,At.data):e.texImage2D(n.TEXTURE_2D,nt,Xt,At.width,At.height,0,Tt,Gt,At.data);R.generateMipmaps=!1}else xt?(qt&&e.texStorage2D(n.TEXTURE_2D,dt,Xt,mt.width,mt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt.width,mt.height,Tt,Gt,mt.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,mt.width,mt.height,0,Tt,Gt,mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){xt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Xt,ne[0].width,ne[0].height,mt.depth);for(let nt=0,at=ne.length;nt<at;nt++)if(At=ne[nt],R.format!==ei)if(Tt!==null)if(xt){if(V)if(R.layerUpdates.size>0){let yt=pf(At.width,At.height,R.format,R.type);for(let lt of R.layerUpdates){let Rt=At.data.subarray(lt*yt/At.data.BYTES_PER_ELEMENT,(lt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,lt,At.width,At.height,1,Tt,Rt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,mt.depth,Tt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Xt,At.width,At.height,mt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,mt.depth,Tt,Gt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Xt,At.width,At.height,mt.depth,0,Tt,Gt,At.data)}else{xt&&qt&&e.texStorage2D(n.TEXTURE_2D,dt,Xt,ne[0].width,ne[0].height);for(let nt=0,at=ne.length;nt<at;nt++)At=ne[nt],R.format!==ei?Tt!==null?xt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Xt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,At.width,At.height,Tt,Gt,At.data):e.texImage2D(n.TEXTURE_2D,nt,Xt,At.width,At.height,0,Tt,Gt,At.data)}else if(R.isDataArrayTexture)if(xt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Xt,mt.width,mt.height,mt.depth),V)if(R.layerUpdates.size>0){let nt=pf(mt.width,mt.height,R.format,R.type);for(let at of R.layerUpdates){let yt=mt.data.subarray(at*nt/mt.data.BYTES_PER_ELEMENT,(at+1)*nt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,mt.width,mt.height,1,Tt,Gt,yt)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Tt,Gt,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,mt.width,mt.height,mt.depth,0,Tt,Gt,mt.data);else if(R.isData3DTexture)xt?(qt&&e.texStorage3D(n.TEXTURE_3D,dt,Xt,mt.width,mt.height,mt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Tt,Gt,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,mt.width,mt.height,mt.depth,0,Tt,Gt,mt.data);else if(R.isFramebufferTexture){if(qt)if(xt)e.texStorage2D(n.TEXTURE_2D,dt,Xt,mt.width,mt.height);else{let nt=mt.width,at=mt.height;for(let yt=0;yt<dt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Xt,nt,at,0,Tt,Gt,null),nt>>=1,at>>=1}}else if(ne.length>0){if(xt&&qt){let nt=Bt(ne[0]);e.texStorage2D(n.TEXTURE_2D,dt,Xt,nt.width,nt.height)}for(let nt=0,at=ne.length;nt<at;nt++)At=ne[nt],xt?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Tt,Gt,At):e.texImage2D(n.TEXTURE_2D,nt,Xt,Tt,Gt,At);R.generateMipmaps=!1}else if(xt){if(qt){let nt=Bt(mt);e.texStorage2D(n.TEXTURE_2D,dt,Xt,nt.width,nt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Gt,mt)}else e.texImage2D(n.TEXTURE_2D,0,Xt,Tt,Gt,mt);g(R)&&m(ht),Pt.__version=ot.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function X(D,R,J){if(R.image.length!==6)return;let ht=st(D,R),rt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);let ot=i.get(rt);if(rt.version!==ot.__version||ht===!0){e.activeTexture(n.TEXTURE0+J);let Pt=se.getPrimaries(se.workingColorSpace),_t=R.colorSpace===ss?null:se.getPrimaries(R.colorSpace),St=R.colorSpace===ss||Pt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ee=R.isCompressedTexture||R.image[0].isCompressedTexture,mt=R.image[0]&&R.image[0].isDataTexture,Tt=[];for(let at=0;at<6;at++)!ee&&!mt?Tt[at]=v(R.image[at],!0,s.maxCubemapSize):Tt[at]=mt?R.image[at].image:R.image[at],Tt[at]=ue(R,Tt[at]);let Gt=Tt[0],Xt=r.convert(R.format,R.colorSpace),At=r.convert(R.type),ne=y(R.internalFormat,Xt,At,R.colorSpace),xt=R.isVideoTexture!==!0,qt=ot.__version===void 0||ht===!0,V=rt.dataReady,dt=w(R,Gt);Y(n.TEXTURE_CUBE_MAP,R);let nt;if(ee){xt&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,ne,Gt.width,Gt.height);for(let at=0;at<6;at++){nt=Tt[at].mipmaps;for(let yt=0;yt<nt.length;yt++){let lt=nt[yt];R.format!==ei?Xt!==null?xt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,0,0,lt.width,lt.height,Xt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,ne,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,0,0,lt.width,lt.height,Xt,At,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,ne,lt.width,lt.height,0,Xt,At,lt.data)}}}else{if(nt=R.mipmaps,xt&&qt){nt.length>0&&dt++;let at=Bt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,ne,at.width,at.height)}for(let at=0;at<6;at++)if(mt){xt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Tt[at].width,Tt[at].height,Xt,At,Tt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,Tt[at].width,Tt[at].height,0,Xt,At,Tt[at].data);for(let yt=0;yt<nt.length;yt++){let Rt=nt[yt].image[at].image;xt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,0,0,Rt.width,Rt.height,Xt,At,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,ne,Rt.width,Rt.height,0,Xt,At,Rt.data)}}else{xt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Xt,At,Tt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,Xt,At,Tt[at]);for(let yt=0;yt<nt.length;yt++){let lt=nt[yt];xt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,0,0,Xt,At,lt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,ne,Xt,At,lt.image[at])}}}g(R)&&m(n.TEXTURE_CUBE_MAP),ot.__version=rt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function et(D,R,J,ht,rt,ot){let Pt=r.convert(J.format,J.colorSpace),_t=r.convert(J.type),St=y(J.internalFormat,Pt,_t,J.colorSpace),ee=i.get(R),mt=i.get(J);if(mt.__renderTarget=R,!ee.__hasExternalTextures){let Tt=Math.max(1,R.width>>ot),Gt=Math.max(1,R.height>>ot);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,ot,St,Tt,Gt,R.depth,0,Pt,_t,null):e.texImage2D(rt,ot,St,Tt,Gt,0,Pt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),Zt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,mt.__webglTexture,0,Vt(R)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,mt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(D,R,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){let ht=R.depthTexture,rt=ht&&ht.isDepthTexture?ht.type:null,ot=x(R.stencilBuffer,rt),Pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=Vt(R);Zt(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,ot,R.width,R.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,ot,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ot,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,D)}else{let ht=R.textures;for(let rt=0;rt<ht.length;rt++){let ot=ht[rt],Pt=r.convert(ot.format,ot.colorSpace),_t=r.convert(ot.type),St=y(ot.internalFormat,Pt,_t,ot.colorSpace),ee=Vt(R);J&&Zt(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,St,R.width,R.height):Zt(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,St,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,St,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function j(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=i.get(R.depthTexture);ht.__renderTarget=R,(!ht.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let rt=ht.__webglTexture,ot=Vt(R);if(R.depthTexture.format===fr)Zt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(R.depthTexture.format===_r)Zt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Q(D){let R=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let ht=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ht){let rt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ht.removeEventListener("dispose",rt)};ht.addEventListener("dispose",rt),R.__depthDisposeCallback=rt}R.__boundDepthTexture=ht}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");j(R.__webglFramebuffer,D)}else if(J){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]===void 0)R.__webglDepthbuffer[ht]=n.createRenderbuffer(),G(R.__webglDepthbuffer[ht],D,!1);else{let rt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=R.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),G(R.__webglDepthbuffer,D,!1);else{let ht=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(D,R,J){let ht=i.get(D);R!==void 0&&et(ht.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Q(D)}function Ct(D){let R=D.texture,J=i.get(D),ht=i.get(R);D.addEventListener("dispose",T);let rt=D.textures,ot=D.isWebGLCubeRenderTarget===!0,Pt=rt.length>1;if(Pt||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=R.version,o.memory.textures++),ot){J.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[_t]=[];for(let St=0;St<R.mipmaps.length;St++)J.__webglFramebuffer[_t][St]=n.createFramebuffer()}else J.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let _t=0;_t<R.mipmaps.length;_t++)J.__webglFramebuffer[_t]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let _t=0,St=rt.length;_t<St;_t++){let ee=i.get(rt[_t]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Zt(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let _t=0;_t<rt.length;_t++){let St=rt[_t];J.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[_t]);let ee=r.convert(St.format,St.colorSpace),mt=r.convert(St.type),Tt=y(St.internalFormat,ee,mt,St.colorSpace,D.isXRRenderTarget===!0),Gt=Vt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Tt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,J.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),G(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),Y(n.TEXTURE_CUBE_MAP,R);for(let _t=0;_t<6;_t++)if(R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)et(J.__webglFramebuffer[_t][St],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else et(J.__webglFramebuffer[_t],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);g(R)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,St=rt.length;_t<St;_t++){let ee=rt[_t],mt=i.get(ee);e.bindTexture(n.TEXTURE_2D,mt.__webglTexture),Y(n.TEXTURE_2D,ee),et(J.__webglFramebuffer,D,ee,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),g(ee)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,ht.__webglTexture),Y(_t,R),R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)et(J.__webglFramebuffer[St],D,R,n.COLOR_ATTACHMENT0,_t,St);else et(J.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,_t,0);g(R)&&m(_t),e.unbindTexture()}D.depthBuffer&&Q(D)}function bt(D){let R=D.textures;for(let J=0,ht=R.length;J<ht;J++){let rt=R[J];if(g(rt)){let ot=_(D),Pt=i.get(rt).__webglTexture;e.bindTexture(ot,Pt),m(ot),e.unbindTexture()}}}let Dt=[],W=[];function Yt(D){if(D.samples>0){if(Zt(D)===!1){let R=D.textures,J=D.width,ht=D.height,rt=n.COLOR_BUFFER_BIT,ot=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(D),_t=R.length>1;if(_t)for(let St=0;St<R.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let St=0;St<R.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);let ee=i.get(R[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,J,ht,0,0,J,ht,rt,n.NEAREST),l===!0&&(Dt.length=0,W.length=0,Dt.push(n.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(ot),W.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let St=0;St<R.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);let ee=i.get(R[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Vt(D){return Math.min(s.maxSamples,D.samples)}function Zt(D){let R=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Nt(D){let R=o.render.frame;u.get(D)!==R&&(u.set(D,R),D.update())}function ue(D,R){let J=D.colorSpace,ht=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Tr&&J!==ss&&(se.getTransfer(J)===pe?(ht!==ei||rt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Bt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=ft,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Zt}function g_(n,t){function e(i,s=ss){let r,o=se.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===ru)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rf)return n.BYTE;if(i===Cf)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===su)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===If)return n.ALPHA;if(i===kf)return n.RGB;if(i===ei)return n.RGBA;if(i===Lf)return n.LUMINANCE;if(i===Uf)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Df)return n.RED;if(i===au)return n.RED_INTEGER;if(i===Ff)return n.RG;if(i===lu)return n.RG_INTEGER;if(i===cu)return n.RGBA_INTEGER;if(i===Aa||i===Ea||i===Ra||i===Ca)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===zc||i===Hc||i===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gc||i===Wc||i===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gc||i===Wc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zc||i===qc||i===$c||i===Yc||i===Jc||i===Kc||i===jc||i===Qc||i===th||i===eh||i===nh||i===ih||i===sh||i===rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===oh||i===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nf||i===lh||i===ch||i===hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ah=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},In=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},v_={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new In;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Wn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new oe({vertexShader:x_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends as{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,v=new Eh,g=e.getContextAttributes(),m=null,_=null,y=[],x=[],w=new Et,S=null,T=new fn;T.viewport=new be;let E=new fn;E.viewport=new be;let b=[T,E],M=new Ah,A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=y[F];return X===void 0&&(X=new ho,y[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=y[F];return X===void 0&&(X=new ho,y[F]=X),X.getGripSpace()},this.getHand=function(F){let X=y[F];return X===void 0&&(X=new ho,y[F]=X),X.getHandSpace()};function L(F){let X=x.indexOf(F.inputSource);if(X===-1)return;let et=y[X];et!==void 0&&(et.update(F.inputSource,F.frame,c||o),et.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let F=0;F<y.length;F++){let X=x[F];X!==null&&(x[F]=null,y[F].disconnect(X))}A=null,U=null,v.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,_=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){let X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ze(f.framebufferWidth,f.framebufferHeight,{format:ei,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,et=null,G=null;g.depth&&(G=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=g.stencil?_r:fr,et=g.stencil?yr:Es);let j={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(j),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ze(d.textureWidth,d.textureHeight,{format:ei,type:zi,depthTexture:new Wa(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(F){for(let X=0;X<F.removed.length;X++){let et=F.removed[X],G=x.indexOf(et);G>=0&&(x[G]=null,y[G].disconnect(et))}for(let X=0;X<F.added.length;X++){let et=F.added[X],G=x.indexOf(et);if(G===-1){for(let Q=0;Q<y.length;Q++)if(Q>=x.length){x.push(et),G=Q;break}else if(x[Q]===null){x[Q]=et,G=Q;break}if(G===-1)break}let j=y[G];j&&j.connect(et)}}let I=new z,O=new z;function H(F,X,et){I.setFromMatrixPosition(X.matrixWorld),O.setFromMatrixPosition(et.matrixWorld);let G=I.distanceTo(O),j=X.projectionMatrix.elements,Q=et.projectionMatrix.elements,ft=j[14]/(j[10]-1),Ct=j[14]/(j[10]+1),bt=(j[9]+1)/j[5],Dt=(j[9]-1)/j[5],W=(j[8]-1)/j[0],Yt=(Q[8]+1)/Q[0],Vt=ft*W,Zt=ft*Yt,Nt=G/(-W+Yt),ue=Nt*-W;if(X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ue),F.translateZ(Nt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),j[10]===-1)F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Bt=ft+Nt,D=Ct+Nt,R=Vt-ue,J=Zt+(G-ue),ht=bt*Ct/D*Bt,rt=Dt*Ct/D*Bt;F.projectionMatrix.makePerspective(R,J,ht,rt,Bt,D),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function $(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let X=F.near,et=F.far;v.texture!==null&&(v.depthNear>0&&(X=v.depthNear),v.depthFar>0&&(et=v.depthFar)),M.near=E.near=T.near=X,M.far=E.far=T.far=et,(A!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far),T.layers.mask=F.layers.mask|2,E.layers.mask=F.layers.mask|4,M.layers.mask=T.layers.mask|E.layers.mask;let G=F.parent,j=M.cameras;$(M,G);for(let Q=0;Q<j.length;Q++)$(j[Q],G);j.length===2?H(M,T,E):M.projectionMatrix.copy(T.projectionMatrix),K(F,M,G)};function K(F,X,et){et===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(et.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=mo*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ct=null;function Y(F,X){if(u=X.getViewerPose(c||o),p=X,u!==null){let et=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let G=!1;et.length!==M.cameras.length&&(M.cameras.length=0,G=!0);for(let Q=0;Q<et.length;Q++){let ft=et[Q],Ct=null;if(f!==null)Ct=f.getViewport(ft);else{let Dt=h.getViewSubImage(d,ft);Ct=Dt.viewport,Q===0&&(t.setRenderTargetTextures(_,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(_))}let bt=b[Q];bt===void 0&&(bt=new fn,bt.layers.enable(Q),bt.viewport=new be,b[Q]=bt),bt.matrix.fromArray(ft.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(ft.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Q===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),G===!0&&M.cameras.push(bt)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")){let Q=h.getDepthInformation(et[0]);Q&&Q.isValid&&Q.texture&&v.init(t,Q,s.renderState)}}for(let et=0;et<y.length;et++){let G=x[et],j=y[et];G!==null&&j!==void 0&&j.update(G,X,c||o)}ct&&ct(F,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),p=null}let st=new Gf;st.setAnimationLoop(Y),this.setAnimationLoop=function(F){ct=F},this.dispose=function(){}}},_s=new Hi,__=new Ie;function b_(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Vf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===_n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===_n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,_s.copy(x),_s.x*=-1,_s.y*=-1,_s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(_s)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function M_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=s[_.id];x===void 0&&(p(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",g));let w=y.program;i.updateUBOMapping(_,w);let S=t.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function u(_){let y=h();_.__bindingPointIndex=y;let x=n.createBuffer(),w=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],x=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,T=x.length;S<T;S++){let E=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,M=E.length;b<M;b++){let A=E[b];if(f(A,S,b,w)===!0){let U=A.__offset,L=Array.isArray(A.value)?A.value:[A.value],N=0;for(let k=0;k<L.length;k++){let I=L[k],O=v(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,U+N,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,x,w){let S=_.value,T=y+"_"+x;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{let E=w[T];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return w[T]=S,!0}else if(E.equals(S)===!1)return E.copy(S),!0}return!1}function p(_){let y=_.uniforms,x=0,w=16;for(let T=0,E=y.length;T<E;T++){let b=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,A=b.length;M<A;M++){let U=b[M],L=Array.isArray(U.value)?U.value:[U.value];for(let N=0,k=L.length;N<k;N++){let I=L[N],O=v(I),H=x%w,$=H%O.boundary,K=H+$;x+=$,K!==0&&w-K<O.storage&&(x+=w-K),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=O.storage}}}let S=x%w;return S>0&&(x+=w-S),_.__size=x,_.__cache={},this}function v(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Xa=class{constructor(t={}){let{canvas:e=E1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=rs,this.toneMappingExposure=1;let x=this,w=!1,S=0,T=0,E=null,b=-1,M=null,A=new be,U=new be,L=null,N=new Wt(0),k=0,I=e.width,O=e.height,H=1,$=null,K=null,ct=new be(0,0,I,O),Y=new be(0,0,I,O),st=!1,F=new Ha,X=!1,et=!1,G=new Ie,j=new Ie,Q=new z,ft=new be,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Dt(){return E===null?H:1}let W=i;function Yt(P,Z){return e.getContext(P,Z)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kh}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),W===null){let Z="webgl2";if(W=Yt(Z,P),W===null)throw Yt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Vt,Zt,Nt,ue,Bt,D,R,J,ht,rt,ot,Pt,_t,St,ee,mt,Tt,Gt,Xt,At,ne,xt,qt,V;function dt(){Vt=new Ox(W),Vt.init(),xt=new g_(W,Vt),Zt=new kx(W,Vt,t,xt),Nt=new f_(W,Vt),Zt.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),ue=new Hx(W),Bt=new t_,D=new m_(W,Vt,Nt,Bt,Zt,xt,ue),R=new Ux(x),J=new Nx(x),ht=new $1(W),qt=new Px(W,ht),rt=new Bx(W,ht,ue,qt),ot=new Gx(W,rt,ht,ue),Xt=new Vx(W,Zt,D),mt=new Lx(Bt),Pt=new Qy(x,R,J,Vt,Zt,qt,mt),_t=new b_(x,Bt),St=new n_,ee=new l_(Vt),Gt=new Cx(x,R,J,Nt,ot,f,l),Tt=new u_(x,ot,Zt),V=new M_(W,ue,Zt,Nt),At=new Ix(W,Vt,ue),ne=new zx(W,Vt,ue),ue.programs=Pt.programs,x.capabilities=Zt,x.extensions=Vt,x.properties=Bt,x.renderLists=St,x.shadowMap=Tt,x.state=Nt,x.info=ue}dt();let nt=new Rh(x,W);this.xr=nt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let P=Vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(I,O,!1))},this.getSize=function(P){return P.set(I,O)},this.setSize=function(P,Z,tt=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,O=Z,e.width=Math.floor(P*H),e.height=Math.floor(Z*H),tt===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(I*H,O*H).floor()},this.setDrawingBufferSize=function(P,Z,tt){I=P,O=Z,H=tt,e.width=Math.floor(P*tt),e.height=Math.floor(Z*tt),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ct)},this.setViewport=function(P,Z,tt,it){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,Z,tt,it),Nt.viewport(A.copy(ct).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(Y)},this.setScissor=function(P,Z,tt,it){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,Z,tt,it),Nt.scissor(U.copy(Y).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(P){Nt.setScissorTest(st=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(P=!0,Z=!0,tt=!0){let it=0;if(P){let q=!1;if(E!==null){let gt=E.texture.format;q=gt===cu||gt===lu||gt===au}if(q){let gt=E.texture.type,Mt=gt===zi||gt===Es||gt===po||gt===yr||gt===ru||gt===ou,It=Gt.getClearColor(),kt=Gt.getClearAlpha(),$t=It.r,Jt=It.g,Lt=It.b;Mt?(p[0]=$t,p[1]=Jt,p[2]=Lt,p[3]=kt,W.clearBufferuiv(W.COLOR,0,p)):(v[0]=$t,v[1]=Jt,v[2]=Lt,v[3]=kt,W.clearBufferiv(W.COLOR,0,v))}else it|=W.COLOR_BUFFER_BIT}Z&&(it|=W.DEPTH_BUFFER_BIT),tt&&(it|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),St.dispose(),ee.dispose(),Bt.dispose(),R.dispose(),J.dispose(),ot.dispose(),qt.dispose(),V.dispose(),Pt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Yi),nt.removeEventListener("sessionend",ps),je.stop()};function at(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=ue.autoReset,Z=Tt.enabled,tt=Tt.autoUpdate,it=Tt.needsUpdate,q=Tt.type;dt(),ue.autoReset=P,Tt.enabled=Z,Tt.autoUpdate=tt,Tt.needsUpdate=it,Tt.type=q}function lt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Rt(P){let Z=P.target;Z.removeEventListener("dispose",Rt),jt(Z)}function jt(P){ge(P),Bt.remove(P)}function ge(P){let Z=Bt.get(P).programs;Z!==void 0&&(Z.forEach(function(tt){Pt.releaseProgram(tt)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,tt,it,q,gt){Z===null&&(Z=Ct);let Mt=q.isMesh&&q.matrixWorld.determinant()<0,It=jr(P,Z,tt,it,q);Nt.setMaterial(it,Mt);let kt=tt.index,$t=1;if(it.wireframe===!0){if(kt=rt.getWireframeAttribute(tt),kt===void 0)return;$t=2}let Jt=tt.drawRange,Lt=tt.attributes.position,he=Jt.start*$t,we=(Jt.start+Jt.count)*$t;gt!==null&&(he=Math.max(he,gt.start*$t),we=Math.min(we,(gt.start+gt.count)*$t)),kt!==null?(he=Math.max(he,0),we=Math.min(we,kt.count)):Lt!=null&&(he=Math.max(he,0),we=Math.min(we,Lt.count));let Ae=we-he;if(Ae<0||Ae===1/0)return;qt.setup(q,it,It,tt,kt);let vn,de=At;if(kt!==null&&(vn=ht.get(kt),de=ne,de.setIndex(vn)),q.isMesh)it.wireframe===!0?(Nt.setLineWidth(it.wireframeLinewidth*Dt()),de.setMode(W.LINES)):de.setMode(W.TRIANGLES);else if(q.isLine){let Ft=it.linewidth;Ft===void 0&&(Ft=1),Nt.setLineWidth(Ft*Dt()),q.isLineSegments?de.setMode(W.LINES):q.isLineLoop?de.setMode(W.LINE_LOOP):de.setMode(W.LINE_STRIP)}else q.isPoints?de.setMode(W.POINTS):q.isSprite&&de.setMode(W.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)de.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))de.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ft=q._multiDrawStarts,Ri=q._multiDrawCounts,fe=q._multiDrawCount,Yn=kt?ht.get(kt).bytesPerElement:1,Ys=Bt.get(it).currentProgram.getUniforms();for(let Rn=0;Rn<fe;Rn++)Ys.setValue(W,"_gl_DrawID",Rn),de.render(Ft[Rn]/Yn,Ri[Rn])}else if(q.isInstancedMesh)de.renderInstances(he,Ae,q.count);else if(tt.isInstancedBufferGeometry){let Ft=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ri=Math.min(tt.instanceCount,Ft);de.renderInstances(he,Ae,Ri)}else de.render(he,Ae)};function te(P,Z,tt){P.transparent===!0&&P.side===yn&&P.forceSinglePass===!1?(P.side=_n,P.needsUpdate=!0,Hn(P,Z,tt),P.side=os,P.needsUpdate=!0,Hn(P,Z,tt),P.side=yn):Hn(P,Z,tt)}this.compile=function(P,Z,tt=null){tt===null&&(tt=P),m=ee.get(tt),m.init(Z),y.push(m),tt.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),P!==tt&&P.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let it=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let gt=q.material;if(gt)if(Array.isArray(gt))for(let Mt=0;Mt<gt.length;Mt++){let It=gt[Mt];te(It,tt,q),it.add(It)}else te(gt,tt,q),it.add(gt)}),y.pop(),m=null,it},this.compileAsync=function(P,Z,tt=null){let it=this.compile(P,Z,tt);return new Promise(q=>{function gt(){if(it.forEach(function(Mt){Bt.get(Mt).currentProgram.isReady()&&it.delete(Mt)}),it.size===0){q(P);return}setTimeout(gt,10)}Vt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ce=null;function ke(P){ce&&ce(P)}function Yi(){je.stop()}function ps(){je.start()}let je=new Gf;je.setAnimationLoop(ke),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(P){ce=P,nt.setAnimationLoop(P),P===null?je.stop():je.start()},nt.addEventListener("sessionstart",Yi),nt.addEventListener("sessionend",ps),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(Z),Z=nt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Z,E),m=ee.get(P,y.length),m.init(Z),y.push(m),j.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F.setFromProjectionMatrix(j),et=this.localClippingEnabled,X=mt.init(this.clippingPlanes,et),g=St.get(P,_.length),g.init(),_.push(g),nt.enabled===!0&&nt.isPresenting===!0){let gt=x.xr.getDepthSensingMesh();gt!==null&&De(gt,Z,-1/0,x.sortObjects)}De(P,Z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort($,K),bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,bt&&Gt.addToRenderList(g,P),this.info.render.frame++,X===!0&&mt.beginShadows();let tt=m.state.shadowsArray;Tt.render(tt,P,Z),X===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=g.opaque,q=g.transmissive;if(m.setupLights(),Z.isArrayCamera){let gt=Z.cameras;if(q.length>0)for(let Mt=0,It=gt.length;Mt<It;Mt++){let kt=gt[Mt];$s(it,q,P,kt)}bt&&Gt.render(P);for(let Mt=0,It=gt.length;Mt<It;Mt++){let kt=gt[Mt];zn(g,P,kt,kt.viewport)}}else q.length>0&&$s(it,q,P,Z),bt&&Gt.render(P),zn(g,P,Z);E!==null&&(D.updateMultisampleRenderTarget(E),D.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(x,P,Z),qt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&mt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function De(P,Z,tt,it){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||F.intersectsSprite(P)){it&&ft.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);let Mt=ot.update(P),It=P.material;It.visible&&g.push(P,Mt,It,tt,ft.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||F.intersectsObject(P))){let Mt=ot.update(P),It=P.material;if(it&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ft.copy(P.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ft.copy(Mt.boundingSphere.center)),ft.applyMatrix4(P.matrixWorld).applyMatrix4(j)),Array.isArray(It)){let kt=Mt.groups;for(let $t=0,Jt=kt.length;$t<Jt;$t++){let Lt=kt[$t],he=It[Lt.materialIndex];he&&he.visible&&g.push(P,Mt,he,tt,ft.z,Lt)}}else It.visible&&g.push(P,Mt,It,tt,ft.z,null)}}let gt=P.children;for(let Mt=0,It=gt.length;Mt<It;Mt++)De(gt[Mt],Z,tt,it)}function zn(P,Z,tt,it){let q=P.opaque,gt=P.transmissive,Mt=P.transparent;m.setupLightsView(tt),X===!0&&mt.setGlobalState(x.clippingPlanes,tt),it&&Nt.viewport(A.copy(it)),q.length>0&&$n(q,Z,tt),gt.length>0&&$n(gt,Z,tt),Mt.length>0&&$n(Mt,Z,tt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function $s(P,Z,tt,it){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new Ze(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Ln:zi,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let gt=m.state.transmissionRenderTarget[it.id],Mt=it.viewport||A;gt.setSize(Mt.z,Mt.w);let It=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),bt&&Gt.render(tt);let kt=x.toneMapping;x.toneMapping=rs;let $t=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),X===!0&&mt.setGlobalState(x.clippingPlanes,it),$n(P,tt,it),D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Lt=0,he=Z.length;Lt<he;Lt++){let we=Z[Lt],Ae=we.object,vn=we.geometry,de=we.material,Ft=we.group;if(de.side===yn&&Ae.layers.test(it.layers)){let Ri=de.side;de.side=_n,de.needsUpdate=!0,En(Ae,tt,it,vn,de,Ft),de.side=Ri,de.needsUpdate=!0,Jt=!0}}Jt===!0&&(D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt))}x.setRenderTarget(It),x.setClearColor(N,k),$t!==void 0&&(it.viewport=$t),x.toneMapping=kt}function $n(P,Z,tt){let it=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,gt=P.length;q<gt;q++){let Mt=P[q],It=Mt.object,kt=Mt.geometry,$t=it===null?Mt.material:it,Jt=Mt.group;It.layers.test(tt.layers)&&En(It,Z,tt,kt,$t,Jt)}}function En(P,Z,tt,it,q,gt){P.onBeforeRender(x,Z,tt,it,q,gt),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,Z,tt,it,P,gt),q.transparent===!0&&q.side===yn&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,x.renderBufferDirect(tt,Z,it,q,P,gt),q.side=os,q.needsUpdate=!0,x.renderBufferDirect(tt,Z,it,q,P,gt),q.side=yn):x.renderBufferDirect(tt,Z,it,q,P,gt),P.onAfterRender(x,Z,tt,it,q,gt)}function Hn(P,Z,tt){Z.isScene!==!0&&(Z=Ct);let it=Bt.get(P),q=m.state.lights,gt=m.state.shadowsArray,Mt=q.state.version,It=Pt.getParameters(P,q.state,gt,Z,tt),kt=Pt.getProgramCacheKey(It),$t=it.programs;it.environment=P.isMeshStandardMaterial?Z.environment:null,it.fog=Z.fog,it.envMap=(P.isMeshStandardMaterial?J:R).get(P.envMap||it.environment),it.envMapRotation=it.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",Rt),$t=new Map,it.programs=$t);let Jt=$t.get(kt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Mt)return Ei(P,It),Jt}else It.uniforms=Pt.getUniforms(P),P.onBeforeCompile(It,x),Jt=Pt.acquireProgram(It,kt),$t.set(kt,Jt),it.uniforms=It.uniforms;let Lt=it.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=mt.uniform),Ei(P,It),it.needsLights=Sm(P),it.lightsStateVersion=Mt,it.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.directionalShadowMap.value=q.state.directionalShadowMap,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotShadowMap.value=q.state.spotShadowMap,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMap.value=q.state.pointShadowMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function qo(P){if(P.uniformsList===null){let Z=P.currentProgram.getUniforms();P.uniformsList=mr.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Ei(P,Z){let tt=Bt.get(P);tt.outputColorSpace=Z.outputColorSpace,tt.batching=Z.batching,tt.batchingColor=Z.batchingColor,tt.instancing=Z.instancing,tt.instancingColor=Z.instancingColor,tt.instancingMorph=Z.instancingMorph,tt.skinning=Z.skinning,tt.morphTargets=Z.morphTargets,tt.morphNormals=Z.morphNormals,tt.morphColors=Z.morphColors,tt.morphTargetsCount=Z.morphTargetsCount,tt.numClippingPlanes=Z.numClippingPlanes,tt.numIntersection=Z.numClipIntersection,tt.vertexAlphas=Z.vertexAlphas,tt.vertexTangents=Z.vertexTangents,tt.toneMapping=Z.toneMapping}function jr(P,Z,tt,it,q){Z.isScene!==!0&&(Z=Ct),D.resetTextureUnits();let gt=Z.fog,Mt=it.isMeshStandardMaterial?Z.environment:null,It=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Tr,kt=(it.isMeshStandardMaterial?J:R).get(it.envMap||Mt),$t=it.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Jt=!!tt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Lt=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,we=!!tt.morphAttributes.color,Ae=rs;it.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ae=x.toneMapping);let vn=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,de=vn!==void 0?vn.length:0,Ft=Bt.get(it),Ri=m.state.lights;if(X===!0&&(et===!0||P!==M)){let Vn=P===M&&it.id===b;mt.setState(it,P,Vn)}let fe=!1;it.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ri.state.version||Ft.outputColorSpace!==It||q.isBatchedMesh&&Ft.batching===!1||!q.isBatchedMesh&&Ft.batching===!0||q.isBatchedMesh&&Ft.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ft.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||q.isInstancedMesh&&Ft.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ft.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ft.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ft.instancingMorph===!1&&q.morphTexture!==null||Ft.envMap!==kt||it.fog===!0&&Ft.fog!==gt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==mt.numPlanes||Ft.numIntersection!==mt.numIntersection)||Ft.vertexAlphas!==$t||Ft.vertexTangents!==Jt||Ft.morphTargets!==Lt||Ft.morphNormals!==he||Ft.morphColors!==we||Ft.toneMapping!==Ae||Ft.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Ft.__version=it.version);let Yn=Ft.currentProgram;fe===!0&&(Yn=Hn(it,Z,q));let Ys=!1,Rn=!1,Qr=!1,Ee=Yn.getUniforms(),pi=Ft.uniforms;if(Nt.useProgram(Yn.program)&&(Ys=!0,Rn=!0,Qr=!0),it.id!==b&&(b=it.id,Rn=!0),Ys||M!==P){Nt.buffers.depth.getReversed()?(G.copy(P.projectionMatrix),C1(G),P1(G),Ee.setValue(W,"projectionMatrix",G)):Ee.setValue(W,"projectionMatrix",P.projectionMatrix),Ee.setValue(W,"viewMatrix",P.matrixWorldInverse);let Ji=Ee.map.cameraPosition;Ji!==void 0&&Ji.setValue(W,Q.setFromMatrixPosition(P.matrixWorld)),Zt.logarithmicDepthBuffer&&Ee.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ee.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Rn=!0,Qr=!0)}if(q.isSkinnedMesh){Ee.setOptional(W,q,"bindMatrix"),Ee.setOptional(W,q,"bindMatrixInverse");let Vn=q.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ee.setValue(W,"boneTexture",Vn.boneTexture,D))}q.isBatchedMesh&&(Ee.setOptional(W,q,"batchingTexture"),Ee.setValue(W,"batchingTexture",q._matricesTexture,D),Ee.setOptional(W,q,"batchingIdTexture"),Ee.setValue(W,"batchingIdTexture",q._indirectTexture,D),Ee.setOptional(W,q,"batchingColorTexture"),q._colorsTexture!==null&&Ee.setValue(W,"batchingColorTexture",q._colorsTexture,D));let to=tt.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Xt.update(q,tt,Yn),(Rn||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,Ee.setValue(W,"receiveShadow",q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(pi.envMap.value=kt,pi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Z.environment!==null&&(pi.envMapIntensity.value=Z.environmentIntensity),Rn&&(Ee.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&wm(pi,Qr),gt&&it.fog===!0&&_t.refreshFogUniforms(pi,gt),_t.refreshMaterialUniforms(pi,it,H,O,m.state.transmissionRenderTarget[P.id]),mr.upload(W,qo(Ft),pi,D)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(mr.upload(W,qo(Ft),pi,D),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ee.setValue(W,"center",q.center),Ee.setValue(W,"modelViewMatrix",q.modelViewMatrix),Ee.setValue(W,"normalMatrix",q.normalMatrix),Ee.setValue(W,"modelMatrix",q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Vn=it.uniformsGroups;for(let Ji=0,Ki=Vn.length;Ji<Ki;Ji++){let fd=Vn[Ji];V.update(fd,Yn),V.bind(fd,Yn)}}return Yn}function wm(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Sm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,Z,tt){Bt.get(P.texture).__webglTexture=Z,Bt.get(P.depthTexture).__webglTexture=tt;let it=Bt.get(P);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=tt===void 0,it.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){let tt=Bt.get(P);tt.__webglFramebuffer=Z,tt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,tt=0){E=P,S=Z,T=tt;let it=!0,q=null,gt=!1,Mt=!1;if(P){let kt=Bt.get(P);if(kt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(W.FRAMEBUFFER,null),it=!1;else if(kt.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(kt.__hasExternalTextures)D.rebindTextures(P,Bt.get(P.texture).__webglTexture,Bt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Lt=P.depthTexture;if(kt.__boundDepthTexture!==Lt){if(Lt!==null&&Bt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}let $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Mt=!0);let Jt=Bt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Jt[Z])?q=Jt[Z][tt]:q=Jt[Z],gt=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?q=Bt.get(P).__webglMultisampledFramebuffer:Array.isArray(Jt)?q=Jt[tt]:q=Jt,A.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else A.copy(ct).multiplyScalar(H).floor(),U.copy(Y).multiplyScalar(H).floor(),L=st;if(Nt.bindFramebuffer(W.FRAMEBUFFER,q)&&it&&Nt.drawBuffers(P,q),Nt.viewport(A),Nt.scissor(U),Nt.setScissorTest(L),gt){let kt=Bt.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,tt)}else if(Mt){let kt=Bt.get(P.texture),$t=Z||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,kt.__webglTexture,tt||0,$t)}b=-1},this.readRenderTargetPixels=function(P,Z,tt,it,q,gt,Mt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Bt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){Nt.bindFramebuffer(W.FRAMEBUFFER,It);try{let kt=P.texture,$t=kt.format,Jt=kt.type;if(!Zt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-it&&tt>=0&&tt<=P.height-q&&W.readPixels(Z,tt,it,q,xt.convert($t),xt.convert(Jt),gt)}finally{let kt=E!==null?Bt.get(E).__webglFramebuffer:null;Nt.bindFramebuffer(W.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,tt,it,q,gt,Mt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Bt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){let kt=P.texture,$t=kt.format,Jt=kt.type;if(!Zt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-it&&tt>=0&&tt<=P.height-q){Nt.bindFramebuffer(W.FRAMEBUFFER,It);let Lt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.bufferData(W.PIXEL_PACK_BUFFER,gt.byteLength,W.STREAM_READ),W.readPixels(Z,tt,it,q,xt.convert($t),xt.convert(Jt),0);let he=E!==null?Bt.get(E).__webglFramebuffer:null;Nt.bindFramebuffer(W.FRAMEBUFFER,he);let we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await R1(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,gt),W.deleteBuffer(Lt),W.deleteSync(we),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,tt=0){P.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);let it=Math.pow(2,-tt),q=Math.floor(P.image.width*it),gt=Math.floor(P.image.height*it),Mt=Z!==null?Z.x:0,It=Z!==null?Z.y:0;D.setTexture2D(P,0),W.copyTexSubImage2D(W.TEXTURE_2D,tt,0,0,Mt,It,q,gt),Nt.unbindTexture()},this.copyTextureToTexture=function(P,Z,tt=null,it=null,q=0){P.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,P=arguments[1],Z=arguments[2],q=arguments[3]||0,tt=null);let gt,Mt,It,kt,$t,Jt,Lt,he,we,Ae=P.isCompressedTexture?P.mipmaps[q]:P.image;tt!==null?(gt=tt.max.x-tt.min.x,Mt=tt.max.y-tt.min.y,It=tt.isBox3?tt.max.z-tt.min.z:1,kt=tt.min.x,$t=tt.min.y,Jt=tt.isBox3?tt.min.z:0):(gt=Ae.width,Mt=Ae.height,It=Ae.depth||1,kt=0,$t=0,Jt=0),it!==null?(Lt=it.x,he=it.y,we=it.z):(Lt=0,he=0,we=0);let vn=xt.convert(Z.format),de=xt.convert(Z.type),Ft;Z.isData3DTexture?(D.setTexture3D(Z,0),Ft=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(D.setTexture2DArray(Z,0),Ft=W.TEXTURE_2D_ARRAY):(D.setTexture2D(Z,0),Ft=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ri=W.getParameter(W.UNPACK_ROW_LENGTH),fe=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Yn=W.getParameter(W.UNPACK_SKIP_PIXELS),Ys=W.getParameter(W.UNPACK_SKIP_ROWS),Rn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ae.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ae.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,$t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jt);let Qr=P.isDataArrayTexture||P.isData3DTexture,Ee=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let pi=Bt.get(P),to=Bt.get(Z),Vn=Bt.get(pi.__renderTarget),Ji=Bt.get(to.__renderTarget);Nt.bindFramebuffer(W.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Nt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Ki=0;Ki<It;Ki++)Qr&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.get(P).__webglTexture,q,Jt+Ki),P.isDepthTexture?(Ee&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,q,we+Ki),W.blitFramebuffer(kt,$t,gt,Mt,Lt,he,gt,Mt,W.DEPTH_BUFFER_BIT,W.NEAREST)):Ee?W.copyTexSubImage3D(Ft,q,Lt,he,we+Ki,kt,$t,gt,Mt):W.copyTexSubImage2D(Ft,q,Lt,he,we+Ki,kt,$t,gt,Mt);Nt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ee?P.isDataTexture||P.isData3DTexture?W.texSubImage3D(Ft,q,Lt,he,we,gt,Mt,It,vn,de,Ae.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ft,q,Lt,he,we,gt,Mt,It,vn,Ae.data):W.texSubImage3D(Ft,q,Lt,he,we,gt,Mt,It,vn,de,Ae):P.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,Lt,he,gt,Mt,vn,de,Ae.data):P.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,Lt,he,Ae.width,Ae.height,vn,Ae.data):W.texSubImage2D(W.TEXTURE_2D,q,Lt,he,gt,Mt,vn,de,Ae);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ri),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,fe),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Yn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ys),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Rn),q===0&&Z.generateMipmaps&&W.generateMipmap(Ft),Nt.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,tt=null,it=null,q=0){return P.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,it=arguments[1]||null,P=arguments[2],Z=arguments[3],q=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,tt,it,q)},this.initRenderTarget=function(P){Bt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Nt.unbindTexture()},this.resetState=function(){S=0,T=0,E=null,Nt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Za=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ch=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new z,xi=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ph=class extends cs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new z,$a=new z,mf=new Ie,ro=new go,ya=new ii,Mc=new z,gf=new z,Ih=class extends kn{constructor(t=new ye,e=new Ph){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qa.fromBufferAttribute(e,s-1),$a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qa.distanceTo($a);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;mf.copy(s).invert(),ro.copy(t.ray).applyMatrix4(mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=u.getX(v),_=u.getX(v+1),y=_a(this,t,ro,l,m,_);y&&e.push(y)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(f),m=_a(this,t,ro,l,v,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=_a(this,t,ro,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){let v=_a(this,t,ro,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),$a.fromBufferAttribute(o,r),e.distanceSqToSegment(qa,$a,Mc,gf)>i)return;Mc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Mc);if(!(l<t.near||l>t.far))return{distance:l,point:gf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var vf=new z,xf=new z,wr=class extends Ih{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)vf.fromBufferAttribute(e,s),xf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vf.distanceTo(xf);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var kh=class extends cs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yf=new Ie,Lh=new go,ba=new ii,Ma=new z,hs=class extends kn{constructor(t=new ye,e=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;yf.copy(s).invert(),Lh.copy(t.ray).applyMatrix4(yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);Ma.fromBufferAttribute(h,g),_f(Ma,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,v=f;p<v;p++)Ma.fromBufferAttribute(h,p),_f(Ma,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _f(n,t,e,i,s,r,o){let a=Lh.distanceSqToPoint(n);if(a<e){let l=new z;Lh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Et:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new z,s=[],r=[],o=[],a=new z,l=new Ie;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ya=class extends si{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uh=class extends Ya{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function du(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var wa=new z,wc=new du,Sc=new du,Tc=new du,yo=class extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),c=wa);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),wc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,g),Sc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,g),Tc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Sc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(wc.calc(l),Sc.calc(l),Tc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function w_(n,t){let e=1-n;return e*e*t}function S_(n,t){return 2*(1-n)*n*t}function T_(n,t){return n*n*t}function uo(n,t,e,i){return w_(n,t)+S_(n,e)+T_(n,i)}function A_(n,t){let e=1-n;return e*e*e*t}function E_(n,t){let e=1-n;return 3*e*e*n*t}function R_(n,t){return 3*(1-n)*n*n*t}function C_(n,t){return n*n*n*t}function fo(n,t,e,i,s){return A_(n,t)+E_(n,e)+R_(n,i)+C_(n,s)}var Dh=class extends si{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fh=class extends si{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nh=class extends si{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oh=class extends si{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bh=class extends si{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(uo(t,s.x,r.x,o.x),uo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends si{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(uo(t,s.x,r.x,o.x),uo(t,s.y,r.y,o.y),uo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zh=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(bf(a,l.x,c.x,u.x,h.x),bf(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},P_=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:yo,CubicBezierCurve:Dh,CubicBezierCurve3:Fh,EllipseCurve:Ya,LineCurve:Nh,LineCurve3:Oh,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Ja,SplineCurve:zh});var Ka=class n extends ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new z,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=i+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ja=class n extends ye{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,v=[],g=i/2,m=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function _(){let x=new z,w=new z,S=0,T=(e-t)/i;for(let E=0;E<=r;E++){let b=[],M=E/r,A=M*(e-t)+t;for(let U=0;U<=s;U++){let L=U/s,N=L*l+a,k=Math.sin(N),I=Math.cos(N);w.x=A*k,w.y=-M*i+g,w.z=A*I,h.push(w.x,w.y,w.z),x.set(k,T,I).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-M),b.push(p++)}v.push(b)}for(let E=0;E<s;E++)for(let b=0;b<r;b++){let M=v[b][E],A=v[b+1][E],U=v[b+1][E+1],L=v[b][E+1];(t>0||b!==0)&&(u.push(M,A,L),S+=3),(e>0||b!==r-1)&&(u.push(A,U,L),S+=3)}c.addGroup(m,S,0),m+=S}function y(x){let w=p,S=new Et,T=new z,E=0,b=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let A=p;for(let U=0;U<=s;U++){let N=U/s*l+a,k=Math.cos(N),I=Math.sin(N);T.x=b*I,T.y=g*M,T.z=b*k,h.push(T.x,T.y,T.z),d.push(0,M,0),S.x=k*.5+.5,S.y=I*.5*M+.5,f.push(S.x,S.y),p++}for(let U=0;U<s;U++){let L=w+U,N=A+U;x===!0?u.push(N,N+1,L):u.push(N+1,N,L),E+=3}c.addGroup(m,E,x===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _o=class n extends ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new z,h=new z,d=new z;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let v=p/s*r,g=f/i*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(v),h.y=(t+e*Math.cos(g))*Math.sin(v),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(v,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qa=class n extends ye{constructor(t=new Ja(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Et,u=new z,h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function v(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),_(),m()}function g(y){u=t.getPointAt(y/e,u);let x=o.normals[y],w=o.binormals[y];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,E=Math.sin(T),b=-Math.cos(T);l.x=b*x.x+E*w.x,l.y=b*x.y+E*w.y,l.z=b*x.z+E*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let w=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),T=(s+1)*y+x,E=(s+1)*(y-1)+x;p.push(w,S,E),p.push(S,T,E)}}function _(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new P_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},tl=class extends ye{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new z,r=new z;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let p=d,v=d+f;p<v;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),Mf(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Mf(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ae(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Mf(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}var el=class extends oe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function Sa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function I_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yd:r=t,a=2*e-i;break;case _d:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yd:o=t,l=2*i-e;break;case _d:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let w=0;w!==a;++w)r[w]=m*o[u+w]+_*o[c+w]+y*o[l+w]+x*o[h+w];return r}},Vh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Gh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ri=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sa(e,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Sa(t.times,Array),values:Sa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case uh:e=this.InterpolantFactoryMethodLinear;break;case Yl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&I_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let v=e[h+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=uh;var Rs=class extends ri{constructor(t,e,i){super(t,e,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ia;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends ri{};Wh.prototype.ValueTypeName="color";var Xh=class extends ri{};Xh.prototype.ValueTypeName="number";var Zh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)ls.slerpFlat(r,0,o,c-a,o,c,l);return r}},nl=class extends ri{InterpolantFactoryMethodLinear(t){return new Zh(this.times,this.values,this.getValueSize(),t)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends ri{constructor(t,e,i){super(t,e,i)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ia;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends ri{};qh.prototype.ValueTypeName="vector";var $h=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},k_=new $h,Yh=class{constructor(t){this.manager=t!==void 0?t:k_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var il=class extends ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var sl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=wf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function wf(){return performance.now()}var fu="\\[\\]\\.:\\/",L_=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",U_="[^"+fu.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",pu),F_=/(WCOD+)?/.source.replace("WCOD",U_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),B_=new RegExp("^"+D_+F_+N_+O_+"$"),z_=["material","materials","bones","map"],Jh=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(t){let e=B_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);z_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Jh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K2=new Float32Array(1);var Ps=class extends Ch{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Sf=new z,Ta=new z,rl=class{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Sf.subVectors(t,this.start),Ta.subVectors(this.end,this.start);let i=Ta.dot(Ta),r=Ta.dot(Sf)/i;return e&&(r=We(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);var cl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},H_=new xo(-1,1,1,-1,0,1),gu=class extends ye{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},V_=new gu,us=class{constructor(t){this._mesh=new Re(V_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hl=class extends Dn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Un.clone(t.uniforms),this.material=new oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new us(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bo=class extends Dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends Dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Et);this._width=i.width,this._height=i.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hl(cl),this.copyPass.material.blending=vi,this.clock=new sl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(o instanceof bo?i=!0:o instanceof ul&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends Dn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var $f={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Er=class n extends Dn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ze(r,o,{type:Ln});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ze(r,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=$f;this.highPassUniforms=Un.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=cl;this.copyUniforms=Un.clone(u.uniforms),this.blendMaterial=new oe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:en,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Wt,this.oldClearAlpha=1,this.basic=new br,this.fsQuad=new us(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Er.BlurDirectionX=new Et(1,0);Er.BlurDirectionY=new Et(0,1);var Yf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var pl=class extends Dn{constructor(){super();let t=Yf;this.uniforms=Un.clone(t.uniforms),this.material=new el({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jf=1.67+.67*Math.cos(-Math.PI/2-.5),vu=1.15/.67,le={rmin:.84,rmax:2.54,zmin:-1.6,zmax:1.6},Rr={r0:1.7,a:.72,ku:1.95,kl:2.05,d:.42};function Is(n){let t=Rr.r0+Rr.a*Math.cos(n+Rr.d*Math.sin(n)),e=Math.sin(n)>=0?Rr.ku:Rr.kl;return[t,e*Rr.a*Math.sin(n)]}var Qf=[[.8,.2],[.8,.56],[.8,.92],[.86,1.3],[1.14,1.66],[1.72,1.7],[2.34,1.46],[2.7,.98],[2.78,.36]],G_=Qf.map(([n,t],e)=>e===3?[.86,-1.42]:e===4?[1.16,-1.86]:[n,-t]),xu=Qf.map(([n,t])=>({R:n,Z:t})).concat(G_.map(([n,t])=>({R:n,Z:t})));function W_(n){let t=1.67+.67*Math.cos(n+.5*Math.sin(n));if(n>=0&&n<=Math.PI)return[t,1.8*.67*Math.sin(n)];let e=n+Math.PI/2,i=Math.cos(e),s=i*i,r=.67*Math.cos(.5)/(vu*.67),o=i*(1-s)+(1-r*Math.abs(Math.sin(e)))*s;return[t,-vu*.67*o]}var Kf=.03*.03,jf=.14*.14;function X_(){let n=[],i=0;for(let s=0;s<12;s++){let r=(s+.5)/12*.97;for(let o=0;o<40;o++){let a=-Math.PI+(o+.5)/40*2*Math.PI,l=a>=0?1.8:vu*.96,c=1.67+r*.67*Math.cos(a+.5*r*Math.sin(a))+.06*(1-r*r),u=r*l*.67*Math.sin(a),h=(1-r*r)**1.2*r;n.push(c,u,h),i+=h}}for(let s=2;s<n.length;s+=3)n[s]/=i;return new Float64Array(n)}function Z_(n,t){let e=t.length,i=n.map((s,r)=>s.concat([t[r]]));for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(i[o][s])>Math.abs(i[r][s])&&(r=o);[i[s],i[r]]=[i[r],i[s]];for(let o=0;o<e;o++){if(o===s)continue;let a=i[o][s]/i[s][s];for(let l=s;l<=e;l++)i[o][l]-=a*i[s][l]}}return i.map((s,r)=>s[e]/s[r])}function tp(){let n=X_(),t=n.length/3,e=xu,i=e.length,s=(F,X)=>{let et=0;for(let G=0;G<t;G++){let j=F-n[3*G],Q=X-n[3*G+1];et+=n[3*G+2]*.5*Math.log(j*j+Q*Q+Kf)}return et},r=(F,X)=>{let et=0,G=0;for(let j=0;j<t;j++){let Q=F-n[3*j],ft=X-n[3*j+1],Ct=n[3*j+2]/(Q*Q+ft*ft+Kf);et+=Ct*Q,G+=Ct*ft}return[et,G]},o=(F,X,et)=>{let G=F-e[et].R,j=X-e[et].Z;return .5*Math.log(G*G+j*j+jf)},a=(F,X,et)=>{let G=F-e[et].R,j=X-e[et].Z,Q=1/(G*G+j*j+jf);return[Q*G,Q*j]},l=[],c=[],u=96;for(let F=0;F<u;F++){let X=-Math.PI+(F+.5)/u*2*Math.PI,[et,G]=W_(X),j=[];for(let Q=0;Q<i;Q++)j.push(o(et,G,Q));j.push(-1),l.push(j),c.push(-s(et,G))}let h=6;{let F=Jf,X=-1.15,et=r(F,X),G=[],j=[],Q=[];for(let ft=0;ft<i;ft++){let Ct=a(F,X,ft);G.push(h*Ct[0]),j.push(h*Ct[1]),Q.push(h*o(F,X,ft))}G.push(0),j.push(0),Q.push(-h),l.push(G,j,Q),c.push(-h*et[0],-h*et[1],-h*s(F,X))}let d=i+1,f=2e-6,p=Array.from({length:d},()=>new Array(d).fill(0)),v=new Array(d).fill(0);for(let F=0;F<l.length;F++)for(let X=0;X<d;X++){v[X]+=l[F][X]*c[F];for(let et=0;et<d;et++)p[X][et]+=l[F][X]*l[F][et]}for(let F=0;F<i;F++)p[F][F]+=f;let m=Z_(p,v).slice(0,i),_=(F,X)=>{let et=s(F,X);for(let G=0;G<i;G++)et+=m[G]*o(F,X,G);return et},y=(F,X)=>{let et=r(F,X);for(let G=0;G<i;G++){let j=a(F,X,G);et[0]+=m[G]*j[0],et[1]+=m[G]*j[1]}return et},x=(F,X)=>{for(let G=0;G<40;G++){let j=y(F,X),Q=y(F+1e-4,X),ft=y(F,X+1e-4),Ct=(Q[0]-j[0])/1e-4,bt=(ft[0]-j[0])/1e-4,Dt=(Q[1]-j[1])/1e-4,W=(ft[1]-j[1])/1e-4,Yt=Ct*W-bt*Dt,Vt=(W*j[0]-bt*j[1])/Yt,Zt=(-Dt*j[0]+Ct*j[1])/Yt;if(F-=Vt,X-=Zt,Math.abs(Vt)+Math.abs(Zt)<1e-9)break}return[F,X]},w=x(1.67+.06,0),S=x(Jf,-1.15),T=_(w[0],w[1]),E=_(S[0],S[1]),b=171,M=321,A=new Float32Array(b*M),U=(le.rmax-le.rmin)/(b-1),L=(le.zmax-le.zmin)/(M-1),N=1/(E-T);for(let F=0;F<M;F++){let X=le.zmin+F*L;for(let et=0;et<b;et++)A[F*b+et]=(_(le.rmin+et*U,X)-T)*N}let k=(F,X)=>{let et=(F-le.rmin)/U,G=(X-le.zmin)/L;et=Math.max(0,Math.min(b-1.001,et)),G=Math.max(0,Math.min(M-1.001,G));let j=et|0,Q=G|0,ft=et-j,Ct=G-Q,bt=Q*b+j;return(A[bt]*(1-ft)+A[bt+1]*ft)*(1-Ct)+(A[bt+b]*(1-ft)+A[bt+b+1]*ft)*Ct},I=512,O=65,H=new Float32Array(O*I),$=.004;for(let F=0;F<I;F++){let X=F/I*2*Math.PI,et=Math.cos(X),G=Math.sin(X),j=0,Q=0,ft=1,Ct=k(w[0],w[1]);for(;ft<O&&Q<2;){Q+=$;let bt=k(w[0]+Q*et,w[1]+Q*G);for(;ft<O;){let Dt=(ft/(O-1))**2;if(bt<Dt)break;let W=(Dt-Ct)/Math.max(1e-9,bt-Ct);H[ft*I+F]=j+W*$,ft++}Ct=bt,j=Q}for(;ft<O;ft++)H[ft*I+F]=Q}let K=(F,X,et=[0,0])=>{let G=X/(2*Math.PI)*I;G=(G%I+I)%I;let j=G|0,Q=G-j,ft=(j+1)%I,Ct=Math.max(0,Math.min(O-1.0001,F*(O-1))),bt=Ct|0,Dt=Ct-bt,W=H[bt*I+j]*(1-Q)+H[bt*I+ft]*Q,Yt=H[(bt+1)*I+j]*(1-Q)+H[(bt+1)*I+ft]*Q,Vt=W*(1-Dt)+Yt*Dt;return et[0]=w[0]+Vt*Math.cos(X),et[1]=w[1]+Vt*Math.sin(X),et},ct=[];for(let F=0;F<256;F++)ct.push(Is(F/256*2*Math.PI));let Y=(F,X)=>{let et=!1;for(let G=0,j=ct.length-1;G<ct.length;j=G++){let[Q,ft]=ct[G],[Ct,bt]=ct[j];ft>X!=bt>X&&F<(Ct-Q)*(X-ft)/(bt-ft)+Q&&(et=!et)}return et};return{axis:w,xpt:S,psiN:k,surf:K,contour:(F,X)=>{let et=[],G=(j,Q)=>[le.rmin+j*U,le.zmin+Q*L];for(let j=0;j<M-1;j++)for(let Q=0;Q<b-1;Q++){let ft=[A[j*b+Q],A[j*b+Q+1],A[(j+1)*b+Q+1],A[(j+1)*b+Q]],Ct=[[Q,j],[Q+1,j],[Q+1,j+1],[Q,j+1]],bt=[];for(let Dt=0;Dt<4;Dt++){let W=ft[Dt],Yt=ft[(Dt+1)%4];if(W<F!=Yt<F){let Vt=(F-W)/(Yt-W),Zt=G(...Ct[Dt]),Nt=G(...Ct[(Dt+1)%4]);bt.push([Zt[0]+Vt*(Nt[0]-Zt[0]),Zt[1]+Vt*(Nt[1]-Zt[1])])}}for(let Dt=0;Dt+1<bt.length;Dt+=2){let W=[(bt[Dt][0]+bt[Dt+1][0])/2,(bt[Dt][1]+bt[Dt+1][1])/2];Y(W[0],W[1])&&(!X||X(W[0],W[1]))&&et.push(bt[Dt][0],bt[Dt][1],bt[Dt+1][0],bt[Dt+1][1])}}return et},inVessel:Y,coilCurrents:m,rtab:H,NA:I,NRHO:O}}var ml=(n,t)=>t*(1+3*n*n);var ep=new Xn,gl=new z,Cr=class extends il{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ae(t,3)),this.setAttribute("uv",new ae(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ps(e,6,1);return this.setAttribute("instanceStart",new xi(i,3,0)),this.setAttribute("instanceEnd",new xi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ps(e,6,1);return this.setAttribute("instanceColorStart",new xi(i,3,0)),this.setAttribute("instanceColorEnd",new xi(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new tl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ep.setFromBufferAttribute(e),this.boundingBox.union(ep))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)gl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(gl)),gl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};pn.line={uniforms:Un.merge([vt.common,vt.fog,vt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Pr=class extends oe{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Un.clone(pn.line.uniforms),vertexShader:pn.line.vertexShader,fragmentShader:pn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var yu=new be,np=new z,ip=new z,qe=new be,$e=new be,_i=new be,_u=new z,bu=new Ie,Ye=new rl,sp=new z,vl=new Xn,xl=new ii,bi=new be,Mi,ks;function rp(n,t,e){return bi.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),bi.multiplyScalar(1/bi.w),bi.x=ks/e.width,bi.y=ks/e.height,bi.applyMatrix4(n.projectionMatrixInverse),bi.multiplyScalar(1/bi.w),Math.abs(Math.max(bi.x,bi.y))}function q_(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Ye.start.fromBufferAttribute(s,a),Ye.end.fromBufferAttribute(r,a),Ye.applyMatrix4(e);let c=new z,u=new z;Mi.distanceSqToSegment(Ye.start,Ye.end,u,c),u.distanceTo(c)<ks*.5&&t.push({point:u,pointOnLine:c,distance:Mi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function $_(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;Mi.at(1,_i),_i.w=1,_i.applyMatrix4(t.matrixWorldInverse),_i.applyMatrix4(i),_i.multiplyScalar(1/_i.w),_i.x*=r.x/2,_i.y*=r.y/2,_i.z=0,_u.copy(_i),bu.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=u;d<f;d++){if(qe.fromBufferAttribute(l,d),$e.fromBufferAttribute(c,d),qe.w=1,$e.w=1,qe.applyMatrix4(bu),$e.applyMatrix4(bu),qe.z>h&&$e.z>h)continue;if(qe.z>h){let y=qe.z-$e.z,x=(qe.z-h)/y;qe.lerp($e,x)}else if($e.z>h){let y=$e.z-qe.z,x=($e.z-h)/y;$e.lerp(qe,x)}qe.applyMatrix4(i),$e.applyMatrix4(i),qe.multiplyScalar(1/qe.w),$e.multiplyScalar(1/$e.w),qe.x*=r.x/2,qe.y*=r.y/2,$e.x*=r.x/2,$e.y*=r.y/2,Ye.start.copy(qe),Ye.start.z=0,Ye.end.copy($e),Ye.end.z=0;let v=Ye.closestPointToPointParameter(_u,!0);Ye.at(v,sp);let g=Bf.lerp(qe.z,$e.z,v),m=g>=-1&&g<=1,_=_u.distanceTo(sp)<ks*.5;if(m&&_){Ye.start.fromBufferAttribute(l,d),Ye.end.fromBufferAttribute(c,d),Ye.start.applyMatrix4(o),Ye.end.applyMatrix4(o);let y=new z,x=new z;Mi.distanceSqToSegment(Ye.start,Ye.end,x,y),e.push({point:x,pointOnLine:y,distance:Mi.origin.distanceTo(x),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var yl=class extends Re{constructor(t=new Cr,e=new Pr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)np.fromBufferAttribute(e,o),ip.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+np.distanceTo(ip);let r=new Ps(s,2,1);return t.setAttribute("instanceDistanceStart",new xi(r,1,0)),t.setAttribute("instanceDistanceEnd",new xi(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Mi=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;ks=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),xl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ks*.5;else{let h=Math.max(s.near,xl.distanceToPoint(Mi.origin));c=rp(s,h,l.resolution)}if(xl.radius+=c,Mi.intersectsSphere(xl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),vl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ks*.5;else{let h=Math.max(s.near,vl.distanceToPoint(Mi.origin));u=rp(s,h,l.resolution)}vl.expandByScalar(u),Mi.intersectsBox(vl)!==!1&&(i?q_(this,e):$_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(yu),this.material.uniforms.resolution.value.set(yu.z,yu.w))}};var Ls=`
uniform float uWedge;
uniform float uFogNear;
uniform float uFogFar;
bool inWedge(vec3 w) {
  float ph = atan(w.z, w.x);
  return uWedge > 0.001 && ph > 0.0 && ph < uWedge;
}
float depthFade(float d) {
  return mix(1.0, 0.28, smoothstep(uFogNear, uFogFar, d));
}
`,Mo=`
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 mv = viewMatrix * w; vD = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,Mu=`
${Ls}
uniform vec3 uColor; uniform vec3 uRim; uniform float uOpacity;
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
float gridLine(float x, float n, float w) {
  float f = abs(fract(x * n) - 0.5);
  float fw = fwidth(x * n);
  return 1.0 - smoothstep(0.5 - w * fw - fw, 0.5 - w * fw, f);
}
void main() {
  if (inWedge(vW)) discard;
  vec3 V = normalize(cameraPosition - vW);
  vec3 N = normalize(vN);
  float nv = dot(N, V);
  float fres = pow(clamp(1.0 - abs(nv), 0.0, 1.0), 2.4);
  float lit = 0.5 + 0.5 * dot(N, normalize(vec3(-0.4, 0.8, 0.5)));
  float g = max(gridLine(vUv.x, 24.0, 0.6), gridLine(vUv.y, 14.0, 0.6) * 0.6);
  float back = nv < 0.0 ? 0.45 : 1.0;
  vec3 col = uColor * (0.35 + 0.65 * lit) + uRim * fres * 0.9 + uRim * g * 0.22;
  float a = (0.05 + 0.55 * fres + 0.16 * g) * uOpacity * back;
  gl_FragColor = vec4(col * depthFade(vD), a);
}`,op=Mo,ap=`
${Ls}
uniform vec3 uColor; uniform float uOpacity; uniform float uGlow;
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
void main() {
  if (inWedge(vW)) discard;
  vec3 V = normalize(cameraPosition - vW);
  vec3 N = normalize(vN);
  float lit = max(0.0, dot(N, normalize(vec3(-0.35, 0.85, 0.4))));
  float spec = pow(max(0.0, dot(reflect(-normalize(vec3(-0.35, 0.85, 0.4)), N), V)), 24.0);
  float rim = pow(clamp(1.0 - abs(dot(N, V)), 0.0, 1.0), 2.0);
  vec3 col = uColor * (0.07 + 0.42 * lit + uGlow) + vec3(1.0, 0.85, 0.6) * spec * 0.45 + uColor * rim * 0.22;
  gl_FragColor = vec4(col * depthFade(vD), uOpacity);
}`,lp=Mo,cp=`
${Ls}
uniform vec3 uColor; uniform float uI;
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
void main() {
  if (inWedge(vW)) discard;
  vec3 V = normalize(cameraPosition - vW);
  float nv = min(1.0, abs(dot(normalize(vN), V)));
  float limb = 0.18 + 0.82 * pow(1.0 - nv, 1.6);
  gl_FragColor = vec4(uColor * limb * uI * depthFade(vD), 1.0);
}`,hp=`
attribute float aRho;
varying float vRho; varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vRho = aRho;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,up=`
uniform vec3 uHot; uniform vec3 uMid; uniform vec3 uDeep; uniform float uI;
varying float vRho; varying vec3 vW;
void main() {
  float r = vRho;
  vec3 c = mix(uHot, uMid, smoothstep(0.0, 0.55, r));
  c = mix(c, uDeep, smoothstep(0.55, 1.0, r));
  float b = 0.22 + 0.78 * pow(max(0.0, 1.0 - r * r), 1.2);
  b += 0.35 * smoothstep(0.86, 0.99, r);
  gl_FragColor = vec4(c * b * uI, 1.0);
}`,wu=`
${Ls}
attribute vec3 aColor; attribute float aSize;
uniform float uPx; uniform float uI;
varying vec3 vC; varying vec3 vW; varying float vFade;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vC = aColor * uI;
  vec4 mv = viewMatrix * w;
  vFade = depthFade(-mv.z);
  gl_PointSize = aSize * uPx * (8.0 / max(0.5, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,Su=`
${Ls}
varying vec3 vC; varying vec3 vW; varying float vFade;
void main() {
  if (inWedge(vW)) discard;
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = dot(p, p);
  if (d > 1.0) discard;
  float a = exp(-d * 3.2);
  gl_FragColor = vec4(vC * a * vFade, 1.0);
}`,_l=`
${Ls}
attribute vec4 aColor;
uniform float uI;
varying vec4 vC; varying vec3 vW; varying float vFade;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vC = aColor; vC.rgb *= uI;
  vec4 mv = viewMatrix * w;
  vFade = depthFade(-mv.z);
  gl_Position = projectionMatrix * mv;
}`,bl=`
${Ls}
varying vec4 vC; varying vec3 vW; varying float vFade;
void main() {
  if (inWedge(vW)) discard;
  gl_FragColor = vec4(vC.rgb * vC.a * vFade, 1.0);
}`,dp=`
attribute float aBirth;
uniform float uTime; uniform float uPx; uniform float uTau;
varying float vA;
void main() {
  float age = uTime - aBirth;
  vA = age < 0.0 ? 0.0 : exp(-age / uTau) * smoothstep(0.0, 0.08, age);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uPx * (1.0 + 1.4 * exp(-age * 5.0));
  gl_Position = projectionMatrix * mv;
}`,fp=`
uniform vec3 uColor; uniform float uI;
varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = dot(p, p);
  if (d > 1.0 || vA < 0.003) discard;
  gl_FragColor = vec4(uColor * vA * uI * exp(-d * 2.0), 1.0);
}`,pp=`
attribute vec3 aColor; attribute float aDelay;
uniform float uPx; uniform float uP;
varying vec3 vC; varying float vA;
void main() {
  vC = aColor;
  float t = clamp((uP * 1.35 - aDelay) / 0.35, 0.0, 1.0);
  vA = t * t * (3.0 - 2.0 * t);
  gl_PointSize = uPx * (0.6 + 0.4 * vA);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,mp=`
varying vec3 vC; varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = length(p);
  float a = 1.0 - smoothstep(0.72, 1.0, d);
  if (a * vA < 0.01) discard;
  gl_FragColor = vec4(vC, a * vA);
}`;var Xe=n=>new Wt(n);function vp(n,t,e){let i=new Float32Array((t+1)*(e+1)*3),s=new Float32Array((t+1)*(e+1)*2),r=[],o=0;for(let l=0;l<=e;l++){let c=l/e*Math.PI*2,u=Math.cos(c),h=Math.sin(c);for(let d=0;d<=t;d++){let[f,p]=n(d/t*Math.PI*2);i[3*o]=f*u,i[3*o+1]=p,i[3*o+2]=f*h,s[2*o]=l/e,s[2*o+1]=d/t,o++}}for(let l=0;l<e;l++)for(let c=0;c<t;c++){let u=l*(t+1)+c,h=u+t+1;r.push(u,h,u+1,h,h+1,u+1)}let a=new ye;return a.setAttribute("position",new re(i,3)),a.setAttribute("uv",new re(s,2)),a.setIndex(r),a.computeVertexNormals(),a}function xp(){return{uWedge:{value:0},uFogNear:{value:6},uFogFar:{value:12}}}function Ml(n,t,e,i={}){return new oe({vertexShader:n,fragmentShader:t,uniforms:e,...i})}function yp(n,t){let e=vp(Is,180,200),i=Ml(Mo,Mu,{...n,uColor:{value:Xe("#1a2030")},uRim:{value:Xe("#8a93a8")},uOpacity:{value:1}},{transparent:!0,depthWrite:!1,side:yn}),s=new Re(e,i);return s.renderOrder=2,s}function Y_(){let s=1.1800000000000002,r=[],o=200;for(let a=0;a<o;a++){let l=a/o*Math.PI*2,c=Math.cos(l),u=Math.sin(l),h=c<0?9:2.4,d=c<0?5:2.4,f=1.88+s*Math.sign(c)*Math.pow(Math.abs(c),2/h),p=2.05*Math.sign(u)*Math.pow(Math.abs(u),2/d);r.push(new z(f,p,0))}return new yo(r,!0,"centripetal")}var wo=18;function _p(n,t){let e=new In,i=Ml(op,ap,{...n,uColor:{value:Xe(t.coil)},uOpacity:{value:1},uGlow:{value:.05}},{transparent:!0}),s=new Qa(Y_(),260,.017,6,!0),r=new In;for(let d=0;d<wo;d++){let f=new Re(s,i);f.rotation.y=-((d+.5)/wo)*Math.PI*2,r.add(f)}e.add(r);let o=new In;xu.forEach((d,f)=>{let p=d.R<1?.024:.034,v=new _o(d.R,p,8,220);v.rotateX(Math.PI/2),v.translate(0,d.Z,0),o.add(new Re(v,i))}),e.add(o);let a=new In,l=new _o(.5,.008,5,96);l.rotateX(Math.PI/2);let c=44;for(let d=0;d<c;d++){let f=new Re(l,i);f.position.y=-1.62+3.24*d/(c-1),a.add(f)}let u=Ml(Mo,Mu,{...n,uColor:{value:Xe("#2a1d0c")},uRim:{value:Xe(t.coil)},uOpacity:{value:.55}},{transparent:!0,depthWrite:!1,side:yn}),h=new Re(new ja(.47,.47,3.3,64,1,!0),u);return a.add(h),e.add(a),{group:e,tf:r,pf:o,cs:a,coilMat:i,shellMat:u}}function bp(n,t,e){let i=[.22,.42,.6,.76,.9,1],s=Xe(e.plasmaHot),r=Xe(e.plasma),o=Xe(e.plasmaDeep),a=new In,l=[];return i.forEach(c=>{let u=vp(v=>t.surf(c,v),160,180),h=c<.5?s.clone().lerp(r,c/.5):r.clone().lerp(o,(c-.5)/.5),d=c<.3?.085:c<.7?.055:c<.95?.04:.045,f=Ml(lp,cp,{...n,uColor:{value:h.multiplyScalar(d)},uI:{value:0}},{transparent:!0,depthWrite:!1,blending:en,side:yn});l.push(f);let p=new Re(u,f);p.renderOrder=3,a.add(p)}),{group:a,mats:l}}function Mp(n,t){let s=[],r=[],o=[],a=[0,0];for(let h=0;h<=40;h++){let d=h/40;for(let f=0;f<256;f++)n.surf(d,f/256*Math.PI*2,a),s.push(a[0],a[1],0),r.push(d)}for(let h=0;h<40;h++)for(let d=0;d<256;d++){let f=h*256+d,p=h*256+(d+1)%256,v=f+256,g=p+256;o.push(f,v,p,p,v,g)}let l=new ye;l.setAttribute("position",new ae(s,3)),l.setAttribute("aRho",new ae(r,1)),l.setIndex(o);let c={uHot:{value:Xe(t.plasmaHot).multiplyScalar(.3)},uMid:{value:Xe(t.plasma).multiplyScalar(.22)},uDeep:{value:Xe(t.plasmaDeep).multiplyScalar(.3)},uI:{value:0}},u=()=>{let h=new oe({vertexShader:hp,fragmentShader:up,uniforms:Un.clone(c),transparent:!0,depthWrite:!1,blending:en,side:yn}),d=new Re(l,h);return d.renderOrder=4,d};return{a:u(),b:u()}}function Ir(n,t,e,i,s=.004){let r=new Float32Array(n.length/4*6);for(let c=0,u=0;c<n.length;c+=4,u+=6)r[u]=n[c],r[u+1]=n[c+1],r[u+2]=s,r[u+3]=n[c+2],r[u+4]=n[c+3],r[u+5]=s;let o=new Cr;o.setPositions(r);let a=new Pr({color:t,linewidth:e,transparent:!0,opacity:i,depthWrite:!1});a.userData.baseOpacity=i,a.userData.baseWidth=e;let l=new yl(o,a);return l.renderOrder=6,l}function wp(n,t){let e=new In,i=[0,0],s=g=>{let m=[],y=n.surf(g,0,[0,0]);for(let x=1;x<=384;x++){let w=n.surf(g,x/384*Math.PI*2,[0,0]);m.push(y[0],y[1],w[0],w[1]),y=w}return m},r=[];[.15,.3,.45,.6,.72,.83,.92].forEach(g=>r.push(...s(g)));let o=new Wt(t.flux),a=Ir(r,o,1.6,.62),l=n.xpt[1],c=n.contour(1,(g,m)=>!0),u=Ir(c,new Wt("#c9f6ff"),2.6,1,.005),h=[...n.contour(1.045),...n.contour(1.11)],d=Ir(h,o,1.2,.32),f=[],p=Is(0);for(let g=1;g<=256;g++){let m=Is(g/256*Math.PI*2);f.push(p[0],p[1],m[0],m[1]),p=m}let v=Ir(f,new Wt("#8a93a8"),1.6,.55,.003);return e.add(a,u,d,v),{group:e,lines:[a,u,d,v],vesselLine:v,vesselSegs:f}}function Tu(n){let t=[[0,[.93,.99,1]],[.45,[.55,.92,1]],[1,[.24,.76,.95]],[1.6,[.1,.34,.6]],[2.6,[.07,.13,.3]]];n=Math.max(0,Math.min(2.6,n));for(let e=1;e<t.length;e++)if(n<=t[e][0]){let[i,s]=t[e-1],[r,o]=t[e],a=(n-i)/(r-i);return s.map((l,c)=>l+(o[c]-l)*a)}return t[t.length-1][1]}function Sp(n){let t=n.xpt[1],e=65,i=new Float32Array(e*e*3),s=new Float32Array(e*e*3),r=new Float32Array(e*e),o=new Float32Array(e*e),a=0;for(let h=0;h<e;h++){let d=le.zmin+h/(e-1)*(le.zmax-le.zmin);for(let f=0;f<e;f++){let p=le.rmin+f/(e-1)*(le.rmax-le.rmin),v=n.psiN(p,d);o[a]=v,i[3*a]=p,i[3*a+1]=d,i[3*a+2]=.008;let g=v<1&&d>t,m=new Wt().setRGB(...Tu(g?v:Math.max(v,.85)).map(_=>_*.78),xn);s[3*a]=m.r,s[3*a+1]=m.g,s[3*a+2]=m.b,r[a]=f/(e-1)*.75+Math.abs(h-32)/32*.12,a++}}let l=new ye;l.setAttribute("position",new re(i,3)),l.setAttribute("aColor",new re(s,3)),l.setAttribute("aDelay",new re(r,1));let c=new oe({vertexShader:pp,fragmentShader:mp,uniforms:{uPx:{value:6},uP:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1}),u=new hs(l,c);return u.renderOrder=8,u.frustumCulled=!1,{points:u,mat:c,vals:o}}var bn=Math.PI*2,J_=n=>n>Math.PI?n-bn:n<-Math.PI?n+bn:n;function Tp(n,t,e,{max:i=7e3}={}){let r=Array.from({length:15},(xt,qt)=>.1+.88*qt/14),o=Xe(e.plasmaHot),a=Xe(e.plasma),l=Xe(e.plasmaDeep),c=xt=>xt<.5?o.clone().lerp(a,xt/.5):a.clone().lerp(l,Math.min(1,(xt-.5)/.55)),u=new Float32Array(i),h=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),p=new Float32Array(i*3),v=new Float32Array(i*3),g=new Float32Array(i),m=new Float32Array(i*6),_=new Float32Array(i*8),y=12345,x=()=>(y=y*16807%2147483647)/2147483647;for(let xt=0;xt<i;xt++){let qt=Math.min(14,Math.floor(Math.sqrt(x())*15));u[xt]=r[qt]+(x()-.5)*.006,h[xt]=x()*bn,d[xt]=(x()-.5)*bn;let V=x()<.78?1:-1;f[xt]=V*(.32+.5*x());let dt=c(u[xt]).multiplyScalar(.55+.45*x());v.set([dt.r,dt.g,dt.b],xt*3),g[xt]=.7+.9*x(),_.set([dt.r,dt.g,dt.b,.38,dt.r,dt.g,dt.b,0],xt*8)}let w=new ye;w.setAttribute("position",new re(p,3).setUsage(yi)),w.setAttribute("aColor",new re(v,3)),w.setAttribute("aSize",new re(g,1));let S=new oe({vertexShader:wu,fragmentShader:Su,uniforms:{...t,uPx:{value:3},uI:{value:0}},transparent:!0,depthWrite:!1,blending:en}),T=new hs(w,S);T.frustumCulled=!1,T.renderOrder=5;let E=new ye;E.setAttribute("position",new re(m,3).setUsage(yi)),E.setAttribute("aColor",new re(_,4));let b=new oe({vertexShader:_l,fragmentShader:bl,uniforms:{...t,uI:{value:0}},transparent:!0,depthWrite:!1,blending:en}),M=new wr(E,b);M.frustumCulled=!1,M.renderOrder=5;let A=7e3,U=new Float32Array(A*3),L=new Float32Array(A).fill(-1e9),N=new ye;N.setAttribute("position",new re(U,3).setUsage(yi)),N.setAttribute("aBirth",new re(L,1).setUsage(yi));let k=new oe({vertexShader:dp,fragmentShader:fp,uniforms:{uTime:{value:0},uPx:{value:4},uTau:{value:4.5},uColor:{value:Xe("#ffd6f1").multiplyScalar(.9)},uI:{value:0}},transparent:!0,depthWrite:!1,blending:en}),I=new hs(N,k);I.frustumCulled=!1,I.renderOrder=7;let O=0,H=A,$=-1,K=(xt,qt,V)=>{let dt=O;U[3*dt]=xt,U[3*dt+1]=qt,U[3*dt+2]=.006,L[dt]=V,H=Math.min(H,dt),$=Math.max($,dt),O=(O+1)%A},ct=18,Y=Array.from({length:ct},()=>({alive:!1})),st=new Float32Array(ct*2*3),F=new Float32Array(ct*2*3),X=new Float32Array(ct*2),et=new ye;et.setAttribute("position",new re(st,3).setUsage(yi)),et.setAttribute("aColor",new re(F,3).setUsage(yi)),et.setAttribute("aSize",new re(X,1).setUsage(yi));let G=new oe({vertexShader:wu,fragmentShader:Su,uniforms:{...t,uPx:{value:3},uI:{value:1}},transparent:!0,depthWrite:!1,blending:en}),j=new hs(et,G);j.frustumCulled=!1,j.renderOrder=6;let Q=10,ft=new Float32Array(ct*2*Q*6),Ct=new Float32Array(ct*2*Q*8),bt=new ye;bt.setAttribute("position",new re(ft,3).setUsage(yi)),bt.setAttribute("aColor",new re(Ct,4).setUsage(yi));let Dt=new wr(bt,new oe({vertexShader:_l,fragmentShader:bl,uniforms:{...t,uI:{value:1}},transparent:!0,depthWrite:!1,blending:en}));Dt.frustumCulled=!1,Dt.renderOrder=6;let W=Xe("#e9f1ff"),Yt=Xe("#fff0c8"),Vt=new oe({vertexShader:_l,fragmentShader:bl,uniforms:{...t,uI:{value:0}},transparent:!0,depthWrite:!1,blending:en}),Zt=[[.38,3],[.66,5],[.9,7]],Nt=7,ue=220,Bt=Zt.reduce((xt,qt)=>xt+qt[1],0)*Nt*ue,D=new Float32Array(Bt*6),R=new Float32Array(Bt*8),J=new ye;J.setAttribute("position",new re(D,3)),J.setAttribute("aColor",new re(R,4));let ht=new wr(J,Vt);ht.frustumCulled=!1,ht.renderOrder=4;let rt=[0,0],ot=1,Pt=()=>{let xt=0,qt=[0,0,0];for(let[V,dt]of Zt){let nt=c(V),at=ml(V,ot);for(let yt=0;yt<dt;yt++){let lt=yt/dt*bn;for(let Rt=0;Rt<Nt*ue;Rt++){let jt=Rt/ue*bn,ge=(Rt+1)/ue*bn;for(let ce=0;ce<2;ce++){let ke=ce?ge:jt;n.surf(V,lt+ke/at,rt),D[xt*6+ce*3]=rt[0]*Math.cos(ke),D[xt*6+ce*3+1]=rt[1],D[xt*6+ce*3+2]=rt[0]*Math.sin(ke)}let te=.5;R.set([nt.r,nt.g,nt.b,te,nt.r,nt.g,nt.b,te],xt*8),xt++}}}J.attributes.position.needsUpdate=!0,J.attributes.aColor.needsUpdate=!0},_t=i,St=-1,ee=0,mt=.24;function Tt(xt,qt){let V=Y.find(jt=>!jt.alive);if(!V)return;let dt=.08+.42*Math.sqrt(Math.random()),nt=Math.random()*bn,at=(Math.random()-.5)*bn;qt>.001&&(at=J_(qt+Math.random()*(bn-qt))),n.surf(dt,nt,rt),V.alive=!0,V.t0=xt,V.rho=dt,V.th=nt,V.ph=at,V.th0=nt,V.ph0=at,V.p=[rt[0]*Math.cos(at),rt[1],rt[0]*Math.sin(at)];let yt=Math.random()*2-1,lt=Math.random()*bn,Rt=Math.sqrt(1-yt*yt);V.d=[Rt*Math.cos(lt),yt,Rt*Math.sin(lt)],V.om=(Math.random()<.5?1:-1)*2.6}function Gt(xt,qt,{intensity:V,eventsOn:dt,wedge:nt,recordDots:at,q:yt}){if(ot=yt,ot!==St&&(Pt(),St=ot),V>.002){for(let lt=0;lt<_t;lt++){let Rt=u[lt],jt=ml(Rt,ot),ge=f[lt]*qt,te=d[lt],ce=te+ge;h[lt]+=ge/jt,ce>Math.PI?ce-=bn:ce<-Math.PI&&(ce+=bn),d[lt]=ce,n.surf(Rt,h[lt],rt);let ke=rt[0],Yi=rt[1],ps=Math.cos(ce),je=Math.sin(ce);p[3*lt]=ke*ps,p[3*lt+1]=Yi,p[3*lt+2]=ke*je,m[6*lt]=ke*ps,m[6*lt+1]=Yi,m[6*lt+2]=ke*je;let De=f[lt]>0?1:-1,zn=ce-De*mt;n.surf(Rt,h[lt]-De*mt/jt,rt),m[6*lt+3]=rt[0]*Math.cos(zn),m[6*lt+4]=rt[1],m[6*lt+5]=rt[0]*Math.sin(zn),at&&(te<0&&ce>=0&&ge>0||te>=0&&ce<0&&ge<0)&&Math.abs(ge)<1&&K(ke,Yi,xt)}w.attributes.position.needsUpdate=!0,E.attributes.position.needsUpdate=!0}if(w.setDrawRange(0,_t),E.setDrawRange(0,_t*2),$>=H&&(N.attributes.position.needsUpdate=!0,N.attributes.aBirth.needsUpdate=!0,H=A,$=-1),k.uniforms.uTime.value=xt,dt){ee+=qt;let lt=2.6;for(;ee>1/lt;)ee-=1/lt*(.4+1.2*Math.random()),Tt(xt,nt)}st.fill(0),F.fill(0),X.fill(0),Ct.fill(0),Y.forEach((lt,Rt)=>{if(!lt.alive)return;let jt=xt-lt.t0;if(jt>2.4){lt.alive=!1;return}let ge=Math.exp(-jt*7)*(jt<.04?jt/.04:1);st.set(lt.p,Rt*6),F.set([ge*2.6,ge*2.4,ge*2.5],Rt*6),X[Rt*2]=3+16*Math.min(1,jt*6)*ge;let te=5.5,ce=1.1,ke=jt*te;for(let De=0;De<Q;De++){let zn=Math.max(0,ke-ce*De/Q),$s=Math.max(0,ke-ce*(De+1)/Q),$n=Rt*2*Q+De;for(let Ei=0;Ei<2;Ei++){let jr=Ei?$s:zn;ft[$n*6+Ei*3]=lt.p[0]+lt.d[0]*jr,ft[$n*6+Ei*3+1]=lt.p[1]+lt.d[1]*jr,ft[$n*6+Ei*3+2]=lt.p[2]+lt.d[2]*jr}let En=Math.max(0,1-ke/7.5),Hn=Math.pow(1-De/Q,1.5)*En*2.6,qo=Math.pow(1-(De+1)/Q,1.5)*En*2.6;Ct.set([W.r,W.g,W.b,Hn,W.r,W.g,W.b,qo],$n*8)}let Yi=ml(lt.rho,ot),ps=lt.ph0+lt.om*jt*(1-.18*jt),je=Math.max(0,1-jt/2.4);for(let De=0;De<Q;De++){let zn=Rt*2*Q+Q+De;for(let En=0;En<2;En++){let Hn=ps-Math.sign(lt.om)*.06*(De+En)*Math.min(1,jt*3);n.surf(lt.rho,lt.th0+(Hn-lt.ph0)/Yi,rt),ft[zn*6+En*3]=rt[0]*Math.cos(Hn),ft[zn*6+En*3+1]=rt[1],ft[zn*6+En*3+2]=rt[0]*Math.sin(Hn),De===0&&En===0&&(st.set([rt[0]*Math.cos(Hn),rt[1],rt[0]*Math.sin(Hn)],Rt*6+3),F.set([Yt.r*je*1.3,Yt.g*je*1.3,Yt.b*je*1.3],Rt*6+3),X[Rt*2+1]=2.6)}let $s=(1-De/Q)*je*.9,$n=(1-(De+1)/Q)*je*.9;Ct.set([Yt.r,Yt.g,Yt.b,$s,Yt.r,Yt.g,Yt.b,$n],zn*8)}}),et.attributes.position.needsUpdate=!0,et.attributes.aColor.needsUpdate=!0,et.attributes.aSize.needsUpdate=!0,bt.attributes.position.needsUpdate=!0,bt.attributes.aColor.needsUpdate=!0}function Xt(xt,qt=4200){for(let V=0;V<qt;V++){let dt=Math.random()*_t|0,nt=Math.random()*9;n.surf(u[dt],Math.random()*bn,rt),K(rt[0],rt[1],xt-nt)}}function At(){L.fill(-1e9),N.attributes.aBirth.needsUpdate=!0}function ne(){Y.forEach(xt=>xt.alive=!1)}return{heads:T,streaks:M,dots:I,evPts:j,evLines:Dt,threads:ht,pointsMat:S,lineMat:b,dotMat:k,evMat:G,threadMat:Vt,evLineMat:Dt.material,update:Gt,seedDots:Xt,clearDots:At,clearEvents:ne,get nActive(){return _t},set nActive(xt){_t=Math.max(800,Math.min(i,xt|0))},max:i}}var Us={cx:1080,cy:450,pxPerM:620/(le.zmax-le.zmin),rc:(le.rmin+le.rmax)/2,zc:0};function Au(n,t,e,i,s){let{ratio:r}=s(n),o=n.getContext("2d");o.setTransform(r,0,0,r,0,0),o.fillStyle=i.bg,o.fillRect(0,0,1600,900);let{cx:a,cy:l,pxPerM:c,rc:u}=Us,h=g=>a+(g-u)*c,d=g=>l-g*c;for(let g=0;g<65;g++)for(let m=0;m<65;m++){let _=le.rmin+m/64*(le.rmax-le.rmin),y=le.zmin+g/64*(le.zmax-le.zmin),x=e.psiN(_,y),w=Tu(x<1&&y>e.xpt[1]?x:Math.max(x,.85)).map(S=>Math.round(S*255));o.fillStyle=`rgba(${w[0]},${w[1]},${w[2]},0.55)`,o.beginPath(),o.arc(h(_),d(y),2.2,0,Math.PI*2),o.fill()}let f=o.createRadialGradient(h(e.axis[0]),d(e.axis[1]),0,h(e.axis[0]),d(e.axis[1]),160);f.addColorStop(0,"rgba(255,227,246,0.55)"),f.addColorStop(.6,"rgba(255,90,200,0.22)"),f.addColorStop(1,"rgba(122,44,255,0)"),o.fillStyle=f,o.beginPath();for(let g=0;g<=256;g++){let m=e.surf(1,g/256*Math.PI*2);g?o.lineTo(h(m[0]),d(m[1])):o.moveTo(h(m[0]),d(m[1]))}o.fill();let p=(g,m)=>{o.beginPath();for(let _=0;_<=m;_++){let y=g(_/m*Math.PI*2);_?o.lineTo(h(y[0]),d(y[1])):o.moveTo(h(y[0]),d(y[1]))}o.stroke()};o.strokeStyle="rgba(138,147,168,0.6)",o.lineWidth=1.6,p(Is,256),o.strokeStyle="rgba(98,228,255,0.6)",[.15,.3,.45,.6,.72,.83,.92].forEach(g=>p(m=>e.surf(g,m),256)),o.strokeStyle="#c9f6ff",o.lineWidth=2.6;let v=e.contour(1);o.beginPath();for(let g=0;g<v.length;g+=4)o.moveTo(h(v[g]),d(v[g+1])),o.lineTo(h(v[g+2]),d(v[g+3]));o.stroke()}var Vi=1600,Gi=900,Rp=30,K_=Gi/Us.pxPerM/(2*Math.tan(Rp/2*Math.PI/180)),Ap=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Eu=n=>Math.max(0,Math.min(1,n)),ai=(n,t,e)=>n+(t-n)*e,j_=(n,t)=>{let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},Ep=[{az:null,el:.36,dist:12.4,tx:0,ty:-.05,tz:0,sx:170,sy:10,drift:1},{az:null,el:.3,dist:10.6,tx:0,ty:-.05,tz:0,sx:150,sy:10,drift:1},{az:.6,el:.2,dist:8.3,tx:.95,ty:-.25,tz:.35,sx:80,sy:-10,drift:0},{az:0,el:0,dist:K_,tx:Us.rc,ty:0,tz:0,sx:Us.cx-Vi/2,sy:Us.cy-Gi/2,drift:0}],Q_=112*Math.PI/180,Ru=[{bloom:.7,coilDim:1,shell:.4,parts:0,threads:0,events:0,wedge:0,section:0,contours:0,dots:0,map:0,ghost:0,lCoils:1,lX:0,ctl:1,breathe:1},{bloom:.8,coilDim:.8,shell:1,parts:1,threads:1,events:1,wedge:0,section:0,contours:0,dots:0,map:0,ghost:0,lCoils:0,lX:0,ctl:1,breathe:0},{bloom:.65,coilDim:.62,shell:.85,parts:1,threads:.55,events:.7,wedge:Q_,section:1,contours:1,dots:1,map:0,ghost:.25,lCoils:0,lX:1,ctl:1,breathe:0},{bloom:.22,coilDim:.5,shell:.1,parts:.06,threads:0,events:0,wedge:Math.PI,section:.2,contours:1,dots:0,map:1,ghost:1,lCoils:0,lX:0,ctl:0,breathe:0}],tb=["el","dist","tx","ty","tz","sx","sy","drift"],eb=Object.keys(Ru[0]),Cu=2,Cp=.55,nb=n=>Math.exp(ai(Math.log(Cu),Math.log(Cp),n)),So=Math.log(Cu)/(Math.log(Cu)-Math.log(Cp));function oi(n,t,e,i){let s=document.createElement(n);return t&&(s.style.cssText=t),i!=null&&(s.innerHTML=i),e&&e.appendChild(s),s}var ib={id:"tokamak",layout:"full",steps:4,mount(n,t){this.ctx=t,this.root=n;let e=t.tokens;n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.touchAction="none",n.style.background=e.bg,this.eq=tp(),this.step=0,this.running=!1;let i=oi("canvas",`position:absolute;left:0;top:0;width:${Vi}px;height:${Gi}px;display:block;cursor:grab;touch-action:none;`,n);this.canvas=i;let s=null;try{s=new Xa({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance"}),s.getContext()||(s=null)}catch{s=null}if(!s){this.fallback=!0,Au(i,null,this.eq,e,t.fitCanvas);return}this.renderer=s,s.setPixelRatio(1),s.setClearColor(new Wt(e.bg).convertSRGBToLinear(),1),this.maxRatio=1.5;let r=new Za;this.scene3=r;let o=new fn(Rp,Vi/Gi,.1,60);this.cam=o;let a=xp();this.cu=a,this.vessel=yp(a,e),this.coils=_p(a,e),this.shells=bp(a,this.eq,e),this.section=Mp(this.eq,e),this.contours=wp(this.eq,e),this.map=Sp(this.eq),this.parts=Tp(this.eq,a,e,{max:7e3}),this.vesselLineB=Ir(this.contours.vesselSegs,new Wt("#8a93a8"),1.6,.4,0),this.contourGroup=this.contours.group,this.sectionB=this.section.b,r.add(this.coils.group,this.vessel,this.shells.group,this.section.a,this.sectionB,this.contourGroup,this.vesselLineB),r.add(this.parts.threads,this.parts.streaks,this.parts.heads,this.parts.evLines,this.parts.evPts,this.parts.dots,this.map.points),this.fatLines=[...this.contours.lines,this.vesselLineB];{let u=new Ka(4.2,96);u.rotateX(-Math.PI/2);let h=new oe({transparent:!0,depthWrite:!1,blending:en,uniforms:{uC:{value:new Wt(e.plasmaDeep)},uI:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:"uniform vec3 uC; uniform float uI; varying vec2 vP; void main(){ float r = length(vP)/4.2; float a = exp(-pow((r-0.42)/0.22,2.0)); gl_FragColor = vec4(uC*a*uI*0.025,1.0);} "});this.floor=new Re(u,h),this.floor.position.y=-2.3,r.add(this.floor)}let l=new Ze(16,16,{type:Ln,samples:4});this.composer=new dl(s,l),this.composer.addPass(new fl(r,o)),this.bloom=new Er(new Et(Vi,Gi),.75,.5,.42),this.composer.addPass(this.bloom),this.composer.addPass(new pl),this.overlay=oi("div",`position:absolute;left:0;top:0;width:${Vi}px;height:${Gi}px;pointer-events:none;`,n),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("width",Vi),this.svg.setAttribute("height",Gi),this.svg.style.cssText="position:absolute;left:0;top:0;overflow:visible;",this.overlay.appendChild(this.svg),this._buildLabels(e),this._buildFrame(e),this._buildControls(e),this.twistT=So,this.qk=1,this.coilsOn=!0,this.coilVis=1;let c=Ep[0];this.cs={az:.35,el:c.el,dist:c.dist,tx:c.tx,ty:c.ty,tz:c.tz,sx:c.sx,sy:c.sy,drift:1},this.vs={...Ru[0]},this.tw=null,this.user={az:0,el:0,vAz:0,vEl:0,last:-1e9,dragging:!1},this.time=0,this.stats={ema:16.7,slowFor:0,cool:0,cpu:0},window.__tkStats=this.stats,this._bindPointer(),this.resize(),this._apply(0),this._render()},_buildLabels(n){let t=(d,f)=>{let p=oi("div",`position:absolute;left:0;top:0;white-space:nowrap;font:500 19px/1 ${n.fontBody};letter-spacing:0.02em;color:${n.ink};opacity:0;transition:none;text-shadow:0 0 6px ${n.bg},0 0 14px ${n.bg},0 0 2px ${n.bg};`,this.overlay,d),v=document.createElementNS("http://www.w3.org/2000/svg","polyline");v.setAttribute("fill","none"),v.setAttribute("stroke","rgba(243,241,234,0.42)"),v.setAttribute("stroke-width","1.2");let g=document.createElementNS("http://www.w3.org/2000/svg","circle");return g.setAttribute("r","3.2"),g.setAttribute("fill",f),this.svg.appendChild(v),this.svg.appendChild(g),{d:p,line:v,dot:g,w:0}},e=this.eq,i=new z,s=new z,r=d=>(s.copy(d).project(this.cam),[(s.x+1)*.5*Vi,(1-s.y)*.5*Gi,s.z]),o=()=>Math.atan2(this.cam.position.z,this.cam.position.x),a=()=>{let d=o()-.95,p=(Math.round(d/(Math.PI*2)*wo-.5)+.5)/wo*Math.PI*2,v=.7+2.36*Math.pow(Math.sin(.62),.62),g=1.98*Math.cos(.62);return i.set(v*Math.cos(p),g,v*Math.sin(p))},l=()=>{let d=o()-1.25;return i.set(2.78*Math.cos(d),-.36,2.78*Math.sin(d))},c=()=>i.set(0,1.5,0),u=()=>i.set(e.xpt[0],e.xpt[1],.01),h=()=>{let d=e.surf(1,.42);return i.set(d[0],d[1],.01)};this.labels=[{...t("toroidal field coils",n.coil),anchor:a,off:[60,-70],key:"lCoils"},{...t("poloidal field coils",n.coil),anchor:l,off:[40,64],key:"lCoils"},{...t("solenoid",n.coil),anchor:c,off:[-90,-95],key:"lCoils"},{...t("X-point",n.flux),anchor:u,off:[-150,34],key:"lX"},{...t("separatrix",n.flux),anchor:h,off:[110,-70],key:"lX"}],this._proj=r},_placeLabels(){for(let n of this.labels){let t=this.vs[n.key]*(n.key==="lCoils"?this.coilVis:1);if(t<.01){n.d.style.opacity=0,n.line.setAttribute("opacity",0),n.dot.setAttribute("opacity",0);continue}let[e,i,s]=this._proj(n.anchor());if(s>1){n.d.style.opacity=0;continue}n.w||(n.w=n.d.offsetWidth||160);let[r,o]=n.off,a=e+r,l=i+o,c=r<0?a-n.w-8:a+8;n.d.style.transform=`translate(${c.toFixed(1)}px, ${(l-10).toFixed(1)}px)`,n.d.style.opacity=t;let u=e+r*.55;n.line.setAttribute("points",`${e.toFixed(1)},${i.toFixed(1)} ${u.toFixed(1)},${l.toFixed(1)} ${a.toFixed(1)},${l.toFixed(1)}`),n.line.setAttribute("opacity",t),n.dot.setAttribute("cx",e.toFixed(1)),n.dot.setAttribute("cy",i.toFixed(1)),n.dot.setAttribute("opacity",t)}},_buildFrame(n){let{cx:t,cy:e,pxPerM:i,rc:s}=Us,r=p=>t+(p-s)*i,o=p=>e-p*i,a=r(le.rmin),l=r(le.rmax),c=o(le.zmax),u=o(le.zmin),h=10,d=`<rect x="${a-h}" y="${c-h}" width="${l-a+2*h}" height="${u-c+2*h}" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1"/>`,f=`font-family:${n.fontMono.replace(/"/g,"'")};font-size:18px;fill:${n.ink3}`;[1,1.5,2,2.5].forEach(p=>{let v=r(p);d+=`<line x1="${v}" y1="${u+h}" x2="${v}" y2="${u+h+7}" stroke="rgba(255,255,255,0.3)"/>`,d+=`<text x="${v}" y="${u+h+28}" text-anchor="middle" style="${f}">${p.toFixed(1)}</text>`}),[-1.5,-1,-.5,0,.5,1,1.5].forEach(p=>{let v=o(p);d+=`<line x1="${a-h-7}" y1="${v}" x2="${a-h}" y2="${v}" stroke="rgba(255,255,255,0.3)"/>`,p%1===0&&(d+=`<text x="${a-h-13}" y="${v+6}" text-anchor="end" style="${f}">${p.toFixed(0)}</text>`)}),d+=`<text x="${l+h+4}" y="${u+h+28}" style="${f};fill:${n.ink2}">R (m)</text>`,d+=`<text x="${a-h}" y="${c-h-12}" text-anchor="middle" style="${f};fill:${n.ink2}">Z (m)</text>`,d+=`<text x="${l+h}" y="${c-h-12}" text-anchor="end" style="${f};fill:${n.ink2}">65 \xD7 65</text>`,this.frame=document.createElementNS("http://www.w3.org/2000/svg","g"),this.frame.innerHTML=d,this.frame.setAttribute("opacity",0),this.svg.appendChild(this.frame)},_buildControls(n){let t=oi("div","position:absolute;right:40px;bottom:56px;display:flex;flex-direction:column;gap:12px;opacity:1;pointer-events:auto;",this.root);t.className="ui-panel";let e=oi("div","",t);e.className="ui-row";let i=oi("span","min-width:52px",e,"twist");i.className="ui-label";let s=oi("input","width:220px",e);s.type="range",s.min="0",s.max="1",s.step="0.001",s.value=String(So),s.className="ui-slider",s.style.setProperty("--slider-accent",n.plasma);let r=oi("span","min-width:110px;text-align:right",e);r.className="ui-readout";let o=oi("div","justify-content:space-between",t);o.className="ui-row";let a=oi("button",`--chip-accent:${n.coil}`,o,"coils");a.className="ui-chip is-on",a.setAttribute("aria-pressed","true");let l=oi("span","",o,"drag to orbit");l.className="ui-hint",this.hint=l,s.addEventListener("input",()=>{this.demoT=null,this._setTwist(parseFloat(s.value))}),s.addEventListener("pointerdown",c=>c.stopPropagation()),a.addEventListener("pointerdown",c=>c.stopPropagation()),a.addEventListener("click",()=>{this.coilsOn=!this.coilsOn,a.classList.toggle("is-on",this.coilsOn),a.setAttribute("aria-pressed",String(this.coilsOn)),this._kick()}),t.addEventListener("keydown",c=>{/^(Arrow|Page| |[0-9]|d|D|n|N|f|F|t|T|Escape)/.test(c.key)&&c.target.blur&&c.target.blur()}),this.ui={panel:t,sl:s,ro:r,chip:a},this._setTwist(So)},_setTwist(n){this.twistT=Eu(n),this.qk=nb(this.twistT),this.ui&&(this.ui.sl.value=String(this.twistT),this.ui.ro.innerHTML=`<small style="margin:0 6px 0 0">q95</small>${(this.qk*3.71).toFixed(1)}`),this._kick()},_bindPointer(){let n=this.canvas,t=this.user,e=0,i=0,s=0,r=null;n.addEventListener("pointerdown",a=>{this.step===3||r!==null||(r=a.pointerId,n.setPointerCapture(r),t.dragging=!0,t.vAz=0,t.vEl=0,e=a.clientX,i=a.clientY,s=performance.now(),n.style.cursor="grabbing",a.preventDefault())}),n.addEventListener("pointermove",a=>{if(a.pointerId!==r)return;let l=n.getBoundingClientRect(),c=Vi/l.width,u=(a.clientX-e)*c,h=(a.clientY-i)*c,d=performance.now(),f=Math.max(1,d-s)/1e3;e=a.clientX,i=a.clientY,s=d;let p=-u*.0055,v=h*.004;t.az+=p,t.el+=v,t.vAz=ai(t.vAz,p/f,.5),t.vEl=ai(t.vEl,v/f,.5),t.last=this.time,this._kick(),a.preventDefault()});let o=a=>{if(a.pointerId===r){try{n.releasePointerCapture(r)}catch{}r=null,t.dragging=!1,t.last=this.time,n.style.cursor="grab"}};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),this._releasePointer=()=>{if(r!==null){try{n.releasePointerCapture(r)}catch{}r=null,t.dragging=!1}}},enter(){if(this.fallback)return;this.running=!0,this._last=performance.now();let n=t=>{if(!this.running)return;this.raf=requestAnimationFrame(n);let e=Math.min(.05,(t-this._last)/1e3);this._frameMs=t-this._last,this._last=t,this._tick(e)};this.raf=requestAnimationFrame(n)},leave(){this.running=!1,this.raf&&cancelAnimationFrame(this.raf),this.raf=null,this.demoT=null,this._releasePointer&&this._releasePointer()},_kick(){!this.running&&this.renderer&&this.cs&&(this._apply(0),this._render())},setStep(n,{instant:t}={}){if(this.fallback)return;let e=this.step;this.step=n;let i=this.ctx.reducedMotion,s=Ep[n],r=this.cs.az,o={...s},a=t||i;s.az===null?o.az=(e>=2&&!t,r):o.az=r+j_(r,s.az),t&&(this.user.az=0,this.user.el=0,this.user.vAz=0,this.user.vEl=0);let l={...this.cs},c={...this.vs},u=t?0:i?.45:1.45;this.tw={t:0,dur:u,fromC:l,toC:o,fromV:c,toV:Ru[n],camInstant:a},u===0&&(this.tw.t=1),n>=2&&e<2?(this.parts.clearDots(),this.parts.seedDots(this.time,t?4200:1200)):n>=2&&t&&(this.parts.clearDots(),this.parts.seedDots(this.time,4200)),n<2&&this.parts.clearDots(),t&&this.parts.clearEvents(),this.hint.style.visibility=n===3?"hidden":"visible",this._advanceTween(0),this._kick()},_advanceTween(n){let t=this.tw;if(!t)return;t.t=t.dur>0?Math.min(1,t.t+n/t.dur):1;let e=Ap(t.t),i=t.camInstant?1:e;for(let s of tb)this.cs[s]=ai(t.fromC[s],t.toC[s],i);this.cs.az=ai(t.fromC.az,t.toC.az,i)+(this._driftAcc||0);for(let s of eb)this.vs[s]=ai(t.fromV[s],t.toV[s],e);t.t>=1&&(this.cs.az=t.toC.az+(this._driftAcc||0),this._driftAcc=0,this.tw=null)},demo(){this.fallback||(this.demoT=0,this.demoFrom=this.twistT,this.running||this._setTwist(.95))},_tickDemo(n){if(this.demoT==null)return;this.demoT+=n;let t=this.demoT,e=[[0,this.demoFrom],[1.8,1],[4.4,0],[6.4,So]],i=So;for(let s=1;s<e.length;s++)if(t<=e[s][0]){let[r,o]=e[s-1],[a,l]=e[s];i=ai(o,l,Ap((t-r)/(a-r)));break}this._setTwist(i),t>=e[e.length-1][0]&&(this.demoT=null)},_tick(n){let t=this.ctx.reducedMotion,e=performance.now();this.time+=n,this._tickDemo(n);let i=t?0:.055*this.cs.drift;this.tw&&(this._driftAcc=(this._driftAcc||0)+i*n),this._advanceTween(n),this.tw||(this.cs.az+=i*n);let s=this.user;if(!s.dragging){s.az+=s.vAz*n,s.el+=s.vEl*n;let r=Math.exp(-n*3.2);if(s.vAz*=r,s.vEl*=r,this.time-s.last>3||this.step===3){let a=1-Math.exp(-n*(this.step===3?4:1.1));this.cs.drift>.99&&!this.tw&&(this.cs.az+=s.az,s.az=0),s.az-=s.az*a,s.el-=s.el*a}}this.coilVis+=((this.coilsOn?1:0)-this.coilVis)*(1-Math.exp(-n*7)),this._apply(n*(t?.35:1)),this._render(),this._perf(n,performance.now()-e)},_perf(n,t){let e=this.stats;e.ema=ai(e.ema,n*1e3,.05),e.cpu=ai(e.cpu,t,.05),e.particles=this.parts.nActive,e.ratio=this.ratio,e.cool-=n,e.ema>24?e.slowFor+=n:e.slowFor=Math.max(0,e.slowFor-n),e.slowFor>1.2&&e.cool<=0&&(e.cool=2,e.slowFor=0,this.parts.nActive>2e3?this.parts.nActive=this.parts.nActive*.72:this.maxRatio>1.05?(this.maxRatio=Math.max(1,this.maxRatio-.25),this.resize()):this.bloom.enabled=!1)},_apply(n){let t=this.cs,e=this.vs,i=this.user,s=this.cam,r=t.el+i.el;r=Math.max(-.12,Math.min(1.05,r)),this.step!==3&&(i.el=r-t.el);let o=t.az+i.az,a=new z(t.tx,t.ty,t.tz);s.position.set(a.x+t.dist*Math.cos(r)*Math.sin(o),a.y+t.dist*Math.sin(r),a.z+t.dist*Math.cos(r)*Math.cos(o)),s.up.set(0,1,0),s.lookAt(a),s.updateProjectionMatrix();let l=s.projectionMatrix.elements;l[8]=-2*t.sx/Vi,l[9]=2*t.sy/Gi,s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.updateMatrixWorld();let c=this.cu;c.uWedge.value=e.wedge,c.uFogNear.value=t.dist-1.2,c.uFogFar.value=t.dist+3.6;let u=e.ghost,h=this.coilVis;this.vessel.material.uniforms.uOpacity.value=ai(1,.12,u),this.bloom.strength=e.bloom;let d=ai(1,.07,u)*h*e.coilDim;this.coils.coilMat.uniforms.uOpacity.value=d,this.coils.coilMat.depthWrite=d>.97,this.coils.coilMat.uniforms.uGlow.value=.05+.06*e.parts,this.coils.shellMat.uniforms.uOpacity.value=.55*d,this.coils.group.visible=d>.005;let f=1+e.breathe*.32*Math.sin(this.time*1.25);this.shells.mats.forEach(m=>m.uniforms.uI.value=e.shell*f),this.shells.group.visible=e.shell>.002,this.floor.material.uniforms.uI.value=e.shell,this.section.a.material.uniforms.uI.value=e.section*(e.wedge>.02?1:0),this.sectionB.material.uniforms.uI.value=e.section*(e.wedge>.02?.8:0)*(1-.7*u),this.sectionB.rotation.y=-(e.wedge+.0015),this.section.a.visible=this.sectionB.visible=e.section>.002&&e.wedge>.02;let p=e.contours;this.contourGroup.visible=p>.002;for(let m of this.contours.lines)m.material.opacity=m.material.userData.baseOpacity*p*(m===this.contours.vesselLine,1);this.vesselLineB.rotation.y=-(e.wedge+.0015),this.vesselLineB.material.opacity=.4*Eu(e.wedge/.3)*(1-u),this.vesselLineB.visible=e.wedge>.02&&u<.99;let v=this.parts;v.pointsMat.uniforms.uI.value=e.parts,v.lineMat.uniforms.uI.value=e.parts,v.threadMat.uniforms.uI.value=e.threads,v.dotMat.uniforms.uI.value=e.dots,v.heads.visible=v.streaks.visible=e.parts>.002,v.threads.visible=e.threads>.002,v.dots.visible=e.dots>.002,v.evPts.visible=v.evLines.visible=e.parts>.01,v.update(this.time,n,{intensity:e.parts,eventsOn:e.events>.5&&this.running,wedge:e.wedge,recordDots:e.dots>.05&&e.wedge>.3,q:this.qk}),this.map.mat.uniforms.uP.value=e.map,this.map.points.visible=e.map>.002;let g=Eu((e.map-.6)/.4);this.frame.setAttribute("opacity",g.toFixed(3)),this.ui.panel.style.opacity=e.ctl.toFixed(3),this.ui.panel.style.pointerEvents=e.ctl>.5?"auto":"none",this._placeLabels()},_render(){this.composer&&this.composer.render()},resize(){if(this.fallback){Au(this.canvas,null,this.eq,this.ctx.tokens,this.ctx.fitCanvas);return}let{ratio:n}=this.ctx.fitCanvas(this.canvas,this.maxRatio);this.ratio=n;let t=this.canvas.width,e=this.canvas.height;this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.bloom.setSize(t,e);for(let i of this.fatLines)i.material.resolution.set(t,e),i.material.linewidth=(i.material.userData.baseWidth||1.6)*n;this.parts.pointsMat.uniforms.uPx.value=n*2.2,this.parts.evMat.uniforms.uPx.value=n*2.2,this.parts.dotMat.uniforms.uPx.value=n*3.4,this.map.mat.uniforms.uPx.value=n*4.8,this._kick()}},Pp=ib;var Ip=[{name:"F1A",R:.8608,Z:.1683,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F2A",R:.8614,Z:.5081,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F3A",R:.8628,Z:.8491,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F4A",R:.8611,Z:1.1899,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F5A",R:1.0041,Z:1.5169,W:.1392,H:.1194,a1:45,a2:0,turns:58},{name:"F6A",R:2.6124,Z:.4376,W:.1732,H:.1946,a1:0,a2:92.4,turns:55},{name:"F7A",R:2.3733,Z:1.1171,W:.188,H:.1692,a1:0,a2:108.06,turns:55},{name:"F8A",R:1.2518,Z:1.6019,W:.2349,H:.0851,a1:0,a2:0,turns:58},{name:"F9A",R:1.689,Z:1.5874,W:.1694,H:.1331,a1:0,a2:0,turns:55},{name:"F1B",R:.8608,Z:-.1737,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F2B",R:.8607,Z:-.5135,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F3B",R:.8611,Z:-.8543,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F4B",R:.863,Z:-1.1957,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F5B",R:1.0025,Z:-1.5169,W:.1392,H:.1194,a1:-45,a2:0,turns:58},{name:"F6B",R:2.6124,Z:-.4376,W:.1732,H:.1946,a1:0,a2:-92.4,turns:55},{name:"F7B",R:2.3834,Z:-1.1171,W:.188,H:.1692,a1:0,a2:-108.06,turns:55},{name:"F8B",R:1.2524,Z:-1.6027,W:.2349,H:.0851,a1:0,a2:0,turns:58},{name:"F9B",R:1.6889,Z:-1.578,W:.1694,H:.1331,a1:0,a2:0,turns:55}],kp=[[.6875,.0382,.0587,.0744],[.7575,.1147,.0587,.0744],[.6875,.1912,.0587,.0744],[.7575,.2677,.0587,.0744],[.6875,.3442,.0587,.0744],[.7575,.4207,.0587,.0744],[.6875,.4972,.0587,.0744],[.7575,.5737,.0587,.0744],[.6875,.6502,.0587,.0744],[.7575,.7267,.0587,.0744],[.6875,.8032,.0587,.0744],[.7575,.8797,.0587,.0744],[.6875,.9562,.0587,.0744],[.7575,1.0326,.0587,.0744],[.6875,1.1091,.0587,.0744],[.7575,1.1853,.0587,.0744],[.6875,1.2615,.0587,.0734],[.7575,1.3351,.0587,.0713],[.6875,1.4095,.0587,.0702],[.7575,1.4801,.0587,.0662],[.6875,1.5482,.0587,.0621],[.7599,1.6108,.0495,.058],[.695,1.6684,.0495,.0555],[.7625,1.7255,.0495,.0547],[.7575,-.0382,.0587,.0744],[.6875,-.1147,.0587,.0744],[.7575,-.1912,.0587,.0744],[.6875,-.2677,.0587,.0744],[.7575,-.3442,.0587,.0744],[.6875,-.4207,.0587,.0744],[.7575,-.4972,.0587,.0744],[.6875,-.5737,.0587,.0744],[.7575,-.6502,.0587,.0744],[.6875,-.7267,.0587,.0744],[.7575,-.8032,.0587,.0744],[.6875,-.8797,.0587,.0744],[.7575,-.9562,.0587,.0744],[.6875,-1.0326,.0587,.0744],[.7575,-1.1091,.0587,.0744],[.6875,-1.1853,.0587,.0744],[.7575,-1.2615,.0587,.0734],[.6875,-1.3351,.0587,.0713],[.7575,-1.4095,.0587,.0702],[.6875,-1.4801,.0587,.0662],[.7575,-1.5482,.0587,.0621],[.69,-1.6108,.0495,.058],[.7625,-1.6684,.0495,.0555],[.7025,-1.7255,.0495,.0547]],Lp=[[.9729,-.0037],[.9787,.0699],[.9726,.518],[.9767,.2094],[.9793,.3471],[.9764,.4851],[.9785,.7591],[2.413,-.0025],[1.7617,1.3123],[2.2124,.8732],[2.2641,.7598],[2.2655,.7578],[2.3137,.6285],[2.4066,.2544],[2.4133,.0029],[.9771,-.0691],[.9722,-.5165],[.9792,-.207],[.9769,-.3428],[.9801,-.4818],[.9774,-.757],[2.4129,-.001],[.9719,-.1831],[2.0436,-1.1098],[2.2089,-.8669],[2.2596,-.7538],[2.2624,-.751],[2.3119,-.6202],[2.414,-.2441],[1.2194,1.4055],[1.4017,1.407],[1.5841,1.4084],[1.7825,1.323],[1.9243,1.2064],[2.0673,1.0904],[2.2193,.8698],[2.2702,.7462],[2.3189,.6228],[2.4159,.2492],[2.4182,-9e-4],[2.4162,-.2438],[2.3154,-.624],[2.2631,-.7487],[2.212,-.8725],[2.0848,-1.102],[1.894,-1.3327],[1.6989,-1.4063],[1.4769,-1.4055],[1.2541,-1.4047],[1.0479,-1.3302],[.9724,-1.1589],[.974,-.8542],[.9748,-.5122],[.9737,-.187],[.9732,-.0023],[.9741,.1817],[.9742,.5116],[.9745,.8503],[.9722,1.1609],[1.0511,1.3304],[1.445,1.277],[1.56,1.187],[1.723,1.112],[1.873,1.116],[1.506,1.27],[1.59,1.198],[1.73,1.142],[1.876,1.133],[1.218,1.298],[1.075,1.202],[.976,.979],[1.185,1.286],[1.086,1.228],[1.5104,-1.2788],[1.6103,-1.2788],[1.7103,-1.2791]],Up=[[.8929,.1683],[.8936,.5092],[.895,.85],[.8932,1.1909],[1.0106,1.4475],[2.511,.332],[2.285,1.018],[1.2517,1.5517],[1.6885,1.5169],[.8929,-.1726],[.8928,-.5135],[.8933,-.8543],[.8952,-1.1953],[1.0152,-1.4536],[2.509,-.335],[2.297,-1.01],[1.2491,-1.5527],[1.6882,-1.5075],[.9247,0],[.9247,.3429],[.9247,.6858],[.9247,1.0287],[.9621,1.3208],[1.1212,1.4646],[1.6978,1.4646],[2.209,1.213],[2.1933,1.0629],[2.501,.527],[2.4347,.4902],[.9247,-.3429],[.9247,-.6858],[.9247,-1.0287],[.9611,-1.3198],[1.1199,-1.4625],[1.8559,-1.4625],[2.215,-1.214],[2.1933,-1.0602],[2.501,-.524],[2.4328,-.4909],[1.3828,-1.4625],[1.5771,-1.4625],[1.3929,-1.3057],[1.5983,-1.3057],[1.7759,-1.3053]],Dp=[[1.016,0],[1.016,.964],[1.016,.968],[1.016,1.001],[1.016,1.019],[1.016,1.077],[1.016,1.07],[1.016,1.096],[1.016,1.113],[1.016,1.138],[1.016,1.147],[1.012,1.165],[1.001,1.217],[1.029,1.217],[1.042,1.1624],[1.046,1.1624],[1.056,1.1626],[1.097,1.1645],[1.108,1.1659],[1.116,1.1659],[1.134,1.169],[1.148,1.1718],[1.162,1.1756],[1.181,1.183],[1.182,1.1835],[1.185,1.185],[1.19,1.188],[1.195,1.191],[1.201,1.196],[1.209,1.202],[1.215,1.208],[1.222,1.214],[1.228,1.221],[1.234,1.231],[1.239,1.238],[1.242,1.244],[1.248,1.254],[1.258,1.278],[1.263,1.29],[1.28,1.331],[1.28,1.347],[1.28,1.348],[1.31,1.348],[1.328,1.348],[1.361,1.348],[1.38,1.348],[1.419,1.348],[1.419,1.31],[1.372,1.31],[1.3717,1.2924],[1.37,1.2827],[1.3669,1.2564],[1.3672,1.2296],[1.3718,1.1958],[1.3722,1.194],[1.3866,1.1649],[1.3871,1.1642],[1.4038,1.157],[1.4113,1.1573],[1.4186,1.1613],[1.421,1.164],[1.4866,1.2405],[1.4973,1.2346],[1.4976,1.2343],[1.4974,1.2317],[1.4928,1.2133],[1.4926,1.2106],[1.4926,1.2049],[1.4928,1.2021],[1.4934,1.1964],[1.4947,1.1851],[1.4962,1.1607],[1.4798,1.1243],[1.4808,1.1226],[1.4815,1.1214],[1.4865,1.1169],[1.491,1.1144],[1.503,1.1124],[1.597,1.0949],[1.6255,1.0853],[1.6375,1.0799],[1.647,1.077],[1.785,1.077],[2.07,1.04],[2.128,.993],[2.245,.709],[2.3396,.4614],[2.3471,.4158],[2.3491,.2722],[2.351,.1702],[2.3516,.0701],[2.3512,-.0318],[2.3505,-.1444],[2.3496,-.2148],[2.3487,-.3267],[2.3476,-.3868],[2.3402,-.453],[2.3294,-.4776],[2.134,-.973],[1.786,-1.174],[1.768,-1.211],[1.768,-1.25],[1.682,-1.25],[1.372,-1.25],[1.372,-1.329],[1.42,-1.329],[1.42,-1.363],[1.273,-1.363],[1.153,-1.363],[1.016,-1.223],[1.016,-1.223],[1.016,-.83],[1.016,-.8],[1.016,-.415],[1.016,-.4],[1.016,-.001],[1.016,0]],To={R:[.84,2.54],Z:[-1.6,1.6]},Fp=[["P2IU",.4754,1.7538,.05,.227,12],["P2OU",.5284,1.7158,.05,.151,8],["P3U",1.0685,1.0998,.021,.0894,2],["P3U",1.103,1.0998,.044,.107,4],["P3U",1.1375,1.0998,.021,.0894,2],["P4U",1.5135,1.0832,.132,.113,15],["P4U",1.4325,1.1022,.024,.151,4],["P4U",1.495,1.1662,.099,.037,4],["P5U",1.663,.4855,.128,.113,15],["P5U",1.585,.5045,.024,.151,4],["P5U",1.6475,.5645,.099,.037,4],["P6U",1.4408,.8567,.043,.052,2],["P6U",1.4408,.9327,.043,.052,2],["P6L",1.4404,-.8571,.043,.052,2],["P6L",1.4404,-.9331,.043,.052,2],["P5L",1.663,-.4768,.128,.113,15],["P5L",1.585,-.4958,.024,.151,4],["P5L",1.6475,-.5558,.099,.037,4],["P4L",1.513,-1.08,.128,.113,15],["P4L",1.425,-1.099,.024,.151,4],["P4L",1.4975,-1.159,.099,.037,4],["P3L",1.0682,-1.0933,.021,.0894,2],["P3L",1.1027,-1.0933,.044,.107,4],["P3L",1.1372,-1.0933,.021,.0894,2],["P2OL",.527,-1.7111,.05,.151,8],["P2IL",.474,-1.7491,.05,.227,12]],Np=[[.119,1.4484,.0115,.0491,2.73333],[.119,1.3993,.0115,.0491,2.73333],[.119,1.3502,.0115,.0491,2.73333],[.119,1.3011,.0115,.0491,2.73333],[.119,1.252,.0115,.0491,2.73333],[.119,1.2029,.0115,.0491,2.73333],[.119,1.1538,.0115,.0491,2.73333],[.119,1.1047,.0115,.0491,2.73333],[.119,1.0556,.0115,.0491,2.73333],[.119,1.0065,.0115,.0491,2.73333],[.119,.9574,.0115,.0491,2.73333],[.119,.9083,.0115,.0491,2.73333],[.119,.8592,.0115,.0491,2.73333],[.119,.8101,.0115,.0491,2.73333],[.119,.761,.0115,.0491,2.73333],[.119,.7119,.0115,.0491,2.73333],[.119,.6628,.0115,.0491,2.73333],[.119,.6137,.0115,.0491,2.73333],[.119,.5646,.0115,.0491,2.73333],[.119,.5155,.0115,.0491,2.73333],[.119,.4664,.0115,.0491,2.73333],[.119,.4173,.0115,.0491,2.73333],[.119,.3682,.0115,.0491,2.73333],[.119,.3191,.0115,.0491,2.73333],[.119,.27,.0115,.0491,2.73333],[.119,.2209,.0115,.0491,2.73333],[.119,.1718,.0115,.0491,2.73333],[.119,.1227,.0115,.0491,2.73333],[.119,.0736,.0115,.0491,2.73333],[.119,.0245,.0115,.0491,2.73333],[.1318,1.4484,.0115,.0491,2.73333],[.1318,1.3993,.0115,.0491,2.73333],[.1318,1.3502,.0115,.0491,2.73333],[.1318,1.3011,.0115,.0491,2.73333],[.1318,1.252,.0115,.0491,2.73333],[.1318,1.2029,.0115,.0491,2.73333],[.1318,1.1538,.0115,.0491,2.73333],[.1318,1.1047,.0115,.0491,2.73333],[.1318,1.0556,.0115,.0491,2.73333],[.1318,1.0065,.0115,.0491,2.73333],[.1318,.9574,.0115,.0491,2.73333],[.1318,.9083,.0115,.0491,2.73333],[.1318,.8592,.0115,.0491,2.73333],[.1318,.8101,.0115,.0491,2.73333],[.1318,.761,.0115,.0491,2.73333],[.1318,.7119,.0115,.0491,2.73333],[.1318,.6628,.0115,.0491,2.73333],[.1318,.6137,.0115,.0491,2.73333],[.1318,.5646,.0115,.0491,2.73333],[.1318,.5155,.0115,.0491,2.73333],[.1318,.4664,.0115,.0491,2.73333],[.1318,.4173,.0115,.0491,2.73333],[.1318,.3682,.0115,.0491,2.73333],[.1318,.3191,.0115,.0491,2.73333],[.1318,.27,.0115,.0491,2.73333],[.1318,.2209,.0115,.0491,2.73333],[.1318,.1718,.0115,.0491,2.73333],[.1318,.1227,.0115,.0491,2.73333],[.1318,.0736,.0115,.0491,2.73333],[.1318,.0245,.0115,.0491,2.73333],[.1446,1.4484,.0115,.0491,2.73333],[.1446,1.3993,.0115,.0491,2.73333],[.1446,1.3502,.0115,.0491,2.73333],[.1446,1.3011,.0115,.0491,2.73333],[.1446,1.252,.0115,.0491,2.73333],[.1446,1.2029,.0115,.0491,2.73333],[.1446,1.1538,.0115,.0491,2.73333],[.1446,1.1047,.0115,.0491,2.73333],[.1446,1.0556,.0115,.0491,2.73333],[.1446,1.0065,.0115,.0491,2.73333],[.1446,.9574,.0115,.0491,2.73333],[.1446,.9083,.0115,.0491,2.73333],[.1446,.8592,.0115,.0491,2.73333],[.1446,.8101,.0115,.0491,2.73333],[.1446,.761,.0115,.0491,2.73333],[.1446,.7119,.0115,.0491,2.73333],[.1446,.6628,.0115,.0491,2.73333],[.1446,.6137,.0115,.0491,2.73333],[.1446,.5646,.0115,.0491,2.73333],[.1446,.5155,.0115,.0491,2.73333],[.1446,.4664,.0115,.0491,2.73333],[.1446,.4173,.0115,.0491,2.73333],[.1446,.3682,.0115,.0491,2.73333],[.1446,.3191,.0115,.0491,2.73333],[.1446,.27,.0115,.0491,2.73333],[.1446,.2209,.0115,.0491,2.73333],[.1446,.1718,.0115,.0491,2.73333],[.1446,.1227,.0115,.0491,2.73333],[.1446,.0736,.0115,.0491,2.73333],[.1446,.0245,.0115,.0491,2.73333],[.1574,1.4484,.0115,.0491,2.73333],[.1574,1.3993,.0115,.0491,2.73333],[.1574,1.3502,.0115,.0491,2.73333],[.1574,1.3011,.0115,.0491,2.73333],[.1574,1.252,.0115,.0491,2.73333],[.1574,1.2029,.0115,.0491,2.73333],[.1574,1.1538,.0115,.0491,2.73333],[.1574,1.1047,.0115,.0491,2.73333],[.1574,1.0556,.0115,.0491,2.73333],[.1574,1.0065,.0115,.0491,2.73333],[.1574,.9574,.0115,.0491,2.73333],[.1574,.9083,.0115,.0491,2.73333],[.1574,.8592,.0115,.0491,2.73333],[.1574,.8101,.0115,.0491,2.73333],[.1574,.761,.0115,.0491,2.73333],[.1574,.7119,.0115,.0491,2.73333],[.1574,.6628,.0115,.0491,2.73333],[.1574,.6137,.0115,.0491,2.73333],[.1574,.5646,.0115,.0491,2.73333],[.1574,.5155,.0115,.0491,2.73333],[.1574,.4664,.0115,.0491,2.73333],[.1574,.4173,.0115,.0491,2.73333],[.1574,.3682,.0115,.0491,2.73333],[.1574,.3191,.0115,.0491,2.73333],[.1574,.27,.0115,.0491,2.73333],[.1574,.2209,.0115,.0491,2.73333],[.1574,.1718,.0115,.0491,2.73333],[.1574,.1227,.0115,.0491,2.73333],[.1574,.0736,.0115,.0491,2.73333],[.1574,.0245,.0115,.0491,2.73333],[.119,-1.4484,.0115,.0491,2.73333],[.119,-1.3993,.0115,.0491,2.73333],[.119,-1.3502,.0115,.0491,2.73333],[.119,-1.3011,.0115,.0491,2.73333],[.119,-1.252,.0115,.0491,2.73333],[.119,-1.2029,.0115,.0491,2.73333],[.119,-1.1538,.0115,.0491,2.73333],[.119,-1.1047,.0115,.0491,2.73333],[.119,-1.0556,.0115,.0491,2.73333],[.119,-1.0065,.0115,.0491,2.73333],[.119,-.9574,.0115,.0491,2.73333],[.119,-.9083,.0115,.0491,2.73333],[.119,-.8592,.0115,.0491,2.73333],[.119,-.8101,.0115,.0491,2.73333],[.119,-.761,.0115,.0491,2.73333],[.119,-.7119,.0115,.0491,2.73333],[.119,-.6628,.0115,.0491,2.73333],[.119,-.6137,.0115,.0491,2.73333],[.119,-.5646,.0115,.0491,2.73333],[.119,-.5155,.0115,.0491,2.73333],[.119,-.4664,.0115,.0491,2.73333],[.119,-.4173,.0115,.0491,2.73333],[.119,-.3682,.0115,.0491,2.73333],[.119,-.3191,.0115,.0491,2.73333],[.119,-.27,.0115,.0491,2.73333],[.119,-.2209,.0115,.0491,2.73333],[.119,-.1718,.0115,.0491,2.73333],[.119,-.1227,.0115,.0491,2.73333],[.119,-.0736,.0115,.0491,2.73333],[.119,-.0245,.0115,.0491,2.73333],[.1318,-1.4484,.0115,.0491,2.73333],[.1318,-1.3993,.0115,.0491,2.73333],[.1318,-1.3502,.0115,.0491,2.73333],[.1318,-1.3011,.0115,.0491,2.73333],[.1318,-1.252,.0115,.0491,2.73333],[.1318,-1.2029,.0115,.0491,2.73333],[.1318,-1.1538,.0115,.0491,2.73333],[.1318,-1.1047,.0115,.0491,2.73333],[.1318,-1.0556,.0115,.0491,2.73333],[.1318,-1.0065,.0115,.0491,2.73333],[.1318,-.9574,.0115,.0491,2.73333],[.1318,-.9083,.0115,.0491,2.73333],[.1318,-.8592,.0115,.0491,2.73333],[.1318,-.8101,.0115,.0491,2.73333],[.1318,-.761,.0115,.0491,2.73333],[.1318,-.7119,.0115,.0491,2.73333],[.1318,-.6628,.0115,.0491,2.73333],[.1318,-.6137,.0115,.0491,2.73333],[.1318,-.5646,.0115,.0491,2.73333],[.1318,-.5155,.0115,.0491,2.73333],[.1318,-.4664,.0115,.0491,2.73333],[.1318,-.4173,.0115,.0491,2.73333],[.1318,-.3682,.0115,.0491,2.73333],[.1318,-.3191,.0115,.0491,2.73333],[.1318,-.27,.0115,.0491,2.73333],[.1318,-.2209,.0115,.0491,2.73333],[.1318,-.1718,.0115,.0491,2.73333],[.1318,-.1227,.0115,.0491,2.73333],[.1318,-.0736,.0115,.0491,2.73333],[.1318,-.0245,.0115,.0491,2.73333],[.1446,-1.4484,.0115,.0491,2.73333],[.1446,-1.3993,.0115,.0491,2.73333],[.1446,-1.3502,.0115,.0491,2.73333],[.1446,-1.3011,.0115,.0491,2.73333],[.1446,-1.252,.0115,.0491,2.73333],[.1446,-1.2029,.0115,.0491,2.73333],[.1446,-1.1538,.0115,.0491,2.73333],[.1446,-1.1047,.0115,.0491,2.73333],[.1446,-1.0556,.0115,.0491,2.73333],[.1446,-1.0065,.0115,.0491,2.73333],[.1446,-.9574,.0115,.0491,2.73333],[.1446,-.9083,.0115,.0491,2.73333],[.1446,-.8592,.0115,.0491,2.73333],[.1446,-.8101,.0115,.0491,2.73333],[.1446,-.761,.0115,.0491,2.73333],[.1446,-.7119,.0115,.0491,2.73333],[.1446,-.6628,.0115,.0491,2.73333],[.1446,-.6137,.0115,.0491,2.73333],[.1446,-.5646,.0115,.0491,2.73333],[.1446,-.5155,.0115,.0491,2.73333],[.1446,-.4664,.0115,.0491,2.73333],[.1446,-.4173,.0115,.0491,2.73333],[.1446,-.3682,.0115,.0491,2.73333],[.1446,-.3191,.0115,.0491,2.73333],[.1446,-.27,.0115,.0491,2.73333],[.1446,-.2209,.0115,.0491,2.73333],[.1446,-.1718,.0115,.0491,2.73333],[.1446,-.1227,.0115,.0491,2.73333],[.1446,-.0736,.0115,.0491,2.73333],[.1446,-.0245,.0115,.0491,2.73333],[.1574,-1.4484,.0115,.0491,2.73333],[.1574,-1.3993,.0115,.0491,2.73333],[.1574,-1.3502,.0115,.0491,2.73333],[.1574,-1.3011,.0115,.0491,2.73333],[.1574,-1.252,.0115,.0491,2.73333],[.1574,-1.2029,.0115,.0491,2.73333],[.1574,-1.1538,.0115,.0491,2.73333],[.1574,-1.1047,.0115,.0491,2.73333],[.1574,-1.0556,.0115,.0491,2.73333],[.1574,-1.0065,.0115,.0491,2.73333],[.1574,-.9574,.0115,.0491,2.73333],[.1574,-.9083,.0115,.0491,2.73333],[.1574,-.8592,.0115,.0491,2.73333],[.1574,-.8101,.0115,.0491,2.73333],[.1574,-.761,.0115,.0491,2.73333],[.1574,-.7119,.0115,.0491,2.73333],[.1574,-.6628,.0115,.0491,2.73333],[.1574,-.6137,.0115,.0491,2.73333],[.1574,-.5646,.0115,.0491,2.73333],[.1574,-.5155,.0115,.0491,2.73333],[.1574,-.4664,.0115,.0491,2.73333],[.1574,-.4173,.0115,.0491,2.73333],[.1574,-.3682,.0115,.0491,2.73333],[.1574,-.3191,.0115,.0491,2.73333],[.1574,-.27,.0115,.0491,2.73333],[.1574,-.2209,.0115,.0491,2.73333],[.1574,-.1718,.0115,.0491,2.73333],[.1574,-.1227,.0115,.0491,2.73333],[.1574,-.0736,.0115,.0491,2.73333],[.1574,-.0245,.0115,.0491,2.73333]],Op=[[.1803,1.4488],[.1803,1.3725],[.1803,1.2962],[.1803,1.22],[.1803,1.1437],[.1803,1.0675],[.1803,.9912],[.1803,.915],[.1803,.8388],[.1803,.7589],[.1803,.6862],[.1803,.61],[.1803,.5337],[.1803,.4575],[.1803,.3812],[.1803,.305],[.1803,.2288],[.1803,.1525],[.1803,.0763],[.1803,0],[.1803,-.0763],[.1803,-.1525],[.1803,-.2288],[.1803,-.305],[.1803,-.3812],[.1803,-.4575],[.1803,-.5337],[.1803,-.61],[.1803,-.6862],[.1803,-.7625],[.1803,-.8388],[.1803,-.915],[.1803,-.9912],[.1803,-1.0675],[.1803,-1.1437],[.1803,-1.22],[.1803,-1.2962],[.1803,-1.3725],[.1803,-1.4488],[.1803,-1.525],[1.442,1.335],[1.442,1.26],[1.5897,.8105],[1.5897,.7355],[1.5897,.6604],[1.8449,.307],[1.8449,.232],[1.8449,.157],[1.8449,.082],[1.8449,.004],[1.8449,-.068],[1.8449,-.143],[1.8449,-.218],[1.8449,-.293],[1.5913,-.6404],[1.5913,-.7154],[1.5913,-.7904],[1.4401,-1.2602],[1.4401,-1.3352],[1.442,1.335],[1.442,1.26],[1.5897,.8105],[1.5897,.7355],[1.5897,.6604],[1.8449,.307],[1.8449,.232],[1.8449,.157],[1.8449,.082],[1.8449,.007],[1.8449,-.068],[1.8449,-.143],[1.8449,-.218],[1.8449,-.293],[1.5913,-.6404],[1.5913,-.7154],[1.5913,-.7904],[1.4401,-1.2602],[1.4401,-1.3352]],Bp=[[.1785,1.2349],[.1785,.9299],[.1785,.6249],[.1785,.3199],[.1785,.0149],[.1785,-.0181],[.1785,-.3231],[.1785,-.6281],[.1785,-.9331],[.1785,-1.2381],[.445,1.569],[.501,1.569],[.566,1.569],[.6617,1.6384],[1.163,1.0826],[1.163,1.0976],[1.0354,1.0976],[1.0354,1.0831],[1.593,1.0408],[1.593,1.0558],[1.4001,1.1658],[1.4001,1.1508],[1.7493,.4422],[1.7493,.4572],[1.5458,.5642],[1.5458,.5492],[1.4025,.889],[1.4025,.904],[.445,-1.571],[.501,-1.571],[.566,-1.571],[.6617,-1.6404],[1.163,-1.0886],[1.163,-1.1036],[1.0354,-1.1036],[1.0354,-1.0886],[1.5984,-1.0444],[1.5984,-1.0694],[1.4005,-1.1594],[1.4005,-1.144],[1.7463,-.4422],[1.7463,-.4572],[1.7463,-.5322],[1.5495,-.5472],[1.4025,-.8876],[1.4025,-.9026]],zp=[[1.9,.405],[1.5551,.405],[1.5551,.8225],[1.4079,.8225],[1.4079,1.033],[1.0399,1.033],[1.0399,1.195],[1.9,1.195],[1.9,1.825],[.5649,1.825],[.5649,1.7281],[.7835,1.7281],[.7835,1.7156],[.5826,1.547],[.4165,1.547],[.28,1.6835],[.28,1.2291],[.1952,1.0835],[.1952,-1.0835],[.28,-1.2291],[.28,-1.6835],[.4165,-1.547],[.5826,-1.547],[.7835,-1.7156],[.7835,-1.7281],[.5649,-1.7281],[.5649,-1.825],[1.9,-1.825],[1.9,-1.195],[1.0399,-1.195],[1.0399,-1.033],[1.4079,-1.033],[1.4079,-.8225],[1.5551,-.8225],[1.5551,-.405],[1.9,-.405],[1.9,.405]],Ao={R:[.06,2],Z:[-2,2]};var Pu={F1A:-55500,F2A:-37800,F3A:48500,F4A:113900,F5A:111300,F6A:-172200,F7A:-144500,F8A:108e3,F9A:-30100,F1B:-66900,F2B:-89800,F3B:216800,F4B:-259900,F5B:122300,F6B:-131700,F7B:-168400,F8B:585700,F9B:-332600,ECOILA:-1e6},Iu={P2U:188800,P2L:188800,P3U:-63500,P3L:-63500,P4U:-11400,P4L:-11400,P5U:-119400,P5L:-119400,P6U:0,P6L:0,SOL:-3e6};function ku(n){let t=1/0,e=-1/0,i=1/0,s=-1/0;for(let r of n)t=Math.min(t,r.R-r.W/2),e=Math.max(e,r.R+r.W/2),i=Math.min(i,r.Z-r.H/2),s=Math.max(s,r.Z+r.H/2);return{R:(t+e)/2,Z:(i+s)/2,width:e-t,height:s-i}}var sb=n=>{let t=+n[1];return t===5||t===8||t===9?"divertor":t===6||t===7?"vertical":"shaping"};function rb(){let n=Ip.map(s=>{let r=[{R:s.R,Z:s.Z,W:s.W,H:s.H,a1:s.a1,a2:s.a2,turns:s.turns}],o=Pu[s.name]||0,a=Math.max(6e5,Math.ceil(2.5*Math.abs(o)/5e4)*5e4);return{id:s.name,label:s.name,group:sb(s.name),R:s.R,Z:s.Z,width:s.W,height:s.H,turns:s.turns,elements:r,range:[-a,a],default:o,source:"d3d_mhdin_168191.dat RF/ZF/WF/HF/AF/AF2/TURNFC; range: starter README (~+-600 kA*turn)"}}),t=kp.map(([s,r,o,a])=>({R:s,Z:r,W:o,H:a,a1:0,a2:0,turns:1})),e=ku(t),i=Pu.ECOILA||0;return n.push({id:"ECOILA",label:"E-coil",group:"solenoid",...e,turns:t.length,elements:t,range:[-3e6,3e6],default:i,approx:!0,source:"geometry: d3d_mhdin_168191.dat RE/ZE/WE/HE with ECID = 1; current: approx"}),n}var ob=[["P2U",["P2IU","P2OU"],"divertor"],["P2L",["P2IL","P2OL"],"divertor"],["P3U",["P3U"],"shaping"],["P3L",["P3L"],"shaping"],["P4U",["P4U"],"shaping"],["P4L",["P4L"],"shaping"],["P5U",["P5U"],"vertical"],["P5L",["P5L"],"vertical"],["P6U",["P6U"],"vertical"],["P6L",["P6L"],"vertical"]],ab={P2:25e4,P3:15e4,P4:3e5,P5:3e5,P6:6e4};function lb(){let n=ob.map(([e,i,s])=>{let r=Fp.filter(u=>i.includes(u[0])).map(([,u,h,d,f,p])=>({R:u,Z:h,W:d,H:f,a1:0,a2:0,turns:p})),o=r.reduce((u,h)=>u+h.turns,0),a=Iu[e]||0,l=ab[e.slice(0,2)],c=Math.max(l,Math.ceil(2.5*Math.abs(a)/1e4)*1e4);return{id:e,label:e,group:s,...ku(r),turns:o,elements:r,range:[-c,c],default:a,approx:!0,source:"geometry: mast_mhdin_0.dat RF/ZF/WF/HF/FCTURN (FCID "+i.join("+")+"); current: approx"}}),t=Np.map(([e,i,s,r,o])=>({R:e,Z:i,W:s,H:r,a1:0,a2:0,turns:o}));return n.push({id:"SOL",label:"Solenoid",group:"solenoid",...ku(t),turns:Math.round(t.reduce((e,i)=>e+i.turns,0)),elements:t,range:[-16e6,16e6],default:Iu.SOL||0,approx:!0,source:"geometry: mast_mhdin_0.dat RE/ZE/WE/HE/ECTURN (240 x 2.7333 = 656 turns); current: approx"}),n}var kr=n=>n.map(t=>[t[0],t[1]]),li={d3d:{id:"d3d",name:"DIII-D",kind:"conventional",grid:{Rmin:To.R[0],Rmax:To.R[1],Zmin:To.Z[0],Zmax:To.Z[1],n:65},wall:kr(Dp),coils:rb(),plasma:{Ip:12e5,R0:1.7,Z0:-.06,a:.6,kappa:1.78,deltaU:.3,deltaL:.55,li:.95,betaP:.9,config:"lower single null",xpoint:{R:1.36,Z:-1.13},approx:!0},toroidal:{B0:2,R0:1.6955,F:2*1.6955,approx:!0},thomson:{kind:"core Thomson (vertical laser)",orientation:"vertical",R:1.94,path:[[1.94,-1.32],[1.94,1.32]],channels:{from:.03,to:.76,count:36},Te0:3.2,ne0:6,source:"R = 1.94 m, Z 0.03-0.76 m: thomson_geom.py (challenge chord data); count/spacing approx"},probes:kr(Lp),fluxLoops:kr(Up),view:{Rmin:.55,Rmax:2.8,Zmin:-1.78,Zmax:1.78},sources:{coils:"EFIT machine description of DIII-D (EFUND mhdin file, OMAS support files)",wall:"FreeGS 0.8.2 DIII-D wall",grid:"challenge EFIT grid (d3d_limiter_mask.npz grid_R/grid_Z; = mhdin RLEFT/RRIGHT/ZBOTTO/ZTOP)",probes:"d3d_mhdin_168191.dat XMP2/YMP2 (76 magnetic probes)"}},mast:{id:"mast",name:"MAST",kind:"spherical",grid:{Rmin:Ao.R[0],Rmax:Ao.R[1],Zmin:Ao.Z[0],Zmax:Ao.Z[1],n:65},wall:kr(zp),coils:lb(),plasma:{Ip:7e5,R0:.86,Z0:0,a:.56,kappa:1.9,deltaU:.42,deltaL:.42,li:1,betaP:.7,config:"double null",xpoint:{R:.62,Z:1.14},approx:!0},toroidal:{B0:.52,R0:.85,F:.52*.85,approx:!0},thomson:{kind:"Thomson (horizontal midplane laser)",orientation:"horizontal",Z:0,path:[[.2,0],[1.9,0]],channels:{from:.235,to:1.48,count:48},Te0:1.1,ne0:3.5,source:"Z = 0, R 0.235-1.48 m: thomson_geom.py (challenge chord data); count/spacing approx"},probes:kr(Op),fluxLoops:kr(Bp),view:{Rmin:0,Rmax:2.08,Zmin:-2.05,Zmax:2.05},sources:{coils:"EFIT machine description of MAST (EFUND mhdin file, OMAS support files)",wall:"EFIT limiter lim_mast.010_M4 (FAIR-MAST, CC BY-SA 4.0)",grid:"challenge EFIT grid (mast_limiter_mask.npz grid_R/grid_Z)",probes:"mast_mhdin_0.dat XMP2/YMP2 (78 pickup coils)"}}};var wl=4e-7*Math.PI,cb=1e-6;function Hp(n,t){n>=0||(n=0),n>1-1e-15&&(n=1-1e-15);let e=1,i=Math.sqrt(1-n),s=n,r=1;s=.5*n;for(let a=0;a<12;a++){let l=.5*(e+i),c=.5*(e-i);if(i=Math.sqrt(e*i),e=l,s+=r*c*c,r*=2,Math.abs(c)<1e-15*e)break}let o=Math.PI/(2*e);return t[0]=o,t[1]=o*(1-s),t}var Lu=new Float64Array(2);function Ds(n,t,e,i){if(!(n>0)||!(e>0))return 0;let s=t-i;(n-e)*(n-e)+s*s<cb&&(n=e+.001);let o=(n+e)*(n+e)+s*s,a=4*n*e/o;Hp(a,Lu);let l=Math.sqrt(a);return wl/(2*Math.PI)*Math.sqrt(n*e)*((2-a)*Lu[0]-2*Lu[1])/l}var lw=new Float64Array(2);function Wi(n,t,e,i,s=65,r=s){let o=new Float32Array(s),a=new Float32Array(r);for(let l=0;l<s;l++)o[l]=n+(t-n)*l/(s-1);for(let l=0;l<r;l++)a[l]=e+(i-e)*l/(r-1);return{n:s,m:r,R:o,Z:a,dR:(t-n)/(s-1),dZ:(i-e)/(r-1),Rmin:n,Rmax:t,Zmin:e,Zmax:i}}function Uu(n){if(n&&n.dR&&n.Rmin!==void 0)return n;let t=n.R.length,e=n.Z.length;return Wi(n.R[0],n.R[t-1],n.Z[0],n.Z[e-1],t,e)}var Lr=(n,t,e)=>n<t?t:n>e?e:n;function Du(n,t,e,i){let s=t.n,r=(e-t.Rmin)/t.dR,o=(i-t.Zmin)/t.dZ;r=Lr(r,0,s-1.000001),o=Lr(o,0,t.m-1.000001);let a=r|0,l=o|0,c=r-a,u=o-l,h=l*s+a;return(1-u)*((1-c)*n[h]+c*n[h+1])+u*((1-c)*n[h+s]+c*n[h+s+1])}function Vp(n,t){let e=n*n,i=e*n;t[0]=-.5*i+e-.5*n,t[1]=1.5*i-2.5*e+1,t[2]=-1.5*i+2*e+.5*n,t[3]=.5*i-.5*e}var Gp=new Float64Array(4),Wp=new Float64Array(4);function me(n,t,e,i){let s=t.n,r=t.m,o=Lr((e-t.Rmin)/t.dR,0,s-1.000001),a=Lr((i-t.Zmin)/t.dZ,0,r-1.000001),l=o|0,c=a|0;Vp(o-l,Gp),Vp(a-c,Wp);let u=0;for(let h=0;h<4;h++){let d=Lr(c-1+h,0,r-1),f=0;for(let p=0;p<4;p++){let v=Lr(l-1+p,0,s-1);f+=Gp[p]*n[d*s+v]}u+=Wp[h]*f}return u}function He(n,t,e,i,s,r=.25){let o=t.dR*r,a=t.dZ*r;return s[0]=(me(n,t,e+o,i)-me(n,t,e-o,i))/(2*o),s[1]=(me(n,t,e,i+a)-me(n,t,e,i-a))/(2*a),s}function Fs(n,t,e,i,s){He(n,t,e,i,s);let r=s[0],o=s[1],a=Math.max(e,.001);return s[0]=-o/a,s[1]=r/a,s}function Xp(n,t,e,i){let s=t.n,r=t.m;for(let o=0;o<r;o++)for(let a=0;a<s;a++){let l=o*s+a,c=a>0?l-1:l,u=a<s-1?l+1:l,h=o>0?l-s:l,d=o<r-1?l+s:l;e[l]=(n[u]-n[c])/(t.dR*(u-c||1)),i[l]=(n[d]-n[h])/(t.dZ*((d-h)/s||1))}}function _e(n,t,e){let i=!1;if(n.length&&Array.isArray(n[0])){for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[r][0],l=n[r][1],c=n[o][0],u=n[o][1];l>e!=u>e&&t<(c-a)*(e-l)/(u-l)+a&&(i=!i)}return i}let s=n.length>>1;for(let r=0,o=s-1;r<s;o=r++){let a=n[2*r],l=n[2*r+1],c=n[2*o],u=n[2*o+1];l>e!=u>e&&t<(c-a)*(e-l)/(u-l)+a&&(i=!i)}return i}function Zp(n,t){let e=[];for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]),a=Math.max(1,Math.ceil(o/t));for(let l=0;l<a;l++)e.push([s[0]+(r[0]-s[0])*l/a,s[1]+(r[1]-s[1])*l/a])}return e}var qp=0,$p,Yp,Jp;function hb(n){n<=qp||(qp=n,$p=new Int32Array(n*2),Yp=new Float32Array(n*2),Jp=new Uint8Array(n))}function Ve(n,t,e,i,s){let r=t*e,o=2*r;hb(o);let a=$p,l=Yp,c=Jp,u=s.R[0],h=s.Z[0],d=(s.R[t-1]-u)/(t-1),f=(s.Z[e-1]-h)/(e-1),p=[],v=y=>{if(c[y])return y;c[y]=1,a[2*y]=-1,a[2*y+1]=-1,p.push(y);let x,w,S,T,E,b;if(y<r){let A=y/t|0,U=y-A*t;x=n[y],w=n[y+1],S=u+U*d,E=S+d,T=b=h+A*f}else{let A=y-r,U=A/t|0,L=A-U*t;x=n[A],w=n[A+t],S=E=u+L*d,T=h+U*f,b=T+f}let M=w!==x?(i-x)/(w-x):.5;return M>=0||(M=0),M>1&&(M=1),l[2*y]=S+M*(E-S),l[2*y+1]=T+M*(b-T),y},g=(y,x)=>{v(y),v(x),a[2*y]===-1?a[2*y]=x:a[2*y+1]=x,a[2*x]===-1?a[2*x]=y:a[2*x+1]=y};for(let y=0;y<e-1;y++)for(let x=0;x<t-1;x++){let w=y*t+x,S=n[w],T=n[w+1],E=n[w+t+1],b=n[w+t],M=(S>i?1:0)|(T>i?2:0)|(E>i?4:0)|(b>i?8:0);if(M===0||M===15)continue;let A=w,U=r+w+1,L=w+t,N=r+w;switch(M){case 1:case 14:g(N,A);break;case 2:case 13:g(A,U);break;case 3:case 12:g(N,U);break;case 4:case 11:g(U,L);break;case 6:case 9:g(A,L);break;case 7:case 8:g(N,L);break;case 5:{.25*(S+T+E+b)>i?(g(A,U),g(L,N)):(g(N,A),g(U,L));break}case 10:{.25*(S+T+E+b)>i?(g(N,A),g(U,L)):(g(A,U),g(L,N));break}default:break}}let m=[],_=y=>{let x=[],w=-1,S=y,T=!1;for(;S>=0;){x.push(l[2*S],l[2*S+1]),c[S]=2;let b=a[2*S],M=a[2*S+1],A=b!==w&&b>=0?b:M!==w&&M>=0?M:-1;if(b===M&&b>=0&&b!==w&&(A=b),A>=0&&c[A]===2){A===y&&(T=!0);break}w=S,S=A}let E=new Float32Array(x);return E.closed=T&&x.length>=6,E};for(let y=0;y<p.length;y++){let x=p[y];if(c[x]===1&&(a[2*x]<0||a[2*x+1]<0)){let w=_(x);w.length>=4&&m.push(w)}}for(let y=0;y<p.length;y++){let x=p[y];if(c[x]===1){let w=_(x);w.length>=4&&m.push(w)}}for(let y=0;y<p.length;y++)c[p[y]]=0;return m}function Ur(n){let t=n.length>>1,e=0;for(let i=0,s=t-1;i<t;s=i++)e+=n[2*s]*n[2*i+1]-n[2*i]*n[2*s+1];return .5*e}function Fu(n){let t=n.length>>1,e=0;for(let i=0,s=t-1;i<t;s=i++)e+=Math.hypot(n[2*i]-n[2*s],n[2*i+1]-n[2*s+1]);return e}var mn=new Float64Array(2);function Eo(n,t){let{n:e,m:i}=n,s=t.wall,r=new Uint8Array(e*i);for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=l===0||a===0||l===e-1||a===i-1;r[a*e+l]=!c&&_e(s,n.R[l],n.Z[a])?1:0}let o=Zp(s,.02).filter(a=>a[0]>=n.Rmin&&a[0]<=n.Rmax&&a[1]>=n.Zmin&&a[1]<=n.Zmax);return{grid:n,mask:r,wallDense:o,u:new Float32Array(e*i),stamp:new Uint32Array(e*i),queue:new Int32Array(e*i),stampId:1}}function Kp(n,t,e,i,s){let r=t.dR*.5,o=t.dZ*.5,a=me(n,t,e,i);return s[0]=(me(n,t,e+r,i)-2*a+me(n,t,e-r,i))/(r*r),s[2]=(me(n,t,e,i+o)-2*a+me(n,t,e,i-o))/(o*o),s[1]=(me(n,t,e+r,i+o)-me(n,t,e+r,i-o)-me(n,t,e-r,i+o)+me(n,t,e-r,i-o))/(4*r*o),s}function jp(n,t,e,i,s){let r=e,o=i,a=new Float64Array(3);for(let l=0;l<10;l++){He(n,t,r,o,mn),Kp(n,t,r,o,a);let c=a[0]*a[2]-a[1]*a[1];if(!(Math.abs(c)>0))break;let u=-(a[2]*mn[0]-a[1]*mn[1])/c,h=-(-a[1]*mn[0]+a[0]*mn[1])/c,d=Math.max(Math.abs(u)/t.dR,Math.abs(h)/t.dZ,1);if(u/=d,h/=d,r+=u,o+=h,Math.abs(u)<1e-5*t.dR&&Math.abs(h)<1e-5*t.dZ)break}return!Number.isFinite(r)||!Number.isFinite(o)||Math.abs(r-e)>s*t.dR||Math.abs(o-i)>s*t.dZ||r<t.Rmin||r>t.Rmax||o<t.Zmin||o>t.Zmax?null:(Kp(n,t,r,o,a),{R:r,Z:o,det:a[0]*a[2]-a[1]*a[1],H0:a[0],H2:a[2]})}function Qp(n,t,e){let{grid:i,mask:s,u:r,stamp:o,queue:a}=n,l=i.n,c=++n.stampId;c>4e9&&(o.fill(0),n.stampId=1);let u=0,h=0;a[h++]=t,o[t]=c;let d=0;for(;u<h;){let f=a[u++];if(d++,!s[f])return{closed:!1,count:d};let p=f%l,v=[f-1,f+1,f-l,f+l];for(let g=0;g<4;g++){let m=v[g];g===0&&p===0||g===1&&p===l-1||m<0||m>=r.length||o[m]!==c&&r[m]>e&&(o[m]=c,a[h++]=m)}}return{closed:!0,count:d}}function ub(n,t,e){let i=Math.max(0,Math.min(n.n-1,Math.round((t-n.Rmin)/n.dR)));return Math.max(0,Math.min(n.m-1,Math.round((e-n.Zmin)/n.dZ)))*n.n+i}function t0(n,t,e,i,s){let r=Ve(n,t.n,t.m,e,t),o=null,a=1/0;for(let l of r){if(!l.closed||!_e(l,i,s))continue;let c=Math.abs(Ur(l));c<a&&(a=c,o=l)}return o}function e0(n,t,e,i){for(let s=0;s<n.length;s+=2){let r=n[s],o=n[s+1],a=me(t,e,r,o)-i;He(t,e,r,o,mn);let l=mn[0]*mn[0]+mn[1]*mn[1];if(!(l>0))continue;let c=-a*mn[0]/l,u=-a*mn[1]/l,h=.5*Math.min(e.dR,e.dZ),d=Math.hypot(c,u);d>h&&(c*=h/d,u*=h/d),Number.isFinite(c)&&Number.isFinite(u)&&(n[s]=r+c,n[s+1]=o+u)}return n}function Ns(n,t){let e=n.length>>1,i=1/0,s=-1/0,r=1/0,o=-1/0,a=0,l=0;for(let f=0;f<e;f++){let p=n[2*f],v=n[2*f+1];p<i&&(i=p),p>s&&(s=p),v>o&&(o=v,a=p),v<r&&(r=v,l=p)}let c=.5*(s+i),u=Math.max(.001,.5*(s-i)),h=0;for(let f=0,p=e-1;f<e;p=f++){let v=n[2*f],g=n[2*f+1],m=n[2*p],_=n[2*p+1];h+=(m+v)*(m*g-v*_)}let d=2*Math.PI*Math.abs(h)/6;return{Raxis:t?t.R:c,Zaxis:t?t.Z:.5*(o+r),R0:c,a:u,kappa:(o-r)/(2*u),deltaU:(c-a)/u,deltaL:(c-l)/u,volume:d,Rmin:i,Rmax:s,Zmin:r,Zmax:o,area:Math.abs(Ur(n)),perimeter:Fu(n)}}var db=new Float32Array(0);function Dr(n,t,e){let i=t.grid,{n:s,m:r}=i,o=e.sign>=0?1:-1,a=t.u;for(let G=0;G<s*r;G++)a[G]=o*n[G];let l=e.hint||{R:.5*(i.Rmin+i.Rmax),Z:.5*(i.Zmin+i.Zmax),r:.6},c=G=>({ok:!1,axis:G||{R:l.R,Z:l.Z,psi:me(n,i,l.R,l.Z)},xpoints:[],psiBoundary:G?G.psi:me(n,i,l.R,l.Z),limited:!0,lcfs:db,shape:null,q95Approx:0,betaNApprox:0}),u=l.r||.6,h=-1,d=-1/0;for(let G=1;G<r-1;G++){let j=i.Z[G]-l.Z;if(!(Math.abs(j)>u*1.8))for(let Q=1;Q<s-1;Q++){let ft=G*s+Q;if(!t.mask[ft])continue;let Ct=i.R[Q]-l.R;Ct*Ct/(u*u)+j*j/(u*u*3.2)>1||a[ft]>d&&(d=a[ft],h=ft)}}if(h<0)return c(null);let f=[-1,1,-s,s,-s-1,-s+1,s-1,s+1].every(G=>a[h+G]<=a[h]),p=i.R[h%s],v=i.Z[h/s|0],g=jp(a,i,p,v,1.5);g&&g.det>0&&g.H0<0&&(p=g.R,v=g.Z);let m=Math.max(me(a,i,p,v),d),_={R:p,Z:v,psi:o*m};if(!f)return c(_);let y=[],x=G=>{let j=(a[G+1]-a[G-1])/(2*i.dR),Q=(a[G+s]-a[G-s])/(2*i.dZ);return j*j+Q*Q};for(let G=2;G<r-2;G++)for(let j=2;j<s-2;j++){let Q=G*s+j;if(!t.mask[Q])continue;let ft=x(Q),Ct=!0;for(let Vt of[-1,1,-s,s,-s-1,-s+1,s-1,s+1])if(x(Q+Vt)<ft){Ct=!1;break}if(!Ct)continue;let bt=(a[Q+1]-2*a[Q]+a[Q-1])/(i.dR*i.dR),Dt=(a[Q+s]-2*a[Q]+a[Q-s])/(i.dZ*i.dZ),W=(a[Q+s+1]-a[Q+s-1]-a[Q-s+1]+a[Q-s-1])/(4*i.dR*i.dZ);if(bt*Dt-W*W>=0)continue;let Yt=jp(a,i,i.R[j],i.Z[G],2.5);!Yt||!(Yt.det<0)||_e(e.wall,Yt.R,Yt.Z)&&(Math.hypot((Yt.R-p)/i.dR,(Yt.Z-v)/i.dZ)<3||y.some(Vt=>Math.hypot((Vt.R-Yt.R)/i.dR,(Vt.Z-Yt.Z)/i.dZ)<2)||y.push({R:Yt.R,Z:Yt.Z,u:me(a,i,Yt.R,Yt.Z)}))}let w=ub(i,p,v),S=1/0;for(let G=0;G<s*r;G++)t.mask[G]&&a[G]<S&&(S=a[G]);let T=Math.min(m,a[w])-1e-12*Math.abs(m),E=S;if(!(T>E))return c(_);if(Qp(t,w,E).closed)T=E;else for(let G=0;G<26;G++){let j=.5*(E+T);Qp(t,w,j).closed?T=j:E=j}let b=T,M=E,A=Math.max(m-b,1e-12),U=Math.max(.04*A,3*(b-M)),L=null;for(let G of y)G.u>=m||G.u<b-U||(!L||G.u>L.u)&&(L=G);let N,k;if(L)N=L.u,k=!1;else{let G=-1/0,j=2*(b-M)+.01*A;for(let Q of t.wallDense){let ft=Du(a,i,Q[0],Q[1]);ft<=b+j&&ft>G&&(G=ft)}N=Number.isFinite(G)?Math.min(Math.max(G,M),b+j):b,k=!0}if(!(N<m))return c(_);let I=null;for(let G of[.004,.012,.03,.07,.15]){let j=N+G*(m-N);if(I=t0(a,i,j,p,v),I){e0(I,a,i,j);break}}if(!I||I.length<12)return c(_);let O=Ns(I,_),H=Math.abs(e.F||0),$=m-.95*(m-N),K=t0(a,i,$,p,v),ct=0,Y=Math.abs(e.Ip||0),st=H/Math.max(O.R0,.05),F=Y>0?5*O.a*O.a*st*(1+O.kappa*O.kappa)/(2*O.R0*(Y/1e6)):0;if(K&&H>0){e0(K,a,i,$);let G=K.length>>1,j=0;for(let Q=0,ft=G-1;Q<G;ft=Q++){let Ct=.5*(K[2*Q]+K[2*ft]),bt=.5*(K[2*Q+1]+K[2*ft+1]),Dt=Math.hypot(K[2*Q]-K[2*ft],K[2*Q+1]-K[2*ft+1]);He(a,i,Ct,bt,mn);let W=Math.hypot(mn[0],mn[1]);j+=Dt/(Math.max(Ct,.05)*Math.max(W,1e-6))}ct=H*j/(2*Math.PI)}(!Number.isFinite(ct)||ct<=0)&&(ct=F),ct=Math.min(80,Math.max(.3,ct||.3));let X=0;if(Y>0&&st>0){let G=wl*Y/Math.max(O.perimeter,.1);X=100*((e.betaP||0)*(G*G)/(st*st))*O.a*st/(Y/1e6),Number.isFinite(X)||(X=0)}let et=y.map(G=>({R:G.R,Z:G.Z,psi:o*G.u,primary:G===L,active:!k&&Math.abs(G.u-N)<Math.max(.02*A,2*(b-M))})).sort((G,j)=>Math.abs(G.psi-_.psi)-Math.abs(j.psi-_.psi));return{ok:!0,axis:_,xpoints:et,psiBoundary:o*N,limited:k,lcfs:I,shape:O,q95Approx:ct,betaNApprox:X,qCyl:F}}var fb=2*Math.PI;function zu(n,t=.04){let e=Math.abs(n.W),i=Math.abs(n.H),s=Math.max(1,Math.min(Math.ceil(e/t),6)),r=Math.max(1,Math.min(Math.ceil(i/t),12)),o=[];for(let a=0;a<r;a++)for(let l=0;l<s;l++){let c=s>1?(l-(s-1)/2)*(e/s):0,u=r>1?(a-(r-1)/2)*(i/r):0;if(n.a2&&Math.abs(n.a2)>1e-6&&(c+=u/Math.tan(n.a2*Math.PI/180)),n.a1&&Math.abs(n.a1)>1e-6){let h=Math.cos(n.a1*Math.PI/180),d=Math.sin(n.a1*Math.PI/180),f=h*c-d*u;u=d*c+h*u,c=f}o.push({R:n.R+c,Z:n.Z+u})}return o}function Po(n){return[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([e,i])=>{let s=e*n.W,r=i*n.H;if(n.a2&&Math.abs(n.a2)>1e-6&&(s+=r/Math.tan(n.a2*Math.PI/180)),n.a1&&Math.abs(n.a1)>1e-6){let o=Math.cos(n.a1*Math.PI/180),a=Math.sin(n.a1*Math.PI/180),l=o*s-a*r;r=a*s+o*r,s=l}return[n.R+s,n.Z+r]})}function n0(n){let t=n.elements.reduce((i,s)=>i+(s.turns||1),0)||1,e=[];for(let i of n.elements){let s=zu(i),r=(i.turns||1)/t/s.length;for(let o of s)e.push({R:o.R,Z:o.Z,w:r})}return e}var Nu=new Map;function Hu(n,t=65){let e=n.id+":"+t;if(Nu.has(e))return Nu.get(e);let i=typeof performance<"u"?performance.now():0,s=n.grid,r=Wi(s.Rmin,s.Rmax,s.Zmin,s.Zmax,t,t),o=t*t,a=n.coils.map(f=>{let p=n0(f),v=new Float32Array(o);for(let g=0;g<t;g++){let m=r.Z[g];for(let _=0;_<t;_++){let y=r.R[_],x=0;for(let w=0;w<p.length;w++)x+=p[w].w*Ds(y,m,p[w].R,p[w].Z);v[g*t+_]=x}}return{G:v,fils:p}}),l=(t-1>>1)+1,c=2*t-1,u=new Float32Array(l*c*t);for(let f=0;f<l;f++){let p=r.R[Math.min(2*f,t-1)];for(let v=0;v<c;v++){let g=(v-(t-1))*r.dZ,m=(f*c+v)*t;for(let _=0;_<t;_++){let y=r.R[_],x=0;for(let w of[-.5,.5])for(let S of[-.5,.5])x+=Ds(y,g,p+w*r.dR,S*r.dZ);u[m+_]=.25*x}}}let h=Eo(r,n),d={grid:r,coilG:a,T:u,Ls:l,DZN:c,ctx:h,buildMs:0};return d.buildMs=(typeof performance<"u"?performance.now():0)-i,Nu.set(e,d),d}var gn=(n,t,e)=>n<t?t:n>e?e:n;function pb(n,t){let e=1/0,i=-1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,c]=n[r];if(a>t!=c>t){let u=o+(t-a)*(l-o)/(c-a);e=Math.min(e,u),i=Math.max(i,u)}}return[e,i]}function mb(n,t){let e=1/0,i=-1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,c]=n[r];if(o>t!=l>t){let u=a+(t-o)*(c-a)/(l-o);e=Math.min(e,u),i=Math.max(i,u)}}return[e,i]}function i0(n){return gn((Math.exp(gn(n,.3,2.5))-1.65)/.89,.15,5)}function Ro(n,t,e,i,s){return-4e-7*Math.PI*n/(4*Math.PI*t)*(Math.log(8*t/e)+i+s/2-1.5)}var Ou=10,Bu=36;function s0(n,t){let e=Ou*Bu;t||(t={R:new Float64Array(e),Z:new Float64Array(e),w:new Float64Array(e),n:e});let i=Math.asin(gn(n.deltaU,-.9,.9)),s=Math.asin(gn(n.deltaL,-.9,.9)),r=0,o=0;for(let l=0;l<Ou;l++){let c=(l+.5)/Ou,u=Math.pow(Math.max(0,1-c*c),n.alpha)*c;for(let h=0;h<Bu;h++){let d=(h+.5)/Bu*fb,f=Math.sin(d),p=f>=0?i:s;t.R[o]=n.Rp+n.a*c*Math.cos(d+p*f),t.Z[o]=n.Zp+n.kappa*n.a*c*f,t.w[o]=u,r+=u,o++}}let a=r>0?n.Ip/r:0;for(let l=0;l<e;l++)t.w[l]*=a;return t}var Zn=new Float64Array(2),Co=class{constructor(t,e={}){this.machine=t,this.n=e.n||65,this.tables=Hu(t,this.n),this.grid=this.tables.grid,this.coils=t.coils.map(r=>({id:r.id,label:r.label,group:r.group,range:r.range.slice(),default:r.default,amps:r.default})),this._index=new Map(this.coils.map((r,o)=>[r.id,o]));let i=t.plasma;this.Ip=i.Ip,this.li=i.li,this.betaP=i.betaP,this.solenoidFactor=1,this.kappaGain=e.kappaGain===void 0?.25:e.kappaGain,this.verticalGain=e.verticalGain===void 0?3:e.verticalGain;let s=this.n*this.n;this._psiVac=new Float32Array(s),this._psiPl=new Float32Array(s),this._Is=new Float64Array(this.tables.Ls*this.tables.Ls),this._fil=null,this._n0=null}setCoil(t,e){let i=this._index.get(t);if(i===void 0)return;let s=this.coils[i],r=Number.isFinite(+e)?+e:s.default;s.amps=gn(r,s.range[0],s.range[1])}getCoil(t){let e=this._index.get(t);return e===void 0?0:this.coils[e].amps}resetCoils(){for(let t of this.coils)t.amps=t.default}setIp(t){let e=3*Math.abs(this.machine.plasma.Ip);this.Ip=Number.isFinite(+t)?gn(+t,-e,e):this.machine.plasma.Ip}setProfile({li:t,betaP:e}={}){Number.isFinite(t)&&(this.li=gn(t,.4,2)),Number.isFinite(e)&&(this.betaP=gn(e,0,3))}setSolenoidFactor(t){this.solenoidFactor=Number.isFinite(+t)?gn(+t,-2,2):1}reverse(){for(let t of this.coils)t.amps=-t.amps;this.Ip=-this.Ip}snapshot(){return{machine:this.machine.id,coils:Object.fromEntries(this.coils.map(t=>[t.id,t.amps])),Ip:this.Ip,li:this.li,betaP:this.betaP,solenoidFactor:this.solenoidFactor}}restore(t){if(t){if(t.coils)for(let[e,i]of Object.entries(t.coils))this.setCoil(e,i);t.Ip!==void 0&&this.setIp(t.Ip),this.setProfile({li:t.li,betaP:t.betaP}),t.solenoidFactor!==void 0&&this.setSolenoidFactor(t.solenoidFactor)}}vacuumPsi(t=this._psiVac){let e=this.n*this.n;t.fill(0);for(let i=0;i<this.coils.length;i++){let s=this.coils[i].amps;if(this.coils[i].group==="solenoid"&&(s*=this.solenoidFactor),!s)continue;let r=this.tables.coilG[i].G;for(let o=0;o<e;o++)t[o]+=s*r[o]}return t}plasmaPsi(t,e=this._psiPl){let{grid:i,T:s,Ls:r,DZN:o}=this.tables,a=this.n,l=this._Is;l.fill(0);let c=this._fil=s0(t,this._fil),u=2*i.dR,h=2*i.dZ;for(let d=0;d<c.n;d++){let f=gn((c.R[d]-i.Rmin)/u,0,r-1.000001),p=gn((c.Z[d]-i.Zmin)/h,0,r-1.000001),v=f|0,g=p|0,m=f-v,_=p-g,y=c.w[d];l[g*r+v]+=y*(1-m)*(1-_),l[g*r+v+1]+=y*m*(1-_),l[(g+1)*r+v]+=y*(1-m)*_,l[(g+1)*r+v+1]+=y*m*_}e.fill(0);for(let d=0;d<r;d++){let f=Math.min(2*d,a-1);for(let p=0;p<r;p++){let v=l[d*r+p];if(!v)continue;let g=p*o;for(let m=0;m<a;m++){let _=(g+(m-f+a-1))*a,y=m*a;for(let x=0;x<a;x++)e[y+x]+=v*s[_+x]}}}return e}_decayIndex(t,e,i){let s=this.grid,r=s.dR;Fs(t,s,e+r,i,Zn);let o=Zn[1];Fs(t,s,e-r,i,Zn);let a=Zn[1];Fs(t,s,e,i,Zn);let l=Zn[1];return Math.abs(l)>1e-9?gn(-e/l*((o-a)/(2*r)),-5,5):0}forceCalibration(){if(this._cal!==void 0)return this._cal;let t=this.machine.plasma,e=new Float32Array(this.n*this.n);for(let r=0;r<this.coils.length;r++){let o=this.coils[r].default,a=this.tables.coilG[r].G;for(let l=0;l<e.length;l++)e[l]+=o*a[l]}Fs(e,this.grid,t.R0,t.Z0,Zn);let i=Ro(t.Ip,t.R0,t.a,t.betaP,t.li),s=Zn[1]/i;return this._cal=Number.isFinite(s)?gn(s,.3,1.5):1,this._cal}_referenceDecayIndex(){if(this._n0!==null)return this._n0;let t=new Float32Array(this.n*this.n),e=this.machine.plasma;for(let i=0;i<this.coils.length;i++){let s=this.coils[i].default,r=this.tables.coilG[i].G;for(let o=0;o<t.length;o++)t[o]+=s*r[o]}return this._n0=this._decayIndex(t,e.R0,e.Z0),this._n0}position(t){let e=this.machine,i=e.plasma,s=this.grid,r=this.Ip,o=r>=0?1:-1,a=i.a,l=i.Z0,c=i.R0,u=!1,h="",d=this.forceCalibration(),f=(g,m)=>(Fs(t,s,g,m,Zn),o*(Zn[1]-d*Ro(r,g,a,this.betaP,this.li))),p=this.verticalGain*Math.abs(d*Ro(i.Ip,i.R0,i.a,i.betaP,i.li))/i.a,v=(g,m)=>(Fs(t,s,g,m,Zn),o*Zn[0]+p*(m-i.Z0));for(let g=0;g<3;g++){let[m,_]=pb(e.wall,l),y=Math.max(s.Rmin+2*s.dR,(Number.isFinite(m)?m:s.Rmin)+.5*a),x=Math.min(s.Rmax-2*s.dR,(Number.isFinite(_)?_:s.Rmax)-.5*a),w=40,S=null,T=y,E=f(y,l),b=E>0,M=E<0;for(let ct=1;ct<=w;ct++){let Y=y+(x-y)*ct/w,st=f(Y,l);if(st>0&&(M=!1),st<0&&(b=!1),E>0&&st<=0){let F=T,X=Y;for(let G=0;G<30;G++){let j=.5*(F+X);f(j,l)>0?F=j:X=j}let et=.5*(F+X);(!S||Math.abs(et-i.R0)<Math.abs(S-i.R0))&&(S=et)}T=Y,E=st}S!==null?c=S:(u=!0,b?(c=x,h="pushed outward"):M?(c=y,h="pushed inward"):(c=gn(c,y,x),h="no radial equilibrium"));let[A,U]=mb(e.wall,c),L=.6*i.kappa*a,N=Math.max(s.Zmin+2*s.dZ,(Number.isFinite(A)?A:s.Zmin)+L),k=Math.min(s.Zmax-2*s.dZ,(Number.isFinite(U)?U:s.Zmax)-L),I=null,O=N,H=v(c,N),$=!1,K=H;for(let ct=1;ct<=w;ct++){let Y=N+(k-N)*ct/w,st=v(c,Y);if(K+=st,H>0&&st<=0||H<0&&st>=0){$=!0;let F=O,X=Y,et=H;for(let j=0;j<30;j++){let Q=.5*(F+X);v(c,Q)*et>0?F=Q:X=Q}let G=.5*(F+X);(I===null||Math.abs(G-i.Z0)<Math.abs(I-i.Z0))&&(I=G)}O=Y,H=st}if($&&I!==null?l=I:(u=!0,h=h||"no vertical equilibrium",l=K>0?N:k),u)break}return Number.isFinite(c)||(c=i.R0),Number.isFinite(l)||(l=i.Z0),{Rp:c,Zp:l,lost:u,reason:h}}solve(){let t=typeof performance<"u"?performance.now():0,e=this.machine,i=e.plasma,s=this.grid,r=this.n,o=r*r,a=this.vacuumPsi(),l={machine:e.id,n:r,grid:s,R:s.R,Z:s.Z,psi:new Float32Array(o),psiVac:new Float32Array(a),psiPlasma:new Float32Array(o),axis:null,xpoints:[],psiBoundary:0,limited:!1,lost:!1,lostReason:"",hasPlasma:!1,lcfs:new Float32Array(0),shape:null,q95Approx:0,betaNApprox:0,Ip:this.Ip,li:this.li,betaP:this.betaP,solenoidFactor:this.solenoidFactor,plasma:null,coils:Object.fromEntries(this.coils.map(m=>[m.id,m.amps])),F:e.toroidal.F,ms:0},c=.001*Math.abs(i.Ip);if(!(Math.abs(this.Ip)>c))return l.psi.set(a),l.ms=(typeof performance<"u"?performance.now():0)-t,l;let u=this.position(a),h=this._referenceDecayIndex(),d=this._decayIndex(a,u.Rp,u.Zp),f=gn(i.kappa+this.kappaGain*(h-d),Math.max(1,i.kappa-.5),i.kappa+.35),p={Rp:u.Rp,Zp:u.Zp,a:i.a,kappa:f,deltaU:i.deltaU,deltaL:i.deltaL,alpha:i0(this.li),Ip:this.Ip},v=this.plasmaPsi(p);for(let m=0;m<o;m++)l.psi[m]=a[m]+v[m];l.psiPlasma.set(v),l.plasma={...p,decayIndex:d},l.lost=u.lost,l.lostReason=u.reason;let g=Dr(l.psi,this.tables.ctx,{sign:this.Ip>=0?1:-1,hint:{R:u.Rp,Z:u.Zp,r:.5*i.a},F:e.toroidal.F,Ip:this.Ip,betaP:this.betaP,wall:e.wall});return l.axis=g.axis,l.xpoints=g.xpoints,l.psiBoundary=g.psiBoundary,l.limited=g.limited,l.lcfs=g.lcfs,l.shape=g.shape,l.q95Approx=g.q95Approx,l.betaNApprox=g.betaNApprox,l.hasPlasma=g.ok,g.ok?g.shape&&!_e(e.wall,g.shape.Raxis,g.shape.Zaxis)&&(l.lost=!0,l.lostReason="axis outside the wall"):(l.lost=!0,l.lostReason=l.lostReason||"no closed flux surfaces"),l.shape||(l.shape={Raxis:l.axis.R,Zaxis:l.axis.Z,R0:u.Rp,a:0,kappa:1,deltaU:0,deltaL:0,volume:0}),l.ms=(typeof performance<"u"?performance.now():0)-t,l}};function r0(n,t){let e=s=>.5*(1-Math.tanh((s-.965)/.02));if(!(n<1)){let s=.25*e(1),r=Number.isFinite(n)?n:3;return t*s*Math.exp(-(r-1)/.04)}let i=Math.max(0,n);return t*(.75*Math.pow(1-i,1.5)+.25*e(i))}function o0(n,t){let e=s=>.5*(1-Math.tanh((s-.965)/.025));if(!(n<1)){let s=.55*e(1),r=Number.isFinite(n)?n:3;return t*s*Math.exp(-(r-1)/.06)}let i=Math.max(0,n);return t*(.45*(1-i*i)+.55*e(i))}function gb(n,t,e){if(!n||!n.hasPlasma||!n.axis||!n.lcfs||n.lcfs.length<6)return 3;let i=me(n.psi,n.grid,t,e),s=n.psiBoundary-n.axis.psi;if(!(Math.abs(s)>0))return 3;let r=(i-n.axis.psi)/s;return Number.isFinite(r)?(r<1&&!_e(n.lcfs,t,e)&&(r=Math.max(r,1+Math.abs(1-r))),r):3}function Vu(n,t,{samples:e=160}={}){let i=t.thomson,[s,r]=i.path,o=i.orientation==="vertical",a=(h,d,f)=>{let p={s:new Float32Array(h),R:new Float32Array(h),Z:new Float32Array(h),psiN:new Float32Array(h),Te:new Float32Array(h),ne:new Float32Array(h)};for(let v=0;v<h;v++){let g=h>1?v/(h-1):0,m=d+(f-d)*g,_=o?i.R:m,y=o?m:i.Z,x=gb(n,_,y);p.s[v]=m,p.R[v]=_,p.Z[v]=y,p.psiN[v]=Math.min(x,3),p.Te[v]=n&&n.hasPlasma&&!n.lost?r0(x,i.Te0):0,p.ne[v]=n&&n.hasPlasma&&!n.lost?o0(x,i.ne0):0}return p},l=o?s[1]:s[0],c=o?r[1]:r[0],u=a(e,l,c);return u.orientation=i.orientation,u.coord=o?"Z":"R",u.channels=a(i.channels.count,i.channels.from,i.channels.to),u}var Aw=new Float64Array(2);var Me=Zl;function Tl(n){let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function qn(n,t){let[e,i,s]=Tl(n);return`rgba(${e},${i},${s},${t})`}var Fr=Tl(Me.plasmaDeep),Xi=Tl(Me.plasma),Gu=Tl(Me.plasmaHot);function xb(n,t){if(n<.55){let e=n/.55;t[0]=Fr[0]+(Xi[0]-Fr[0])*e,t[1]=Fr[1]+(Xi[1]-Fr[1])*e,t[2]=Fr[2]+(Xi[2]-Fr[2])*e}else{let e=Math.min(1,(n-.55)/.45),i=e*e;t[0]=Xi[0]+(Gu[0]-Xi[0])*i,t[1]=Xi[1]+(Gu[1]-Xi[1])*i,t[2]=Xi[2]+(Gu[2]-Xi[2])*i}return t}var Wu=3,Sl=class{constructor(t,e,i,s={}){this.canvas=t,this.machine=e,this.ctx=i,this.opts=s,this.g=t.getContext("2d"),this.box=s.view||e.view,this.pad=s.pad===void 0?16:s.pad,this._heat=null,this._fine=null,this._coilGeom=e.coils.map(r=>({id:r.id,coil:r,polys:r.group!=="solenoid"&&r.elements.length<=64?r.elements.map(o=>Po(o)):null,env:[r.R-r.width/2,r.Z-r.height/2,r.R+r.width/2,r.Z+r.height/2]})),this.resize()}resize(){let t=this.ctx.fitCanvas(this.canvas);this.w=t.w,this.h=t.h,this.ratio=t.ratio;let e=this.box,i=(this.w-2*this.pad)/(e.Rmax-e.Rmin),s=(this.h-2*this.pad)/(e.Zmax-e.Zmin);this.s=Math.min(i,s),this.ox=(this.w-this.s*(e.Rmax-e.Rmin))/2-this.s*e.Rmin,this.oy=(this.h-this.s*(e.Zmax-e.Zmin))/2+this.s*e.Zmax}toScreen(t,e){return[this.ox+this.s*t,this.oy-this.s*e]}fromScreen(t,e){return[(t-this.ox)/this.s,(this.oy-e)/this.s]}get scale(){return this.s}hitCoil(t,e){let i=null,s=1/0;for(let r of this._coilGeom){let[o,a,l,c]=r.env,[u,h]=this.toScreen(o,a),[d,f]=this.toScreen(l,c),p=Math.max(0,(16-(d-u))/2)+5,v=Math.max(0,(16-(h-f))/2)+5;if(t>=u-p&&t<=d+p&&e>=f-v&&e<=h+v){let g=Math.hypot(t-(u+d)/2,e-(f+h)/2);g<s&&(s=g,i=r.id)}}return i}coilBox(t){let e=this._coilGeom.find(h=>h.id===t);if(!e)return null;let[i,s,r,o]=e.env,[a,l]=this.toScreen(i,s),[c,u]=this.toScreen(r,o);return{x0:a,y0:u,x1:c,y1:l}}_refine(t,e){let i=(e-1)*Wu+1;if(!this._fine||this._fine.N!==i){let l=new Float32Array(i*4),c=new Int32Array(i*4);for(let u=0;u<i;u++){let h=u/Wu,d=Math.floor(h);d>e-2&&(d=e-2);let f=h-d,p=f*f,v=p*f,g=[-.5*v+p-.5*f,1.5*v-2.5*p+1,-1.5*v+2*p+.5*f,.5*v-.5*p];for(let m=0;m<4;m++)l[u*4+m]=g[m],c[u*4+m]=Math.max(0,Math.min(e-1,d-1+m))}this._fine={N:i,w:l,ix:c,tmp:new Float32Array(e*i),f:new Float32Array(i*i),psiN:new Float32Array(i*i)}}let{w:s,ix:r,tmp:o,f:a}=this._fine;for(let l=0;l<e;l++){let c=l*e;for(let u=0;u<i;u++){let h=u*4;o[l*i+u]=s[h]*t[c+r[h]]+s[h+1]*t[c+r[h+1]]+s[h+2]*t[c+r[h+2]]+s[h+3]*t[c+r[h+3]]}}for(let l=0;l<i;l++){let c=l*4,u=r[c]*i,h=r[c+1]*i,d=r[c+2]*i,f=r[c+3]*i,p=s[c],v=s[c+1],g=s[c+2],m=s[c+3],_=l*i;for(let y=0;y<i;y++)a[_+y]=p*o[u+y]+v*o[h+y]+g*o[d+y]+m*o[f+y]}return this._fine}_fineGrid(t){let e=t.n,i=(e-1)*Wu+1;if(!this._fg||this._fg.N!==i||this._fg.R0!==t.R[0]){let s=new Float32Array(i),r=new Float32Array(i);for(let o=0;o<i;o++)s[o]=t.R[0]+(t.R[e-1]-t.R[0])*o/(i-1),r[o]=t.Z[0]+(t.Z[e-1]-t.Z[0])*o/(i-1);this._fg={N:i,R:s,Z:r,R0:t.R[0]}}return this._fg}_path(t,e){let i=this.g,s=t.length>>1;if(s<2)return;let r=a=>this.ox+this.s*t[2*a],o=a=>this.oy-this.s*t[2*a+1];if(e&&s>=3){i.moveTo((r(s-1)+r(0))/2,(o(s-1)+o(0))/2);for(let a=0;a<s;a++){let l=(a+1)%s;i.quadraticCurveTo(r(a),o(a),(r(a)+r(l))/2,(o(a)+o(l))/2)}i.closePath()}else{i.moveTo(r(0),o(0));for(let a=1;a<s-1;a++)i.quadraticCurveTo(r(a),o(a),(r(a)+r(a+1))/2,(o(a)+o(a+1))/2);i.lineTo(r(s-1),o(s-1))}}_gridClip(t){let e=this.g,[i,s]=this.toScreen(t.R[0],t.Z[t.n-1]),[r,o]=this.toScreen(t.R[t.n-1],t.Z[0]);e.beginPath(),e.rect(i,s,r-i,o-s),e.clip()}draw(t,e={}){let i=this.g,s=this.ratio;if(i.setTransform(s,0,0,s,0,0),e.clear!==!1&&i.clearRect(0,0,this.w,this.h),i.lineJoin="round",i.lineCap="round",!t)return;let r={levels:9,outside:9,vacuumLevels:26,showCoils:!0,showWall:!0,showGrid:!1,showAxis:!0,showX:!0,heat:!0,reveal:1,alpha:1,lcfsColor:Me.flux,fluxColor:Me.flux,lostLabel:"plasma lost",...e},o=t.n,a=this._refine(t.psi,o),l=this._fineGrid(t),c=a.N,u=a.f,h=t.hasPlasma&&t.axis&&r.alpha>.001,d=h?t.psiBoundary<t.axis.psi?1:-1:1,f=t.lost?.35:1;if(r.clear!==!1){let[m,_]=this.toScreen(t.R[0],t.Z[o-1]),[y,x]=this.toScreen(t.R[o-1],t.Z[0]);i.strokeStyle="rgba(255,255,255,0.06)",i.lineWidth=1,i.strokeRect(m+.5,_+.5,y-m-1,x-_-1)}let p=null,v=0,g=0;if(h){v=d*t.axis.psi,g=d*t.psiBoundary;let m=g+.004*(v-g),_=a.psiN;for(let y=0;y<c*c;y++)_[y]=d*u[y];p=this._enclosing(_,c,m,l,t.axis.R,t.axis.Z)||(t.lcfs.length>=6?t.lcfs:null)}if(h&&r.heat&&p&&this._drawHeat(t,a,l,v,g,p,r.alpha*f,r.reveal),i.save(),this._gridClip(t),h?this._plasmaContours(t,a,l,r,d,v,g,p,f):this._vacuumContours(t,a,l,r),i.restore(),r.showWall){let m=this.machine.wall;i.beginPath(),m.forEach(([_,y],x)=>{let[w,S]=this.toScreen(_,y);x?i.lineTo(w,S):i.moveTo(w,S)}),i.closePath(),i.strokeStyle="rgba(214,218,228,0.55)",i.lineWidth=1.5,i.stroke()}r.showGrid&&this._gridDots(t,typeof r.showGrid=="number"?r.showGrid:1),r.probes&&this._probes(r.probes),r.thomson&&this._thomson(typeof r.thomson=="number"?r.thomson:1),r.showCoils&&this._coils(t,r);for(let m of r.overlays||[])!m||!m.lcfs||m.lcfs.length<6||(i.save(),i.beginPath(),this._path(m.lcfs,!0),i.strokeStyle=m.color||Me.plasma,i.lineWidth=m.width||2.2,i.setLineDash(m.dash||[]),i.globalAlpha=m.alpha===void 0?1:m.alpha,i.stroke(),i.restore());if(h&&r.alpha>.05){if(i.save(),i.globalAlpha=r.alpha*f,r.showX)for(let m of t.xpoints){if(!m.active)continue;let[_,y]=this.toScreen(m.R,m.Z);i.strokeStyle=Me.ink,i.lineWidth=1.8,i.beginPath(),i.moveTo(_-6,y-6),i.lineTo(_+6,y+6),i.moveTo(_+6,y-6),i.lineTo(_-6,y+6),i.stroke()}if(r.showAxis){let[m,_]=this.toScreen(t.axis.R,t.axis.Z);i.fillStyle=Me.plasmaHot,i.beginPath(),i.arc(m,_,2.6,0,Math.PI*2),i.fill()}i.restore()}if(t.lost&&r.lostLabel){let[m,_]=this.toScreen(this.machine.plasma.R0,this.machine.plasma.Z0);i.save(),i.font=`600 22px ${Me.fontBody}`,i.textAlign="center",i.textBaseline="middle";let y=i.measureText(r.lostLabel).width+28;i.fillStyle="rgba(6,7,12,0.78)",i.strokeStyle=qn(Me.warn,.8),i.lineWidth=1.2,i.beginPath(),i.roundRect(m-y/2,_-20,y,40,20),i.fill(),i.stroke(),i.fillStyle=Me.warn,i.fillText(r.lostLabel,m,_+1),i.restore()}r.bar&&this._coilBar(r.bar.id,r.bar.amps)}rangeInWall(t,e){let i=[],s=e.n;for(let r=1;r<s-1;r+=2)for(let o=1;o<s-1;o+=2)_e(this.machine.wall,e.R[o],e.Z[r])&&i.push(t[r*s+o]);return i.sort((r,o)=>r-o),i.length?[i[Math.floor(i.length*.01)],i[Math.floor(i.length*.99)]]:[0,1]}_enclosing(t,e,i,s,r,o){let a=Ve(t,e,e,i,s),l=null,c=1/0;for(let u of a){if(!u.closed||!_e(u,r,o))continue;let h=0,d=u.length>>1;for(let f=0,p=d-1;f<d;p=f++)h+=u[2*p]*u[2*f+1]-u[2*f]*u[2*p+1];h=Math.abs(h),h<c&&(c=h,l=u)}return l}_drawHeat(t,e,i,s,r,o,a,l){let c=e.N;if(!this._heat||this._heat.N!==c){let T=typeof OffscreenCanvas<"u"?new OffscreenCanvas(c,c):document.createElement("canvas");T.width=c,T.height=c,this._heat={N:c,c:T,g:T.getContext("2d"),img:new ImageData(c,c)}}let{c:u,g:h,img:d}=this._heat,f=d.data,p=e.psiN,v=s-r,g=[0,0,0],m=Math.max(1e-4,l);for(let T=0;T<c;T++){let E=(c-1-T)*c;for(let b=0;b<c;b++){let M=(s-p[T*c+b])/v,A=(E+b)*4;if(!(M<1.02)||M<-.05){f[A+3]=0;continue}let U=Math.max(0,Math.min(1,1-M));xb(U,g);let L=.2+.62*Math.pow(U,.7);m<1&&(L*=Math.max(0,Math.min(1,(m-M)/.12+1))*m),f[A]=g[0],f[A+1]=g[1],f[A+2]=g[2],f[A+3]=Math.round(255*L)}}h.putImageData(d,0,0);let _=this.g,[y,x]=this.toScreen(i.R[0],i.Z[c-1]),[w,S]=this.toScreen(i.R[c-1],i.Z[0]);_.save(),_.beginPath(),this._path(o,!0),_.clip(),_.globalAlpha=a,_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(u,y,x,w-y,S-x),_.restore(),_.save(),_.globalCompositeOperation="lighter",_.globalAlpha=.5*a*Math.min(1,l*1.2),_.beginPath(),this._path(o,!0);for(let[T,E]of[[14,.05],[7,.09]])_.strokeStyle=qn(Me.plasmaDeep,E*2),_.lineWidth=T,_.stroke();_.restore()}_strokeSet(t,e,i,s,r){let o=this.g;o.beginPath();for(let a of t)this._path(a,a.closed);o.strokeStyle=e,o.globalAlpha=s,o.lineWidth=i,o.setLineDash(r||[]),o.stroke(),o.globalAlpha=1,o.setLineDash([])}_vacuumContours(t,e,i,s){let r=e.N,o=e.f,a=[],l=this.machine;if(!s.vacuumRange)for(let v=1;v<t.n-1;v+=2)for(let g=1;g<t.n-1;g+=2)_e(l.wall,t.R[g],t.Z[v])&&a.push(t.psi[v*t.n+g]);let c,u;if(s.vacuumRange)[c,u]=s.vacuumRange;else{if(a.sort((v,g)=>v-g),!a.length)return;c=a[Math.floor(a.length*.01)],u=a[Math.floor(a.length*.99)]}let h=u-c||1e-6,d=s.vacuumLevels,f=h/d,p=s.signColors?s.signColors===!0?{pos:s.fluxColor,neg:"#c9a7ff"}:s.signColors:null;for(let v=-6;v<=d+6;v++){let g=c+f*(v+.5),m=Ve(o,r,r,g,i),_=v>=0&&v<d,y=p?g>=0?p.pos:p.neg:s.fluxColor;this._strokeSet(m,y,_?1.3:1,(_?.62:.28)*(s.vacuumAlpha===void 0?1:s.vacuumAlpha),p&&g<0?[5,5]:null)}}_plasmaContours(t,e,i,s,r,o,a,l,c){let u=e.N,h=e.psiN,d=o-a,f=s.signColors?s.signColors===!0?{pos:s.fluxColor,neg:"#c9a7ff"}:s.signColors:null,p=g=>f?r*g>=0?f.pos:f.neg:s.fluxColor;if(s.outside>0){let g=[],m=1.07;for(let _=0;_<s.outside;_++)g.push(m),m=1+(m-1)*1.55+.04;for(let _ of g){let y=o-_*d,x=Ve(h,u,u,y,i);this._strokeSet(x,p(y),1.1,.3*Math.max(.35,1-(_-1)*.12)*s.alpha*c+.12*(1-s.alpha))}}let v=Array.isArray(s.levels)?s.levels:Array.from({length:s.levels},(g,m)=>(m+1)/(s.levels+1));for(let g of v){let m=Math.max(0,Math.min(1,(s.reveal-g)/.1+1))*Math.min(1,s.reveal*1.25);if(m<=.01)continue;let _=o-g*d,y=this._enclosing(h,u,_,i,t.axis.R,t.axis.Z);y&&this._strokeSet([y],p(_),1.25+.5*g,(.3+.45*g)*m*s.alpha*c)}if(l){let g=Math.min(1,s.reveal*1.1)*s.alpha*c,m=this.g;if(m.save(),m.globalCompositeOperation="lighter",this._strokeSet([l],s.lcfsColor,6,.12*g),m.restore(),this._strokeSet([l],s.lcfsColor,2.4,.95*g),!t.limited){let y=Ve(h,u,u,a-.002*d,i).filter(x=>!(x.closed&&_e(x,t.axis.R,t.axis.Z))).filter(x=>t.xpoints.some(w=>w.active&&this._near(x,w.R,w.Z,.12)));this._strokeSet(y,s.lcfsColor,1.4,.55*g)}}}_near(t,e,i,s){for(let r=0;r<t.length;r+=2)if(Math.abs(t[r]-e)<s&&Math.abs(t[r+1]-i)<s)return!0;return!1}_gridDots(t,e){let i=this.g,s=t.n;i.save(),i.globalAlpha=e;for(let r=0;r<s;r++)for(let o=0;o<s;o++){let[a,l]=this.toScreen(t.R[o],t.Z[r]);i.fillStyle="rgba(243,241,234,0.42)",i.fillRect(a-.9,l-.9,1.8,1.8)}i.restore()}_probes(t){let e=this.g,i=t==="struck";e.save();for(let[s,r]of this.machine.probes){let[o,a]=this.toScreen(s,r);e.strokeStyle=i?"rgba(185,182,173,0.45)":qn(Me.ink2,.9),e.lineWidth=1.4,e.strokeRect(o-3,a-3,6,6),i&&(e.strokeStyle=qn(Me.warn,.85),e.lineWidth=1.4,e.beginPath(),e.moveTo(o-5,a+5),e.lineTo(o+5,a-5),e.stroke())}e.restore()}_thomson(t){let e=this.g,i=this.machine.thomson,[s,r]=i.path,[o,a]=this.toScreen(s[0],s[1]),[l,c]=this.toScreen(r[0],r[1]);e.save(),e.beginPath(),this.machine.wall.forEach(([h,d],f)=>{let[p,v]=this.toScreen(h,d);f?e.lineTo(p,v):e.moveTo(p,v)}),e.closePath(),e.clip(),e.globalAlpha=t,e.globalCompositeOperation="lighter";for(let[h,d]of[[9,.06],[4,.14],[1.6,.9]])e.strokeStyle=qn(Me.coil,d),e.lineWidth=h,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke();e.globalCompositeOperation="source-over";let u=i.channels;for(let h=0;h<u.count;h++){let d=u.from+(u.to-u.from)*h/Math.max(1,u.count-1),f=i.orientation==="vertical"?i.R:d,p=i.orientation==="vertical"?d:i.Z,[v,g]=this.toScreen(f,p);e.fillStyle=Me.coil,e.beginPath(),e.arc(v,g,1.9,0,Math.PI*2),e.fill()}e.restore()}_coils(t,e){let i=this.g;for(let s of this._coilGeom){let r=s.coil,o=t.coils?t.coils[r.id]||0:r.default,a=r.group==="solenoid"?o*(t.solenoidFactor===void 0?1:t.solenoidFactor):o,l=e.coilScale&&e.coilScale[r.id]||Math.max(Math.abs(r.range[0]),Math.abs(r.range[1]))*.6,c=Math.min(1,Math.abs(a)/l),u=.18+.82*Math.sqrt(c),h=e.highlight===r.id,d=a>=0,f=d?.2+.75*c:.08+.2*c,p=Math.min(1,u+(h?.3:0));if(i.save(),h&&(i.shadowColor=qn(Me.coil,.9),i.shadowBlur=14),i.beginPath(),s.polys)for(let b of s.polys)b.forEach(([M,A],U)=>{let[L,N]=this.toScreen(M,A);U?i.lineTo(L,N):i.moveTo(L,N)}),i.closePath();else{let[b,M,A,U]=s.env,[L,N]=this.toScreen(b,M),[k,I]=this.toScreen(A,U);i.rect(L,I,k-L,N-I)}if(i.fillStyle=qn(Me.coil,f),i.fill(),i.shadowBlur=0,i.strokeStyle=qn(Me.coil,p),i.lineWidth=h?1.8:1.1,i.stroke(),!s.polys){let[b,M,A,U]=s.env,[L,N]=this.toScreen(b,M),[k,I]=this.toScreen(A,U);i.strokeStyle=qn(Me.coil,.35*u),i.lineWidth=1,i.beginPath();for(let O=1;O<4;O++){let H=L+(k-L)*O/4;i.moveTo(H,I+2),i.lineTo(H,N-2)}i.stroke()}let[v,g,m,_]=s.env,[y,x]=this.toScreen(v,g),[w,S]=this.toScreen(m,_),T=w-y,E=x-S;if(c>.04&&Math.min(T,E)>=9){let b=(y+w)/2,M=(S+x)/2,A=Math.min(4,Math.min(T,E)/2-1.5);i.strokeStyle=d?"rgba(20,14,4,0.9)":qn(Me.coil,.95),i.lineWidth=1.6,i.beginPath(),i.moveTo(b-A,M),i.lineTo(b+A,M),d&&(i.moveTo(b,M-A),i.lineTo(b,M+A)),i.stroke()}i.restore()}}_coilBar(t,e){let i=this.machine.coils.find(w=>w.id===t),s=this.coilBox(t);if(!i||!s)return;let r=this.g,o=Math.max(Math.abs(i.range[0]),Math.abs(i.range[1])),a=Math.max(-1,Math.min(1,e/o)),l=this.w/2,c=(s.x0+s.x1)/2<l,u=120,h=8,d=c?s.x1+14:s.x0-14-h,f=(s.y0+s.y1)/2;f=Math.max(u/2+8,Math.min(this.h-u/2-30,f)),r.save(),r.fillStyle="rgba(6,7,12,0.7)",r.fillRect(d-3,f-u/2-3,h+6,u+6),r.strokeStyle=qn(Me.coil,.45),r.lineWidth=1,r.strokeRect(d+.5,f-u/2+.5,h-1,u-1),r.strokeStyle=qn(Me.ink,.5),r.beginPath(),r.moveTo(d-3,f),r.lineTo(d+h+3,f),r.stroke(),r.fillStyle=Me.coil;let p=a*u/2;r.fillRect(d+1,Math.min(f,f-p),h-2,Math.abs(p));let v=Math.max(-1,Math.min(1,i.default/o));r.strokeStyle=Me.ink,r.lineWidth=1.5,r.beginPath(),r.moveTo(d-4,f-v*u/2),r.lineTo(d+h+4,f-v*u/2),r.stroke();let g=e/1e3,m=`${i.label}  ${Math.abs(g)>=1e3?(g/1e3).toFixed(2)+" MA\xB7t":g.toFixed(0)+" kA\xB7t"}`;r.font=`500 18px ${Me.fontMono}`,r.textBaseline="middle";let _=r.measureText(m).width,y=c?d+h+10:d-10-_;y=Math.max(4,Math.min(this.w-_-4,y));let x=f-u/2-16<12?f+u/2+16:f-u/2-16;r.fillStyle="rgba(6,7,12,0.75)",r.fillRect(y-6,x-13,_+12,26),r.fillStyle=Me.coil,r.fillText(m,y,x),r.restore()}};var a0="controlroom-style",yb=`
.cr-root{position:absolute;inset:0;user-select:none;-webkit-user-select:none;}
.cr-flux{position:absolute;left:560px;top:40px;width:540px;height:800px;touch-action:none;}
.cr-col{position:absolute;left:1130px;top:40px;width:430px;height:820px;}
.cr-fade{transition:opacity .6s var(--ease), transform .6s var(--ease);}
.cr-root.cr-instant .cr-fade{transition:none;}
.cr-off{opacity:0;pointer-events:none;transform:translateY(6px);}
.cr-head{position:absolute;left:0;top:0;font:500 18px/1.2 var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);}
.cr-panel{position:absolute;left:0;width:430px;box-sizing:border-box;}
.cr-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px 18px;}
.cr-ro .ui-label{display:block;margin-bottom:4px;}
.cr-ro .ui-readout{font-size:26px;}
.cr-ro .ui-readout small{font-size:18px;}
.cr-tag{display:inline-block;font:600 18px/1 var(--font-body);letter-spacing:.12em;text-transform:uppercase;padding:6px 10px;border-radius:6px;border:1px solid currentColor;margin-right:10px;vertical-align:middle;}
.cr-tag.in{color:var(--coil);background:color-mix(in srgb,var(--coil) 12%,transparent);}
.cr-tag.out{color:var(--plasma);background:color-mix(in srgb,var(--plasma) 12%,transparent);}
.cr-ptitle{font:500 18px/1.3 var(--font-body);color:var(--ink2);vertical-align:middle;}
.cr-te{display:block;width:394px;height:200px;margin-top:10px;}
.cr-strip{display:block;width:394px;height:96px;margin-top:12px;}
.cr-toy{position:absolute;left:576px;top:838px;font:400 18px/1.2 var(--font-body);color:var(--ink3);}
.cr-nomag{position:absolute;left:900px;top:838px;font:500 18px/1.2 var(--font-body);color:var(--ink2);display:flex;align-items:center;gap:10px;}
.cr-nomag i{display:inline-block;width:11px;height:11px;border:1.5px solid var(--ink3);position:relative;}
.cr-nomag i::after{content:"";position:absolute;left:-4px;top:4px;width:17px;height:1.5px;background:var(--warn);transform:rotate(-45deg);}
.cr-hint{position:absolute;left:0;font:400 18px/1.35 var(--font-body);color:var(--ink3);}
.cr-hint b{color:var(--coil);font-weight:500;}
.cr-outs{display:flex;gap:28px;margin-top:14px;}
.cr-big{font:500 34px/1.1 var(--font-mono);color:var(--ink);font-variant-numeric:tabular-nums;}
.cr-sub{font:400 18px/1.3 var(--font-body);color:var(--ink3);margin-top:12px;}
`,Xu=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Nr=n=>n<0?0:n>1?1:n,Or=()=>performance.now(),Br=class{constructor(t){this.v=t,this.from=t,this.to=t,this.t0=0,this.dur=0}go(t,e){if(e<=0){this.v=this.from=this.to=t,this.dur=0;return}this.from=this.v,this.to=t,this.t0=Or(),this.dur=e}tick(t){if(!this.dur)return!1;let e=Nr((t-this.t0)/this.dur);return this.v=this.from+(this.to-this.from)*Xu(e),e>=1&&(this.dur=0),!0}},_b=(n,t)=>(n>=0?"+":"\u2212")+Math.abs(n).toFixed(t);function bb({machine:n="d3d",id:t="controlroom"}={}){let e=li[n];return{id:t,steps:4,layout:"split",mount(s,r){if(this.ctx=r,this.root=s,!document.getElementById(a0)){let a=document.createElement("style");a.id=a0,a.textContent=yb,document.head.appendChild(a)}let o=document.createElement("div");o.className="cr-root",o.innerHTML=`
        <canvas class="cr-flux"></canvas>
        <div class="cr-nomag cr-fade cr-off"><i></i>no magnetic sensors</div>
        <div class="cr-toy cr-fade cr-off">toy model: fixed current profile</div>
        <div class="cr-col">
          <div class="cr-head">${e.name} &middot; poloidal cross-section</div>
          <div class="cr-panel ui-panel cr-ro cr-fade cr-off" style="top:44px">
            <div class="cr-grid">
              <div><span class="ui-label">plasma current I<sub>p</sub></span><span class="ui-readout" data-k="ip">&ndash;</span></div>
              <div><span class="ui-label">elongation &kappa;</span><span class="ui-readout" data-k="kappa">&ndash;</span></div>
              <div><span class="ui-label">R<sub>axis</sub></span><span class="ui-readout" data-k="raxis">&ndash;</span></div>
              <div><span class="ui-label">Z<sub>axis</sub></span><span class="ui-readout" data-k="zaxis">&ndash;</span></div>
              <div><span class="ui-label">q<sub>95</sub> (toy)</span><span class="ui-readout" data-k="q95">&ndash;</span></div>
              <div><span class="ui-label">boundary</span><span class="ui-readout" data-k="cfg" style="font-size:20px">&ndash;</span></div>
            </div>
          </div>
          <div class="cr-panel ui-panel cr-outs-panel cr-fade cr-off" style="top:44px">
            <span class="cr-tag out">outputs</span><span class="cr-ptitle">&psi;(R,Z) on the 65 &times; 65 grid</span>
            <div class="cr-outs">
              <div><span class="ui-label">q<sub>95</sub></span><div class="cr-big" data-k="q95b">&ndash;</div></div>
              <div><span class="ui-label">&beta;<sub>N</sub></span><div class="cr-big" data-k="betan">&ndash;</div></div>
            </div>
            <div class="cr-sub">(values here from the toy model)</div>
          </div>
          <div class="cr-panel ui-panel cr-th cr-fade cr-off" style="top:320px">
            <span class="cr-tag in cr-intag cr-fade cr-off" style="display:none">inputs</span><span class="cr-ptitle">Thomson: T<sub>e</sub> on one laser line</span>
            <canvas class="cr-te"></canvas>
          </div>
          <div class="cr-panel ui-panel cr-coilsp cr-fade cr-off" style="top:610px">
            <span class="cr-tag in">inputs</span><span class="cr-ptitle">${e.coils.length} coil currents</span>
            <canvas class="cr-strip"></canvas>
          </div>
          <div class="cr-hint cr-hint2 cr-fade cr-off" style="top:620px">
            <b>Drag a coil</b> up or down to change its current.<br>Double-click a coil to reset it.
          </div>
        </div>`,s.appendChild(o),this.el=o,this.canvas=o.querySelector(".cr-flux"),this.teCanvas=o.querySelector(".cr-te"),this.stripCanvas=o.querySelector(".cr-strip"),this.ro={},o.querySelectorAll("[data-k]").forEach(a=>this.ro[a.dataset.k]=a),this.roText={},this.eq=new Co(e),this.view=new Sl(this.canvas,e,r),this.sol=this.eq.solve(),this.vacRange=this.view.rangeInWall(this.sol.psiVac,this.sol),this.mix=new Float32Array(this.sol.psi.length),this.step=0,this.k={plasma:new Br(0),thomson:new Br(0),grid:new Br(0),probes:new Br(0)},this.coilTw=new Map,this.dirty=!0,this.drag=null,this.hover=null,this.demoT0=null,this.frameMs=[],this.lite=!1,this._bind(),this.resize()},_bind(){let s=this.canvas,r=o=>{let a=s.getBoundingClientRect();return[(o.clientX-a.left)/a.width*this.view.w,(o.clientY-a.top)/a.height*this.view.h]};this._down=o=>{if(this.step<2)return;let[a,l]=r(o),c=this.view.hitCoil(a,l);if(!c)return;o.preventDefault(),this.demoT0=null,this.coilTw.delete(c);let u=e.coils.find(h=>h.id===c);this.drag={id:c,y0:l,a0:this.eq.getCoil(c),max:Math.max(-u.range[0],u.range[1]),pid:o.pointerId};try{s.setPointerCapture(o.pointerId)}catch{}this.hover=c,this.dirty=!0},this._move=o=>{let[a,l]=r(o);if(this.drag){o.preventDefault();let u=this.drag.a0+(this.drag.y0-l)/400*this.drag.max;this.eq.setCoil(this.drag.id,u),this.dirty=!0;return}if(this.step<2){this.hover&&(this.hover=null,this.dirty=!0),s.style.cursor="default";return}let c=this.view.hitCoil(a,l);c!==this.hover&&(this.hover=c,this.dirty=!0),s.style.cursor=c?"ns-resize":"default"},this._up=o=>{if(this.drag){try{s.releasePointerCapture(this.drag.pid)}catch{}this.drag=null,this.dirty=!0}},this._dbl=o=>{if(this.step<2)return;let[a,l]=r(o),c=this.view.hitCoil(a,l);if(!c)return;o.preventDefault();let u=e.coils.find(h=>h.id===c);this._tweenCoil(c,u.default,450)},this._leaveC=()=>{!this.drag&&this.hover&&(this.hover=null,this.dirty=!0)}},_tweenCoil(s,r,o){if(this.ctx.reducedMotion||o<=0){this.eq.setCoil(s,r),this.coilTw.delete(s),this.dirty=!0;return}this.coilTw.set(s,{from:this.eq.getCoil(s),to:r,t0:Or(),dur:o})},enter(){let s=this.canvas;s.addEventListener("pointerdown",this._down),s.addEventListener("pointermove",this._move),s.addEventListener("pointerup",this._up),s.addEventListener("pointercancel",this._up),s.addEventListener("pointerleave",this._leaveC),s.addEventListener("dblclick",this._dbl),this.running=!0,this.dirty=!0;let r=()=>{this.running&&(this._frame(),this.raf=requestAnimationFrame(r))};this.raf=requestAnimationFrame(r)},leave(){this.running=!1,cancelAnimationFrame(this.raf);let s=this.canvas;if(this.drag)try{s.releasePointerCapture(this.drag.pid)}catch{}this.drag=null,this.demoT0=null,s.removeEventListener("pointerdown",this._down),s.removeEventListener("pointermove",this._move),s.removeEventListener("pointerup",this._up),s.removeEventListener("pointercancel",this._up),s.removeEventListener("pointerleave",this._leaveC),s.removeEventListener("dblclick",this._dbl)},setStep(s,{instant:r=!1}={}){let o=this.step;this.step=s;let a=r||this.ctx.reducedMotion;if(this.el.classList.toggle("cr-instant",a),a&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.el.classList.remove("cr-instant"))),this.demoT0=null,s<2)for(let h of e.coils)a?this.eq.setCoil(h.id,h.default):this.eq.getCoil(h.id)!==h.default&&this._tweenCoil(h.id,h.default,600);let l=o===0&&s===1?1600:700;this.k.plasma.go(s>=1?1:0,a?0:l),this.k.thomson.go(s>=2?1:0,a?0:700),this.k.grid.go(s>=3?1:0,a?0:900),this.k.probes.go(s>=3?1:0,a?0:900);let c=(h,d)=>this.el.querySelectorAll(h).forEach(f=>f.classList.toggle("cr-off",!d));c(".cr-ro",s===1||s===2),c(".cr-toy",s>=1),c(".cr-th",s>=2),c(".cr-hint2",s===2),c(".cr-outs-panel",s===3),c(".cr-coilsp",s===3),c(".cr-nomag",s===3);let u=this.el.querySelector(".cr-intag");u.style.display=s===3?"":"none",u.classList.toggle("cr-off",s!==3),this.dirty=!0,a&&this._frame()},resize(){this.view.resize(),this._teFit=this.ctx.fitCanvas(this.teCanvas),this._stripFit=this.ctx.fitCanvas(this.stripCanvas),this.dirty=!0},demo(){if(this.step<2){this.setStep(this.step===0?1:this.step,{instant:!1}),this.step===1&&(this.k.plasma.go(0,0),this.k.plasma.go(1,1600));return}this.drag=null,this.coilTw.clear();for(let s of e.coils)this.eq.setCoil(s.id,s.default);this.demoT0=Or(),this.dirty=!0},_demoScript(){return n==="mast"?[{t:[.4,2.6],d:{P2L:12e4},show:"P2L"},{t:[3.4,5.6],d:{P2L:12e4,P4U:-6e4,P4L:-6e4},show:"P4U"}]:[{t:[.4,2.6],d:{F8B:2e5,F9B:15e4},show:"F8B"},{t:[3.4,5.6],d:{F8B:2e5,F9B:15e4,F7A:-6e4,F7B:-6e4},show:"F7B"}]},_applyDemo(s){let r=(s-this.demoT0)/1e3,o=this._demoScript(),a=g=>e.coils.find(m=>m.id===g).default,l=new Set(o.flatMap(g=>Object.keys(g.d))),c={},u=null,h=this.ctx.reducedMotion,d=o[0],f=o[1],p=(g,m,_)=>{let y={};for(let x of l)y[x]=(g[x]||0)+((m[x]||0)-(g[x]||0))*_;return y},v=(g,m)=>h?r>=(g+m)/2?1:0:Xu(Nr((r-g)/(m-g)));r<d.t[1]?(c=p({},d.d,v(d.t[0],d.t[1])),u=r>d.t[0]?d.show:null):r<f.t[0]?(c=d.d,u=d.show):r<f.t[1]?(c=p(d.d,f.d,v(f.t[0],f.t[1])),u=f.show):r<6.4?(c=f.d,u=f.show):(c=p(f.d,{},v(6.4,8)),u=r<7.6?f.show:null);for(let g of l)this.eq.setCoil(g,a(g)+(c[g]||0));if(this.demoShow=u,r>=8.2){for(let g of l)this.eq.setCoil(g,a(g));this.demoT0=null,this.demoShow=null}this.dirty=!0},_frame(){let s=Or(),r=!1;for(let l of Object.values(this.k))r=l.tick(s)||r;for(let[l,c]of this.coilTw){let u=Nr((s-c.t0)/c.dur);this.eq.setCoil(l,c.from+(c.to-c.from)*Xu(u)),u>=1&&this.coilTw.delete(l),this.dirty=!0}if(this.demoT0!==null&&this._applyDemo(s),!this.dirty&&!r)return;let o=Or();this.dirty&&(this.sol=this.eq.solve()),this.dirty=!1,this._draw();let a=Or()-o;this.frameMs.push(a),this.frameMs.length>40&&this.frameMs.shift(),!this.lite&&this.frameMs.length>=40&&this.frameMs.reduce((l,c)=>l+c,0)/40>24&&(this.lite=!0)},_draw(){let s=this.sol,r=this.view,o=this.k.plasma.v,a=Nr(o),l=this.drag?this.drag.id:this.demoShow||this.hover,c=this.drag?{id:this.drag.id,amps:this.eq.getCoil(this.drag.id)}:this.demoShow?{id:this.demoShow,amps:this.eq.getCoil(this.demoShow)}:null,u={thomson:this.k.thomson.v>.01?this.k.thomson.v:!1,showGrid:this.k.grid.v>.01?this.k.grid.v:!1,probes:this.k.probes.v>.5?"struck":!1,highlight:this.step>=2?l:null,levels:this.lite?6:9,outside:this.lite?5:9};if(a>=.999||!s.hasPlasma)if(!s.hasPlasma||a<.001){let h=a<.001?{...s,psi:s.psiVac,hasPlasma:!1,lost:!1}:s;r.draw(h,{...u,vacuumRange:a<.001?this.vacRange:void 0,bar:c})}else r.draw(s,{...u,bar:c});else{let h=this.mix;for(let p=0;p<h.length;p++)h[p]=s.psiVac[p]+a*s.psiPlasma[p];let d=1-Nr((a-.35)/.55);r.draw({...s,psi:h,hasPlasma:!1,lost:!1},{...u,vacuumRange:this.vacRange,vacuumAlpha:d});let f=Nr((a-.25)/.75);f>.001&&r.draw(s,{...u,clear:!1,alpha:f,reveal:f,showCoils:!1,showWall:!1,showGrid:!1,probes:!1,thomson:!1,lostLabel:""})}this._readouts(s,a),this.k.thomson.v>.01&&this._drawTe(s),(this.step===3||this.k.grid.v>.01)&&this._drawStrip(s)},_set(s,r){this.roText[s]!==r&&(this.roText[s]=r,this.ro[s]&&(this.ro[s].innerHTML=r))},_readouts(s,r){let o=s.hasPlasma&&!s.lost,a=s.Ip*r/1e6;this._set("ip",`${a.toFixed(2)}<small>MA</small>`);let l=s.shape,c=o&&r>.98;this._set("kappa",c?l.kappa.toFixed(2):"&ndash;"),this._set("raxis",c?`${l.Raxis.toFixed(2)}<small>m</small>`:"&ndash;"),this._set("zaxis",c?`${_b(l.Zaxis,2)}<small>m</small>`:"&ndash;"),this._set("q95",c?s.q95Approx.toFixed(1):"&ndash;");let u="&ndash;";if(s.lost)u='<span style="color:var(--warn)">lost</span>';else if(c){let h=s.xpoints.filter(d=>d.active);u=s.limited?"limited":h.length>=2?"double null":h[0]&&h[0].Z<0?"lower X-point":"upper X-point"}this._set("cfg",u),this._set("q95b",o?s.q95Approx.toFixed(1):"&ndash;"),this._set("betan",o?s.betaNApprox.toFixed(1):"&ndash;")},_drawTe(s){let r=this.ctx.tokens,o=this.teCanvas,{w:a,h:l,ratio:c}=this._teFit,u=o.getContext("2d");u.setTransform(c,0,0,c,0,0),u.clearRect(0,0,a,l),u.globalAlpha=this.k.thomson.v;let h=Vu(this.sol,e,{samples:140}),d=46,f=10,p=10,v=34,g=h.s[0],m=h.s[h.s.length-1],_=e.thomson.Te0*1.08,y=E=>d+(E-g)/(m-g)*(a-d-f),x=E=>l-v-E/_*(l-v-p);u.fillStyle="rgba(255,90,200,0.08)";for(let E=0;E<h.s.length-1;E++)h.psiN[E]<1&&s.hasPlasma&&u.fillRect(y(h.s[E]),p,y(h.s[E+1])-y(h.s[E])+.5,l-v-p);u.strokeStyle="rgba(255,255,255,0.18)",u.lineWidth=1,u.beginPath(),u.moveTo(d,p),u.lineTo(d,l-v),u.lineTo(a-f,l-v),u.stroke(),u.font=`400 18px ${r.fontMono}`,u.fillStyle=r.ink3,u.textBaseline="top",u.textAlign="center";let w=e.thomson.orientation==="vertical"?[-1,0,1]:[.5,1,1.5];for(let E of w)u.fillText(String(E),y(E),l-v+6),u.beginPath(),u.moveTo(y(E),l-v),u.lineTo(y(E),l-v+4),u.stroke();u.textAlign="right",u.textBaseline="bottom",u.fillText(h.coord==="Z"?"Z (m)":"R (m)",a-f,l-v-4),u.textAlign="left",u.textBaseline="top",u.fillText("Te keV",d+8,p),u.textAlign="right",u.textBaseline="middle";let S=_>2.2?1:.5;for(let E=S;E<_;E+=S)u.fillText(String(E),d-8,x(E));u.strokeStyle="rgba(255,180,84,0.35)",u.lineWidth=1.5,u.beginPath();for(let E=0;E<h.s.length;E++){let b=y(h.s[E]),M=x(h.Te[E]);E?u.lineTo(b,M):u.moveTo(b,M)}u.stroke();let T=h.channels;u.fillStyle=r.coil;for(let E=0;E<T.s.length;E++)u.beginPath(),u.arc(y(T.s[E]),x(T.Te[E]),2.6,0,Math.PI*2),u.fill();u.globalAlpha=1},_drawStrip(s){let r=this.ctx.tokens,o=this.stripCanvas,{w:a,h:l,ratio:c}=this._stripFit,u=o.getContext("2d");u.setTransform(c,0,0,c,0,0),u.clearRect(0,0,a,l);let h=e.coils,d=h.length,f=4,p=(a-f*(d-1))/d,v=l/2;u.strokeStyle="rgba(255,255,255,0.18)",u.lineWidth=1,u.beginPath(),u.moveTo(0,v),u.lineTo(a,v),u.stroke(),h.forEach((g,m)=>{let _=s.coils[g.id]||0,y=Math.max(-g.range[0],g.range[1]),x=Math.max(-1,Math.min(1,_/(.6*y))),w=m*(p+f),S=x*(v-4);u.fillStyle=g.group==="solenoid"?"rgba(255,180,84,0.55)":r.coil,u.fillRect(w,Math.min(v,v-S),p,Math.max(1.5,Math.abs(S)))})}}}var l0=bb();var on=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Al=n=>1-Math.pow(1-n,3),Ut=(n,t,e)=>Math.max(t,Math.min(e,n)),zt=(n,t,e)=>n+(t-n)*e,nn=class{constructor(){this.v=new Map,this.tw=new Map}get(t,e=0){return this.v.has(t)?this.v.get(t):e}target(t,e=0){let i=this.tw.get(t);return i?i.to:this.get(t,e)}set(t,e,{dur:i=700,delay:s=0,instant:r=!1,ease:o=on}={}){if(r||i<=0){this.tw.delete(t),this.v.set(t,e);return}let a=this.get(t,e);if(a===e&&!this.tw.has(t)){this.v.set(t,e);return}this.tw.set(t,{from:a,to:e,t0:performance.now()+s,dur:i,ease:o})}finish(){for(let[t,e]of this.tw)this.v.set(t,e.to);this.tw.clear()}step(t){let e=!1;for(let[i,s]of this.tw){let r=Ut((t-s.t0)/s.dur,0,1);if(t<s.t0){this.v.has(i)||this.v.set(i,s.from),e=!0;continue}this.v.set(i,zt(s.from,s.to,s.ease(r))),r>=1?this.tw.delete(i):e=!0}return e}},sn=class{constructor(t,e){this.draw=t,this.values=e,this.raf=0,this.dirty=!0,this._tick=this._tick.bind(this)}start(){this.raf||(this.raf=requestAnimationFrame(this._tick))}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}_tick(t){this.raf=requestAnimationFrame(this._tick),(this.values.step(t)||this.dirty)&&(this.dirty=!1,this.draw(t))}};function Mn(n,t){let e=document.createElement("canvas");e.style.cssText="position:absolute;left:0;top:0;width:1600px;height:900px;touch-action:none;user-select:none;-webkit-user-select:none;",n.appendChild(e);let i=e.getContext("2d"),s={canvas:e,g:i,fit(){let{ratio:r}=t.fitCanvas(e);s.ratio=r},begin(){i.setTransform(s.ratio,0,0,s.ratio,0,0),i.clearRect(0,0,1600,900)},toDesign(r){let o=e.getBoundingClientRect();return{x:(r.clientX-o.left)/o.width*1600,y:(r.clientY-o.top)/o.height*900}}};return s.fit(),s}function C(n,t,e,i=500){let s=t==="mono"?n.fontMono:t==="display"?n.fontDisplay:n.fontBody;return`${i} ${e}px ${s}`}function B(n,t,e,i,{f:s,color:r,align:o="left",base:a="alphabetic",alpha:l=1}={}){if(l<=.002)return 0;n.save(),n.globalAlpha*=l,s&&(n.font=s),r&&(n.fillStyle=r),n.textAlign=o,n.textBaseline=a,n.fillText(t,e,i);let c=n.measureText(t).width;return n.restore(),c}function Mb(n,t,e){n.save(),n.font=e;let i=n.measureText(t).width;return n.restore(),i}function wt(n,t,e,i,{alpha:s=1,align:r="left",base:o="alphabetic"}={}){let a=0;for(let[c,u]of t)a+=Mb(n,c,u);let l=r==="center"?e-a/2:r==="right"?e-a:e;for(let[c,u,h]of t)l+=B(n,c,l,i,{f:u,color:h,alpha:s,base:o});return l}function ut(n,t,e,i,s,r,o=1.5,a=1,l=null){a<=.002||(n.save(),n.globalAlpha*=a,n.strokeStyle=r,n.lineWidth=o,l&&n.setLineDash(l),n.beginPath(),n.moveTo(t,e),n.lineTo(i,s),n.stroke(),n.restore())}function ie(n,t,e,i,s,r){r=Math.min(r,Math.abs(i)/2,Math.abs(s)/2),n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function pt(n,t){let e=parseInt(n.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function El(n,t,e=-1/0,i=1/0){let s=n.map((a,l)=>[a,l]).sort((a,l)=>a[0]-l[0]),r=s.map(a=>a[0]);for(let a=0;a<40;a++){for(let l=1;l<r.length;l++){let c=r[l]-r[l-1];if(c<t){let u=(t-c)/2;r[l-1]-=u,r[l]+=u}}r.length&&(r[0]<e&&(r[0]=e),r[r.length-1]>i&&(r[r.length-1]=i))}let o=new Array(n.length);return s.forEach((a,l)=>o[a[1]]=r[l]),o}var rn=class{constructor(){this.ids=new Set}after(t,e){let i=setTimeout(()=>{this.ids.delete(i),e()},t);return this.ids.add(i),i}clear(){this.ids.forEach(clearTimeout),this.ids.clear()}};var Rl=.99982;var c0=129;function d0(n,t,e=0,i=null){let s=n.shots[e],r=s.psi,[o,a,l]=r.shape,c=s.scorer_truth,u=c.cons_names,h=w=>u.every((S,T)=>c.cons[T][w]!==null&&Number.isFinite(c.cons[T][w])),d=i??Math.floor(o/2);for(let w=0;w<o&&!h(d);w++){let S=Math.floor(o/2)+(w%2?-(w+1)/2:w/2);S>=0&&S<o&&h(S)&&(d=S)}let f=new Int16Array(t,r.byte_offset+d*a*l*2,a*l),p=new Float64Array(a*l);for(let w=0;w<a*l;w++)p[w]=f[w]*r.scale+r.value_offset;let v=c.lcfs,g=v.shape[1],m=new Float32Array(new Float32Array(t,v.byte_offset+d*g*2*4,g*2)),_={};u.forEach((w,S)=>_[w]=c.cons[S][d]);let y=n.grid.R_m,x=n.grid.Z_m;return{grid:Wi(y[0],y[y.length-1],x[0],x[x.length-1],l,a),psi:p,lcfs:m,cons:_,shotId:s.id,tMs:s.times_ms[d],frame:d}}function h0(n,t,e){let i=new Float64Array(e.n*e.m);for(let s=0;s<e.m;s++)for(let r=0;r<e.n;r++)i[s*e.n+r]=me(n,t,e.R[r],e.Z[s]);return i}function wb(n,t){let e=0;for(let r=0;r<n.length;r++)e+=n[r];e/=n.length;let i=0,s=0;for(let r=0;r<n.length;r++)i+=(n[r]-e)**2,s+=(t[r]-n[r])**2;return 1-s/i}function f0(n,t,e,i){let s=t.n,r=1/0,o=-1/0,a=1/0,l=-1/0;for(let d=0;d<e.length;d+=2)r=Math.min(r,e[d]),o=Math.max(o,e[d]),a=Math.min(a,e[d+1]),l=Math.max(l,e[d+1]);let c=0;for(let d=1;d<t.m-1;d++){let f=t.Z[d];if(!(f<a||f>l))for(let p=1;p<s-1;p++){let v=t.R[p];if(v<r||v>o||!_e(e,v,f))continue;let g=d*s+p,m=(n[g+1]-n[g-1])/(2*t.dR),_=(n[g+s]-n[g-s])/(2*t.dZ);c+=(m*m+_*_)/(v*v)*2*Math.PI*v}}c*=t.dR*t.dZ;let u=0,h=e.length>>1;for(let d=0,f=h-1;d<h;f=d++){let p=.5*(e[2*d]+e[2*f]),v=.5*(e[2*d+1]+e[2*f+1]),g=Math.hypot(e[2*d]-e[2*f],e[2*d+1]-e[2*f+1]),m=(p-t.Rmin)/t.dR,_=(v-t.Zmin)/t.dZ,y=Math.max(1,Math.min(s-2,Math.round(m))),w=Math.max(1,Math.min(t.m-2,Math.round(_)))*s+y,S=(n[w+1]-n[w-1])/(2*t.dR),T=(n[w+s]-n[w-s])/(2*t.dZ);u+=Math.hypot(S,T)/p*g}return c/(Math.max(i,.1)*u*u)}function p0(n){let t=n.grid,{n:e,m:i}=t,s=li.d3d,r=Eo(t,s),o=n.cons,a={sign:-1,wall:s.wall,hint:{R:o.R_axis,Z:o.Z_axis,r:.35}},l=0,c=n.lcfs.length>>1;for(let T=0;T<c;T++)l+=me(n.psi,t,n.lcfs[2*T],n.lcfs[2*T+1]);let u=l/c,h=me(n.psi,t,o.R_axis,o.Z_axis),d=new Float64Array(e*i);for(let T=0;T<i;T++)for(let E=0;E<e;E++){let b=T*e+E,M=E===0?(n.psi[b+1]-n.psi[b])/t.dR:E===e-1?(n.psi[b]-n.psi[b-1])/t.dR:(n.psi[b+1]-n.psi[b-1])/(2*t.dR),A=T===0?(n.psi[b+e]-n.psi[b])/t.dZ:T===i-1?(n.psi[b]-n.psi[b-e])/t.dZ:(n.psi[b+e]-n.psi[b-e])/(2*t.dZ),U=t.R[E],L=t.Z[T],N=Math.exp(-(((U-o.R_axis)/.8)**2)-((L-o.Z_axis)/1.25)**2);d[b]=N*(-(L-o.Z_axis)*A-.3*M)}let f=0;for(let T=0;T<e*i;T++)f+=n.psi[T];f/=e*i;let p=0,v=0;for(let T=0;T<e*i;T++)p+=(n.psi[T]-f)**2,v+=d[T]**2;let g=Math.sqrt((1-Rl)*p/v);for(let T=0;T<e*i;T++)d[T]*=g;let m=n.psi.map((T,E)=>T+d[E]),_=wb(n.psi,m),y=Wi(t.Rmin,t.Rmax,t.Zmin,t.Zmax,c0,c0),x=h0(n.psi,t,y),w=h0(d,t,y),S={d:n,g:t,fg:y,actx:r,opts:a,psiA:h,psiB:u,dpsi:d,psiUp:x,dUp:w,r2at1:_,kScale:g,machine:s};return S.aT=Dr(n.psi,r,a),S.bT=m0(x,y,u,h,o.R_axis,o.Z_axis),S.liT=f0(x,y,S.bT.c,Ns(n.lcfs,null).R0),S}var Sb=[5e-4,.001,.002,.004,.008,.016,.03];function m0(n,t,e,i,s,r,o=0){for(let a of Sb){if(a<o)continue;let l=e-a*(e-i),c=null,u=1/0;for(let h of Ve(n,t.n,t.m,l,t)){if(!h.closed||h.length<24||!_e(h,s,r))continue;let d=Math.abs(Ur(h));d<u&&(u=d,c=h)}if(c)return{c,eps:a}}return null}function u0(n,t,e,i,s){let r=n.length>>1,o=NaN;for(let a=0,l=r-1;a<r;l=a++){let c=n[2*l]-t,u=n[2*l+1]-e,h=n[2*a]-t-c,d=n[2*a+1]-e-u,f=i*d-s*h;if(Math.abs(f)<1e-14)continue;let p=(c*d-u*h)/f,v=(c*s-u*i)/f;p>0&&v>=0&&v<=1&&!(p>o)&&(o=p)}return o}function Tb(n,t,e,i,s){let r=new Float32Array(n.length);for(let o=0;o<n.length;o+=2){let a=n[o]-i,l=n[o+1]-s,c=Math.hypot(a,l)||1,u=a/c,h=l/c,d=u0(t,i,s,u,h),f=u0(e,i,s,u,h),p=Number.isFinite(d)&&Number.isFinite(f)?f-d:0;r[o]=n[o]+p*u,r[o+1]=n[o+1]+p*h}return r}function g0(n,t){let{g:e,d:i,dpsi:s,psiUp:r,dUp:o,fg:a}=n,l=i.cons,c=e.n*e.m,u=new Float64Array(c);for(let _=0;_<c;_++)u[_]=i.psi[_]+t*s[_];let h=Dr(u,n.actx,n.opts);if(!h.ok)return{ok:!1};let d=new Float64Array(r.length);for(let _=0;_<d.length;_++)d[_]=r[_]+t*o[_];let f=n.bT,p=n.psiB+(h.psiBoundary-n.aT.psiBoundary),v=m0(d,a,p,h.axis.psi,l.R_axis,l.Z_axis,f.eps);if(!v)return{ok:!1};let g=Tb(i.lcfs,f.c,v.c,l.R_axis,l.Z_axis),m=Ns(g,null);return{ok:!0,lcfs:g,R_axis:l.R_axis+(h.axis.R-n.aT.axis.R),Z_axis:l.Z_axis+(h.axis.Z-n.aT.axis.Z),kappa:m.kappa,tri_top:m.deltaU,tri_bot:m.deltaL,volume:m.volume,li:l.li*(f0(d,a,v.c,m.R0)/n.liT)}}function Os(n,t,e){return e.map(i=>Ve(n,t.n,t.m,i,t))}function v0(n){let t=1/0,e=-1/0,i=1/0,s=-1/0,r=0,o=0,a=0,l=0;for(let c=0;c<n.length;c+=2){let u=n[c],h=n[c+1];u<t&&(t=u,a=h),u>e&&(e=u,l=h),h>s&&(s=h,r=u),h<i&&(i=h,o=u)}return{Rmin:t,Rmax:e,Zmin:i,Zmax:s,RatZmax:r,RatZmin:o,ZatRmin:a,ZatRmax:l,R0:.5*(t+e),a:.5*(e-t)}}var M0=40,Ab=n=>Math.pow(M0,Ut(n,0,1)),x0=n=>Math.log(n)/Math.log(M0),Eb=1.676,Rb=-.008,Cl={s:262,cx:850,cy:450},Bs={s:92,cx:642,cy:238},Cb=[.1,.2,.3,.4,.5,.6,.7,.8,.9],Pb=[.05,.15,.25,.35,.45],Ib=[1.04,1.12,1.24,1.4],Zu=1140,y0=1560,kb="Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics",qu=[{k:"R_axis",sym:"R",sub:"axis",unit:"m",dp:3,grp:0},{k:"Z_axis",sym:"Z",sub:"axis",unit:"m",dp:3,grp:0},{k:"kappa",sym:"\u03BA",sub:"",unit:"\u2013",dp:3,grp:1},{k:"tri_top",sym:"\u03B4",sub:"top",unit:"\u2013",dp:3,grp:2},{k:"tri_bot",sym:"\u03B4",sub:"bot",unit:"\u2013",dp:3,grp:2},{k:"volume",sym:"V",sub:"",unit:"m\xB3",dp:2,grp:3},{k:"li",sym:"l",sub:"i",unit:"\u2013",dp:3,grp:4}],_0=(n,t)=>(n<0?"\u2212":"")+Math.abs(n).toFixed(t),b0=n=>n<9.95?n.toFixed(1):String(Math.round(n)),w0={id:"anatomy",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.model=null,this.pinkM=-1,this.v.set("mag",0,{instant:!0}),this.v.set("mp",0,{instant:!0}),this.v.set("ui0",1,{instant:!0});let e=document.createElement("div");return e.className="ui-row",e.style.cssText=`position:absolute;left:${Zu-6}px;top:598px;opacity:0;pointer-events:none;z-index:3;transition:opacity .3s var(--ease), top .6s var(--ease);user-select:none;-webkit-user-select:none;touch-action:none;`,e.innerHTML='<input class="ui-slider" type="range" min="0" max="1000" step="1" value="0" aria-label="magnify the difference" style="width:300px;--slider-accent:var(--plasma);touch-action:none"><span class="ui-readout" style="min-width:86px;text-align:right"></span>',n.appendChild(e),this.sliderBox=e,this.slider=e.querySelector("input"),this.readout=e.querySelector(".ui-readout"),this.slider.addEventListener("input",()=>{this.timers.clear(),this.v.set("mag",Number(this.slider.value)/1e3,{instant:!0}),this.loop.dirty=!0}),this.slider.addEventListener("pointerdown",()=>this.dragging=!0),window.addEventListener("pointerup",this._up=()=>this.dragging=!1),this.slider.addEventListener("keydown",i=>{["ArrowLeft","ArrowRight","PageUp","PageDown"," "].includes(i.key)&&(i.preventDefault(),this.slider.blur())}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Promise.all([t.data("replay.json"),t.data("replay.bin")]).then(([i,s])=>{let r=d0(i,s,0);this.model=p0(r),this.prepare(),this.loop.dirty=!0}).catch(i=>{console.warn("anatomy: replay data unavailable",i),this.loop.dirty=!0})},prepare(){let n=this.model,t=n.d,e=n.fg,i=p=>n.psiA+p*(n.psiB-n.psiA);this.wall=n.machine.wall;let s=t.cons.R_axis,r=t.cons.Z_axis,o=p=>p.filter(v=>v.closed&&_e(v,s,r));this.levIn=Cb.map(i),this.levLi=Pb.map(i),this.levSol=Ib.map(i),this.trueIn=Os(n.psiUp,e,this.levIn).map(o),this.trueLi=Os(n.psiUp,e,this.levLi).map(o),this.trueSol=Os(n.psiUp,e,this.levSol),this.ext=v0(t.lcfs);let a=e.n,l=document.createElement("canvas");l.width=a,l.height=e.m;let c=l.getContext("2d"),u=c.createImageData(a,e.m),[h,d,f]=[98,228,255];for(let p=0;p<e.m;p++)for(let v=0;v<a;v++){let g=(n.psiUp[p*a+v]-n.psiA)/(n.psiB-n.psiA),m=((e.m-1-p)*a+v)*4,_=Ut(1-g,0,1);u.data[m]=h,u.data[m+1]=d,u.data[m+2]=f,u.data[m+3]=g<=1.02?Math.round(255*(.05+.2*Math.pow(_,1.4))):0}c.putImageData(u,0,0),this.fillImg=l,this.pink=null,this.pinkM=-1},pinkAt(n){if(this.pink&&Math.abs(n-this.pinkM)<.001)return this.pink;let t=this.model,e=new Float64Array(t.psiUp.length);for(let a=0;a<e.length;a++)e[a]=t.psiUp[a]+n*t.dUp[a];let i=g0(t,n),s=i.ok?i.R_axis:t.d.cons.R_axis,r=i.ok?i.Z_axis:t.d.cons.Z_axis,o=a=>a.filter(l=>l.closed&&_e(l,s,r));return this.pink={M:n,est:i,inner:Os(e,t.fg,this.levIn).map(o),li:Os(e,t.fg,this.levLi).map(o),sol:Os(e,t.fg,this.levSol)},this.pinkM=n,this.pink},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.dragging=!1},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear();let i=t||this.ctx.reducedMotion,s=(a,l=0)=>({dur:a,delay:l,instant:i});this.v.set("mp",n===1?1:0,s(1100)),this.v.set("ui0",n===0?1:0,s(500,n===0?300:0));let r=n===1;this.v.set("ch",r?1:0,s(r?400:300,r?200:0)),this.v.set("bt",r?1:0,s(r?650:250,r?300:0)),this.v.set("rb",r?1:0,s(r?500:250,r?850:0)),this.v.set("bb",r?1:0,s(r?600:250,r?1e3:0));for(let a=0;a<5;a++)this.v.set(`a${a}`,n===2?1:0,s(n===2?420:250,n===2?300+a*240:0));this.v.set("ui2",n===2?1:0,s(500,n===2?250:0)),t?this.v.set("mag",this._devMag||0,{instant:!0}):n===1&&e!==1&&this.v.set("mag",0,s(700));let o=n!==1;this.sliderBox.style.opacity=o?"1":"0",this.sliderBox.style.pointerEvents=o?"auto":"none",this.sliderBox.style.top=n===2?"672px":"598px",this.loop.dirty=!0},demo(){if(this.step===1)return;this.timers.clear();let n=this.ctx.reducedMotion;this.step===0?(this.v.set("mag",x0(25),{dur:1700,instant:n}),this.timers.after(2300,()=>this.v.set("mag",0,{dur:1700,instant:n}))):(this.v.set("mag",x0(30),{dur:2200,instant:n}),this.timers.after(3e3,()=>this.v.set("mag",0,{dur:1600,instant:n}))),this.loop.dirty=!0},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("mag"),i=Ab(e);this.dragging||(this.slider.value=String(Math.round(e*1e3))),this.readout.innerHTML=`<small style="margin:0 2px 0 0">\xD7</small>${b0(i)}`;let s=this.v.get("mp"),r={s:zt(Cl.s,Bs.s,s),cx:zt(Cl.cx,Bs.cx,s),cy:zt(Cl.cy,Bs.cy,s)};if(this.model){let o=this.pinkAt(i);this.drawMap(n,r,o,s);let a=this.v.get("ui0");a>.01&&this.drawStep0(n,a,i),this.v.get("ch")>.01&&this.drawChart(n),(this.v.get("ui2")>.01||this.v.get("a0")>.01)&&this.drawStep2(n,r,o)}else B(n,"loading DIII-D frame\u2026",850,450,{f:C(t,"body",20,500),color:t.ink3,align:"center"});B(n,kb,y0,852,{f:C(t,"body",18,400),color:t.ink3,align:"right",alpha:.85})},X(n,t){return n.cx+(t-Eb)*n.s},Y(n,t){return n.cy-(t-Rb)*n.s},polyPath(n,t,e,i){n.moveTo(this.X(t,e[0]),this.Y(t,e[1]));for(let s=2;s<e.length;s+=2)n.lineTo(this.X(t,e[s]),this.Y(t,e[s+1]));i&&n.closePath()},wallPath(n,t){let e=this.wall;n.beginPath(),n.moveTo(this.X(t,e[0][0]),this.Y(t,e[0][1]));for(let i=1;i<e.length;i++)n.lineTo(this.X(t,e[i][0]),this.Y(t,e[i][1]));n.closePath()},strokeSet(n,t,e,i,s,r,o=0){n.beginPath();for(let a of e)for(let l of a)this.polyPath(n,t,l,l.closed);o>0&&(n.strokeStyle=pt(i,r*.22),n.lineWidth=s+o,n.stroke()),n.strokeStyle=pt(i,r),n.lineWidth=s,n.stroke()},drawMap(n,t,e,i){let s=this.T,r=this.model,o=t.s/Cl.s,a=f=>Math.max(1,f*zt(1,.75,i)),l=r.fg;n.save(),n.lineJoin="round",n.lineCap="round",this.wallPath(n,t),n.fillStyle="rgba(255,255,255,0.018)",n.fill(),n.strokeStyle=pt("#b9b6ad",.55),n.lineWidth=a(1.5),n.stroke(),this.wallPath(n,t),n.clip(),n.save(),n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.clip(),n.globalCompositeOperation="lighter",n.imageSmoothingEnabled=!0;let c=this.X(t,l.Rmin),u=this.Y(t,l.Zmax);n.drawImage(this.fillImg,c,u,(l.Rmax-l.Rmin)*t.s,(l.Zmax-l.Zmin)*t.s),n.restore();let h=this.v.get("a3");h>.01&&(n.save(),n.globalCompositeOperation="lighter",n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.fillStyle=pt(s.flux,.1*h),n.fill(),n.restore()),n.save(),n.globalCompositeOperation="lighter",this.strokeSet(n,t,this.trueSol,s.flux,a(1.3),.28),this.strokeSet(n,t,this.trueIn,s.flux,a(1.6),.62,4*o);let d=this.v.get("a4");d>.01&&this.strokeSet(n,t,this.trueLi,s.flux,a(1.2),.45*d),n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.strokeStyle=pt(s.flux,.25),n.lineWidth=a(8)*o+2,n.stroke(),n.strokeStyle=s.flux,n.lineWidth=a(2.6),n.stroke(),n.restore(),n.save(),this.strokeSet(n,t,e.sol,s.plasma,a(1.1),.4),this.strokeSet(n,t,e.inner,s.plasma,a(1.2),.9),d>.01&&this.strokeSet(n,t,e.li,s.plasma,a(1),.6*d),e.est.ok&&(n.globalCompositeOperation="lighter",n.beginPath(),this.polyPath(n,t,e.est.lcfs,!0),n.strokeStyle=pt(s.plasma,.22),n.lineWidth=a(7)*o+1,n.stroke(),n.globalCompositeOperation="source-over",n.strokeStyle=s.plasma,n.lineWidth=a(1.8),n.stroke()),n.restore(),n.restore()},drawStep0(n,t,e){let i=this.T,s=this.model.d,r=Zu,o=(1-t)*12,a=150+o;ut(n,r,a-7,r+34,a-7,i.flux,2.6,t),B(n,"truth: EFIT flux map",r+48,a,{f:C(i,"body",22,500),color:i.ink,alpha:t}),wt(n,[["DIII-D, shot file ",C(i,"body",18,400),i.ink3],[`${s.shotId} \xB7 ${Math.round(s.tMs)} ms`,C(i,"mono",18,500),i.ink3]],r+48,a+28,{alpha:t}),B(n,"bright line: the scorer\u2019s LCFS",r+48,a+54,{f:C(i,"body",18,400),color:i.ink3,alpha:t}),a=280+o,ut(n,r,a-7,r+34,a-7,i.plasma,2,t),B(n,"illustration",r+48,a,{f:C(i,"body",22,600),color:i.plasma,alpha:t}),B(n,"truth plus an error scaled to",r+48,a+28,{f:C(i,"body",18,400),color:i.ink2,alpha:t}),wt(n,[["R\xB2 = ",C(i,"body",18,400),i.ink2],[String(Rl),C(i,"mono",18,600),i.ink2],[" (not a model output)",C(i,"body",18,400),i.ink3]],r+48,a+54,{alpha:t}),a=430+o,B(n,"PIXEL R\xB2 AT \xD71",r,a,{f:C(i,"body",18,600),color:i.ink3,alpha:t}),B(n,this.model.r2at1.toFixed(5),r-3,a+64,{f:C(i,"mono",64,600),color:i.ink,alpha:t}),a=572+o,B(n,"MAGNIFY THE DIFFERENCE",r,a,{f:C(i,"body",18,600),color:i.ink3,alpha:t}),wt(n,[["drawn: truth + ",C(i,"body",18,400),i.ink3],[`${b0(e)} \xD7 error`,C(i,"mono",18,500),e>1.05?i.plasma:i.ink3]],r,668+o,{alpha:t}),B(n,"same \u03C8 levels in both maps",r,694+o,{f:C(i,"body",18,400),color:i.ink3,alpha:t})},drawChart(n){let t=this.T,e=this.v.get("ch"),i=this.v.get("bt"),s=this.v.get("rb"),r=this.v.get("bb"),o=800,a=1540,l=a-o,c=3,u=Bs.cy+1.36*Bs.s+36;B(n,"flux map",Bs.cx,u,{f:C(t,"body",18,500),color:t.ink2,align:"center",alpha:e}),wt(n,[["R\xB2 ",C(t,"body",18,400),t.ink3],["0.99982",C(t,"mono",20,600),t.flux]],Bs.cx,u+26,{align:"center",alpha:e});let h=C(t,"body",21,400),d=C(t,"mono",21,500);wt(n,[["S = ",h,t.ink2],["0.55",d,t.ink],[" R\xB2",h,t.ink2],["\u03C8",h,t.flux],[" + ",h,t.ink3],["0.15",d,t.ink],[" R\xB2",h,t.ink2],["(q95, \u03B2N)",h,t.ink2],[" + ",h,t.ink3],["0.10",d,t.ink],[" (1 \u2212 D",h,t.ink2],["LCFS",C(t,"body",18,400),t.ink2],[")",h,t.ink2],[" + ",h,t.ink3],["0.20",d,t.ink],[" Consistency",h,t.warn]],o,104,{alpha:e});let f=[{w:.55,name:"\u03C8 map",val:"55%",col:t.flux},{w:.15,name:"q95, \u03B2N",val:"15%",col:t.ink2},{w:.1,name:"LCFS",val:"10%",col:t.ink3},{w:.2,name:"Consistency",val:"20%",col:t.warn}],p=[{w:.01,name:"\u03C8 map",val:"\u22481%",col:t.flux},{w:.26,name:"scalars + boundary",val:"26%",col:t.ink2},{w:.73,name:"Consistency",val:"73%",col:t.warn}],v=A=>{let U=o;return A.map(L=>{let N={...L,x0:U,x1:U+L.w*l};return U=N.x1,N})},g=v(f),m=v(p),_=262,y=46,x=512,w=46;B(n,"WEIGHT IN THE SCORE",o,168,{f:C(t,"body",18,600),color:t.ink3,alpha:e}),B(n,"SHARE OF THE POINTS I LOST",o,690,{f:C(t,"body",18,600),color:t.ink3,alpha:e*r}),wt(n,[["lost: 1 \u2212 ",C(t,"body",18,400),t.ink3],["0.99137",C(t,"mono",18,500),t.ink2],[" = ",C(t,"body",18,400),t.ink3],["0.00863",C(t,"mono",18,600),t.warn],["  \xB7  my first submission, Development phase",C(t,"body",18,400),t.ink3]],o,718,{alpha:e*r});let S=(A,U,L,N,k)=>{let I=Math.min(A.x1,o+l*N);if(I<=A.x0+.5)return;let O=A.x0+(A.x0>o?c/2:0),H=Math.max(O+2,I-(A.x1<a-.5?c/2:0));n.save(),n.globalAlpha=k;let $=n.createLinearGradient(0,U,0,U+L);$.addColorStop(0,pt(A.col,.95)),$.addColorStop(1,pt(A.col,.7)),n.fillStyle=$,ie(n,O,U,H-O,L,3),n.fill(),n.restore()};if(s>.01){let A=[[g[0].x0,g[0].x1,m[0].x0,m[0].x1,t.flux],[g[1].x0,g[2].x1,m[1].x0,m[1].x1,t.ink2],[g[3].x0,g[3].x1,m[2].x0,m[2].x1,t.warn]],U=_+y+4,L=x-4,N=(U+L)/2;n.save(),n.globalCompositeOperation="lighter";for(let[k,I,O,H,$]of A){let K=n.createLinearGradient(0,U,0,L);K.addColorStop(0,pt($,.07*s)),K.addColorStop(1,pt($,.24*s)),n.fillStyle=K,n.beginPath(),n.moveTo(k+1.5,U),n.bezierCurveTo(k+1.5,N,O+1.5,N,O+1.5,L),n.lineTo(Math.max(O+3,H-1.5),L),n.bezierCurveTo(Math.max(O+3,H-1.5),N,I-1.5,N,I-1.5,U),n.closePath(),n.fill(),n.strokeStyle=pt($,.45*s),n.lineWidth=1.3,n.stroke()}n.restore()}g.forEach(A=>S(A,_,y,i,e)),g.forEach((A,U)=>{let L=e*Ut((i*l-(A.x0-o))/Math.max(30,A.x1-A.x0),0,1),N=(A.x0+A.x1)/2;B(n,A.val,N,_-14,{f:C(t,"mono",34,600),color:U===1||U===2?t.ink:A.col,align:"center",alpha:L}),B(n,A.name,N,_-58,{f:C(t,"body",18,500),color:t.ink2,align:"center",alpha:L})}),m.forEach(A=>S(A,x,w,r,e));let T=e*Ut((r-.3)/.7,0,1);B(n,"\u22481%",o-14,x+34,{f:C(t,"mono",34,600),color:t.flux,align:"right",alpha:T}),B(n,"\u03C8 map",o-14,x+66,{f:C(t,"body",18,500),color:t.ink2,align:"right",alpha:T});let E=m[1];B(n,"26%",(E.x0+E.x1)/2,x+w+42,{f:C(t,"mono",34,600),color:t.ink,align:"center",alpha:T}),B(n,"scalars + boundary",(E.x0+E.x1)/2,x+w+70,{f:C(t,"body",18,500),color:t.ink2,align:"center",alpha:T});let b=m[2],M=B(n,"73%",b.x0+18,x+34,{f:C(t,"mono",36,700),color:t.bg,alpha:T});B(n,"Consistency",b.x0+18+M+14,x+31,{f:C(t,"body",22,600),color:t.bg,alpha:T}),B(n,"20% of the weight, 73% of the loss",b.x1,x+w+42,{f:C(t,"body",20,500),color:t.warn,align:"right",alpha:T})},drawStep2(n,t,e){let i=this.T,r=this.model.d.cons,o=this.ext,a=x=>this.X(t,x),l=x=>this.Y(t,x),c=[0,1,2,3,4].map(x=>this.v.get(`a${x}`)),u=C(i,"body",20,500),h=(x,w,S,T,E,b,M="left",A=22)=>{let U=[[x,C(i,"body",A,600),E]];return w&&U.push([w,C(i,"body",18,500),E]),wt(n,U,S,T,{alpha:b,align:M})};if(c[0]>.01){let x=a(r.R_axis),w=l(r.Z_axis),S=c[0],T=a(this.wall.reduce((b,M)=>Math.min(b,M[0]),9))-6,E=l(-1.2);if(ut(n,T,w,x-14,w,i.ink2,1.2,S*.8,[3,5]),ut(n,x,w+14,x,E,i.ink2,1.2,S*.8,[3,5]),ut(n,T-6,w,T+6,w,i.ink2,1.5,S),ut(n,x,E-6,x,E+6,i.ink2,1.5,S),h("Z","axis",T-12,w+7,i.ink,S,"right"),h("R","axis",x+10,E+7,i.ink,S,"left"),n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=S,n.strokeStyle=i.flux,n.lineWidth=2,n.beginPath(),n.arc(x,w,8,0,Math.PI*2),n.moveTo(x-16,w),n.lineTo(x+16,w),n.moveTo(x,w-16),n.lineTo(x,w+16),n.stroke(),n.restore(),e.est.ok){let b=a(e.est.R_axis),M=l(e.est.Z_axis);Math.hypot(b-x,M-w)>1.5&&(n.save(),n.globalAlpha=S,n.strokeStyle=i.plasma,n.lineWidth=2,n.beginPath(),n.moveTo(b-9,M-9),n.lineTo(b+9,M+9),n.moveTo(b+9,M-9),n.lineTo(b-9,M+9),n.stroke(),n.restore())}}if(c[1]>.01){let x=c[1],w=l(o.Zmax)-58,S=a(o.Rmin),T=a(o.Rmax),E=a(o.Rmax)+34,b=l(o.Zmax),M=l(o.Zmin),A=i.ink2;ut(n,S,l(o.ZatRmin)-10,S,w-8,A,1,x*.6,[2,4]),ut(n,T,l(o.ZatRmax)-10,T,w-8,A,1,x*.6,[2,4]),ut(n,a(o.RatZmax)+10,b,E+8,b,A,1,x*.6,[2,4]),ut(n,a(o.RatZmin)+10,M,E+8,M,A,1,x*.6,[2,4]),this.dimArrow(n,S,w,T,w,i.ink,x),this.dimArrow(n,E,b,E,M,i.ink,x);let U=(S+T)/2;n.save(),n.globalAlpha=x,n.fillStyle=i.bg,n.fillRect(U-26,w-14,52,28),n.fillRect(E-22,(b+M)/2-16,44,32),n.restore(),B(n,"2a",U,w+7,{f:C(i,"body",20,600),color:i.ink,align:"center",alpha:x}),B(n,"2b",E,(b+M)/2+7,{f:C(i,"body",20,600),color:i.ink,align:"center",alpha:x}),this.plate(n,E,(b+M)/2+44,96,34,x),wt(n,[["\u03BA",C(i,"body",24,600),i.ink],[" = b / a",u,i.ink2]],E,(b+M)/2+52,{alpha:x,align:"center"})}if(c[2]>.01){let x=c[2],w=a(o.R0),S=l(o.Zmax),T=l(o.Zmin);ut(n,w,S-2,w,T+2,i.ink3,1.2,x,[5,6]);let E=(b,M,A,U,L)=>{let N=M+(L?22:-14)*0;ut(n,b,N,w,N,i.ink,2.2,x),ut(n,b,N-7,b,N+7,i.ink,2,x),ut(n,w,N-7,w,N+7,i.ink,2,x),n.save(),n.globalAlpha=x,n.fillStyle=i.ink,n.beginPath(),n.arc(b,M,4.5,0,Math.PI*2),n.fill(),n.restore(),h(A,U,(b+w)/2,N+(L?34:-14),i.ink,x,"center")};E(a(o.RatZmax),S,"\u03B4","top",!1),E(a(o.RatZmin),T,"\u03B4","bot",!0)}if(c[3]>.01){let x=a(r.R_axis+.05),w=l(r.Z_axis+.62);this.plate(n,x,w+4,170,62,c[3]),h("V","",x,w,i.ink,c[3],"center",24),B(n,"enclosed volume",x,w+26,{f:C(i,"body",18,500),color:i.ink2,align:"center",alpha:c[3]})}if(c[4]>.01){let x=a(r.R_axis+.05),w=l(r.Z_axis-.5);this.plate(n,x,w+4,240,62,c[4]),h("l","i",x,w,i.ink,c[4],"center",24),B(n,"how peaked the current is",x,w+26,{f:C(i,"body",18,500),color:i.ink2,align:"center",alpha:c[4]})}let d=this.v.get("ui2");if(d<.01)return;let f=e.est,p=Zu,v=1420,g=y0,m=120;B(n,"SCORER\u2019S TRUTH",v,m,{f:C(i,"body",18,600),color:i.flux,align:"right",alpha:d}),B(n,"PINK MAP",g,m,{f:C(i,"body",18,600),color:i.plasma,align:"right",alpha:d}),ut(n,p,m+16,g,m+16,i.line,1,d),m+=62;let _=56;qu.forEach((x,w)=>{let S=Math.min(d,c[x.grp]),T=m+w*_,E=h(x.sym,x.sub,p,T,i.ink,S);if(B(n,x.unit,E+10,T,{f:C(i,"body",18,400),color:i.ink3,alpha:S}),B(n,_0(r[x.k],x.dp),v,T,{f:C(i,"mono",24,500),color:i.flux,align:"right",alpha:S}),f.ok){let b=f[x.k],M=Math.abs(b-r[x.k])>=.5*Math.pow(10,-x.dp);B(n,_0(b,x.dp),g,T,{f:C(i,"mono",24,M?600:500),color:M?i.plasma:i.ink3,align:"right",alpha:S})}else B(n,"\u2014",g,T,{f:C(i,"mono",24,500),color:i.ink3,align:"right",alpha:S});w<qu.length-1&&ut(n,p,T+20,g,T+20,"rgba(255,255,255,0.06)",1,S)});let y=m+qu.length*_-6;B(n,"pink: our geometric estimate from the pink map",p,y,{f:C(i,"body",18,400),color:i.ink3,alpha:d}),B(n,"MAGNIFY THE DIFFERENCE",p,658,{f:C(i,"body",18,600),color:i.ink3,alpha:d}),wt(n,[["pink map at \xD71: pixel R\xB2 ",C(i,"body",18,400),i.ink3],[String(Rl),C(i,"mono",18,500),i.ink2]],p,748,{alpha:d}),B(n,"illustration built from truth",p,774,{f:C(i,"body",18,400),color:i.ink3,alpha:d})},plate(n,t,e,i,s,r){n.save(),n.globalAlpha=r,n.fillStyle="rgba(6,7,12,0.82)",ie(n,t-i/2,e-s/2,i,s,8),n.fill(),n.restore()},dimArrow(n,t,e,i,s,r,o){let a=Math.hypot(i-t,s-e)||1,l=(i-t)/a,c=(s-e)/a,u=9,h=4.5;ut(n,t+l*2,e+c*2,i-l*2,s-c*2,r,1.6,o),n.save(),n.globalAlpha=o,n.fillStyle=r;for(let[d,f,p]of[[t,e,1],[i,s,-1]])n.beginPath(),n.moveTo(d,f),n.lineTo(d+p*(l*u-c*h),f+p*(c*u+l*h)),n.lineTo(d+p*(l*u+c*h),f+p*(c*u-l*h)),n.closePath(),n.fill();n.restore()}};var wn=65,Pl=null;function Io(n,t){let e=t.shape.reduce((i,s)=>i*s,1);if(t.dtype==="int16")return new Int16Array(n,t.byte_offset,e);if(t.dtype==="float32")return new Float32Array(n,t.byte_offset,e);if(t.dtype==="float64")return new Float64Array(n,t.byte_offset,e);throw new Error(`shapefx: dtype ${t.dtype}`)}function Il(n,{shot:t=0,tMs:e=3e3}={}){return Pl||(Pl=Promise.all([n.data("replay.json"),n.data("replay.bin"),n.data("pca.json"),n.data("pca.bin")]).then(([i,s,r,o])=>{let a=Uu({R:Float32Array.from(i.grid.R_m),Z:Float32Array.from(i.grid.Z_m)}),l=i.shots[t],c=0;l.times_ms.forEach((A,U)=>{Math.abs(A-e)<Math.abs(l.times_ms[c]-e)&&(c=U)});let u=Io(s,l.psi),h=new Float64Array(wn*wn),d=c*wn*wn;for(let A=0;A<wn*wn;A++)h[A]=u[d+A]*l.psi.scale+l.psi.value_offset;let f=l.scorer_truth.lcfs,p=Io(s,f),v=f.shape[1],g=p.slice(c*v*2,(c+1)*v*2),m={};l.scorer_truth.cons_names.forEach((A,U)=>m[A]=l.scorer_truth.cons[U][c]);let _={};l.scorer_truth.cons_names.forEach((A,U)=>{let L=[];i.shots.forEach(k=>k.scorer_truth.cons[U].forEach(I=>I!==null&&L.push(I)));let N=L.reduce((k,I)=>k+I,0)/L.length;_[A]=L.reduce((k,I)=>k+(I-N)*(I-N),0)/L.length});let y=Io(o,r.mean),x=Io(o,r.components),w=r.components.shape[0],S=Float64Array.from(y),T=[];for(let A=0;A<w;A++){let U=new Float64Array(wn*wn);for(let L=0;L<wn*wn;L++)U[L]=x[A*wn*wn+L]*wn;T.push(U)}let E=r.replay_coefficients[l.file],b=Io(o,(E.truth.dtype,E.truth)),M=new Float64Array(w);for(let A=0;A<w;A++)M[A]=b[c*w+A]/wn;return{grid:a,shot:{id:l.id,file:l.file,ipSign:l.ip_sign},frame:{psi:h,lcfs:g,cons:m,t_ms:l.times_ms[c],index:c},pca:{mean:S,comps:T,coef:M,K:w},varCons:_,consNames:l.scorer_truth.cons_names}}),Pl)}var kl=["R_axis","Z_axis","kappa","tri_top","tri_bot","volume","li"],Lb=[.99,.98,.96,.93];function Ub(n,t){let e=null,i=0;for(let s of n){if(!s.closed||s.length<12||!_e(s,t.R,t.Z))continue;let r=0,o=s.length>>1;for(let a=0,l=o-1;a<o;l=a++)r+=s[2*l]*s[2*a+1]-s[2*a]*s[2*l+1];Math.abs(r)>i&&(i=Math.abs(r),e=s)}return e}function S0(n,t,e,i){let s=[0,0];for(let c=0;c<30;c++){He(n,t,e,i,s);let u=.004,h=[0,0],d=[0,0];He(n,t,e+u,i,h),He(n,t,e-u,i,d);let f=(h[0]-d[0])/(2*u),p=(h[1]-d[1])/(2*u);He(n,t,e,i+u,h),He(n,t,e,i-u,d);let v=(h[1]-d[1])/(2*u),g=f*v-p*p;if(!g)break;let m=(v*s[0]-p*s[1])/g,_=(-p*s[0]+f*s[1])/g,y=Math.min(1,.03/Math.max(1e-9,Math.hypot(m,_)));if(e-=m*y,i-=_*y,Math.hypot(m,_)<1e-7)break}He(n,t,e,i,s);let r=.004,o=[0,0],a=[0,0];He(n,t,e+r,i,o),He(n,t,e-r,i,a);let l=[(o[0]-a[0])/(2*r),(o[1]-a[1])/(2*r)];return He(n,t,e,i+r,o),He(n,t,e,i-r,a),l.push((o[1]-a[1])/(2*r)),{R:e,Z:i,psi:me(n,t,e,i),H:l}}function T0(n,t,e){let i=n.n,s=e.length>>1,r=1/0,o=0;for(let m=0;m<n.m;m++)for(let _=0;_<i;_++){let y=m*i+_;t[y]<r&&_e(e,n.R[_],n.Z[m])&&(r=t[y],o=y)}let a=S0(t,n,n.R[o%i],n.Z[o/i|0]),l=1/0,c=0,u=[0,0];for(let m=0;m<s;m++){He(t,n,e[2*m],e[2*m+1],u);let _=Math.hypot(u[0],u[1]);_<l&&(l=_,c=m)}let h=S0(t,n,e[2*c],e[2*c+1]),d=new Float64Array(i*n.m),f=new Float64Array(i*n.m),p=new Float64Array(i*n.m),v=(m,_)=>{let y=[0,0];He(_,n,m.R,m.Z,y);let[x,w,S]=m.H,T=x*S-w*w,E=-(S*y[0]-w*y[1])/T,b=-(-w*y[0]+x*y[1])/T;return{R:m.R+E,Z:m.Z+b,psi:m.psi+me(_,n,m.R,m.Z)}};function g(m,{li:_=!0}={}){let y=t,x=a,w=h;if(m){for(let A=0;A<p.length;A++)p[A]=t[A]+m[A];y=p,x=v(a,m),w=v(h,m)}let S=0,T=null;for(let A of Lb)if(S=x.psi+A*(w.psi-x.psi),T=Ub(Ve(y,i,n.m,S,n),x),T)break;if(!T)return{ok:!1,lcfs:new Float32Array(0),axis:x,xpt:w,field:y,level:S,vals:null};let E=Ns(T,x),b=0;if(_){Xp(y,n,d,f);let A=0,U=0,L=Math.min(x.psi,S),N=Math.max(x.psi,S);for(let $=1;$<n.m-1;$++){let K=n.Z[$];if(!(K<E.Zmin||K>E.Zmax))for(let ct=1;ct<i-1;ct++){let Y=$*i+ct,st=y[Y];if(st<L||st>N)continue;let F=n.R[ct];if(F<E.Rmin||F>E.Rmax||!_e(T,F,K))continue;let X=(d[Y]*d[Y]+f[Y]*f[Y])/(F*F);A+=X*F,U+=F}}let k=T.length>>1,I=0,O=0;for(let $=0,K=k-1;$<k;K=$++){let ct=Math.hypot(T[2*$]-T[2*K],T[2*$+1]-T[2*K+1]),Y=T[2*$];He(y,n,Y,T[2*$+1],u),I+=Math.hypot(u[0],u[1])/Y*ct,O+=ct}let H=I/O;b=U>0?A/U/(H*H):0}let M=Float64Array.from([x.R,x.Z,E.kappa,E.deltaU,E.deltaL,E.volume,b]);return{ok:!0,lcfs:T,axis:x,xpt:w,field:y,level:S,vals:M,shape:E}}return{evaluate:g,axis:a,xpt:h}}var zr=65*65;function ko(n,t){let e=n.map(o=>Float64Array.from(o)),i=Array.from({length:t},(o,a)=>Float64Array.from({length:t},(l,c)=>a===c?1:0));for(let o=0;o<60;o++){let a=0;for(let l=0;l<t;l++)for(let c=l+1;c<t;c++)a+=e[l][c]*e[l][c];if(a<1e-22)break;for(let l=0;l<t;l++)for(let c=l+1;c<t;c++){if(Math.abs(e[l][c])<1e-300)continue;let u=(e[c][c]-e[l][l])/(2*e[l][c]),h=Math.sign(u||1)/(Math.abs(u)+Math.sqrt(u*u+1)),d=1/Math.sqrt(h*h+1),f=h*d;for(let p=0;p<t;p++){let v=e[p][l],g=e[p][c];e[p][l]=d*v-f*g,e[p][c]=f*v+d*g}for(let p=0;p<t;p++){let v=e[l][p],g=e[c][p];e[l][p]=d*v-f*g,e[c][p]=f*v+d*g}for(let p=0;p<t;p++){let v=i[p][l],g=i[p][c];i[p][l]=d*v-f*g,i[p][c]=f*v+d*g}}}let s=e.map((o,a)=>o[a]),r=s.map((o,a)=>Float64Array.from(i.map(l=>l[a])));return{vals:s,vecs:r}}function A0(n,t){let e=t.length,i=n.map((r,o)=>[...r,t[o]]);for(let r=0;r<e;r++){let o=r;for(let a=r+1;a<e;a++)Math.abs(i[a][r])>Math.abs(i[o][r])&&(o=a);[i[r],i[o]]=[i[o],i[r]];for(let a=r+1;a<e;a++){let l=i[a][r]/i[r][r];for(let c=r;c<=e;c++)i[a][c]-=l*i[r][c]}}let s=new Float64Array(e);for(let r=e-1;r>=0;r--){let o=i[r][e];for(let a=r+1;a<e;a++)o-=i[r][a]*s[a];s[r]=o/i[r][r]}return s}var zs=(n,t)=>n.reduce((e,i,s)=>e+i*t[s],0),E0=n=>{let t=Math.sqrt(zs(n,n))||1;return n.map(e=>e/t)};function Hr(n,t,e=new Float64Array(zr)){e.fill(0);for(let i=0;i<t.length;i++){let s=t[i];if(!s)continue;let r=n.comps[i];for(let o=0;o<zr;o++)e[o]+=s*r[o]}return e}function Ll(n,{h:t=.002,kCheap:e=5,aspect:i=5}={}){let{grid:s,frame:r,pca:o}=n,a=o.K,l=T0(s,r.psi,r.lcfs),c=l.evaluate(null),u=kl.map(()=>new Float64Array(a)),h=new Float64Array(zr);for(let k=0;k<a;k++){let I=o.comps[k];for(let $=0;$<zr;$++)h[$]=t*I[$];let O=l.evaluate(h);for(let $=0;$<zr;$++)h[$]=-t*I[$];let H=l.evaluate(h);for(let $=0;$<7;$++)u[$][k]=O.ok&&H.ok?(O.vals[$]-H.vals[$])/(2*t):0}let d=kl.map(k=>Math.sqrt(n.varCons[k]||1)),f=Array.from({length:a},()=>new Float64Array(a));for(let k=0;k<7;k++)for(let I=0;I<a;I++)for(let O=0;O<a;O++)f[I][O]+=u[k][I]*u[k][O]/(d[k]*d[k]);let p=E0(Array.from(u[2])),v=Array.from({length:e},(k,I)=>Array.from({length:e},(O,H)=>f[I][H])),g=ko(v,e),m=0;g.vals.forEach((k,I)=>k<g.vals[m]&&(m=I));let _=new Array(a).fill(0);for(let k=0;k<e;k++)_[k]=g.vecs[m][k];let y=zs(_,p);_=E0(_.map((k,I)=>k-y*p[I])),_[0]<0&&(_=_.map(k=>-k));let x=(k,I)=>{let O=0;for(let H=0;H<a;H++)for(let $=0;$<a;$++)O+=k[H]*f[H][$]*I[$];return O},w=[[x(_,_),x(_,p)],[x(p,_),x(p,p)]],S=ko(w,2),T=Math.max(...S.vals),E=Math.min(...S.vals),b=Math.max(1e-12,(T-i*i*E)/(i*i-1)),M=[[w[0][0]+b,w[0][1]],[w[1][0],w[1][1]+b]],A=f.map((k,I)=>k.map((O,H)=>O+(I===H?b:0))),U=kl.map((k,I)=>({name:k,j:[zs(u[I],_)/d[I],zs(u[I],p)/d[I]]})),L=Hr(o,_),N=Hr(o,p);return{shaper:l,base:c,J:u,sig:d,G:f,M:A,a:b,u1:_,u2:p,f1:L,f2:N,slice:{G2:w,M2:M,rows:U},kappaSens:[zs(u[2],_),zs(u[2],p)]}}function R0(n,t,e,i,{steps:s=3,close:r=.6,h:o=.002}={}){let{pca:a}=n,l=a.K,c=t.shaper,u=new Float64Array(zr),h=g=>c.evaluate(Hr(a,g,u),{li:!1}),d=[],f=Float64Array.from(e),p=h(f);d.push({dc:Float64Array.from(f),kappa:p.vals[2],lcfs:Float32Array.from(p.lcfs)});let v=null;for(let g=0;g<s;g++){let m=new Float64Array(l);for(let w=0;w<l;w++){let S=Float64Array.from(f);S[w]+=o;let T=Float64Array.from(f);T[w]-=o,m[w]=(h(S).vals[2]-h(T).vals[2])/(2*o)}let _=p.vals[2]-i;if(v===null){let w=A0(t.M.map(T=>Array.from(T)),Array.from(m));v=zs(m,w)*(1-r)/r}let y=t.M.map((w,S)=>Array.from(w,(T,E)=>v*T+m[S]*m[E])),x=A0(y,Array.from(m,w=>-w*_));f=f.map((w,S)=>w+x[S]),p=h(f),d.push({dc:Float64Array.from(f),kappa:p.vals[2],lcfs:Float32Array.from(p.lcfs)})}return d}var Lo=[.15,.3,.45,.6,.75,.9],Uo=[1.06,1.16,1.32,1.55,1.85,2.25],Vr=class{constructor(t,e,i){this.grid=t;let s=Math.min(e.w/(i.R1-i.R0),e.h/(i.Z1-i.Z0));this.s=s;let r=(i.R1-i.R0)*s,o=(i.Z1-i.Z0)*s;this.rect={x:e.x+(e.w-r)/2,y:e.y+(e.h-o)/2,w:r,h:o},this.box=i,this._err=document.createElement("canvas"),this._err.width=t.n,this._err.height=t.m,this._errG=this._err.getContext("2d"),this._img=this._errG.createImageData(t.n,t.m)}px(t){return this.rect.x+(t-this.box.R0)*this.s}py(t){return this.rect.y+(this.box.Z1-t)*this.s}path(t,e,i=!0){t.beginPath();let s=e.length>>1;for(let r=0;r<s;r++){let o=this.px(e[2*r]),a=this.py(e[2*r+1]);r?t.lineTo(o,a):t.moveTo(o,a)}i&&t.closePath()}clip(t){let e=this.rect;t.beginPath(),t.rect(e.x,e.y,e.w,e.h),t.clip()}levels(t,e,i,s,r,{color:o,width:a=1.4,alpha:l=.5,dash:c=null}){let u=this.grid;r.save(),r.strokeStyle=o,r.lineWidth=a,r.globalAlpha*=l,r.lineJoin="round",c&&r.setLineDash(c);for(let h of s){let d=e.psi+h*(i.psi-e.psi);for(let f of Ve(t,u.n,u.m,d,u))this.path(r,f,f.closed),r.stroke()}r.restore()}boundary(t,e,i,{width:s=2.4,glow:r=.35,alpha:o=1,fill:a=0}={}){!e||e.length<6||o<=.002||(t.save(),t.globalAlpha*=o,a>0&&(this.path(t,e),t.fillStyle=pt(i,a),t.fill()),t.globalCompositeOperation="lighter",this.path(t,e),t.lineJoin="round",t.strokeStyle=pt(i,r*.5),t.lineWidth=s*5,t.stroke(),t.strokeStyle=pt(i,r),t.lineWidth=s*2.2,t.stroke(),t.globalCompositeOperation="source-over",t.strokeStyle=i,t.lineWidth=s,t.stroke(),t.restore())}errorWash(t,e,i,s,r=1){if(r<=.002)return;let{n:o,m:a}=this.grid,l=this._img.data,c=parseInt(s.slice(1),16),u=c>>16&255,h=c>>8&255,d=c&255;for(let _=0;_<a;_++)for(let y=0;y<o;y++){let x=Math.min(1,Math.abs(e[_*o+y])/i),w=4*((a-1-_)*o+y);l[w]=u,l[w+1]=h,l[w+2]=d,l[w+3]=Math.round(255*Math.pow(x,.9))}this._errG.putImageData(this._img,0,0);let f=this.grid,p=this.px(f.Rmin-f.dR/2),v=this.px(f.Rmax+f.dR/2),g=this.py(f.Zmax+f.dZ/2),m=this.py(f.Zmin-f.dZ/2);t.save(),this.clip(t),t.globalAlpha*=r,t.globalCompositeOperation="lighter",t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(this._err,p,g,v-p,m-g),t.restore()}},Ul=class{constructor(t){this.rect=t,this.c=document.createElement("canvas"),this.g=this.c.getContext("2d"),this.ratio=0}ensure(t,e){if(this.ratio===t&&this.ok)return;let i=this.rect;this.c.width=Math.ceil(i.w*t),this.c.height=Math.ceil(i.h*t),this.g.setTransform(t,0,0,t,-i.x*t,-i.y*t),this.g.clearRect(i.x,i.y,i.w,i.h),e(this.g),this.ratio=t,this.ok=!0}invalidate(){this.ok=!1}draw(t,e=1){if(e<=.002)return;let i=this.rect;t.save(),t.globalAlpha*=e,t.drawImage(this.c,i.x,i.y,i.w,i.h),t.restore()}},Dl="Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics";var ln=8e-4,Fl=8,Ot={x:1150,y:132,s:352},an={x:Ot.x+Ot.s/2,y:Ot.y+Ot.s/2},Hs=Ot.s/2/ln,Do={x:572,y:92,w:420,h:640},Db={R0:.96,R1:2.44,Z0:-1.42,Z1:1.42},Fb=["R axis","Z axis","\u03BA","\u03B4 top","\u03B4 bot","V","l\u1D62"],Gr=[.62*ln,0];function Nb(n){let t=12345,e=()=>(t=t*1103515245+12345&2147483647)/2147483647,i=[];for(;i.length<n;){let s=Math.max(1e-6,e()),r=Math.sqrt(-2*Math.log(s))*.42*ln,o=2*Math.PI*e(),a=r*Math.cos(o),l=r*Math.sin(o);Math.abs(a)<.96*ln&&Math.abs(l)<.96*ln&&i.push([a,l])}return i}function Fo(n,t,e){return n[0][0]*t*t+2*n[0][1]*t*e+n[1][1]*e*e}var C0={id:"metric",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.ready=!1,this.dots=Nb(150),this.v.set("hx",Gr[0],{instant:!0}),this.v.set("hy",Gr[1],{instant:!0}),this.v.set("show",1,{instant:!0}),this.v.set("read",1,{instant:!0}),this.truthCache=new Ul({x:Do.x-10,y:Do.y-10,w:Do.w+20,h:Do.h+20}),this.pinkKey="";let e=this.cv.canvas;return this._down=i=>{if(this.step>1||!this.ready)return;let s=this.cv.toDesign(i);if(!(s.x<Ot.x-24||s.x>Ot.x+Ot.s+24||s.y<Ot.y-24||s.y>Ot.y+Ot.s+24)){i.preventDefault(),this.timers.clear(),this.drag=i.pointerId;try{e.setPointerCapture(i.pointerId)}catch{}this.moveHandle(s)}},this._move=i=>{let s=this.cv.toDesign(i),r=this.step<=1&&s.x>Ot.x-24&&s.x<Ot.x+Ot.s+24&&s.y>Ot.y-24&&s.y<Ot.y+Ot.s+24;e.style.cursor=this.drag!==void 0?"grabbing":r?"grab":"default",this.drag===i.pointerId&&(i.preventDefault(),this.moveHandle(s))},this._up=i=>{if(this.drag===i.pointerId){this.drag=void 0;try{e.releasePointerCapture(i.pointerId)}catch{}}},document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Il(t).then(i=>{this.D=i,this.Mx=Ll(i),this.view=new Vr(i.grid,Do,Db),this.truthCache.rect={x:this.view.rect.x-12,y:this.view.rect.y-12,w:this.view.rect.w+24,h:this.view.rect.h+24},this.base=this.Mx.base,this.pink=new Float64Array(i.grid.n*i.grid.m),this.delta=new Float64Array(i.grid.n*i.grid.m);let{M2:s}=this.Mx.slice;this.M2=s,this.costD2=Fo(s,0,ln),this.ready=!0,this.loop.dirty=!0}).catch(i=>console.warn("metric: data",i))},moveHandle(n){let t=Ut((n.x-an.x)/Hs,-ln,ln),e=Ut((an.y-n.y)/Hs,-ln,ln);this.v.set("hx",t,{instant:!0}),this.v.set("hy",e,{instant:!0}),this.loop.dirty=!0},enter(){let n=this.cv.canvas;n.addEventListener("pointerdown",this._down),n.addEventListener("pointermove",this._move),n.addEventListener("pointerup",this._up),n.addEventListener("pointercancel",this._up),this.loop.dirty=!0,this.loop.start()},leave(){let n=this.cv.canvas;n.removeEventListener("pointerdown",this._down),n.removeEventListener("pointermove",this._move),n.removeEventListener("pointerup",this._up),n.removeEventListener("pointercancel",this._up),this.drag=void 0,this.loop.stop(),this.timers.clear(),this.v.finish()},resize(){this.cv.fit(),this.truthCache.invalidate(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear();let i=t||this.ctx.reducedMotion,s=(r,o=0)=>({dur:r,delay:o,instant:i});this.v.set("show",n<=1?1:0,s(700)),this.v.set("read",n===0?1:0,s(500)),this.v.set("glyph",n===1?1:0,s(700,n===1?300:0)),this.v.set("dots",n===1?1:0,s(600)),n===1?(!i&&e!==1&&this.v.set("morph",0,{instant:!0}),this.v.set("morph",1,s(1400,250))):this.v.set("morph",n===0?1:0,{instant:!0}),this.v.set("chart",n===2?1:0,s(700,n===2?350:0));for(let r=0;r<4;r++)this.v.set(`bar${r}`,n===2?1:0,s(900,n===2?600+r*220:0));n<=1&&this.drag===void 0&&Math.hypot(this.v.target("hx"),this.v.target("hy"))<.05*ln&&(this.v.set("hx",Gr[0],s(600)),this.v.set("hy",Gr[1],s(600))),this.loop.dirty=!0},demo(){if(this.step>1)return;this.timers.clear();let n=this.ctx.reducedMotion,t=(o,a,l)=>{this.v.set("hx",o,{dur:l,instant:n}),this.v.set("hy",a,{dur:l,instant:n}),this.loop.dirty=!0},e=.86*ln,i=[[0,0,500],[e,0,1300],[0,0,900],[0,e,1300],[0,0,900],[Gr[0],Gr[1],700]],s=0,r=[100,900,300,1100,300,0];i.forEach(([o,a,l],c)=>{this.timers.after(s,()=>t(o,a,l)),s+=l+r[c]})},draw(){let{g:n}=this.cv,t=this.T;if(this.cv.begin(),B(n,Dl,1560,856,{f:C(t,"body",18,400),color:t.ink3,align:"right"}),!this.ready)return;let e=this.v.get("show");e>.01&&(this.drawMap(n,e),this.drawPad(n,e));let i=this.v.get("read");i>.01&&this.drawReadouts(n,i*e);let s=this.v.get("glyph");s>.01&&this.drawGlyphs(n,s*e);let r=this.v.get("chart");r>.01&&this.drawChart(n,r)},updatePink(n,t){let e=`${n.toExponential(4)},${t.toExponential(4)}`;if(e===this.pinkKey)return;this.pinkKey=e;let{f1:i,f2:s,shaper:r}=this.Mx,o=this.delta,a=Fl*n,l=Fl*t;for(let u=0;u<o.length;u++)o[u]=a*i[u]+l*s[u];let c=r.evaluate(o,{li:!1});this.pink.set(c.field),this.pinkEv=c},drawMap(n,t){let e=this.T,i=this.view,s=this.cv.ratio,r=this.base;this.truthCache.ensure(s,h=>{h.save(),i.clip(h),i.levels(this.D.frame.psi,r.axis,r.xpt,Uo,h,{color:e.flux,width:1.2,alpha:.22}),i.levels(this.D.frame.psi,r.axis,r.xpt,Lo,h,{color:e.flux,width:1.3,alpha:.42}),h.restore(),i.boundary(h,r.lcfs,e.flux,{width:2,glow:.22,fill:.04})});let o=i.rect;n.save(),n.globalAlpha=t,n.strokeStyle=e.line,n.lineWidth=1,n.strokeRect(o.x-.5,o.y-.5,o.w+1,o.h+1),n.restore(),this.truthCache.draw(n,t);let a=this.v.get("hx"),l=this.v.get("hy");if(this.updatePink(a,l),!this.washScale){let h=0;for(let d of this.Mx.f2)h=Math.max(h,Math.abs(d));this.washScale=.8*h*Fl*ln}i.errorWash(n,this.delta,this.washScale,e.warn,.45*t);let c=this.pinkEv;n.save(),n.globalAlpha=t,i.clip(n),i.levels(this.pink,c.axis,c.xpt,Uo,n,{color:e.plasma,width:1.3,alpha:.4,dash:[5,5]}),i.levels(this.pink,c.axis,c.xpt,Lo,n,{color:e.plasma,width:1.3,alpha:.45,dash:[5,5]}),n.restore(),c.ok&&i.boundary(n,c.lcfs,e.plasma,{width:2.4,glow:.4,alpha:t}),wt(n,[["truth \u03C8",C(e,"body",20,600),e.flux],["  DIII-D ",C(e,"body",18,400),e.ink3],[`${this.D.shot.id}`,C(e,"mono",18,400),e.ink3],[` \xB7 ${Math.round(this.D.frame.t_ms)} ms`,C(e,"mono",18,400),e.ink3]],o.x,o.y-18,{alpha:t});let u=o.y+o.h+32;ut(n,o.x,u-6,o.x+26,u-6,e.plasma,2.4,t),wt(n,[["illustration",C(e,"body",20,600),e.plasma],[": truth + the error on the pad",C(e,"body",20,400),e.ink2]],o.x+38,u,{alpha:t}),wt(n,[["displacement exaggerated ",C(e,"body",18,400),e.ink3],[`\xD7${Fl}`,C(e,"mono",18,500),e.ink2],["  \xB7  ",C(e,"body",18,400),e.ink3],["wash",C(e,"body",18,500),e.warn],[" = pixel error",C(e,"body",18,400),e.ink3]],o.x+38,u+26,{alpha:t})},pp(n,t){return[an.x+n*Hs,an.y-t*Hs]},ellipse(n,t,e){let i=ko(t,2),[s,r]=i.vals;if(!(s>0&&r>0&&e>0))return!1;let o=Math.sqrt(e/s)*Hs,a=Math.sqrt(e/r)*Hs,l=Math.atan2(i.vecs[0][1],i.vecs[0][0]);return n.beginPath(),n.ellipse(an.x,an.y,Math.min(o,4e3),Math.min(a,4e3),-l,0,Math.PI*2),!0},drawPad(n,t){let e=this.T,i=this.v.get("hx"),s=this.v.get("hy"),r=this.v.get("morph"),o=this.v.get("dots"),a=this.v.get("glyph"),l=this.M2;B(n,"ERROR PAD",Ot.x,Ot.y-58,{f:C(e,"body",18,600),color:e.ink3,alpha:t}),B(n,"drag the handle",Ot.x+Ot.s,Ot.y-58,{f:C(e,"body",18,400),color:e.ink3,align:"right",alpha:t});let c=Ot.y-22;n.save(),n.globalAlpha=t,n.strokeStyle=e.ink2,n.lineWidth=1.6,n.beginPath(),n.arc(Ot.x+9,c-6,8,0,Math.PI*2),n.stroke(),n.strokeStyle=e.warn,n.lineWidth=2.2,n.beginPath(),n.ellipse(Ot.x+196,c-6,15,5.5,0,0,Math.PI*2),n.stroke(),n.restore(),B(n,"same pixel error",Ot.x+26,c,{f:C(e,"body",18,500),color:e.ink2,alpha:t}),B(n,"same cost in S",Ot.x+220,c,{f:C(e,"body",18,500),color:e.warn,alpha:t}),n.save(),n.globalAlpha=t,ie(n,Ot.x,Ot.y,Ot.s,Ot.s,10),n.fillStyle="rgba(255,255,255,0.025)",n.fill(),n.strokeStyle=e.line,n.lineWidth=1,n.stroke(),n.restore(),ut(n,Ot.x+8,an.y,Ot.x+Ot.s-8,an.y,e.lineStrong,1,t),ut(n,an.x,Ot.y+8,an.x,Ot.y+Ot.s-8,e.lineStrong,1,t),wt(n,[["d\u2081 ",C(e,"body",20,600),e.ink],["pixels change, shape stays",C(e,"body",18,400),e.ink2]],an.x,Ot.y+Ot.s+32,{alpha:t,align:"center"}),n.save(),n.translate(Ot.x-18,an.y),n.rotate(-Math.PI/2),wt(n,[["d\u2082 ",C(e,"body",20,600),e.ink],["elongation changes",C(e,"body",18,400),e.ink2]],0,0,{alpha:t,align:"center"}),n.restore(),B(n,`edge = ${(ln*1e3).toFixed(1)} mWb/rad RMS`,Ot.x+Ot.s,Ot.y+Ot.s+60,{f:C(e,"body",18,400),color:e.ink3,align:"right",alpha:t}),n.save(),ie(n,Ot.x,Ot.y,Ot.s,Ot.s,10),n.clip();let u=i*i+s*s,h=Math.max(u,(.06*ln)**2),d=Math.max(Fo(l,i,s),Fo(l,.06*ln,0)),f=[[(1-r)/h+r*l[0][0]/d,r*l[0][1]/d],[r*l[1][0]/d,(1-r)/h+r*l[1][1]/d]];if(o>.01){n.save(),n.globalCompositeOperation="lighter";for(let[m,_]of this.dots){let y=Fo(f,m,_),x=y<=1?0:Ut(Math.log(y)/Math.log(40),0,1),[w,S]=this.pp(m,_);n.globalAlpha=t*o*(.45+.4*x),n.fillStyle=x>.02?pt(e.warn,.35+.65*x):e.ink3,n.beginPath(),n.arc(w,S,2.2+2.4*x,0,Math.PI*2),n.fill()}n.restore()}if(a>.01){let m=this.Mx.slice.rows,_=this.Mx.a/7;m.forEach((y,x)=>{let[w,S]=y.j,T=[[_+w*w,w*S],[w*S,_+S*S]],E=Ut(a*1.6-x*.09,0,1);this.ellipse(n,T,d)&&(n.strokeStyle=pt(e.warn,.32*E*t),n.lineWidth=1.2,n.stroke())})}n.beginPath(),n.arc(an.x,an.y,Math.sqrt(h)*Hs,0,Math.PI*2),n.strokeStyle=pt("#b9b6ad",.85*t*(1-.35*o)),n.lineWidth=1.6,n.stroke(),this.ellipse(n,f,1)&&(n.save(),n.globalCompositeOperation="lighter",n.strokeStyle=pt(e.warn,.22*t*r),n.lineWidth=7,n.stroke(),n.restore(),n.strokeStyle=r>.98?pt(e.warn,t):pt(e.warn,t*(.4+.6*r)),n.lineWidth=2.4,n.stroke()),n.restore();let[p,v]=this.pp(i,s);ut(n,an.x,an.y,p,v,e.plasma,1.5,.6*t,[3,4]),n.save(),n.globalAlpha=t,n.globalCompositeOperation="lighter";let g=n.createRadialGradient(p,v,0,p,v,26);g.addColorStop(0,pt(e.plasma,.55)),g.addColorStop(1,pt(e.plasma,0)),n.fillStyle=g,n.beginPath(),n.arc(p,v,26,0,Math.PI*2),n.fill(),n.restore(),n.save(),n.globalAlpha=t,n.fillStyle=e.plasmaHot,n.beginPath(),n.arc(p,v,6,0,Math.PI*2),n.fill(),n.strokeStyle=e.ink,n.lineWidth=1.6,n.beginPath(),n.arc(p,v,12,0,Math.PI*2),n.stroke(),n.restore()},drawReadouts(n,t){let e=this.T,i=this.v.get("hx"),s=this.v.get("hy"),r=Ot.x,o=Ot.x+Ot.s,a=Ot.y+Ot.s+112,l=C(e,"body",20,500),c=C(e,"mono",24,600),u=Math.hypot(i,s)*1e3,h=this.Mx.kappaSens[0]*i+this.Mx.kappaSens[1]*s,d=Fo(this.M2,i,s)/this.costD2;B(n,"pixel error (RMS)",r,a,{f:l,color:e.ink2,alpha:t}),wt(n,[[u.toFixed(2),c,e.ink],[" mWb/rad",C(e,"body",18,400),e.ink3]],o,a,{align:"right",alpha:t}),ut(n,r,a+16,o,a+16,e.line,1,t),B(n,"\u0394\u03BA  (elongation)",r,a+50,{f:l,color:e.ink2,alpha:t});let f=Math.abs(h)<5e-4?"0.000":`${h>=0?"+":"\u2212"}${Math.abs(h).toFixed(3)}`;B(n,f,o,a+50,{f:c,color:Math.abs(h)>.006?e.warn:e.ink,align:"right",alpha:t}),ut(n,r,a+66,o,a+66,e.line,1,t),B(n,"cost in S",r,a+100,{f:l,color:e.ink2,alpha:t});let p=r+128,v=o-p;n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.07)",ie(n,p,a+86,v,14,7),n.fill();let g=Ut(d,0,1);g>.002&&(n.globalCompositeOperation="lighter",n.fillStyle=pt(e.warn,.9),ie(n,p,a+86,Math.max(6,v*g),14,7),n.fill()),n.restore(),B(n,"readouts use the real (not exaggerated) error",o,a+138,{f:C(e,"body",18,400),color:e.ink3,align:"right",alpha:t})},drawGlyphs(n,t){let e=this.T,i=this.Mx.slice.rows,s=this.Mx.a/7,r=i.reduce((c,u)=>c+u.j[0]**2+u.j[1]**2,0),o=Ot.y+Ot.s+108,a=1006,l=554/7;wt(n,[["one term per scorer number",C(e,"body",20,600),e.ink],["  \xB7  share of M in this slice",C(e,"body",18,400),e.ink3]],a,o,{alpha:t}),i.forEach((c,u)=>{let h=t*Ut(t*1.6-u*.09,0,1);if(h<.01)return;let d=a+l*(u+.5),f=o+62,p=27;n.save(),n.globalAlpha=h,n.strokeStyle=e.line,n.lineWidth=1,n.beginPath(),n.arc(d,f,p+4,0,Math.PI*2),n.stroke();let[v,g]=c.j,m=[[s+v*v,v*g],[v*g,s+g*g]],_=ko(m,2),y=Math.min(..._.vals),x=_.vals.indexOf(y),w=Math.min(14,Math.sqrt(Math.max(..._.vals)/y)),S=Math.atan2(_.vecs[x][1],_.vecs[x][0]);n.beginPath(),n.ellipse(d,f,p,p/w,-S,0,Math.PI*2),n.globalCompositeOperation="lighter",n.strokeStyle=pt(e.warn,.85),n.lineWidth=1.8,n.stroke(),n.restore(),B(n,Fb[u],d,f+58,{f:C(e,"body",20,600),color:e.ink,align:"center",alpha:h});let T=100*(v*v+g*g)/r,E=T>=1?`${Math.round(T)}%`:"<1%";B(n,E,d,f+84,{f:C(e,"mono",18,500),color:e.ink3,align:"center",alpha:h})})},drawChart(n,t){let e=this.T,i=(1-t)*16,s=600,r=[{x:872,w:316},{x:1222,w:316}],o=[{y:236,h:150},{y:412,h:150}];B(n,"GAIN IN S, UNITS OF 10\u207B\u2074",s,108+i,{f:C(e,"body",18,600),color:e.ink3,alpha:t});let a=C(e,"body",22,600);wt(n,[["base features",a,e.ink],[" (91)",C(e,"mono",20,500),e.ink2]],r[0].x+20,176+i,{alpha:t}),wt(n,[["+ current-history",a,e.coil],[" (789)",C(e,"mono",20,500),e.ink2]],r[1].x+20,176+i,{alpha:t}),wt(n,[["features: ",C(e,"body",18,400),e.ink3],["+11",C(e,"mono",18,600),e.good]],r[1].x+20,204+i,{alpha:t}),B(n,"MSE loss",s,o[0].y+70+i,{f:a,color:e.ink,alpha:t}),B(n,"on coefficients",s,o[0].y+98+i,{f:C(e,"body",18,400),color:e.ink3,alpha:t}),B(n,"metric loss",s,o[1].y+70+i,{f:a,color:e.ink,alpha:t}),wt(n,[["loss: ",C(e,"body",18,400),e.ink3],["+12",C(e,"mono",18,600),e.good]],s,o[1].y+98+i,{alpha:t});let l=[{r:0,c:0,v:0,s:"0",note:"baseline"},{r:0,c:1,v:11,s:"+11",note:"features only"},{r:1,c:0,v:12,s:"+12",note:"loss only"},{r:1,c:1,v:23,s:"+23",note:"both"}],c=24;l.forEach((y,x)=>{let w=r[y.c].x,S=r[y.c].w,T=o[y.r].y+i,E=o[y.r].h,b=this.v.get(`bar${x}`);n.save(),n.globalAlpha=t,ie(n,w,T,S,E,12),n.fillStyle=y.v>0?pt(e.good,.03+.04*b*(y.v/c)):"rgba(255,255,255,0.025)",n.fill(),n.strokeStyle=y.v===23?pt(e.good,.35*b):e.line,n.lineWidth=1,n.stroke(),n.restore();let M=y.v*b,A=y.v===0?"0":`+${Math.round(M)}`;B(n,y.v===0||b>.995?y.s:A,w+22,T+72,{f:C(e,"mono",52,600),color:y.v?e.good:e.ink2,alpha:t}),B(n,y.note,w+S-20,T+40,{f:C(e,"body",18,400),color:e.ink3,align:"right",alpha:t});let U=w+22,L=S-44,N=T+E-36;if(n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",ie(n,U,N,L,12,6),n.fill(),y.v>0&&b>.01){n.globalCompositeOperation="lighter";let k=L*y.v*b/c,I=n.createLinearGradient(U,0,U+k,0);if(I.addColorStop(0,pt(e.good,.55)),I.addColorStop(1,pt(e.good,.95)),n.fillStyle=I,ie(n,U,N,Math.max(8,k),12,6),n.fill(),y.v===23){let O=U+L*12*b/c;n.globalCompositeOperation="source-over",n.fillStyle=e.bg,n.fillRect(O-1.5,N-1,3,14)}}if(n.restore(),y.v===23){let k=t*Ut((b-.85)/.15,0,1),I=150,O=w+S-20-I,H=T+58;n.save(),n.globalAlpha=k,ie(n,O,H,I,34,17),n.fillStyle=pt(e.good,.1),n.fill(),n.strokeStyle=pt(e.good,.6),n.lineWidth=1.2,n.stroke(),n.restore(),B(n,"\u2248 additive",O+I/2,H+24,{f:C(e,"body",19,600),color:e.good,align:"center",alpha:k})}});let u=t*Ut((this.v.get("bar3")-.5)/.5,0,1),h=640+i,d="loss idea + slow current-history features: ",f="pshishkin's public repository",p=C(e,"body",21,400),v=C(e,"body",21,600);n.save(),n.font=p;let g=n.measureText(d).width;n.font=v;let m=n.measureText(f).width;n.restore();let _=g+m+56;n.save(),n.globalAlpha=u,ie(n,s,h,_,50,25),n.fillStyle="rgba(255,255,255,0.04)",n.fill(),n.strokeStyle=e.lineStrong,n.lineWidth=1.2,n.stroke(),n.fillStyle=e.coil,n.beginPath(),n.arc(s+24,h+25,5,0,Math.PI*2),n.fill(),n.restore(),wt(n,[[d,p,e.ink2],[f,v,e.ink]],s+42,h+32,{alpha:u}),B(n,"credit: material another participant published openly during the competition",s,h+88,{f:C(e,"body",18,400),color:e.ink3,alpha:u})}};var $u=8,Ob=.015,Bb=.3,zb={x:566,y:92,w:400,h:640},Hb={R0:.96,R1:2.44,Z0:-1.42,Z1:1.42},cn=1100,Vs=1540,P0={id:"correct",steps:3,mount(n,t){return this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.ready=!1,this.v.set("main",1,{instant:!0}),this.dimCache=null,document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Il(t).then(e=>{this.D=e;let i=Ll(e);this.Mx=i,this.view=new Vr(e.grid,zb,Hb);let s=i.base.vals[2];this.k0=s,this.kShow0=e.frame.cons.kappa;let r=Ob/i.kappaSens[1],o=i.u2.map(a=>a*r);this.kMap0=i.shaper.evaluate(Hr(e.pca,o),{li:!1}).vals[2],this.kDirect=s+Bb*(this.kMap0-s),this.iters=R0(e,i,o,this.kDirect,{steps:3,close:.6}),this.fld=new Float64Array(e.grid.n*e.grid.m),this.dispKey=-1,this.truthLcfs=i.base.lcfs,this.ready=!0,this.loop.dirty=!0}).catch(e=>console.warn("correct: data",e))},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish()},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear();let i=t||this.ctx.reducedMotion,s=(r,o=0)=>({dur:r,delay:o,instant:i});this.v.set("cards",1,s(500)),this.v.set("truth",1,s(600,n===0&&!i?1100:0)),this.v.set("trace",n===1?1:0,s(600)),this.v.set("dim",n===2?1:0,s(800)),this.v.set("gain",n===2?1:0,s(700,n===2?300:0));for(let r=0;r<3;r++)this.v.set(`g${r}`,n===2?1:0,s(800,n===2?500+r*220:0));n===0?this.v.set("gn",0,s(700)):n===1?i||e>1?this.v.set("gn",3,{instant:!0}):this.playGN(500):this.v.set("gn",3,s(600)),this.loop.dirty=!0},playGN(n=300){let t=this.ctx.reducedMotion;this.v.set("gn",0,{instant:!0});for(let e=1;e<=3;e++)this.timers.after(n+(e-1)*(t?700:950),()=>{this.v.set("gn",e,{dur:620,instant:t}),this.loop.dirty=!0});this.loop.dirty=!0},demo(){if(!(this.step!==1&&this.step!==0)){if(this.timers.clear(),this.step===0){this.v.set("truth",0,{instant:!0}),this.v.set("truth",1,{dur:600,delay:900,instant:this.ctx.reducedMotion}),this.loop.dirty=!0;return}this.playGN(700)}},stateAt(n){let t=this.iters,e=Ut(Math.floor(n),0,t.length-2),i=Ut(n-e,0,1),s=t[e],r=t[e+1],o=s.dc.map((l,c)=>$u*zt(l,r.dc[c],i)),a=zt(s.kappa,r.kappa,i);return{dc:o,kappa:a}},display(n){let t=Math.round(n*1e3);if(t===this.dispKey)return this.disp;this.dispKey=t;let e=this.stateAt(n),i=this.Mx.shaper.evaluate(Hr(this.D.pca,e.dc,this.fld),{li:!1});return this.disp={kappa:e.kappa,field:Float64Array.from(i.field),ev:{ok:i.ok,lcfs:i.lcfs,axis:i.axis,xpt:i.xpt,shape:i.shape}},this.disp},kShow(n){return this.kShow0+(n-this.k0)},draw(){let{g:n}=this.cv,t=this.T;if(this.cv.begin(),B(n,Dl,1560,856,{f:C(t,"body",18,400),color:t.ink3,align:"right"}),!this.ready)return;let e=this.v.get("dim"),i=this.v.get("gn"),s=this.display(i);this.drawMap(n,s,1-.62*e),this.drawCards(n,s,1-.7*e);let r=this.v.get("trace");r>.01&&this.drawTrace(n,r,i);let o=this.v.get("gain");o>.01&&this.drawGain(n,o)},drawMap(n,t,e){let i=this.T,s=this.view,r=s.rect,o=t.ev,a=this.v.get("truth");if(n.save(),n.globalAlpha=e,n.strokeStyle=i.line,n.lineWidth=1,n.strokeRect(r.x-.5,r.y-.5,r.w+1,r.h+1),s.clip(n),s.levels(t.field,o.axis,o.xpt,Uo,n,{color:i.plasma,width:1.2,alpha:.22}),s.levels(t.field,o.axis,o.xpt,Lo,n,{color:i.plasma,width:1.3,alpha:.4}),n.restore(),a>.01&&(n.save(),n.globalAlpha=e*a*.85,s.path(n,this.truthLcfs),n.setLineDash([4,5]),n.strokeStyle=i.flux,n.lineWidth=1.5,n.stroke(),n.restore()),o.ok&&s.boundary(n,o.lcfs,i.plasma,{width:2.4,glow:.4,alpha:e,fill:.05}),o.ok){let c=o.shape,u=(c.Rmax-c.Rmin)*s.s,h=s.py(.5*(c.Zmax+c.Zmin)),d=_=>this.k0+$u*(_-this.k0),f=(c.Zmax-c.Zmin)*s.s,p=d(this.kDirect)*u,v=this.k0*u,g=r.x+r.w+26,m=g+30;if(this.arrow(n,g,h-f/2,h+f/2,i.plasma,e),this.arrow(n,m,h-p/2,h+p/2,i.coil,e),ut(n,s.px(c.Rmax)-40,h-f/2,g+8,h-f/2,i.plasma,1,.35*e,[2,4]),ut(n,s.px(c.Rmax)-40,h+f/2,g+8,h+f/2,i.plasma,1,.35*e,[2,4]),a>.01)for(let _ of[-1,1])ut(n,g-12,h+_*v/2,m+12,h+_*v/2,i.flux,2,e*a);B(n,"\u03BA",g+15,h-p/2-16,{f:C(i,"body",22,600),color:i.ink2,align:"center",alpha:e})}wt(n,[["the map",C(i,"body",20,600),i.plasma],["  DIII-D ",C(i,"body",18,400),i.ink3],[`${this.D.shot.id}`,C(i,"mono",18,400),i.ink3],[` \xB7 ${Math.round(this.D.frame.t_ms)} ms`,C(i,"mono",18,400),i.ink3]],r.x,r.y-18,{alpha:e});let l=r.y+r.h+32;ut(n,r.x,l-6,r.x+26,l-6,i.plasma,2.4,e),wt(n,[["illustration",C(i,"body",20,600),i.plasma],[": truth + a fixed error",C(i,"body",20,400),i.ink2]],r.x+38,l,{alpha:e}),wt(n,[["displacement exaggerated ",C(i,"body",18,400),i.ink3],[`\xD7${$u}`,C(i,"mono",18,500),i.ink2],["  \xB7  ",C(i,"body",18,400),i.ink3],["dashed",C(i,"body",18,500),i.flux],[" = truth",C(i,"body",18,400),i.ink3]],r.x+38,l+26,{alpha:e*Math.max(.6,a)})},arrow(n,t,e,i,s,r){ut(n,t,e+2,t,i-2,s,2.2,r),n.save(),n.globalAlpha=r,n.fillStyle=s;for(let[o,a]of[[e,1],[i,-1]])n.beginPath(),n.moveTo(t,o),n.lineTo(t-6,o+a*11),n.lineTo(t+6,o+a*11),n.closePath(),n.fill();n.restore()},drawCards(n,t,e){let i=this.T,s=this.v.get("truth"),r=this.kShow(t.kappa),o=this.kShow(this.kDirect),a=this.kShow0,l=(m,_,y,x,w)=>{n.save(),n.globalAlpha=e,ie(n,cn,m,Vs-cn,104,14),n.fillStyle=pt(_,.06),n.fill(),n.strokeStyle=pt(_,.45),n.lineWidth=1.2,n.stroke(),n.fillStyle=_,ie(n,cn,m+18,4,68,2),n.fill(),n.restore(),B(n,y,cn+26,m+40,{f:C(i,"body",21,600),color:_,alpha:e}),B(n,x,cn+26,m+72,{f:C(i,"body",18,400),color:i.ink3,alpha:e}),wt(n,[["\u03BA = ",C(i,"body",22,500),i.ink2],[w,C(i,"mono",40,600),i.ink]],Vs-24,m+68,{align:"right",alpha:e})};l(96,i.plasma,"read off the map","by the scorer\u2019s rules",r.toFixed(3)),l(220,i.coil,"direct head","separate net, inputs only",o.toFixed(3));let c=a-.006,u=a+.019,h=m=>zt(cn+20,Vs-20,(m-c)/(u-c)),d=420;ut(n,cn+10,d,Vs-10,d,i.lineStrong,1.5,e);let f=(m,_,y,x,w)=>{let S=h(m);ut(n,S,d-16,S,d+16,_,2.4,w),n.save(),n.globalAlpha=w,n.globalCompositeOperation="lighter",n.fillStyle=pt(_,.5),n.beginPath(),n.arc(S,d,5,0,Math.PI*2),n.fill(),n.restore(),B(n,y,S,x?d-28:d+42,{f:C(i,"body",18,600),color:_,align:"center",alpha:w})},p=h(r),v=h(o),g=Math.abs(p-v)<56;Math.abs(p-v)>22?(ut(n,Math.min(p,v),d+62,Math.max(p,v),d+62,i.warn,1.5,e*.9),ut(n,p,d+54,p,d+70,i.warn,1.5,e*.9),ut(n,v,d+54,v,d+70,i.warn,1.5,e*.9),wt(n,[["disagree by ",C(i,"body",18,400),i.ink3],[Math.abs(r-o).toFixed(3),C(i,"mono",18,600),i.warn]],.5*(p+v),d+94,{align:"center",alpha:e})):wt(n,[["agree within ",C(i,"body",18,500),i.good],[Math.max(.001,Math.abs(r-o)).toFixed(3),C(i,"mono",18,600),i.good]],.5*(p+v),d+94,{align:"center",alpha:e}),f(a,i.flux,"truth",!1,e*s),f(o,i.coil,g?"":"head",!0,e),f(r,i.plasma,g?"":"map",!0,e),g&&wt(n,[["head",C(i,"body",18,600),i.coil],[" \u2248 ",C(i,"body",18,500),i.ink3],["map",C(i,"body",18,600),i.plasma]],.5*(p+v),d-28,{align:"center",alpha:e})},drawTrace(n,t,e){let i=this.T,r=this.iters.map(v=>Math.abs(v.kappa-this.kDirect)*1e3),o=cn+60,a=Vs-20,l=590,c=740,u=Math.ceil(r[0]/2)*2+2,h=v=>zt(o,a,v/3),d=v=>zt(c,l,v/u);B(n,"RESIDUAL",cn,560,{f:C(i,"body",18,600),color:i.ink3,alpha:t}),wt(n,[["|\u03BA",C(i,"body",18,400),i.ink3],["map",C(i,"body",18,400),i.plasma],[" \u2212 \u03BA",C(i,"body",18,400),i.ink3],["head",C(i,"body",18,400),i.coil],["|  \xD710\u207B\xB3",C(i,"body",18,400),i.ink3]],cn+104,560,{alpha:t}),ut(n,o,c,a,c,i.lineStrong,1.2,t),ut(n,o,l-6,o,c,i.line,1,t);for(let v=0;v<=3;v++)B(n,String(v),h(v),c+26,{f:C(i,"mono",18,500),color:i.ink3,align:"center",alpha:t});B(n,"iteration",o-16,c+26,{f:C(i,"body",18,400),color:i.ink3,align:"right",alpha:t});let f=Ut(e,0,3);n.save(),n.globalAlpha=t,n.strokeStyle=i.good,n.lineWidth=2,n.beginPath();for(let v=0;v<=Math.floor(f);v++)v?n.lineTo(h(v),d(r[v])):n.moveTo(h(v),d(r[v]));let p=Math.floor(f);p<3&&n.lineTo(h(f),d(zt(r[p],r[p+1],on(f-p)))),n.stroke(),n.restore();for(let v=0;v<=3;v++){let g=t*Ut(f-v+1,0,1);g<.01||(n.save(),n.globalAlpha=g,n.fillStyle=v===0?i.warn:i.good,n.beginPath(),n.arc(h(v),d(r[v]),5.5,0,Math.PI*2),n.fill(),n.restore(),B(n,r[v].toFixed(1),v===3?h(v):h(v)+12,d(r[v])-(v===3?16:10),{f:C(i,"mono",18,500),color:i.ink2,alpha:g,align:v===3?"right":"left"}))}wt(n,[["prior: ",C(i,"body",20,400),i.ink3],["M",C(i,"mono",20,600),i.warn],["   \xB7   no label needed",C(i,"body",20,500),i.good]],cn,808,{alpha:t})},drawGain(n,t){let e=this.T,i=(1-t)*14,s=[{s:"+2.8",v:2.8,l:"one Gauss\u2013Newton step",sub:""},{s:"+1.4",v:1.4,l:"iterated, with the prior M",sub:""},{s:"+0.3",v:.3,l:"stronger direct heads",sub:"public board"}];n.save(),n.globalAlpha=t*.92,ie(n,cn-12,520+i,Vs-cn+32,290,16),n.fillStyle="#0a0c14",n.fill(),n.strokeStyle=e.line,n.lineWidth=1,n.stroke(),n.restore(),B(n,"WORTH, UNITS OF 10\u207B\u2074 OF S",cn,562+i,{f:C(e,"body",18,600),color:e.ink3,alpha:t});let r=cn+120,o=Vs-r-10;s.forEach((a,l)=>{let c=620+l*70+i,u=this.v.get(`g${l}`);B(n,a.s,cn,c+8,{f:C(e,"mono",34,600),color:e.good,alpha:t}),wt(n,[[a.l,C(e,"body",20,500),e.ink],[a.sub?`  ${a.sub}`:"",C(e,"body",18,400),e.ink3]],r,c-8,{alpha:t}),n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",ie(n,r,c+4,o,10,5),n.fill(),u>.01&&(n.globalCompositeOperation="lighter",n.fillStyle=pt(e.good,.9),ie(n,r,c+4,Math.max(8,o*a.v*u/3),10,5),n.fill()),n.restore()})}};var Nl=["F1A","F1B","F2A","F2B","F3A","F3B","F4A","F4B","F5A","F5B","F6A","F6B","F7A","F7B","F8A","F8B","F9A","F9B","ECOILA","Ip","bcoil"],Vb="Ip",Gb="F6A",Yu=(n,t,e)=>t==="Ip"?n.inputs.Ip_kA[e]:t==="bcoil"?n.inputs.bcoil_kA[e]:n.inputs.coil_currents[t][e];function Wb(n){let t=n.inputs.Ip_kA.map(Math.abs),e=Math.max(...t),i=t.map((s,r)=>[s,r]).filter(s=>s[0]>=.95*e).map(s=>s[1]);return i[Math.floor(i.length/2)]}function I0(n,t){let e=n.grid.R_m.map(Number),i=n.grid.Z_m.map(Number),s=e.length,r=i.length,o={R:e,Z:i},a=n.shots.map(h=>{let d=Wb(h),f=h.psi,p=new Int16Array(t,f.byte_offset+d*s*r*2,s*r),v=new Float32Array(s*r);for(let b=0;b<s*r;b++)v[b]=p[b]*f.scale+f.value_offset;let g=h.scorer_truth.lcfs,m=g.shape[1],_=new Float32Array(t,g.byte_offset+d*m*2*4,m*2).slice(),y=(b,M)=>{let A=(b-e[0])/(e[s-1]-e[0])*(s-1),U=(M-i[0])/(i[r-1]-i[0])*(r-1),L=Math.max(0,Math.min(s-2,Math.floor(A))),N=Math.max(0,Math.min(r-2,Math.floor(U))),k=A-L,I=U-N,O=(H,$)=>v[$*s+H];return O(L,N)*(1-k)*(1-I)+O(L+1,N)*k*(1-I)+O(L,N+1)*(1-k)*I+O(L+1,N+1)*k*I},x=0;for(let b=0;b<m;b++)x+=y(_[2*b],_[2*b+1]);x/=m;let w=Number(h.ip_sign)||1,S=new Float32Array(s*r);for(let b=0;b<s*r;b++)S[b]=w*(v[b]-x);let T=Nl.map(b=>Yu(h,b,d)),E=h.times_ms.map((b,M)=>[Yu(h,Vb,M),Yu(h,Gb,M)]);return{id:h.id,sign:w,frame:d,t:h.times_ms[d],nFrames:h.n_frames,D:S,lcfs:_,bars:T,pts:E}}),l=Nl.map((h,d)=>Math.max(...a.map(f=>Math.abs(f.bars[d])))||1),c=[];for(let h=1;h<=10;h++)c.push(.028*h,-.028*h);for(let h of a)h.lines=c.map(d=>({lv:d,polys:Ve(h.D,s,r,d,o)}));let u=n.coil_geometry.coil_name.map((h,d)=>({name:h,R:n.coil_geometry.coil_R[d],Z:n.coil_geometry.coil_Z[d],w:n.coil_geometry.coil_width[d],h:n.coil_geometry.coil_height[d]}));return{grid:o,n:s,m:r,shots:a,barScale:l,coils:u}}function k0(n){let t=Object.fromEntries(n.groups.map(l=>[l.block,l])),e=[{name:"coil history",blocks:["mag"]},{name:"currents now",blocks:["v1"]},{name:"slow drivers",blocks:["drv"]},{name:"coils \xF7 Ip",blocks:["ipn"]},{name:"time",blocks:["time"]},{name:"Thomson",blocks:["th1","tsc","tscm","tse","tsem","tsv"]},{name:"other",blocks:["phys","rec"]}],i=new Set(e.flatMap(l=>l.blocks)),s=n.groups.filter(l=>!i.has(l.block)).map(l=>l.block);s.length&&e[e.length-1].blocks.push(...s);let r=n.kept_raw_flag?String(n.kept_raw_flag).split(" ")[0]:"v1_sign_ip",o=e.map(l=>{let c=[],u=0,h=0;for(let d of l.blocks){let f=t[d];if(!f)continue;u+=f.n,h+=f.odd;for(let v of f.odd_columns||[])c.push(v===r?1:2);let p=f.n-(f.odd_columns||[]).length;for(let v=0;v<p;v++)c.push(0)}return{...l,n:u,odd:h,cells:c}}),a=n.training_set||{};return{bands:o,nFeatures:n.n_features,nOdd:n.n_odd,nFlipped:n.n_flipped_by_canonicalisation,flag:r,nShots:a.n_shots,nRev:a.n_reversed_ip,fracRev:a.fraction_reversed}}var Xb="#7a2cff",Gs="#a07cff",Zb="Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics",L0=430,U0=98,No=[770,1350],Ju=384,qb=646,Oo=54,ci=580,D0=176,Wr=11,Zi=9,Ol=24,F0=8,Bo={x:1100,y:128,s:440},Ku={x:1316,y:484,s:224},N0=1250,O0=260,Le=600,ju=1540,Qu=n=>Math.round(n).toLocaleString("en-US"),B0={id:"mirror",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.rep=null,this.mir=null,this.caches=null;let e=document.createElement("div");e.className="ui-toggle",e.style.cssText=`position:absolute;left:${No[0]}px;top:770px;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;`,e.innerHTML='<button type="button" data-m="0" aria-pressed="true">as recorded</button><button type="button" data-m="1" aria-pressed="false">reverse all currents</button>',e.addEventListener("mousedown",o=>o.preventDefault()),e.addEventListener("click",o=>{let a=o.target.closest("button");a&&(a.blur(),this.timers.clear(),this.setMirror(a.dataset.m==="1"))}),n.appendChild(e),this.toggle=e;let i=this.cv.canvas;this._down=o=>{if(this.step!==1)return;let a=this.cv.toDesign(o),l=Bo;a.x<l.x-20||a.x>l.x+l.s+20||a.y<l.y-20||a.y>l.y+l.s+20||(this.timers.clear(),this.drag={x:a.x,f:this.v.get("fold")},i.setPointerCapture(o.pointerId),o.preventDefault())},this._move=o=>{let a=this.cv.toDesign(o);if(this.drag)this.v.set("fold",Ut(this.drag.f+(a.x-this.drag.x)/320,0,1),{instant:!0}),this.loop.dirty=!0;else if(this.step===1){let l=Bo,c=a.x>l.x&&a.x<l.x+l.s&&a.y>l.y&&a.y<l.y+l.s;i.style.cursor=c?"grab":"default"}else i.style.cursor="default"},this._up=o=>{if(this.drag){this.drag=null;try{i.releasePointerCapture(o.pointerId)}catch{}}},i.addEventListener("pointerdown",this._down),i.addEventListener("pointermove",this._move),i.addEventListener("pointerup",this._up),i.addEventListener("pointercancel",this._up);let s=document.createElement("canvas");s.width=s.height=12;let r=s.getContext("2d");r.strokeStyle=pt(this.T.warn,.85),r.lineWidth=2,r.beginPath();for(let o=-12;o<=24;o+=6)r.moveTo(o,12),r.lineTo(o+12,0);return r.stroke(),this.hatchSrc=s,this.v.set("s0",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Promise.all([t.data("replay.json"),t.data("replay.bin"),t.data("mirror.json")]).then(([o,a,l])=>{this.rep=I0(o,a),this.mir=k0(l),this.layoutMatrix(),this.buildCaches(),this.loop.dirty=!0}).catch(o=>console.warn("mirror: data failed",o))},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.drag=null},resize(){this.cv.fit(),this.buildCaches(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear(),this.drag=null;let i=t||this.ctx.reducedMotion,s=(r,o=0)=>({dur:r,delay:o,instant:i});this.v.set("s0",n===0?1:0,s(500,n===0?250:0)),this.v.set("s1",n>=1?1:0,s(600,n===1&&e===0?300:0)),n===0?this.v.set("fold",0,{instant:!0}):n===1&&e===0&&!i?(this.v.set("fold",0,{instant:!0}),this.v.set("fold",1,{dur:1600,delay:900})):this.v.set("fold",1,s(900)),this.v.set("compact",n===2?1:0,s(1e3)),this.v.set("bars",n===2?1:0,s(1100,n===2&&!i?400:0)),this.v.set("gains",n===2?1:0,s(700,n===2&&!i?1300:0)),n!==0?this.setMirror(!1,!0):this.setMirror(!1,i),this.toggle.style.transitionDelay=n===0&&!i?"0.4s":"0s",this.toggle.style.opacity=n===0?"1":"0",this.toggle.style.pointerEvents=n===0?"auto":"none",this.loop.dirty=!0},setMirror(n,t=!1){this.mirrored=n,this.toggle.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.m==="1"===n))),this.v.set("mir",n?1:0,{dur:650,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},demo(){this.timers.clear();let n=this.ctx.reducedMotion;this.step===0?(this.setMirror(!0),this.timers.after(1850,()=>this.setMirror(!1))):this.step===1?(this.v.set("fold",0,{dur:600,instant:n}),this.timers.after(1100,()=>this.v.set("fold",1,{dur:1600,instant:n}))):this.step===2&&(this.v.set("bars",0,{instant:!0}),this.v.set("gains",0,{instant:!0}),this.v.set("bars",1,{dur:1100,delay:200,instant:n}),this.v.set("gains",1,{dur:700,delay:1200,instant:n})),this.loop.dirty=!0},csBox(n){let{grid:t}=this.rep,e=t.R[0],i=t.R[t.R.length-1],s=t.Z[0],r=t.Z[t.Z.length-1],o=L0/(r-s),a=(i-e)*o,l=No[n]-a/2;return{x:l,y:U0,w:a,h:L0,s:o,R0:e,Z1:r,X:c=>l+(c-e)*o,Y:c=>U0+(r-c)*o}},layoutMatrix(){let n=D0;this.bandRects=this.mir.bands.map(e=>{let i=Math.ceil(e.cells.length/Ol),s={y0:n,y1:n+i*Wr-(Wr-Zi),rows:i};return n+=i*Wr+F0,s}),this.matrixBottom=n-F0;let t=0;this.cellOrder=this.mir.bands.map(e=>e.cells.map(i=>i===2?t++:-1)),this.nFlipCells=t},buildCaches(){if(!this.rep)return;let n=this.cv.ratio,t=this.T,{n:e,m:i}=this.rep,s=li.d3d&&li.d3d.wall;this.caches=this.rep.shots.map((r,o)=>{let a=this.csBox(o),l=24;return[1,-1].map(c=>{let u=document.createElement("canvas");u.width=Math.ceil((a.w+2*l)*n),u.height=Math.ceil((a.h+2*l)*n);let h=u.getContext("2d");h.setTransform(n,0,0,n,l*n-a.x*n,l*n-a.y*n);let d=new ImageData(e,i),f=[98,228,255],p=[122,44,255];for(let g=0;g<i;g++)for(let m=0;m<e;m++){let _=c*r.D[g*e+m],y=Math.tanh(Math.abs(_)/.1),x=_>=0?f:p,w=((i-1-g)*e+m)*4;d.data[w]=x[0],d.data[w+1]=x[1],d.data[w+2]=x[2],d.data[w+3]=Math.round(255*(.05+(_>=0?.16:.3)*y))}let v=document.createElement("canvas");v.width=e,v.height=i,v.getContext("2d").putImageData(d,0,0),h.imageSmoothingEnabled=!0,h.imageSmoothingQuality="high",h.drawImage(v,a.x,a.y,a.w,a.h),h.strokeStyle=t.line,h.lineWidth=1,h.strokeRect(a.x,a.y,a.w,a.h),h.globalCompositeOperation="lighter",h.lineJoin="round";for(let g of[0,1])for(let m of r.lines){let y=c*m.lv>=0?t.flux:Gs,x=1-Math.min(.6,Math.abs(m.lv)*2);h.strokeStyle=pt(y,g?.85*x:.18*x),h.lineWidth=g?1.3:4;for(let w of m.polys){h.beginPath();for(let S=0;S<w.length;S+=2){let T=a.X(w[S]),E=a.Y(w[S+1]);S?h.lineTo(T,E):h.moveTo(T,E)}w.closed&&h.closePath(),h.stroke()}}h.globalCompositeOperation="source-over",s&&s.length&&(h.strokeStyle="rgba(255,255,255,0.32)",h.lineWidth=1.5,h.beginPath(),s.forEach((g,m)=>m?h.lineTo(a.X(g[0]),a.Y(g[1])):h.moveTo(a.X(g[0]),a.Y(g[1]))),h.closePath(),h.stroke()),h.strokeStyle=pt(t.coil,.55),h.fillStyle=pt(t.coil,.1),h.lineWidth=1.2;for(let g of this.rep.coils){let m=a.X(g.R-g.w/2),_=a.Y(g.Z+g.h/2),y=g.w*a.s,x=g.h*a.s;h.fillRect(m,_,y,x),h.strokeRect(m,_,y,x)}return{cvs:u,x:a.x-l,y:a.y-l,w:a.w+2*l,h:a.h+2*l}})})},draw(){let{g:n}=this.cv,t=this.T;if(this.cv.begin(),!this.rep||!this.caches){B(n,"loading DIII-D frames\u2026",1060,450,{f:C(t,"body",22,500),color:t.ink3,align:"center"});return}let e=this.v.get("s0"),i=this.v.get("s1");e>.01&&this.drawStep0(n,e),i>.01&&this.drawStep1(n,i);let s=this.v.get("bars"),r=this.v.get("gains");(this.v.get("compact")>.01||s>.01)&&this.drawStep2(n,s,r),B(n,Zb,1560,860,{f:C(t,"body",18,400),color:t.ink3,align:"right",alpha:.85})},drawStep0(n,t){let e=this.T,i=this.v.get("mir"),s=this.rep.shots,r=(1-t)*12;n.save(),n.globalAlpha=t,n.translate(0,r);for(let f=0;f<2;f++){let p=s[f],v=this.csBox(f),g=this.caches[f],m=f===0?i:0;1-m>.002&&(n.save(),n.globalAlpha*=1-m,n.drawImage(g[0].cvs,g[0].x,g[0].y,g[0].w,g[0].h),n.restore()),m>.002&&(n.save(),n.globalAlpha*=m,n.drawImage(g[1].cvs,g[1].x,g[1].y,g[1].w,g[1].h),n.restore());let _=p.lcfs;n.save(),n.globalCompositeOperation="lighter",n.lineJoin="round",n.beginPath();for(let A=0;A<_.length;A+=2){let U=v.X(_[A]),L=v.Y(_[A+1]);A?n.lineTo(U,L):n.moveTo(U,L)}n.closePath(),n.strokeStyle="rgba(255,255,255,0.16)",n.lineWidth=7,n.stroke(),n.strokeStyle=e.ink,n.lineWidth=2.2,n.stroke(),n.restore();let y=p.sign<0,x=f===0&&i>.5,w=y?Gs:e.flux,S=y?"reversed Ip":x?"normal Ip, mirrored":"normal Ip",T=C(e,"body",22,600),E=C(e,"mono",18,500),b=[[S,T,x?e.coil:e.ink],[`  ${p.id} \xB7 ${Qu(p.t)} ms`,E,e.ink3]],M=No[f]-Ju/2+4;wt(n,b,M+18,70),n.fillStyle=w,n.beginPath(),n.arc(M+4,63,5,0,Math.PI*2),n.fill(),this.drawStrip(n,f,f===0?1-2*on(i):1)}this.drawLegend0(n),n.restore();let o=No[1],a=790,l=C(e,"mono",20,600),c=C(e,"body",20,500),u=`${(100*this.mir.fracRev).toFixed(1)}%`,h=[[Qu(this.mir.nRev),l,e.ink],[" of ",c,e.ink2],[Qu(this.mir.nShots),l,e.ink],[" training shots  \xB7  ",c,e.ink2],[u,l,Gs]],d=0;n.save();for(let[f,p]of h)n.font=p,d+=n.measureText(f).width;n.restore(),n.save(),n.globalAlpha=t,ie(n,o-d/2-22,a-22,d+44,44,22),n.fillStyle="rgba(255,255,255,0.04)",n.fill(),n.strokeStyle=e.line,n.lineWidth=1,n.stroke(),n.restore(),wt(n,h,o,a+7,{align:"center",alpha:t})},drawStrip(n,t,e){let i=this.T,s=this.rep.shots[t],r=No[t]-Ju/2,o=qb,a=[];for(let d=0;d<18;d++)a.push(r+8+d*17);let l=r+8+18*17+14;for(let d=0;d<3;d++)a.push(l+d*26);let c=11;ut(n,r,o,r+Ju,o,i.lineStrong,1.5),B(n,"coil currents at this frame",r,o-Oo-14,{f:C(i,"body",18,500),color:i.ink3}),B(n,"+",r-6,o-Oo+14,{f:C(i,"mono",18,500),color:i.ink3,align:"right"}),B(n,"\u2212",r-6,o+Oo,{f:C(i,"mono",18,500),color:i.ink3,align:"right"}),n.save(),n.globalCompositeOperation="lighter",Nl.forEach((d,f)=>{let v=s.bars[f]/this.rep.barScale[f]*e*Oo,g=a[f]-c/2,m=Math.min(o,o-v),_=Math.max(1.5,Math.abs(v)),x=d==="Ip"?i.ink:i.coil,w=n.createLinearGradient(0,o,0,o-v);w.addColorStop(0,pt(x,.25)),w.addColorStop(1,pt(x,.9)),n.fillStyle=w,n.fillRect(g,m,c,_)}),n.restore();let u=C(i,"body",18,500),h=o+Oo+30;B(n,"F1 \u2026 F9 (A, B)",(a[0]+a[17])/2,h,{f:u,color:i.coil,align:"center"}),ut(n,a[0]-5,h-22,a[17]+5,h-22,pt(i.coil,.4),1),B(n,"E",a[18],h,{f:u,color:i.coil,align:"center"}),B(n,"Ip",a[19],h,{f:u,color:i.ink,align:"center"}),B(n,"Bt",a[20],h,{f:u,color:i.coil,align:"center"})},drawLegend0(n){let t=this.T,e=1060,i=196,s=C(t,"body",18,500);B(n,"sign(Ip) \xB7 (\u03C8 \u2212 \u03C8",e-6,i,{f:C(t,"mono",18,500),color:t.ink2,align:"center"});let r=this.textW("sign(Ip) \xB7 (\u03C8 \u2212 \u03C8",C(t,"mono",18,500));B(n,"b",e-6+r/2+1,i+5,{f:C(t,"mono",18,500),color:t.ink2}),B(n,")",e-6+r/2+13,i,{f:C(t,"mono",18,500),color:t.ink2}),i+=46;let o=(c,u,h)=>{u(e-98,c-6),B(n,h,e-58,c,{f:s,color:t.ink2})};o(i,(c,u)=>ut(n,c,u,c+28,u,t.flux,2.2),"> 0"),o(i+36,(c,u)=>ut(n,c,u,c+28,u,Gs,2.2),"< 0"),o(i+72,(c,u)=>ut(n,c,u,c+28,u,t.ink,2.4),"boundary (LCFS)"),o(i+108,(c,u)=>{n.save(),n.strokeStyle=pt(t.coil,.7),n.fillStyle=pt(t.coil,.15),n.fillRect(c+8,u-8,12,16),n.strokeRect(c+8,u-8,12,16),n.restore()},"coils");let a=C(t,"body",18,400),l=i+172;["EFIT ships both maps with the","axis at the \u03C8 minimum; the","sign(Ip) factor puts back","the physical polarity"].forEach((c,u)=>B(n,c,e,l+u*25,{f:a,color:t.ink3,align:"center"}))},textW(n,t){let e=this.cv.g;e.save(),e.font=t;let i=e.measureText(n).width;return e.restore(),i},scRect(){let n=on(this.v.get("compact"));return{x:zt(Bo.x,Ku.x,n),y:zt(Bo.y,Ku.y,n),s:zt(Bo.s,Ku.s,n),c:n}},drawStep1(n,t){let e=this.T,i=this.v.get("fold"),s=this.scRect(),r=t*(1-s.c),o=(1-t)*12;r>.01&&(n.save(),n.translate(0,o),this.drawMatrix(n,r,i),n.restore()),this.drawScatter(n,t,i,s)},drawMatrix(n,t,e){let i=this.T,s=this.mir,r=B(n,String(s.nFlipped),ci,112,{f:C(i,"mono",56,600),color:i.coil,alpha:t});wt(n,[["odd features ",C(i,"body",24,600),i.ink],["\xD7 sign(Ip)",C(i,"mono",24,600),i.coil]],ci+r+14,92,{alpha:t}),wt(n,[["of ",C(i,"body",20,400),i.ink3],[String(s.nFeatures),C(i,"mono",20,500),i.ink2],[" inputs  \xB7  ",C(i,"body",20,400),i.ink3],[String(s.nFeatures-s.nFlipped),C(i,"mono",20,500),i.ink2],[" unchanged",C(i,"body",20,400),i.ink3]],ci+r+14,120,{alpha:t});let o=e*1.25;n.save(),n.globalAlpha=t;let a=[];s.bands.forEach((d,f)=>{let p=this.bandRects[f];d.cells.forEach((v,g)=>{let m=ci+g%Ol*Wr,_=p.y0+Math.floor(g/Ol)*Wr;if(v===0)n.fillStyle="rgba(255,255,255,0.07)",n.fillRect(m,_,Zi,Zi);else if(v===1)n.strokeStyle=pt(i.coil,.9),n.lineWidth=1.5,n.strokeRect(m+.75,_+.75,Zi-1.5,Zi-1.5);else{let y=this.cellOrder[f][g]/this.nFlipCells,x=Ut((o-y)/.25,0,1),w=e>0&&e<1?Math.sin(Math.PI*x):0;n.fillStyle=pt(i.coil,.72+.28*w),n.fillRect(m,_,Zi,Zi),w>.02&&(n.save(),n.globalCompositeOperation="lighter",n.fillStyle=pt("#fff6e0",.75*w),n.fillRect(m-1,_-1,Zi+2,Zi+2),n.restore())}}),a.push(p.y0+13)}),n.restore();let l=El(a,23,D0+4,this.matrixBottom+20),c=ci+Ol*Wr+14;s.bands.forEach((d,f)=>{let p=this.bandRects[f],v=l[f],g=p.y0+5;Math.abs(v-6-g)>3&&ut(n,c-10,g,c-3,v-6,i.line,1,t),wt(n,[[d.name+"  ",C(i,"body",18,500),d.odd?i.ink2:i.ink3],[`${d.odd}/${d.n}`,C(i,"mono",18,500),d.odd?i.coil:i.ink3]],c,v,{alpha:t})});let u=this.matrixBottom+52,h=C(i,"body",18,400);n.save(),n.globalAlpha=t,n.fillStyle=pt(i.coil,.8),n.fillRect(ci,u-13,12,12),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(ci,u+17,12,12),n.strokeStyle=pt(i.coil,.9),n.lineWidth=1.5,n.strokeRect(ci+.75,u+47.75,10.5,10.5),n.restore(),wt(n,[["odd: changes sign with the currents",h,i.ink2]],ci+24,u,{alpha:t}),wt(n,[["even: unchanged (Thomson, timing)",h,i.ink3]],ci+24,u+30,{alpha:t}),wt(n,[["the raw sign flag, odd, kept as is",h,i.ink3]],ci+24,u+60,{alpha:t})},drawScatter(n,t,e,i){let s=this.T,r=this.rep.shots,o=i.c,a=i.x+i.s/2,l=i.y+i.s/2,c=i.s/2,u=zt(1,.55,o),h=t*u,d=1-o;ut(n,i.x,l,i.x+i.s,l,s.lineStrong,1.5,h),ut(n,a,i.y,a,i.y+i.s,s.lineStrong,1.5,h),n.save(),n.globalAlpha=h*.6,n.strokeStyle=s.line,n.lineWidth=1,n.strokeRect(i.x,i.y,i.s,i.s),n.restore();let f=C(s,"mono",18,500),p=h*d;if(p>.01){for(let I of[-1e3,1e3]){let O=a+I/N0*c;ut(n,O,l-5,O,l+5,s.lineStrong,1.5,p),B(n,I>0?"+1000":"\u22121000",O,l+26,{f,color:s.ink3,align:"center",alpha:p})}for(let I of[-200,200]){let O=l-I/O0*c;ut(n,a-5,O,a+5,O,s.lineStrong,1.5,p),B(n,I>0?"+200":"\u2212200",a-10,O+6,{f,color:s.ink3,align:"right",alpha:p})}let S=C(s,"body",18,500),T=Ut((e-.6)/.4,0,1),E="Ip  (kA)",b="sign(Ip) \xB7 Ip  (kA)",M="F6A  (kA\xB7turn)",A="sign(Ip) \xB7 F6A";B(n,E,i.x+i.s,l-12,{f:S,color:s.ink2,align:"right",alpha:p*(1-T)}),B(n,b,i.x+i.s,l-12,{f:S,color:s.coil,align:"right",alpha:p*T}),B(n,M,a+12,i.y+22,{f:S,color:s.ink2,alpha:p*(1-T)}),B(n,A,a+12,i.y+22,{f:S,color:s.coil,alpha:p*T});let U=i.y-26,L=C(s,"body",18,500),N=(I,O)=>{n.save(),n.globalAlpha=p,n.fillStyle=O,n.beginPath(),n.arc(I,U-6,5,0,Math.PI*2),n.fill(),n.restore()};N(i.x+6,s.flux);let k=wt(n,[["normal Ip  ",L,s.ink2],[String(r[0].nFrames),f,s.ink],[" frames",L,s.ink3]],i.x+18,U,{alpha:p});N(k+28,Gs),wt(n,[["reversed Ip  ",L,s.ink2],[String(r[1].nFrames),f,s.ink],[" frames",L,s.ink3]],k+40,U,{alpha:p})}let v=Math.PI*on(Ut(e,0,1)),g=Math.cos(v),m=Math.sin(v),_=zt(3.4,2.4,o);if(n.save(),n.beginPath(),n.rect(i.x-8,i.y-8,i.s+16,i.s+16),n.clip(),n.globalCompositeOperation="lighter",r.forEach((S,T)=>{let E=T===0?s.flux:Gs,b=S.sign<0;for(let[M,A]of S.pts){let U=M/N0,L=A/O0;if(b){let I=U*g-L*m,O=U*m+L*g;U=I,L=O}let N=a+U*c,k=l-L*c;n.fillStyle=pt(E,.07*h),n.beginPath(),n.arc(N,k,_*2.6,0,Math.PI*2),n.fill(),n.fillStyle=pt(E,.55*h),n.beginPath(),n.arc(N,k,_,0,Math.PI*2),n.fill()}}),n.restore(),d>.01&&e<.98){let S=c*.34,T=Math.PI*.82,E=T+Math.PI*Math.max(.05,1-e)*.9;n.save(),n.globalAlpha=h*d*.7*(1-e),n.strokeStyle=s.ink2,n.lineWidth=1.5,n.setLineDash([4,5]),n.beginPath(),n.arc(a,l,S,-E,-T,!1),n.stroke(),n.restore()}let y=i.y+i.s+zt(50,34,o),x=Ut((e-.85)/.15,0,1),w=C(s,"body",zt(20,18,o),500);B(n,"real frames of two shots",i.x,y,{f:w,color:s.ink3,alpha:t*(1-o)}),x>.01?B(n,"one world",i.x+i.s,y,{f:C(s,"display",zt(30,24,o),500),color:s.good,align:"right",alpha:t*x*zt(1,.8,o)}):d>.01&&B(n,"two worlds",i.x+i.s,y,{f:C(s,"display",30,500),color:s.ink2,align:"right",alpha:t*d*(1-e)}),this.step===1&&d>.5&&B(n,"drag to fold",i.x+i.s,i.y+i.s+82,{f:C(s,"body",18,400),color:s.ink3,align:"right",alpha:t*.8})},drawStep2(n,t,e){let i=this.T;if(t<.005)return;let s=ju-Le,r=this.mir.fracRev,o=`${(100*r).toFixed(1)}%`,a=`${(100*(1-r)).toFixed(1)}%`,l=on(Ut(t*1.2,0,1)),c=on(Ut(t*1.6-.6,0,1)),u=46,h=122,d=300,f=C(i,"body",22,500);B(n,"share of training shots",Le,h-16,{f,color:i.ink2,alpha:t}),wt(n,[["share of squared \u03C8 error",f,i.ink2],["   time-blocked fold, before the fix",C(i,"body",20,400),i.ink3]],Le,d-16,{alpha:t});let p=s*r*l;if(n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(Le+p,h,s*l-p,u),n.fillStyle=pt(Xb,.95),n.fillRect(Le,h,p,u),n.restore(),B(n,o,Le+p+12,h+32,{f:C(i,"mono",26,600),color:Gs,alpha:t*l}),B(n,"reversed Ip",Le+p+104,h+31,{f:C(i,"body",20,500),color:i.ink2,alpha:t*l}),B(n,`${a} normal`,ju-14,h+31,{f:C(i,"mono",20,500),color:i.ink3,align:"right",alpha:t*l}),c>.01){let y=Le+p,x=Le+s*.68*c;n.save(),n.globalAlpha=t*c;let w=n.createLinearGradient(0,h+u,0,d);w.addColorStop(0,pt(i.warn,.08)),w.addColorStop(1,pt(i.warn,.3)),n.fillStyle=w,n.beginPath(),n.moveTo(Le,h+u+4),n.lineTo(y,h+u+4),n.lineTo(x,d-44),n.lineTo(Le,d-44),n.closePath(),n.fill(),n.restore()}let v=s*.6*c,g=s*.68*c;n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(Le+g,d,s-g,u),n.fillStyle=pt(i.warn,.92),n.fillRect(Le,d,v,u),g>v&&(this.hatch||(this.hatch=n.createPattern(this.hatchSrc,"repeat")),n.fillStyle=this.hatch,n.fillRect(Le+v,d,g-v,u),n.strokeStyle=pt(i.warn,.9),n.lineWidth=1.5,n.strokeRect(Le+v+.75,d+.75,g-v-1.5,u-1.5)),n.restore();let m=t*c;B(n,"60\u201368%",Le+16,d+34,{f:C(i,"mono",30,600),color:i.bg,alpha:m}),B(n,"reversed Ip",Le+172,d+31,{f:C(i,"body",20,600),color:i.bg,alpha:m}),B(n,"normal",ju-14,d+31,{f:C(i,"body",20,500),color:i.ink3,align:"right",alpha:m});let _=C(i,"mono",18,500);if(B(n,"60%",Le+v,d+u+26,{f:_,color:i.warn,align:"center",alpha:m}),B(n,"68%",Le+g,d+u+26,{f:_,color:i.warn,align:"center",alpha:m}),e>.01){let y=(1-e)*16;B(n,"AFTER THE FIX",Le,470+y,{f:C(i,"body",18,600),color:i.ink3,alpha:e});let x=(w,S,T)=>{let E=B(n,S,Le,w,{f:C(i,"mono",72,600),color:i.good,alpha:e});B(n,"\xD710\u207B\u2074",Le+E+14,w-36,{f:C(i,"body",20,500),color:i.ink2,alpha:e}),B(n,T,Le+E+14,w-8,{f:C(i,"body",22,500),color:i.ink,alpha:e})};x(566+y,"+13.7","time-blocked fold"),x(682+y,"+2.6","public board")}}};var z0=-100,H0=150,$b=-300,Yb=300,Bl=-500,zl=900;function Jb(n){if(!n||typeof n!="object")return null;let t=h=>Array.isArray(h)?h.map(Number):null;if(n.traces&&n.rule&&n.traces.Ip_corrected_axis){let h=n.traces,d=h.ECOILA||Object.values(h).find(x=>x.time_axis==="magnetics_time"),f=Number(n.ip_sign??1)||1,p=t(h.Ip_corrected_axis.value).map(x=>x*f),v=t(d.value),g=x=>{let w=Math.max(...x.map(Math.abs))||1;return x.map(S=>S/w)},m=p.map(Math.abs).sort((x,w)=>x-w),_=m[Math.min(m.length-1,Math.floor(.995*(m.length-1)))]||1,y=t(n.window_ms)||[-300,1500];return{source:"real",shot:n.id??null,credit:"Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics",coil:{t:t(d.t_ms),y:g(v),label:`ohmic E-coil current${h.ECOILA?" (ECOILA)":""}`},ip:{t:t(h.Ip_corrected_axis.t_ms),y:p.map(x=>x/_)},shipped:-Number(n.rule.offset_ms),cross:n.rule.breakdown_corrected_ms!==void 0?Number(n.rule.breakdown_corrected_ms):null,range:[Math.max(y[0],-400),Math.min(y[1],1500)]}}let e,i,s,r,o,a;if(n.coil&&n.ip&&!Array.isArray(n.coil)?(e=t(n.coil.t_ms),i=t(n.coil.value??n.coil.values??n.coil.y),a=n.coil.name,s=t(n.ip.t_ms_corrected??n.ip.t_ms),r=t(n.ip.value??n.ip.values??n.ip.y),o=t(n.ip.t_ms_shipped)):(e=t(n.t_ms),i=t(n.coil),s=t(n.ip_t_ms_corrected??n.ip_t_ms),r=t(n.ip),o=t(n.ip_t_ms_shipped)),!e||!i||!s||!r||e.length!==i.length||s.length!==r.length)return null;let l=Number(n.t0_ms??0),c=n.offset_ms!==void 0?Number(n.offset_ms):o&&o.length?o[0]-s[0]:180,u=h=>{let d=Math.max(...h.map(Math.abs))||1;return h.map(f=>f/d)};return{source:"real",shot:n.shot??null,coil:{t:e.map(h=>h-l),y:u(i),label:a||"ohmic coil current"},ip:{t:s.map(h=>h-l),y:u(r)},shipped:c,cross:null,range:[Bl,zl]}}function Kb(){let t=[],e=[],i=[],s=[];for(let r=0;r<=600;r++){let o=zt(Bl-200,zl+400,r/600);t.push(o),e.push(-Math.tanh(o/230)*.92-.04*(o/1e3)),i.push(o);let a=Ut(o/400,0,1);s.push(o<=0?0:1-Math.pow(1-a,2.2))}return{source:"schematic",shot:null,credit:null,coil:{t,y:e,label:"ohmic coil current"},ip:{t:i,y:s},shipped:180,cross:null,range:[Bl,zl]}}function jb(n){let e=.1*Math.max(...n.y);for(let i=1;i<n.t.length;i++)if(n.y[i-1]<e&&n.y[i]>=e){let s=(e-n.y[i-1])/(n.y[i]-n.y[i-1]);return{t:zt(n.t[i-1],n.t[i],s),lvl:e}}return{t:0,lvl:e}}var Ue=640,Fn=1530,hi=[Bl,zl],qi=n=>Ue+(n-hi[0])/(hi[1]-hi[0])*(Fn-Ue),V0={id:"timeaxis",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.setData(Kb());let e=document.createElement("div");return e.className="ui-row",e.style.cssText="position:absolute;left:640px;top:790px;opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",e.innerHTML=`<span class="ui-label">Ip offset</span><input class="ui-slider" type="range" min="${$b}" max="${Yb}" step="1" value="0" style="width:340px;--slider-accent:var(--plasma)"><span class="ui-readout" style="min-width:96px;text-align:right"></span>`,n.appendChild(e),this.sliderBox=e,this.slider=e.querySelector("input"),this.readout=e.querySelector(".ui-readout"),this.slider.addEventListener("input",()=>{this.timers.clear(),this.v.set("shift",Number(this.slider.value),{instant:!0}),this.loop.dirty=!0}),this.slider.addEventListener("keydown",i=>{["ArrowLeft","ArrowRight","PageUp","PageDown"," "].includes(i.key)&&(i.preventDefault(),this.slider.blur())}),this.v.set("shift",this.data.shipped,{instant:!0}),this.v.set("ann0",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),t.data("timeaxis.json").then(i=>{let s=Jb(i);s?this.setData(s):console.warn("timeaxis.json: unrecognised schema, using schematic traces")}).catch(()=>{})},setData(n){this.data=n,hi[0]=n.range[0],hi[1]=n.range[1];let t=jb(n.ip);this.cross=n.cross!==null&&n.cross!==void 0?{t:n.cross,lvl:.1}:t,this.v&&this.step===0&&this.v.set("shift",n.shipped,{instant:!0}),this.loop&&(this.loop.dirty=!0)},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish()},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){this.step=n,this.timers.clear();let e=t||this.ctx.reducedMotion,i=(s,r=0)=>({dur:s,delay:r,instant:e});this.v.set("shift",n===0?this.data.shipped:0,i(1400,n===1?250:0)),this.v.set("ann0",n===0?1:0,i(500)),this.v.set("ann1",n===1?1:0,i(600,n===1?500:0)),this.v.set("win",n>=1?1:0,i(600,n===1?200:0)),this.v.set("compact",n===2?1:0,i(1100)),this.v.set("consq",n===2?1:0,i(700,n===2&&!e?600:0)),this.sliderBox.style.opacity=n===1?"1":"0",this.sliderBox.style.pointerEvents=n===1?"auto":"none",this.loop.dirty=!0},demo(){this.step===1&&(this.timers.clear(),this.v.set("shift",this.data.shipped,{dur:500}),this.timers.after(900,()=>this.v.set("shift",0,{dur:1600})))},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("compact"),i=this.v.get("shift"),s=this.v.get("ann0"),r=this.v.get("ann1"),o=this.v.get("win"),a=this.v.get("consq"),l=this.data;document.activeElement!==this.slider&&(this.slider.value=String(Math.round(i)));let c=this.cross.t+i,u=c>=z0&&c<=H0;this.readout.innerHTML=`${i>=0?"+":"\u2212"}${Math.abs(Math.round(i))}<small>ms</small>`;let h={y0:zt(118,70,e),y1:zt(292,156,e)},d={y0:zt(350,214,e),y1:zt(566,330,e)},f=zt(598,356,e);if(o>.01){let T=qi(z0),E=qi(H0),b=u?t.good:t.ink3;n.save(),n.globalAlpha=o;let M=n.createLinearGradient(0,d.y0,0,d.y1);M.addColorStop(0,pt(b,u?.05:.02)),M.addColorStop(1,pt(b,u?.16:.06)),n.fillStyle=M,n.fillRect(T,d.y0-10,E-T,d.y1-d.y0+10),n.restore(),ut(n,T,d.y0-10,T,d.y1,b,1.5,o*.9),ut(n,E,d.y0-10,E,d.y1,b,1.5,o*.9);let A=o*(1-e);wt(n,[["accept  ",C(t,"body",18,500),b],["[\u2212100, +150] ms",C(t,"mono",18,500),b]],E+12,d.y0-14,{alpha:A})}let p=(T,E,b)=>zt(E,T,(b+1)/2),v=(T,E,b)=>zt(E,T,b);ut(n,Ue,p(h.y0,h.y1,0),Fn,p(h.y0,h.y1,0),t.line,1,1,[3,5]),B(n,l.coil.label,Ue,h.y0-14,{f:C(t,"body",20,500),color:t.coil}),this.trace(n,l.coil.t,l.coil.y,0,T=>p(h.y0,h.y1,T),t.coil),ut(n,Ue,d.y1,Fn,d.y1,t.line,1),B(n,"plasma current Ip",Ue,d.y0-14,{f:C(t,"body",20,500),color:t.plasma});let g=this.step===0||i>30?"shipped Ip axis":i<-30?"shifted by hand":"repaired Ip axis";B(n,g,Fn,d.y0-14,{f:C(t,"body",18,500),color:t.ink3,align:"right"}),this.trace(n,l.ip.t,l.ip.y,i,T=>v(d.y0,d.y1,T),t.plasma,!0),ut(n,Ue,f,Fn,f,t.lineStrong,1.5);let m=hi[1]-hi[0]>1500?300:200;for(let T=Math.ceil(hi[0]/m)*m;T<=hi[1]-40;T+=m)ut(n,qi(T),f,qi(T),f+6,t.lineStrong,1.5),B(n,T>0?`+${T}`:T<0?`\u2212${-T}`:"0",qi(T),f+28,{f:C(t,"mono",18,500),color:t.ink3,align:"center"});B(n,"ms",Fn,f+28,{f:C(t,"body",18,500),color:t.ink3,align:"right"});let _=qi(0);ut(n,_,h.y0-4,_,d.y0-36,t.ink,1.5,.85),ut(n,_,d.y0-6,_,f,t.ink,1.5,.85),B(n,l.source==="real"?"magnetics clock t = 0":"magnetics breakdown",_+10,h.y0+22,{f:C(t,"body",18,500),color:t.ink,alpha:1-e});let y=v(d.y0,d.y1,this.cross.lvl),x=qi(c);ut(n,Ue,y,Fn,y,t.plasma,1,.22,[2,5]),B(n,"10%",Fn,y-8,{f:C(t,"mono",18,500),color:t.plasma,align:"right",alpha:.7*(1-e)}),n.save(),n.globalCompositeOperation="lighter",n.fillStyle=u&&o>.5?t.good:t.plasmaHot,n.shadowColor=pt(u&&o>.5?t.good:t.plasma,.8),n.shadowBlur=14,n.beginPath(),n.arc(x,y,5.5,0,Math.PI*2),n.fill(),n.restore();let w=i,S=s*(1-e);if(Math.abs(w)>6&&S>.01){let T=d.y0+50,E=qi(this.cross.t);ut(n,E,T,x,T,t.warn,2,S),ut(n,E,T-7,E,T+7,t.warn,2,S),ut(n,x,T-7,x,T+7,t.warn,2,S),ut(n,x,T+7,x,y-8,t.warn,1,S*.6,[2,4]),ut(n,E,T+7,E,y,t.warn,1,S*.6,[2,4]);let b=`${w>=0?"+":"\u2212"}${Math.abs(Math.round(w))} ms`;wt(n,[["offset ",C(t,"body",20,500),t.warn],[b,C(t,"mono",22,600),t.warn]],Math.min(E,x)-14,T+7,{align:"right",alpha:S})}l.source==="schematic"?B(n,"schematic",Fn,h.y0-14,{f:C(t,"body",18,500),color:t.ink3,align:"right"}):(wt(n,[["DIII-D shot file ",C(t,"body",18,500),t.ink3],[String(l.shot??""),C(t,"mono",18,500),t.ink3]],Fn,h.y0-14,{align:"right"}),l.credit&&B(n,l.credit,1560,846,{f:C(t,"body",18,400),color:t.ink3,align:"right",alpha:.85})),s>.01&&this.drawProblem(n,s*(1-e),f),r>.01&&this.drawRule(n,r*(1-e),f,u,c),a>.01&&this.drawConsequence(n,a)},trace(n,t,e,i,s,r,o=!1){n.save(),n.beginPath(),n.rect(Ue,0,Fn-Ue,900),n.clip();let a=[];for(let l=0;l<t.length;l++){let c=t[l]+i;c<hi[0]-50||c>hi[1]+50||a.push([qi(c),s(e[l])])}if(a.length<2){n.restore();return}if(o){let l=s(0),c=n.createLinearGradient(0,s(1),0,l);c.addColorStop(0,pt(r,.18)),c.addColorStop(1,pt(r,0)),n.fillStyle=c,n.beginPath(),n.moveTo(a[0][0],l),a.forEach(u=>n.lineTo(u[0],u[1])),n.lineTo(a[a.length-1][0],l),n.closePath(),n.fill()}n.beginPath(),a.forEach((l,c)=>c?n.lineTo(l[0],l[1]):n.moveTo(l[0],l[1])),n.lineJoin="round",n.strokeStyle=pt(r,.28),n.lineWidth=6,n.stroke(),n.strokeStyle=r,n.lineWidth=2.2,n.stroke(),n.restore()},drawProblem(n,t,e){let i=this.T,s=e+92;wt(n,[["offset ",C(i,"body",26,500),i.ink2],["54\u2013291 ms",C(i,"mono",34,600),i.warn],["  on  ",C(i,"body",26,500),i.ink2],["2,111",C(i,"mono",34,600),i.ink],[" of ",C(i,"body",26,500),i.ink2],["7,041",C(i,"mono",34,600),i.ink],[" training shots",C(i,"body",26,500),i.ink2]],Ue,s,{alpha:t});let r=Fn-Ue,o=2111/7041,a=s+30;n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.07)",ie(n,Ue,a,r,10,5),n.fill(),n.fillStyle=pt(i.warn,.85),ie(n,Ue,a,r*o,10,5),n.fill(),n.restore(),B(n,"older data-acquisition era: the shipped Ip clock runs late against the magnetics",Ue,a+44,{f:C(i,"body",20,400),color:i.ink3,alpha:t})},drawRule(n,t,e,i,s){let r=this.T,o=e+66,a=Ue,l=Ue+240,c=1040;B(n,"magnetics record",a,o,{f:C(r,"body",18,500),color:r.coil,alpha:t}),n.save(),n.globalAlpha=t,n.fillStyle=pt(r.coil,.75),ie(n,a,o+12,c-a,10,3),n.fill(),n.fillStyle=pt(r.plasma,.75),ie(n,l,o+40,c-l,10,3),n.fill(),n.restore(),B(n,"Ip record",l-12,o+50,{f:C(r,"body",18,500),color:r.plasma,align:"right",alpha:t});let u=o+74;ut(n,a,o+24,a,u+6,r.ink2,1.5,t),ut(n,l,o+52,l,u+6,r.ink2,1.5,t),ut(n,a,u,l,u,r.ink2,1.5,t);let h=a+56;n.save(),n.globalAlpha=t,n.fillStyle=r.bg,n.fillRect(h-12,u-8,24,16),n.restore(),ut(n,h-12,u+8,h-4,u-8,r.ink2,1.5,t),ut(n,h-2,u+8,h+6,u-8,r.ink2,1.5,t),B(n,"8,192 ms",a+150,u+28,{f:C(r,"mono",20,600),color:r.ink,align:"center",alpha:t}),B(n,"not to scale",c,u+28,{f:C(r,"body",18,400),color:r.ink3,align:"right",alpha:t});let d=1090,f=C(r,"body",20,400),p=C(r,"mono",20,600);B(n,"RULE",d,o,{f:C(r,"body",18,600),color:r.ink3,alpha:t}),wt(n,[["Ip start = magnetics start + ",f,r.ink2],["8,192 ms",p,r.ink]],d,o+30,{alpha:t}),wt(n,[["kept if the 10% crossing",f,r.ink2]],d,o+58,{alpha:t}),wt(n,[["lands in ",f,r.ink2],["[\u2212100, +150] ms",p,i?r.good:r.ink2]],d,o+86,{alpha:t});let v=`${s>=0?"+":"\u2212"}${Math.abs(Math.round(s))} ms`;wt(n,[["crossing ",C(r,"body",20,400),r.ink3],[v,C(r,"mono",20,600),i?r.good:r.warn],[i?"  inside":"  outside",C(r,"body",20,500),i?r.good:r.warn]],Fn,812,{align:"right",alpha:t})},drawConsequence(n,t){let e=this.T,i=(1-t)*18,s=520+i;B(n,"WHAT IT BOUGHT",Ue,440+i,{f:C(e,"body",18,600),color:e.ink3,alpha:t});let r=(a,l,c)=>{let u=B(n,l,a,s,{f:C(e,"mono",76,600),color:e.good,alpha:t});B(n,"\xD710\u207B\u2074",a+u+10,s-38,{f:C(e,"body",20,500),color:e.ink2,alpha:t}),B(n,c,a+u+10,s-12,{f:C(e,"body",20,500),color:e.ink,alpha:t})};r(Ue,"+6.8","time-blocked fold"),r(Ue+470,"+1.1","Development board"),["reads inputs only","identical for training and inference rows","disclosed to the organisers before the Final phase"].forEach((a,l)=>{let c=640+l*50+i,u=t*Ut((t-.2-l*.12)/.5,0,1);ut(n,Ue,c-7,Ue+22,c-7,e.good,2.5,u),B(n,a,Ue+40,c,{f:C(e,"body",26,500),color:e.ink,alpha:u})})}};var Ce=[{n:1,short:"metric loss",name:"Metric-weighted loss (instead of coefficient MSE)",H:"12",fam:"score"},{n:2,short:"789 features",name:"789 history features (instead of 91)",H:"11",fam:"inputs"},{n:3,short:"dropout + aux",name:"Dropout 0.3 + auxiliary scalar head",H:"4.5",fam:"ens"},{n:4,short:"11-bag + nets",name:"11-member bag + separate q95, \u03B2N nets",H:"6.3",fam:"ens"},{n:5,short:"window mean",name:"Mean with temporal-window members",H:"1.6",fam:"ens"},{n:6,short:"GN step",name:"Consistency correction, one Gauss\u2013Newton step",H:"2.8",fam:"score"},{n:7,short:"iterated GN",name:"Iterated Gauss\u2013Newton with prior M",H:"1.4",B:"2.7",fam:"score"},{n:8,short:"mirror currents",name:"Mirror-canonical currents",H:"1.4",B:"13.7",Dev:"2.6",fam:"inputs"},{n:9,short:"Ip time axis",name:"Ip time axis + heads retrained",H:"0.52",B:"6.8",Dev:"1.1",fam:"inputs"},{n:10,short:"1024\xD78 heads",name:"Correction heads 1024\xD78, 24 seeds",H:"0.05",B:"2.7",Dev:"0.33",fam:"score"},{n:11,short:"contour tune",name:"Contour fine-tune of the map members",H:"0.69",B:"0.74",fam:"score"}],Qb=.99598,t2="0.99982",G0="0.99137",e2="0.99700",W0="0.997253",n2=77e-6,zo=[{id:"score",label:"score-aware",sub:"loss \xB7 correction \xB7 fine-tune",tok:"plasma"},{id:"inputs",label:"inputs",sub:"features \xB7 currents \xB7 time axis",tok:"coil"},{id:"ens",label:"ensemble",sub:"bag \xB7 dropout \xB7 windows",tok:"ink2"}];for(let n of Ce)n.h=parseFloat(n.H),n.b=n.B!==void 0?parseFloat(n.B):null;var X0=(n,t)=>Ce.filter(e=>e.fam===n).reduce((e,i)=>e+(i[t]??0),0),Z0=Ce.reduce((n,t)=>n+t.h,0),$0=668,i2=78,td=42,ui=150,s2=6.2,Xr=1540,Zr=(1-Qb)*1e4+Ce.slice(0,4).reduce((n,t)=>n+t.h,0),wi=n=>ui+n*s2,Hl=n=>$0+i2*(n+.5),Si=636,ed=14,q0=[688,988,1288],nd=72,Y0={id:"ladder",steps:4,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(()=>this.draw(),this.v),this.step=0,this.hover=-1,this.pinned=-1,this.demoIdx=-1,this.mode="H",this.rects=[];let e=document.createElement("div");e.className="ui-panel",e.style.cssText="position:absolute;box-sizing:border-box;width:370px;pointer-events:none;opacity:0;transition:opacity .22s var(--ease);z-index:3;",n.appendChild(e),this.card=e;let i=document.createElement("div");i.className="ui-toggle",i.style.cssText="position:absolute;left:1060px;top:798px;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",i.innerHTML='<button type="button" data-m="H" aria-pressed="true">holdout \xB7 150 shots</button><button type="button" data-m="B" aria-pressed="false">time-blocked fold \xB7 500 shots</button>',i.addEventListener("mousedown",r=>r.preventDefault()),i.addEventListener("click",r=>{let o=r.target.closest("button");o&&(o.blur(),this.timers.clear(),this.setMode(o.dataset.m))}),n.appendChild(i),this.toggle=i;let s=this.cv.canvas;this._move=r=>{let o=this.cv.toDesign(r),a=this.hit(o);a!==this.hover&&(this.hover=a,this.demoIdx=-1,this.loop.dirty=!0),s.style.cursor=a>=0?"pointer":"default"},this._leaveC=()=>{this.hover=-1,this.loop.dirty=!0},this._down=r=>{let o=this.cv.toDesign(r),a=this.hit(o);this.timers.clear(),this.demoIdx=-1,this.pinned=a===this.pinned?-1:a,r.pointerType!=="mouse"&&(this.hover=a),this.loop.dirty=!0},s.addEventListener("pointermove",this._move),s.addEventListener("pointerleave",this._leaveC),s.addEventListener("pointerdown",this._down),Ce.forEach((r,o)=>this.v.set(`r${o}`,0,{instant:!0})),this.v.set("callout",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0)},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.hover=-1,this.demoIdx=-1},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear(),this.demoIdx=-1,this.pinned=-1;let i=this.ctx.reducedMotion,s=t||i,r=(a,l=0)=>({dur:a,delay:l,instant:s});this.v.set("callout",n===0?1:0,r(n===0?600:450,n===0?200:0));let o=n>=1&&e<1&&!s;Ce.forEach((a,l)=>{n>=1?this.v.set(`r${l}`,1,r(o?520:600,o?250+180*l:0)):this.v.set(`r${l}`,0,r(500))}),this.v.set("legend",n===1?1:0,r(500,n===1&&o?300:0)),this.v.set("regroup",n>=2?1:0,r(1300)),this.v.set("fin",n>=3?1:0,r(1100,(n>=3,0))),n!==2&&this.setMode("H",s),this.toggle.style.transitionDelay=n===2&&!s?"0.9s":"0s",this.toggle.style.opacity=n===2?"1":"0",this.toggle.style.pointerEvents=n===2?"auto":"none",this.loop.dirty=!0},setMode(n,t=!1){this.mode=n,this.toggle.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.m===n))),this.v.set("bmode",n==="B"?1:0,{dur:900,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},demo(){this.timers.clear(),this.step===1?(Ce.forEach((n,t)=>this.timers.after(t*700,()=>{this.demoIdx=t,this.loop.dirty=!0})),this.timers.after(Ce.length*700+600,()=>{this.demoIdx=-1,this.loop.dirty=!0})):this.step===2&&(this.timers.after(200,()=>this.setMode("B")),this.timers.after(4200,()=>this.setMode("H")))},stairRect(n,t){let e=Zr;for(let a=0;a<n;a++)e-=Ce[a].h;let i=e-Ce[n].h*t,s=wi(i),r=wi(e),o=Math.max(r-s,t>0?3*Math.min(1,t*2):0);return{x:Hl(n)-td/2,y:r-o,w:td,h:o}},stackRect(n,t){let e=Ce[n],i=zo.findIndex(l=>l.id===e.fam),s=0;for(let l=0;l<n;l++)Ce[l].fam===e.fam&&(s+=zt(Ce[l].h,Ce[l].b??0,t));let r=zt(e.h,e.b??0,t),o=e.b===null?zt(2,0,t):2,a=Math.max(r*ed,o);return{x:q0[i]-nd/2,y:Si-s*ed-a,w:nd,h:a}},barRect(n){let t=this.v.get(`r${n}`),e=this.v.get("regroup"),i=this.v.get("bmode"),s=this.stairRect(n,t);if(e<=0)return s;let r=this.stackRect(n,i),o=on(Ut(e*1.35-n/(Ce.length-1)*.35,0,1));return{x:zt(s.x,r.x,o),y:zt(s.y,r.y,o),w:zt(s.w,r.w,o),h:zt(s.h,r.h,o),t:o}},hit(n){if(this.step<1||this.step>2)return-1;for(let t=0;t<Ce.length;t++){let e=this.rects[t];if(!e)continue;let i=Math.max(0,14-e.h/2);if(n.x>=e.x-8&&n.x<=e.x+e.w+8&&n.y>=e.y-i-30&&n.y<=e.y+e.h+i)return t}return-1},famColor(n){let t=zo.find(e=>e.id===n);return this.T[t.tok]},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("regroup"),i=this.v.get("fin"),s=Ut(1-i*2,0,1),r=this.v.get("callout"),o=this.demoIdx>=0?this.demoIdx:this.pinned>=0?this.pinned:this.hover,a=Ut(1-e*2.2,0,1)*s;if(a>.01){for(let x=10;x<Zr;x+=10)ut(n,612,wi(x),1540,wi(x),t.line,1,a*.55);ut(n,612,ui,1540,ui,t.ink2,1.5,a),B(n,"perfect",612,ui-16,{f:C(t,"body",20,500),color:t.ink,alpha:a}),wt(n,[["1 \u2212 S = 0",C(t,"mono",19,500),t.ink3]],700,ui-16,{alpha:a});let h=600,d=wi(40),f=wi(50);ut(n,h,d,h,f,t.ink2,2,a),ut(n,h-6,d,h+6,d,t.ink2,2,a),ut(n,h-6,f,h+6,f,t.ink2,2,a),n.save(),n.translate(h-14,(d+f)/2),n.rotate(-Math.PI/2),B(n,"10 \xD7 10\u207B\u2074",0,0,{f:C(t,"body",18,500),color:t.ink2,align:"center",alpha:a}),n.restore(),n.save(),n.translate(586,wi(20)),n.rotate(-Math.PI/2),B(n,"gap to perfect, 1 \u2212 S",0,0,{f:C(t,"body",18,500),color:t.ink3,align:"center",alpha:a}),n.restore();let p=wi(Zr);ut(n,612,p,$0+14,p,t.ink,2,a),B(n,"first file",680,p-14,{f:C(t,"body",20,500),color:t.ink2,align:"right",alpha:a});let v=Zr;Ce.forEach((x,w)=>v-=x.h*this.v.get(`r${w}`));let g=wi(v);n.save(),n.globalAlpha=a,n.strokeStyle=t.warn,n.lineWidth=2,n.beginPath(),n.moveTo(Xr-8,ui),n.lineTo(Xr,ui),n.lineTo(Xr,g),n.lineTo(Xr-8,g),n.stroke();let m=n.createLinearGradient(0,ui,0,g);m.addColorStop(0,pt(t.warn,0)),m.addColorStop(1,pt(t.warn,.1)),n.fillStyle=m,n.fillRect(Xr-3,ui,6,g-ui),n.restore();let y=(Zr-v)/Z0>.5?"remaining gap":"gap to perfect";B(n,y,Xr-16,(ui+g)/2+7,{f:C(t,"body",20,500),color:t.warn,align:"right",alpha:a});for(let x=0;x<Ce.length-1;x++){let w=this.v.get(`r${x}`),S=this.v.get(`r${x+1}`);if(w<.99||S<=0)continue;let T=this.stairRect(x,1);ut(n,T.x+T.w,T.y,Hl(x+1)-td/2,T.y,t.lineStrong,1,a*Math.min(1,S*3),[3,4])}}if(r>.01){let h=r*s,d=660,f=300+(1-r)*14;B(n,"FIRST FILE \xB7 DEVELOPMENT BOARD",d,f-66,{f:C(t,"body",18,600),color:t.ink3,alpha:h}),wt(n,[["R\xB2",C(t,"body",30,500),t.ink2],["\u03C8",C(t,"body",22,500),t.ink2]],d,f,{alpha:h}),B(n,t2,d+64,f,{f:C(t,"mono",58,500),color:t.ink,alpha:h}),B(n,"yet",d+340,f-2,{f:`italic 400 34px ${t.fontDisplay}`,color:t.ink3,alpha:h}),B(n,"S",d+412,f,{f:C(t,"body",30,500),color:t.ink2,alpha:h}),B(n,G0,d+446,f,{f:C(t,"mono",58,500),color:t.warn,alpha:h}),B(n,"pixels were already right; the score was not.",d,f+50,{f:C(t,"body",22,400),color:t.ink2,alpha:h}),B(n,"Everything that follows happens in the third decimal.",d,f+84,{f:C(t,"body",22,400),color:t.ink3,alpha:h})}let l=this.v.get("legend")*s;if(l>.01){let h=660,d=214;B(n,"paired gains, \xD710\u207B\u2074 of S, 150-shot holdout",h,d-34,{f:C(t,"body",20,500),color:t.ink2,alpha:l});for(let f of zo)n.save(),n.globalAlpha=l,n.fillStyle=t[f.tok],ie(n,h,d-13,14,14,3),n.fill(),n.restore(),h+=22+B(n,f.label,h+22,d,{f:C(t,"body",20,500),color:t.ink,alpha:l})+28;B(n,"click a bar for H / B / Dev",660,d+34,{f:C(t,"body",18,400),color:t.ink3,alpha:l})}this.rects=[];let c=this.v.get("bmode");for(let h=0;h<Ce.length;h++){let d=Ce[h],f=this.v.get(`r${h}`);if(f<=.001&&e<=0){this.rects[h]=null;continue}let p=this.barRect(h);this.rects[h]=p;let v=this.famColor(d.fam),g=o>=0&&o!==h?.4:1,m=d.b===null?c:0,_=s*Math.min(1,f*2.5+e)*g*(1-m*.92);if(_<.005)continue;n.save(),n.globalAlpha=_,o===h&&(n.globalCompositeOperation="lighter",n.shadowColor=pt(v,.55),n.shadowBlur=22);let y=n.createLinearGradient(0,p.y,0,p.y+p.h);y.addColorStop(0,pt(v,.95)),y.addColorStop(1,pt(v,.62)),n.fillStyle=y,ie(n,p.x,p.y,p.w,Math.max(p.h,.5),Math.min(3,p.h/2)),n.fill(),n.restore(),e>.5&&ut(n,p.x,p.y+p.h,p.x+p.w,p.y+p.h,t.bg,2,s*e)}let u=Ut(1-e*3,0,1)*s;if(u>.01){let h=wi(Zr)+34;for(let d=0;d<Ce.length;d++){let f=Ce[d],p=this.v.get(`r${d}`),v=Ut((p-.35)/.65,0,1)*u*(o>=0&&o!==d?.45:1);if(v<.01)continue;let g=this.stairRect(d,1);B(n,`+${f.H}`,Hl(d),g.y-12,{f:C(t,"mono",21,600),color:o===d?t.ink:this.famColor(f.fam),align:"center",alpha:v}),n.save(),n.translate(Hl(d)+8,h),n.rotate(-Math.PI*.22),B(n,f.short,0,0,{f:C(t,"body",19,500),color:o===d?t.ink:t.ink2,align:"right",alpha:v}),n.restore()}}e>.01&&this.drawFamilies(n,e*s,c,o),i>.01&&this.drawFinal(n,i),this.updateCard(o)},drawFamilies(n,t,e,i){let s=this.T,r=Ut((t-.72)/.28,0,1);ut(n,640,Si,1520,Si,s.lineStrong,1.5,t),zo.forEach((l,c)=>{let u=q0[c],h=s[l.tok],d=u-nd/2;B(n,l.label,d,Si+36,{f:C(s,"body",24,600),color:h===s.ink2?s.ink:h,alpha:r}),B(n,l.sub,d,Si+64,{f:C(s,"body",18,400),color:s.ink3,alpha:r});let f=X0(l.id,"h"),p=X0(l.id,"b"),v=Ce.some(A=>A.fam===l.id&&A.b!==null),g=zt(f,v?p:0,e),m=Si-g*ed,_=Ce.map((A,U)=>({r:A,k:U})).filter(A=>A.r.fam===l.id&&(A.r.b!==null||e<.5)),y=_.map(A=>{let U=this.stackRect(A.k,e);return U.y+U.h/2}),x=26,w=Math.min(m+4,Si-10-(_.length-1)*x),S=El(y,x,w,Si-10),T=Math.min(...S)-12,E=Math.min(m,T)-58,b=r*(1-e),M=r*e;wt(n,[[f.toFixed(1),C(s,"mono",44,600),s.ink]],d,E,{alpha:b}),B(n,`\u2248 ${Math.round(100*f/Z0)}% of the gain`,d,E+32,{f:C(s,"body",20,500),color:s.ink2,alpha:b}),v?(wt(n,[[p.toFixed(1),C(s,"mono",44,600),s.ink]],d,E,{alpha:M}),B(n,"on the fold",d,E+32,{f:C(s,"body",20,500),color:s.ink2,alpha:M})):(B(n,"not measured",d,Si-44,{f:C(s,"body",20,500),color:s.ink3,alpha:M}),B(n,"on the fold",d,Si-18,{f:C(s,"body",20,500),color:s.ink3,alpha:M})),_.forEach((A,U)=>{let L=this.stackRect(A.k,e),N=zt(A.r.h,A.r.b??0,e),k=A.r.b===null?1-e:1,I=r*k*(i>=0&&i!==A.k?.45:1);if(I<.01||N<=0)return;let O=L.x+L.w+6,H=O+18;n.save(),n.globalAlpha=I*.6,n.strokeStyle=s.lineStrong,n.lineWidth=1,n.beginPath(),n.moveTo(O,y[U]),n.lineTo(H,S[U]),n.lineTo(H+6,S[U]),n.stroke(),n.restore();let $=e>.5&&A.r.B?A.r.B:A.r.H,K=wt(n,[[`+${$}`,C(s,"mono",19,600),s.ink]],H+10,S[U]+7,{alpha:I});B(n,A.r.short,K+8,S[U]+7,{f:C(s,"body",18,400),color:s.ink2,alpha:I})})});let o="sums of paired gains, \xD710\u207B\u2074 of S, 150-shot holdout",a="far from the training period, fixing the inputs mattered most";B(n,o,1060,760,{f:C(s,"body",20,400),color:s.ink3,align:"center",alpha:r*(1-e)}),B(n,a,1060,760,{f:C(s,"body",20,500),color:s.coil,align:"center",alpha:r*e})},drawFinal(n,t){let e=this.T,i=on(Ut((t-.25)/.75,0,1)),s=(1-i)*24;B(n,"BLIND FINAL \xB7 CHALLENGE 1",640,150+s,{f:C(e,"body",18,600),color:e.ink3,alpha:i}),wt(n,[["S",C(e,"body",40,500),e.ink2]],640,250+s,{alpha:i});let r=B(n,W0,684,250+s,{f:C(e,"mono",100,500),color:e.ink,alpha:i}),o=B(n,"2nd",684+r+44,250+s,{f:`400 72px ${e.fontDisplay}`,color:e.plasma,alpha:i});B(n,"place",684+r+44+o+12,250+s,{f:C(e,"body",24,500),color:e.ink2,alpha:i});let a=500+s,l=.7,c=1400,u=c-n2*1e6*l,h=c-1e3*l;n.save(),n.globalAlpha=i;let d=n.createLinearGradient(h,0,c,0);d.addColorStop(0,"rgba(255,255,255,0.025)"),d.addColorStop(1,"rgba(255,255,255,0.07)"),n.fillStyle=d,n.fillRect(h,a-56,c-h,112),n.restore(),ut(n,620,a,1530,a,e.lineStrong,1.5,i),n.save(),n.globalAlpha=i,n.fillStyle=e.lineStrong,n.beginPath(),n.moveTo(1540,a),n.lineTo(1528,a-6),n.lineTo(1528,a+6),n.fill(),n.restore(),B(n,"S",1540,a+34,{f:C(e,"body",20,500),color:e.ink3,align:"right",alpha:i});let f=a-78;ut(n,h,f,c,f,e.ink3,1.5,i),ut(n,h,f-7,h,f+7,e.ink3,1.5,i),ut(n,c,f-7,c,f+7,e.ink3,1.5,i),wt(n,[["top ten within 1 \xD7 10\u207B\xB3",C(e,"body",20,500),e.ink2]],(h+c)/2,f-14,{align:"center",alpha:i});let p=[.996843,.996785,.996741,.996611,.996504,.996465,.996453,.996411];p.forEach((g,m)=>{let _=c-(.99733-g)*1e6*l,y=i*Ut((t-.4-m*.03)/.3,0,1);ut(n,_,a-22,_,a+22,e.ink3,2,y)}),B(n,"3rd",c-(.99733-p[0])*1e6*l,a+50,{f:C(e,"body",18,500),color:e.ink3,align:"center",alpha:i}),B(n,"10th",c-(.99733-p[7])*1e6*l,a+50,{f:C(e,"body",18,500),color:e.ink3,align:"center",alpha:i}),B(n,"public final leaderboard, places 1 to 10",h,a+92,{f:C(e,"body",18,400),color:e.ink3,alpha:i}),ut(n,c,a-34,c,a+34,e.ink,2.5,i),B(n,"1st",c,a-44+0,{f:C(e,"body",20,600),color:e.ink,align:"center",alpha:i*0}),B(n,"1st",c+12,a+56,{f:C(e,"body",22,600),color:e.ink,alpha:i}),n.save(),n.globalAlpha=i,n.globalCompositeOperation="lighter",n.shadowColor=pt(e.plasma,.8),n.shadowBlur=18,ut(n,u,a-40,u,a+40,e.plasma,3,1),n.restore(),B(n,"2nd",u-12,a+56,{f:C(e,"body",22,600),color:e.plasma,align:"right",alpha:i}),B(n,W0,u-12,a+84,{f:C(e,"mono",20,500),color:e.plasma,align:"right",alpha:i});let v=a+128;ut(n,u,a+42,u,v+8,e.plasma,1,i*.5,[2,3]),ut(n,c,a+66,c,v+8,e.ink,1,i*.5,[2,3]),ut(n,u,v,c,v,e.ink2,1.5,i),B(n,"0.000077",(u+c)/2,v+32,{f:C(e,"mono",22,600),color:e.ink,align:"center",alpha:i}),B(n,"behind 1st",(u+c)/2,v+58,{f:C(e,"body",18,400),color:e.ink2,align:"center",alpha:i}),wt(n,[["Development board  ",C(e,"body",20,500),e.ink3],[G0,C(e,"mono",22,500),e.ink2],[" first file  \u2192  ",C(e,"body",20,400),e.ink3],[e2,C(e,"mono",22,500),e.ink]],640,800+s,{alpha:i})},updateCard(n){let t=this.card;if(!(n>=0&&this.step>=1&&this.step<=2&&this.rects[n])){t.style.opacity="0";return}let i=Ce[n],s=this.rects[n];if(this._cardFor!==n){this._cardFor=n;let a=zo.find(u=>u.id===i.fam),l=this.T[a.tok],c=(u,h)=>`<div style="flex:1"><div class="ui-label" style="color:var(--ink3);font-size:18px">${u}</div><div class="ui-readout" style="font-size:26px;margin-top:6px;color:${h?"var(--ink)":"var(--ink3)"}">${h?"+"+h:"\u2014"}</div></div>`;t.innerHTML=`<div style="display:flex;align-items:center;gap:10px;font:600 18px var(--font-body);color:${l};letter-spacing:.04em;text-transform:uppercase"><span style="font-family:var(--font-mono)">#${i.n}</span><span>${a.label}</span></div><div style="font:500 21px/1.25 var(--font-body);color:var(--ink);margin:10px 0 14px">${i.name}</div><div style="display:flex;gap:10px">${c("holdout",i.H)}${c("fold",i.B)}${c("Dev board",i.Dev)}</div><div class="ui-hint" style="margin-top:12px">\xD710\u207B\u2074 \xB7 fold = time-blocked, 500 shots</div>`}let r=1180,o=this.step===1?392:64;t.style.left=`${r}px`,t.style.top=`${o}px`,t.style.opacity="1"}};var J0=li.d3d,qr=li.mast,ds=190,r2=604,o2=440,Te=n=>r2+n*ds,Oe=n=>o2-n*ds,K0=420;function a2(n){let t=0;for(let e=0,i=n.length-1;e<n.length;i=e++)t+=n[i][0]*n[e][1]-n[e][0]*n[i][1];return t/2}function j0(n,t){let e=n.slice();a2(e)<0&&e.reverse();let i=0,s=-1/0;e.forEach(([c,u],h)=>{let d=c-3*Math.abs(u);d>s&&(s=d,i=h)}),e=e.slice(i).concat(e.slice(0,i));let r=[0];for(let c=1;c<=e.length;c++){let u=e[c-1],h=e[c%e.length];r.push(r[c-1]+Math.hypot(h[0]-u[0],h[1]-u[1]))}let o=r[e.length],a=[],l=0;for(let c=0;c<t;c++){let u=c/t*o;for(;r[l+1]<u;)l++;let h=e[l],d=e[(l+1)%e.length],f=(u-r[l])/Math.max(1e-9,r[l+1]-r[l]);a.push([h[0]+(d[0]-h[0])*f,h[1]+(d[1]-h[1])*f])}return a}var id=j0(J0.wall,K0),Ws=j0(qr.wall,K0);function Q0(n){let t=[];for(let e of n.coils){if(e.id==="SOL"){t.push({id:e.id,group:e.group,poly:l2(e.R,e.Z,e.width,e.height)});continue}for(let i of e.elements)t.push({id:e.id,group:e.group,poly:Po(i)})}return t}function l2(n,t,e,i){return[[n-e/2,t-i/2],[n+e/2,t-i/2],[n+e/2,t+i/2],[n-e/2,t+i/2]]}var tm=Q0(J0),sd=Q0(qr),Sn=qr.coils.find(n=>n.id==="SOL"),em={R0:1.68,a:.6,kappa:1.78,delta:.42,shift:.06},$r={R0:.86,a:.62,kappa:1.9,delta:.42,shift:.08};function nm(n,t,e){let i={};for(let s in n)i[s]=n[s]+(t[s]-n[s])*e;return i}function rd(n,t,e){let i=Math.asin(Math.max(-.9,Math.min(.9,n.delta*t))),s=n.R0+n.shift*(1-t*t)+n.a*t*Math.cos(e+i*Math.sin(e)),r=n.kappa*n.a*t*Math.sin(e);return[s,r]}function Ho(n,t){let e=n.R0+n.shift*(1-t*t);return[e-n.a*t,e+n.a*t]}var Vo=n=>{let t=Math.min(1,Math.max(0,n));return .9*Math.pow(1-t*t,1.5)+.1*(1-Math.pow(t,10))};function im(n){let t=0,e=1;for(let i=0;i<40;i++){let s=(t+e)/2;Vo(s)>n?t=s:e=s}return(t+e)/2}function od(n,t){let e=n.R0+n.shift,i=t<e,s=0,r=1.2;for(let o=0;o<40;o++){let a=(s+r)/2,[l,c]=Ho(n,a);(i?l<t:c>t)?r=a:s=a}return(s+r)/2}var Nn=101,c2=-8e6;function sm(){let n=performance.now(),t=qr.grid,e=Wi(t.Rmin,t.Rmax,t.Zmin,t.Zmax,Nn,Nn),i=Nn*Nn,s=new Float64Array(i),r=new Float64Array(i),o=new Float64Array(i),a=(E,b)=>{for(let M=0;M<Nn;M++){let A=e.Z[M];for(let U=0;U<Nn;U++){let L=e.R[U],N=0;for(let k=0;k<b.length;k++)N+=b[k][2]*Ds(L,A,b[k][0],b[k][1]);E[M*Nn+U]+=N}}},l=(E,b)=>{let M=E.elements.reduce((U,L)=>U+(L.turns||1),0)||1,A=[];for(let U of E.elements){let L=zu(U,.08);for(let N of L)A.push([N.R,N.Z,b*(U.turns||1)/M/L.length])}return A},c=[];for(let E of qr.coils)E.id!=="SOL"&&c.push(...l(E,E.default));a(s,c),a(r,Sn.elements.map(E=>[E.R,E.Z,c2*E.turns/Sn.turns]));let u=7e5,h=$r,d=[],f=0,p=14,v=44;for(let E=0;E<p;E++){let b=(E+.5)/p,M=Math.pow(1-b*b,1.2)*b;for(let A=0;A<v;A++){let[U,L]=rd(h,b,(A+.5)/v*2*Math.PI);d.push([U,L,M]),f+=M}}d.forEach(E=>E[2]*=u/f),a(o,d);let g=new Float64Array(i);for(let E=0;E<i;E++)g[E]=s[E]+.5*r[E]+o[E];let m=new Uint8Array(i);for(let E=0;E<Nn;E++)for(let b=0;b<Nn;b++)m[E*Nn+b]=_e(qr.wall,e.R[b],e.Z[E])?1:0;let _=-1/0;for(let E=0;E<i;E++)m[E]&&g[E]>_&&(_=g[E]);let y=h.R0+h.a,x=Math.round((y-e.Rmin)/e.dR),w=Math.round((0-e.Zmin)/e.dZ),S=g[w*Nn+x],T=[.12,.3,.5,.7,.86,1].map(E=>_+(S-_)*E);return{grid:e,pf:s,sol:r,pl:o,ref:g,mask:m,levels:T,ax:_,bnd:S,ms:performance.now()-n}}function rm(n,t,e){let i=n.ref.length;e||(e=new Float64Array(i));for(let s=0;s<i;s++)e[s]=n.ref[s]+(t-.5)*n.sol[s];return e}function ad(n,t,e){return e.map(i=>Ve(t,Nn,Nn,i,n.grid))}var ld=[.22,.42,.6,.77,.92],h2=["#fff0c2","#ffd889","#ffc062","#ffa449","#ff8b3d"],om=Array.from({length:24},(n,t)=>.235+(1.48-.235)*t/23),Ht={x0:1096,x1:1528,y0:200,y1:500,R0:.15,R1:1.6},Ti=n=>Ht.x0+(n-Ht.R0)/(Ht.R1-Ht.R0)*(Ht.x1-Ht.x0),Xs=n=>Ht.y1-n*(Ht.y1-Ht.y0)*.9,Tn=[.473,.662,.666,.69,.732,.751,.757,.76],u2=.761,Bn={x0:1110,x1:1500,y0:132,y1:330,v0:.44,v1:.8},On=n=>Bn.x0+n/8*(Bn.x1-Bn.x0),Je=n=>Bn.y1-(n-Bn.v0)/(Bn.v1-Bn.v0)*(Bn.y1-Bn.y0),d2=[{label:"flux map R\xB2",v:.981,s:"0.981",tok:"flux"},{label:"Consistency",v:.35,s:"0.350",tok:"warn"},{label:"q95 / \u03B2N R\xB2",v:.45,s:"0.450",tok:"warn"}];function f2(n){let t=n.length>>1,e=new Float32Array(4*t);for(let i=0;i<t;i++){let s=2*i,r=2*((i+1)%t);e[4*i]=.75*n[s]+.25*n[r],e[4*i+1]=.75*n[s+1]+.25*n[r+1],e[4*i+2]=.25*n[s]+.75*n[r],e[4*i+3]=.25*n[s+1]+.75*n[r+1]}return e}var p2="Geometry: EFIT machine files (DIII-D, MAST) \xB7 MAST wall: FAIR-MAST, CC BY-SA 4.0 \xB7 DIII-D wall: FreeGS",am={id:"mast",steps:4,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new nn,this.timers=new rn,this.cv=Mn(n,t),this.loop=new sn(a=>this.draw(a),this.v),this.step=-1,this.machine="mast",this.factor=1,this.liveT=null,this.dragging=!1,this.M=sm(),this.axisR=$r.R0+$r.shift,this.refC=this.filterC(ad(this.M,this.M.ref,this.M.levels)),this.oursBuf=new Float64Array(this.M.ref.length),this.oursKey=null;let e=document.createElement("div");e.className="ui-toggle",e.style.cssText="position:absolute;left:1184px;top:722px;opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",e.innerHTML='<button type="button" data-m="d3d" aria-pressed="false">DIII-D</button><button type="button" data-m="mast" aria-pressed="true">MAST</button>',e.addEventListener("mousedown",a=>a.preventDefault()),e.addEventListener("click",a=>{let l=a.target.closest("button");l&&(l.blur(),this.timers.clear(),this.setMachine(l.dataset.m))}),n.appendChild(e),this.tg0=e;let i=document.createElement("div");i.style.cssText="position:absolute;left:1096px;top:104px;display:flex;align-items:center;gap:14px;opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",i.innerHTML='<span class="ui-label">solenoid factor</span><div class="ui-toggle"><button type="button" data-f="1" aria-pressed="true">1.0</button><button type="button" data-f="0.5" aria-pressed="false">0.5</button></div>',i.addEventListener("mousedown",a=>a.preventDefault()),i.addEventListener("click",a=>{let l=a.target.closest("button");l&&(l.blur(),this.timers.clear(),this.setFactor(+l.dataset.f))}),n.appendChild(i),this.tg2=i;let s=this.cv.canvas,r=a=>a.x>Ht.x0-30&&a.x<Ht.x1+30&&a.y>Ht.y0-30&&a.y<Ht.y1+16,o=a=>{this.liveT=Ut((Ht.y1-a.y)/((Ht.y1-Ht.y0)*.9),.06,.97),this.v.set("live",1,{dur:200,instant:this.ctx.reducedMotion}),this.loop.dirty=!0};this._move=a=>{if(this.step!==1)return;let l=this.cv.toDesign(a);this.dragging||a.pointerType==="mouse"&&r(l)?(this.timers.clear(),o(l),s.style.cursor="ns-resize"):(s.style.cursor="default",a.pointerType==="mouse"&&this.liveT!==null&&!this.demoing&&this.v.set("live",0,{dur:300}))},this._down=a=>{if(this.step!==1)return;let l=this.cv.toDesign(a);if(r(l)){a.preventDefault(),this.timers.clear(),this.demoing=!1,this.dragging=!0;try{s.setPointerCapture(a.pointerId)}catch{}o(l)}},this._up=a=>{if(this.dragging){this.dragging=!1;try{s.releasePointerCapture(a.pointerId)}catch{}}},this._leaveC=()=>{!this.dragging&&!this.demoing&&this.v.set("live",0,{dur:300}),s.style.cursor="default"},s.addEventListener("pointermove",this._move),s.addEventListener("pointerdown",this._down),s.addEventListener("pointerup",this._up),s.addEventListener("pointercancel",this._up),s.addEventListener("pointerleave",this._leaveC);for(let a of["m","s0","s1","s2","s3","ana","cmp","lad","gz","ves","live","stamp"])this.v.set(a,0,{instant:!0});this.v.set("m",1,{instant:!0}),this.v.set("f",1,{instant:!0}),ld.forEach((a,l)=>this.v.set("p"+l,0,{instant:!0})),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0)},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this._shim=!1,this.v.finish(),this.dragging=!1,this.demoing=!1,this.liveT=null,this.v.set("live",0,{instant:!0})},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear(),this._shim=!1,this.demoing=!1;let i=t||this.ctx.reducedMotion,s=(o,a=0)=>({dur:o,delay:a,instant:i});if(n===0?(this.machine="mast",this.syncToggle0(),!i&&!(e>0)?(this.v.set("m",0,{instant:!0}),this.v.set("stamp",0,{instant:!0}),this.v.set("m",1,s(1350,250)),this.v.set("stamp",1,s(450,1250))):(this.v.set("m",1,s(700)),this.v.set("stamp",1,s(400)))):this.v.set("m",1,s(700)),this.v.set("s0",n===0?1:0,s(n===0?500:350)),this.v.set("s1",n===1?1:0,s(n===1?500:350,n===1&&!i?150:0)),this.v.set("s2",n===2?1:0,s(n===2?500:350)),this.v.set("s3",n===3?1:0,s(n===3?500:350)),this.v.set("ana",n<=1?1:0,s(600)),this.v.set("cmp",n>=2?1:0,s(600)),ld.forEach((o,a)=>{n===1&&e!==1&&!i?(this.v.set("p"+a,0,{instant:!0}),this.v.set("p"+a,1,s(520,250+240*a))):this.v.set("p"+a,n===1?1:this.v.get("p"+a),s(300))}),this.liveT=null,this.v.set("live",0,{instant:!0}),this.setFactor(n>=3?.5:1,i),n===3){if(e!==3&&!i)for(let o of["lad","gz","ves"])this.v.set(o,0,{instant:!0});this.v.set("lad",1,s(1100,150)),this.v.set("gz",1,s(800,600)),this.v.set("ves",1,s(700,900))}else for(let o of["lad","gz","ves"])this.v.set(o,0,s(300));let r=(o,a,l)=>{o.style.transitionDelay=a&&!i?l:"0s",o.style.opacity=a?"1":"0",o.style.pointerEvents=a?"auto":"none"};r(this.tg0,n===0,"1.2s"),r(this.tg2,n===2,"0.4s"),this.loop.dirty=!0},setMachine(n,t=!1){this.machine=n,this.syncToggle0(),this.v.set("m",n==="mast"?1:0,{dur:1350,instant:t||this.ctx.reducedMotion}),this.v.set("stamp",n==="mast"?1:0,{dur:400,delay:n==="mast"?1e3:0,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},syncToggle0(){this.tg0.querySelectorAll("button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.m===this.machine)))},setFactor(n,t=!1){this.factor=n,this.tg2.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(+e.dataset.f===n))),this.v.set("f",n,{dur:1100,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},demo(){this.timers.clear(),this._shim=!1,this.loop.dirty=!0;let n=this.ctx.reducedMotion;if(this.step===0)this.machine="d3d",this.syncToggle0(),this.v.set("m",0,{dur:500,instant:n}),this.v.set("stamp",0,{dur:250,instant:n}),this.timers.after(n?50:900,()=>this.setMachine("mast"));else if(this.step===1){this.demoing=!0;let t=performance.now(),e=3600;this.v.set("live",1,{dur:250,instant:n});let i=()=>{let s=Ut((performance.now()-t)/e,0,1);this.liveT=zt(.95,.08,on(s)),this.loop.dirty=!0,s<1?this.timers.after(16,i):this.timers.after(900,()=>{this.demoing=!1,this.v.set("live",0,{dur:400})})};n?(this.liveT=.5,this.loop.dirty=!0):i()}else if(this.step===2)this.setFactor(1),this.timers.after(n?50:700,()=>this.setFactor(.5));else if(this.step===3){for(let t of["lad","gz","ves"])this.v.set(t,0,{instant:!0});this.v.set("lad",1,{dur:1100,instant:n}),this.v.set("gz",1,{dur:800,delay:600,instant:n}),this.v.set("ves",1,{dur:700,delay:900,instant:n})}},filterC(n){return n.map(t=>t.filter(e=>e.closed&&e.length>16&&_e(e,this.axisR,0)).map(f2))},oursC(n){let t=Math.round(n*2e3);return t!==this.oursKey&&(rm(this.M,n,this.oursBuf),this.oursCache=this.filterC(ad(this.M,this.oursBuf,this.M.levels)),this.oursKey=t),this.oursCache},polyPath(n,t,e){if(n.beginPath(),Array.isArray(t[0]))t.forEach(([i,s],r)=>r?n.lineTo(Te(i),Oe(s)):n.moveTo(Te(i),Oe(s)));else for(let i=0;i<t.length;i+=2)i?n.lineTo(Te(t[i]),Oe(t[i+1])):n.moveTo(Te(t[i]),Oe(t[i+1]));e&&n.closePath()},glowStroke(n,t,e,i,s=1){i<=.002||(n.save(),n.globalCompositeOperation="lighter",n.strokeStyle=t,n.lineJoin="round",n.globalAlpha=i*.16*s,n.lineWidth=e*5,n.stroke(),n.globalAlpha=i*.3*s,n.lineWidth=e*2.4,n.stroke(),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle=t,n.lineWidth=e,n.lineJoin="round",n.stroke(),n.restore())},shapeNow(){return nm(em,$r,on(Ut(this.v.get("m"),0,1)))},surfPath(n,t,e,i=0,s=2*Math.PI,r=120){n.beginPath();for(let o=0;o<=r;o++){let[a,l]=rd(t,e,i+(s-i)*o/r);o?n.lineTo(Te(a),Oe(l)):n.moveTo(Te(a),Oe(l))}},draw(n){let t=this.cv.g,e=this.T;this.cv.begin();let i=this.v.get("m"),s=on(Ut(i,0,1)),r=this.v.get("s0"),o=this.v.get("s1"),a=this.v.get("s2"),l=this.v.get("s3");this.drawMachine(t,s,r),this.drawPlasma(t,s),this.v.get("cmp")>.002&&this.drawMaps(t),o>.002&&this.drawIsotherms(t,o),r>.002&&this.drawStep0(t,s,r),a>.002&&this.drawStep2(t,a),(l>.002||this.v.get("ves")>.002)&&this.drawStep3(t,l,n),this.drawFooter(t),this.step===3&&!this.ctx.reducedMotion&&!this._shim&&(this._shim=!0,this.timers.after(40,()=>{this._shim=!1,this.loop.dirty=!0}))},drawMachine(n,t,e){let i=this.T;e>.002&&(n.save(),n.setLineDash([5,7]),n.lineWidth=1.3,n.strokeStyle=i.ink3,n.globalAlpha=e*.55*t,this.polyPath(n,id,!0),n.stroke(),n.globalAlpha=e*.55*(1-t),this.polyPath(n,Ws,!0),n.stroke(),n.restore());let s=id.map((p,v)=>[zt(p[0],Ws[v][0],t),zt(p[1],Ws[v][1],t)]);this.wallNow=s,this.polyPath(n,s,!0),n.save();let r=n.createLinearGradient(0,Oe(2),0,Oe(-2));r.addColorStop(0,"rgba(255,255,255,0.035)"),r.addColorStop(.5,"rgba(255,255,255,0.055)"),r.addColorStop(1,"rgba(255,255,255,0.035)"),n.fillStyle=r,n.fill(),n.restore(),n.save(),n.strokeStyle=i.ink2,n.globalAlpha=.9,n.lineWidth=1.8,n.lineJoin="round",n.stroke(),n.restore();let o=(p,v)=>{if(!(v<=.002))for(let g of p)g.id!=="SOL"&&(this.polyPath(n,g.poly,!0),n.save(),n.globalAlpha=v,n.fillStyle=pt(i.coil,.3),n.fill(),n.strokeStyle=i.coil,n.globalAlpha=v*.85,n.lineWidth=1.2,n.stroke(),n.restore())};o(tm,1-t),o(sd,t);let a=sd.find(p=>p.id==="SOL"),l=this.v.get("s2"),c=this.v.get("f"),u=Te(Sn.R-Sn.width/2),h=Te(Sn.R+Sn.width/2),d=Oe(Sn.Z+Sn.height/2),f=Oe(Sn.Z-Sn.height/2);if(t>.002){let p=l*c;if(p>.002){n.save(),n.globalCompositeOperation="lighter";let v=(u+h)/2;for(let[g,m]of[[70,.12],[36,.22],[16,.35]]){let _=n.createLinearGradient(v-g,0,v+g,0);_.addColorStop(0,pt(i.coil,0)),_.addColorStop(.5,pt(i.coil,m*p)),_.addColorStop(1,pt(i.coil,0)),n.fillStyle=_,n.fillRect(v-g,d-8,2*g,f-d+16)}n.restore()}this.polyPath(n,a.poly,!0),n.save(),n.globalAlpha=t,n.fillStyle=pt(i.coil,.32+.5*l*c),n.fill(),n.strokeStyle=i.coil,n.lineWidth=1.2,n.globalAlpha=t*.9,n.stroke(),n.globalAlpha=t*.35,n.lineWidth=1;for(let v=d+12;v<f;v+=12)ut(n,u,v,h,v,i.bg,1,.8);n.restore()}},drawPlasma(n,t){let e=this.T,i=this.v.get("ana"),s=this.v.get("cmp"),r=this.shapeNow(),o=[r.R0+r.shift,0],a=.25+.75*i-.45*s;n.save(),this.surfPath(n,r,1),n.closePath(),n.clip(),n.globalCompositeOperation="lighter";let l=Te(o[0]),c=Oe(0),u=r.a*ds,h=r.a*r.kappa*ds;n.translate(l,c),n.scale(1,h/u);let d=n.createRadialGradient(0,0,0,0,0,u*1.05);if(d.addColorStop(0,pt(e.plasmaHot,.42*a)),d.addColorStop(.35,pt(e.plasma,.26*a)),d.addColorStop(.8,pt(e.plasmaDeep,.16*a)),d.addColorStop(1,pt(e.plasmaDeep,.06*a)),n.fillStyle=d,n.fillRect(-u*1.5,-u*1.5,u*3,u*3),n.restore(),i<=.002)return;let f=this.v.get("s1");for(let p of[.2,.4,.6,.8,1])this.surfPath(n,r,p),n.save(),n.lineWidth=p===1?1.8:1.2,n.strokeStyle=e.plasma,n.globalAlpha=i*(1-f)*(p===1?.85:.4),n.stroke(),n.strokeStyle=e.flux,n.globalAlpha=i*f*(p===1?.35:.18),n.stroke(),n.restore()},drawMaps(n){let t=this.T,e=this.v.get("cmp"),i=this.v.get("f"),s=this.oursC(i);n.save(),this.polyPath(n,Ws,!0),n.clip(),this.refC.forEach((r,o)=>r.forEach(a=>{this.polyPath(n,a,!0),this.glowStroke(n,t.flux,o===this.refC.length-1?2.2:1.6,e*.85,.9)})),s.forEach((r,o)=>r.forEach(a=>{this.polyPath(n,a,!0),this.glowStroke(n,t.plasma,o===s.length-1?2:1.4,e*.95,.6)})),n.restore()},drawIsotherms(n,t){let e=this.T,i=$r,s=i.R0+i.shift,r=Oe(0);n.save(),n.beginPath(),n.moveTo(Te(.2),r),n.lineTo(Te(1.9),r),this.glowStroke(n,e.coil,1.5,t*.8,.8),n.restore(),B(n,"laser",Te(1.9)+10,r+6,{f:C(e,"body",18,500),color:e.coil,align:"left",alpha:t*.9}),n.save(),n.globalAlpha=t*.8,ut(n,Te(s),r-9,Te(s),r+9,e.ink,1.5),n.restore();for(let d of om)n.save(),n.globalAlpha=t,n.fillStyle=e.coil,n.beginPath(),n.arc(Te(d),r,3.2,0,2*Math.PI),n.fill(),n.restore();let o=C(e,"body",18,500);B(n,"Thomson scattering: Te along the laser",Ht.x0,Ht.y0-52,{f:C(e,"body",21,600),color:e.ink,alpha:t}),B(n,"schematic profile, not MAST data",Ht.x0,Ht.y0-26,{f:o,color:e.ink3,alpha:t}),ut(n,Ht.x0,Ht.y1,Ht.x1,Ht.y1,e.lineStrong,1.2,t),ut(n,Ht.x0,Ht.y0,Ht.x0,Ht.y1,e.lineStrong,1.2,t);for(let d of[.5,1,1.5])ut(n,Ti(d),Ht.y1,Ti(d),Ht.y1+6,e.lineStrong,1.2,t),d<1.4&&B(n,d.toFixed(1),Ti(d),Ht.y1+28,{f:C(e,"mono",18),color:e.ink3,align:"center",alpha:t});B(n,"R (m)",Ht.x1,Ht.y1+28,{f:o,color:e.ink3,align:"right",alpha:t}),n.save(),n.translate(Ht.x0-16,(Ht.y0+Ht.y1)/2),n.rotate(-Math.PI/2),B(n,"Te",0,0,{f:o,color:e.ink3,align:"center",alpha:t}),n.restore(),ut(n,Ti(s),Ht.y0+4,Ti(s),Ht.y1,e.ink3,1,t*.6,[3,5]),B(n,"axis",Ti(s)+8,Ht.y0+20,{f:o,color:e.ink3,alpha:t});let[a,l]=Ho(i,1);n.save(),n.beginPath();for(let d=0;d<=200;d++){let f=zt(Ht.R0,Ht.R1,d/200),p=f<=a||f>=l?0:Vo(od(i,f));d?n.lineTo(Ti(f),Xs(p)):n.moveTo(Ti(f),Xs(p))}this.glowStroke(n,e.coil,2,t*.95,.6),n.restore();for(let d of om){let f=Vo(od(i,d));n.save(),n.globalAlpha=t,n.fillStyle=e.bg,n.strokeStyle=e.coil,n.lineWidth=1.5,n.beginPath(),n.arc(Ti(d),Xs(f),3.6,0,2*Math.PI),n.fill(),n.stroke(),n.restore()}let c=(d,f,p,v,g)=>{if(p<=.002||v<=.002)return;let[m,_]=Ho(i,d),y=Vo(d),x=v*Ut(p*3,0,1);ut(n,Ht.x0,Xs(y),Ht.x1,Xs(y),f,1.4,x*.8,[6,6]);for(let S of[m,_])n.save(),n.globalAlpha=x,n.strokeStyle=f,n.lineWidth=2,n.beginPath(),n.arc(Ti(S),Xs(y),7.5,0,2*Math.PI),n.stroke(),n.beginPath(),n.arc(Te(S),r,8,0,2*Math.PI),n.stroke(),n.fillStyle=f,n.beginPath(),n.arc(Te(S),r,3.6,0,2*Math.PI),n.fill(),n.restore();g&&B(n,g,Ht.x1+8,Xs(y)+6,{f:C(e,"mono",18),color:f,alpha:x,align:"left"});let w=Al(Ut((p-.1)/.9,0,1));w>.002&&(n.save(),this.surfPath(n,i,d,Math.PI,Math.PI-Math.PI*w,90),this.glowStroke(n,e.flux,2.2,v,1),this.surfPath(n,i,d,Math.PI,Math.PI+Math.PI*w,90),this.glowStroke(n,e.flux,2.2,v,1),n.restore())},u=this.v.get("live");if(ld.forEach((d,f)=>c(d,h2[f],this.v.get("p"+f),t*(1-.6*u),String(f+1))),this.liveT!==null&&u>.002){let d=im(this.liveT);c(d,e.ink,1,t*u,null);let[f,p]=Ho(i,d);wt(n,[["equal Te at  ",o,e.ink2],[`R = ${f.toFixed(2)} m`,C(e,"mono",19),e.ink],["  and  ",o,e.ink2],[`${p.toFixed(2)} m`,C(e,"mono",19),e.ink]],Ht.x0,Ht.y1+74,{alpha:t*u})}B(n,"drag along the profile to pick a temperature",Ht.x0,Ht.y1+74,{f:o,color:e.ink3,alpha:t*(1-u)});let h=Ht.y1+150;n.save(),n.globalAlpha=t,n.fillStyle=e.flux,n.fillRect(Ht.x0,h-40,3,64),n.restore(),B(n,"Te is constant on a flux surface:",Ht.x0+18,h-14,{f:C(e,"body",21,500),color:e.ink,alpha:t}),B(n,"equal-Te points either side of the axis",Ht.x0+18,h+14,{f:C(e,"body",19,400),color:e.ink2,alpha:t}),B(n,"lie on the same surface",Ht.x0+18,h+38,{f:C(e,"body",19,400),color:e.ink2,alpha:t})},drawStep0(n,t,e){let i=this.T,s=1184,r=(h,d,f,p,v)=>{p<=.002||(B(n,h,s,168+v,{f:C(i,"display",56,500),color:i.ink,alpha:p*e}),B(n,d,s,206+v,{f:C(i,"body",21,500),color:i.ink2,alpha:p*e}),B(n,f,s,240+v,{f:C(i,"body",19,400),color:i.ink3,alpha:p*e}))},o=Ut(1-t*2,0,1),a=Ut(t*2-1,0,1);r("DIII-D","General Atomics, San Diego","major radius \u2248 1.7 m \xB7 D-shaped",o,-12*(1-o)),r("MAST","UKAEA, Culham","spherical \xB7 aspect ratio \u2248 1.3",a,12*(1-a));let l=this.v.get("stamp");if(l>.002){let h=zt(1.18,1,Al(l)),d="zero-shot: no MAST labels",f=C(i,"body",22,600);n.save(),n.font=f;let p=n.measureText(d).width+36;n.translate(s+p/2,318),n.rotate(-.045),n.scale(h,h),n.globalAlpha=l*e,ie(n,-p/2,-24,p,48,8),n.fillStyle=pt(i.warn,.08),n.fill(),n.strokeStyle=i.warn,n.lineWidth=2,n.stroke(),n.restore(),n.save(),n.translate(s+p/2,318),n.rotate(-.045),n.scale(h,h),B(n,d,0,8,{f,color:i.warn,align:"center",alpha:l*e}),n.restore()}let c=420;[[i.ink2,"first wall","line"],[i.coil,"poloidal-field coils, solenoid","box"],[i.plasma,"plasma (toy shape)","glow"],[i.ink3,"other machine, same scale","dash"]].forEach(([h,d,f],p)=>{let v=c+p*38;if(n.save(),n.globalAlpha=e,f==="line")ut(n,s,v-6,s+28,v-6,h,1.8);else if(f==="dash")ut(n,s,v-6,s+28,v-6,h,1.3,.8,[5,5]);else if(f==="box")n.fillStyle=pt(h,.3),n.strokeStyle=h,n.lineWidth=1.2,n.fillRect(s+6,v-14,16,16),n.strokeRect(s+6,v-14,16,16);else{let g=n.createRadialGradient(s+14,v-6,0,s+14,v-6,12);g.addColorStop(0,pt(i.plasmaHot,.8)),g.addColorStop(1,pt(i.plasma,0)),n.fillStyle=g,n.fillRect(s,v-20,28,28)}n.restore(),B(n,d,s+42,v,{f:C(i,"body",19,400),color:i.ink2,alpha:e})})},drawStep2(n,t){let e=this.T,i=this.v.get("f"),s=1096,r=Ut((1-i)/.5,0,1),o=Oe(Sn.Z+Sn.height/2);B(n,`\xD7${i.toFixed(2).replace(/0$/,"")}`,Te(Sn.R)-4,o-14,{f:C(e,"mono",21,600),color:e.coil,align:"right",alpha:t});let a=190;n.save(),n.globalAlpha=t,ie(n,s,a,432,128,14),n.fillStyle="rgba(255,255,255,0.045)",n.fill(),n.strokeStyle=e.line,n.lineWidth=1,n.stroke(),n.restore(),B(n,"MAST flux-map R\xB2 \xB7 competition result",s+22,a+36,{f:C(e,"body",18,500),color:e.ink3,alpha:t});let l=C(e,"mono",44,600),c=r<.5?e.warn:e.ink3,u=r>=.5?e.good:e.ink3,h=B(n,"0.63",s+22,a+98,{f:l,color:c,alpha:t*zt(1,.55,r)});B(n,"\u2192",s+22+h+22,a+96,{f:C(e,"body",36,400),color:e.ink3,alpha:t}),B(n,"0.95",s+22+h+80,a+98,{f:l,color:u,alpha:t*zt(.55,1,r)}),B(n,r<.5?"factor 1.0":"factor 0.5",s+410,a+96,{f:C(e,"body",18,500),color:e.ink2,align:"right",alpha:t});let d=372;ut(n,s,d-6,s+34,d-6,e.flux,2.2,t),B(n,"reference map, factor \xBD (toy)",s+48,d,{f:C(e,"body",19,400),color:e.ink2,alpha:t}),ut(n,s,d+32,s+34,d+32,e.plasma,2.2,t),wt(n,[["ours, factor ",C(e,"body",19,400),e.ink2],[i.toFixed(2),C(e,"mono",19,500),e.ink],[" (toy)",C(e,"body",19,400),e.ink2]],s+48,d+38,{alpha:t}),B(n,"same coil currents, same toy plasma;",s,d+88,{f:C(e,"body",18,400),color:e.ink3,alpha:t}),B(n,"only the solenoid term differs",s,d+112,{f:C(e,"body",18,400),color:e.ink3,alpha:t});let f=560;n.save(),n.globalAlpha=t,n.fillStyle=e.coil,n.fillRect(s,f-26,3,70),n.restore(),B(n,"solenoid: documented factor \xBD",s+18,f,{f:C(e,"body",22,600),color:e.coil,alpha:t}),wt(n,[["turn-count convention  ",C(e,"body",19,400),e.ink2],["656",C(e,"mono",19,500),e.ink],[" vs ",C(e,"body",19,400),e.ink2],["328",C(e,"mono",19,500),e.ink],[" turns",C(e,"body",19,400),e.ink2]],s+18,f+32,{alpha:t})},drawStep3(n,t,e){let i=this.T,s=this.v.get("lad"),r=this.v.get("gz"),o=this.v.get("ves")*t,a=C(i,"body",18,400);if(o>.002){let M=Ws,A=[];for(let L=0;L<M.length;L+=21)A.push(M[L]);let U=this.ctx.reducedMotion?0:e/1e3;n.save(),n.globalCompositeOperation="lighter",A.forEach(([L,N],k)=>{let I=.75+.25*Math.sin(U*2.2+k*.9),O=n.createRadialGradient(Te(L),Oe(N),0,Te(L),Oe(N),22);O.addColorStop(0,pt(i.coil,.45*o*I)),O.addColorStop(1,pt(i.coil,0)),n.fillStyle=O,n.fillRect(Te(L)-22,Oe(N)-22,44,44)}),n.restore(),A.forEach(([L,N])=>{n.save(),n.globalAlpha=o*.95,n.strokeStyle=i.coil,n.lineWidth=1.5,n.fillStyle=i.bg,n.beginPath(),n.arc(Te(L),Oe(N),6.5,0,2*Math.PI),n.fill(),n.stroke(),n.fillStyle=i.coil,n.beginPath(),n.arc(Te(L),Oe(N),2,0,2*Math.PI),n.fill(),n.restore()})}let l=1096;B(n,"MAST composite, label-free development",l,62,{f:C(i,"body",20,600),color:i.ink,alpha:t});for(let M of[.5,.6,.7])ut(n,Bn.x0,Je(M),Bn.x1+20,Je(M),i.line,1,t),B(n,M.toFixed(1),Bn.x0-10,Je(M)+6,{f:C(i,"mono",18),color:i.ink3,align:"right",alpha:t});let c=s*8.999;n.save(),n.globalAlpha=t,n.beginPath(),n.moveTo(On(0),Je(Tn[0]));for(let M=1;M<Tn.length&&!(M>c);M++){let A=Ut(c-M+1,0,1),U=On(M-1),L=zt(U,On(M),Ut(A*2,0,1));n.lineTo(L,Je(Tn[M-1])),A>.5&&n.lineTo(On(M),zt(Je(Tn[M-1]),Je(Tn[M]),Ut(A*2-1,0,1)))}this.glowStroke(n,i.ink2,2,1,.4),n.restore(),Tn.forEach((M,A)=>{A>c||(n.save(),n.globalAlpha=t,n.fillStyle=A===1?i.good:i.ink,n.beginPath(),n.arc(On(A),Je(M),4.5,0,2*Math.PI),n.fill(),n.restore())}),B(n,"0.473",On(0)+10,Je(Tn[0])+26,{f:C(i,"mono",18),color:i.ink2,alpha:t});let u=t*Ut(c-1,0,1);ut(n,On(1)-1,Je(Tn[0])-4,On(1)-1,Je(Tn[1])+6,i.good,3,u*.9),B(n,"solenoid \xBD",On(1)+12,(Je(Tn[0])+Je(Tn[1]))/2+6,{f:C(i,"body",19,600),color:i.good,alpha:u}),B(n,"+0.189",On(1)+12,(Je(Tn[0])+Je(Tn[1]))/2+30,{f:C(i,"mono",18),color:i.good,alpha:u*.85});let h=t*Ut(c-7,0,1);B(n,"0.760",On(7)-8,Je(Tn[7])-16,{f:C(i,"mono",18),color:i.ink2,align:"right",alpha:h});let d=t*Ut(c-8,0,1);if(d>.002){let M=On(8),A=Je(u2);ut(n,On(7),A,M,A,i.plasma,1.4,d*.8,[4,4]),n.save(),n.globalAlpha=d,n.translate(M,A),n.rotate(Math.PI/4),n.fillStyle=i.plasma,n.fillRect(-6.5,-6.5,13,13),n.restore(),B(n,"0.761",M,A-46,{f:C(i,"mono",20,600),color:i.plasma,align:"center",alpha:d}),B(n,"blind Final",M,A-22,{f:a,color:i.ink2,align:"center",alpha:d})}B(n,"each step a documented change, no MAST labels",l,Bn.y1+40,{f:a,color:i.ink3,alpha:t});let f=456,p=352;B(n,"Final MAST file, components",l,f-22,{f:C(i,"body",20,600),color:i.ink,alpha:t}),d2.forEach((M,A)=>{let U=f+18+A*66,L=i[M.tok];B(n,M.label,l,U+6,{f:C(i,"body",19,500),color:i.ink2,alpha:t}),B(n,M.s,l+p,U+6,{f:C(i,"mono",20,600),color:L,align:"right",alpha:t}),n.save(),n.globalAlpha=t,ie(n,l,U+16,p,10,5),n.fillStyle="rgba(255,255,255,0.07)",n.fill();let N=p*M.v*Al(r);N>1&&(ie(n,l,U+16,N,10,5),n.fillStyle=L,n.fill(),n.globalCompositeOperation="lighter",n.globalAlpha=t*.25,ie(n,l,U+12,N,18,9),n.fill()),n.restore()});let v=t*Ut(r*1.4-.4,0,1),g=f+18+66-12,m=f+18+2*66+28,_=l+p+16;n.save(),n.globalAlpha=v,n.strokeStyle=i.warn,n.lineWidth=1.8,n.beginPath(),n.moveTo(_,g),n.lineTo(_+8,g),n.lineTo(_+8,m),n.lineTo(_,m),n.moveTo(_+8,(g+m)/2),n.lineTo(_+16,(g+m)/2),n.stroke(),n.restore(),B(n,"89%",_+22,(g+m)/2-2,{f:C(i,"mono",26,600),color:i.warn,alpha:v}),B(n,"of the",_+22,(g+m)/2+22,{f:a,color:i.ink2,alpha:v}),B(n,"shortfall",_+22,(g+m)/2+44,{f:a,color:i.ink2,alpha:v});let y=694,x=Ws.reduce((M,A)=>Math.hypot(A[0]-1.9,A[1]+1)<Math.hypot(M[0]-1.9,M[1]+1)?A:M);n.save(),n.globalAlpha=o,n.strokeStyle=pt(i.coil,.7),n.lineWidth=1.3,n.beginPath(),n.moveTo(l-10,y-6),n.lineTo(Te(1.9)+18,y-6),n.lineTo(Te(x[0])+8,Oe(x[1])+6),n.stroke(),n.restore(),B(n,"vessel currents:",l,y,{f:C(i,"body",21,600),color:i.coil,alpha:o}),B(n,"in the labels, not in my inputs",l,y+28,{f:C(i,"body",20,400),color:i.ink2,alpha:o});let w=784,S=C(i,"mono",24,600),T="G = 0.7632 \xB7 13th",E=(()=>{n.save(),n.font=S;let M=n.measureText(T).width;return n.restore(),M+44})(),b=t*Ut(r*1.5-.5,0,1);n.save(),n.globalAlpha=b,ie(n,l,w-30,E,52,26),n.fillStyle=pt(i.plasma,.1),n.fill(),n.strokeStyle=i.plasma,n.lineWidth=1.5,n.stroke(),n.restore(),B(n,T,l+22,w+4,{f:S,color:i.ink,alpha:b})},drawFooter(n){let t=this.T;B(n,"toy model \xB7 real coil and wall geometry",604,834,{f:C(t,"body",18,500),color:t.ink2}),B(n,p2,604,858,{f:C(t,"body",18,400),color:t.ink3});let e=1340,i=828;ut(n,e,i,e+ds,i,t.ink2,1.6),ut(n,e,i-6,e,i+6,t.ink2,1.6),ut(n,e+ds,i-6,e+ds,i+6,t.ink2,1.6),B(n,"1 m",e-12,i+6,{f:C(t,"mono",18),color:t.ink2,align:"right"})}};var Vl={agents:{title:"One student, many agents",nodes:{me:{label:"me",chip:"one PhD student"},lead:{label:"lead agent",chip:"coding agent (Claude Code)"},workers:{label:"worker agents"},cluster:{label:"cluster",chip:"Isambard-AI \xB7 GH200 nodes"},reviewer:{label:"second model",chip:"a different model family"},gate:{label:"rules gate"},handoff:{label:"handoff file",sub:"read on start \xB7 written on finish"},leaderboard:{label:"leaderboard",chip:"Codabench"}},flows:{out:"questions \xB7 rules of evidence \xB7 decisions",in:"tables of results"},scores:["0.99137","0.99700","0.997253"],fanout:{counter:"round 1 \xB7 1 September \xB7 7 variants in one night",tableHeader:"variant \xB7 local S \xB7 verdict",rows:[["conv decoder","0.9754","drop"],["loss sweep","0.9766","drop"],["U-Net refiner","0.9608","drop"],["bag of 5 seeds","0.9834","keep"],["MAST: conv","0.5335","drop"],["MAST: well fit","0.5746","drop"],["MAST: q95 heads","no gain","drop"]],keepWord:"keep",pick:3},attack:{caught:["loss: normalisation error","MAST: Thomson bias sign","MAST: control Jacobian"],blocked:["blocked: label guard missing","blocked: 19% of frames altered"]},incidents:{title:"what went wrong",caughtPrefix:"caught",cards:[{when:"day 1",what:"plasma current read in A; the data are in kA",caught:"a 14\xD7 mismatch in a sanity plot"},{when:"week 1",what:"local scorer left on the wrong machine setting",caught:"a conclusion did not survive a re-check and was retracted"},{when:"October",what:"solenoid modelled with 656 turns; the convention is 328",caught:"flux-map R\xB2 stuck at 0.63 until the factor 0.5"},{when:"often",what:"sessions died at usage limits mid-run",caught:"cluster jobs survive; agents restart from the handoff file"}]},roles:{me:{title:"I did",items:["set the goal: where is the score lost?","asked for an independent audit of every plan","chose between candidates","decided what to submit and what to disclose"]},agents:{title:"the agents did",items:["wrote and reviewed the code","ran and watched the experiments","traced the error to the reversed shots; found the clock rule","checked every file against the rules"]},rules:{title:"rules of evidence",items:["official scorer only","paired shot bootstrap","time-blocked fold as a veto","one factor at a time on the board","re-run and retrained from scratch by the organisers"]}}},close:{title:"What I would tell you over coffee",takeaways:["Decompose the metric before you model.","Put the scorer in the loss, and again after the model.","Fix the data before the network.","Agents multiply throughput. The rules of evidence stay yours."],score:"0.997253",scoreCaption:"2nd of Challenge 1 \xB7 blind Final",links:[{label:"code",value:"github.com/zhouyi-xiaoxiao/fusion-equilibrium-challenge-2026",mono:!0},{label:"this talk",value:"fusion.zhouyixiaoxiao.com",mono:!0},{label:"name",value:"Xiaoxiao Zhouyi \xB7 University of Bristol",mono:!1}],qrUrl:"https://fusion.zhouyixiaoxiao.com",qrCaption:"this talk, live",thanks:"Thanks: the FusionEC-26 organisers, General Atomics, UKAEA, and Isambard-AI."}};var Ai=(n,t=0,e=1)=>n<t?t:n>e?e:n,Yr=(n,t,e)=>n+(t-n)*e,fs=n=>(n=Ai(n),n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2),Go=n=>1-Math.pow(1-Ai(n),3),fi=(n,t,e)=>fs((n-t)/e),Gl=(n,t,e)=>Go((n-t)/e),lm=n=>n-Math.floor(n);function Wo(n){let t=Math.imul(n^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}function m2(n,t,e,i,s){let r=1-s;return[r*r*r*n[0]+3*r*r*s*t[0]+3*r*s*s*e[0]+s*s*s*i[0],r*r*r*n[1]+3*r*r*s*t[1]+3*r*s*s*e[1]+s*s*s*i[1]]}var di=class{constructor(t,e=48){let i=[];for(let s of t)if(s.c)for(let r=i.length?1:0;r<=e;r++)i.push(m2(...s.c,r/e));else i.length||i.push(s.l[0]),i.push(s.l[1]);this.pts=i,this.cum=[0];for(let s=1;s<i.length;s++)this.cum.push(this.cum[s-1]+Math.hypot(i[s][0]-i[s-1][0],i[s][1]-i[s-1][1]));this.len=this.cum[this.cum.length-1]}at(t){let e=Ai(t)*this.len,i=this.cum,s=0,r=i.length-1;for(;r-s>1;){let u=s+r>>1;i[u]<e?s=u:r=u}let o=i[r]-i[s]||1,a=(e-i[s])/o,l=this.pts[s],c=this.pts[r];return[l[0]+(c[0]-l[0])*a,l[1]+(c[1]-l[1])*a]}tAtX(t){for(let e=1;e<this.pts.length;e++){let i=this.pts[e-1],s=this.pts[e];if((i[0]-t)*(s[0]-t)<=0&&i[0]!==s[0]){let r=(t-i[0])/(s[0]-i[0]);return(this.cum[e-1]+r*(this.cum[e]-this.cum[e-1]))/this.len}}return 1}trace(t,e=0,i=1){let s=e*this.len,r=i*this.len;t.beginPath();let o=!1;for(let a=0;a<this.pts.length;a++){let l=this.cum[a];if(!(l<s)){if(!o){let c=this.at(e);t.moveTo(c[0],c[1]),o=!0}if(l>r){let c=this.at(i);t.lineTo(c[0],c[1]);return}t.lineTo(this.pts[a][0],this.pts[a][1])}}}};function Xo(n,t,e=.45){let i=(t[0]-n[0])*e;return new di([{c:[n,[n[0]+i,n[1]],[t[0]-i,t[1]],t]}])}var cd=new Map;function g2(n){if(cd.has(n))return cd.get(n);let t=64,e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),s=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);return s.addColorStop(0,n),s.addColorStop(.18,n),s.addColorStop(.4,hn(n,.35)),s.addColorStop(1,hn(n,0)),i.fillStyle=s,i.fillRect(0,0,t,t),cd.set(n,e),e}function hn(n,t){if(n.startsWith("rgba")||n.startsWith("rgb"))return n;let e=parseInt(n.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function An(n,t,e,i,s,r=1){if(r<=.001)return;let o=g2(s),a=n.globalCompositeOperation,l=n.globalAlpha;n.globalCompositeOperation="lighter",n.globalAlpha=l*r,n.drawImage(o,t-i*2,e-i*2,i*4,i*4),n.globalAlpha=l,n.globalCompositeOperation=a}function Kr(n,t,e,i,s,{alpha:r=1,core:o=.55,pulse:a=0,hot:l=null}={}){r<=.001||(n.save(),n.globalAlpha*=r,An(n,t,e,i*1.5,s,.22+.25*a),n.fillStyle=hn(s,.1),n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.fill(),n.lineWidth=2,n.strokeStyle=s,n.stroke(),n.fillStyle=l||s,n.beginPath(),n.arc(t,e,i*o*.5,0,Math.PI*2),n.fill(),a>0&&(n.globalAlpha*=a,n.lineWidth=1.5,n.beginPath(),n.arc(t,e,i+6+10*(1-a),0,Math.PI*2),n.stroke()),n.restore())}function Jr(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function $i(n,t,e,i,{font:s,color:r="#b9b6ad",accent:o=null,anchor:a="c",alpha:l=1,size:c=18,fill:u="rgba(12,14,23,0.86)",border:h="rgba(255,255,255,0.14)"}={}){n.save(),n.font=s;let d=n.measureText(t).width,f=14,p=o?16:0,v=d+f*2+p,g=c+16,m=a==="c"?e-v/2:a==="r"?e-v:e,_=i-g/2;return n.globalAlpha*=l,Jr(n,m,_,v,g,g/2),n.fillStyle=u,n.fill(),n.lineWidth=1,n.strokeStyle=o?hn(o,.55):h,n.stroke(),o&&(n.fillStyle=o,n.beginPath(),n.arc(m+f+4,i,4,0,Math.PI*2),n.fill()),n.fillStyle=r,n.textBaseline="middle",n.textAlign="left",n.fillText(t,m+f+p,i+1),n.restore(),{x:m,y:_,w:v,h:g}}function Ke(n,t,e,i,{font:s,color:r,align:o="left",baseline:a="alphabetic",alpha:l=1}={}){l<=.001||(n.save(),n.globalAlpha*=l,n.font=s,n.fillStyle=r,n.textAlign=o,n.textBaseline=a,n.fillText(t,e,i),n.restore())}function cm(n,t,e,i,s,r,{color:o,ink3:a,good:l,alpha:c=1}){n.save(),n.globalAlpha*=c,n.lineWidth=2,n.strokeStyle=o,n.fillStyle=hn(o,.05),Jr(n,t,e,i,s,6),n.fill(),n.stroke(),n.beginPath(),n.moveTo(t+10,e+s),n.lineTo(t+10,e+s+8),n.moveTo(t+i-10,e+s),n.lineTo(t+i-10,e+s+8),n.moveTo(t+8,e+12),n.lineTo(t+i-8,e+12),n.stroke();for(let u of r){let h=u.y,d=t+10,f=i-32;n.globalAlpha=c*(.35+.65*u.alpha),n.strokeStyle=hn(o,.45),n.lineWidth=1,Jr(n,t+6,h-15,i-12,30,4),n.stroke(),n.fillStyle="rgba(255,255,255,0.07)",n.fillRect(d,h-4,f,8),u.fill>0&&(n.fillStyle=o,n.fillRect(d,h-4,f*u.fill,8),u.fill<1&&An(n,d+f*u.fill,h,5,o,.9)),n.fillStyle=u.done?l:u.fill>0?o:a,n.beginPath(),n.arc(t+i-13,h,3.5,0,Math.PI*2),n.fill(),u.done&&An(n,t+i-13,h,4,l,.6)}n.restore()}function Wl(n,t,e,i,s,r,{alpha:o=1,lines:a=3,lw:l=2,fill:c="rgba(6,7,12,0.9)"}={}){if(o<=.001)return;let u=Math.min(i,s)*.32,h=t-i/2,d=e-s/2;n.save(),n.globalAlpha*=o,n.lineWidth=l,n.strokeStyle=r,n.fillStyle=c,n.beginPath(),n.moveTo(h,d),n.lineTo(h+i-u,d),n.lineTo(h+i,d+u),n.lineTo(h+i,d+s),n.lineTo(h,d+s),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(h+i-u,d),n.lineTo(h+i-u,d+u),n.lineTo(h+i,d+u),n.stroke(),n.lineWidth=Math.max(1,l*.75);for(let f=0;f<a;f++){let p=d+s*(.45+f*.17);n.beginPath(),n.moveTo(h+i*.2,p),n.lineTo(h+i*(f===a-1?.55:.8),p),n.stroke()}n.restore()}function hm(n,t,e,i,{alpha:s=1,open:r=0,h:o=64}={}){if(s<=.001)return;n.save(),n.globalAlpha*=s,n.lineWidth=2,n.strokeStyle=i;let a=e-o/2;n.beginPath(),n.moveTo(t-14,a),n.lineTo(t-14,e+o/2),n.moveTo(t+14,a),n.lineTo(t+14,e+o/2),n.moveTo(t-20,e+o/2),n.lineTo(t+20,e+o/2),n.moveTo(t-20,a),n.lineTo(t+20,a),n.stroke(),n.lineWidth=1.5,n.strokeStyle=hn(i,.5+.5*r),n.beginPath(),n.moveTo(t,a+6),n.lineTo(t,e+o/2-6),n.stroke(),n.restore()}function um(n,t,e,i,s,r,o,{alpha:a=1,flash:l=0}={}){if(a<=.001)return;n.save(),n.globalAlpha*=a,l>0&&An(n,t,e,i*.6,o,.35*l),n.lineWidth=2,n.strokeStyle=r,n.fillStyle="rgba(6,7,12,0.9)",Jr(n,t-i/2,e-s/2,i,s,6),n.fill(),n.stroke();let c=[.78,.62,.46];for(let u=0;u<3;u++){let h=e-s/2+s*(.28+u*.24);n.fillStyle=u===1?o:"rgba(243,241,234,0.45)",n.fillRect(t-i/2+12,h-3,(i-24)*c[u],6)}n.restore()}var Fe=Vl.agents,hd=30,v2=`
.ag-root{position:absolute;inset:0;background:var(--bg);user-select:none;-webkit-user-select:none;}
.ag-canvas{position:absolute;left:0;top:0;width:1600px;height:900px;touch-action:none;}
.ag-panel{position:absolute;pointer-events:none;opacity:0;transition:opacity .5s var(--ease);}
.ag-panel.is-on{opacity:1;}
.ag-veil{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s var(--ease);}
.ag-veil.is-on{opacity:1;}
.ag-instant, .ag-instant *{transition:none !important;}
.ag-kicker{font:600 18px/1 var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin:0 0 16px 2px;}
.ag-card{display:grid;grid-template-columns:108px 1fr;gap:18px;align-items:start;margin:0 0 14px;padding:16px 22px 16px 20px;
  border:1px solid var(--line);border-left:2px solid var(--warn);border-radius:12px;background:rgba(10,11,18,.94);
  opacity:0;transform:translateX(26px);transition:opacity .55s var(--ease-out),transform .55s var(--ease-out);}
.ag-panel.is-on .ag-card{opacity:1;transform:none;}
.ag-when{font:500 20px/1.35 var(--font-mono);color:var(--warn);padding-top:2px;}
.ag-what{font:500 24px/1.3 var(--font-body);color:var(--ink);}
.ag-caught{margin-top:8px;font:400 21px/1.35 var(--font-body);color:var(--ink2);}
.ag-caught b{font:500 18px/1 var(--font-mono);color:var(--good);letter-spacing:.04em;margin-right:10px;}
.ag-cols{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
.ag-col{border:1px solid var(--line);border-radius:14px;background:rgba(10,11,18,.94);padding:22px 26px 14px;
  opacity:0;transform:translateY(16px);transition:opacity .55s var(--ease-out),transform .55s var(--ease-out);}
.ag-col h3{margin:0 0 14px;font:500 34px/1.1 var(--font-display);color:var(--ink);}
.ag-col.is-agents{border-top:2px solid var(--plasma);}
.ag-col.is-me{border-top:2px solid var(--ink);}
.ag-col.is-agents h3{color:var(--plasma);}
.ag-col ul{list-style:none;margin:0;padding:0;}
.ag-col li{position:relative;padding:0 0 12px 22px;font:400 23px/1.3 var(--font-body);color:var(--ink);}
.ag-col li::before{content:"";position:absolute;left:0;top:12px;width:9px;height:9px;border-radius:50%;border:1.5px solid var(--ink2);}
.ag-col.is-agents li::before{border-color:var(--plasma);background:color-mix(in srgb,var(--plasma) 30%,transparent);}
.ag-rules{margin-top:22px;border:1px solid var(--line);border-radius:14px;background:rgba(10,11,18,.94);padding:18px 24px 10px;
  opacity:0;transform:translateY(16px);transition:opacity .55s var(--ease-out),transform .55s var(--ease-out);}
.ag-rules .ag-kicker{color:var(--good);margin-bottom:14px;}
.ag-rules ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:10px 12px;}
.ag-rules li{font:400 21px/1 var(--font-body);color:var(--ink);padding:9px 16px;border-radius:999px;
  border:1px solid color-mix(in srgb,var(--good) 45%,transparent);background:color-mix(in srgb,var(--good) 7%,transparent);margin-bottom:8px;}
.ag-panel.is-on .ag-col,.ag-panel.is-on .ag-rules{opacity:1;transform:none;}
`;function x2(){let n=Fe.fanout.rows,t=Math.max(1,n.length),e={me:{x:110,y:380,r:22},lead:{x:620,y:440,r:30},rev:{x:700,y:112,r:22},rack:{x:1235,y:146,w:84,h:468},gate:{x:1380,y:720},board:{x:1504,y:720,w:76,h:58},handoff:{x:940,y:806,w:36,h:46},table:{x:206,y:82},pathY:720,workers:[]},i=182,s=578;for(let h=0;h<t;h++){let d=t===1?.5:h/(t-1),f=2*d-1;e.workers.push({x:1068-16*f*f,y:Yr(i,s,d),r:13})}let{me:r,lead:o,rev:a,rack:l,board:c,handoff:u}=e;return e.paths={out:new di([{c:[[r.x+r.r+6,r.y-7],[330,r.y-7],[420,o.y-9],[o.x-o.r-6,o.y-9]]}]),in:new di([{c:[[o.x-o.r-6,o.y+9],[420,o.y+9],[330,r.y+7],[r.x+r.r+6,r.y+7]]}]),direct:Xo([o.x+o.r+6,o.y],[l.x-6,l.y+l.h/2],.5),directBack:Xo([l.x-6,l.y+l.h/2+10],[o.x+o.r+6,o.y+10],.5),rev:new di([{c:[[a.x,a.y+a.r+6],[a.x,250],[o.x+4,300],[o.x+4,o.y-o.r-6]]}]),submit:new di([{c:[[o.x+o.r+6,o.y+12],[800,o.y+30],[770,e.pathY],[930,e.pathY]]},{l:[[930,e.pathY],[c.x-c.w/2-8,e.pathY]]}]),handoff:new di([{c:[[u.x-8,u.y-u.h/2-8],[u.x-30,600],[800,o.y+40],[o.x+o.r+4,o.y+22]]}]),handoffW:new di([{c:[[u.x+8,u.y-u.h/2-8],[u.x+8,640],[e.workers[t-1].x,660],[e.workers[t-1].x,e.workers[t-1].y+20]]}]),wIn:e.workers.map(h=>Xo([o.x+o.r+6,o.y],[h.x-h.r-6,h.y],.5)),wBack:e.workers.map(h=>Xo([h.x-h.r-6,h.y+4],[o.x+o.r+6,o.y+4],.5)),wOut:e.workers.map(h=>new di([{l:[[h.x+h.r+6,h.y+6],[l.x-6,h.y+6]]}]))},e.gateT=e.paths.submit.tAtX(e.gate.x-26),e}function y2(n){let t=String(n).replace("\u2212","-"),e=(t.split(".")[1]||"").length;return{v:parseFloat(t),d:e}}var _2={id:"agents",steps:5,mount(n,t){this.ctx=t,this.T=t.tokens,this.root=n,this.L=x2(),this.step=0,this.stepStart=performance.now()/1e3,this.tauOffset=hd,this.hover=null,this.pinned=null,this.quality=1,this.slow=0,this.dim={from:1,to:1,t0:0},this.entered=!1,this.raf=0;let e=document.createElement("style");e.textContent=v2,n.appendChild(e);let i=document.createElement("div");i.className="ag-root",n.appendChild(i),this.wrap=i;let s=document.createElement("canvas");s.className="ag-canvas",i.appendChild(s),this.canvas=s,this.g=s.getContext("2d"),this._buildPanels(i),this._onMove=r=>{if(!this.entered)return;let o=this._toDesign(r);this.hover=this._hit(o),s.style.cursor=this.hover?"pointer":"default",this._requestRender()},this._onDown=r=>{if(!this.entered)return;r.preventDefault();let o=this._hit(this._toDesign(r));this.pinned=o&&o!==this.pinned?o:null,this._requestRender()},this._onLeave=()=>{this.hover=null,this._requestRender()},s.addEventListener("pointermove",this._onMove),s.addEventListener("pointerdown",this._onDown),s.addEventListener("pointerleave",this._onLeave),this.resize(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this._requestRender())},_buildPanels(n){let t=a=>String(a).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]),e=a=>{let l=document.createElement("div");return l.className="ag-veil",l.style.background=`linear-gradient(90deg, rgba(6,7,12,0) ${a-90}px, rgba(6,7,12,.86) ${a-10}px, rgba(6,7,12,.9) 100%)`,n.appendChild(l),l};this.veil3=e(730),this.veil3.style.bottom="236px",this.veil3.style.maskImage=this.veil3.style.webkitMaskImage="linear-gradient(180deg, #000 85%, transparent)",this.veil4=e(640);let i=document.createElement("div");i.className="ag-panel",i.style.cssText="left:820px;top:78px;width:740px;",i.innerHTML=`<div class="ag-kicker">${t(Fe.incidents.title)}</div>`+Fe.incidents.cards.map((a,l)=>`<div class="ag-card" style="transition-delay:${(.15+l*.22).toFixed(2)}s"><div class="ag-when">${t(a.when)}</div><div><div class="ag-what">${t(a.what)}</div><div class="ag-caught"><b>${t(Fe.incidents.caughtPrefix)}</b>${t(a.caught)}</div></div></div>`).join(""),n.appendChild(i),this.incPanel=i;let s=Fe.roles,r=a=>`<ul>${a.map(l=>`<li>${t(l)}</li>`).join("")}</ul>`,o=document.createElement("div");o.className="ag-panel",o.style.cssText="left:640px;top:84px;width:920px;",o.innerHTML=`<div class="ag-cols"><div class="ag-col is-me" style="transition-delay:.1s"><h3>${t(s.me.title)}</h3>${r(s.me.items)}</div><div class="ag-col is-agents" style="transition-delay:.35s"><h3>${t(s.agents.title)}</h3>${r(s.agents.items)}</div></div><div class="ag-rules" style="transition-delay:.65s"><div class="ag-kicker">${t(s.rules.title)}</div>${r(s.rules.items)}</div>`,n.appendChild(o),this.rolesPanel=o},enter(){this.entered=!0,this.t0=performance.now()/1e3,this.ctx.reducedMotion?this._requestRender():this._loop()},leave(){this.entered=!1,cancelAnimationFrame(this.raf),this.raf=0,this.hover=null,this.pinned=null},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=Ai(n|0,0,this.steps-1),t=t||this.ctx.reducedMotion,this.stepStart=performance.now()/1e3,this.tauOffset=t?hd:0;let i=this.stepStart,s=this._dimNow(i),r=this.step>=3?.35:1;this.dim=t||e===this.step?{from:r,to:r,t0:i}:{from:s,to:r,t0:i},this._panels(t),this._requestRender()},demo(){this.stepStart=performance.now()/1e3,this.tauOffset=this.ctx.reducedMotion?hd:0,this._panels(this.ctx.reducedMotion,!0),this._requestRender()},resize(){let n=this.ctx.fitCanvas(this.canvas);this.ratio=n.ratio,this._requestRender()},_panels(n,t=!1){let e=(i,s)=>{n&&i.classList.add("ag-instant"),t&&s&&(i.classList.add("ag-instant"),i.classList.remove("is-on"),i.offsetWidth,i.classList.remove("ag-instant")),i.classList.toggle("is-on",s),n&&(i.offsetWidth,i.classList.remove("ag-instant"))};e(this.veil3,this.step===3),e(this.veil4,this.step===4),e(this.incPanel,this.step===3),e(this.rolesPanel,this.step===4)},_dimNow(n){let t=this.dim;return Yr(t.from,t.to,fi(n-t.t0,0,.6))},_toDesign(n){let t=this.canvas.getBoundingClientRect();return[(n.clientX-t.left)/t.width*1600,(n.clientY-t.top)/t.height*900]},_hit([n,t]){if(this.step>=3)return null;let e=this.L,i=(s,r)=>Math.hypot(n-s.x,t-s.y)<r;if(i(e.me,46))return"me";if(i(e.lead,52))return"lead";if(this.step>=2&&i(e.rev,44))return"rev";if(n>e.rack.x-10&&n<e.rack.x+e.rack.w+10&&t>e.rack.y-10&&t<e.rack.y+e.rack.h+10)return"cluster";if(this.step>=1){for(let s=0;s<e.workers.length;s++)if(i(e.workers[s],26))return"w"+s}return this.step>=2&&i(e.gate,40)?"gate":i(e.board,50)?"board":this.step>=1&&i(e.handoff,40)?"handoff":null},_requestRender(){if(this.ctx.reducedMotion||!this.raf){if(this._pending)return;this._pending=requestAnimationFrame(()=>{this._pending=0,this._render()})}},_loop(){let n=performance.now(),t=e=>{if(!this.entered)return;let i=e-n;n=e,i>24?this.slow=Math.min(120,this.slow+1):this.slow=Math.max(0,this.slow-.5),this.slow>60&&(this.quality=Math.max(.4,this.quality-.1),this.slow=0),this._render(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)},_render(){let n=this.g,t=this.T,e=this.L,i=performance.now()/1e3,s=i-this.stepStart+this.tauOffset,r=this.ctx.reducedMotion?2.3:i-(this.t0||i),o=this.step,a=this.ratio||1;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.setTransform(a,0,0,a,0,0);let l=this._dimNow(i),c=o<3?this.pinned||this.hover:null,u=(Y,st=0,F=.5)=>o>Y?1:o===Y?fi(s,st,F):0,h={body:(Y,st)=>`${Y} ${st}px ${t.fontBody}`,mono:(Y,st)=>`${Y} ${st}px ${t.fontMono}`,disp:(Y,st)=>`${Y} ${st}px ${t.fontDisplay}`},d=e.workers.length,f=e.workers.map((Y,st)=>u(1,.05+.06*st,.4)),p=u(1,.1,.5),v=o===0?1:o===1?1-fi(s,0,.45):0,g=u(2,0,.45),m=u(2,.5,.4),_=u(1,.1,.4),y=[],x=(Y,st,F,X,et)=>X>.001&&y.push({path:Y,color:st,ends:F,vis:X,flow:et});x(e.paths.out,t.ink,["me","lead"],1,{n:3,period:3.6,size:3.2}),x(e.paths.in,t.ink2,["lead","me"],1,{n:2,period:4.4,size:3}),x(e.paths.direct,t.plasma,["lead","cluster"],v,{n:3,period:3,size:3}),x(e.paths.directBack,t.coil,["cluster","lead"],v,{n:2,period:3.4,size:2.6});for(let Y=0;Y<d;Y++){let st=f[Y];x(e.paths.wIn[Y],t.plasma,["lead","w"+Y],st,{n:1,period:2.6+.37*Wo(Y),size:2.6}),x(e.paths.wOut[Y],t.plasma,["w"+Y,"cluster"],st,{n:1,period:1.6+.5*Wo(Y+11),size:2.4})}x(e.paths.handoff,t.ink2,["handoff","lead"],p,{n:1,period:5.5,size:2.6,dash:!0}),x(e.paths.handoffW,t.ink2,["handoff","workers"],p,{n:1,period:6.5,size:2.4,dash:!0}),x(e.paths.rev,t.flux,["rev","lead"],g,{n:1,period:2.6,size:3}),x(e.paths.submit,t.ink,["lead","board"],1,o<2?{n:2,period:4.2,size:3}:null);let w=Y=>{if(!c)return 1;let st=Y.ends;return st.includes(c)||c.startsWith("w")&&st.includes("workers")||c==="gate"&&st.includes("board")?1.8:.25},S=Y=>{if(!c||Y===c)return 1;for(let st of y)if(w(st)>1&&st.ends.includes(Y))return 1;return c.startsWith("w")&&Y==="cluster"?1:.4};n.save(),n.globalAlpha=l;for(let Y of y){let st=w(Y);n.save(),n.lineWidth=st>1?2.2:1.5,n.strokeStyle=hn(Y.color,Math.min(.75,.2*st)*Y.vis),Y.flow&&Y.flow.dash&&n.setLineDash([5,7]),Y.path.trace(n),n.stroke(),n.restore()}for(let Y of y){if(!Y.flow)continue;let st=w(Y),F=Math.max(1,Math.round(Y.flow.n*this.quality));for(let X=0;X<F;X++){let et=lm(r/Y.flow.period+X/F+Wo(Y.path.len|0)),G=Y.path.at(et),j=Math.min(1,et*6,(1-et)*6);An(n,G[0],G[1],Y.flow.size,Y.color,.85*j*Y.vis*Math.min(1,st))}}let T=e.workers.map((Y,st)=>{let F=.25+.04*st,X=.35+.4*Wo(st*3+1);return{st:F,du:X,fin:F+X,row:F+X+.3}}),E=Math.max(...T.map(Y=>Y.row))+.05,b=Y=>o>1?1:o===1?Ai((s-T[Y].st)/T[Y].du):0;if(o===1)for(let Y=0;Y<d;Y++){let st=(s-.02-.06*Y)/.4;if(st>0&&st<1){let X=e.paths.wIn[Y].at(fs(st));An(n,X[0],X[1],4.5,t.plasmaHot,1)}let F=s-T[Y].fin;if(F>0&&F<.3){let X=F<.14?e.paths.wBack[Y].at(fs(F/.14)):e.paths.in.at(fs((F-.14)/.16));An(n,X[0],X[1],4.2,t.coil,1)}}let M=Fe.attack.caught;if(o===2){let Y=M.length+2;for(let st=0;st<Y;st++){let F=(s-.15-.18*st)/.45;if(F>0&&F<1){let X=e.paths.rev.at(fs(F));An(n,X[0],X[1],5,t.flux,1)}}}o>=2&&this._drawFiles(n,s,m,o);let A=e.lead,U=0;if(o===2)for(let Y=0;Y<M.length+2;Y++){let st=s-.15-.18*Y-.45;st>0&&st<.4&&(U=Math.max(U,1-st/.4))}let L=1,N=null;o===3&&(N=this._restartState(s)),N&&(L=N.lead),Kr(n,e.me.x,e.me.y,e.me.r,t.ink,{alpha:S("me"),hot:"#ffffff"}),o!==3&&Kr(n,A.x,A.y,A.r,t.plasma,{alpha:S("lead")*L,pulse:U,hot:t.plasmaHot});for(let Y=0;Y<d;Y++){let st=e.workers[Y],F=f[Y];if(F<=0)continue;let X=.4+.6*Go(F);Kr(n,st.x,st.y,st.r*X,t.plasma,{alpha:F*S("w"+Y),hot:t.plasmaHot,core:.7}),Ke(n,Fe.fanout.rows[Y][0],st.x+st.r+11,st.y-6,{font:h.body(500,18),color:t.ink2,alpha:F*S("w"+Y)})}let k=e.workers.map((Y,st)=>({y:Y.y+6,fill:b(st),done:b(st)>=1,alpha:o>=1?f[st]:0}));if(cm(n,e.rack.x,e.rack.y,e.rack.w,e.rack.h,k,{color:t.coil,ink3:t.ink3,good:t.good,alpha:S("cluster")}),g>0&&Kr(n,e.rev.x,e.rev.y,e.rev.r*(.5+.5*g),t.flux,{alpha:g*S("rev"),hot:"#e6fbff"}),m>0){let Y=this._gateColor(s);hm(n,e.gate.x,e.gate.y,Y,{alpha:m*S("gate"),open:.5})}um(n,e.board.x,e.board.y,e.board.w,e.board.h,t.ink,t.plasma,{alpha:S("board"),flash:this._boardFlash(s,o)}),p>0&&Wl(n,e.handoff.x,e.handoff.y,e.handoff.w,e.handoff.h,t.ink2,{alpha:p*S("handoff")});let I=Fe.nodes,O=(Y,st,F,X={})=>Ke(n,Y,st,F,{font:h.body(600,22),color:t.ink,align:"center",...X}),H=h.body(500,18);if(O(I.me.label,e.me.x,e.me.y-38,{alpha:S("me")}),$i(n,I.me.chip,e.me.x,e.me.y+50,{font:H,alpha:S("me")}),O(I.lead.label,A.x,A.y+A.r+28,{alpha:S("lead")}),$i(n,I.lead.chip,A.x,A.y+A.r+58,{font:H,accent:t.plasma,alpha:S("lead")}),O(I.cluster.label,e.rack.x+e.rack.w/2,e.rack.y-16,{alpha:S("cluster")}),$i(n,I.cluster.chip,e.rack.x+e.rack.w/2,e.rack.y-58,{font:H,accent:t.coil,alpha:S("cluster")}),O(I.leaderboard.label,e.board.x,e.board.y-e.board.h/2-18,{alpha:S("board")}),$i(n,I.leaderboard.chip,e.board.x,e.board.y+e.board.h/2+76,{font:H,alpha:S("board")}),this._drawScore(n,s,o,E,h),p>0){let Y=e.handoff.x-e.handoff.w/2-16;Ke(n,I.handoff.label,Y,e.handoff.y-4,{font:h.body(600,22),color:t.ink,align:"right",alpha:p*S("handoff")}),Ke(n,I.handoff.sub,Y,e.handoff.y+24,{font:h.body(400,18),color:t.ink3,align:"right",alpha:p*S("handoff")})}let $=e.paths.out.at(.5),K=e.paths.in.at(.5);Ke(n,Fe.flows.out,$[0]+16,$[1]-24,{font:h.body(500,18),color:t.ink2,align:"center",alpha:S("me")}),Ke(n,Fe.flows.in,K[0]-40,K[1]+32,{font:h.body(500,18),color:t.ink3,align:"center",alpha:S("me")});let ct=u(1,.35,.5);if(ct>0){let Y=(e.workers[0].x+e.rack.x+e.rack.w)/2-40;O(I.workers.label,Y,e.workers[d-1].y+52,{alpha:ct*S("w0")}),$i(n,Fe.fanout.counter,Y,e.workers[d-1].y+86,{font:h.body(500,20),size:20,color:t.ink,accent:t.plasma,alpha:ct})}if(_>0&&this._drawTable(n,s,o,T,E,_,h),g>0){Ke(n,I.reviewer.label,e.rev.x+36,e.rev.y+2,{font:h.body(600,22),color:t.ink,alpha:g*S("rev")}),$i(n,I.reviewer.chip,e.rev.x+36,e.rev.y+38,{font:H,anchor:"l",accent:t.flux,alpha:g*S("rev")});let Y=M.length;for(let st=0;st<Y;st++){let F=o>2?1:Gl(s,.5+.22*st,.35);if(F<=0)continue;let X=.3+.52*(st+.5)/Y,et=e.paths.rev.at(X),G=732;n.save(),n.globalAlpha*=F*S("rev"),n.strokeStyle=hn(t.flux,.7),n.lineWidth=1.5,n.beginPath(),n.moveTo(et[0]+5,et[1]),n.lineTo(G,et[1]),n.stroke(),n.fillStyle=t.flux,n.beginPath(),n.arc(et[0],et[1],3.5,0,Math.PI*2),n.fill(),n.restore(),$i(n,M[st],G+(1-F)*14,et[1],{font:h.body(500,20),size:20,anchor:"l",color:t.ink,accent:t.flux,alpha:F*S("rev"),fill:"rgba(8,10,16,0.95)"})}}if(m>0){O(I.gate.label,e.gate.x,e.gate.y+64,{alpha:m*S("gate")});let Y=Fe.attack.blocked;for(let st=0;st<Y.length;st++){let F=this._fileBirth(this._bounceK(st))+1.3+.1,X=o>2?1:Gl(s,F,.35);X<=0||$i(n,Y[st],e.gate.x-58,e.pathY+48+42*st+(1-X)*10,{font:h.body(500,20),size:20,anchor:"r",color:t.ink,accent:t.warn,alpha:X*S("gate"),fill:"rgba(8,10,16,0.95)"})}}if(n.restore(),o===3){let Y=N;if(n.save(),n.globalAlpha=1,n.lineWidth=2,n.setLineDash([5,7]),n.strokeStyle=hn(t.ink2,.25+.5*Y.link),e.paths.handoff.trace(n),n.stroke(),n.setLineDash([]),Wl(n,e.handoff.x,e.handoff.y,e.handoff.w,e.handoff.h,t.ink,{alpha:.6+.4*Y.link}),Y.link>0&&An(n,e.handoff.x,e.handoff.y,22,t.ink,.25*Y.link),Y.pulse!==null){let F=e.paths.handoff.at(Y.pulse);An(n,F[0],F[1],5,t.ink,1)}Kr(n,A.x,A.y,A.r,t.plasma,{alpha:Y.lead,hot:t.plasmaHot,pulse:Y.ring});let st=e.handoff.x-e.handoff.w/2-16;Ke(n,Fe.nodes.handoff.label,st,e.handoff.y-4,{font:`600 22px ${t.fontBody}`,color:t.ink,align:"right",alpha:.6+.4*Y.link}),Ke(n,Fe.nodes.handoff.sub,st,e.handoff.y+24,{font:`400 18px ${t.fontBody}`,color:t.ink2,align:"right"}),Y.lead<.3&&(n.strokeStyle=hn(t.plasma,.4),n.lineWidth=1.5,n.setLineDash([3,5]),n.beginPath(),n.arc(A.x,A.y,A.r,0,Math.PI*2),n.stroke()),n.restore()}},_restartState(n){let t=n<6.9?n:.9+(n-.9)%6,e=1,i=null,s=0,r=0;return t>=.9&&t<1.2?e=Math.sin(t*70)>0?.85-(t-.9)*2:.12:t>=1.2&&t<1.3?e=.06:t>=1.3&&t<1.6?(e=.06,i=fs((t-1.3)/.3),s=1):t>=1.6&&t<2.4&&(e=fi(t,1.6,.3)*.94+.06,r=1-Ai((t-1.6)/.8),s=1-Ai((t-1.6)/.8)),{lead:e,pulse:i,link:s,ring:r}},_fileBirth(n){return n<=4?-.6+.3*n:.6+(n-4)*.85},_bounceK(n){return[1,3][n]!==void 0?[1,3][n]:5+5*(n-2)+2},_bounces(n){let t=Fe.attack.blocked.length;for(let e=0;e<t;e++)if(this._bounceK(e)===n)return!0;return n>=5&&(n-5)%5===2},_gateColor(n){let t=this.T;for(let e=this._kMax(n);e>=Math.max(0,this._kMax(n)-6);e--){let i=n-this._fileBirth(e)-1.3;if(i>=0&&i<.45)return this._bounces(e)?t.warn:t.good}return t.ink2},_kMax(n){return n<.6?4:4+Math.max(0,Math.ceil((n-.6)/.85))},_boardFlash(n,t){if(t<2)return 0;let e=0;for(let i=this._kMax(n);i>=Math.max(0,this._kMax(n)-6);i--){if(this._bounces(i))continue;let s=n-this._fileBirth(i)-1.3-.45;s>=0&&s<.6&&(e=Math.max(e,1-s/.6))}return e},_drawFiles(n,t,e,i){if(e<=0)return;let s=this.T,r=this.L.paths.submit,o=this.L.gate.x,a=this._kMax(t);for(let l=Math.max(0,a-6);l<=a;l++){let c=t-this._fileBirth(l);if(c<0)continue;let u,h,d=s.ink2,f=e;if(c<1.3){let p=r.at(Go(c/1.3)*this.L.gateT);u=p[0],h=p[1],f*=Math.min(1,c*5)}else if(this._bounces(l)){let p=c-1.3;if(p>.75)continue;let v=Go(p/.75);u=o-26-46*v,h=this.L.pathY+34*v*v,d=s.warn,f*=1-p/.75}else{let p=c-1.3;if(p>.45)continue;let v=r.at(Yr(this.L.gateT,1,fs(p/.45)));u=v[0],h=v[1],d=s.good,f*=1-Math.max(0,(p-.3)/.15)}Wl(n,u,h,20,26,d,{alpha:f,lines:2,lw:1.6})}},_drawScore(n,t,e,i,s){let r=this.T,o=Fe.scores.map(y2),a=u=>o[Math.min(u,o.length-1)],l;e===0?l=a(0).v:e===1?l=Yr(a(0).v,a(1).v,fi(t,i,.5)):e===2?l=Yr(a(1).v,a(2).v,fi(t,1,.9)):l=a(2).v;let c=a(Math.min(e,2)).d;Ke(n,l.toFixed(c),this.L.board.x,this.L.board.y+this.L.board.h/2+38,{font:s.mono(500,24),color:r.ink,align:"center"})},_drawTable(n,t,e,i,s,r,o){let a=this.T,{x:l,y:c}=this.L.table,u=Fe.fanout.rows,h=Fe.fanout.tableHeader.split(" \xB7 ");n.save(),n.globalAlpha*=r;let d=o.body(500,20),f=o.mono(500,20);n.font=d;let p=0;for(let S of u)p=Math.max(p,n.measureText(S[0]).width);n.font=o.body(500,18),p=Math.max(p,n.measureText(h[0]||"").width);let v=n.measureText(h[1]||"").width;n.font=f;let g=v;for(let S of u)g=Math.max(g,n.measureText(S[1]||"").width);let m=l+p+28+g,_=m+26,y=31;Ke(n,h[0]||"",l,c,{font:o.body(500,18),color:a.ink3}),Ke(n,h[1]||"",m,c,{font:o.body(500,18),color:a.ink3,align:"right"}),Ke(n,h[2]||"",_,c,{font:o.body(500,18),color:a.ink3}),n.font=o.body(500,18);let x=_+Math.max(60,n.measureText(h[2]||"").width)-l;n.strokeStyle=a.line,n.lineWidth=1,n.beginPath(),n.moveTo(l-10,c+11),n.lineTo(l+x+10,c+11),n.stroke();let w=e>1?1:e===1?fi(t,s,.4):0;u.forEach((S,T)=>{let E=e>1?1:i[T]?Gl(t,i[T].row,.25):1;if(E<=0)return;let b=c+14+y*(T+1)-8;T===Fe.fanout.pick&&w>0&&(n.save(),n.globalAlpha*=w,Jr(n,l-12,b-22,x+24,y-1,6),n.fillStyle=hn(a.good,.1),n.fill(),n.strokeStyle=hn(a.good,.6),n.lineWidth=1.2,n.stroke(),n.restore());let M=(S[2]||"")===Fe.fanout.keepWord,A=E*(T===Fe.fanout.pick?1:1-.25*w);Ke(n,S[0],l+(1-E)*-10,b,{font:d,color:a.ink,alpha:A}),Ke(n,S[1]||"",m,b,{font:f,color:M?a.ink:a.ink2,align:"right",alpha:A}),Ke(n,S[2]||"",_,b,{font:o.body(500,20),color:M?a.good:a.ink3,alpha:A})}),n.restore()}},dm=_2;function fm(n,t,e,i,s,r,o,a){let l=s*r;return[n+a*(1-r*r)+r*e*Math.cos(o+l*Math.sin(o)),t-r*i*e*Math.sin(o)]}function pm(n,t,e){let{cx:i,cy:s,a:r,kappa:o=1.8,delta:a=.5,levels:l=9,color:c,alpha:u=1,particles:h=40}=e,d=.14*r;n.save(),n.lineWidth=1.5;for(let f=1;f<=l;f++){let p=f/l,v=1+.018*Math.sin(t*.55-p*1.6),g=o+.035*Math.sin(t*.4+p),m=r*v;n.strokeStyle=hn(c,u*(.1+.24*p)*(f===l?1.6:1)),n.beginPath();let _=160;for(let y=0;y<=_;y++){let x=y/_*Math.PI*2,w=fm(i,s,m,g,a,p,x,d);y===0?n.moveTo(w[0],w[1]):n.lineTo(w[0],w[1])}n.stroke()}An(n,i+d,s,10,c,.35*u);for(let f=0;f<h;f++){let v=(1+f%l)/l,g=(.06+.05*(f*7%5)/5)*(f%2?1:-1),m=f*2.399%(Math.PI*2)+t*g/(.4+v),_=1+.018*Math.sin(t*.55-v*1.6),y=fm(i,s,r*_,o+.035*Math.sin(t*.4+v),a,v,m,d);An(n,y[0],y[1],2.2+1.2*v,c,u*(.35+.4*v))}n.restore()}var Zo=new Uint8Array(512),ud=new Uint8Array(256);{let n=1;for(let t=0;t<255;t++)Zo[t]=n,ud[n]=t,n<<=1,n&256&&(n^=285);for(let t=255;t<512;t++)Zo[t]=Zo[t-255]}var gm=(n,t)=>n&&t?Zo[ud[n]+ud[t]]:0;function b2(n){let t=[1];for(let e=0;e<n;e++){let i=new Array(t.length+1).fill(0);for(let s=0;s<t.length;s++)i[s]^=t[s],i[s+1]^=gm(t[s],Zo[e]);t=i}return t}function M2(n,t){let e=t.length-1,i=new Array(e).fill(0);for(let s of n){let r=s^i.shift();i.push(0);for(let o=0;o<e;o++)i[o]^=gm(t[o+1],r)}return i}var mm=[null,[10,1,16,0,0],[16,1,28,0,0],[26,1,44,0,0],[18,2,32,0,0],[24,2,43,0,0],[16,4,27,0,0],[18,4,31,0,0],[22,2,38,2,39],[22,3,36,2,37],[26,4,43,1,44]],w2=[null,[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]],S2=0;function T2(n){return Array.from(new TextEncoder().encode(n))}function vm(n){let t=T2(n),e=0;for(let k=1;k<=10;k++){let I=mm[k],O=I[1]*I[2]+I[3]*I[4];if(4+(k<=9?8:16)+8*t.length<=O*8){e=k;break}}if(!e)throw new Error("QR: text too long for versions 1-10 at level M");let[i,s,r,o,a]=mm[e],l=s*r+o*a,c=l*8,u=[],h=(k,I)=>{for(let O=I-1;O>=0;O--)u.push(k>>>O&1)};h(4,4),h(t.length,e<=9?8:16);for(let k of t)h(k,8);h(0,Math.min(4,c-u.length)),h(0,(8-u.length%8)%8);let d=[];for(let k=0;k<u.length;k+=8){let I=0;for(let O=0;O<8;O++)I=I<<1|u[k+O];d.push(I)}for(let k=236;d.length<l;k^=253)d.push(k);let f=b2(i),p=[],v=0;for(let k=0;k<s+o;k++){let I=k<s?r:a,O=d.slice(v,v+I);v+=I,p.push({d:O,e:M2(O,f)})}let g=[],m=Math.max(r,a);for(let k=0;k<m;k++)for(let I of p)k<I.d.length&&g.push(I.d[k]);for(let k=0;k<i;k++)for(let I of p)g.push(I.e[k]);let _=17+4*e,y=Array.from({length:_},()=>new Array(_).fill(!1)),x=Array.from({length:_},()=>new Array(_).fill(!1)),w=(k,I,O)=>{y[I][k]=O,x[I][k]=!0};for(let k=0;k<_;k++)w(6,k,k%2===0),w(k,6,k%2===0);let S=(k,I)=>{for(let O=-4;O<=4;O++)for(let H=-4;H<=4;H++){let $=k+H,K=I+O;if($<0||K<0||$>=_||K>=_)continue;let ct=Math.max(Math.abs(H),Math.abs(O));w($,K,ct!==2&&ct!==4)}};S(3,3),S(_-4,3),S(3,_-4);let T=w2[e];for(let k=0;k<T.length;k++)for(let I=0;I<T.length;I++)if(!(k===0&&I===0||k===0&&I===T.length-1||k===T.length-1&&I===0))for(let O=-2;O<=2;O++)for(let H=-2;H<=2;H++)w(T[k]+H,T[I]+O,Math.max(Math.abs(H),Math.abs(O))!==1);let E=k=>{let I=S2<<3|k,O=I;for(let K=0;K<10;K++)O=O<<1^(O>>>9)*1335;let H=(I<<10|O)^21522,$=K=>(H>>>K&1)===1;for(let K=0;K<=5;K++)w(8,K,$(K));w(8,7,$(6)),w(8,8,$(7)),w(7,8,$(8));for(let K=9;K<15;K++)w(14-K,8,$(K));for(let K=0;K<8;K++)w(_-1-K,8,$(K));for(let K=8;K<15;K++)w(8,_-15+K,$(K));w(8,_-8,!0)};if(E(0),e>=7){let k=e;for(let O=0;O<12;O++)k=k<<1^(k>>>11)*7973;let I=e<<12|k;for(let O=0;O<18;O++){let H=(I>>>O&1)===1,$=_-11+O%3,K=Math.floor(O/3);w($,K,H),w(K,$,H)}}let b=0;for(let k=_-1;k>=1;k-=2){k===6&&(k=5);for(let I=0;I<_;I++)for(let O=0;O<2;O++){let H=k-O,K=(k+1&2)===0?_-1-I:I;!x[K][H]&&b<g.length*8&&(y[K][H]=(g[b>>>3]>>>7-(b&7)&1)===1,b++)}}let M=[(k,I)=>(k+I)%2===0,(k,I)=>I%2===0,k=>k%3===0,(k,I)=>(k+I)%3===0,(k,I)=>(Math.floor(k/3)+Math.floor(I/2))%2===0,(k,I)=>k*I%2+k*I%3===0,(k,I)=>(k*I%2+k*I%3)%2===0,(k,I)=>((k+I)%2+k*I%3)%2===0],A=k=>{for(let I=0;I<_;I++)for(let O=0;O<_;O++)!x[I][O]&&M[k](O,I)&&(y[I][O]=!y[I][O])},U=()=>{let k=0,I=$=>{let K=1;for(let ct=1;ct<=_;ct++)ct<_&&$(ct)===$(ct-1)?K++:(K>=5&&(k+=K-2),K=1);for(let ct=0;ct+7<=_;ct++){if(![1,0,1,1,1,0,1].every((X,et)=>$(ct+et)===(X===1)))continue;let st=[1,2,3,4].every(X=>ct-X<0||!$(ct-X)),F=[0,1,2,3].every(X=>ct+7+X>=_||!$(ct+7+X));(st||F)&&(k+=40)}};for(let $=0;$<_;$++)I(K=>y[$][K]);for(let $=0;$<_;$++)I(K=>y[K][$]);let O=0;for(let $=0;$<_;$++)for(let K=0;K<_;K++)if(y[$][K]&&O++,K<_-1&&$<_-1){let ct=y[$][K];ct===y[$][K+1]&&ct===y[$+1][K]&&ct===y[$+1][K+1]&&(k+=3)}let H=_*_;return k+=Math.floor(Math.abs(O*20-H*10)/H)*10,k},L=0,N=1/0;for(let k=0;k<8;k++){A(k),E(k);let I=U();I<N&&(N=I,L=k),A(k)}return A(L),E(L),{size:_,version:e,mask:L,get:(k,I)=>y[I][k]}}function xm(n,t,e,i,s,{dark:r="#06070c",light:o="#f3f1ea",quiet:a=4,reveal:l=1,radius:c=10}={}){let u=t.size+a*2,h=s/u;n.save(),n.fillStyle=o,n.beginPath(),n.roundRect?n.roundRect(e,i,s,s,c):n.rect(e,i,s,s),n.fill(),n.fillStyle=r;let d=(t.size-1)/2,f=Math.hypot(d,d);for(let p=0;p<t.size;p++)for(let v=0;v<t.size;v++)t.get(v,p)&&(l<1&&Math.hypot(v-d,p-d)/f>l||n.fillRect(e+(v+a)*h,i+(p+a)*h,h+.35,h+.35));n.restore()}var Zs=Vl.close,dd=30,A2=`
.cl-root{position:absolute;inset:0;background:var(--bg);user-select:none;-webkit-user-select:none;}
.cl-canvas{position:absolute;left:0;top:0;width:1600px;height:900px;}
.cl-block{position:absolute;pointer-events:none;}
.cl-instant,.cl-instant *{transition:none !important;}
.cl-take{list-style:none;margin:0;padding:0;}
.cl-take li{display:grid;grid-template-columns:64px 1fr;align-items:baseline;margin:0 0 34px;
  opacity:0;transform:translateY(14px);transition:opacity .7s var(--ease-out),transform .7s var(--ease-out);}
.cl-take li span{font:500 20px/1 var(--font-mono);color:var(--flux);opacity:.8;}
.cl-take li p{margin:0;font:400 44px/1.18 var(--font-display);color:var(--ink);letter-spacing:-.005em;}
.cl-on .cl-take li{opacity:1;transform:none;}
.cl-take.cl-gone li{opacity:0 !important;transform:translateY(-10px) !important;transition-delay:0s !important;transition-duration:.4s !important;}
.cl-fin > *{opacity:0;transform:translateY(12px);transition:opacity .6s var(--ease-out),transform .6s var(--ease-out);}
.cl-fin.cl-on > *{opacity:1;transform:none;}
.cl-score{font:300 132px/1 var(--font-mono);color:var(--ink);letter-spacing:-.02em;font-variant-numeric:tabular-nums;}
.cl-cap{margin-top:14px;font:500 26px/1.2 var(--font-body);color:var(--ink2);}
.cl-cap::before{content:"";display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--plasma);margin-right:12px;vertical-align:2px;}
.cl-links{display:grid;grid-template-columns:128px 1fr;gap:18px 20px;align-items:baseline;}
.cl-links dt{font:600 18px/1.3 var(--font-body);letter-spacing:.12em;text-transform:uppercase;color:var(--ink3);}
.cl-links dd{margin:0;font:400 25px/1.3 var(--font-body);color:var(--ink);}
.cl-links dd.mono{font:400 23px/1.35 var(--font-mono);}
.cl-links dd span{white-space:nowrap;}
.cl-qrcap{margin-top:12px;text-align:center;font:500 18px/1 var(--font-body);color:var(--ink3);letter-spacing:.04em;}
.cl-thanks{font:400 23px/1.35 var(--font-body);color:var(--ink2);}
`,qs=n=>String(n).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),E2=n=>String(n).split("/").map((t,e,i)=>`<span>${qs(t)}${e<i.length-1?"/":""}</span>`).join("<wbr>"),R2={id:"close",steps:2,mount(n,t){this.ctx=t,this.T=t.tokens,this.step=0,this.stepStart=performance.now()/1e3,this.tauOffset=dd,this.entered=!1,this.raf=0,this.qr=vm(Zs.qrUrl);let e=document.createElement("style");e.textContent=A2,n.appendChild(e);let i=document.createElement("div");i.className="cl-root",n.appendChild(i);let s=document.createElement("canvas");s.className="cl-canvas",i.appendChild(s),this.canvas=s,this.g=s.getContext("2d");let r=document.createElement("div");r.className="cl-block",r.style.cssText="left:600px;top:150px;width:930px;",r.innerHTML='<ul class="cl-take">'+Zs.takeaways.map((l,c)=>`<li style="transition-delay:${(.1+c*.36).toFixed(2)}s"><span>${String(c+1).padStart(2,"0")}</span><p>${qs(l)}</p></li>`).join("")+"</ul>",i.appendChild(r),this.take=r,this.takeList=r.firstChild;let o=document.createElement("div");o.className="cl-block cl-fin",o.style.cssText="left:600px;top:96px;width:940px;height:780px;";let a=270;o.innerHTML=`<div style="position:absolute;left:0;top:0;transition-delay:.05s"><div class="cl-score">${qs(Zs.score)}</div><div class="cl-cap">${qs(Zs.scoreCaption)}</div></div><dl class="cl-links" style="position:absolute;left:0;top:300px;width:650px;margin:0;transition-delay:.35s">`+Zs.links.map(l=>`<dt>${qs(l.label)}</dt><dd class="${l.mono?"mono":""}">${E2(l.value)}</dd>`).join("")+`</dl><div style="position:absolute;left:${940-a}px;top:286px;width:${a}px;transition-delay:.55s"><canvas class="cl-qr" style="width:${a}px;height:${a}px;display:block"></canvas><div class="cl-qrcap">${qs(Zs.qrCaption||"")}</div></div><div class="cl-thanks" style="position:absolute;left:0;top:676px;width:940px;padding-top:20px;border-top:1px solid var(--line);transition-delay:.8s">${qs(Zs.thanks)}</div>`,i.appendChild(o),this.fin=o,this.qrCanvas=o.querySelector(".cl-qr"),this.qrG=this.qrCanvas.getContext("2d"),this.resize()},enter(){this.entered=!0,this.t0=performance.now()/1e3,this.ctx.reducedMotion?this._render():this._loop()},leave(){this.entered=!1,cancelAnimationFrame(this.raf),this.raf=0},setStep(n,{instant:t=!1}={}){this.step=Ai(n|0,0,this.steps-1),t=t||this.ctx.reducedMotion,this.stepStart=performance.now()/1e3,this.tauOffset=t?dd:0,this._dom(t,!1),this.raf||this._render()},demo(){this.stepStart=performance.now()/1e3,this.tauOffset=this.ctx.reducedMotion?dd:0,this._dom(this.ctx.reducedMotion,!0),this.raf||this._render()},resize(){this.ratio=this.ctx.fitCanvas(this.canvas).ratio,this.qrRatio=this.ctx.fitCanvas(this.qrCanvas).ratio,this._render()},_dom(n,t){let e=[this.take,this.fin,this.takeList];(n||t)&&e.forEach(i=>i.classList.add("cl-instant")),t&&(this.take.classList.remove("cl-on"),this.fin.classList.remove("cl-on"),this.take.offsetWidth,n||e.forEach(i=>i.classList.remove("cl-instant"))),this.take.classList.toggle("cl-on",this.step===0||this.step===1),this.takeList.classList.toggle("cl-gone",this.step===1),this.fin.classList.toggle("cl-on",this.step===1),n&&(this.take.offsetWidth,e.forEach(i=>i.classList.remove("cl-instant")))},_loop(){let n=()=>{this.entered&&(this._render(),this.raf=requestAnimationFrame(n))};this.raf=requestAnimationFrame(n)},_render(){let n=this.g,t=this.ratio||1,e=performance.now()/1e3,i=this.ctx.reducedMotion?4:e-(this.t0||e),s=e-this.stepStart+this.tauOffset;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.setTransform(t,0,0,t,0,0);let r=this.step===0?1:1-.35*fi(s,0,.8);pm(n,i,{cx:300,cy:352,a:150,kappa:1.8,delta:.5,levels:9,color:this.T.flux,alpha:.9*r,particles:36});let o=this.qrG,a=this.qrRatio||1;if(o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,this.qrCanvas.width,this.qrCanvas.height),this.step===1){o.setTransform(a,0,0,a,0,0);let l=fi(s,.55,.9);l>0&&xm(o,this.qr,0,0,270,{reveal:l<1?l*1.05:1})}}},ym=R2;var _m={tokamak:Pp,controlroom:l0,anatomy:w0,metric:C0,correct:P0,mirror:B0,timeaxis:V0,ladder:Y0,mast:am,agents:dm,close:ym};var bm=document.getElementById("app"),C2=new URLSearchParams(location.search);function Mm(){C2.has("presenter")?pd(bm):window.__deck=new Ko(bm,_m)}document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(n=>setTimeout(n,1200))]).then(Mm):Mm();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
