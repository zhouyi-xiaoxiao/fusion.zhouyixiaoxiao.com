var il={bg:"#06070c",bg2:"#0c0e17",ink:"#f3f1ea",ink2:"#b9b6ad",ink3:"#7d7b76",plasma:"#ff5ac8",plasmaHot:"#ffe3f6",plasmaDeep:"#7a2cff",flux:"#62e4ff",coil:"#ffb454",good:"#8dfc9f",warn:"#ff6b4a",line:"rgba(255,255,255,0.12)",lineStrong:"rgba(255,255,255,0.28)",fontDisplay:'"Fraunces Variable", "Iowan Old Style", Georgia, serif',fontBody:'"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif',fontMono:'"JetBrains Mono Variable", ui-monospace, "SF Mono", Menlo, monospace'},nl=new Map;function u0(n){if(nl.has(n))return nl.get(n);let t=typeof window<"u"&&window.__TALK_DATA__&&window.__TALK_DATA__[n],e;if(t!==void 0)e=Promise.resolve(t);else{let i=new URL(`data/${n}`,document.baseURI).href;e=fetch(i).then(s=>{if(!s.ok)throw new Error(`data ${n}: HTTP ${s.status}`);return/\.json$/.test(n)?s.json():s.arrayBuffer()})}return nl.set(n,e),e}var fo=class{constructor(t){this.host=t,this.el=document.createElement("div"),this.el.className="stage",this.el.style.cssText="position:absolute;left:50%;top:50%;width:1600px;height:900px;transform-origin:0 0;",t.appendChild(this.el),this.scale=1,this.listeners=new Set,this.reducedMotion=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this._fit=this._fit.bind(this),window.addEventListener("resize",this._fit),this._fit()}_fit(){let t=this.host.clientWidth||window.innerWidth,e=this.host.clientHeight||window.innerHeight,i=Math.min(t/1600,e/900),s=Math.abs(i-this.scale)>1e-4;this.scale=i;let r=(t-1600*i)/2,o=(e-900*i)/2;this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.style.transform=`scale(${i})`,s&&this.listeners.forEach(a=>a(i))}onScale(t){return this.listeners.add(t),()=>this.listeners.delete(t)}makeCtx(){let t=this;return{get scale(){return t.scale},get dpr(){return Math.min(window.devicePixelRatio||1,2)},get reducedMotion(){return t.reducedMotion},tokens:il,data:u0,fitCanvas(e,i=3){let s=e.clientWidth||parseFloat(e.style.width)||e.width,r=e.clientHeight||parseFloat(e.style.height)||e.height,o=Math.max(1,Math.min(i,(window.devicePixelRatio||1)*t.scale)),a=Math.round(s*o),l=Math.round(r*o);return e.width!==a&&(e.width=a),e.height!==l&&(e.height=l),{w:s,h:r,ratio:o}}}}};var $n={title:"Pixel-perfect was not enough",subtitle:"Score-aware flux-map regression, and what one student built with AI agents",author:"Xiaoxiao Zhouyi",affiliation:"University of Bristol",event:"FusionEC-26 \xB7 NeurIPS 2026 competition workshop \xB7 Atlanta, 12 December 2026",budgetSeconds:900},ye=[{id:"tokamak",layout:"full",title:"The machine",steps:[{variant:"title",k:"Fusion Equilibrium Challenge \xB7 2nd, Challenge 1",h:"Pixel-perfect was <em>not enough</em>",p:"Score-aware flux-map regression on DIII-D, a physics inverse for MAST, and what one student built with AI agents.<br><b>Xiaoxiao Zhouyi</b> \xB7 University of Bristol",say:"Good morning. I'm Xiaoxiao Zhouyi, a first-year PhD student at the University of Bristol. I am not a fusion scientist; I study random walks. This was a solo entry. It finished second in Challenge 1, and I built it together with AI agents. I will show you what worked, what failed, and how the agents were actually used.",x:2},{k:"The machine",h:"A magnetic bottle for a <em>star</em>",p:"Charged particles spiral along the field lines. Neutrons do not: in a reactor they carry the energy out.",say:"First, the machine. A tokamak holds a plasma, hotter than the centre of the sun, in a magnetic bottle. Charged particles spiral along the field lines. Neutrons are not confined: in a reactor, they carry the energy out.",x:2},{k:"The machine",h:'Field lines live on <span class="flux">nested surfaces</span>',p:"Cut the torus open: the field lines trace closed surfaces, one inside the other. The outermost closed one is the edge of the plasma.",say:"Cut the torus open, and the field lines trace nested surfaces, like the layers of an onion. These are the flux surfaces. The last closed one is the edge of the plasma.",x:1},{k:"The task",h:'One number per point: <span class="flux">\u03C8</span> on a 65 \xD7 65 grid',p:'The shape of the surfaces is the equilibrium. This map, plus two scalars, <span class="num">q<sub>95</sub></span> and <span class="num">\u03B2<sub>N</sub></span>, for every time slice of every shot.',say:"The shape of those surfaces is the equilibrium. On a sixty-five by sixty-five grid it is one number per point: the poloidal flux, psi. That map, plus two scalars, q ninety-five and beta N, is what we predict, for every time slice of every shot.",x:1}]},{id:"controlroom",layout:"split",title:"Inputs and outputs",steps:[{k:"What we predict it from",h:'The <span class="coil">coils</span>',p:"DIII-D in cross-section. With no plasma, this is the field of the coils alone.",say:"What do we predict it from? This is DIII-D in cross-section. These are the coils, and with no plasma, this is their field.",x:1},{k:"What we predict it from",h:"Add the plasma current and the surfaces <em>close</em>",p:"The coils decide where the X-point sits and how tall the plasma is.",say:"Add the plasma current, and the surfaces close. The coils shape the plasma: where the X-point sits, how tall it is.",x:2},{k:"Try it",h:"Pull on a coil",p:"The boundary moves with the currents. The <b>Thomson laser</b> sees temperature and density along one line.",say:"Let me pull on a coil. [[drag a coil, or press D]] The boundary moves; the X-point moves. This line is the Thomson laser: it measures temperature and density along one chord. So the inputs are these currents, and that one line.",x:8},{k:"The task",h:'<span class="coil">Currents and Thomson</span> in. <span class="flux">The map</span> out.',p:"<b>No magnetic sensors</b>, which is what a standard reconstruction relies on. About 7,000 labelled DIII-D shots.",foot:"This panel is a toy model written for the talk: a fixed current profile, not a Grad\u2013Shafranov solve.",say:"And that is all. No magnetic sensors, which a standard reconstruction relies on. This panel is a toy model I wrote for the talk. The real targets are EFIT reconstructions of about seven thousand DIII-D shots.",x:1}]},{id:"anatomy",layout:"split",title:"Where the score was lost",steps:[{k:"First model",h:"You cannot tell them <em>apart</em>",p:"In blue, a true map. In pink, a map that is wrong by exactly as much as my first model was.",big:"0.99982<small>R\xB2 of the flux map, first submission</small>",foot:"First model: principal components of \u03C8, a bag of small networks.",say:"My first model was simple: principal components of psi, and a bag of small networks. Its flux maps had an R-squared of zero point nine nine nine eight. Here is what that looks like: a true map in blue, and in pink a map that is wrong by exactly that much. You cannot tell them apart. [[slider]] I have to magnify the error many times before you see it.",x:5},{k:"First model",h:"And the score said <em>0.9914</em>",p:"The flux map carries 55% of the weight and caused about <b>1%</b> of the loss. <b>73%</b> of the loss came from a term with 20% of the weight.",say:"But the score was zero point nine nine one four. Where were the points going? The flux map has fifty-five percent of the weight, and caused about one percent of my loss. Seventy-three percent came from one term, Consistency, which has only twenty percent of the weight.",x:3},{k:"Consistency",h:"Seven numbers the scorer reads <em>off your map</em>",p:"Axis position, elongation, two triangularities, volume, internal inductance. Nonlinear in \u03C8: a small pixel error in the wrong place moves them a lot.",say:"Consistency takes seven numbers that the scorer reads off your map: the magnetic axis, the elongation, two triangularities, the volume, the internal inductance. They are nonlinear in the map: a tiny pixel error, in the wrong place, moves them a lot. So pixel accuracy was saturated. The real question was how to make a regression get the scorer's own functionals right. I answered it twice.",x:2}]},{id:"metric",layout:"split",title:"Answer 1: in the loss",steps:[{k:"Answer one \xB7 in the loss",h:"Not all errors cost <em>the same</em>",p:"Two errors of the same size in pixels. One leaves the shape alone. The other changes the elongation.",say:"First answer: in the loss. Here are two ways of being wrong. [[drag the error]] Push the map this way: the pixels change, but the shape barely moves. Push it that way, by the same amount: the elongation changes, and the score drops. Mean squared error sees a circle. The scorer sees this ellipse.",x:6},{k:"Answer one \xB7 in the loss",h:"Give the network the <em>ellipse</em>",p:`Differentiate the scorer's seven functionals with the scorer's own code. Weight every error by what it costs in <span class="num">S</span>.`,foot:"M = a\xB7I + \u03A3<sub>j</sub> w<sub>j</sub> E[J<sub>j</sub><sup>T</sup>J<sub>j</sub>] / Var<sub>j</sub>",say:"So I gave the network the ellipse. I differentiated the scorer's seven functionals, numerically, with the scorer's own code, and built a metric, M. An error that moves the elongation now costs what it costs in the score.",x:1},{k:"Answer one \xB7 in the loss",h:"Credit where it is due",p:"The idea of this loss, and of slow current-history features, follows material another participant, <b>pshishkin</b>, published openly during the competition.",big:"+12 <small>\xD710\u207B\u2074 from the loss \xB7 +11 from the features \xB7 roughly additive</small>",say:"Credit where it is due: this loss, and the idea of slow current-history features, follow material that another participant, pshishkin, published openly during the competition. In my runs the loss was worth about twelve units and the features eleven, and they add. One unit is ten to the minus four: that is the scale of this whole competition.",x:1}]},{id:"correct",layout:"split",title:"Answer 2: after the model",steps:[{k:"Answer two \xB7 after the model",h:"Two opinions about the <em>same</em> number",p:"The map implies an elongation. A separate network predicts the elongation directly from the inputs. They disagree a little.",say:"Second answer: after the model. The map implies an elongation. Separate networks predict the elongation directly from the inputs. They disagree a little, and the direct one is usually closer.",x:1},{k:"Answer two \xB7 after the model",h:'Move the map until it <span class="good">agrees</span>',p:"A damped Gauss\u2013Newton step in coefficient space, with M as the prior. It needs no label, so it runs at inference.",say:"So I move the map. [[press D]] A damped Gauss\u2013Newton step pulls it until the numbers the scorer will read off it agree with the direct predictions. The same metric M is its prior, so it moves in directions that are cheap in pixels. It needs no label, so it runs at inference.",x:4},{k:"Answer two \xB7 after the model",h:'Worth <span class="good">four to five units</span>',p:'One step: <span class="num">+2.8</span>. Iterated with the prior: <span class="num">+1.4</span>. Stronger direct heads: <span class="num">+0.3</span> on the board.',say:"That was worth four to five units.",x:2}]},{id:"mirror",layout:"split",title:"Repair 1: reversed shots",steps:[{k:"Repair one \xB7 the data",h:"The same plasma, with the <em>sign flipped</em>",p:"Eight or nine percent of DIII-D shots run with the plasma current reversed. Every current changes sign, \u03C8 changes sign, the shape is the same.",say:"Then two repairs of the data. One: eight or nine percent of DIII-D shots run with the plasma current reversed. It is the same plasma: every current changes sign, the flux changes sign, the shape is identical.",x:3},{k:"Repair one \xB7 the data",h:'Two worlds, <span class="good">folded into one</span>',p:"Of 789 input features, 430 are odd under reversal. Multiply those by the sign of the plasma current.",say:"But the network does not know that. It sees two different worlds, with less than a tenth of the data for the second. The organisers had pointed out the sign on the forum. I applied it to everything: of seven hundred and eighty-nine features, four hundred and thirty are odd under reversal. Multiply those by the sign of the current, and the two worlds fold into one.",x:3},{k:"Repair one \xB7 the data",h:"9% of the shots, <em>60 to 68%</em> of the error",p:'On the time-blocked fold, before the fix. After it: <span class="num">+13.7</span> units on that fold, <span class="num">+2.6</span> on the public board.',say:"Before the fix, those few shots carried sixty to sixty-eight percent of the squared error on my time-blocked fold. After it: fourteen units on that fold, three on the public board.",x:1}]},{id:"timeaxis",layout:"split",title:"Repair 2: a clock",steps:[{k:"Repair two \xB7 the data",h:"A clock that was <em>wrong</em>",p:"On 2,111 of 7,041 training shots, from an older acquisition era not covered by the official fix, the plasma-current time axis is shifted against the other signals by 54 to 291 ms.",say:"Two: a clock. The organisers' time fix covers most shots. But on thirty percent of the training shots, from an older acquisition era, the plasma-current clock is still off, by fifty to three hundred milliseconds.",x:1},{k:"Repair two \xB7 the data",h:'One rule that reads <span class="good">inputs only</span>',p:"Start the plasma-current record 8,192 ms after the magnetics record, if that puts breakdown where it should be.",say:"The repair is one rule that reads only the inputs: the plasma-current record starts eight thousand one hundred and ninety-two milliseconds after the magnetics record. [[press D]]",x:4},{k:"Repair two \xB7 the data",h:"Neither repair is <em>machine learning</em>",p:'<span class="num">+6.8</span> units on the time-blocked fold, <span class="num">+1.1</span> on the board. Disclosed to the organisers before the Final phase.',say:"Seven units on the time-blocked fold, one on the board; disclosed to the organisers before the final phase. Neither repair is machine learning. Both came from looking at the worst shots and asking why. I will come back to who was looking.",x:1}]},{id:"ladder",layout:"split",title:"What moved the score",steps:[{k:"The whole climb",h:"Everything happens in the <em>third decimal</em>",p:'First file: flux-map R\xB2 <span class="num">0.99982</span>, score <span class="num">0.99137</span>.',say:"Here is the whole climb. First file: map R-squared zero point nine nine nine eight; score zero point nine nine one four.",x:1},{k:"The whole climb",h:"Eleven accepted changes",p:'<em style="font-style:normal;color:var(--plasma)">Pink</em>: make the model care about the scorer. <span style="color:var(--coil)">Amber</span>: fix the inputs. Grey: the usual ensemble work.',say:"Eleven accepted changes. Pink: make the model care about the scorer. Amber: fix the inputs. Grey: the usual ensemble work.",x:3},{k:"How I decided",h:"A rule written <em>before</em> each test",p:"Paired bootstrap over shots, and a time-blocked fold with a veto. Rejected: a shot-level transformer, a recurrent model, an exact l<sub>i</sub> loss, more members.",say:"Roughly forty percent score-aware, thirty percent inputs, thirty percent ensemble. On shots far from the training period, [[toggle]] the inputs matter most. Every change had an acceptance rule written before the test: a paired bootstrap over shots, and a time-blocked fold with a veto. Much failed that test: a transformer over the whole shot, a recurrent model, more ensemble members.",x:4},{k:"Blind Final",h:"Second, by <em>77 millionths</em>",p:"The ten leading entries were within one thousandth of each other.",big:"0.997253<small>blind Final composite, Challenge 1</small>",say:"The blind final: zero point nine nine seven two five three. Second place, seventy-seven millionths behind first. The top ten were within one thousandth.",x:3}]},{id:"mast",layout:"split",title:"Zero-shot MAST",steps:[{k:"Challenge 2 \xB7 zero-shot",h:"A machine the model has <em>never seen</em>",p:"MAST, a spherical tokamak. No MAST label may be used: not to train, not to tune, not to choose between models.",say:"Challenge two: the same task on MAST, a spherical tokamak in the UK, with no MAST labels at all. Not to train, not to tune, not even to choose between two models.",x:2},{k:"Challenge 2 \xB7 zero-shot",h:'So: physics. <span class="flux">Isotherms are flux surfaces</span>',p:"A free-boundary Grad\u2013Shafranov solve with the MAST coils, fitted to Thomson. Two points with the same temperature, either side of the axis, must lie on the same surface.",say:"A regression trained on DIII-D does not transfer. So here I used physics: a free-boundary Grad\u2013Shafranov solver with the MAST coils, fitted to the Thomson data. The key constraint: temperature is constant on a flux surface. Two points with the same temperature, either side of the axis, must lie on the same surface.",x:2},{k:"Challenge 2 \xB7 zero-shot",h:"The biggest gain was a <em>convention</em>",p:"The solenoid needs a documented factor of one half.",big:"0.63 \u2192 0.95<small>flux-map R\xB2 on MAST, solenoid factor 1 \u2192 0.5</small>",say:"The largest gain was not a model. It was a convention: the solenoid current needs a factor of one half, documented in the MAST literature. With factor one, the map's R-squared was zero point six three. With one half: zero point nine five.",x:3},{k:"Challenge 2 \xB7 zero-shot",h:"Thirteenth, and <em>why</em>",p:'The map was good (R\xB2 <span class="num">0.981</span>). Consistency <span class="num">0.350</span> and scalar R\xB2 <span class="num">0.450</span> carry 89% of the shortfall: vessel currents and the current profile are not in the inputs.',big:"0.761<small>MAST composite, blind Final \xB7 G = 0.7632</small>",say:"Small steps took it to zero point seven six, and thirteenth place. Why not better? The flux map was good: zero point nine eight. But the shape numbers and q ninety-five were poor. The MAST labels include currents in the vessel wall; my solver has none, and Thomson data say little about the current profile. What I learned on DIII-D transferred in shape, not in mean. For cross-machine work, the missing piece is a model of the currents you cannot see.",x:2}]},{id:"agents",layout:"full",title:"How I used AI",steps:[{k:"How it was built",h:"One student, <em>many agents</em>",p:'A coding agent that can start other agents and run jobs on a supercomputer. <span class="num">22</span> development submissions, <span class="num">3</span> final.',say:"Now, how it was built. One person, from the end of August to late October, working through a coding agent, Claude Code. It could start other agents and run jobs on Isambard-AI, one of the UK's national AI supercomputers, which happens to be in Bristol.",x:2},{k:"Pattern one",h:"Fan out: one question, <em>seven</em> experiments",p:"The lead agent splits a question into variants. Each worker owns one variant and one job. I read the table and choose.",say:"The basic pattern is a fan-out. I ask one question. The lead agent splits it into variants; each worker runs one variant as one job; the results come back as one table. I read the table and choose. Seven experiments in an evening instead of one. On day one, my local score went from zero point three three to zero point nine seven.",x:3},{k:"Pattern two",h:'An adversary, and a <span class="good">gate</span>',p:'A model from a different family tries to break each design. An independent agent checks every file against the rules before upload: <span class="num">35</span> audits, at least <span class="num">7</span> candidates blocked or changed.',say:"The second pattern is an adversary. Before a design was built, a model from a different family was asked to break it. It found a normalisation error in my loss, and three physics errors in an early MAST design. And before any file went to the leaderboard, an independent agent checked it against the rules: thirty-five audits, and at least seven candidates blocked or changed.",x:3},{k:"The honest part",h:"The agents were also <em>wrong</em>",p:"What saved the project was boring: written handoff files, and cluster jobs that kept running.",say:"The agents were also wrong, often. On day one they read the plasma current in amperes; the data are in kiloamperes. A scoring script was left on the wrong machine, and a conclusion had to be withdrawn. Six times, the agents died at a usage limit in the middle of a run. What saved the project was boring: written handoff files, and cluster jobs that kept running.",x:3},{k:"Who did what",h:"Throughput was theirs. <em>The decisions were mine.</em>",p:"Agents traced the error to the reversed shots and found the clock rule. The loss idea came from another participant. I set the goal, asked for the audits, chose between candidates, and decided what to submit and disclose.",say:"So who did what? The agents wrote and reviewed the code, ran the experiments, checked the rules. And the two data repairs: an agent, doing forensics on my worst fold, traced the error to the reversed shots, and an agent found the clock rule. I set the goal, asked for an independent audit of every plan, chose between candidates, and decided what to submit and what to disclose. The agents multiplied how much I could try. They did not decide what was true: the official scorer and the held-out shots did that. And the organisers reproduced the entry from scratch.",x:3}]},{id:"close",layout:"full",title:"Takeaways",steps:[{k:"To take home",h:"Four things",say:"Four things I take to the next problem. One: decompose the metric before you model. Two: put the scorer in the loss, and again after the model. Three: fix the data before the network. Four: agents multiply throughput; the rules of evidence stay yours.",x:4},{k:"Thank you",h:"Everything you saw is a <em>web page</em>",p:"Code (MIT): github.com/zhouyi-xiaoxiao/fusion-equilibrium-challenge-2026",say:"The code is open, under MIT. And this talk is a web page: you can open it and play with everything you saw. Thank you to the organisers, to General Atomics and UKAEA for the data, and to Isambard-AI for the compute. I am happy to take questions.",x:2}]}],d0=130/60;function f0(n){return(n||"").replace(/\[\[.+?\]\]/g," ").trim().split(/\s+/).filter(Boolean).length}function p0(n){return typeof n.t=="number"?n.t:Math.round(f0(n.say)/d0+(n.x||0))}function po(){let n=[],t=0;return ye.forEach((e,i)=>{e.steps.forEach((s,r)=>{let o=p0(s);n.push({scene:i,step:r,t0:t,t:o}),t+=o})}),{list:n,total:t}}var mo="fusion-talk-v1",Es=class{constructor(t,e){this.role=t,this.onMessage=e,this.peer=null,this.seen=new Set;try{this.bc=new BroadcastChannel(mo),this.bc.onmessage=i=>this._recv(i.data)}catch{this.bc=null}window.addEventListener("message",i=>{i.data&&i.data.__ch===mo&&this._recv(i.data)}),t==="presenter"&&window.opener&&(this.peer=window.opener)}attachWindow(t){this.peer=t}_recv(t){!t||t.__ch!==mo||t.from===this.role||this.seen.has(t.id)||(this.seen.add(t.id),this.seen.size>400&&(this.seen=new Set([...this.seen].slice(-100))),this.onMessage(t))}send(t){let e={...t,__ch:mo,from:this.role,id:`${this.role}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`};if(this.bc)try{this.bc.postMessage(e)}catch{}if(this.peer&&!this.peer.closed)try{this.peer.postMessage(e,"*")}catch{}}};var fe=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i};function sl(n){return n.replace(/\[\[(.+?)\]\]/g,'<span class="cue">$1</span>')}function Pn(n){let t=Math.max(0,Math.round(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}var go=class{constructor(t,e){this.registry=e,this.flat=po(),this.el=fe("div","deck"),t.appendChild(this.el),this.stage=new fo(this.el),this.ctx=this.stage.makeCtx(),this.layers=[],this.mounted=new Map,this.si=-1,this.ti=0,this.timer={running:!1,t0:0,acc:0},this.sync=new Es("main",s=>this._onSync(s)),ye.forEach((s,r)=>{let o=fe("section","scene");o.dataset.id=s.id,o.dataset.layout=s.layout;let a=fe("div","scene-root"),l=fe("div","scene-text");o.append(a,l),this.stage.el.appendChild(o),this.layers.push({layer:o,root:a,text:l,block:null})}),this._buildHud(),this._buildNotes(),this._buildOverlays(),this._bind(),this.stage.onScale(()=>{let s=this._module(this.si);s&&s.resize&&s.resize()});let i=this._parseHash();this.go(i.si,i.ti,{instant:!0,initial:!0}),setInterval(()=>this._tick(),250)}_buildHud(){let t=fe("div","hud"),e=fe("div","progress");this.progEls=ye.map(()=>{let l=fe("i"),c=fe("b");return l.appendChild(c),e.appendChild(l),{i:l,b:c}});let i=fe("div","hud-right");this.timerEl=fe("span","hud-timer","00:00"),this.whereEl=fe("span","where");let s=fe("div","hud-nav"),r=l=>`<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${l}"/></svg>`,o=fe("button",null,r("M8.5 2.5 4 7l4.5 4.5"));o.setAttribute("aria-label","Previous step");let a=fe("button",null,r("M5.5 2.5 10 7l-4.5 4.5"));a.setAttribute("aria-label","Next step"),o.addEventListener("click",()=>this.prev()),a.addEventListener("click",()=>this.next()),s.append(o,a),i.append(this.timerEl,this.whereEl,s),this.hintEl=fe("div","hud-hint",'<span class="ui-kbd">\u2192</span> next \xB7 <span class="ui-kbd">D</span> play the demo \xB7 <span class="ui-kbd">N</span> speaker notes \xB7 <span class="ui-kbd">O</span> overview \xB7 <span class="ui-kbd">?</span> keys'),this.demoEl=fe("div","demo-flag","DEMO"),t.append(e,i,this.hintEl,this.demoEl),this.stage.el.appendChild(t)}_buildNotes(){this.notesEl=fe("div","notes"),this.notesInner=fe("div","notes-inner"),this.notesEl.appendChild(this.notesInner),this.stage.el.appendChild(this.notesEl)}_buildOverlays(){this.ovEl=fe("div","overlay"),this.ovEl.appendChild(fe("h2",null,$n.title));let t=fe("div","ov-grid");this.ovCards=ye.map((s,r)=>{let o=this.flat.list.find(l=>l.scene===r).t0,a=fe("button","ov-card",`<div><div class="n">${String(r+1).padStart(2,"0")}</div><div class="t">${s.title}</div></div><div class="m">${Pn(o)} \xB7 ${s.steps.length} steps</div>`);return a.addEventListener("click",()=>{this.toggleOverview(!1),this.go(r,0)}),t.appendChild(a),a}),this.ovEl.appendChild(t),this.stage.el.appendChild(this.ovEl),this.helpEl=fe("div","overlay"),this.helpEl.appendChild(fe("h2",null,"Keys"));let e=[["\u2192 Space PgDn","next step"],["\u2190 PgUp","previous step"],["\u2193 / \u2191","next / previous scene"],["D","play the scripted demo of this step"],["N","speaker notes (the verbatim script)"],["P","open the presenter window (script, clock, pace)"],["T","start / pause the clock \xB7 Shift+T reset"],["O","overview of all scenes"],["F","full screen"],["1 \u2026 9, 0, -","jump to scene 1 \u2026 9, 10, 11"],["Home / End","first / last step"],["Esc","close this"]],i=fe("div","help-grid");e.forEach(([s,r])=>{i.appendChild(fe("div","k",s.split(" ").map(o=>o==="/"||o==="\u2026"||o==="\xB7"?o:`<span class="ui-kbd">${o}</span>`).join(" "))),i.appendChild(fe("div",null,r))}),this.helpEl.appendChild(i),this.stage.el.appendChild(this.helpEl)}_parseHash(){let t=/^#\/?(\d+)(?:[./](\d+))?/.exec(location.hash||"");if(!t)return{si:0,ti:0};let e=Math.max(0,Math.min(ye.length-1,parseInt(t[1],10)-1)),i=Math.max(0,Math.min(ye[e].steps.length-1,parseInt(t[2]||"1",10)-1));return{si:e,ti:i}}_module(t){let e=this.mounted.get(t);return e&&e.module?e.module:null}_ensureMounted(t){if(t<0||t>=ye.length)return Promise.resolve(null);let e=this.mounted.get(t);if(e)return e.promise;let i=ye[t],s=this.registry[i.id];return e={module:null,promise:null},this.mounted.set(t,e),e.promise=Promise.resolve().then(()=>s.mount(this.layers[t].root,this.ctx)).then(()=>(e.module=s,s.steps!==i.steps.length&&console.warn(`[deck] scene "${i.id}" has ${s.steps} steps, content has ${i.steps.length}`),s)).catch(r=>(console.error(`[deck] scene "${i.id}" failed to mount`,r),this.layers[t].root.innerHTML=`<div class="placeholder">scene "${i.id}" failed to load</div>`,e.module={steps:i.steps.length,setStep(){},enter(){},leave(){}},e.module)),e.promise}go(t,e,{instant:i=!1,initial:s=!1}={}){t=Math.max(0,Math.min(ye.length-1,t)),e=Math.max(0,Math.min(ye[t].steps.length-1,e));let r=t!==this.si,o=this.si;if(!r&&e===this.ti)return;this.si=t,this.ti=e;let a=this._navToken=(this._navToken||0)+1;if(r){let l=this._module(o);if(l&&l.leave)try{l.leave()}catch(c){console.error(c)}this.layers.forEach((c,h)=>c.layer.classList.toggle("is-active",h===t))}this._renderText(t,e,r||i),this._renderHud(),this._renderNotes(),s||history.replaceState(null,"",`#/${t+1}.${e+1}`),this._publish(),this._ensureMounted(t).then(l=>{if(a!==this._navToken||!l)return;let c=Math.max(0,(l.steps||1)-1);r&&l.enter&&l.enter();try{l.setStep(Math.min(e,c),{instant:i||r})}catch(u){console.error(u)}(window.requestIdleCallback||(u=>setTimeout(u,400)))(()=>{this._ensureMounted(t+1)})}),!s&&!this.timer.running&&this.timer.acc===0&&(t>0||e>0)&&this.timerStart()}next(){let t=ye[this.si];this.ti<t.steps.length-1?this.go(this.si,this.ti+1):this.si<ye.length-1&&this.go(this.si+1,0)}prev(){this.ti>0?this.go(this.si,this.ti-1,{instant:!0}):this.si>0&&this.go(this.si-1,ye[this.si-1].steps.length-1,{instant:!0})}demo(){let t=this._module(this.si);t&&t.demo&&(t.demo(),this.demoEl.classList.add("is-on"),clearTimeout(this._demoT),this._demoT=setTimeout(()=>this.demoEl.classList.remove("is-on"),1400))}_renderText(t,e,i){let s=ye[t].steps[e],r=this.layers[t],o=(s.k?`<p class="kicker">${s.k}</p>`:"")+(s.h?`<h1 class="headline">${s.h}</h1>`:"")+(s.p?`<p class="body">${s.p}</p>`:"")+(s.big?`<p class="bignum">${s.big}</p>`:"")+(s.foot?`<p class="foot">${s.foot}</p>`:"");r.text.classList.toggle("is-title",s.variant==="title");let a=()=>{let h=fe("div","text-block",o);return s.variant&&(h.dataset.variant=s.variant),h};if(i||!r.block){r.text.innerHTML="",r.block=a(),r.text.appendChild(r.block);return}r.block.classList.add("is-out");let c=a();c.classList.add("is-out"),r.block=c,setTimeout(()=>{r.block===c&&(r.text.innerHTML="",r.text.appendChild(c),c.offsetWidth,c.classList.remove("is-out"))},240)}_renderHud(){this.progEls.forEach(({i:e,b:i},s)=>{e.classList.toggle("is-current",s===this.si);let r=ye[s].steps.length,o=s<this.si?1:s>this.si?0:(this.ti+1)/r;i.style.transform=`scaleX(${o})`}),this.whereEl.innerHTML=`<b>${String(this.si+1).padStart(2,"0")}</b> / ${ye.length} \xB7 ${ye[this.si].title}`,this.ovCards.forEach((e,i)=>e.classList.toggle("is-current",i===this.si));let t=this.si===0&&this.ti===0;this.hintEl.classList.toggle("is-on",t)}_renderNotes(){let t=ye[this.si].steps[this.ti];this.notesInner.innerHTML=sl(t.say||"")}elapsed(){return this.timer.acc+(this.timer.running?(performance.now()-this.timer.t0)/1e3:0)}timerStart(){this.timer.running||(this.timer.running=!0,this.timer.t0=performance.now(),this._publish())}timerPause(){this.timer.running&&(this.timer.acc=this.elapsed(),this.timer.running=!1,this._publish())}timerReset(){this.timer={running:!1,t0:0,acc:0},this._publish(),this._tick()}_tick(){this.timerEl.textContent=Pn(this.elapsed()),this.timer.running&&this._publish(!0)}_publish(t){this.sync.send({type:"state",si:this.si,ti:this.ti,elapsed:this.elapsed(),running:this.timer.running,light:!!t})}_onSync(t){t.type==="hello"?this._publish():t.type==="next"?this.next():t.type==="prev"?this.prev():t.type==="demo"?this.demo():t.type==="goto"?this.go(t.si,t.ti||0):t.type==="timer"&&(t.action==="toggle"&&(this.timer.running?this.timerPause():this.timerStart()),t.action==="reset"&&this.timerReset())}toggleOverview(t){let e=t??!this.ovEl.classList.contains("is-on");this.ovEl.classList.toggle("is-on",e),e&&this.helpEl.classList.remove("is-on")}toggleHelp(t){let e=t??!this.helpEl.classList.contains("is-on");this.helpEl.classList.toggle("is-on",e),e&&this.ovEl.classList.remove("is-on")}openPresenter(){let t=new URL(location.href);t.hash="",t.searchParams.set("presenter","1");let e=window.open(t.href,"fusion-talk-presenter","width=1100,height=760");this.sync.attachWindow(e),setTimeout(()=>this._publish(),600)}_bind(){window.addEventListener("keydown",o=>{if(o.metaKey||o.ctrlKey||o.altKey)return;let a=o.target&&o.target.tagName||"",l=o.key;if(a==="INPUT"&&o.shiftKey&&(l==="ArrowLeft"||l==="ArrowRight"))return;let c=!0;l==="ArrowRight"||l===" "||l==="PageDown"||l==="Enter"?this.next():l==="ArrowLeft"||l==="PageUp"||l==="Backspace"?this.prev():l==="ArrowDown"?this.go(this.si+1,0):l==="ArrowUp"?this.go(this.si-1,0,{instant:!0}):l==="Home"?this.go(0,0,{instant:!0}):l==="End"?this.go(ye.length-1,ye[ye.length-1].steps.length-1,{instant:!0}):l==="d"||l==="D"?this.demo():l==="n"||l==="N"?this.el.classList.toggle("show-notes"):l==="p"||l==="P"?this.openPresenter():l==="T"?this.timerReset():l==="t"?(this.el.classList.add("show-timer"),this.timer.running?this.timerPause():this.timerStart()):l==="o"||l==="O"?this.toggleOverview():l==="?"||l==="/"?this.toggleHelp():l==="f"||l==="F"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen():l==="Escape"?(this.toggleOverview(!1),this.toggleHelp(!1),this.el.classList.remove("show-notes")):/^[0-9]$/.test(l)?this.go(l==="0"?9:parseInt(l,10)-1,0,{instant:!0}):l==="-"?this.go(10,0,{instant:!0}):c=!1,c&&(o.preventDefault(),document.activeElement&&document.activeElement!==document.body&&a==="INPUT"&&document.activeElement.blur())}),window.addEventListener("hashchange",()=>{let o=this._parseHash();this.go(o.si,o.ti,{instant:!0})});let t,e=()=>{this.el.classList.remove("cursor-idle"),clearTimeout(t),t=setTimeout(()=>this.el.classList.add("cursor-idle"),3500)};window.addEventListener("pointermove",e,{passive:!0}),e();let i=0,s=0,r=0;this.el.addEventListener("touchstart",o=>{o.touches.length===1&&(i=o.touches[0].clientX,s=o.touches[0].clientY,r=Date.now())},{passive:!0}),this.el.addEventListener("touchend",o=>{let a=o.changedTouches[0],l=a.clientX-i,c=a.clientY-s;if(Date.now()-r>600||Math.abs(l)<70||Math.abs(c)>60)return;let h=o.target;h&&h.closest&&h.closest("canvas, input, .ui-chip, .ui-toggle")||(l<0?this.next():this.prev())},{passive:!0})}};function gu(n){let t=po(),e=t.total;n.innerHTML=`
  <div class="presenter">
    <div class="pr-top">
      <div><span class="pr-clock" id="pr-clock">00:00<small>/ ${Pn($n.budgetSeconds)}</small></span></div>
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
  </div>`;let i=h=>n.querySelector(`#${h}`),s={si:0,ti:0,elapsed:0,running:!1},r=performance.now(),o=new Es("presenter",h=>{if(h.type!=="state")return;let u=h.si!==s.si||h.ti!==s.ti;s=h,r=performance.now(),(u||!h.light)&&l(),c()});function a(){return s.elapsed+(s.running?(performance.now()-r)/1e3:0)}function l(){let h=ye[s.si],u=h.steps[s.ti];i("pr-note").innerHTML=sl(u.say||""),i("pr-zh").textContent=u.zh||"",i("pr-where").innerHTML=`<b>${h.title}</b>scene ${s.si+1}/${ye.length} \xB7 step ${s.ti+1}/${h.steps.length}`;let d=t.list.findIndex(x=>x.scene===s.si&&x.step===s.ti),f=t.list[d+1];if(f){let x=ye[f.scene].steps[f.step];i("pr-next").innerHTML=(x.h||"").replace(/<[^>]+>/g,""),i("pr-nexttext").textContent=(x.say||"").replace(/\[\[(.+?)\]\]/g,"[$1]").slice(0,150)+"\u2026"}else i("pr-next").textContent="End of talk",i("pr-nexttext").textContent="";let g=t.list[d];i("pr-plan").innerHTML=`planned <b>${g.t}s</b> \xB7 should start at <b>${Pn(g.t0)}</b><br>talk plan ${Pn(e)} of ${Pn($n.budgetSeconds)}`,i("pr-timer").textContent=s.running?"Pause clock":"Start clock"}function c(){let h=a();i("pr-clock").firstChild.textContent=Pn(h);let u=t.list.findIndex(g=>g.scene===s.si&&g.step===s.ti),d=t.list[u]||t.list[0],f=i("pr-pace");if(f.classList.remove("is-late","is-early","is-ok"),!s.running&&h===0)f.textContent="clock not started (it starts on the first \u2192)";else{let g=h-(d.t0+d.t),x=d.t0-h;g>12?(f.textContent=`behind by ${Pn(g)}`,f.classList.add("is-late")):x>15?(f.textContent=`ahead by ${Pn(x)}`,f.classList.add("is-early")):(f.textContent="on pace",f.classList.add("is-ok")),h>$n.budgetSeconds&&(f.textContent=`over time by ${Pn(h-$n.budgetSeconds)}`,f.classList.add("is-late"))}i("pr-fill").style.transform=`scaleX(${Math.min(1,h/$n.budgetSeconds)})`,i("pr-mark").style.left=`${Math.min(100,(d.t0+d.t)/$n.budgetSeconds*100)}%`,i("pr-timer").textContent=s.running?"Pause clock":"Start clock"}i("pr-prev").addEventListener("click",()=>o.send({type:"prev"})),i("pr-next-btn").addEventListener("click",()=>o.send({type:"next"})),i("pr-demo").addEventListener("click",()=>o.send({type:"demo"})),i("pr-timer").addEventListener("click",()=>o.send({type:"timer",action:"toggle"})),i("pr-reset").addEventListener("click",()=>o.send({type:"timer",action:"reset"})),window.addEventListener("keydown",h=>{let u=h.key;if(u==="ArrowRight"||u===" "||u==="PageDown"||u==="Enter")o.send({type:"next"});else if(u==="ArrowLeft"||u==="PageUp")o.send({type:"prev"});else if(u==="d"||u==="D")o.send({type:"demo"});else if(u==="t")o.send({type:"timer",action:"toggle"});else if(u==="T")o.send({type:"timer",action:"reset"});else return;h.preventDefault()}),l(),c(),setInterval(c,250),o.send({type:"hello"}),setTimeout(()=>o.send({type:"hello"}),500),document.title="Presenter \xB7 "+$n.title}var lh="170";var m0=0,xu=1,g0=2;var Ed=1,x0=2,gi=3,Hi=0,rn=1,sn=2,Jn=0,Vs=1,qe=2,vu=3,yu=4,v0=5,ss=100,y0=101,_0=102,b0=103,M0=104,w0=200,S0=201,T0=202,E0=203,Nl=204,Bl=205,A0=206,C0=207,R0=208,P0=209,I0=210,L0=211,U0=212,k0=213,D0=214,Ol=0,zl=1,Hl=2,Zs=3,Vl=4,Gl=5,Wl=6,Xl=7,Ad=0,F0=1,N0=2,zi=0,ch=1,hh=2,uh=3,dh=4,B0=5,fh=6,ph=7;var Cd=300,qs=301,$s=302,Zl=303,ql=304,Ta=306,$l=1e3,as=1001,Yl=1002,Fn=1003,O0=1004;var xo=1005;var Yn=1006,rl=1007;var ls=1008;var Mi=1009,Rd=1010,Pd=1011,Or=1012,mh=1013,cs=1014,vi=1015,mn=1016,gh=1017,xh=1018,Ys=1020,Id=35902,Ld=1021,Ud=1022,Dn=1023,kd=1024,Dd=1025,Gs=1026,Js=1027,Fd=1028,vh=1029,Nd=1030,yh=1031;var _h=1033,Xo=33776,Zo=33777,qo=33778,$o=33779,Jl=35840,Kl=35841,jl=35842,Ql=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,Yo=36492,xc=36494,vc=36495,Bd=36283,yc=36284,_c=36285,bc=36286;var Jo=2300,Mc=2301,ol=2302,_u=2400,bu=2401,Mu=2402;var z0=3200,H0=3201;var V0=0,G0=1,Oi="",nn="srgb",er="srgb-linear",Ea="linear",he="srgb";var As=7680;var wu=519,W0=512,X0=513,Z0=514,Od=515,q0=516,$0=517,Y0=518,J0=519,wc=35044,jn=35048;var Su="300 es",yi=2e3,Ko=2001,Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,kr=Math.PI/180,zr=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function bh(n,t){return(n%t+t)%t}function K0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function j0(n,t,e){return n!==t?(e-n)/(t-n):0}function Dr(n,t,e){return(1-e)*n+e*t}function Q0(n,t,e,i){return Dr(n,t,1-Math.exp(-e*i))}function tm(n,t=1){return t-Math.abs(bh(n,t*2)-t)}function em(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function nm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function im(n,t){return n+Math.floor(Math.random()*(t-n+1))}function sm(n,t){return n+Math.random()*(t-n)}function rm(n){return n*(.5-Math.random())}function om(n){n!==void 0&&(Tu=n);let t=Tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function am(n){return n*kr}function lm(n){return n*zr}function cm(n){return(n&n-1)===0&&n!==0}function hm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function um(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dm(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var zd={DEG2RAD:kr,RAD2DEG:zr,generateUUID:_i,clamp:Ne,euclideanModulo:bh,mapLinear:K0,inverseLerp:j0,lerp:Dr,damp:Q0,pingpong:tm,smoothstep:em,smootherstep:nm,randInt:im,randFloat:sm,randFloatSpread:rm,seededRandom:om,degToRad:am,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:de,denormalize:kn},Tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],T=s[2],S=s[5],w=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*m+a*y+l*S,r[6]=o*p+a*v+l*w,r[1]=c*x+h*_+u*T,r[4]=c*m+h*y+u*S,r[7]=c*p+h*v+u*w,r[2]=d*x+f*_+g*T,r[5]=d*m+f*y+g*S,r[8]=d*p+f*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new Zt;function Hd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){let n=jo("canvas");return n.style.display="block",n}var Eu={};function Lr(n){n in Eu||(Eu[n]=!0,console.warn(n))}function pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function mm(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gm(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:er,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?Ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Au=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Ru=[.3127,.329],Pu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[er]:{primaries:Au,whitePoint:Ru,transfer:Ea,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:Au,whitePoint:Ru,transfer:he,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});var Cs,Sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=jo("canvas")),Cs.width=t.width,Cs.height=t.height;let i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xm=0,Qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vm=0,wn=class n extends Vi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=as,s=as,r=Yn,o=ls,a=Dn,l=Mi,c=n.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=_i(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $l:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $l:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Cd;wn.DEFAULT_ANISOTROPY=1;var me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(f+1)/2,T=(p+1)/2,S=(h+d)/4,w=(u+x)/4,R=(g+m)/4;return y>v&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=w/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=R/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Vi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Tc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ta=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),S=Math.atan2(T,p*_);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}let v=a*_;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new F,Lu=new Gi,Sn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),yo.subVectors(this.max,Ar),Rs.subVectors(t.a,Ar),Ps.subVectors(t.b,Ar),Is.subVectors(t.c,Ar),Ui.subVectors(Ps,Rs),ki.subVectors(Is,Ps),Ki.subVectors(Rs,Is);let e=[0,-Ui.z,Ui.y,0,-ki.z,ki.y,0,-Ki.z,Ki.y,Ui.z,0,-Ui.x,ki.z,0,-ki.x,Ki.z,0,-Ki.x,-Ui.y,Ui.x,0,-ki.y,ki.x,0,-Ki.y,Ki.x,0];return!hl(e,Rs,Ps,Is,yo)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Rs,Ps,Is,yo))?!1:(_o.crossVectors(Ui,ki),e=[_o.x,_o.y,_o.z],hl(e,Rs,Ps,Is,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],In=new F,vo=new Sn,Rs=new F,Ps=new F,Is=new F,Ui=new F,ki=new F,Ki=new F,Ar=new F,yo=new F,_o=new F,ji=new F;function hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ym=new Sn,Cr=new F,ul=new F,Nn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ym.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(ul)),this.expandByPoint(Cr.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new F,dl=new F,bo=new F,Di=new F,fl=new F,Mo=new F,pl=new F,Hr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(dl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Di.dot(this.direction),l=-Di.dot(bo),c=Di.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dl).addScaledVector(bo,d),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),Mo.subVectors(i,t),pl.crossVectors(fl,Mo);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);let l=a*this.direction.dot(Mo.crossVectors(Di,Mo));if(l<0)return null;let c=a*this.direction.dot(fl.cross(Di));if(c<0||l+c>o)return null;let h=-a*Di.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_m,t,bm)}lookAt(t,e,i){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Fi.crossVectors(i,un),Fi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Fi.crossVectors(i,un)),Fi.normalize(),wo.crossVectors(un,Fi),s[0]=Fi.x,s[4]=wo.x,s[8]=un.x,s[1]=Fi.y,s[5]=wo.y,s[9]=un.y,s[2]=Fi.z,s[6]=wo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],y=i[7],v=i[11],T=i[15],S=s[0],w=s[4],R=s[8],b=s[12],M=s[1],E=s[5],D=s[9],k=s[13],B=s[2],L=s[6],P=s[10],z=s[14],W=s[3],it=s[7],J=s[11],ht=s[15];return r[0]=o*S+a*M+l*B+c*W,r[4]=o*w+a*E+l*L+c*it,r[8]=o*R+a*D+l*P+c*J,r[12]=o*b+a*k+l*z+c*ht,r[1]=h*S+u*M+d*B+f*W,r[5]=h*w+u*E+d*L+f*it,r[9]=h*R+u*D+d*P+f*J,r[13]=h*b+u*k+d*z+f*ht,r[2]=g*S+x*M+m*B+p*W,r[6]=g*w+x*E+m*L+p*it,r[10]=g*R+x*D+m*P+p*J,r[14]=g*b+x*k+m*z+p*ht,r[3]=_*S+y*M+v*B+T*W,r[7]=_*w+y*E+v*L+T*it,r[11]=_*R+y*D+v*P+T*J,r[15]=_*b+y*k+v*z+T*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,T=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,S=e*_+i*y+s*v+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=_*w,t[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*w,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*w,t[4]=y*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*w,t[8]=v*w,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*w,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*w,t[12]=T*w,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=l*c,y=l*h,v=l*u,T=i.x,S=i.y,w=i.z;return s[0]=(1-(x+p))*T,s[1]=(f+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+y)*w,s[9]=(m-_)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);let c=1/r,h=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=yi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===yi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,x;if(a===yi)g=(o+r)*u,x=-2*u;else if(a===Ko)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ls=new F,Ln=new Ee,_m=new F(0,0,0),bm=new F(1,1,1),Fi=new F,wo=new F,un=new F,Uu=new Ee,ku=new Gi,wi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mm=0,Du=new F,Us=new Gi,fi=new Ee,So=new F,Rr=new F,wm=new F,Sm=new Gi,Fu=new F(1,0,0),Nu=new F(0,1,0),Bu=new F(0,0,1),Ou={type:"added"},Tm={type:"removed"},ks={type:"childadded",child:null},ml={type:"childremoved",child:null},pn=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new wi,i=new Gi,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Zt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Du.copy(t).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Rr,So,this.up):fi.lookAt(So,Rr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(fi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tm),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new F,pi=new F,gl=new F,mi=new F,Ds=new F,Fs=new F,zu=new F,xl=new F,vl=new F,yl=new F,_l=new me,bl=new me,Ml=new me,rs=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),pi.subVectors(i,e),gl.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(pi),l=Un.dot(gl),c=pi.dot(pi),h=pi.dot(gl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),bl.setScalar(0),Ml.setScalar(0),_l.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(bl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),pi.subVectors(t,e),Un.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Un.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,i),Fs.subVectors(r,i),xl.subVectors(t,i);let l=Ds.dot(xl),c=Fs.dot(xl);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let h=Ds.dot(vl),u=Fs.dot(vl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ds,o);yl.subVectors(t,r);let f=Ds.dot(yl),g=Fs.dot(yl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Fs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return zu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(zu,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(Ds,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},To={h:0,s:0,l:0};function wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=bh(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=wl(o,r,t+1/3),this.g=wl(o,r,t),this.b=wl(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let i=Vd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return te.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ne(Ze.r*255,0,255))*65536+Math.round(Ne(Ze.g*255,0,255))*256+Math.round(Ne(Ze.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=nn){te.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(To);let i=Dr(Ni.h,To.h,e),s=Dr(Ni.s,To.s,e),r=Dr(Ni.l,To.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Ot;Ot.NAMES=Vd;var Em=0,Wi=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=_i(),this.name="",this.blending=Vs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Bl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ks=class extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new F,Eo=new Tt,ee=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}};var na=class extends ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ia=class extends ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends ee{constructor(t,e,i){super(new Float32Array(t),e,i)}},Am=0,Mn=new Ee,Sl=new pn,Ns=new F,dn=new Sn,Pr=new Sn,Fe=new F,pe=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?ia:na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,i){return Mn.makeTranslation(t,e,i),this.applyMatrix4(Mn),this}scale(t,e,i){return Mn.makeScale(t,e,i),this.applyMatrix4(Mn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(dn.min,Pr.min),dn.expandByPoint(Fe),Fe.addVectors(dn.max,Pr.max),dn.expandByPoint(Fe)):(dn.expandByPoint(Pr.min),dn.expandByPoint(Pr.max))}dn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Fe.add(Ns)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new F,l[R]=new F;let c=new F,h=new F,u=new F,d=new Tt,f=new Tt,g=new Tt,x=new F,m=new F;function p(R,b,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[R].add(x),a[b].add(x),a[M].add(x),l[R].add(m),l[b].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,b=_.length;R<b;++R){let M=_[R],E=M.start,D=M.count;for(let k=E,B=E+D;k<B;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new F,v=new F,T=new F,S=new F;function w(R){T.fromBufferAttribute(s,R),S.copy(T);let b=a[R];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(S,b);let E=v.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,E)}for(let R=0,b=_.length;R<b;++R){let M=_[R],E=M.start,D=M.count;for(let k=E,B=E+D;k<B;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hu=new Ee,Qi=new Hr,Ao=new Nn,Vu=new F,Co=new F,Ro=new F,Po=new F,Tl=new F,Io=new F,Gu=new F,Lo=new F,we=class extends pn{constructor(t=new pe,e=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Tl.fromBufferAttribute(u,t),o?Io.addScaledVector(Tl,h):Io.addScaledVector(Tl.sub(e),h))}e.add(Io)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Ao.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ao,Vu)===null||Qi.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let S=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);s=Uo(this,p,t,i,c,h,u,S,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Uo(this,o,t,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=y;v<T;v+=3){let S=v,w=v+1,R=v+2;s=Uo(this,p,t,i,c,h,u,S,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;s=Uo(this,o,t,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cm(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:n}}function Uo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Po);let h=Cm(n,t,e,i,Co,Ro,Po,Gu);if(h){let u=new F;rs.getBarycoord(Gu,Co,Ro,Po,u),s&&(h.uv=rs.getInterpolatedAttribute(s,a,l,c,u,new Tt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};rs.getNormal(Co,Ro,Po,d.normal),h.face=d,h.barycoord=u}return h}var Vr=class n extends pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,m,p,_,y,v,T,S,w,R,b){let M=v/w,E=T/R,D=v/2,k=T/2,B=S/2,L=w+1,P=R+1,z=0,W=0,it=new F;for(let J=0;J<P;J++){let ht=J*E-k;for(let q=0;q<L;q++){let rt=q*M-D;it[x]=rt*_,it[m]=ht*y,it[p]=B,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=S>0?1:-1,h.push(it.x,it.y,it.z),u.push(q/w),u.push(1-J/R),z+=1}}for(let J=0;J<R;J++)for(let ht=0;ht<w;ht++){let q=d+ht+L*J,rt=d+ht+L*(J+1),U=d+(ht+1)+L*(J+1),G=d+(ht+1)+L*J;l.push(q,rt,G),l.push(rt,U,G),W+=6}a.addGroup(f,W,b),f+=W,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function Rm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var gn={clone:js,merge:Je},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},sa=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new F,Wu=new Tt,Xu=new Tt,Ke=class extends sa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bs=-90,Os=1,Ac=class extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Bs,Os,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Bs,Os,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Bs,Os,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Bs,Os,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Bs,Os,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Bs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ra=class extends wn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vr(5,5,5),r=new ne({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Jn});r.uniforms.tEquirect.value=e;let o=new we(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Yn),new Ac(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},El=new F,Lm=new F,Um=new Zt,xi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=El.subVectors(i,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(El),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Um.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Nn,ko=new F,oa=class{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-f,v-p).normalize(),i[1].setComponents(l+r,d+c,m+f,v+p).normalize(),i[2].setComponents(l+o,d+h,m+g,v+_).normalize(),i[3].setComponents(l-o,d-h,m-g,v-_).normalize(),i[4].setComponents(l-a,d-u,m-x,v-y).normalize(),e===yi)i[5].setComponents(l+a,d+u,m+x,v+y).normalize();else if(e===Ko)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function km(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var aa=class n extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let y=0;y<c;y++){let v=y*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),T=_+1+c*(p+1),S=_+1+c*p;f.push(y,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s1=`#define PI 3.141592653589793
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
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
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
#endif`,U1=`struct PhysicalMaterial {
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
}`,k1=`
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define NORMAL
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
}`,ex=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,ax=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Dm,alphahash_pars_fragment:Fm,alphamap_fragment:Nm,alphamap_pars_fragment:Bm,alphatest_fragment:Om,alphatest_pars_fragment:zm,aomap_fragment:Hm,aomap_pars_fragment:Vm,batching_pars_vertex:Gm,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:Zm,bsdfs:qm,iridescence_fragment:$m,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:t1,color_pars_fragment:e1,color_pars_vertex:n1,color_vertex:i1,common:s1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:o1,displacementmap_pars_vertex:a1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:h1,colorspace_fragment:u1,colorspace_pars_fragment:d1,envmap_fragment:f1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:A1,envmap_vertex:x1,fog_vertex:v1,fog_pars_vertex:y1,fog_fragment:_1,fog_pars_fragment:b1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:w1,lights_lambert_fragment:S1,lights_lambert_pars_fragment:T1,lights_pars_begin:E1,lights_toon_fragment:C1,lights_toon_pars_fragment:R1,lights_phong_fragment:P1,lights_phong_pars_fragment:I1,lights_physical_fragment:L1,lights_physical_pars_fragment:U1,lights_fragment_begin:k1,lights_fragment_maps:D1,lights_fragment_end:F1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:z1,map_fragment:H1,map_pars_fragment:V1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:q1,morphcolor_vertex:$1,morphnormal_vertex:Y1,morphtarget_pars_vertex:J1,morphtarget_vertex:K1,normal_fragment_begin:j1,normal_fragment_maps:Q1,normal_pars_fragment:tg,normal_pars_vertex:eg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:dg,dithering_pars_fragment:fg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:vg,shadowmask_pars_fragment:yg,skinbase_vertex:_g,skinning_pars_vertex:bg,skinning_vertex:Mg,skinnormal_vertex:wg,specularmap_fragment:Sg,specularmap_pars_fragment:Tg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Ag,transmission_fragment:Cg,transmission_pars_fragment:Rg,uv_pars_fragment:Pg,uv_pars_vertex:Ig,uv_vertex:Lg,worldpos_vertex:Ug,background_vert:kg,background_frag:Dg,backgroundCube_vert:Fg,backgroundCube_frag:Ng,cube_vert:Bg,cube_frag:Og,depth_vert:zg,depth_frag:Hg,distanceRGBA_vert:Vg,distanceRGBA_frag:Gg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:Zg,linedashed_frag:qg,meshbasic_vert:$g,meshbasic_frag:Yg,meshlambert_vert:Jg,meshlambert_frag:Kg,meshmatcap_vert:jg,meshmatcap_frag:Qg,meshnormal_vert:tx,meshnormal_frag:ex,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:hx,shadow_frag:ux,sprite_vert:dx,sprite_frag:fx},mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},je={basic:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Je([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Je([mt.lights,mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};je.physical={uniforms:Je([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Do={r:0,b:0,g:0},es=new wi,px=new Ee;function mx(n,t,e,i,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,v=g(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Ta)?(h===void 0&&(h=new we(new Vr(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:js(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(es)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new we(new aa(2,2),new ne({name:"BackgroundMaterial",uniforms:js(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Do,Gd(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function gx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,E,D,k,B){let L=!1,P=u(k,D,E);r!==P&&(r=P,c(r.object)),L=f(M,k,D,B),L&&g(M,k,D,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(M,E,D,k),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,E,D){let k=D.wireframe===!0,B=i[M.id];B===void 0&&(B={},i[M.id]=B);let L=B[E.id];L===void 0&&(L={},B[E.id]=L);let P=L[k];return P===void 0&&(P=d(l()),L[k]=P),P}function d(M){let E=[],D=[],k=[];for(let B=0;B<e;B++)E[B]=0,D[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,E,D,k){let B=r.attributes,L=E.attributes,P=0,z=D.getAttributes();for(let W in z)if(z[W].location>=0){let J=B[W],ht=L[W];if(ht===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),J===void 0||J.attribute!==ht||ht&&J.data!==ht.data)return!0;P++}return r.attributesNum!==P||r.index!==k}function g(M,E,D,k){let B={},L=E.attributes,P=0,z=D.getAttributes();for(let W in z)if(z[W].location>=0){let J=L[W];J===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));let ht={};ht.attribute=J,J&&J.data&&(ht.data=J.data),B[W]=ht,P++}r.attributes=B,r.attributesNum=P,r.index=k}function x(){let M=r.newAttributes;for(let E=0,D=M.length;E<D;E++)M[E]=0}function m(M){p(M,0)}function p(M,E){let D=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),B[M]!==E&&(n.vertexAttribDivisor(M,E),B[M]=E)}function _(){let M=r.newAttributes,E=r.enabledAttributes;for(let D=0,k=E.length;D<k;D++)E[D]!==M[D]&&(n.disableVertexAttribArray(D),E[D]=0)}function y(M,E,D,k,B,L,P){P===!0?n.vertexAttribIPointer(M,E,D,B,L):n.vertexAttribPointer(M,E,D,k,B,L)}function v(M,E,D,k){x();let B=k.attributes,L=D.getAttributes(),P=E.defaultAttributeValues;for(let z in L){let W=L[z];if(W.location>=0){let it=B[z];if(it===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let J=it.normalized,ht=it.itemSize,q=t.get(it);if(q===void 0)continue;let rt=q.buffer,U=q.type,G=q.bytesPerElement,Q=U===n.INT||U===n.UNSIGNED_INT||it.gpuType===mh;if(it.isInterleavedBufferAttribute){let O=it.data,Y=O.stride,K=it.offset;if(O.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt,O.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let dt=0;dt<W.locationSize;dt++)y(W.location+dt,ht/W.locationSize,U,J,Y*G,(K+ht/W.locationSize*dt)*G,Q)}else{if(it.isInstancedBufferAttribute){for(let O=0;O<W.locationSize;O++)p(W.location+O,it.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let O=0;O<W.locationSize;O++)m(W.location+O);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let O=0;O<W.locationSize;O++)y(W.location+O,ht/W.locationSize,U,J,ht*G,ht/W.locationSize*O*G,Q)}}else if(P!==void 0){let J=P[z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(W.location,J);break;case 3:n.vertexAttrib3fv(W.location,J);break;case 4:n.vertexAttrib4fv(W.location,J);break;default:n.vertexAttrib1fv(W.location,J)}}}}_()}function T(){R();for(let M in i){let E=i[M];for(let D in E){let k=E[D];for(let B in k)h(k[B].object),delete k[B];delete E[D]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let E=i[M.id];for(let D in E){let k=E[D];for(let B in k)h(k[B].object),delete k[B];delete E[D]}delete i[M.id]}function w(M){for(let E in i){let D=i[E];if(D[M.id]===void 0)continue;let k=D[M.id];for(let B in k)h(k[B].object),delete k[B];delete D[M.id]}}function R(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function xx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vi&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:S}}function yx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new xi,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,y=_*4,v=p.clippingState||null;l.value=v,v=h(g,d,y,f);for(let T=0;T!==y;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function _x(n){let t=new WeakMap;function e(o,a){return a===Zl?o.mapping=qs:a===ql&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zl||a===ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Gr=class extends sa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hs=4,Zu=[.125,.215,.35,.446,.526,.582],os=20,Al=new Gr,qu=new Ot,Cl=null,Rl=0,Pl=0,Il=!1,is=(1+Math.sqrt(5))/2,zs=1/is,$u=[new F(-is,zs,0),new F(is,zs,0),new F(-zs,0,is),new F(zs,0,is),new F(0,is,-zs),new F(0,is,zs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],la=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Cl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Rl,Pl),this._renderer.xr.enabled=Il,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:mn,format:Dn,colorSpace:er,depthBuffer:!1},s=Yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Mx(r,t,e)}return s}_compileMaterial(t){let e=new we(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,i,s){let a=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(qu),h.toneMapping=zi,h.autoClear=!1;let f=new Ks({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new we(new Vr,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(qu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Fo(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===qs||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Al)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$u[(s-r-1)%$u.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],_=0;for(let w=0;w<os;++w){let R=w/x,b=Math.exp(-R*R/2);p.push(b),w===0?_+=b:w<m&&(_+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[s],T=3*v*(s>y-Hs?s-y+Hs:0),S=4*(this._cubeSize-v);Fo(e,T,S,3*v,2*v),l.setRenderTarget(e),l.render(u,Al)}};function bx(n){let t=[],e=[],i=[],s=n,r=n-Hs+1+Zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=Zu[o-n+Hs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,R=S>2?0:-1,b=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(b,x*g*S),y.set(d,m*g*S);let M=[S,S,S,S,S,S];v.set(M,p*g*S)}let T=new pe;T.setAttribute("position",new ee(_,x)),T.setAttribute("uv",new ee(y,m)),T.setAttribute("faceIndex",new ee(v,p)),t.push(T),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yu(n,t,e){let i=new Oe(n,t,e);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mx(n,t,e){let i=new Float32Array(os),s=new F(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ju(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ku(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function wx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Zl||l===ql,h=l===qs||l===$s;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new la(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new la(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Sx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tx(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let T=_[y+0],S=_[y+1],w=_[y+2];d.push(T,S,S,w,w,T)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let T=y+0,S=y+1,w=y+2;d.push(T,S,S,w,w,T)}}else return;let m=new(Hd(d)?ia:na)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ex(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ax(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cx(n,t,e){let i=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*T*4*u),w=new ta(S,v,T,u);w.type=vi,w.needsUpdate=!0;let R=y*4;for(let M=0;M<u;M++){let E=m[M],D=p[M],k=_[M],B=v*T*4*M;for(let L=0;L<E.count;L++){let P=L*R;f===!0&&(s.fromBufferAttribute(E,L),S[B+P+0]=s.x,S[B+P+1]=s.y,S[B+P+2]=s.z,S[B+P+3]=0),g===!0&&(s.fromBufferAttribute(D,L),S[B+P+4]=s.x,S[B+P+5]=s.y,S[B+P+6]=s.z,S[B+P+7]=0),x===!0&&(s.fromBufferAttribute(k,L),S[B+P+8]=s.x,S[B+P+9]=s.y,S[B+P+10]=s.z,S[B+P+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Tt(v,T)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Rx(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ca=class extends wn{constructor(t,e,i,s,r,o,a,l,c,h=Gs){if(h!==Gs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gs&&(i=cs),i===void 0&&h===Js&&(i=Ys),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xd=new wn,ju=new ca(1,1),Zd=new ta,qd=new Ec,$d=new ra,Qu=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function nr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Aa(n,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Px(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function kx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;id.set(i),n.uniformMatrix2fv(this.addr,!1,id),De(e,i)}}function Dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;nd.set(i),n.uniformMatrix3fv(this.addr,!1,nd),De(e,i)}}function Fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),De(e,i)}}function Nx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Hx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Xx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ju.compareFunction=Od,r=ju):r=Xd,e.setTexture2D(t||r,s)}function Zx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function qx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$d,s)}function $x(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zd,s)}function Yx(n){switch(n){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Ux;case 35674:return kx;case 35675:return Dx;case 35676:return Fx;case 5124:case 35670:return Nx;case 35667:case 35671:return Bx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return $x}}function Jx(n,t){n.uniform1fv(this.addr,t)}function Kx(n,t){let e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function jx(n,t){let e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function Qx(n,t){let e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function tv(n,t){let e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ev(n,t){let e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nv(n,t){let e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iv(n,t){n.uniform1iv(this.addr,t)}function sv(n,t){n.uniform2iv(this.addr,t)}function rv(n,t){n.uniform3iv(this.addr,t)}function ov(n,t){n.uniform4iv(this.addr,t)}function av(n,t){n.uniform1uiv(this.addr,t)}function lv(n,t){n.uniform2uiv(this.addr,t)}function cv(n,t){n.uniform3uiv(this.addr,t)}function hv(n,t){n.uniform4uiv(this.addr,t)}function uv(n,t,e){let i=this.cache,s=t.length,r=Aa(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xd,r[o])}function dv(n,t,e){let i=this.cache,s=t.length,r=Aa(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function fv(n,t,e){let i=this.cache,s=t.length,r=Aa(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$d,r[o])}function pv(n,t,e){let i=this.cache,s=t.length,r=Aa(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zd,r[o])}function mv(n){switch(n){case 5126:return Jx;case 35664:return Kx;case 35665:return jx;case 35666:return Qx;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}var Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yx(e.type)}},Pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mv(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function sd(n,t){n.seq.push(t),n.map[t.id]=t}function gv(n,t,e){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sd(e,c===void 0?new Rc(a,n,t):new Pc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ic(a),sd(e,u)),e=u}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);gv(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function rd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xv=37297,vv=0;function yv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var od=new Zt;function _v(n){te._getMatrix(od,te.workingColorSpace,n);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Ea:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ad(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yv(n.getShaderSource(t),o)}else return s}function bv(n,t){let e=_v(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mv(n,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case dh:e="ACESFilmic";break;case fh:e="AgX";break;case ph:e="Neutral";break;case B0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var No=new F;function wv(){te.getLuminanceCoefficients(No);let n=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Tv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ev(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ur(n){return n!==""}function ld(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(Av,Rv)}var Cv=new Map;function Rv(n,t){let e=$t[t];if(e===void 0){let i=Cv.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(Pv,Iv)}function Iv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Lv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ed?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===x0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case $s:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function Dv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case F0:t="ENVMAP_BLENDING_MIX";break;case N0:t="ENVMAP_BLENDING_ADD";break}return t}function Fv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Nv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Lv(e),c=Uv(e),h=kv(e),u=Dv(e),d=Fv(e),f=Sv(e),g=Tv(r),x=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?$t.tonemapping_pars_fragment:"",e.toneMapping!==zi?Mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Lc(o),o=ld(o,e),o=cd(o,e),a=Lc(a),a=ld(a,e),a=cd(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,v=_+p+a,T=rd(s,s.VERTEX_SHADER,y),S=rd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(E){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(S).trim(),L=!0,P=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,S);else{let z=ad(s,T,"vertex"),W=ad(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+z+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||B==="")&&(P=!1);P&&(E.diagnostics={runnable:L,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(S),R=new Xs(s,x),b=Ev(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,xv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}var Bv=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=Bv++,this.code=t,this.usedTimes=0}};function Ov(n,t,e,i,s,r,o){let a=new ea,l=new Uc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,E,D,k){let B=D.fog,L=k.geometry,P=b.isMeshStandardMaterial?D.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||P),W=z&&z.mapping===Ta?z.image.height:null,it=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ht=J!==void 0?J.length:0,q=0;L.morphAttributes.position!==void 0&&(q=1),L.morphAttributes.normal!==void 0&&(q=2),L.morphAttributes.color!==void 0&&(q=3);let rt,U,G,Q;if(it){let Jt=je[it];rt=Jt.vertexShader,U=Jt.fragmentShader}else rt=b.vertexShader,U=b.fragmentShader,l.update(b),G=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);let O=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),K=k.isInstancedMesh===!0,dt=k.isBatchedMesh===!0,At=!!b.map,yt=!!b.matcap,Lt=!!z,H=!!b.aoMap,Wt=!!b.lightMap,Ft=!!b.bumpMap,Ht=!!b.normalMap,kt=!!b.displacementMap,ae=!!b.emissiveMap,Dt=!!b.metalnessMap,I=!!b.roughnessMap,A=b.anisotropy>0,$=b.clearcoat>0,ct=b.dispersion>0,st=b.iridescence>0,ot=b.sheen>0,Ct=b.transmission>0,vt=A&&!!b.anisotropyMap,Mt=$&&!!b.clearcoatMap,Kt=$&&!!b.clearcoatNormalMap,ft=$&&!!b.clearcoatRoughnessMap,wt=st&&!!b.iridescenceMap,Nt=st&&!!b.iridescenceThicknessMap,zt=ot&&!!b.sheenColorMap,St=ot&&!!b.sheenRoughnessMap,Qt=!!b.specularMap,gt=!!b.specularColorMap,Vt=!!b.specularIntensityMap,N=Ct&&!!b.transmissionMap,ut=Ct&&!!b.thicknessMap,tt=!!b.gradientMap,at=!!b.alphaMap,xt=b.alphaTest>0,lt=!!b.alphaHash,Et=!!b.extensions,qt=zi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(qt=n.toneMapping);let ue={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:U,defines:b.defines,customVertexShaderID:G,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:dt,batchingColor:dt&&k._colorsTexture!==null,instancing:K,instancingColor:K&&k.instanceColor!==null,instancingMorph:K&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:er,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:yt,envMap:Lt,envMapMode:Lt&&z.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Wt,bumpMap:Ft,normalMap:Ht,displacementMap:d&&kt,emissiveMap:ae,normalMapObjectSpace:Ht&&b.normalMapType===G0,normalMapTangentSpace:Ht&&b.normalMapType===V0,metalnessMap:Dt,roughnessMap:I,anisotropy:A,anisotropyMap:vt,clearcoat:$,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ft,dispersion:ct,iridescence:st,iridescenceMap:wt,iridescenceThicknessMap:Nt,sheen:ot,sheenColorMap:zt,sheenRoughnessMap:St,specularMap:Qt,specularColorMap:gt,specularIntensityMap:Vt,transmission:Ct,transmissionMap:N,thicknessMap:ut,gradientMap:tt,opaque:b.transparent===!1&&b.blending===Vs&&b.alphaToCoverage===!1,alphaMap:at,alphaTest:xt,alphaHash:lt,combine:b.combine,mapUv:At&&x(b.map.channel),aoMapUv:H&&x(b.aoMap.channel),lightMapUv:Wt&&x(b.lightMap.channel),bumpMapUv:Ft&&x(b.bumpMap.channel),normalMapUv:Ht&&x(b.normalMap.channel),displacementMapUv:kt&&x(b.displacementMap.channel),emissiveMapUv:ae&&x(b.emissiveMap.channel),metalnessMapUv:Dt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:vt&&x(b.anisotropyMap.channel),clearcoatMapUv:Mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(b.sheenRoughnessMap.channel),specularMapUv:Qt&&x(b.specularMap.channel),specularColorMapUv:gt&&x(b.specularColorMap.channel),specularIntensityMapUv:Vt&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:ut&&x(b.thicknessMap.channel),alphaMapUv:at&&x(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ht||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(At||at),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Y,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Et&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&b.extensions.multiDraw===!0||dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)M.push(E),M.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],E;if(M){let D=je[M];E=gn.clone(D.uniforms)}else E=b.uniforms;return E}function T(b,M){let E;for(let D=0,k=h.length;D<k;D++){let B=h[D];if(B.cacheKey===M){E=B,++E.usedTimes;break}}return E===void 0&&(E=new Nv(n,M,b,r),h.push(E)),E}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:R}}function zv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Hv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function dd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Hv),i.length>1&&i.sort(d||dd),s.length>1&&s.sort(d||dd)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Vv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new fd,n.set(i,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ot};break;case"SpotLight":e={position:new F,direction:new F,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Wv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Xv=0;function Zv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qv(n){let t=new Gv,e=Wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Ee,o=new Ee;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,T=0,S=0,w=0;c.sort(Zv);for(let b=0,M=c.length;b<M;b++){let E=c[b],D=E.color,k=E.intensity,B=E.distance,L=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=D.r*k,u+=D.g*k,d+=D.b*k;else if(E.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(E.sh.coefficients[P],k);w++}else if(E.isDirectionalLight){let P=t.get(E);if(P.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let z=E.shadow,W=e.get(E);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=E.shadow.matrix,_++}i.directional[f]=P,f++}else if(E.isSpotLight){let P=t.get(E);P.position.setFromMatrixPosition(E.matrixWorld),P.color.copy(D).multiplyScalar(k),P.distance=B,P.coneCos=Math.cos(E.angle),P.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),P.decay=E.decay,i.spot[x]=P;let z=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,z.updateMatrices(E),E.castShadow&&S++),i.spotLightMatrix[x]=z.matrix,E.castShadow){let W=e.get(E);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=L,v++}x++}else if(E.isRectAreaLight){let P=t.get(E);P.color.copy(D).multiplyScalar(k),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=P,m++}else if(E.isPointLight){let P=t.get(E);if(P.color.copy(E.color).multiplyScalar(E.intensity),P.distance=E.distance,P.decay=E.decay,E.castShadow){let z=E.shadow,W=e.get(E);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=E.shadow.matrix,y++}i.point[g]=P,g++}else if(E.isHemisphereLight){let P=t.get(E);P.skyColor.copy(E.color).multiplyScalar(k),P.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[p]=P,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=w,i.version=Xv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function pd(n){let t=new qv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $v(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pd(n),t.set(s,[a])):r>=o.length?(a=new pd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dc=class extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fc=class extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`;function Kv(n,t,e){let i=new oa,s=new Tt,r=new Tt,o=new me,a=new Dc({depthPacking:H0}),l=new Fc,c={},h=e.maxTextureSize,u={[Hi]:rn,[rn]:Hi,[sn]:sn},d=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Yv,fragmentShader:Jv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let p=this.type;this.render=function(S,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==gi&&this.type===gi,B=p===gi&&this.type!==gi;for(let L=0,P=S.length;L<P;L++){let z=S[L],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||k===!0||B===!0){let ht=this.type!==gi?{minFilter:Fn,magFilter:Fn}:{};W.map!==null&&W.map.dispose(),W.map=new Oe(s.x,s.y,ht),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let J=W.getViewportCount();for(let ht=0;ht<J;ht++){let q=W.getViewport(ht);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o),W.updateMatrices(z,ht),i=W.getFrustum(),v(w,R,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&_(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,E)};function _(S,w){let R=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Oe(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,R,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,R,f,x,null)}function y(S,w,R,b){let M=null,E=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=M.uuid,k=w.uuid,B=c[D];B===void 0&&(B={},c[D]=B);let L=B[k];L===void 0&&(L=M.clone(),B[k]=L,w.addEventListener("dispose",T)),M=L}if(M.visible=w.visible,M.wireframe=w.wireframe,b===gi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=R}return M}function v(S,w,R,b,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===gi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let k=t.update(S),B=S.material;if(Array.isArray(B)){let L=k.groups;for(let P=0,z=L.length;P<z;P++){let W=L[P],it=B[W.materialIndex];if(it&&it.visible){let J=y(S,it,b,M);S.onBeforeShadow(n,S,w,R,k,J,W),n.renderBufferDirect(R,null,k,J,S,W),S.onAfterShadow(n,S,w,R,k,J,W)}}}else if(B.visible){let L=y(S,B,b,M);S.onBeforeShadow(n,S,w,R,k,L,null),n.renderBufferDirect(R,null,k,L,S,null),S.onAfterShadow(n,S,w,R,k,L,null)}}let D=S.children;for(let k=0,B=D.length;k<B;k++)v(D[k],w,R,b,M)}function T(S){S.target.removeEventListener("dispose",T);for(let R in c){let b=c[R],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var jv={[Ol]:zl,[Hl]:Wl,[Vl]:Xl,[Zs]:Gl,[zl]:Ol,[Wl]:Hl,[Xl]:Vl,[Gl]:Zs};function Qv(n,t){function e(){let N=!1,ut=new me,tt=null,at=new me(0,0,0,0);return{setMask:function(xt){tt!==xt&&!N&&(n.colorMask(xt,xt,xt,xt),tt=xt)},setLocked:function(xt){N=xt},setClear:function(xt,lt,Et,qt,ue){ue===!0&&(xt*=qt,lt*=qt,Et*=qt),ut.set(xt,lt,Et,qt),at.equals(ut)===!1&&(n.clearColor(xt,lt,Et,qt),at.copy(ut))},reset:function(){N=!1,tt=null,at.set(-1,0,0,0)}}}function i(){let N=!1,ut=!1,tt=null,at=null,xt=null;return{setReversed:function(lt){if(ut!==lt){let Et=t.get("EXT_clip_control");ut?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);let qt=xt;xt=null,this.setClear(qt)}ut=lt},getReversed:function(){return ut},setTest:function(lt){lt?O(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(lt){tt!==lt&&!N&&(n.depthMask(lt),tt=lt)},setFunc:function(lt){if(ut&&(lt=jv[lt]),at!==lt){switch(lt){case Ol:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=lt}},setLocked:function(lt){N=lt},setClear:function(lt){xt!==lt&&(ut&&(lt=1-lt),n.clearDepth(lt),xt=lt)},reset:function(){N=!1,tt=null,at=null,xt=null,ut=!1}}}function s(){let N=!1,ut=null,tt=null,at=null,xt=null,lt=null,Et=null,qt=null,ue=null;return{setTest:function(Jt){N||(Jt?O(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!N&&(n.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,re,Ce){(tt!==Jt||at!==re||xt!==Ce)&&(n.stencilFunc(Jt,re,Ce),tt=Jt,at=re,xt=Ce)},setOp:function(Jt,re,Ce){(lt!==Jt||Et!==re||qt!==Ce)&&(n.stencilOp(Jt,re,Ce),lt=Jt,Et=re,qt=Ce)},setLocked:function(Jt){N=Jt},setClear:function(Jt){ue!==Jt&&(n.clearStencil(Jt),ue=Jt)},reset:function(){N=!1,ut=null,tt=null,at=null,xt=null,lt=null,Et=null,qt=null,ue=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,T=null,S=null,w=new Ot(0,0,0),R=0,b=!1,M=null,E=null,D=null,k=null,B=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,z=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=z>=2);let it=null,J={},ht=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),rt=new me().fromArray(ht),U=new me().fromArray(q);function G(N,ut,tt,at){let xt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<tt;Et++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(ut+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return lt}let Q={};Q[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(n.DEPTH_TEST),o.setFunc(Zs),Ft(!1),Ht(xu),O(n.CULL_FACE),H(Jn);function O(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Y(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function K(N,ut){return u[N]!==ut?(n.bindFramebuffer(N,ut),u[N]=ut,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function dt(N,ut){let tt=f,at=!1;if(N){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let xt=N.textures;if(tt.length!==xt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Et=xt.length;lt<Et;lt++)tt[lt]=n.COLOR_ATTACHMENT0+lt;tt.length=xt.length,at=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,at=!0);at&&n.drawBuffers(tt)}function At(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let yt={[ss]:n.FUNC_ADD,[y0]:n.FUNC_SUBTRACT,[_0]:n.FUNC_REVERSE_SUBTRACT};yt[b0]=n.MIN,yt[M0]=n.MAX;let Lt={[w0]:n.ZERO,[S0]:n.ONE,[T0]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[I0]:n.SRC_ALPHA_SATURATE,[R0]:n.DST_COLOR,[A0]:n.DST_ALPHA,[E0]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[P0]:n.ONE_MINUS_DST_COLOR,[C0]:n.ONE_MINUS_DST_ALPHA,[L0]:n.CONSTANT_COLOR,[U0]:n.ONE_MINUS_CONSTANT_COLOR,[k0]:n.CONSTANT_ALPHA,[D0]:n.ONE_MINUS_CONSTANT_ALPHA};function H(N,ut,tt,at,xt,lt,Et,qt,ue,Jt){if(N===Jn){x===!0&&(Y(n.BLEND),x=!1);return}if(x===!1&&(O(n.BLEND),x=!0),N!==v0){if(N!==m||Jt!==b){if((p!==ss||v!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,v=ss),Jt)switch(N){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qe:n.blendFunc(n.ONE,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qe:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,y=null,T=null,S=null,w.set(0,0,0),R=0,m=N,b=Jt}return}xt=xt||ut,lt=lt||tt,Et=Et||at,(ut!==p||xt!==v)&&(n.blendEquationSeparate(yt[ut],yt[xt]),p=ut,v=xt),(tt!==_||at!==y||lt!==T||Et!==S)&&(n.blendFuncSeparate(Lt[tt],Lt[at],Lt[lt],Lt[Et]),_=tt,y=at,T=lt,S=Et),(qt.equals(w)===!1||ue!==R)&&(n.blendColor(qt.r,qt.g,qt.b,ue),w.copy(qt),R=ue),m=N,b=!1}function Wt(N,ut){N.side===sn?Y(n.CULL_FACE):O(n.CULL_FACE);let tt=N.side===rn;ut&&(tt=!tt),Ft(tt),N.blending===Vs&&N.transparent===!1?H(Jn):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let at=N.stencilWrite;a.setTest(at),at&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Ht(N){N!==m0?(O(n.CULL_FACE),N!==E&&(N===xu?n.cullFace(n.BACK):N===g0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),E=N}function kt(N){N!==D&&(P&&n.lineWidth(N),D=N)}function ae(N,ut,tt){N?(O(n.POLYGON_OFFSET_FILL),(k!==ut||B!==tt)&&(n.polygonOffset(ut,tt),k=ut,B=tt)):Y(n.POLYGON_OFFSET_FILL)}function Dt(N){N?O(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function I(N){N===void 0&&(N=n.TEXTURE0+L-1),it!==N&&(n.activeTexture(N),it=N)}function A(N,ut,tt){tt===void 0&&(it===null?tt=n.TEXTURE0+L-1:tt=it);let at=J[tt];at===void 0&&(at={type:void 0,texture:void 0},J[tt]=at),(at.type!==N||at.texture!==ut)&&(it!==tt&&(n.activeTexture(tt),it=tt),n.bindTexture(N,ut||Q[N]),at.type=N,at.texture=ut)}function $(){let N=J[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){rt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function St(N){U.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),U.copy(N))}function Qt(N,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let at=tt.get(N);at===void 0&&(at=n.getUniformBlockIndex(ut,N.name),tt.set(N,at))}function gt(N,ut){let at=c.get(ut).get(N);l.get(ut)!==at&&(n.uniformBlockBinding(ut,at,N.__bindingPointIndex),l.set(ut,at))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,J={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,T=null,S=null,w=new Ot(0,0,0),R=0,b=!1,M=null,E=null,D=null,k=null,B=null,rt.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:Y,bindFramebuffer:K,drawBuffers:dt,useProgram:At,setBlending:H,setMaterial:Wt,setFlipSided:Ft,setCullFace:Ht,setLineWidth:kt,setPolygonOffset:ae,setScissorTest:Dt,activeTexture:I,bindTexture:A,unbindTexture:$,compressedTexImage2D:ct,compressedTexImage3D:st,texImage2D:wt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:gt,texStorage2D:Kt,texStorage3D:ft,texSubImage2D:ot,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:Mt,scissor:zt,viewport:St,reset:Vt}}function md(n,t,e,i){let s=ty(i);switch(e){case Ld:return n*t;case kd:return n*t;case Dd:return n*t*2;case Fd:return n*t/s.components*s.byteLength;case vh:return n*t/s.components*s.byteLength;case Nd:return n*t*2/s.components*s.byteLength;case yh:return n*t*2/s.components*s.byteLength;case Ud:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case _h:return n*t*4/s.components*s.byteLength;case Xo:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:case Ql:return Math.max(n,16)*Math.max(t,8)/4;case Jl:case jl:return Math.max(n,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yo:case xc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bd:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _c:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ty(n){switch(n){case Mi:case Rd:return{byteLength:1,components:1};case Or:case Pd:case mn:return{byteLength:2,components:1};case gh:case xh:return{byteLength:2,components:4};case cs:case mh:case vi:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ey(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return f?new OffscreenCanvas(I,A):jo("canvas")}function x(I,A,$){let ct=1,st=Dt(I);if((st.width>$||st.height>$)&&(ct=$/Math.max(st.width,st.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ot=Math.floor(ct*st.width),Ct=Math.floor(ct*st.height);u===void 0&&(u=g(ot,Ct));let vt=A?g(ot,Ct):u;return vt.width=ot,vt.height=Ct,vt.getContext("2d").drawImage(I,0,0,ot,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ot+"x"+Ct+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,A,$,ct,st=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ot=A;if(A===n.RED&&($===n.FLOAT&&(ot=n.R32F),$===n.HALF_FLOAT&&(ot=n.R16F),$===n.UNSIGNED_BYTE&&(ot=n.R8)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.R8UI),$===n.UNSIGNED_SHORT&&(ot=n.R16UI),$===n.UNSIGNED_INT&&(ot=n.R32UI),$===n.BYTE&&(ot=n.R8I),$===n.SHORT&&(ot=n.R16I),$===n.INT&&(ot=n.R32I)),A===n.RG&&($===n.FLOAT&&(ot=n.RG32F),$===n.HALF_FLOAT&&(ot=n.RG16F),$===n.UNSIGNED_BYTE&&(ot=n.RG8)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RG8UI),$===n.UNSIGNED_SHORT&&(ot=n.RG16UI),$===n.UNSIGNED_INT&&(ot=n.RG32UI),$===n.BYTE&&(ot=n.RG8I),$===n.SHORT&&(ot=n.RG16I),$===n.INT&&(ot=n.RG32I)),A===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),$===n.UNSIGNED_INT&&(ot=n.RGB32UI),$===n.BYTE&&(ot=n.RGB8I),$===n.SHORT&&(ot=n.RGB16I),$===n.INT&&(ot=n.RGB32I)),A===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),$===n.UNSIGNED_INT&&(ot=n.RGBA32UI),$===n.BYTE&&(ot=n.RGBA8I),$===n.SHORT&&(ot=n.RGBA16I),$===n.INT&&(ot=n.RGBA32I)),A===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),A===n.RGBA){let Ct=st?Ea:te.getTransfer(ct);$===n.FLOAT&&(ot=n.RGBA32F),$===n.HALF_FLOAT&&(ot=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ot=Ct===he?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(I,A){let $;return I?A===null||A===cs||A===Ys?$=n.DEPTH24_STENCIL8:A===vi?$=n.DEPTH32F_STENCIL8:A===Or&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cs||A===Ys?$=n.DEPTH_COMPONENT24:A===vi?$=n.DEPTH_COMPONENT32F:A===Or&&($=n.DEPTH_COMPONENT16),$}function T(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),R(A),A.isVideoTexture&&h.delete(A)}function w(I){let A=I.target;A.removeEventListener("dispose",w),M(A)}function R(I){let A=i.get(I);if(A.__webglInit===void 0)return;let $=I.source,ct=d.get($);if(ct){let st=ct[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(I),Object.keys(ct).length===0&&d.delete($)}i.remove(I)}function b(I){let A=i.get(I);n.deleteTexture(A.__webglTexture);let $=I.source,ct=d.get($);delete ct[A.__cacheKey],o.memory.textures--}function M(I){let A=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(A.__webglFramebuffer[ct]))for(let st=0;st<A.__webglFramebuffer[ct].length;st++)n.deleteFramebuffer(A.__webglFramebuffer[ct][st]);else n.deleteFramebuffer(A.__webglFramebuffer[ct]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ct])}else{if(Array.isArray(A.__webglFramebuffer))for(let ct=0;ct<A.__webglFramebuffer.length;ct++)n.deleteFramebuffer(A.__webglFramebuffer[ct]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ct=0;ct<A.__webglColorRenderbuffer.length;ct++)A.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ct]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let $=I.textures;for(let ct=0,st=$.length;ct<st;ct++){let ot=i.get($[ct]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove($[ct])}i.remove(I)}let E=0;function D(){E=0}function k(){let I=E;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function B(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function L(I,A){let $=i.get(I);if(I.isVideoTexture&&kt(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){let ct=I.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U($,I,A);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function P(I,A){let $=i.get(I);if(I.version>0&&$.__version!==I.version){U($,I,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function z(I,A){let $=i.get(I);if(I.version>0&&$.__version!==I.version){U($,I,A);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function W(I,A){let $=i.get(I);if(I.version>0&&$.__version!==I.version){G($,I,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}let it={[$l]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},J={[Fn]:n.NEAREST,[O0]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},ht={[W0]:n.NEVER,[J0]:n.ALWAYS,[X0]:n.LESS,[Od]:n.LEQUAL,[Z0]:n.EQUAL,[Y0]:n.GEQUAL,[q0]:n.GREATER,[$0]:n.NOTEQUAL};function q(I,A){if(A.type===vi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===rl||A.magFilter===xo||A.magFilter===ls||A.minFilter===Yn||A.minFilter===rl||A.minFilter===xo||A.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,it[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,it[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,it[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,J[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ht[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==xo&&A.minFilter!==ls||A.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function rt(I,A){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let ct=A.source,st=d.get(ct);st===void 0&&(st={},d.set(ct,st));let ot=B(A);if(ot!==I.__cacheKey){st[ot]===void 0&&(st[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),st[ot].usedTimes++;let Ct=st[I.__cacheKey];Ct!==void 0&&(st[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(A)),I.__cacheKey=ot,I.__webglTexture=st[ot].texture}return $}function U(I,A,$){let ct=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=n.TEXTURE_3D);let st=rt(I,A),ot=A.source;e.bindTexture(ct,I.__webglTexture,n.TEXTURE0+$);let Ct=i.get(ot);if(ot.version!==Ct.__version||st===!0){e.activeTexture(n.TEXTURE0+$);let vt=te.getPrimaries(te.workingColorSpace),Mt=A.colorSpace===Oi?null:te.getPrimaries(A.colorSpace),Kt=A.colorSpace===Oi||vt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ft=x(A.image,!1,s.maxTextureSize);ft=ae(A,ft);let wt=r.convert(A.format,A.colorSpace),Nt=r.convert(A.type),zt=y(A.internalFormat,wt,Nt,A.colorSpace,A.isVideoTexture);q(ct,A);let St,Qt=A.mipmaps,gt=A.isVideoTexture!==!0,Vt=Ct.__version===void 0||st===!0,N=ot.dataReady,ut=T(A,ft);if(A.isDepthTexture)zt=v(A.format===Js,A.type),Vt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,zt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Nt,null));else if(A.isDataTexture)if(Qt.length>0){gt&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,zt,Qt[0].width,Qt[0].height);for(let tt=0,at=Qt.length;tt<at;tt++)St=Qt[tt],gt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,St.width,St.height,wt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,tt,zt,St.width,St.height,0,wt,Nt,St.data);A.generateMipmaps=!1}else gt?(Vt&&e.texStorage2D(n.TEXTURE_2D,ut,zt,ft.width,ft.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,wt,Nt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ft.width,ft.height,0,wt,Nt,ft.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,zt,Qt[0].width,Qt[0].height,ft.depth);for(let tt=0,at=Qt.length;tt<at;tt++)if(St=Qt[tt],A.format!==Dn)if(wt!==null)if(gt){if(N)if(A.layerUpdates.size>0){let xt=md(St.width,St.height,A.format,A.type);for(let lt of A.layerUpdates){let Et=St.data.subarray(lt*xt/St.data.BYTES_PER_ELEMENT,(lt+1)*xt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,lt,St.width,St.height,1,wt,Et)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,St.width,St.height,ft.depth,wt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,zt,St.width,St.height,ft.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,St.width,St.height,ft.depth,wt,Nt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,zt,St.width,St.height,ft.depth,0,wt,Nt,St.data)}else{gt&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,zt,Qt[0].width,Qt[0].height);for(let tt=0,at=Qt.length;tt<at;tt++)St=Qt[tt],A.format!==Dn?wt!==null?gt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,St.width,St.height,wt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,tt,zt,St.width,St.height,0,wt,Nt,St.data)}else if(A.isDataArrayTexture)if(gt){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,zt,ft.width,ft.height,ft.depth),N)if(A.layerUpdates.size>0){let tt=md(ft.width,ft.height,A.format,A.type);for(let at of A.layerUpdates){let xt=ft.data.subarray(at*tt/ft.data.BYTES_PER_ELEMENT,(at+1)*tt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,wt,Nt,xt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,Nt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ft.width,ft.height,ft.depth,0,wt,Nt,ft.data);else if(A.isData3DTexture)gt?(Vt&&e.texStorage3D(n.TEXTURE_3D,ut,zt,ft.width,ft.height,ft.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,Nt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ft.width,ft.height,ft.depth,0,wt,Nt,ft.data);else if(A.isFramebufferTexture){if(Vt)if(gt)e.texStorage2D(n.TEXTURE_2D,ut,zt,ft.width,ft.height);else{let tt=ft.width,at=ft.height;for(let xt=0;xt<ut;xt++)e.texImage2D(n.TEXTURE_2D,xt,zt,tt,at,0,wt,Nt,null),tt>>=1,at>>=1}}else if(Qt.length>0){if(gt&&Vt){let tt=Dt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,ut,zt,tt.width,tt.height)}for(let tt=0,at=Qt.length;tt<at;tt++)St=Qt[tt],gt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,wt,Nt,St):e.texImage2D(n.TEXTURE_2D,tt,zt,wt,Nt,St);A.generateMipmaps=!1}else if(gt){if(Vt){let tt=Dt(ft);e.texStorage2D(n.TEXTURE_2D,ut,zt,tt.width,tt.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Nt,ft)}else e.texImage2D(n.TEXTURE_2D,0,zt,wt,Nt,ft);m(A)&&p(ct),Ct.__version=ot.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function G(I,A,$){if(A.image.length!==6)return;let ct=rt(I,A),st=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+$);let ot=i.get(st);if(st.version!==ot.__version||ct===!0){e.activeTexture(n.TEXTURE0+$);let Ct=te.getPrimaries(te.workingColorSpace),vt=A.colorSpace===Oi?null:te.getPrimaries(A.colorSpace),Mt=A.colorSpace===Oi||Ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Kt=A.isCompressedTexture||A.image[0].isCompressedTexture,ft=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!Kt&&!ft?wt[at]=x(A.image[at],!0,s.maxCubemapSize):wt[at]=ft?A.image[at].image:A.image[at],wt[at]=ae(A,wt[at]);let Nt=wt[0],zt=r.convert(A.format,A.colorSpace),St=r.convert(A.type),Qt=y(A.internalFormat,zt,St,A.colorSpace),gt=A.isVideoTexture!==!0,Vt=ot.__version===void 0||ct===!0,N=st.dataReady,ut=T(A,Nt);q(n.TEXTURE_CUBE_MAP,A);let tt;if(Kt){gt&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Qt,Nt.width,Nt.height);for(let at=0;at<6;at++){tt=wt[at].mipmaps;for(let xt=0;xt<tt.length;xt++){let lt=tt[xt];A.format!==Dn?zt!==null?gt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,lt.width,lt.height,zt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Qt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,lt.width,lt.height,zt,St,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Qt,lt.width,lt.height,0,zt,St,lt.data)}}}else{if(tt=A.mipmaps,gt&&Vt){tt.length>0&&ut++;let at=Dt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Qt,at.width,at.height)}for(let at=0;at<6;at++)if(ft){gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,zt,St,wt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,wt[at].width,wt[at].height,0,zt,St,wt[at].data);for(let xt=0;xt<tt.length;xt++){let Et=tt[xt].image[at].image;gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,Et.width,Et.height,zt,St,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Qt,Et.width,Et.height,0,zt,St,Et.data)}}else{gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,zt,St,wt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,zt,St,wt[at]);for(let xt=0;xt<tt.length;xt++){let lt=tt[xt];gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,zt,St,lt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Qt,zt,St,lt.image[at])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),ot.__version=st.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Q(I,A,$,ct,st,ot){let Ct=r.convert($.format,$.colorSpace),vt=r.convert($.type),Mt=y($.internalFormat,Ct,vt,$.colorSpace),Kt=i.get(A),ft=i.get($);if(ft.__renderTarget=A,!Kt.__hasExternalTextures){let wt=Math.max(1,A.width>>ot),Nt=Math.max(1,A.height>>ot);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,Mt,wt,Nt,A.depth,0,Ct,vt,null):e.texImage2D(st,ot,Mt,wt,Nt,0,Ct,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,st,ft.__webglTexture,0,Ft(A)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,st,ft.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(I,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer){let ct=A.depthTexture,st=ct&&ct.isDepthTexture?ct.type:null,ot=v(A.stencilBuffer,st),Ct=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=Ft(A);Ht(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,ot,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,ot,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ot,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,I)}else{let ct=A.textures;for(let st=0;st<ct.length;st++){let ot=ct[st],Ct=r.convert(ot.format,ot.colorSpace),vt=r.convert(ot.type),Mt=y(ot.internalFormat,Ct,vt,ot.colorSpace),Kt=Ft(A);$&&Ht(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,Mt,A.width,A.height):Ht(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,Mt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=i.get(A.depthTexture);ct.__renderTarget=A,(!ct.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),L(A.depthTexture,0);let st=ct.__webglTexture,ot=Ft(A);if(A.depthTexture.format===Gs)Ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(A.depthTexture.format===Js)Ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function K(I){let A=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let ct=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ct){let st=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ct.removeEventListener("dispose",st)};ct.addEventListener("dispose",st),A.__depthDisposeCallback=st}A.__boundDepthTexture=ct}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Y(A.__webglFramebuffer,I)}else if($){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]===void 0)A.__webglDepthbuffer[ct]=n.createRenderbuffer(),O(A.__webglDepthbuffer[ct],I,!1);else{let st=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=A.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),O(A.__webglDepthbuffer,I,!1);else{let ct=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(I,A,$){let ct=i.get(I);A!==void 0&&Q(ct.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&K(I)}function At(I){let A=I.texture,$=i.get(I),ct=i.get(A);I.addEventListener("dispose",w);let st=I.textures,ot=I.isWebGLCubeRenderTarget===!0,Ct=st.length>1;if(Ct||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=A.version,o.memory.textures++),ot){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)$.__webglFramebuffer[vt][Mt]=n.createFramebuffer()}else $.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<A.mipmaps.length;vt++)$.__webglFramebuffer[vt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let vt=0,Mt=st.length;vt<Mt;vt++){let Kt=i.get(st[vt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ht(I)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let vt=0;vt<st.length;vt++){let Mt=st[vt];$.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[vt]);let Kt=r.convert(Mt.format,Mt.colorSpace),ft=r.convert(Mt.type),wt=y(Mt.internalFormat,Kt,ft,Mt.colorSpace,I.isXRRenderTarget===!0),Nt=Ft(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,wt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,$.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),O($.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),q(n.TEXTURE_CUBE_MAP,A);for(let vt=0;vt<6;vt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Q($.__webglFramebuffer[vt][Mt],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else Q($.__webglFramebuffer[vt],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(A)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,Mt=st.length;vt<Mt;vt++){let Kt=st[vt],ft=i.get(Kt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),q(n.TEXTURE_2D,Kt),Q($.__webglFramebuffer,I,Kt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),m(Kt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,ct.__webglTexture),q(vt,A),A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Q($.__webglFramebuffer[Mt],I,A,n.COLOR_ATTACHMENT0,vt,Mt);else Q($.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,vt,0);m(A)&&p(vt),e.unbindTexture()}I.depthBuffer&&K(I)}function yt(I){let A=I.textures;for(let $=0,ct=A.length;$<ct;$++){let st=A[$];if(m(st)){let ot=_(I),Ct=i.get(st).__webglTexture;e.bindTexture(ot,Ct),p(ot),e.unbindTexture()}}}let Lt=[],H=[];function Wt(I){if(I.samples>0){if(Ht(I)===!1){let A=I.textures,$=I.width,ct=I.height,st=n.COLOR_BUFFER_BIT,ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(I),vt=A.length>1;if(vt)for(let Mt=0;Mt<A.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<A.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let Kt=i.get(A[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,$,ct,0,0,$,ct,st,n.NEAREST),l===!0&&(Lt.length=0,H.length=0,Lt.push(n.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Lt.push(ot),H.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Mt=0;Mt<A.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);let Kt=i.get(A[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ft(I){return Math.min(s.maxSamples,I.samples)}function Ht(I){let A=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function kt(I){let A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ae(I,A){let $=I.colorSpace,ct=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==er&&$!==Oi&&(te.getTransfer($)===he?(ct!==Dn||st!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=L,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=dt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ht}function ny(n,t){function e(i,s=Oi){let r,o=te.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rd)return n.BYTE;if(i===Pd)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===mn)return n.HALF_FLOAT;if(i===Ld)return n.ALPHA;if(i===Ud)return n.RGB;if(i===Dn)return n.RGBA;if(i===kd)return n.LUMINANCE;if(i===Dd)return n.LUMINANCE_ALPHA;if(i===Gs)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Fd)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===yh)return n.RG_INTEGER;if(i===_h)return n.RGBA_INTEGER;if(i===Xo||i===Zo||i===qo||i===$o)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===Kl||i===jl||i===Ql)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===ec)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===xc||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===yc||i===_c||i===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Nc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fn=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},iy={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new wn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ne({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends Vi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Bc,m=e.getContextAttributes(),p=null,_=null,y=[],v=[],T=new Tt,S=null,w=new Ke;w.viewport=new me;let R=new Ke;R.viewport=new me;let b=[w,R],M=new Nc,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let G=y[U];return G===void 0&&(G=new Fr,y[U]=G),G.getTargetRaySpace()},this.getControllerGrip=function(U){let G=y[U];return G===void 0&&(G=new Fr,y[U]=G),G.getGripSpace()},this.getHand=function(U){let G=y[U];return G===void 0&&(G=new Fr,y[U]=G),G.getHandSpace()};function k(U){let G=v.indexOf(U.inputSource);if(G===-1)return;let Q=y[G];Q!==void 0&&(Q.update(U.inputSource,U.frame,c||o),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",L);for(let U=0;U<y.length;U++){let G=v[U];G!==null&&(v[U]=null,y[U].disconnect(G))}E=null,D=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Oe(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,Q=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=m.stencil?Js:Gs,Q=m.stencil?Ys:cs);let Y={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Y),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Oe(d.textureWidth,d.textureHeight,{format:Dn,type:Mi,depthTexture:new ca(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function L(U){for(let G=0;G<U.removed.length;G++){let Q=U.removed[G],O=v.indexOf(Q);O>=0&&(v[O]=null,y[O].disconnect(Q))}for(let G=0;G<U.added.length;G++){let Q=U.added[G],O=v.indexOf(Q);if(O===-1){for(let K=0;K<y.length;K++)if(K>=v.length){v.push(Q),O=K;break}else if(v[K]===null){v[K]=Q,O=K;break}if(O===-1)break}let Y=y[O];Y&&Y.connect(Q)}}let P=new F,z=new F;function W(U,G,Q){P.setFromMatrixPosition(G.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);let O=P.distanceTo(z),Y=G.projectionMatrix.elements,K=Q.projectionMatrix.elements,dt=Y[14]/(Y[10]-1),At=Y[14]/(Y[10]+1),yt=(Y[9]+1)/Y[5],Lt=(Y[9]-1)/Y[5],H=(Y[8]-1)/Y[0],Wt=(K[8]+1)/K[0],Ft=dt*H,Ht=dt*Wt,kt=O/(-H+Wt),ae=kt*-H;if(G.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ae),U.translateZ(kt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Y[10]===-1)U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Dt=dt+kt,I=At+kt,A=Ft-ae,$=Ht+(O-ae),ct=yt*At/I*Dt,st=Lt*At/I*Dt;U.projectionMatrix.makePerspective(A,$,ct,st,Dt,I),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function it(U,G){G===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(G.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let G=U.near,Q=U.far;x.texture!==null&&(x.depthNear>0&&(G=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),M.near=R.near=w.near=G,M.far=R.far=w.far=Q,(E!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far),w.layers.mask=U.layers.mask|2,R.layers.mask=U.layers.mask|4,M.layers.mask=w.layers.mask|R.layers.mask;let O=U.parent,Y=M.cameras;it(M,O);for(let K=0;K<Y.length;K++)it(Y[K],O);Y.length===2?W(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),J(U,M,O)};function J(U,G,Q){Q===null?U.matrix.copy(G.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(G.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=zr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ht=null;function q(U,G){if(h=G.getViewerPose(c||o),g=G,h!==null){let Q=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let O=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let K=0;K<Q.length;K++){let dt=Q[K],At=null;if(f!==null)At=f.getViewport(dt);else{let Lt=u.getViewSubImage(d,dt);At=Lt.viewport,K===0&&(t.setRenderTargetTextures(_,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(_))}let yt=b[K];yt===void 0&&(yt=new Ke,yt.layers.enable(K),yt.viewport=new me,b[K]=yt),yt.matrix.fromArray(dt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(dt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(At.x,At.y,At.width,At.height),K===0&&(M.matrix.copy(yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(yt)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let K=u.getDepthInformation(Q[0]);K&&K.isValid&&K.texture&&x.init(t,K,s.renderState)}}for(let Q=0;Q<y.length;Q++){let O=v[Q],Y=y[Q];O!==null&&Y!==void 0&&Y.update(O,G,c||o)}ht&&ht(U,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}let rt=new Wd;rt.setAnimationLoop(q),this.setAnimationLoop=function(U){ht=U},this.dispose=function(){}}},ns=new wi,oy=new Ee;function ay(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,ns.copy(v),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ly(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;i.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(_,T);let S=t.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let y=u();_.__bindingPointIndex=y;let v=n.createBuffer(),T=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,w=v.length;S<w;S++){let R=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,M=R.length;b<M;b++){let E=R[b];if(f(E,S,b,T)===!0){let D=E.__offset,k=Array.isArray(E.value)?E.value:[E.value],B=0;for(let L=0;L<k.length;L++){let P=k[L],z=x(P);typeof P=="number"||typeof P=="boolean"?(E.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,D+B,E.__data)):P.isMatrix3?(E.__data[0]=P.elements[0],E.__data[1]=P.elements[1],E.__data[2]=P.elements[2],E.__data[3]=0,E.__data[4]=P.elements[3],E.__data[5]=P.elements[4],E.__data[6]=P.elements[5],E.__data[7]=0,E.__data[8]=P.elements[6],E.__data[9]=P.elements[7],E.__data[10]=P.elements[8],E.__data[11]=0):(P.toArray(E.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,v,T){let S=_.value,w=y+"_"+v;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{let R=T[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return T[w]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(_){let y=_.uniforms,v=0,T=16;for(let w=0,R=y.length;w<R;w++){let b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,E=b.length;M<E;M++){let D=b[M],k=Array.isArray(D.value)?D.value:[D.value];for(let B=0,L=k.length;B<L;B++){let P=k[B],z=x(P),W=v%T,it=W%z.boundary,J=W+it;v+=it,J!==0&&T-J<z.storage&&(v+=T-J),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=z.storage}}}let S=v%T;return S>0&&(v+=T-S),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ha=class{constructor(t={}){let{canvas:e=fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=zi,this.toneMappingExposure=1;let v=this,T=!1,S=0,w=0,R=null,b=-1,M=null,E=new me,D=new me,k=null,B=new Ot(0),L=0,P=e.width,z=e.height,W=1,it=null,J=null,ht=new me(0,0,P,z),q=new me(0,0,P,z),rt=!1,U=new oa,G=!1,Q=!1,O=new Ee,Y=new Ee,K=new F,dt=new me,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Lt(){return R===null?W:1}let H=i;function Wt(C,X){return e.getContext(C,X)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lh}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),H===null){let X="webgl2";if(H=Wt(X,C),H===null)throw Wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ft,Ht,kt,ae,Dt,I,A,$,ct,st,ot,Ct,vt,Mt,Kt,ft,wt,Nt,zt,St,Qt,gt,Vt,N;function ut(){Ft=new Sx(H),Ft.init(),gt=new ny(H,Ft),Ht=new vx(H,Ft,t,gt),kt=new Qv(H,Ft),Ht.reverseDepthBuffer&&d&&kt.buffers.depth.setReversed(!0),ae=new Ax(H),Dt=new zv,I=new ey(H,Ft,kt,Dt,Ht,gt,ae),A=new _x(v),$=new wx(v),ct=new km(H),Vt=new gx(H,ct),st=new Tx(H,ct,ae,Vt),ot=new Rx(H,st,ct,ae),zt=new Cx(H,Ht,I),ft=new yx(Dt),Ct=new Ov(v,A,$,Ft,Ht,Vt,ft),vt=new ay(v,Dt),Mt=new Vv,Kt=new $v(Ft),Nt=new mx(v,A,$,kt,ot,f,l),wt=new Kv(v,ot,Ht),N=new ly(H,ae,Ht,kt),St=new xx(H,Ft,ae),Qt=new Ex(H,Ft,ae),ae.programs=Ct.programs,v.capabilities=Ht,v.extensions=Ft,v.properties=Dt,v.renderLists=Mt,v.shadowMap=wt,v.state=kt,v.info=ae}ut();let tt=new Oc(v,H);this.xr=tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=Ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(P,z,!1))},this.getSize=function(C){return C.set(P,z)},this.setSize=function(C,X,j=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,z=X,e.width=Math.floor(C*W),e.height=Math.floor(X*W),j===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(P*W,z*W).floor()},this.setDrawingBufferSize=function(C,X,j){P=C,z=X,W=j,e.width=Math.floor(C*j),e.height=Math.floor(X*j),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,X,j,et){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,X,j,et),kt.viewport(E.copy(ht).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,X,j,et){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,X,j,et),kt.scissor(D.copy(q).multiplyScalar(W).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){kt.setScissorTest(rt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(C=!0,X=!0,j=!0){let et=0;if(C){let Z=!1;if(R!==null){let pt=R.texture.format;Z=pt===_h||pt===yh||pt===vh}if(Z){let pt=R.texture.type,_t=pt===Mi||pt===cs||pt===Or||pt===Ys||pt===gh||pt===xh,Rt=Nt.getClearColor(),Pt=Nt.getClearAlpha(),Gt=Rt.r,Xt=Rt.g,It=Rt.b;_t?(g[0]=Gt,g[1]=Xt,g[2]=It,g[3]=Pt,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=Gt,x[1]=Xt,x[2]=It,x[3]=Pt,H.clearBufferiv(H.COLOR,0,x))}else et|=H.COLOR_BUFFER_BIT}X&&(et|=H.DEPTH_BUFFER_BIT),j&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Mt.dispose(),Kt.dispose(),Dt.dispose(),A.dispose(),$.dispose(),ot.dispose(),Vt.dispose(),N.dispose(),Ct.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Pi),tt.removeEventListener("sessionend",Ji),We.stop()};function at(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=ae.autoReset,X=wt.enabled,j=wt.autoUpdate,et=wt.needsUpdate,Z=wt.type;ut(),ae.autoReset=C,wt.enabled=X,wt.autoUpdate=j,wt.needsUpdate=et,wt.type=Z}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){let X=C.target;X.removeEventListener("dispose",Et),qt(X)}function qt(C){ue(C),Dt.remove(C)}function ue(C){let X=Dt.get(C).programs;X!==void 0&&(X.forEach(function(j){Ct.releaseProgram(j)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,j,et,Z,pt){X===null&&(X=At);let _t=Z.isMesh&&Z.matrixWorld.determinant()<0,Rt=Sr(C,X,j,et,Z);kt.setMaterial(et,_t);let Pt=j.index,Gt=1;if(et.wireframe===!0){if(Pt=st.getWireframeAttribute(j),Pt===void 0)return;Gt=2}let Xt=j.drawRange,It=j.attributes.position,oe=Xt.start*Gt,ve=(Xt.start+Xt.count)*Gt;pt!==null&&(oe=Math.max(oe,pt.start*Gt),ve=Math.min(ve,(pt.start+pt.count)*Gt)),Pt!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Pt.count)):It!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,It.count));let be=ve-oe;if(be<0||be===1/0)return;Vt.setup(Z,et,Rt,j,Pt);let en,le=St;if(Pt!==null&&(en=ct.get(Pt),le=Qt,le.setIndex(en)),Z.isMesh)et.wireframe===!0?(kt.setLineWidth(et.wireframeLinewidth*Lt()),le.setMode(H.LINES)):le.setMode(H.TRIANGLES);else if(Z.isLine){let Ut=et.linewidth;Ut===void 0&&(Ut=1),kt.setLineWidth(Ut*Lt()),Z.isLineSegments?le.setMode(H.LINES):Z.isLineLoop?le.setMode(H.LINE_LOOP):le.setMode(H.LINE_STRIP)}else Z.isPoints?le.setMode(H.POINTS):Z.isSprite&&le.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ut=Z._multiDrawStarts,hi=Z._multiDrawCounts,ce=Z._multiDrawCount,Rn=Pt?ct.get(Pt).bytesPerElement:1,Ts=Dt.get(et).currentProgram.getUniforms();for(let hn=0;hn<ce;hn++)Ts.setValue(H,"_gl_DrawID",hn),le.render(Ut[hn]/Rn,hi[hn])}else if(Z.isInstancedMesh)le.renderInstances(oe,be,Z.count);else if(j.isInstancedBufferGeometry){let Ut=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hi=Math.min(j.instanceCount,Ut);le.renderInstances(oe,be,hi)}else le.render(oe,be)};function Jt(C,X,j){C.transparent===!0&&C.side===sn&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,_n(C,X,j),C.side=Hi,C.needsUpdate=!0,_n(C,X,j),C.side=sn):_n(C,X,j)}this.compile=function(C,X,j=null){j===null&&(j=C),p=Kt.get(j),p.init(X),y.push(p),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),C!==j&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();let et=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let pt=Z.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){let Rt=pt[_t];Jt(Rt,j,Z),et.add(Rt)}else Jt(pt,j,Z),et.add(pt)}),y.pop(),p=null,et},this.compileAsync=function(C,X,j=null){let et=this.compile(C,X,j);return new Promise(Z=>{function pt(){if(et.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&et.delete(_t)}),et.size===0){Z(C);return}setTimeout(pt,10)}Ft.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Ce(C){re&&re(C)}function Pi(){We.stop()}function Ji(){We.start()}let We=new Wd;We.setAnimationLoop(Ce),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(C){re=C,tt.setAnimationLoop(C),C===null?We.stop():We.start()},tt.addEventListener("sessionstart",Pi),tt.addEventListener("sessionend",Ji),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(X),X=tt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,R),p=Kt.get(C,y.length),p.init(X),y.push(p),Y.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U.setFromProjectionMatrix(Y),Q=this.localClippingEnabled,G=ft.init(this.clippingPlanes,Q),m=Mt.get(C,_.length),m.init(),_.push(m),tt.enabled===!0&&tt.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&Pe(pt,X,-1/0,v.sortObjects)}Pe(C,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,J),yt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,yt&&Nt.addToRenderList(m,C),this.info.render.frame++,G===!0&&ft.beginShadows();let j=p.state.shadowsArray;wt.render(j,C,X),G===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=m.opaque,Z=m.transmissive;if(p.setupLights(),X.isArrayCamera){let pt=X.cameras;if(Z.length>0)for(let _t=0,Rt=pt.length;_t<Rt;_t++){let Pt=pt[_t];Ss(et,Z,C,Pt)}yt&&Nt.render(C);for(let _t=0,Rt=pt.length;_t<Rt;_t++){let Pt=pt[_t];yn(m,C,Pt,Pt.viewport)}}else Z.length>0&&Ss(et,Z,C,X),yt&&Nt.render(C),yn(m,C,X);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,X),Vt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],G===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Pe(C,X,j,et){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||U.intersectsSprite(C)){et&&dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);let _t=ot.update(C),Rt=C.material;Rt.visible&&m.push(C,_t,Rt,j,dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||U.intersectsObject(C))){let _t=ot.update(C),Rt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),dt.copy(C.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),dt.copy(_t.boundingSphere.center)),dt.applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(Rt)){let Pt=_t.groups;for(let Gt=0,Xt=Pt.length;Gt<Xt;Gt++){let It=Pt[Gt],oe=Rt[It.materialIndex];oe&&oe.visible&&m.push(C,_t,oe,j,dt.z,It)}}else Rt.visible&&m.push(C,_t,Rt,j,dt.z,null)}}let pt=C.children;for(let _t=0,Rt=pt.length;_t<Rt;_t++)Pe(pt[_t],X,j,et)}function yn(C,X,j,et){let Z=C.opaque,pt=C.transmissive,_t=C.transparent;p.setupLightsView(j),G===!0&&ft.setGlobalState(v.clippingPlanes,j),et&&kt.viewport(E.copy(et)),Z.length>0&&Cn(Z,X,j),pt.length>0&&Cn(pt,X,j),_t.length>0&&Cn(_t,X,j),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ss(C,X,j,et){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new Oe(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?mn:Mi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let pt=p.state.transmissionRenderTarget[et.id],_t=et.viewport||E;pt.setSize(_t.z,_t.w);let Rt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(B),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),yt&&Nt.render(j);let Pt=v.toneMapping;v.toneMapping=zi;let Gt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),G===!0&&ft.setGlobalState(v.clippingPlanes,et),Cn(C,j,et),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,oe=X.length;It<oe;It++){let ve=X[It],be=ve.object,en=ve.geometry,le=ve.material,Ut=ve.group;if(le.side===sn&&be.layers.test(et.layers)){let hi=le.side;le.side=rn,le.needsUpdate=!0,cn(be,j,et,en,le,Ut),le.side=hi,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}v.setRenderTarget(Rt),v.setClearColor(B,L),Gt!==void 0&&(et.viewport=Gt),v.toneMapping=Pt}function Cn(C,X,j){let et=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,pt=C.length;Z<pt;Z++){let _t=C[Z],Rt=_t.object,Pt=_t.geometry,Gt=et===null?_t.material:et,Xt=_t.group;Rt.layers.test(j.layers)&&cn(Rt,X,j,Pt,Gt,Xt)}}function cn(C,X,j,et,Z,pt){C.onBeforeRender(v,X,j,et,Z,pt),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(v,X,j,et,C,pt),Z.transparent===!0&&Z.side===sn&&Z.forceSinglePass===!1?(Z.side=rn,Z.needsUpdate=!0,v.renderBufferDirect(j,X,et,Z,C,pt),Z.side=Hi,Z.needsUpdate=!0,v.renderBufferDirect(j,X,et,Z,C,pt),Z.side=sn):v.renderBufferDirect(j,X,et,Z,C,pt),C.onAfterRender(v,X,j,et,Z,pt)}function _n(C,X,j){X.isScene!==!0&&(X=At);let et=Dt.get(C),Z=p.state.lights,pt=p.state.shadowsArray,_t=Z.state.version,Rt=Ct.getParameters(C,Z.state,pt,X,j),Pt=Ct.getProgramCacheKey(Rt),Gt=et.programs;et.environment=C.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(C.isMeshStandardMaterial?$:A).get(C.envMap||et.environment),et.envMapRotation=et.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Gt===void 0&&(C.addEventListener("dispose",Et),Gt=new Map,et.programs=Gt);let Xt=Gt.get(Pt);if(Xt!==void 0){if(et.currentProgram===Xt&&et.lightsStateVersion===_t)return ci(C,Rt),Xt}else Rt.uniforms=Ct.getUniforms(C),C.onBeforeCompile(Rt,v),Xt=Ct.acquireProgram(Rt,Pt),Gt.set(Pt,Xt),et.uniforms=Rt.uniforms;let It=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=ft.uniform),ci(C,Rt),et.needsLights=h0(C),et.lightsStateVersion=_t,et.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.directionalShadowMap.value=Z.state.directionalShadowMap,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotShadowMap.value=Z.state.spotShadowMap,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMap.value=Z.state.pointShadowMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=Xt,et.uniformsList=null,Xt}function uo(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Xs.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function ci(C,X){let j=Dt.get(C);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Sr(C,X,j,et,Z){X.isScene!==!0&&(X=At),I.resetTextureUnits();let pt=X.fog,_t=et.isMeshStandardMaterial?X.environment:null,Rt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:er,Pt=(et.isMeshStandardMaterial?$:A).get(et.envMap||_t),Gt=et.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xt=!!j.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),It=!!j.morphAttributes.position,oe=!!j.morphAttributes.normal,ve=!!j.morphAttributes.color,be=zi;et.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=v.toneMapping);let en=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=en!==void 0?en.length:0,Ut=Dt.get(et),hi=p.state.lights;if(G===!0&&(Q===!0||C!==M)){let bn=C===M&&et.id===b;ft.setState(et,C,bn)}let ce=!1;et.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==hi.state.version||Ut.outputColorSpace!==Rt||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Pt||et.fog===!0&&Ut.fog!==pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ft.numPlanes||Ut.numIntersection!==ft.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==Xt||Ut.morphTargets!==It||Ut.morphNormals!==oe||Ut.morphColors!==ve||Ut.toneMapping!==be||Ut.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Ut.__version=et.version);let Rn=Ut.currentProgram;ce===!0&&(Rn=_n(et,X,Z));let Ts=!1,hn=!1,Tr=!1,Me=Rn.getUniforms(),qn=Ut.uniforms;if(kt.useProgram(Rn.program)&&(Ts=!0,hn=!0,Tr=!0),et.id!==b&&(b=et.id,hn=!0),Ts||M!==C){kt.buffers.depth.getReversed()?(O.copy(C.projectionMatrix),mm(O),gm(O),Me.setValue(H,"projectionMatrix",O)):Me.setValue(H,"projectionMatrix",C.projectionMatrix),Me.setValue(H,"viewMatrix",C.matrixWorldInverse);let Ii=Me.map.cameraPosition;Ii!==void 0&&Ii.setValue(H,K.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&Me.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,hn=!0,Tr=!0)}if(Z.isSkinnedMesh){Me.setOptional(H,Z,"bindMatrix"),Me.setOptional(H,Z,"bindMatrixInverse");let bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Me.setValue(H,"boneTexture",bn.boneTexture,I))}Z.isBatchedMesh&&(Me.setOptional(H,Z,"batchingTexture"),Me.setValue(H,"batchingTexture",Z._matricesTexture,I),Me.setOptional(H,Z,"batchingIdTexture"),Me.setValue(H,"batchingIdTexture",Z._indirectTexture,I),Me.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Me.setValue(H,"batchingColorTexture",Z._colorsTexture,I));let Er=j.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&zt.update(Z,j,Rn),(hn||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,Me.setValue(H,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(qn.envMap.value=Pt,qn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(qn.envMapIntensity.value=X.environmentIntensity),hn&&(Me.setValue(H,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&c0(qn,Tr),pt&&et.fog===!0&&vt.refreshFogUniforms(qn,pt),vt.refreshMaterialUniforms(qn,et,W,z,p.state.transmissionRenderTarget[C.id]),Xs.upload(H,uo(Ut),qn,I)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Xs.upload(H,uo(Ut),qn,I),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue(H,"center",Z.center),Me.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Me.setValue(H,"normalMatrix",Z.normalMatrix),Me.setValue(H,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let bn=et.uniformsGroups;for(let Ii=0,Li=bn.length;Ii<Li;Ii++){let mu=bn[Ii];N.update(mu,Rn),N.bind(mu,Rn)}}return Rn}function c0(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function h0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,X,j){Dt.get(C.texture).__webglTexture=X,Dt.get(C.depthTexture).__webglTexture=j;let et=Dt.get(C);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=j===void 0,et.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){let j=Dt.get(C);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,j=0){R=C,S=X,w=j;let et=!0,Z=null,pt=!1,_t=!1;if(C){let Pt=Dt.get(C);if(Pt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(H.FRAMEBUFFER,null),et=!1;else if(Pt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Pt.__hasExternalTextures)I.rebindTextures(C,Dt.get(C.texture).__webglTexture,Dt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let It=C.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&Dt.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);let Xt=Dt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[X])?Z=Xt[X][j]:Z=Xt[X],pt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?Z=Dt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?Z=Xt[j]:Z=Xt,E.copy(C.viewport),D.copy(C.scissor),k=C.scissorTest}else E.copy(ht).multiplyScalar(W).floor(),D.copy(q).multiplyScalar(W).floor(),k=rt;if(kt.bindFramebuffer(H.FRAMEBUFFER,Z)&&et&&kt.drawBuffers(C,Z),kt.viewport(E),kt.scissor(D),kt.setScissorTest(k),pt){let Pt=Dt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pt.__webglTexture,j)}else if(_t){let Pt=Dt.get(C.texture),Gt=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,j||0,Gt)}b=-1},this.readRenderTargetPixels=function(C,X,j,et,Z,pt,_t){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){kt.bindFramebuffer(H.FRAMEBUFFER,Rt);try{let Pt=C.texture,Gt=Pt.format,Xt=Pt.type;if(!Ht.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-et&&j>=0&&j<=C.height-Z&&H.readPixels(X,j,et,Z,gt.convert(Gt),gt.convert(Xt),pt)}finally{let Pt=R!==null?Dt.get(R).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(C,X,j,et,Z,pt,_t){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){let Pt=C.texture,Gt=Pt.format,Xt=Pt.type;if(!Ht.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-et&&j>=0&&j<=C.height-Z){kt.bindFramebuffer(H.FRAMEBUFFER,Rt);let It=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.bufferData(H.PIXEL_PACK_BUFFER,pt.byteLength,H.STREAM_READ),H.readPixels(X,j,et,Z,gt.convert(Gt),gt.convert(Xt),0);let oe=R!==null?Dt.get(R).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,oe);let ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pm(H,ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,pt),H.deleteBuffer(It),H.deleteSync(ve),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,j=0){C.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);let et=Math.pow(2,-j),Z=Math.floor(C.image.width*et),pt=Math.floor(C.image.height*et),_t=X!==null?X.x:0,Rt=X!==null?X.y:0;I.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,_t,Rt,Z,pt),kt.unbindTexture()},this.copyTextureToTexture=function(C,X,j=null,et=null,Z=0){C.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,C=arguments[1],X=arguments[2],Z=arguments[3]||0,j=null);let pt,_t,Rt,Pt,Gt,Xt,It,oe,ve,be=C.isCompressedTexture?C.mipmaps[Z]:C.image;j!==null?(pt=j.max.x-j.min.x,_t=j.max.y-j.min.y,Rt=j.isBox3?j.max.z-j.min.z:1,Pt=j.min.x,Gt=j.min.y,Xt=j.isBox3?j.min.z:0):(pt=be.width,_t=be.height,Rt=be.depth||1,Pt=0,Gt=0,Xt=0),et!==null?(It=et.x,oe=et.y,ve=et.z):(It=0,oe=0,ve=0);let en=gt.convert(X.format),le=gt.convert(X.type),Ut;X.isData3DTexture?(I.setTexture3D(X,0),Ut=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Ut=H.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Ut=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);let hi=H.getParameter(H.UNPACK_ROW_LENGTH),ce=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Rn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ts=H.getParameter(H.UNPACK_SKIP_ROWS),hn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Pt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);let Tr=C.isDataArrayTexture||C.isData3DTexture,Me=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let qn=Dt.get(C),Er=Dt.get(X),bn=Dt.get(qn.__renderTarget),Ii=Dt.get(Er.__renderTarget);kt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Li=0;Li<Rt;Li++)Tr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.get(C).__webglTexture,Z,Xt+Li),C.isDepthTexture?(Me&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.get(X).__webglTexture,Z,ve+Li),H.blitFramebuffer(Pt,Gt,pt,_t,It,oe,pt,_t,H.DEPTH_BUFFER_BIT,H.NEAREST)):Me?H.copyTexSubImage3D(Ut,Z,It,oe,ve+Li,Pt,Gt,pt,_t):H.copyTexSubImage2D(Ut,Z,It,oe,ve+Li,Pt,Gt,pt,_t);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Me?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ut,Z,It,oe,ve,pt,_t,Rt,en,le,be.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Ut,Z,It,oe,ve,pt,_t,Rt,en,be.data):H.texSubImage3D(Ut,Z,It,oe,ve,pt,_t,Rt,en,le,be):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Z,It,oe,pt,_t,en,le,be.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Z,It,oe,be.width,be.height,en,be.data):H.texSubImage2D(H.TEXTURE_2D,Z,It,oe,pt,_t,en,le,be);H.pixelStorei(H.UNPACK_ROW_LENGTH,hi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ce),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Rn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ts),H.pixelStorei(H.UNPACK_SKIP_IMAGES,hn),Z===0&&X.generateMipmaps&&H.generateMipmap(Ut),kt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,j=null,et=null,Z=0){return C.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,et=arguments[1]||null,C=arguments[2],X=arguments[3],Z=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,j,et,Z)},this.initRenderTarget=function(C){Dt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,kt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var ua=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},zc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new F,Kn=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Hc=class extends Wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new F,fa=new F,gd=new Ee,Ir=new Hr,Bo=new Nn,Ul=new F,xd=new F,Vc=class extends pn{constructor(t=new pe,e=new Hc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;gd.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),y=Oo(this,t,Ir,l,p,_);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Oo(this,t,Ir,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Oo(this,t,Ir,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Oo(this,t,Ir,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,Ul,xd)>i)return;Ul.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:xd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var vd=new F,yd=new F,Qs=class extends Vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)vd.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vd.distanceTo(yd);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gc=class extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_d=new Ee,Wc=new Hr,zo=new Nn,Ho=new F,Xi=class extends pn{constructor(t=new pe,e=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;_d.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Ho.fromBufferAttribute(u,m),bd(Ho,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ho.fromBufferAttribute(u,g),bd(Ho,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bd(n,t,e,i,s,r,o){let a=Wc.distanceSqToPoint(n);if(a<e){let l=new F;Wc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new F,s=[],r=[],o=[],a=new F,l=new Ee;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pa=class extends Bn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xc=class extends pa{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Vo=new F,kl=new wh,Dl=new wh,Fl=new wh,Wr=class extends Bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vo.subVectors(s[0],s[1]).add(s[0]),c=Vo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(kl.calc(l),Dl.calc(l),Fl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Md(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function cy(n,t){let e=1-n;return e*e*t}function hy(n,t){return 2*(1-n)*n*t}function uy(n,t){return n*n*t}function Nr(n,t,e,i){return cy(n,t)+hy(n,e)+uy(n,i)}function dy(n,t){let e=1-n;return e*e*e*t}function fy(n,t){let e=1-n;return 3*e*e*n*t}function py(n,t){return 3*(1-n)*n*n*t}function my(n,t){return n*n*n*t}function Br(n,t,e,i,s){return dy(n,t)+fy(n,e)+py(n,i)+my(n,s)}var Zc=class extends Bn{constructor(t=new Tt,e=new Tt,i=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Tt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(t,s.x,r.x,o.x,a.x),Br(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends Bn{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(t,s.x,r.x,o.x,a.x),Br(t,s.y,r.y,o.y,a.y),Br(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends Bn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends Bn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends Bn{constructor(t=new Tt,e=new Tt,i=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Tt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Bn{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y),Nr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Md(a,l.x,c.x,h.x,u.x),Md(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},gy=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Wr,CubicBezierCurve:Zc,CubicBezierCurve3:qc,EllipseCurve:pa,LineCurve:$c,LineCurve3:Yc,QuadraticBezierCurve:Jc,QuadraticBezierCurve3:ma,SplineCurve:Kc});var ga=class n extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xa=class n extends pe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function _(){let v=new F,T=new F,S=0,w=(e-t)/i;for(let R=0;R<=r;R++){let b=[],M=R/r,E=M*(e-t)+t;for(let D=0;D<=s;D++){let k=D/s,B=k*l+a,L=Math.sin(B),P=Math.cos(B);T.x=E*L,T.y=-M*i+m,T.z=E*P,u.push(T.x,T.y,T.z),v.set(L,w,P).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-M),b.push(g++)}x.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){let M=x[b][R],E=x[b+1][R],D=x[b+1][R+1],k=x[b][R+1];(t>0||b!==0)&&(h.push(M,E,k),S+=3),(e>0||b!==r-1)&&(h.push(E,D,k),S+=3)}c.addGroup(p,S,0),p+=S}function y(v){let T=g,S=new Tt,w=new F,R=0,b=v===!0?t:e,M=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let E=g;for(let D=0;D<=s;D++){let B=D/s*l+a,L=Math.cos(B),P=Math.sin(B);w.x=b*P,w.y=m*M,w.z=b*L,u.push(w.x,w.y,w.z),d.push(0,M,0),S.x=L*.5+.5,S.y=P*.5*M+.5,f.push(S.x,S.y),g++}for(let D=0;D<s;D++){let k=T+D,B=E+D;v===!0?h.push(B,B+1,k):h.push(B+1,B,k),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Xr=class n extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,u=new F,d=new F;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var va=class n extends pe{constructor(t=new ma(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new Tt,h=new F,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),p()}function m(y){h=t.getPointAt(y/e,h);let v=o.normals[y],T=o.binormals[y];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,R=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+R*T.x,l.y=b*v.y+R*T.y,l.z=b*v.z+R*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let T=(s+1)*(y-1)+(v-1),S=(s+1)*y+(v-1),w=(s+1)*y+v,R=(s+1)*(y-1)+v;g.push(T,S,R),g.push(S,w,R)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)c.x=y/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new gy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ya=class extends pe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new F,r=new F;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let g=d,x=d+f;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),_=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,_),wd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),wd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ie(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function wd(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}var _a=class extends ne{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function Go(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var tr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jc=class extends tr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=t,a=2*e-i;break;case Mu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:o=t,l=2*i-e;break;case Mu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+_*o[c+T]+y*o[l+T]+v*o[u+T];return r}},Qc=class extends tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},th=class extends tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jo:e=this.InterpolantFactoryMethodDiscrete;break;case Mc:e=this.InterpolantFactoryMethodLinear;break;case ol:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&xy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Mc;var hs=class extends On{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Jo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends On{};eh.prototype.ValueTypeName="color";var nh=class extends On{};nh.prototype.ValueTypeName="number";var ih=class extends tr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ba=class extends On{InterpolantFactoryMethodLinear(t){return new ih(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends On{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Jo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends On{};sh.prototype.ValueTypeName="vector";var rh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},vy=new rh,oh=class{constructor(t){this.manager=t!==void 0?t:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ma=class extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var wa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Sd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Sd(){return performance.now()}var Sh="\\[\\]\\.:\\/",yy=new RegExp("["+Sh+"]","g"),Th="[^"+Sh+"]",_y="[^"+Sh.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",Th),My=/(WCOD+)?/.source.replace("WCOD",_y),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Ty=new RegExp("^"+by+My+wy+Sy+"$"),Ey=["material","materials","bones","map"],ah=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(t){let e=Ty.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ey.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=ah;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yb=new Float32Array(1);var ds=class extends zc{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Td=new F,Wo=new F,Sa=class{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Td.subVectors(t,this.start),Wo.subVectors(this.end,this.start);let i=Wo.dot(Wo),r=Wo.dot(Td)/i;return e&&(r=Ne(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);var Ca={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ay=new Gr(-1,1,1,-1,0,1),Ah=class extends pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Cy=new Ah,Zi=class{constructor(t){this._mesh=new we(Cy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ay)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ra=class extends xn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gn.clone(t.uniforms),this.material=new ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Zi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zr=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pa=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ia=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Tt);this._width=i.width,this._height=i.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ra(Ca),this.copyPass.material.blending=Jn,this.clock=new wa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(o instanceof Zr?i=!0:o instanceof Pa&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var La=class extends xn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Yd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ir=class n extends xn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Oe(r,o,{type:mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Oe(r,o,{type:mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Yd;this.highPassUniforms=gn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ne({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ca;this.copyUniforms=gn.clone(h.uniforms),this.blendMaterial=new ne({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new Ks,this.fsQuad=new Zi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ir.BlurDirectionX=new Tt(1,0);ir.BlurDirectionY=new Tt(0,1);var Jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ua=class extends xn{constructor(){super();let t=Jd;this.uniforms=gn.clone(t.uniforms),this.material=new _a({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ph&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kd=1.67+.67*Math.cos(-Math.PI/2-.5),Ch=1.15/.67,se={rmin:.84,rmax:2.54,zmin:-1.6,zmax:1.6},sr={r0:1.7,a:.72,ku:1.95,kl:2.05,d:.42};function fs(n){let t=sr.r0+sr.a*Math.cos(n+sr.d*Math.sin(n)),e=Math.sin(n)>=0?sr.ku:sr.kl;return[t,e*sr.a*Math.sin(n)]}var tf=[[.8,.2],[.8,.56],[.8,.92],[.86,1.3],[1.14,1.66],[1.72,1.7],[2.34,1.46],[2.7,.98],[2.78,.36]],Ry=tf.map(([n,t],e)=>e===3?[.86,-1.42]:e===4?[1.16,-1.86]:[n,-t]),Rh=tf.map(([n,t])=>({R:n,Z:t})).concat(Ry.map(([n,t])=>({R:n,Z:t})));function Py(n){let t=1.67+.67*Math.cos(n+.5*Math.sin(n));if(n>=0&&n<=Math.PI)return[t,1.8*.67*Math.sin(n)];let e=n+Math.PI/2,i=Math.cos(e),s=i*i,r=.67*Math.cos(.5)/(Ch*.67),o=i*(1-s)+(1-r*Math.abs(Math.sin(e)))*s;return[t,-Ch*.67*o]}var jd=.03*.03,Qd=.14*.14;function Iy(){let n=[],i=0;for(let s=0;s<12;s++){let r=(s+.5)/12*.97;for(let o=0;o<40;o++){let a=-Math.PI+(o+.5)/40*2*Math.PI,l=a>=0?1.8:Ch*.96,c=1.67+r*.67*Math.cos(a+.5*r*Math.sin(a))+.06*(1-r*r),h=r*l*.67*Math.sin(a),u=(1-r*r)**1.2*r;n.push(c,h,u),i+=u}}for(let s=2;s<n.length;s+=3)n[s]/=i;return new Float64Array(n)}function Ly(n,t){let e=t.length,i=n.map((s,r)=>s.concat([t[r]]));for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(i[o][s])>Math.abs(i[r][s])&&(r=o);[i[s],i[r]]=[i[r],i[s]];for(let o=0;o<e;o++){if(o===s)continue;let a=i[o][s]/i[s][s];for(let l=s;l<=e;l++)i[o][l]-=a*i[s][l]}}return i.map((s,r)=>s[e]/s[r])}function ef(){let n=Iy(),t=n.length/3,e=Rh,i=e.length,s=(U,G)=>{let Q=0;for(let O=0;O<t;O++){let Y=U-n[3*O],K=G-n[3*O+1];Q+=n[3*O+2]*.5*Math.log(Y*Y+K*K+jd)}return Q},r=(U,G)=>{let Q=0,O=0;for(let Y=0;Y<t;Y++){let K=U-n[3*Y],dt=G-n[3*Y+1],At=n[3*Y+2]/(K*K+dt*dt+jd);Q+=At*K,O+=At*dt}return[Q,O]},o=(U,G,Q)=>{let O=U-e[Q].R,Y=G-e[Q].Z;return .5*Math.log(O*O+Y*Y+Qd)},a=(U,G,Q)=>{let O=U-e[Q].R,Y=G-e[Q].Z,K=1/(O*O+Y*Y+Qd);return[K*O,K*Y]},l=[],c=[],h=96;for(let U=0;U<h;U++){let G=-Math.PI+(U+.5)/h*2*Math.PI,[Q,O]=Py(G),Y=[];for(let K=0;K<i;K++)Y.push(o(Q,O,K));Y.push(-1),l.push(Y),c.push(-s(Q,O))}let u=6;{let U=Kd,G=-1.15,Q=r(U,G),O=[],Y=[],K=[];for(let dt=0;dt<i;dt++){let At=a(U,G,dt);O.push(u*At[0]),Y.push(u*At[1]),K.push(u*o(U,G,dt))}O.push(0),Y.push(0),K.push(-u),l.push(O,Y,K),c.push(-u*Q[0],-u*Q[1],-u*s(U,G))}let d=i+1,f=2e-6,g=Array.from({length:d},()=>new Array(d).fill(0)),x=new Array(d).fill(0);for(let U=0;U<l.length;U++)for(let G=0;G<d;G++){x[G]+=l[U][G]*c[U];for(let Q=0;Q<d;Q++)g[G][Q]+=l[U][G]*l[U][Q]}for(let U=0;U<i;U++)g[U][U]+=f;let p=Ly(g,x).slice(0,i),_=(U,G)=>{let Q=s(U,G);for(let O=0;O<i;O++)Q+=p[O]*o(U,G,O);return Q},y=(U,G)=>{let Q=r(U,G);for(let O=0;O<i;O++){let Y=a(U,G,O);Q[0]+=p[O]*Y[0],Q[1]+=p[O]*Y[1]}return Q},v=(U,G)=>{for(let O=0;O<40;O++){let Y=y(U,G),K=y(U+1e-4,G),dt=y(U,G+1e-4),At=(K[0]-Y[0])/1e-4,yt=(dt[0]-Y[0])/1e-4,Lt=(K[1]-Y[1])/1e-4,H=(dt[1]-Y[1])/1e-4,Wt=At*H-yt*Lt,Ft=(H*Y[0]-yt*Y[1])/Wt,Ht=(-Lt*Y[0]+At*Y[1])/Wt;if(U-=Ft,G-=Ht,Math.abs(Ft)+Math.abs(Ht)<1e-9)break}return[U,G]},T=v(1.67+.06,0),S=v(Kd,-1.15),w=_(T[0],T[1]),R=_(S[0],S[1]),b=171,M=321,E=new Float32Array(b*M),D=(se.rmax-se.rmin)/(b-1),k=(se.zmax-se.zmin)/(M-1),B=1/(R-w);for(let U=0;U<M;U++){let G=se.zmin+U*k;for(let Q=0;Q<b;Q++)E[U*b+Q]=(_(se.rmin+Q*D,G)-w)*B}let L=(U,G)=>{let Q=(U-se.rmin)/D,O=(G-se.zmin)/k;Q=Math.max(0,Math.min(b-1.001,Q)),O=Math.max(0,Math.min(M-1.001,O));let Y=Q|0,K=O|0,dt=Q-Y,At=O-K,yt=K*b+Y;return(E[yt]*(1-dt)+E[yt+1]*dt)*(1-At)+(E[yt+b]*(1-dt)+E[yt+b+1]*dt)*At},P=512,z=65,W=new Float32Array(z*P),it=.004;for(let U=0;U<P;U++){let G=U/P*2*Math.PI,Q=Math.cos(G),O=Math.sin(G),Y=0,K=0,dt=1,At=L(T[0],T[1]);for(;dt<z&&K<2;){K+=it;let yt=L(T[0]+K*Q,T[1]+K*O);for(;dt<z;){let Lt=(dt/(z-1))**2;if(yt<Lt)break;let H=(Lt-At)/Math.max(1e-9,yt-At);W[dt*P+U]=Y+H*it,dt++}At=yt,Y=K}for(;dt<z;dt++)W[dt*P+U]=K}let J=(U,G,Q=[0,0])=>{let O=G/(2*Math.PI)*P;O=(O%P+P)%P;let Y=O|0,K=O-Y,dt=(Y+1)%P,At=Math.max(0,Math.min(z-1.0001,U*(z-1))),yt=At|0,Lt=At-yt,H=W[yt*P+Y]*(1-K)+W[yt*P+dt]*K,Wt=W[(yt+1)*P+Y]*(1-K)+W[(yt+1)*P+dt]*K,Ft=H*(1-Lt)+Wt*Lt;return Q[0]=T[0]+Ft*Math.cos(G),Q[1]=T[1]+Ft*Math.sin(G),Q},ht=[];for(let U=0;U<256;U++)ht.push(fs(U/256*2*Math.PI));let q=(U,G)=>{let Q=!1;for(let O=0,Y=ht.length-1;O<ht.length;Y=O++){let[K,dt]=ht[O],[At,yt]=ht[Y];dt>G!=yt>G&&U<(At-K)*(G-dt)/(yt-dt)+K&&(Q=!Q)}return Q};return{axis:T,xpt:S,psiN:L,surf:J,contour:(U,G)=>{let Q=[],O=(Y,K)=>[se.rmin+Y*D,se.zmin+K*k];for(let Y=0;Y<M-1;Y++)for(let K=0;K<b-1;K++){let dt=[E[Y*b+K],E[Y*b+K+1],E[(Y+1)*b+K+1],E[(Y+1)*b+K]],At=[[K,Y],[K+1,Y],[K+1,Y+1],[K,Y+1]],yt=[];for(let Lt=0;Lt<4;Lt++){let H=dt[Lt],Wt=dt[(Lt+1)%4];if(H<U!=Wt<U){let Ft=(U-H)/(Wt-H),Ht=O(...At[Lt]),kt=O(...At[(Lt+1)%4]);yt.push([Ht[0]+Ft*(kt[0]-Ht[0]),Ht[1]+Ft*(kt[1]-Ht[1])])}}for(let Lt=0;Lt+1<yt.length;Lt+=2){let H=[(yt[Lt][0]+yt[Lt+1][0])/2,(yt[Lt][1]+yt[Lt+1][1])/2];q(H[0],H[1])&&(!G||G(H[0],H[1]))&&Q.push(yt[Lt][0],yt[Lt][1],yt[Lt+1][0],yt[Lt+1][1])}}return Q},inVessel:q,coilCurrents:p,rtab:W,NA:P,NRHO:z}}var ka=(n,t)=>t*(1+3*n*n);var nf=new Sn,Da=new F,rr=class extends Ma{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ie(t,3)),this.setAttribute("uv",new ie(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ds(e,6,1);return this.setAttribute("instanceStart",new Kn(i,3,0)),this.setAttribute("instanceEnd",new Kn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ds(e,6,1);return this.setAttribute("instanceColorStart",new Kn(i,3,0)),this.setAttribute("instanceColorEnd",new Kn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ya(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),nf.setFromBufferAttribute(e),this.boundingBox.union(nf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Da.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Da)),Da.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Da));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};mt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};je.line={uniforms:gn.merge([mt.common,mt.fog,mt.line]),vertexShader:`
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
		`};var or=class extends ne{static get type(){return"LineMaterial"}constructor(t){super({uniforms:gn.clone(je.line.uniforms),vertexShader:je.line.vertexShader,fragmentShader:je.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ph=new me,sf=new F,rf=new F,ze=new me,He=new me,Qn=new me,Ih=new F,Lh=new Ee,Ve=new Sa,of=new F,Fa=new Sn,Na=new Nn,ti=new me,ei,ps;function af(n,t,e){return ti.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ti.multiplyScalar(1/ti.w),ti.x=ps/e.width,ti.y=ps/e.height,ti.applyMatrix4(n.projectionMatrixInverse),ti.multiplyScalar(1/ti.w),Math.abs(Math.max(ti.x,ti.y))}function Uy(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Ve.start.fromBufferAttribute(s,a),Ve.end.fromBufferAttribute(r,a),Ve.applyMatrix4(e);let c=new F,h=new F;ei.distanceSqToSegment(Ve.start,Ve.end,h,c),h.distanceTo(c)<ps*.5&&t.push({point:h,pointOnLine:c,distance:ei.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function ky(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-t.near;ei.at(1,Qn),Qn.w=1,Qn.applyMatrix4(t.matrixWorldInverse),Qn.applyMatrix4(i),Qn.multiplyScalar(1/Qn.w),Qn.x*=r.x/2,Qn.y*=r.y/2,Qn.z=0,Ih.copy(Qn),Lh.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(ze.fromBufferAttribute(l,d),He.fromBufferAttribute(c,d),ze.w=1,He.w=1,ze.applyMatrix4(Lh),He.applyMatrix4(Lh),ze.z>u&&He.z>u)continue;if(ze.z>u){let y=ze.z-He.z,v=(ze.z-u)/y;ze.lerp(He,v)}else if(He.z>u){let y=He.z-ze.z,v=(He.z-u)/y;He.lerp(ze,v)}ze.applyMatrix4(i),He.applyMatrix4(i),ze.multiplyScalar(1/ze.w),He.multiplyScalar(1/He.w),ze.x*=r.x/2,ze.y*=r.y/2,He.x*=r.x/2,He.y*=r.y/2,Ve.start.copy(ze),Ve.start.z=0,Ve.end.copy(He),Ve.end.z=0;let x=Ve.closestPointToPointParameter(Ih,!0);Ve.at(x,of);let m=zd.lerp(ze.z,He.z,x),p=m>=-1&&m<=1,_=Ih.distanceTo(of)<ps*.5;if(p&&_){Ve.start.fromBufferAttribute(l,d),Ve.end.fromBufferAttribute(c,d),Ve.start.applyMatrix4(o),Ve.end.applyMatrix4(o);let y=new F,v=new F;ei.distanceSqToSegment(Ve.start,Ve.end,v,y),e.push({point:v,pointOnLine:y,distance:ei.origin.distanceTo(v),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Ba=class extends we{constructor(t=new rr,e=new or({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)sf.fromBufferAttribute(e,o),rf.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+sf.distanceTo(rf);let r=new ds(s,2,1);return t.setAttribute("instanceDistanceStart",new Kn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Kn(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ei=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;ps=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Na.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ps*.5;else{let u=Math.max(s.near,Na.distanceToPoint(ei.origin));c=af(s,u,l.resolution)}if(Na.radius+=c,ei.intersectsSphere(Na)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Fa.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=ps*.5;else{let u=Math.max(s.near,Fa.distanceToPoint(ei.origin));h=af(s,u,l.resolution)}Fa.expandByScalar(h),ei.intersectsBox(Fa)!==!1&&(i?Uy(this,e):ky(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ph),this.material.uniforms.resolution.value.set(Ph.z,Ph.w))}};var ms=`
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
`,qr=`
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 mv = viewMatrix * w; vD = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,Uh=`
${ms}
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
}`,lf=qr,cf=`
${ms}
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
}`,hf=qr,uf=`
${ms}
uniform vec3 uColor; uniform float uI;
varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vD;
void main() {
  if (inWedge(vW)) discard;
  vec3 V = normalize(cameraPosition - vW);
  float nv = min(1.0, abs(dot(normalize(vN), V)));
  float limb = 0.18 + 0.82 * pow(1.0 - nv, 1.6);
  gl_FragColor = vec4(uColor * limb * uI * depthFade(vD), 1.0);
}`,df=`
attribute float aRho;
varying float vRho; varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vRho = aRho;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ff=`
uniform vec3 uHot; uniform vec3 uMid; uniform vec3 uDeep; uniform float uI;
varying float vRho; varying vec3 vW;
void main() {
  float r = vRho;
  vec3 c = mix(uHot, uMid, smoothstep(0.0, 0.55, r));
  c = mix(c, uDeep, smoothstep(0.55, 1.0, r));
  float b = 0.22 + 0.78 * pow(max(0.0, 1.0 - r * r), 1.2);
  b += 0.35 * smoothstep(0.86, 0.99, r);
  gl_FragColor = vec4(c * b * uI, 1.0);
}`,kh=`
${ms}
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
}`,Dh=`
${ms}
varying vec3 vC; varying vec3 vW; varying float vFade;
void main() {
  if (inWedge(vW)) discard;
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = dot(p, p);
  if (d > 1.0) discard;
  float a = exp(-d * 3.2);
  gl_FragColor = vec4(vC * a * vFade, 1.0);
}`,Oa=`
${ms}
attribute vec4 aColor;
uniform float uI;
varying vec4 vC; varying vec3 vW; varying float vFade;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vC = aColor; vC.rgb *= uI;
  vec4 mv = viewMatrix * w;
  vFade = depthFade(-mv.z);
  gl_Position = projectionMatrix * mv;
}`,za=`
${ms}
varying vec4 vC; varying vec3 vW; varying float vFade;
void main() {
  if (inWedge(vW)) discard;
  gl_FragColor = vec4(vC.rgb * vC.a * vFade, 1.0);
}`,pf=`
attribute float aBirth;
uniform float uTime; uniform float uPx; uniform float uTau;
varying float vA;
void main() {
  float age = uTime - aBirth;
  vA = age < 0.0 ? 0.0 : exp(-age / uTau) * smoothstep(0.0, 0.08, age);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uPx * (1.0 + 1.4 * exp(-age * 5.0));
  gl_Position = projectionMatrix * mv;
}`,mf=`
uniform vec3 uColor; uniform float uI;
varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = dot(p, p);
  if (d > 1.0 || vA < 0.003) discard;
  gl_FragColor = vec4(uColor * vA * uI * exp(-d * 2.0), 1.0);
}`,gf=`
attribute vec3 aColor; attribute float aDelay;
uniform float uPx; uniform float uP;
varying vec3 vC; varying float vA;
void main() {
  vC = aColor;
  float t = clamp((uP * 1.35 - aDelay) / 0.35, 0.0, 1.0);
  vA = t * t * (3.0 - 2.0 * t);
  gl_PointSize = uPx * (0.6 + 0.4 * vA);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,xf=`
varying vec3 vC; varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = length(p);
  float a = 1.0 - smoothstep(0.72, 1.0, d);
  if (a * vA < 0.01) discard;
  gl_FragColor = vec4(vC, a * vA);
}`;var Be=n=>new Ot(n);function yf(n,t,e){let i=new Float32Array((t+1)*(e+1)*3),s=new Float32Array((t+1)*(e+1)*2),r=[],o=0;for(let l=0;l<=e;l++){let c=l/e*Math.PI*2,h=Math.cos(c),u=Math.sin(c);for(let d=0;d<=t;d++){let[f,g]=n(d/t*Math.PI*2);i[3*o]=f*h,i[3*o+1]=g,i[3*o+2]=f*u,s[2*o]=l/e,s[2*o+1]=d/t,o++}}for(let l=0;l<e;l++)for(let c=0;c<t;c++){let h=l*(t+1)+c,u=h+t+1;r.push(h,u,h+1,u,u+1,h+1)}let a=new pe;return a.setAttribute("position",new ee(i,3)),a.setAttribute("uv",new ee(s,2)),a.setIndex(r),a.computeVertexNormals(),a}function _f(){return{uWedge:{value:0},uFogNear:{value:6},uFogFar:{value:12}}}function Ha(n,t,e,i={}){return new ne({vertexShader:n,fragmentShader:t,uniforms:e,...i})}function bf(n,t){let e=yf(fs,180,200),i=Ha(qr,Uh,{...n,uColor:{value:Be("#1a2030")},uRim:{value:Be("#8a93a8")},uOpacity:{value:1}},{transparent:!0,depthWrite:!1,side:sn}),s=new we(e,i);return s.renderOrder=2,s}function Dy(){let s=1.1800000000000002,r=[],o=200;for(let a=0;a<o;a++){let l=a/o*Math.PI*2,c=Math.cos(l),h=Math.sin(l),u=c<0?9:2.4,d=c<0?5:2.4,f=1.88+s*Math.sign(c)*Math.pow(Math.abs(c),2/u),g=2.05*Math.sign(h)*Math.pow(Math.abs(h),2/d);r.push(new F(f,g,0))}return new Wr(r,!0,"centripetal")}var $r=18;function Mf(n,t){let e=new fn,i=Ha(lf,cf,{...n,uColor:{value:Be(t.coil)},uOpacity:{value:1},uGlow:{value:.05}},{transparent:!0}),s=new va(Dy(),260,.017,6,!0),r=new fn;for(let d=0;d<$r;d++){let f=new we(s,i);f.rotation.y=-((d+.5)/$r)*Math.PI*2,r.add(f)}e.add(r);let o=new fn;Rh.forEach((d,f)=>{let g=d.R<1?.024:.034,x=new Xr(d.R,g,8,220);x.rotateX(Math.PI/2),x.translate(0,d.Z,0),o.add(new we(x,i))}),e.add(o);let a=new fn,l=new Xr(.5,.008,5,96);l.rotateX(Math.PI/2);let c=44;for(let d=0;d<c;d++){let f=new we(l,i);f.position.y=-1.62+3.24*d/(c-1),a.add(f)}let h=Ha(qr,Uh,{...n,uColor:{value:Be("#2a1d0c")},uRim:{value:Be(t.coil)},uOpacity:{value:.55}},{transparent:!0,depthWrite:!1,side:sn}),u=new we(new xa(.47,.47,3.3,64,1,!0),h);return a.add(u),e.add(a),{group:e,tf:r,pf:o,cs:a,coilMat:i,shellMat:h}}function wf(n,t,e){let i=[.22,.42,.6,.76,.9,1],s=Be(e.plasmaHot),r=Be(e.plasma),o=Be(e.plasmaDeep),a=new fn,l=[];return i.forEach(c=>{let h=yf(x=>t.surf(c,x),160,180),u=c<.5?s.clone().lerp(r,c/.5):r.clone().lerp(o,(c-.5)/.5),d=c<.3?.085:c<.7?.055:c<.95?.04:.045,f=Ha(hf,uf,{...n,uColor:{value:u.multiplyScalar(d)},uI:{value:0}},{transparent:!0,depthWrite:!1,blending:qe,side:sn});l.push(f);let g=new we(h,f);g.renderOrder=3,a.add(g)}),{group:a,mats:l}}function Sf(n,t){let s=[],r=[],o=[],a=[0,0];for(let u=0;u<=40;u++){let d=u/40;for(let f=0;f<256;f++)n.surf(d,f/256*Math.PI*2,a),s.push(a[0],a[1],0),r.push(d)}for(let u=0;u<40;u++)for(let d=0;d<256;d++){let f=u*256+d,g=u*256+(d+1)%256,x=f+256,m=g+256;o.push(f,x,g,g,x,m)}let l=new pe;l.setAttribute("position",new ie(s,3)),l.setAttribute("aRho",new ie(r,1)),l.setIndex(o);let c={uHot:{value:Be(t.plasmaHot).multiplyScalar(.3)},uMid:{value:Be(t.plasma).multiplyScalar(.22)},uDeep:{value:Be(t.plasmaDeep).multiplyScalar(.3)},uI:{value:0}},h=()=>{let u=new ne({vertexShader:df,fragmentShader:ff,uniforms:gn.clone(c),transparent:!0,depthWrite:!1,blending:qe,side:sn}),d=new we(l,u);return d.renderOrder=4,d};return{a:h(),b:h()}}function ar(n,t,e,i,s=.004){let r=new Float32Array(n.length/4*6);for(let c=0,h=0;c<n.length;c+=4,h+=6)r[h]=n[c],r[h+1]=n[c+1],r[h+2]=s,r[h+3]=n[c+2],r[h+4]=n[c+3],r[h+5]=s;let o=new rr;o.setPositions(r);let a=new or({color:t,linewidth:e,transparent:!0,opacity:i,depthWrite:!1});a.userData.baseOpacity=i,a.userData.baseWidth=e;let l=new Ba(o,a);return l.renderOrder=6,l}function Tf(n,t){let e=new fn,i=[0,0],s=m=>{let p=[],y=n.surf(m,0,[0,0]);for(let v=1;v<=384;v++){let T=n.surf(m,v/384*Math.PI*2,[0,0]);p.push(y[0],y[1],T[0],T[1]),y=T}return p},r=[];[.15,.3,.45,.6,.72,.83,.92].forEach(m=>r.push(...s(m)));let o=new Ot(t.flux),a=ar(r,o,1.6,.62),l=n.xpt[1],c=n.contour(1,(m,p)=>!0),h=ar(c,new Ot("#c9f6ff"),2.6,1,.005),u=[...n.contour(1.045),...n.contour(1.11)],d=ar(u,o,1.2,.32),f=[],g=fs(0);for(let m=1;m<=256;m++){let p=fs(m/256*Math.PI*2);f.push(g[0],g[1],p[0],p[1]),g=p}let x=ar(f,new Ot("#8a93a8"),1.6,.55,.003);return e.add(a,h,d,x),{group:e,lines:[a,h,d,x],vesselLine:x,vesselSegs:f}}function Fh(n){let t=[[0,[.93,.99,1]],[.45,[.55,.92,1]],[1,[.24,.76,.95]],[1.6,[.1,.34,.6]],[2.6,[.07,.13,.3]]];n=Math.max(0,Math.min(2.6,n));for(let e=1;e<t.length;e++)if(n<=t[e][0]){let[i,s]=t[e-1],[r,o]=t[e],a=(n-i)/(r-i);return s.map((l,c)=>l+(o[c]-l)*a)}return t[t.length-1][1]}function Ef(n){let t=n.xpt[1],e=65,i=new Float32Array(e*e*3),s=new Float32Array(e*e*3),r=new Float32Array(e*e),o=new Float32Array(e*e),a=0;for(let u=0;u<e;u++){let d=se.zmin+u/(e-1)*(se.zmax-se.zmin);for(let f=0;f<e;f++){let g=se.rmin+f/(e-1)*(se.rmax-se.rmin),x=n.psiN(g,d);o[a]=x,i[3*a]=g,i[3*a+1]=d,i[3*a+2]=.008;let m=x<1&&d>t,p=new Ot().setRGB(...Fh(m?x:Math.max(x,.85)).map(_=>_*.78),nn);s[3*a]=p.r,s[3*a+1]=p.g,s[3*a+2]=p.b,r[a]=f/(e-1)*.75+Math.abs(u-32)/32*.12,a++}}let l=new pe;l.setAttribute("position",new ee(i,3)),l.setAttribute("aColor",new ee(s,3)),l.setAttribute("aDelay",new ee(r,1));let c=new ne({vertexShader:gf,fragmentShader:xf,uniforms:{uPx:{value:6},uP:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1}),h=new Xi(l,c);return h.renderOrder=8,h.frustumCulled=!1,{points:h,mat:c,vals:o}}var on=Math.PI*2,Fy=n=>n>Math.PI?n-on:n<-Math.PI?n+on:n;function Af(n,t,e,{max:i=7e3}={}){let r=Array.from({length:15},(gt,Vt)=>.1+.88*Vt/14),o=Be(e.plasmaHot),a=Be(e.plasma),l=Be(e.plasmaDeep),c=gt=>gt<.5?o.clone().lerp(a,gt/.5):a.clone().lerp(l,Math.min(1,(gt-.5)/.55)),h=new Float32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),g=new Float32Array(i*3),x=new Float32Array(i*3),m=new Float32Array(i),p=new Float32Array(i*6),_=new Float32Array(i*8),y=12345,v=()=>(y=y*16807%2147483647)/2147483647;for(let gt=0;gt<i;gt++){let Vt=Math.min(14,Math.floor(Math.sqrt(v())*15));h[gt]=r[Vt]+(v()-.5)*.006,u[gt]=v()*on,d[gt]=(v()-.5)*on;let N=v()<.78?1:-1;f[gt]=N*(.32+.5*v());let ut=c(h[gt]).multiplyScalar(.55+.45*v());x.set([ut.r,ut.g,ut.b],gt*3),m[gt]=.7+.9*v(),_.set([ut.r,ut.g,ut.b,.38,ut.r,ut.g,ut.b,0],gt*8)}let T=new pe;T.setAttribute("position",new ee(g,3).setUsage(jn)),T.setAttribute("aColor",new ee(x,3)),T.setAttribute("aSize",new ee(m,1));let S=new ne({vertexShader:kh,fragmentShader:Dh,uniforms:{...t,uPx:{value:3},uI:{value:0}},transparent:!0,depthWrite:!1,blending:qe}),w=new Xi(T,S);w.frustumCulled=!1,w.renderOrder=5;let R=new pe;R.setAttribute("position",new ee(p,3).setUsage(jn)),R.setAttribute("aColor",new ee(_,4));let b=new ne({vertexShader:Oa,fragmentShader:za,uniforms:{...t,uI:{value:0}},transparent:!0,depthWrite:!1,blending:qe}),M=new Qs(R,b);M.frustumCulled=!1,M.renderOrder=5;let E=7e3,D=new Float32Array(E*3),k=new Float32Array(E).fill(-1e9),B=new pe;B.setAttribute("position",new ee(D,3).setUsage(jn)),B.setAttribute("aBirth",new ee(k,1).setUsage(jn));let L=new ne({vertexShader:pf,fragmentShader:mf,uniforms:{uTime:{value:0},uPx:{value:4},uTau:{value:4.5},uColor:{value:Be("#ffd6f1").multiplyScalar(.9)},uI:{value:0}},transparent:!0,depthWrite:!1,blending:qe}),P=new Xi(B,L);P.frustumCulled=!1,P.renderOrder=7;let z=0,W=E,it=-1,J=(gt,Vt,N)=>{let ut=z;D[3*ut]=gt,D[3*ut+1]=Vt,D[3*ut+2]=.006,k[ut]=N,W=Math.min(W,ut),it=Math.max(it,ut),z=(z+1)%E},ht=18,q=Array.from({length:ht},()=>({alive:!1})),rt=new Float32Array(ht*2*3),U=new Float32Array(ht*2*3),G=new Float32Array(ht*2),Q=new pe;Q.setAttribute("position",new ee(rt,3).setUsage(jn)),Q.setAttribute("aColor",new ee(U,3).setUsage(jn)),Q.setAttribute("aSize",new ee(G,1).setUsage(jn));let O=new ne({vertexShader:kh,fragmentShader:Dh,uniforms:{...t,uPx:{value:3},uI:{value:1}},transparent:!0,depthWrite:!1,blending:qe}),Y=new Xi(Q,O);Y.frustumCulled=!1,Y.renderOrder=6;let K=10,dt=new Float32Array(ht*2*K*6),At=new Float32Array(ht*2*K*8),yt=new pe;yt.setAttribute("position",new ee(dt,3).setUsage(jn)),yt.setAttribute("aColor",new ee(At,4).setUsage(jn));let Lt=new Qs(yt,new ne({vertexShader:Oa,fragmentShader:za,uniforms:{...t,uI:{value:1}},transparent:!0,depthWrite:!1,blending:qe}));Lt.frustumCulled=!1,Lt.renderOrder=6;let H=Be("#e9f1ff"),Wt=Be("#fff0c8"),Ft=new ne({vertexShader:Oa,fragmentShader:za,uniforms:{...t,uI:{value:0}},transparent:!0,depthWrite:!1,blending:qe}),Ht=[[.38,3],[.66,5],[.9,7]],kt=7,ae=220,Dt=Ht.reduce((gt,Vt)=>gt+Vt[1],0)*kt*ae,I=new Float32Array(Dt*6),A=new Float32Array(Dt*8),$=new pe;$.setAttribute("position",new ee(I,3)),$.setAttribute("aColor",new ee(A,4));let ct=new Qs($,Ft);ct.frustumCulled=!1,ct.renderOrder=4;let st=[0,0],ot=1,Ct=()=>{let gt=0,Vt=[0,0,0];for(let[N,ut]of Ht){let tt=c(N),at=ka(N,ot);for(let xt=0;xt<ut;xt++){let lt=xt/ut*on;for(let Et=0;Et<kt*ae;Et++){let qt=Et/ae*on,ue=(Et+1)/ae*on;for(let re=0;re<2;re++){let Ce=re?ue:qt;n.surf(N,lt+Ce/at,st),I[gt*6+re*3]=st[0]*Math.cos(Ce),I[gt*6+re*3+1]=st[1],I[gt*6+re*3+2]=st[0]*Math.sin(Ce)}let Jt=.5;A.set([tt.r,tt.g,tt.b,Jt,tt.r,tt.g,tt.b,Jt],gt*8),gt++}}}$.attributes.position.needsUpdate=!0,$.attributes.aColor.needsUpdate=!0},vt=i,Mt=-1,Kt=0,ft=.24;function wt(gt,Vt){let N=q.find(qt=>!qt.alive);if(!N)return;let ut=.08+.42*Math.sqrt(Math.random()),tt=Math.random()*on,at=(Math.random()-.5)*on;Vt>.001&&(at=Fy(Vt+Math.random()*(on-Vt))),n.surf(ut,tt,st),N.alive=!0,N.t0=gt,N.rho=ut,N.th=tt,N.ph=at,N.th0=tt,N.ph0=at,N.p=[st[0]*Math.cos(at),st[1],st[0]*Math.sin(at)];let xt=Math.random()*2-1,lt=Math.random()*on,Et=Math.sqrt(1-xt*xt);N.d=[Et*Math.cos(lt),xt,Et*Math.sin(lt)],N.om=(Math.random()<.5?1:-1)*2.6}function Nt(gt,Vt,{intensity:N,eventsOn:ut,wedge:tt,recordDots:at,q:xt}){if(ot=xt,ot!==Mt&&(Ct(),Mt=ot),N>.002){for(let lt=0;lt<vt;lt++){let Et=h[lt],qt=ka(Et,ot),ue=f[lt]*Vt,Jt=d[lt],re=Jt+ue;u[lt]+=ue/qt,re>Math.PI?re-=on:re<-Math.PI&&(re+=on),d[lt]=re,n.surf(Et,u[lt],st);let Ce=st[0],Pi=st[1],Ji=Math.cos(re),We=Math.sin(re);g[3*lt]=Ce*Ji,g[3*lt+1]=Pi,g[3*lt+2]=Ce*We,p[6*lt]=Ce*Ji,p[6*lt+1]=Pi,p[6*lt+2]=Ce*We;let Pe=f[lt]>0?1:-1,yn=re-Pe*ft;n.surf(Et,u[lt]-Pe*ft/qt,st),p[6*lt+3]=st[0]*Math.cos(yn),p[6*lt+4]=st[1],p[6*lt+5]=st[0]*Math.sin(yn),at&&(Jt<0&&re>=0&&ue>0||Jt>=0&&re<0&&ue<0)&&Math.abs(ue)<1&&J(Ce,Pi,gt)}T.attributes.position.needsUpdate=!0,R.attributes.position.needsUpdate=!0}if(T.setDrawRange(0,vt),R.setDrawRange(0,vt*2),it>=W&&(B.attributes.position.needsUpdate=!0,B.attributes.aBirth.needsUpdate=!0,W=E,it=-1),L.uniforms.uTime.value=gt,ut){Kt+=Vt;let lt=2.6;for(;Kt>1/lt;)Kt-=1/lt*(.4+1.2*Math.random()),wt(gt,tt)}rt.fill(0),U.fill(0),G.fill(0),At.fill(0),q.forEach((lt,Et)=>{if(!lt.alive)return;let qt=gt-lt.t0;if(qt>2.4){lt.alive=!1;return}let ue=Math.exp(-qt*7)*(qt<.04?qt/.04:1);rt.set(lt.p,Et*6),U.set([ue*2.6,ue*2.4,ue*2.5],Et*6),G[Et*2]=3+16*Math.min(1,qt*6)*ue;let Jt=5.5,re=1.1,Ce=qt*Jt;for(let Pe=0;Pe<K;Pe++){let yn=Math.max(0,Ce-re*Pe/K),Ss=Math.max(0,Ce-re*(Pe+1)/K),Cn=Et*2*K+Pe;for(let ci=0;ci<2;ci++){let Sr=ci?Ss:yn;dt[Cn*6+ci*3]=lt.p[0]+lt.d[0]*Sr,dt[Cn*6+ci*3+1]=lt.p[1]+lt.d[1]*Sr,dt[Cn*6+ci*3+2]=lt.p[2]+lt.d[2]*Sr}let cn=Math.max(0,1-Ce/7.5),_n=Math.pow(1-Pe/K,1.5)*cn*2.6,uo=Math.pow(1-(Pe+1)/K,1.5)*cn*2.6;At.set([H.r,H.g,H.b,_n,H.r,H.g,H.b,uo],Cn*8)}let Pi=ka(lt.rho,ot),Ji=lt.ph0+lt.om*qt*(1-.18*qt),We=Math.max(0,1-qt/2.4);for(let Pe=0;Pe<K;Pe++){let yn=Et*2*K+K+Pe;for(let cn=0;cn<2;cn++){let _n=Ji-Math.sign(lt.om)*.06*(Pe+cn)*Math.min(1,qt*3);n.surf(lt.rho,lt.th0+(_n-lt.ph0)/Pi,st),dt[yn*6+cn*3]=st[0]*Math.cos(_n),dt[yn*6+cn*3+1]=st[1],dt[yn*6+cn*3+2]=st[0]*Math.sin(_n),Pe===0&&cn===0&&(rt.set([st[0]*Math.cos(_n),st[1],st[0]*Math.sin(_n)],Et*6+3),U.set([Wt.r*We*1.3,Wt.g*We*1.3,Wt.b*We*1.3],Et*6+3),G[Et*2+1]=2.6)}let Ss=(1-Pe/K)*We*.9,Cn=(1-(Pe+1)/K)*We*.9;At.set([Wt.r,Wt.g,Wt.b,Ss,Wt.r,Wt.g,Wt.b,Cn],yn*8)}}),Q.attributes.position.needsUpdate=!0,Q.attributes.aColor.needsUpdate=!0,Q.attributes.aSize.needsUpdate=!0,yt.attributes.position.needsUpdate=!0,yt.attributes.aColor.needsUpdate=!0}function zt(gt,Vt=4200){for(let N=0;N<Vt;N++){let ut=Math.random()*vt|0,tt=Math.random()*9;n.surf(h[ut],Math.random()*on,st),J(st[0],st[1],gt-tt)}}function St(){k.fill(-1e9),B.attributes.aBirth.needsUpdate=!0}function Qt(){q.forEach(gt=>gt.alive=!1)}return{heads:w,streaks:M,dots:P,evPts:Y,evLines:Lt,threads:ct,pointsMat:S,lineMat:b,dotMat:L,evMat:O,threadMat:Ft,evLineMat:Lt.material,update:Nt,seedDots:zt,clearDots:St,clearEvents:Qt,get nActive(){return vt},set nActive(gt){vt=Math.max(800,Math.min(i,gt|0))},max:i}}var gs={cx:1080,cy:450,pxPerM:620/(se.zmax-se.zmin),rc:(se.rmin+se.rmax)/2,zc:0};function Nh(n,t,e,i,s){let{ratio:r}=s(n),o=n.getContext("2d");o.setTransform(r,0,0,r,0,0),o.fillStyle=i.bg,o.fillRect(0,0,1600,900);let{cx:a,cy:l,pxPerM:c,rc:h}=gs,u=m=>a+(m-h)*c,d=m=>l-m*c;for(let m=0;m<65;m++)for(let p=0;p<65;p++){let _=se.rmin+p/64*(se.rmax-se.rmin),y=se.zmin+m/64*(se.zmax-se.zmin),v=e.psiN(_,y),T=Fh(v<1&&y>e.xpt[1]?v:Math.max(v,.85)).map(S=>Math.round(S*255));o.fillStyle=`rgba(${T[0]},${T[1]},${T[2]},0.55)`,o.beginPath(),o.arc(u(_),d(y),2.2,0,Math.PI*2),o.fill()}let f=o.createRadialGradient(u(e.axis[0]),d(e.axis[1]),0,u(e.axis[0]),d(e.axis[1]),160);f.addColorStop(0,"rgba(255,227,246,0.55)"),f.addColorStop(.6,"rgba(255,90,200,0.22)"),f.addColorStop(1,"rgba(122,44,255,0)"),o.fillStyle=f,o.beginPath();for(let m=0;m<=256;m++){let p=e.surf(1,m/256*Math.PI*2);m?o.lineTo(u(p[0]),d(p[1])):o.moveTo(u(p[0]),d(p[1]))}o.fill();let g=(m,p)=>{o.beginPath();for(let _=0;_<=p;_++){let y=m(_/p*Math.PI*2);_?o.lineTo(u(y[0]),d(y[1])):o.moveTo(u(y[0]),d(y[1]))}o.stroke()};o.strokeStyle="rgba(138,147,168,0.6)",o.lineWidth=1.6,g(fs,256),o.strokeStyle="rgba(98,228,255,0.6)",[.15,.3,.45,.6,.72,.83,.92].forEach(m=>g(p=>e.surf(m,p),256)),o.strokeStyle="#c9f6ff",o.lineWidth=2.6;let x=e.contour(1);o.beginPath();for(let m=0;m<x.length;m+=4)o.moveTo(u(x[m]),d(x[m+1])),o.lineTo(u(x[m+2]),d(x[m+3]));o.stroke()}var Si=1600,Ti=900,Pf=30,Ny=Ti/gs.pxPerM/(2*Math.tan(Pf/2*Math.PI/180)),Cf=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Bh=n=>Math.max(0,Math.min(1,n)),Hn=(n,t,e)=>n+(t-n)*e,By=(n,t)=>{let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},Rf=[{az:null,el:.36,dist:12.4,tx:0,ty:-.05,tz:0,sx:170,sy:10,drift:1},{az:null,el:.3,dist:10.6,tx:0,ty:-.05,tz:0,sx:150,sy:10,drift:1},{az:.6,el:.2,dist:8.3,tx:.95,ty:-.25,tz:.35,sx:80,sy:-10,drift:0},{az:0,el:0,dist:Ny,tx:gs.rc,ty:0,tz:0,sx:gs.cx-Si/2,sy:gs.cy-Ti/2,drift:0}],Oy=112*Math.PI/180,Oh=[{bloom:.7,coilDim:1,shell:.4,parts:0,threads:0,events:0,wedge:0,section:0,contours:0,dots:0,map:0,ghost:0,lCoils:1,lX:0,ctl:1,breathe:1},{bloom:.8,coilDim:.8,shell:1,parts:1,threads:1,events:1,wedge:0,section:0,contours:0,dots:0,map:0,ghost:0,lCoils:0,lX:0,ctl:1,breathe:0},{bloom:.65,coilDim:.62,shell:.85,parts:1,threads:.55,events:.7,wedge:Oy,section:1,contours:1,dots:1,map:0,ghost:.25,lCoils:0,lX:1,ctl:1,breathe:0},{bloom:.22,coilDim:.5,shell:.1,parts:.06,threads:0,events:0,wedge:Math.PI,section:.2,contours:1,dots:0,map:1,ghost:1,lCoils:0,lX:0,ctl:0,breathe:0}],zy=["el","dist","tx","ty","tz","sx","sy","drift"],Hy=Object.keys(Oh[0]),zh=2,If=.55,Vy=n=>Math.exp(Hn(Math.log(zh),Math.log(If),n)),Yr=Math.log(zh)/(Math.log(zh)-Math.log(If));function zn(n,t,e,i){let s=document.createElement(n);return t&&(s.style.cssText=t),i!=null&&(s.innerHTML=i),e&&e.appendChild(s),s}var Gy={id:"tokamak",layout:"full",steps:4,mount(n,t){this.ctx=t,this.root=n;let e=t.tokens;n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.touchAction="none",n.style.background=e.bg,this.eq=ef(),this.step=0,this.running=!1;let i=zn("canvas",`position:absolute;left:0;top:0;width:${Si}px;height:${Ti}px;display:block;cursor:grab;touch-action:none;`,n);this.canvas=i;let s=null;try{s=new ha({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance"}),s.getContext()||(s=null)}catch{s=null}if(!s){this.fallback=!0,Nh(i,null,this.eq,e,t.fitCanvas);return}this.renderer=s,s.setPixelRatio(1),s.setClearColor(new Ot(e.bg).convertSRGBToLinear(),1),this.maxRatio=1.5;let r=new ua;this.scene3=r;let o=new Ke(Pf,Si/Ti,.1,60);this.cam=o;let a=_f();this.cu=a,this.vessel=bf(a,e),this.coils=Mf(a,e),this.shells=wf(a,this.eq,e),this.section=Sf(this.eq,e),this.contours=Tf(this.eq,e),this.map=Ef(this.eq),this.parts=Af(this.eq,a,e,{max:7e3}),this.vesselLineB=ar(this.contours.vesselSegs,new Ot("#8a93a8"),1.6,.4,0),this.contourGroup=this.contours.group,this.sectionB=this.section.b,r.add(this.coils.group,this.vessel,this.shells.group,this.section.a,this.sectionB,this.contourGroup,this.vesselLineB),r.add(this.parts.threads,this.parts.streaks,this.parts.heads,this.parts.evLines,this.parts.evPts,this.parts.dots,this.map.points),this.fatLines=[...this.contours.lines,this.vesselLineB];{let h=new ga(4.2,96);h.rotateX(-Math.PI/2);let u=new ne({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uC:{value:new Ot(e.plasmaDeep)},uI:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:"uniform vec3 uC; uniform float uI; varying vec2 vP; void main(){ float r = length(vP)/4.2; float a = exp(-pow((r-0.42)/0.22,2.0)); gl_FragColor = vec4(uC*a*uI*0.025,1.0);} "});this.floor=new we(h,u),this.floor.position.y=-2.3,r.add(this.floor)}let l=new Oe(16,16,{type:mn,samples:4});this.composer=new Ia(s,l),this.composer.addPass(new La(r,o)),this.bloom=new ir(new Tt(Si,Ti),.75,.5,.42),this.composer.addPass(this.bloom),this.composer.addPass(new Ua),this.overlay=zn("div",`position:absolute;left:0;top:0;width:${Si}px;height:${Ti}px;pointer-events:none;`,n),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("width",Si),this.svg.setAttribute("height",Ti),this.svg.style.cssText="position:absolute;left:0;top:0;overflow:visible;",this.overlay.appendChild(this.svg),this._buildLabels(e),this._buildFrame(e),this._buildControls(e),this.twistT=Yr,this.qk=1,this.coilsOn=!0,this.coilVis=1;let c=Rf[0];this.cs={az:.35,el:c.el,dist:c.dist,tx:c.tx,ty:c.ty,tz:c.tz,sx:c.sx,sy:c.sy,drift:1},this.vs={...Oh[0]},this.tw=null,this.user={az:0,el:0,vAz:0,vEl:0,last:-1e9,dragging:!1},this.time=0,this.stats={ema:16.7,slowFor:0,cool:0,cpu:0},window.__tkStats=this.stats,this._bindPointer(),this.resize(),this._apply(0),this._render()},_buildLabels(n){let t=(d,f)=>{let g=zn("div",`position:absolute;left:0;top:0;white-space:nowrap;font:500 19px/1 ${n.fontBody};letter-spacing:0.02em;color:${n.ink};opacity:0;transition:none;text-shadow:0 0 6px ${n.bg},0 0 14px ${n.bg},0 0 2px ${n.bg};`,this.overlay,d),x=document.createElementNS("http://www.w3.org/2000/svg","polyline");x.setAttribute("fill","none"),x.setAttribute("stroke","rgba(243,241,234,0.42)"),x.setAttribute("stroke-width","1.2");let m=document.createElementNS("http://www.w3.org/2000/svg","circle");return m.setAttribute("r","3.2"),m.setAttribute("fill",f),this.svg.appendChild(x),this.svg.appendChild(m),{d:g,line:x,dot:m,w:0}},e=this.eq,i=new F,s=new F,r=d=>(s.copy(d).project(this.cam),[(s.x+1)*.5*Si,(1-s.y)*.5*Ti,s.z]),o=()=>Math.atan2(this.cam.position.z,this.cam.position.x),a=()=>{let d=o()-.95,g=(Math.round(d/(Math.PI*2)*$r-.5)+.5)/$r*Math.PI*2,x=.7+2.36*Math.pow(Math.sin(.62),.62),m=1.98*Math.cos(.62);return i.set(x*Math.cos(g),m,x*Math.sin(g))},l=()=>{let d=o()-1.25;return i.set(2.78*Math.cos(d),-.36,2.78*Math.sin(d))},c=()=>i.set(0,1.5,0),h=()=>i.set(e.xpt[0],e.xpt[1],.01),u=()=>{let d=e.surf(1,.42);return i.set(d[0],d[1],.01)};this.labels=[{...t("toroidal field coils",n.coil),anchor:a,off:[60,-70],key:"lCoils"},{...t("poloidal field coils",n.coil),anchor:l,off:[40,64],key:"lCoils"},{...t("solenoid",n.coil),anchor:c,off:[-90,-95],key:"lCoils"},{...t("X-point",n.flux),anchor:h,off:[-150,34],key:"lX"},{...t("separatrix",n.flux),anchor:u,off:[110,-70],key:"lX"}],this._proj=r},_placeLabels(){for(let n of this.labels){let t=this.vs[n.key]*(n.key==="lCoils"?this.coilVis:1);if(t<.01){n.d.style.opacity=0,n.line.setAttribute("opacity",0),n.dot.setAttribute("opacity",0);continue}let[e,i,s]=this._proj(n.anchor());if(s>1){n.d.style.opacity=0;continue}n.w||(n.w=n.d.offsetWidth||160);let[r,o]=n.off,a=e+r,l=i+o,c=r<0?a-n.w-8:a+8;n.d.style.transform=`translate(${c.toFixed(1)}px, ${(l-10).toFixed(1)}px)`,n.d.style.opacity=t;let h=e+r*.55;n.line.setAttribute("points",`${e.toFixed(1)},${i.toFixed(1)} ${h.toFixed(1)},${l.toFixed(1)} ${a.toFixed(1)},${l.toFixed(1)}`),n.line.setAttribute("opacity",t),n.dot.setAttribute("cx",e.toFixed(1)),n.dot.setAttribute("cy",i.toFixed(1)),n.dot.setAttribute("opacity",t)}},_buildFrame(n){let{cx:t,cy:e,pxPerM:i,rc:s}=gs,r=g=>t+(g-s)*i,o=g=>e-g*i,a=r(se.rmin),l=r(se.rmax),c=o(se.zmax),h=o(se.zmin),u=10,d=`<rect x="${a-u}" y="${c-u}" width="${l-a+2*u}" height="${h-c+2*u}" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1"/>`,f=`font-family:${n.fontMono.replace(/"/g,"'")};font-size:18px;fill:${n.ink3}`;[1,1.5,2,2.5].forEach(g=>{let x=r(g);d+=`<line x1="${x}" y1="${h+u}" x2="${x}" y2="${h+u+7}" stroke="rgba(255,255,255,0.3)"/>`,d+=`<text x="${x}" y="${h+u+28}" text-anchor="middle" style="${f}">${g.toFixed(1)}</text>`}),[-1.5,-1,-.5,0,.5,1,1.5].forEach(g=>{let x=o(g);d+=`<line x1="${a-u-7}" y1="${x}" x2="${a-u}" y2="${x}" stroke="rgba(255,255,255,0.3)"/>`,g%1===0&&(d+=`<text x="${a-u-13}" y="${x+6}" text-anchor="end" style="${f}">${g.toFixed(0)}</text>`)}),d+=`<text x="${l+u+4}" y="${h+u+28}" style="${f};fill:${n.ink2}">R (m)</text>`,d+=`<text x="${a-u}" y="${c-u-12}" text-anchor="middle" style="${f};fill:${n.ink2}">Z (m)</text>`,d+=`<text x="${l+u}" y="${c-u-12}" text-anchor="end" style="${f};fill:${n.ink2}">65 \xD7 65</text>`,this.frame=document.createElementNS("http://www.w3.org/2000/svg","g"),this.frame.innerHTML=d,this.frame.setAttribute("opacity",0),this.svg.appendChild(this.frame)},_buildControls(n){let t=zn("div","position:absolute;right:40px;bottom:36px;display:flex;flex-direction:column;gap:12px;opacity:1;pointer-events:auto;",this.root);t.className="ui-panel";let e=zn("div","",t);e.className="ui-row";let i=zn("span","min-width:52px",e,"twist");i.className="ui-label";let s=zn("input","width:220px",e);s.type="range",s.min="0",s.max="1",s.step="0.001",s.value=String(Yr),s.className="ui-slider",s.style.setProperty("--slider-accent",n.plasma);let r=zn("span","min-width:110px;text-align:right",e);r.className="ui-readout";let o=zn("div","justify-content:space-between",t);o.className="ui-row";let a=zn("button",`--chip-accent:${n.coil}`,o,"coils");a.className="ui-chip is-on",a.setAttribute("aria-pressed","true");let l=zn("span","",o,"drag to orbit");l.className="ui-hint",this.hint=l,s.addEventListener("input",()=>{this.demoT=null,this._setTwist(parseFloat(s.value))}),s.addEventListener("pointerdown",c=>c.stopPropagation()),a.addEventListener("pointerdown",c=>c.stopPropagation()),a.addEventListener("click",()=>{this.coilsOn=!this.coilsOn,a.classList.toggle("is-on",this.coilsOn),a.setAttribute("aria-pressed",String(this.coilsOn)),this._kick()}),t.addEventListener("keydown",c=>{/^(Arrow|Page| |[0-9]|d|D|n|N|f|F|t|T|Escape)/.test(c.key)&&c.target.blur&&c.target.blur()}),this.ui={panel:t,sl:s,ro:r,chip:a},this._setTwist(Yr)},_setTwist(n){this.twistT=Bh(n),this.qk=Vy(this.twistT),this.ui&&(this.ui.sl.value=String(this.twistT),this.ui.ro.innerHTML=`<small style="margin:0 6px 0 0">q95</small>${(this.qk*3.71).toFixed(1)}`),this._kick()},_bindPointer(){let n=this.canvas,t=this.user,e=0,i=0,s=0,r=null;n.addEventListener("pointerdown",a=>{this.step===3||r!==null||(r=a.pointerId,n.setPointerCapture(r),t.dragging=!0,t.vAz=0,t.vEl=0,e=a.clientX,i=a.clientY,s=performance.now(),n.style.cursor="grabbing",a.preventDefault())}),n.addEventListener("pointermove",a=>{if(a.pointerId!==r)return;let l=n.getBoundingClientRect(),c=Si/l.width,h=(a.clientX-e)*c,u=(a.clientY-i)*c,d=performance.now(),f=Math.max(1,d-s)/1e3;e=a.clientX,i=a.clientY,s=d;let g=-h*.0055,x=u*.004;t.az+=g,t.el+=x,t.vAz=Hn(t.vAz,g/f,.5),t.vEl=Hn(t.vEl,x/f,.5),t.last=this.time,this._kick(),a.preventDefault()});let o=a=>{if(a.pointerId===r){try{n.releasePointerCapture(r)}catch{}r=null,t.dragging=!1,t.last=this.time,n.style.cursor="grab"}};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),this._releasePointer=()=>{if(r!==null){try{n.releasePointerCapture(r)}catch{}r=null,t.dragging=!1}}},enter(){if(this.fallback)return;this.running=!0,this._last=performance.now();let n=t=>{if(!this.running)return;this.raf=requestAnimationFrame(n);let e=Math.min(.05,(t-this._last)/1e3);this._frameMs=t-this._last,this._last=t,this._tick(e)};this.raf=requestAnimationFrame(n)},leave(){this.running=!1,this.raf&&cancelAnimationFrame(this.raf),this.raf=null,this.demoT=null,this._releasePointer&&this._releasePointer()},_kick(){!this.running&&this.renderer&&this.cs&&(this._apply(0),this._render())},setStep(n,{instant:t}={}){if(this.fallback)return;let e=this.step;this.step=n;let i=this.ctx.reducedMotion,s=Rf[n],r=this.cs.az,o={...s},a=t||i;s.az===null?o.az=(e>=2&&!t,r):o.az=r+By(r,s.az),t&&(this.user.az=0,this.user.el=0,this.user.vAz=0,this.user.vEl=0);let l={...this.cs},c={...this.vs},h=t?0:i?.45:1.45;this.tw={t:0,dur:h,fromC:l,toC:o,fromV:c,toV:Oh[n],camInstant:a},h===0&&(this.tw.t=1),n>=2&&e<2?(this.parts.clearDots(),this.parts.seedDots(this.time,t?4200:1200)):n>=2&&t&&(this.parts.clearDots(),this.parts.seedDots(this.time,4200)),n<2&&this.parts.clearDots(),t&&this.parts.clearEvents(),this.hint.style.visibility=n===3?"hidden":"visible",this._advanceTween(0),this._kick()},_advanceTween(n){let t=this.tw;if(!t)return;t.t=t.dur>0?Math.min(1,t.t+n/t.dur):1;let e=Cf(t.t),i=t.camInstant?1:e;for(let s of zy)this.cs[s]=Hn(t.fromC[s],t.toC[s],i);this.cs.az=Hn(t.fromC.az,t.toC.az,i)+(this._driftAcc||0);for(let s of Hy)this.vs[s]=Hn(t.fromV[s],t.toV[s],e);t.t>=1&&(this.cs.az=t.toC.az+(this._driftAcc||0),this._driftAcc=0,this.tw=null)},demo(){this.fallback||(this.demoT=0,this.demoFrom=this.twistT,this.running||this._setTwist(.95))},_tickDemo(n){if(this.demoT==null)return;this.demoT+=n;let t=this.demoT,e=[[0,this.demoFrom],[1.8,1],[4.4,0],[6.4,Yr]],i=Yr;for(let s=1;s<e.length;s++)if(t<=e[s][0]){let[r,o]=e[s-1],[a,l]=e[s];i=Hn(o,l,Cf((t-r)/(a-r)));break}this._setTwist(i),t>=e[e.length-1][0]&&(this.demoT=null)},_tick(n){let t=this.ctx.reducedMotion,e=performance.now();this.time+=n,this._tickDemo(n);let i=t?0:.055*this.cs.drift;this.tw&&(this._driftAcc=(this._driftAcc||0)+i*n),this._advanceTween(n),this.tw||(this.cs.az+=i*n);let s=this.user;if(!s.dragging){s.az+=s.vAz*n,s.el+=s.vEl*n;let r=Math.exp(-n*3.2);if(s.vAz*=r,s.vEl*=r,this.time-s.last>3||this.step===3){let a=1-Math.exp(-n*(this.step===3?4:1.1));this.cs.drift>.99&&!this.tw&&(this.cs.az+=s.az,s.az=0),s.az-=s.az*a,s.el-=s.el*a}}this.coilVis+=((this.coilsOn?1:0)-this.coilVis)*(1-Math.exp(-n*7)),this._apply(n*(t?.35:1)),this._render(),this._perf(n,performance.now()-e)},_perf(n,t){let e=this.stats;e.ema=Hn(e.ema,n*1e3,.05),e.cpu=Hn(e.cpu,t,.05),e.particles=this.parts.nActive,e.ratio=this.ratio,e.cool-=n,e.ema>24?e.slowFor+=n:e.slowFor=Math.max(0,e.slowFor-n),e.slowFor>1.2&&e.cool<=0&&(e.cool=2,e.slowFor=0,this.parts.nActive>2e3?this.parts.nActive=this.parts.nActive*.72:this.maxRatio>1.05?(this.maxRatio=Math.max(1,this.maxRatio-.25),this.resize()):this.bloom.enabled=!1)},_apply(n){let t=this.cs,e=this.vs,i=this.user,s=this.cam,r=t.el+i.el;r=Math.max(-.12,Math.min(1.05,r)),this.step!==3&&(i.el=r-t.el);let o=t.az+i.az,a=new F(t.tx,t.ty,t.tz);s.position.set(a.x+t.dist*Math.cos(r)*Math.sin(o),a.y+t.dist*Math.sin(r),a.z+t.dist*Math.cos(r)*Math.cos(o)),s.up.set(0,1,0),s.lookAt(a),s.updateProjectionMatrix();let l=s.projectionMatrix.elements;l[8]=-2*t.sx/Si,l[9]=2*t.sy/Ti,s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.updateMatrixWorld();let c=this.cu;c.uWedge.value=e.wedge,c.uFogNear.value=t.dist-1.2,c.uFogFar.value=t.dist+3.6;let h=e.ghost,u=this.coilVis;this.vessel.material.uniforms.uOpacity.value=Hn(1,.12,h),this.bloom.strength=e.bloom;let d=Hn(1,.07,h)*u*e.coilDim;this.coils.coilMat.uniforms.uOpacity.value=d,this.coils.coilMat.depthWrite=d>.97,this.coils.coilMat.uniforms.uGlow.value=.05+.06*e.parts,this.coils.shellMat.uniforms.uOpacity.value=.55*d,this.coils.group.visible=d>.005;let f=1+e.breathe*.32*Math.sin(this.time*1.25);this.shells.mats.forEach(p=>p.uniforms.uI.value=e.shell*f),this.shells.group.visible=e.shell>.002,this.floor.material.uniforms.uI.value=e.shell,this.section.a.material.uniforms.uI.value=e.section*(e.wedge>.02?1:0),this.sectionB.material.uniforms.uI.value=e.section*(e.wedge>.02?.8:0)*(1-.7*h),this.sectionB.rotation.y=-(e.wedge+.0015),this.section.a.visible=this.sectionB.visible=e.section>.002&&e.wedge>.02;let g=e.contours;this.contourGroup.visible=g>.002;for(let p of this.contours.lines)p.material.opacity=p.material.userData.baseOpacity*g*(p===this.contours.vesselLine,1);this.vesselLineB.rotation.y=-(e.wedge+.0015),this.vesselLineB.material.opacity=.4*Bh(e.wedge/.3)*(1-h),this.vesselLineB.visible=e.wedge>.02&&h<.99;let x=this.parts;x.pointsMat.uniforms.uI.value=e.parts,x.lineMat.uniforms.uI.value=e.parts,x.threadMat.uniforms.uI.value=e.threads,x.dotMat.uniforms.uI.value=e.dots,x.heads.visible=x.streaks.visible=e.parts>.002,x.threads.visible=e.threads>.002,x.dots.visible=e.dots>.002,x.evPts.visible=x.evLines.visible=e.parts>.01,x.update(this.time,n,{intensity:e.parts,eventsOn:e.events>.5&&this.running,wedge:e.wedge,recordDots:e.dots>.05&&e.wedge>.3,q:this.qk}),this.map.mat.uniforms.uP.value=e.map,this.map.points.visible=e.map>.002;let m=Bh((e.map-.6)/.4);this.frame.setAttribute("opacity",m.toFixed(3)),this.ui.panel.style.opacity=e.ctl.toFixed(3),this.ui.panel.style.pointerEvents=e.ctl>.5?"auto":"none",this._placeLabels()},_render(){this.composer&&this.composer.render()},resize(){if(this.fallback){Nh(this.canvas,null,this.eq,this.ctx.tokens,this.ctx.fitCanvas);return}let{ratio:n}=this.ctx.fitCanvas(this.canvas,this.maxRatio);this.ratio=n;let t=this.canvas.width,e=this.canvas.height;this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(1),this.composer.setSize(t,e),this.bloom.setSize(t,e);for(let i of this.fatLines)i.material.resolution.set(t,e),i.material.linewidth=(i.material.userData.baseWidth||1.6)*n;this.parts.pointsMat.uniforms.uPx.value=n*2.2,this.parts.evMat.uniforms.uPx.value=n*2.2,this.parts.dotMat.uniforms.uPx.value=n*3.4,this.map.mat.uniforms.uPx.value=n*4.8,this._kick()}},Lf=Gy;var Uf=[{name:"F1A",R:.8608,Z:.1683,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F2A",R:.8614,Z:.5081,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F3A",R:.8628,Z:.8491,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F4A",R:.8611,Z:1.1899,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F5A",R:1.0041,Z:1.5169,W:.1392,H:.1194,a1:45,a2:0,turns:58},{name:"F6A",R:2.6124,Z:.4376,W:.1732,H:.1946,a1:0,a2:92.4,turns:55},{name:"F7A",R:2.3733,Z:1.1171,W:.188,H:.1692,a1:0,a2:108.06,turns:55},{name:"F8A",R:1.2518,Z:1.6019,W:.2349,H:.0851,a1:0,a2:0,turns:58},{name:"F9A",R:1.689,Z:1.5874,W:.1694,H:.1331,a1:0,a2:0,turns:55},{name:"F1B",R:.8608,Z:-.1737,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F2B",R:.8607,Z:-.5135,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F3B",R:.8611,Z:-.8543,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F4B",R:.863,Z:-1.1957,W:.0508,H:.3211,a1:0,a2:0,turns:58},{name:"F5B",R:1.0025,Z:-1.5169,W:.1392,H:.1194,a1:-45,a2:0,turns:58},{name:"F6B",R:2.6124,Z:-.4376,W:.1732,H:.1946,a1:0,a2:-92.4,turns:55},{name:"F7B",R:2.3834,Z:-1.1171,W:.188,H:.1692,a1:0,a2:-108.06,turns:55},{name:"F8B",R:1.2524,Z:-1.6027,W:.2349,H:.0851,a1:0,a2:0,turns:58},{name:"F9B",R:1.6889,Z:-1.578,W:.1694,H:.1331,a1:0,a2:0,turns:55}],kf=[[.6875,.0382,.0587,.0744],[.7575,.1147,.0587,.0744],[.6875,.1912,.0587,.0744],[.7575,.2677,.0587,.0744],[.6875,.3442,.0587,.0744],[.7575,.4207,.0587,.0744],[.6875,.4972,.0587,.0744],[.7575,.5737,.0587,.0744],[.6875,.6502,.0587,.0744],[.7575,.7267,.0587,.0744],[.6875,.8032,.0587,.0744],[.7575,.8797,.0587,.0744],[.6875,.9562,.0587,.0744],[.7575,1.0326,.0587,.0744],[.6875,1.1091,.0587,.0744],[.7575,1.1853,.0587,.0744],[.6875,1.2615,.0587,.0734],[.7575,1.3351,.0587,.0713],[.6875,1.4095,.0587,.0702],[.7575,1.4801,.0587,.0662],[.6875,1.5482,.0587,.0621],[.7599,1.6108,.0495,.058],[.695,1.6684,.0495,.0555],[.7625,1.7255,.0495,.0547],[.7575,-.0382,.0587,.0744],[.6875,-.1147,.0587,.0744],[.7575,-.1912,.0587,.0744],[.6875,-.2677,.0587,.0744],[.7575,-.3442,.0587,.0744],[.6875,-.4207,.0587,.0744],[.7575,-.4972,.0587,.0744],[.6875,-.5737,.0587,.0744],[.7575,-.6502,.0587,.0744],[.6875,-.7267,.0587,.0744],[.7575,-.8032,.0587,.0744],[.6875,-.8797,.0587,.0744],[.7575,-.9562,.0587,.0744],[.6875,-1.0326,.0587,.0744],[.7575,-1.1091,.0587,.0744],[.6875,-1.1853,.0587,.0744],[.7575,-1.2615,.0587,.0734],[.6875,-1.3351,.0587,.0713],[.7575,-1.4095,.0587,.0702],[.6875,-1.4801,.0587,.0662],[.7575,-1.5482,.0587,.0621],[.69,-1.6108,.0495,.058],[.7625,-1.6684,.0495,.0555],[.7025,-1.7255,.0495,.0547]],Df=[[.9729,-.0037],[.9787,.0699],[.9726,.518],[.9767,.2094],[.9793,.3471],[.9764,.4851],[.9785,.7591],[2.413,-.0025],[1.7617,1.3123],[2.2124,.8732],[2.2641,.7598],[2.2655,.7578],[2.3137,.6285],[2.4066,.2544],[2.4133,.0029],[.9771,-.0691],[.9722,-.5165],[.9792,-.207],[.9769,-.3428],[.9801,-.4818],[.9774,-.757],[2.4129,-.001],[.9719,-.1831],[2.0436,-1.1098],[2.2089,-.8669],[2.2596,-.7538],[2.2624,-.751],[2.3119,-.6202],[2.414,-.2441],[1.2194,1.4055],[1.4017,1.407],[1.5841,1.4084],[1.7825,1.323],[1.9243,1.2064],[2.0673,1.0904],[2.2193,.8698],[2.2702,.7462],[2.3189,.6228],[2.4159,.2492],[2.4182,-9e-4],[2.4162,-.2438],[2.3154,-.624],[2.2631,-.7487],[2.212,-.8725],[2.0848,-1.102],[1.894,-1.3327],[1.6989,-1.4063],[1.4769,-1.4055],[1.2541,-1.4047],[1.0479,-1.3302],[.9724,-1.1589],[.974,-.8542],[.9748,-.5122],[.9737,-.187],[.9732,-.0023],[.9741,.1817],[.9742,.5116],[.9745,.8503],[.9722,1.1609],[1.0511,1.3304],[1.445,1.277],[1.56,1.187],[1.723,1.112],[1.873,1.116],[1.506,1.27],[1.59,1.198],[1.73,1.142],[1.876,1.133],[1.218,1.298],[1.075,1.202],[.976,.979],[1.185,1.286],[1.086,1.228],[1.5104,-1.2788],[1.6103,-1.2788],[1.7103,-1.2791]],Ff=[[.8929,.1683],[.8936,.5092],[.895,.85],[.8932,1.1909],[1.0106,1.4475],[2.511,.332],[2.285,1.018],[1.2517,1.5517],[1.6885,1.5169],[.8929,-.1726],[.8928,-.5135],[.8933,-.8543],[.8952,-1.1953],[1.0152,-1.4536],[2.509,-.335],[2.297,-1.01],[1.2491,-1.5527],[1.6882,-1.5075],[.9247,0],[.9247,.3429],[.9247,.6858],[.9247,1.0287],[.9621,1.3208],[1.1212,1.4646],[1.6978,1.4646],[2.209,1.213],[2.1933,1.0629],[2.501,.527],[2.4347,.4902],[.9247,-.3429],[.9247,-.6858],[.9247,-1.0287],[.9611,-1.3198],[1.1199,-1.4625],[1.8559,-1.4625],[2.215,-1.214],[2.1933,-1.0602],[2.501,-.524],[2.4328,-.4909],[1.3828,-1.4625],[1.5771,-1.4625],[1.3929,-1.3057],[1.5983,-1.3057],[1.7759,-1.3053]],Nf=[[1.016,0],[1.016,.964],[1.016,.968],[1.016,1.001],[1.016,1.019],[1.016,1.077],[1.016,1.07],[1.016,1.096],[1.016,1.113],[1.016,1.138],[1.016,1.147],[1.012,1.165],[1.001,1.217],[1.029,1.217],[1.042,1.1624],[1.046,1.1624],[1.056,1.1626],[1.097,1.1645],[1.108,1.1659],[1.116,1.1659],[1.134,1.169],[1.148,1.1718],[1.162,1.1756],[1.181,1.183],[1.182,1.1835],[1.185,1.185],[1.19,1.188],[1.195,1.191],[1.201,1.196],[1.209,1.202],[1.215,1.208],[1.222,1.214],[1.228,1.221],[1.234,1.231],[1.239,1.238],[1.242,1.244],[1.248,1.254],[1.258,1.278],[1.263,1.29],[1.28,1.331],[1.28,1.347],[1.28,1.348],[1.31,1.348],[1.328,1.348],[1.361,1.348],[1.38,1.348],[1.419,1.348],[1.419,1.31],[1.372,1.31],[1.3717,1.2924],[1.37,1.2827],[1.3669,1.2564],[1.3672,1.2296],[1.3718,1.1958],[1.3722,1.194],[1.3866,1.1649],[1.3871,1.1642],[1.4038,1.157],[1.4113,1.1573],[1.4186,1.1613],[1.421,1.164],[1.4866,1.2405],[1.4973,1.2346],[1.4976,1.2343],[1.4974,1.2317],[1.4928,1.2133],[1.4926,1.2106],[1.4926,1.2049],[1.4928,1.2021],[1.4934,1.1964],[1.4947,1.1851],[1.4962,1.1607],[1.4798,1.1243],[1.4808,1.1226],[1.4815,1.1214],[1.4865,1.1169],[1.491,1.1144],[1.503,1.1124],[1.597,1.0949],[1.6255,1.0853],[1.6375,1.0799],[1.647,1.077],[1.785,1.077],[2.07,1.04],[2.128,.993],[2.245,.709],[2.3396,.4614],[2.3471,.4158],[2.3491,.2722],[2.351,.1702],[2.3516,.0701],[2.3512,-.0318],[2.3505,-.1444],[2.3496,-.2148],[2.3487,-.3267],[2.3476,-.3868],[2.3402,-.453],[2.3294,-.4776],[2.134,-.973],[1.786,-1.174],[1.768,-1.211],[1.768,-1.25],[1.682,-1.25],[1.372,-1.25],[1.372,-1.329],[1.42,-1.329],[1.42,-1.363],[1.273,-1.363],[1.153,-1.363],[1.016,-1.223],[1.016,-1.223],[1.016,-.83],[1.016,-.8],[1.016,-.415],[1.016,-.4],[1.016,-.001],[1.016,0]],Jr={R:[.84,2.54],Z:[-1.6,1.6]},Bf=[["P2IU",.4754,1.7538,.05,.227,12],["P2OU",.5284,1.7158,.05,.151,8],["P3U",1.0685,1.0998,.021,.0894,2],["P3U",1.103,1.0998,.044,.107,4],["P3U",1.1375,1.0998,.021,.0894,2],["P4U",1.5135,1.0832,.132,.113,15],["P4U",1.4325,1.1022,.024,.151,4],["P4U",1.495,1.1662,.099,.037,4],["P5U",1.663,.4855,.128,.113,15],["P5U",1.585,.5045,.024,.151,4],["P5U",1.6475,.5645,.099,.037,4],["P6U",1.4408,.8567,.043,.052,2],["P6U",1.4408,.9327,.043,.052,2],["P6L",1.4404,-.8571,.043,.052,2],["P6L",1.4404,-.9331,.043,.052,2],["P5L",1.663,-.4768,.128,.113,15],["P5L",1.585,-.4958,.024,.151,4],["P5L",1.6475,-.5558,.099,.037,4],["P4L",1.513,-1.08,.128,.113,15],["P4L",1.425,-1.099,.024,.151,4],["P4L",1.4975,-1.159,.099,.037,4],["P3L",1.0682,-1.0933,.021,.0894,2],["P3L",1.1027,-1.0933,.044,.107,4],["P3L",1.1372,-1.0933,.021,.0894,2],["P2OL",.527,-1.7111,.05,.151,8],["P2IL",.474,-1.7491,.05,.227,12]],Of=[[.119,1.4484,.0115,.0491,2.73333],[.119,1.3993,.0115,.0491,2.73333],[.119,1.3502,.0115,.0491,2.73333],[.119,1.3011,.0115,.0491,2.73333],[.119,1.252,.0115,.0491,2.73333],[.119,1.2029,.0115,.0491,2.73333],[.119,1.1538,.0115,.0491,2.73333],[.119,1.1047,.0115,.0491,2.73333],[.119,1.0556,.0115,.0491,2.73333],[.119,1.0065,.0115,.0491,2.73333],[.119,.9574,.0115,.0491,2.73333],[.119,.9083,.0115,.0491,2.73333],[.119,.8592,.0115,.0491,2.73333],[.119,.8101,.0115,.0491,2.73333],[.119,.761,.0115,.0491,2.73333],[.119,.7119,.0115,.0491,2.73333],[.119,.6628,.0115,.0491,2.73333],[.119,.6137,.0115,.0491,2.73333],[.119,.5646,.0115,.0491,2.73333],[.119,.5155,.0115,.0491,2.73333],[.119,.4664,.0115,.0491,2.73333],[.119,.4173,.0115,.0491,2.73333],[.119,.3682,.0115,.0491,2.73333],[.119,.3191,.0115,.0491,2.73333],[.119,.27,.0115,.0491,2.73333],[.119,.2209,.0115,.0491,2.73333],[.119,.1718,.0115,.0491,2.73333],[.119,.1227,.0115,.0491,2.73333],[.119,.0736,.0115,.0491,2.73333],[.119,.0245,.0115,.0491,2.73333],[.1318,1.4484,.0115,.0491,2.73333],[.1318,1.3993,.0115,.0491,2.73333],[.1318,1.3502,.0115,.0491,2.73333],[.1318,1.3011,.0115,.0491,2.73333],[.1318,1.252,.0115,.0491,2.73333],[.1318,1.2029,.0115,.0491,2.73333],[.1318,1.1538,.0115,.0491,2.73333],[.1318,1.1047,.0115,.0491,2.73333],[.1318,1.0556,.0115,.0491,2.73333],[.1318,1.0065,.0115,.0491,2.73333],[.1318,.9574,.0115,.0491,2.73333],[.1318,.9083,.0115,.0491,2.73333],[.1318,.8592,.0115,.0491,2.73333],[.1318,.8101,.0115,.0491,2.73333],[.1318,.761,.0115,.0491,2.73333],[.1318,.7119,.0115,.0491,2.73333],[.1318,.6628,.0115,.0491,2.73333],[.1318,.6137,.0115,.0491,2.73333],[.1318,.5646,.0115,.0491,2.73333],[.1318,.5155,.0115,.0491,2.73333],[.1318,.4664,.0115,.0491,2.73333],[.1318,.4173,.0115,.0491,2.73333],[.1318,.3682,.0115,.0491,2.73333],[.1318,.3191,.0115,.0491,2.73333],[.1318,.27,.0115,.0491,2.73333],[.1318,.2209,.0115,.0491,2.73333],[.1318,.1718,.0115,.0491,2.73333],[.1318,.1227,.0115,.0491,2.73333],[.1318,.0736,.0115,.0491,2.73333],[.1318,.0245,.0115,.0491,2.73333],[.1446,1.4484,.0115,.0491,2.73333],[.1446,1.3993,.0115,.0491,2.73333],[.1446,1.3502,.0115,.0491,2.73333],[.1446,1.3011,.0115,.0491,2.73333],[.1446,1.252,.0115,.0491,2.73333],[.1446,1.2029,.0115,.0491,2.73333],[.1446,1.1538,.0115,.0491,2.73333],[.1446,1.1047,.0115,.0491,2.73333],[.1446,1.0556,.0115,.0491,2.73333],[.1446,1.0065,.0115,.0491,2.73333],[.1446,.9574,.0115,.0491,2.73333],[.1446,.9083,.0115,.0491,2.73333],[.1446,.8592,.0115,.0491,2.73333],[.1446,.8101,.0115,.0491,2.73333],[.1446,.761,.0115,.0491,2.73333],[.1446,.7119,.0115,.0491,2.73333],[.1446,.6628,.0115,.0491,2.73333],[.1446,.6137,.0115,.0491,2.73333],[.1446,.5646,.0115,.0491,2.73333],[.1446,.5155,.0115,.0491,2.73333],[.1446,.4664,.0115,.0491,2.73333],[.1446,.4173,.0115,.0491,2.73333],[.1446,.3682,.0115,.0491,2.73333],[.1446,.3191,.0115,.0491,2.73333],[.1446,.27,.0115,.0491,2.73333],[.1446,.2209,.0115,.0491,2.73333],[.1446,.1718,.0115,.0491,2.73333],[.1446,.1227,.0115,.0491,2.73333],[.1446,.0736,.0115,.0491,2.73333],[.1446,.0245,.0115,.0491,2.73333],[.1574,1.4484,.0115,.0491,2.73333],[.1574,1.3993,.0115,.0491,2.73333],[.1574,1.3502,.0115,.0491,2.73333],[.1574,1.3011,.0115,.0491,2.73333],[.1574,1.252,.0115,.0491,2.73333],[.1574,1.2029,.0115,.0491,2.73333],[.1574,1.1538,.0115,.0491,2.73333],[.1574,1.1047,.0115,.0491,2.73333],[.1574,1.0556,.0115,.0491,2.73333],[.1574,1.0065,.0115,.0491,2.73333],[.1574,.9574,.0115,.0491,2.73333],[.1574,.9083,.0115,.0491,2.73333],[.1574,.8592,.0115,.0491,2.73333],[.1574,.8101,.0115,.0491,2.73333],[.1574,.761,.0115,.0491,2.73333],[.1574,.7119,.0115,.0491,2.73333],[.1574,.6628,.0115,.0491,2.73333],[.1574,.6137,.0115,.0491,2.73333],[.1574,.5646,.0115,.0491,2.73333],[.1574,.5155,.0115,.0491,2.73333],[.1574,.4664,.0115,.0491,2.73333],[.1574,.4173,.0115,.0491,2.73333],[.1574,.3682,.0115,.0491,2.73333],[.1574,.3191,.0115,.0491,2.73333],[.1574,.27,.0115,.0491,2.73333],[.1574,.2209,.0115,.0491,2.73333],[.1574,.1718,.0115,.0491,2.73333],[.1574,.1227,.0115,.0491,2.73333],[.1574,.0736,.0115,.0491,2.73333],[.1574,.0245,.0115,.0491,2.73333],[.119,-1.4484,.0115,.0491,2.73333],[.119,-1.3993,.0115,.0491,2.73333],[.119,-1.3502,.0115,.0491,2.73333],[.119,-1.3011,.0115,.0491,2.73333],[.119,-1.252,.0115,.0491,2.73333],[.119,-1.2029,.0115,.0491,2.73333],[.119,-1.1538,.0115,.0491,2.73333],[.119,-1.1047,.0115,.0491,2.73333],[.119,-1.0556,.0115,.0491,2.73333],[.119,-1.0065,.0115,.0491,2.73333],[.119,-.9574,.0115,.0491,2.73333],[.119,-.9083,.0115,.0491,2.73333],[.119,-.8592,.0115,.0491,2.73333],[.119,-.8101,.0115,.0491,2.73333],[.119,-.761,.0115,.0491,2.73333],[.119,-.7119,.0115,.0491,2.73333],[.119,-.6628,.0115,.0491,2.73333],[.119,-.6137,.0115,.0491,2.73333],[.119,-.5646,.0115,.0491,2.73333],[.119,-.5155,.0115,.0491,2.73333],[.119,-.4664,.0115,.0491,2.73333],[.119,-.4173,.0115,.0491,2.73333],[.119,-.3682,.0115,.0491,2.73333],[.119,-.3191,.0115,.0491,2.73333],[.119,-.27,.0115,.0491,2.73333],[.119,-.2209,.0115,.0491,2.73333],[.119,-.1718,.0115,.0491,2.73333],[.119,-.1227,.0115,.0491,2.73333],[.119,-.0736,.0115,.0491,2.73333],[.119,-.0245,.0115,.0491,2.73333],[.1318,-1.4484,.0115,.0491,2.73333],[.1318,-1.3993,.0115,.0491,2.73333],[.1318,-1.3502,.0115,.0491,2.73333],[.1318,-1.3011,.0115,.0491,2.73333],[.1318,-1.252,.0115,.0491,2.73333],[.1318,-1.2029,.0115,.0491,2.73333],[.1318,-1.1538,.0115,.0491,2.73333],[.1318,-1.1047,.0115,.0491,2.73333],[.1318,-1.0556,.0115,.0491,2.73333],[.1318,-1.0065,.0115,.0491,2.73333],[.1318,-.9574,.0115,.0491,2.73333],[.1318,-.9083,.0115,.0491,2.73333],[.1318,-.8592,.0115,.0491,2.73333],[.1318,-.8101,.0115,.0491,2.73333],[.1318,-.761,.0115,.0491,2.73333],[.1318,-.7119,.0115,.0491,2.73333],[.1318,-.6628,.0115,.0491,2.73333],[.1318,-.6137,.0115,.0491,2.73333],[.1318,-.5646,.0115,.0491,2.73333],[.1318,-.5155,.0115,.0491,2.73333],[.1318,-.4664,.0115,.0491,2.73333],[.1318,-.4173,.0115,.0491,2.73333],[.1318,-.3682,.0115,.0491,2.73333],[.1318,-.3191,.0115,.0491,2.73333],[.1318,-.27,.0115,.0491,2.73333],[.1318,-.2209,.0115,.0491,2.73333],[.1318,-.1718,.0115,.0491,2.73333],[.1318,-.1227,.0115,.0491,2.73333],[.1318,-.0736,.0115,.0491,2.73333],[.1318,-.0245,.0115,.0491,2.73333],[.1446,-1.4484,.0115,.0491,2.73333],[.1446,-1.3993,.0115,.0491,2.73333],[.1446,-1.3502,.0115,.0491,2.73333],[.1446,-1.3011,.0115,.0491,2.73333],[.1446,-1.252,.0115,.0491,2.73333],[.1446,-1.2029,.0115,.0491,2.73333],[.1446,-1.1538,.0115,.0491,2.73333],[.1446,-1.1047,.0115,.0491,2.73333],[.1446,-1.0556,.0115,.0491,2.73333],[.1446,-1.0065,.0115,.0491,2.73333],[.1446,-.9574,.0115,.0491,2.73333],[.1446,-.9083,.0115,.0491,2.73333],[.1446,-.8592,.0115,.0491,2.73333],[.1446,-.8101,.0115,.0491,2.73333],[.1446,-.761,.0115,.0491,2.73333],[.1446,-.7119,.0115,.0491,2.73333],[.1446,-.6628,.0115,.0491,2.73333],[.1446,-.6137,.0115,.0491,2.73333],[.1446,-.5646,.0115,.0491,2.73333],[.1446,-.5155,.0115,.0491,2.73333],[.1446,-.4664,.0115,.0491,2.73333],[.1446,-.4173,.0115,.0491,2.73333],[.1446,-.3682,.0115,.0491,2.73333],[.1446,-.3191,.0115,.0491,2.73333],[.1446,-.27,.0115,.0491,2.73333],[.1446,-.2209,.0115,.0491,2.73333],[.1446,-.1718,.0115,.0491,2.73333],[.1446,-.1227,.0115,.0491,2.73333],[.1446,-.0736,.0115,.0491,2.73333],[.1446,-.0245,.0115,.0491,2.73333],[.1574,-1.4484,.0115,.0491,2.73333],[.1574,-1.3993,.0115,.0491,2.73333],[.1574,-1.3502,.0115,.0491,2.73333],[.1574,-1.3011,.0115,.0491,2.73333],[.1574,-1.252,.0115,.0491,2.73333],[.1574,-1.2029,.0115,.0491,2.73333],[.1574,-1.1538,.0115,.0491,2.73333],[.1574,-1.1047,.0115,.0491,2.73333],[.1574,-1.0556,.0115,.0491,2.73333],[.1574,-1.0065,.0115,.0491,2.73333],[.1574,-.9574,.0115,.0491,2.73333],[.1574,-.9083,.0115,.0491,2.73333],[.1574,-.8592,.0115,.0491,2.73333],[.1574,-.8101,.0115,.0491,2.73333],[.1574,-.761,.0115,.0491,2.73333],[.1574,-.7119,.0115,.0491,2.73333],[.1574,-.6628,.0115,.0491,2.73333],[.1574,-.6137,.0115,.0491,2.73333],[.1574,-.5646,.0115,.0491,2.73333],[.1574,-.5155,.0115,.0491,2.73333],[.1574,-.4664,.0115,.0491,2.73333],[.1574,-.4173,.0115,.0491,2.73333],[.1574,-.3682,.0115,.0491,2.73333],[.1574,-.3191,.0115,.0491,2.73333],[.1574,-.27,.0115,.0491,2.73333],[.1574,-.2209,.0115,.0491,2.73333],[.1574,-.1718,.0115,.0491,2.73333],[.1574,-.1227,.0115,.0491,2.73333],[.1574,-.0736,.0115,.0491,2.73333],[.1574,-.0245,.0115,.0491,2.73333]],zf=[[.1803,1.4488],[.1803,1.3725],[.1803,1.2962],[.1803,1.22],[.1803,1.1437],[.1803,1.0675],[.1803,.9912],[.1803,.915],[.1803,.8388],[.1803,.7589],[.1803,.6862],[.1803,.61],[.1803,.5337],[.1803,.4575],[.1803,.3812],[.1803,.305],[.1803,.2288],[.1803,.1525],[.1803,.0763],[.1803,0],[.1803,-.0763],[.1803,-.1525],[.1803,-.2288],[.1803,-.305],[.1803,-.3812],[.1803,-.4575],[.1803,-.5337],[.1803,-.61],[.1803,-.6862],[.1803,-.7625],[.1803,-.8388],[.1803,-.915],[.1803,-.9912],[.1803,-1.0675],[.1803,-1.1437],[.1803,-1.22],[.1803,-1.2962],[.1803,-1.3725],[.1803,-1.4488],[.1803,-1.525],[1.442,1.335],[1.442,1.26],[1.5897,.8105],[1.5897,.7355],[1.5897,.6604],[1.8449,.307],[1.8449,.232],[1.8449,.157],[1.8449,.082],[1.8449,.004],[1.8449,-.068],[1.8449,-.143],[1.8449,-.218],[1.8449,-.293],[1.5913,-.6404],[1.5913,-.7154],[1.5913,-.7904],[1.4401,-1.2602],[1.4401,-1.3352],[1.442,1.335],[1.442,1.26],[1.5897,.8105],[1.5897,.7355],[1.5897,.6604],[1.8449,.307],[1.8449,.232],[1.8449,.157],[1.8449,.082],[1.8449,.007],[1.8449,-.068],[1.8449,-.143],[1.8449,-.218],[1.8449,-.293],[1.5913,-.6404],[1.5913,-.7154],[1.5913,-.7904],[1.4401,-1.2602],[1.4401,-1.3352]],Hf=[[.1785,1.2349],[.1785,.9299],[.1785,.6249],[.1785,.3199],[.1785,.0149],[.1785,-.0181],[.1785,-.3231],[.1785,-.6281],[.1785,-.9331],[.1785,-1.2381],[.445,1.569],[.501,1.569],[.566,1.569],[.6617,1.6384],[1.163,1.0826],[1.163,1.0976],[1.0354,1.0976],[1.0354,1.0831],[1.593,1.0408],[1.593,1.0558],[1.4001,1.1658],[1.4001,1.1508],[1.7493,.4422],[1.7493,.4572],[1.5458,.5642],[1.5458,.5492],[1.4025,.889],[1.4025,.904],[.445,-1.571],[.501,-1.571],[.566,-1.571],[.6617,-1.6404],[1.163,-1.0886],[1.163,-1.1036],[1.0354,-1.1036],[1.0354,-1.0886],[1.5984,-1.0444],[1.5984,-1.0694],[1.4005,-1.1594],[1.4005,-1.144],[1.7463,-.4422],[1.7463,-.4572],[1.7463,-.5322],[1.5495,-.5472],[1.4025,-.8876],[1.4025,-.9026]],Vf=[[1.9,.405],[1.5551,.405],[1.5551,.8225],[1.4079,.8225],[1.4079,1.033],[1.0399,1.033],[1.0399,1.195],[1.9,1.195],[1.9,1.825],[.5649,1.825],[.5649,1.7281],[.7835,1.7281],[.7835,1.7156],[.5826,1.547],[.4165,1.547],[.28,1.6835],[.28,1.2291],[.1952,1.0835],[.1952,-1.0835],[.28,-1.2291],[.28,-1.6835],[.4165,-1.547],[.5826,-1.547],[.7835,-1.7156],[.7835,-1.7281],[.5649,-1.7281],[.5649,-1.825],[1.9,-1.825],[1.9,-1.195],[1.0399,-1.195],[1.0399,-1.033],[1.4079,-1.033],[1.4079,-.8225],[1.5551,-.8225],[1.5551,-.405],[1.9,-.405],[1.9,.405]],Kr={R:[.06,2],Z:[-2,2]};var Hh={F1A:-55500,F2A:-37800,F3A:48500,F4A:113900,F5A:111300,F6A:-172200,F7A:-144500,F8A:108e3,F9A:-30100,F1B:-66900,F2B:-89800,F3B:216800,F4B:-259900,F5B:122300,F6B:-131700,F7B:-168400,F8B:585700,F9B:-332600,ECOILA:-1e6},Vh={P2U:188800,P2L:188800,P3U:-63500,P3L:-63500,P4U:-11400,P4L:-11400,P5U:-119400,P5L:-119400,P6U:0,P6L:0,SOL:-3e6};function Gh(n){let t=1/0,e=-1/0,i=1/0,s=-1/0;for(let r of n)t=Math.min(t,r.R-r.W/2),e=Math.max(e,r.R+r.W/2),i=Math.min(i,r.Z-r.H/2),s=Math.max(s,r.Z+r.H/2);return{R:(t+e)/2,Z:(i+s)/2,width:e-t,height:s-i}}var Wy=n=>{let t=+n[1];return t===5||t===8||t===9?"divertor":t===6||t===7?"vertical":"shaping"};function Xy(){let n=Uf.map(s=>{let r=[{R:s.R,Z:s.Z,W:s.W,H:s.H,a1:s.a1,a2:s.a2,turns:s.turns}],o=Hh[s.name]||0,a=Math.max(6e5,Math.ceil(2.5*Math.abs(o)/5e4)*5e4);return{id:s.name,label:s.name,group:Wy(s.name),R:s.R,Z:s.Z,width:s.W,height:s.H,turns:s.turns,elements:r,range:[-a,a],default:o,source:"d3d_mhdin_168191.dat RF/ZF/WF/HF/AF/AF2/TURNFC; range: starter README (~+-600 kA*turn)"}}),t=kf.map(([s,r,o,a])=>({R:s,Z:r,W:o,H:a,a1:0,a2:0,turns:1})),e=Gh(t),i=Hh.ECOILA||0;return n.push({id:"ECOILA",label:"E-coil",group:"solenoid",...e,turns:t.length,elements:t,range:[-3e6,3e6],default:i,approx:!0,source:"geometry: d3d_mhdin_168191.dat RE/ZE/WE/HE with ECID = 1; current: approx"}),n}var Zy=[["P2U",["P2IU","P2OU"],"divertor"],["P2L",["P2IL","P2OL"],"divertor"],["P3U",["P3U"],"shaping"],["P3L",["P3L"],"shaping"],["P4U",["P4U"],"shaping"],["P4L",["P4L"],"shaping"],["P5U",["P5U"],"vertical"],["P5L",["P5L"],"vertical"],["P6U",["P6U"],"vertical"],["P6L",["P6L"],"vertical"]],qy={P2:25e4,P3:15e4,P4:3e5,P5:3e5,P6:6e4};function $y(){let n=Zy.map(([e,i,s])=>{let r=Bf.filter(h=>i.includes(h[0])).map(([,h,u,d,f,g])=>({R:h,Z:u,W:d,H:f,a1:0,a2:0,turns:g})),o=r.reduce((h,u)=>h+u.turns,0),a=Vh[e]||0,l=qy[e.slice(0,2)],c=Math.max(l,Math.ceil(2.5*Math.abs(a)/1e4)*1e4);return{id:e,label:e,group:s,...Gh(r),turns:o,elements:r,range:[-c,c],default:a,approx:!0,source:"geometry: mast_mhdin_0.dat RF/ZF/WF/HF/FCTURN (FCID "+i.join("+")+"); current: approx"}}),t=Of.map(([e,i,s,r,o])=>({R:e,Z:i,W:s,H:r,a1:0,a2:0,turns:o}));return n.push({id:"SOL",label:"Solenoid",group:"solenoid",...Gh(t),turns:Math.round(t.reduce((e,i)=>e+i.turns,0)),elements:t,range:[-16e6,16e6],default:Vh.SOL||0,approx:!0,source:"geometry: mast_mhdin_0.dat RE/ZE/WE/HE/ECTURN (240 x 2.7333 = 656 turns); current: approx"}),n}var lr=n=>n.map(t=>[t[0],t[1]]),qi={d3d:{id:"d3d",name:"DIII-D",kind:"conventional",grid:{Rmin:Jr.R[0],Rmax:Jr.R[1],Zmin:Jr.Z[0],Zmax:Jr.Z[1],n:65},wall:lr(Nf),coils:Xy(),plasma:{Ip:12e5,R0:1.7,Z0:-.06,a:.6,kappa:1.78,deltaU:.3,deltaL:.55,li:.95,betaP:.9,config:"lower single null",xpoint:{R:1.36,Z:-1.13},approx:!0},toroidal:{B0:2,R0:1.6955,F:2*1.6955,approx:!0},thomson:{kind:"core Thomson (vertical laser)",orientation:"vertical",R:1.94,path:[[1.94,-1.32],[1.94,1.32]],channels:{from:.03,to:.76,count:36},Te0:3.2,ne0:6,source:"R = 1.94 m, Z 0.03-0.76 m: thomson_geom.py (challenge chord data); count/spacing approx"},probes:lr(Df),fluxLoops:lr(Ff),view:{Rmin:.55,Rmax:2.8,Zmin:-1.78,Zmax:1.78},sources:{coils:"stage11_run/m_track/pub/d3d_mhdin_168191.dat",wall:"public_release_20261114/tree_pub/ch2/geometry/d3d_limiter_mask.npz (FreeGS 0.8.2 DIIID wall)",grid:"challenge EFIT grid (d3d_limiter_mask.npz grid_R/grid_Z; = mhdin RLEFT/RRIGHT/ZBOTTO/ZTOP)",probes:"d3d_mhdin_168191.dat XMP2/YMP2 (76 magnetic probes)"}},mast:{id:"mast",name:"MAST",kind:"spherical",grid:{Rmin:Kr.R[0],Rmax:Kr.R[1],Zmin:Kr.Z[0],Zmax:Kr.Z[1],n:65},wall:lr(Vf),coils:$y(),plasma:{Ip:7e5,R0:.86,Z0:0,a:.56,kappa:1.9,deltaU:.42,deltaL:.42,li:1,betaP:.7,config:"double null",xpoint:{R:.62,Z:1.14},approx:!0},toroidal:{B0:.52,R0:.85,F:.52*.85,approx:!0},thomson:{kind:"Thomson (horizontal midplane laser)",orientation:"horizontal",Z:0,path:[[.2,0],[1.9,0]],channels:{from:.235,to:1.48,count:48},Te0:1.1,ne0:3.5,source:"Z = 0, R 0.235-1.48 m: thomson_geom.py (challenge chord data); count/spacing approx"},probes:lr(zf),fluxLoops:lr(Hf),view:{Rmin:0,Rmax:2.08,Zmin:-2.05,Zmax:2.05},sources:{coils:"stage11_run/m_track/pub/mast_mhdin_0.dat (EFUND, OMAS support file)",wall:"public_release_20261114/tree_pub/ch2/geometry/mast_limiter.json (lim_mast.010_M4, FAIR-MAST, CC BY-SA 4.0)",grid:"challenge EFIT grid (mast_limiter_mask.npz grid_R/grid_Z)",probes:"mast_mhdin_0.dat XMP2/YMP2 (78 pickup coils)"}}};var Va=4e-7*Math.PI,Yy=1e-6;function Gf(n,t){n>=0||(n=0),n>1-1e-15&&(n=1-1e-15);let e=1,i=Math.sqrt(1-n),s=n,r=1;s=.5*n;for(let a=0;a<12;a++){let l=.5*(e+i),c=.5*(e-i);if(i=Math.sqrt(e*i),e=l,s+=r*c*c,r*=2,Math.abs(c)<1e-15*e)break}let o=Math.PI/(2*e);return t[0]=o,t[1]=o*(1-s),t}var Wh=new Float64Array(2);function jr(n,t,e,i){if(!(n>0)||!(e>0))return 0;let s=t-i;(n-e)*(n-e)+s*s<Yy&&(n=e+.001);let o=(n+e)*(n+e)+s*s,a=4*n*e/o;Gf(a,Wh);let l=Math.sqrt(a);return Va/(2*Math.PI)*Math.sqrt(n*e)*((2-a)*Wh[0]-2*Wh[1])/l}var P2=new Float64Array(2);function hr(n,t,e,i,s=65,r=s){let o=new Float32Array(s),a=new Float32Array(r);for(let l=0;l<s;l++)o[l]=n+(t-n)*l/(s-1);for(let l=0;l<r;l++)a[l]=e+(i-e)*l/(r-1);return{n:s,m:r,R:o,Z:a,dR:(t-n)/(s-1),dZ:(i-e)/(r-1),Rmin:n,Rmax:t,Zmin:e,Zmax:i}}var cr=(n,t,e)=>n<t?t:n>e?e:n;function Xh(n,t,e,i){let s=t.n,r=(e-t.Rmin)/t.dR,o=(i-t.Zmin)/t.dZ;r=cr(r,0,s-1.000001),o=cr(o,0,t.m-1.000001);let a=r|0,l=o|0,c=r-a,h=o-l,u=l*s+a;return(1-h)*((1-c)*n[u]+c*n[u+1])+h*((1-c)*n[u+s]+c*n[u+s+1])}function Wf(n,t){let e=n*n,i=e*n;t[0]=-.5*i+e-.5*n,t[1]=1.5*i-2.5*e+1,t[2]=-1.5*i+2*e+.5*n,t[3]=.5*i-.5*e}var Xf=new Float64Array(4),Zf=new Float64Array(4);function ge(n,t,e,i){let s=t.n,r=t.m,o=cr((e-t.Rmin)/t.dR,0,s-1.000001),a=cr((i-t.Zmin)/t.dZ,0,r-1.000001),l=o|0,c=a|0;Wf(o-l,Xf),Wf(a-c,Zf);let h=0;for(let u=0;u<4;u++){let d=cr(c-1+u,0,r-1),f=0;for(let g=0;g<4;g++){let x=cr(l-1+g,0,s-1);f+=Xf[g]*n[d*s+x]}h+=Zf[u]*f}return h}function Qr(n,t,e,i,s,r=.25){let o=t.dR*r,a=t.dZ*r;return s[0]=(ge(n,t,e+o,i)-ge(n,t,e-o,i))/(2*o),s[1]=(ge(n,t,e,i+a)-ge(n,t,e,i-a))/(2*a),s}function xs(n,t,e,i,s){Qr(n,t,e,i,s);let r=s[0],o=s[1],a=Math.max(e,.001);return s[0]=-o/a,s[1]=r/a,s}function Ue(n,t,e){let i=!1;if(n.length&&Array.isArray(n[0])){for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[r][0],l=n[r][1],c=n[o][0],h=n[o][1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(i=!i)}return i}let s=n.length>>1;for(let r=0,o=s-1;r<s;o=r++){let a=n[2*r],l=n[2*r+1],c=n[2*o],h=n[2*o+1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(i=!i)}return i}function qf(n,t){let e=[];for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length],o=Math.hypot(r[0]-s[0],r[1]-s[1]),a=Math.max(1,Math.ceil(o/t));for(let l=0;l<a;l++)e.push([s[0]+(r[0]-s[0])*l/a,s[1]+(r[1]-s[1])*l/a])}return e}var $f=0,Yf,Jf,Kf;function Jy(n){n<=$f||($f=n,Yf=new Int32Array(n*2),Jf=new Float32Array(n*2),Kf=new Uint8Array(n))}function vn(n,t,e,i,s){let r=t*e,o=2*r;Jy(o);let a=Yf,l=Jf,c=Kf,h=s.R[0],u=s.Z[0],d=(s.R[t-1]-h)/(t-1),f=(s.Z[e-1]-u)/(e-1),g=[],x=y=>{if(c[y])return y;c[y]=1,a[2*y]=-1,a[2*y+1]=-1,g.push(y);let v,T,S,w,R,b;if(y<r){let E=y/t|0,D=y-E*t;v=n[y],T=n[y+1],S=h+D*d,R=S+d,w=b=u+E*f}else{let E=y-r,D=E/t|0,k=E-D*t;v=n[E],T=n[E+t],S=R=h+k*d,w=u+D*f,b=w+f}let M=T!==v?(i-v)/(T-v):.5;return M>=0||(M=0),M>1&&(M=1),l[2*y]=S+M*(R-S),l[2*y+1]=w+M*(b-w),y},m=(y,v)=>{x(y),x(v),a[2*y]===-1?a[2*y]=v:a[2*y+1]=v,a[2*v]===-1?a[2*v]=y:a[2*v+1]=y};for(let y=0;y<e-1;y++)for(let v=0;v<t-1;v++){let T=y*t+v,S=n[T],w=n[T+1],R=n[T+t+1],b=n[T+t],M=(S>i?1:0)|(w>i?2:0)|(R>i?4:0)|(b>i?8:0);if(M===0||M===15)continue;let E=T,D=r+T+1,k=T+t,B=r+T;switch(M){case 1:case 14:m(B,E);break;case 2:case 13:m(E,D);break;case 3:case 12:m(B,D);break;case 4:case 11:m(D,k);break;case 6:case 9:m(E,k);break;case 7:case 8:m(B,k);break;case 5:{.25*(S+w+R+b)>i?(m(E,D),m(k,B)):(m(B,E),m(D,k));break}case 10:{.25*(S+w+R+b)>i?(m(B,E),m(D,k)):(m(E,D),m(k,B));break}default:break}}let p=[],_=y=>{let v=[],T=-1,S=y,w=!1;for(;S>=0;){v.push(l[2*S],l[2*S+1]),c[S]=2;let b=a[2*S],M=a[2*S+1],E=b!==T&&b>=0?b:M!==T&&M>=0?M:-1;if(b===M&&b>=0&&b!==T&&(E=b),E>=0&&c[E]===2){E===y&&(w=!0);break}T=S,S=E}let R=new Float32Array(v);return R.closed=w&&v.length>=6,R};for(let y=0;y<g.length;y++){let v=g[y];if(c[v]===1&&(a[2*v]<0||a[2*v+1]<0)){let T=_(v);T.length>=4&&p.push(T)}}for(let y=0;y<g.length;y++){let v=g[y];if(c[v]===1){let T=_(v);T.length>=4&&p.push(T)}}for(let y=0;y<g.length;y++)c[g[y]]=0;return p}function ur(n){let t=n.length>>1,e=0;for(let i=0,s=t-1;i<t;s=i++)e+=n[2*s]*n[2*i+1]-n[2*i]*n[2*s+1];return .5*e}function Zh(n){let t=n.length>>1,e=0;for(let i=0,s=t-1;i<t;s=i++)e+=Math.hypot(n[2*i]-n[2*s],n[2*i+1]-n[2*s+1]);return e}var Qe=new Float64Array(2);function to(n,t){let{n:e,m:i}=n,s=t.wall,r=new Uint8Array(e*i);for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=l===0||a===0||l===e-1||a===i-1;r[a*e+l]=!c&&Ue(s,n.R[l],n.Z[a])?1:0}let o=qf(s,.02).filter(a=>a[0]>=n.Rmin&&a[0]<=n.Rmax&&a[1]>=n.Zmin&&a[1]<=n.Zmax);return{grid:n,mask:r,wallDense:o,u:new Float32Array(e*i),stamp:new Uint32Array(e*i),queue:new Int32Array(e*i),stampId:1}}function jf(n,t,e,i,s){let r=t.dR*.5,o=t.dZ*.5,a=ge(n,t,e,i);return s[0]=(ge(n,t,e+r,i)-2*a+ge(n,t,e-r,i))/(r*r),s[2]=(ge(n,t,e,i+o)-2*a+ge(n,t,e,i-o))/(o*o),s[1]=(ge(n,t,e+r,i+o)-ge(n,t,e+r,i-o)-ge(n,t,e-r,i+o)+ge(n,t,e-r,i-o))/(4*r*o),s}function Qf(n,t,e,i,s){let r=e,o=i,a=new Float64Array(3);for(let l=0;l<10;l++){Qr(n,t,r,o,Qe),jf(n,t,r,o,a);let c=a[0]*a[2]-a[1]*a[1];if(!(Math.abs(c)>0))break;let h=-(a[2]*Qe[0]-a[1]*Qe[1])/c,u=-(-a[1]*Qe[0]+a[0]*Qe[1])/c,d=Math.max(Math.abs(h)/t.dR,Math.abs(u)/t.dZ,1);if(h/=d,u/=d,r+=h,o+=u,Math.abs(h)<1e-5*t.dR&&Math.abs(u)<1e-5*t.dZ)break}return!Number.isFinite(r)||!Number.isFinite(o)||Math.abs(r-e)>s*t.dR||Math.abs(o-i)>s*t.dZ||r<t.Rmin||r>t.Rmax||o<t.Zmin||o>t.Zmax?null:(jf(n,t,r,o,a),{R:r,Z:o,det:a[0]*a[2]-a[1]*a[1],H0:a[0],H2:a[2]})}function tp(n,t,e){let{grid:i,mask:s,u:r,stamp:o,queue:a}=n,l=i.n,c=++n.stampId;c>4e9&&(o.fill(0),n.stampId=1);let h=0,u=0;a[u++]=t,o[t]=c;let d=0;for(;h<u;){let f=a[h++];if(d++,!s[f])return{closed:!1,count:d};let g=f%l,x=[f-1,f+1,f-l,f+l];for(let m=0;m<4;m++){let p=x[m];m===0&&g===0||m===1&&g===l-1||p<0||p>=r.length||o[p]!==c&&r[p]>e&&(o[p]=c,a[u++]=p)}}return{closed:!0,count:d}}function Ky(n,t,e){let i=Math.max(0,Math.min(n.n-1,Math.round((t-n.Rmin)/n.dR)));return Math.max(0,Math.min(n.m-1,Math.round((e-n.Zmin)/n.dZ)))*n.n+i}function ep(n,t,e,i,s){let r=vn(n,t.n,t.m,e,t),o=null,a=1/0;for(let l of r){if(!l.closed||!Ue(l,i,s))continue;let c=Math.abs(ur(l));c<a&&(a=c,o=l)}return o}function np(n,t,e,i){for(let s=0;s<n.length;s+=2){let r=n[s],o=n[s+1],a=ge(t,e,r,o)-i;Qr(t,e,r,o,Qe);let l=Qe[0]*Qe[0]+Qe[1]*Qe[1];if(!(l>0))continue;let c=-a*Qe[0]/l,h=-a*Qe[1]/l,u=.5*Math.min(e.dR,e.dZ),d=Math.hypot(c,h);d>u&&(c*=u/d,h*=u/d),Number.isFinite(c)&&Number.isFinite(h)&&(n[s]=r+c,n[s+1]=o+h)}return n}function eo(n,t){let e=n.length>>1,i=1/0,s=-1/0,r=1/0,o=-1/0,a=0,l=0;for(let f=0;f<e;f++){let g=n[2*f],x=n[2*f+1];g<i&&(i=g),g>s&&(s=g),x>o&&(o=x,a=g),x<r&&(r=x,l=g)}let c=.5*(s+i),h=Math.max(.001,.5*(s-i)),u=0;for(let f=0,g=e-1;f<e;g=f++){let x=n[2*f],m=n[2*f+1],p=n[2*g],_=n[2*g+1];u+=(p+x)*(p*m-x*_)}let d=2*Math.PI*Math.abs(u)/6;return{Raxis:t?t.R:c,Zaxis:t?t.Z:.5*(o+r),R0:c,a:h,kappa:(o-r)/(2*h),deltaU:(c-a)/h,deltaL:(c-l)/h,volume:d,Rmin:i,Rmax:s,Zmin:r,Zmax:o,area:Math.abs(ur(n)),perimeter:Zh(n)}}var jy=new Float32Array(0);function dr(n,t,e){let i=t.grid,{n:s,m:r}=i,o=e.sign>=0?1:-1,a=t.u;for(let O=0;O<s*r;O++)a[O]=o*n[O];let l=e.hint||{R:.5*(i.Rmin+i.Rmax),Z:.5*(i.Zmin+i.Zmax),r:.6},c=O=>({ok:!1,axis:O||{R:l.R,Z:l.Z,psi:ge(n,i,l.R,l.Z)},xpoints:[],psiBoundary:O?O.psi:ge(n,i,l.R,l.Z),limited:!0,lcfs:jy,shape:null,q95Approx:0,betaNApprox:0}),h=l.r||.6,u=-1,d=-1/0;for(let O=1;O<r-1;O++){let Y=i.Z[O]-l.Z;if(!(Math.abs(Y)>h*1.8))for(let K=1;K<s-1;K++){let dt=O*s+K;if(!t.mask[dt])continue;let At=i.R[K]-l.R;At*At/(h*h)+Y*Y/(h*h*3.2)>1||a[dt]>d&&(d=a[dt],u=dt)}}if(u<0)return c(null);let f=[-1,1,-s,s,-s-1,-s+1,s-1,s+1].every(O=>a[u+O]<=a[u]),g=i.R[u%s],x=i.Z[u/s|0],m=Qf(a,i,g,x,1.5);m&&m.det>0&&m.H0<0&&(g=m.R,x=m.Z);let p=Math.max(ge(a,i,g,x),d),_={R:g,Z:x,psi:o*p};if(!f)return c(_);let y=[],v=O=>{let Y=(a[O+1]-a[O-1])/(2*i.dR),K=(a[O+s]-a[O-s])/(2*i.dZ);return Y*Y+K*K};for(let O=2;O<r-2;O++)for(let Y=2;Y<s-2;Y++){let K=O*s+Y;if(!t.mask[K])continue;let dt=v(K),At=!0;for(let Ft of[-1,1,-s,s,-s-1,-s+1,s-1,s+1])if(v(K+Ft)<dt){At=!1;break}if(!At)continue;let yt=(a[K+1]-2*a[K]+a[K-1])/(i.dR*i.dR),Lt=(a[K+s]-2*a[K]+a[K-s])/(i.dZ*i.dZ),H=(a[K+s+1]-a[K+s-1]-a[K-s+1]+a[K-s-1])/(4*i.dR*i.dZ);if(yt*Lt-H*H>=0)continue;let Wt=Qf(a,i,i.R[Y],i.Z[O],2.5);!Wt||!(Wt.det<0)||Ue(e.wall,Wt.R,Wt.Z)&&(Math.hypot((Wt.R-g)/i.dR,(Wt.Z-x)/i.dZ)<3||y.some(Ft=>Math.hypot((Ft.R-Wt.R)/i.dR,(Ft.Z-Wt.Z)/i.dZ)<2)||y.push({R:Wt.R,Z:Wt.Z,u:ge(a,i,Wt.R,Wt.Z)}))}let T=Ky(i,g,x),S=1/0;for(let O=0;O<s*r;O++)t.mask[O]&&a[O]<S&&(S=a[O]);let w=Math.min(p,a[T])-1e-12*Math.abs(p),R=S;if(!(w>R))return c(_);if(tp(t,T,R).closed)w=R;else for(let O=0;O<26;O++){let Y=.5*(R+w);tp(t,T,Y).closed?w=Y:R=Y}let b=w,M=R,E=Math.max(p-b,1e-12),D=Math.max(.04*E,3*(b-M)),k=null;for(let O of y)O.u>=p||O.u<b-D||(!k||O.u>k.u)&&(k=O);let B,L;if(k)B=k.u,L=!1;else{let O=-1/0,Y=2*(b-M)+.01*E;for(let K of t.wallDense){let dt=Xh(a,i,K[0],K[1]);dt<=b+Y&&dt>O&&(O=dt)}B=Number.isFinite(O)?Math.min(Math.max(O,M),b+Y):b,L=!0}if(!(B<p))return c(_);let P=null;for(let O of[.004,.012,.03,.07,.15]){let Y=B+O*(p-B);if(P=ep(a,i,Y,g,x),P){np(P,a,i,Y);break}}if(!P||P.length<12)return c(_);let z=eo(P,_),W=Math.abs(e.F||0),it=p-.95*(p-B),J=ep(a,i,it,g,x),ht=0,q=Math.abs(e.Ip||0),rt=W/Math.max(z.R0,.05),U=q>0?5*z.a*z.a*rt*(1+z.kappa*z.kappa)/(2*z.R0*(q/1e6)):0;if(J&&W>0){np(J,a,i,it);let O=J.length>>1,Y=0;for(let K=0,dt=O-1;K<O;dt=K++){let At=.5*(J[2*K]+J[2*dt]),yt=.5*(J[2*K+1]+J[2*dt+1]),Lt=Math.hypot(J[2*K]-J[2*dt],J[2*K+1]-J[2*dt+1]);Qr(a,i,At,yt,Qe);let H=Math.hypot(Qe[0],Qe[1]);Y+=Lt/(Math.max(At,.05)*Math.max(H,1e-6))}ht=W*Y/(2*Math.PI)}(!Number.isFinite(ht)||ht<=0)&&(ht=U),ht=Math.min(80,Math.max(.3,ht||.3));let G=0;if(q>0&&rt>0){let O=Va*q/Math.max(z.perimeter,.1);G=100*((e.betaP||0)*(O*O)/(rt*rt))*z.a*rt/(q/1e6),Number.isFinite(G)||(G=0)}let Q=y.map(O=>({R:O.R,Z:O.Z,psi:o*O.u,primary:O===k,active:!L&&Math.abs(O.u-B)<Math.max(.02*E,2*(b-M))})).sort((O,Y)=>Math.abs(O.psi-_.psi)-Math.abs(Y.psi-_.psi));return{ok:!0,axis:_,xpoints:Q,psiBoundary:o*B,limited:L,lcfs:P,shape:z,q95Approx:ht,betaNApprox:G,qCyl:U}}var Qy=2*Math.PI;function t_(n,t=.04){let e=Math.abs(n.W),i=Math.abs(n.H),s=Math.max(1,Math.min(Math.ceil(e/t),6)),r=Math.max(1,Math.min(Math.ceil(i/t),12)),o=[];for(let a=0;a<r;a++)for(let l=0;l<s;l++){let c=s>1?(l-(s-1)/2)*(e/s):0,h=r>1?(a-(r-1)/2)*(i/r):0;if(n.a2&&Math.abs(n.a2)>1e-6&&(c+=h/Math.tan(n.a2*Math.PI/180)),n.a1&&Math.abs(n.a1)>1e-6){let u=Math.cos(n.a1*Math.PI/180),d=Math.sin(n.a1*Math.PI/180),f=u*c-d*h;h=d*c+u*h,c=f}o.push({R:n.R+c,Z:n.Z+h})}return o}function Jh(n){return[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([e,i])=>{let s=e*n.W,r=i*n.H;if(n.a2&&Math.abs(n.a2)>1e-6&&(s+=r/Math.tan(n.a2*Math.PI/180)),n.a1&&Math.abs(n.a1)>1e-6){let o=Math.cos(n.a1*Math.PI/180),a=Math.sin(n.a1*Math.PI/180),l=o*s-a*r;r=a*s+o*r,s=l}return[n.R+s,n.Z+r]})}function ip(n){let t=n.elements.reduce((i,s)=>i+(s.turns||1),0)||1,e=[];for(let i of n.elements){let s=t_(i),r=(i.turns||1)/t/s.length;for(let o of s)e.push({R:o.R,Z:o.Z,w:r})}return e}var qh=new Map;function Kh(n,t=65){let e=n.id+":"+t;if(qh.has(e))return qh.get(e);let i=typeof performance<"u"?performance.now():0,s=n.grid,r=hr(s.Rmin,s.Rmax,s.Zmin,s.Zmax,t,t),o=t*t,a=n.coils.map(f=>{let g=ip(f),x=new Float32Array(o);for(let m=0;m<t;m++){let p=r.Z[m];for(let _=0;_<t;_++){let y=r.R[_],v=0;for(let T=0;T<g.length;T++)v+=g[T].w*jr(y,p,g[T].R,g[T].Z);x[m*t+_]=v}}return{G:x,fils:g}}),l=(t-1>>1)+1,c=2*t-1,h=new Float32Array(l*c*t);for(let f=0;f<l;f++){let g=r.R[Math.min(2*f,t-1)];for(let x=0;x<c;x++){let m=(x-(t-1))*r.dZ,p=(f*c+x)*t;for(let _=0;_<t;_++){let y=r.R[_],v=0;for(let T of[-.5,.5])for(let S of[-.5,.5])v+=jr(y,m,g+T*r.dR,S*r.dZ);h[p+_]=.25*v}}}let u=to(r,n),d={grid:r,coilG:a,T:h,Ls:l,DZN:c,ctx:u,buildMs:0};return d.buildMs=(typeof performance<"u"?performance.now():0)-i,qh.set(e,d),d}var tn=(n,t,e)=>n<t?t:n>e?e:n;function e_(n,t){let e=1/0,i=-1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,c]=n[r];if(a>t!=c>t){let h=o+(t-a)*(l-o)/(c-a);e=Math.min(e,h),i=Math.max(i,h)}}return[e,i]}function n_(n,t){let e=1/0,i=-1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,c]=n[r];if(o>t!=l>t){let h=a+(t-o)*(c-a)/(l-o);e=Math.min(e,h),i=Math.max(i,h)}}return[e,i]}function sp(n){return tn((Math.exp(tn(n,.3,2.5))-1.65)/.89,.15,5)}function no(n,t,e,i,s){return-4e-7*Math.PI*n/(4*Math.PI*t)*(Math.log(8*t/e)+i+s/2-1.5)}var $h=10,Yh=36;function rp(n,t){let e=$h*Yh;t||(t={R:new Float64Array(e),Z:new Float64Array(e),w:new Float64Array(e),n:e});let i=Math.asin(tn(n.deltaU,-.9,.9)),s=Math.asin(tn(n.deltaL,-.9,.9)),r=0,o=0;for(let l=0;l<$h;l++){let c=(l+.5)/$h,h=Math.pow(Math.max(0,1-c*c),n.alpha)*c;for(let u=0;u<Yh;u++){let d=(u+.5)/Yh*Qy,f=Math.sin(d),g=f>=0?i:s;t.R[o]=n.Rp+n.a*c*Math.cos(d+g*f),t.Z[o]=n.Zp+n.kappa*n.a*c*f,t.w[o]=h,r+=h,o++}}let a=r>0?n.Ip/r:0;for(let l=0;l<e;l++)t.w[l]*=a;return t}var Tn=new Float64Array(2),io=class{constructor(t,e={}){this.machine=t,this.n=e.n||65,this.tables=Kh(t,this.n),this.grid=this.tables.grid,this.coils=t.coils.map(r=>({id:r.id,label:r.label,group:r.group,range:r.range.slice(),default:r.default,amps:r.default})),this._index=new Map(this.coils.map((r,o)=>[r.id,o]));let i=t.plasma;this.Ip=i.Ip,this.li=i.li,this.betaP=i.betaP,this.solenoidFactor=1,this.kappaGain=e.kappaGain===void 0?.25:e.kappaGain,this.verticalGain=e.verticalGain===void 0?3:e.verticalGain;let s=this.n*this.n;this._psiVac=new Float32Array(s),this._psiPl=new Float32Array(s),this._Is=new Float64Array(this.tables.Ls*this.tables.Ls),this._fil=null,this._n0=null}setCoil(t,e){let i=this._index.get(t);if(i===void 0)return;let s=this.coils[i],r=Number.isFinite(+e)?+e:s.default;s.amps=tn(r,s.range[0],s.range[1])}getCoil(t){let e=this._index.get(t);return e===void 0?0:this.coils[e].amps}resetCoils(){for(let t of this.coils)t.amps=t.default}setIp(t){let e=3*Math.abs(this.machine.plasma.Ip);this.Ip=Number.isFinite(+t)?tn(+t,-e,e):this.machine.plasma.Ip}setProfile({li:t,betaP:e}={}){Number.isFinite(t)&&(this.li=tn(t,.4,2)),Number.isFinite(e)&&(this.betaP=tn(e,0,3))}setSolenoidFactor(t){this.solenoidFactor=Number.isFinite(+t)?tn(+t,-2,2):1}reverse(){for(let t of this.coils)t.amps=-t.amps;this.Ip=-this.Ip}snapshot(){return{machine:this.machine.id,coils:Object.fromEntries(this.coils.map(t=>[t.id,t.amps])),Ip:this.Ip,li:this.li,betaP:this.betaP,solenoidFactor:this.solenoidFactor}}restore(t){if(t){if(t.coils)for(let[e,i]of Object.entries(t.coils))this.setCoil(e,i);t.Ip!==void 0&&this.setIp(t.Ip),this.setProfile({li:t.li,betaP:t.betaP}),t.solenoidFactor!==void 0&&this.setSolenoidFactor(t.solenoidFactor)}}vacuumPsi(t=this._psiVac){let e=this.n*this.n;t.fill(0);for(let i=0;i<this.coils.length;i++){let s=this.coils[i].amps;if(this.coils[i].group==="solenoid"&&(s*=this.solenoidFactor),!s)continue;let r=this.tables.coilG[i].G;for(let o=0;o<e;o++)t[o]+=s*r[o]}return t}plasmaPsi(t,e=this._psiPl){let{grid:i,T:s,Ls:r,DZN:o}=this.tables,a=this.n,l=this._Is;l.fill(0);let c=this._fil=rp(t,this._fil),h=2*i.dR,u=2*i.dZ;for(let d=0;d<c.n;d++){let f=tn((c.R[d]-i.Rmin)/h,0,r-1.000001),g=tn((c.Z[d]-i.Zmin)/u,0,r-1.000001),x=f|0,m=g|0,p=f-x,_=g-m,y=c.w[d];l[m*r+x]+=y*(1-p)*(1-_),l[m*r+x+1]+=y*p*(1-_),l[(m+1)*r+x]+=y*(1-p)*_,l[(m+1)*r+x+1]+=y*p*_}e.fill(0);for(let d=0;d<r;d++){let f=Math.min(2*d,a-1);for(let g=0;g<r;g++){let x=l[d*r+g];if(!x)continue;let m=g*o;for(let p=0;p<a;p++){let _=(m+(p-f+a-1))*a,y=p*a;for(let v=0;v<a;v++)e[y+v]+=x*s[_+v]}}}return e}_decayIndex(t,e,i){let s=this.grid,r=s.dR;xs(t,s,e+r,i,Tn);let o=Tn[1];xs(t,s,e-r,i,Tn);let a=Tn[1];xs(t,s,e,i,Tn);let l=Tn[1];return Math.abs(l)>1e-9?tn(-e/l*((o-a)/(2*r)),-5,5):0}forceCalibration(){if(this._cal!==void 0)return this._cal;let t=this.machine.plasma,e=new Float32Array(this.n*this.n);for(let r=0;r<this.coils.length;r++){let o=this.coils[r].default,a=this.tables.coilG[r].G;for(let l=0;l<e.length;l++)e[l]+=o*a[l]}xs(e,this.grid,t.R0,t.Z0,Tn);let i=no(t.Ip,t.R0,t.a,t.betaP,t.li),s=Tn[1]/i;return this._cal=Number.isFinite(s)?tn(s,.3,1.5):1,this._cal}_referenceDecayIndex(){if(this._n0!==null)return this._n0;let t=new Float32Array(this.n*this.n),e=this.machine.plasma;for(let i=0;i<this.coils.length;i++){let s=this.coils[i].default,r=this.tables.coilG[i].G;for(let o=0;o<t.length;o++)t[o]+=s*r[o]}return this._n0=this._decayIndex(t,e.R0,e.Z0),this._n0}position(t){let e=this.machine,i=e.plasma,s=this.grid,r=this.Ip,o=r>=0?1:-1,a=i.a,l=i.Z0,c=i.R0,h=!1,u="",d=this.forceCalibration(),f=(m,p)=>(xs(t,s,m,p,Tn),o*(Tn[1]-d*no(r,m,a,this.betaP,this.li))),g=this.verticalGain*Math.abs(d*no(i.Ip,i.R0,i.a,i.betaP,i.li))/i.a,x=(m,p)=>(xs(t,s,m,p,Tn),o*Tn[0]+g*(p-i.Z0));for(let m=0;m<3;m++){let[p,_]=e_(e.wall,l),y=Math.max(s.Rmin+2*s.dR,(Number.isFinite(p)?p:s.Rmin)+.5*a),v=Math.min(s.Rmax-2*s.dR,(Number.isFinite(_)?_:s.Rmax)-.5*a),T=40,S=null,w=y,R=f(y,l),b=R>0,M=R<0;for(let ht=1;ht<=T;ht++){let q=y+(v-y)*ht/T,rt=f(q,l);if(rt>0&&(M=!1),rt<0&&(b=!1),R>0&&rt<=0){let U=w,G=q;for(let O=0;O<30;O++){let Y=.5*(U+G);f(Y,l)>0?U=Y:G=Y}let Q=.5*(U+G);(!S||Math.abs(Q-i.R0)<Math.abs(S-i.R0))&&(S=Q)}w=q,R=rt}S!==null?c=S:(h=!0,b?(c=v,u="pushed outward"):M?(c=y,u="pushed inward"):(c=tn(c,y,v),u="no radial equilibrium"));let[E,D]=n_(e.wall,c),k=.6*i.kappa*a,B=Math.max(s.Zmin+2*s.dZ,(Number.isFinite(E)?E:s.Zmin)+k),L=Math.min(s.Zmax-2*s.dZ,(Number.isFinite(D)?D:s.Zmax)-k),P=null,z=B,W=x(c,B),it=!1,J=W;for(let ht=1;ht<=T;ht++){let q=B+(L-B)*ht/T,rt=x(c,q);if(J+=rt,W>0&&rt<=0||W<0&&rt>=0){it=!0;let U=z,G=q,Q=W;for(let Y=0;Y<30;Y++){let K=.5*(U+G);x(c,K)*Q>0?U=K:G=K}let O=.5*(U+G);(P===null||Math.abs(O-i.Z0)<Math.abs(P-i.Z0))&&(P=O)}z=q,W=rt}if(it&&P!==null?l=P:(h=!0,u=u||"no vertical equilibrium",l=J>0?B:L),h)break}return Number.isFinite(c)||(c=i.R0),Number.isFinite(l)||(l=i.Z0),{Rp:c,Zp:l,lost:h,reason:u}}solve(){let t=typeof performance<"u"?performance.now():0,e=this.machine,i=e.plasma,s=this.grid,r=this.n,o=r*r,a=this.vacuumPsi(),l={machine:e.id,n:r,grid:s,R:s.R,Z:s.Z,psi:new Float32Array(o),psiVac:new Float32Array(a),psiPlasma:new Float32Array(o),axis:null,xpoints:[],psiBoundary:0,limited:!1,lost:!1,lostReason:"",hasPlasma:!1,lcfs:new Float32Array(0),shape:null,q95Approx:0,betaNApprox:0,Ip:this.Ip,li:this.li,betaP:this.betaP,solenoidFactor:this.solenoidFactor,plasma:null,coils:Object.fromEntries(this.coils.map(p=>[p.id,p.amps])),F:e.toroidal.F,ms:0},c=.001*Math.abs(i.Ip);if(!(Math.abs(this.Ip)>c))return l.psi.set(a),l.ms=(typeof performance<"u"?performance.now():0)-t,l;let h=this.position(a),u=this._referenceDecayIndex(),d=this._decayIndex(a,h.Rp,h.Zp),f=tn(i.kappa+this.kappaGain*(u-d),Math.max(1,i.kappa-.5),i.kappa+.35),g={Rp:h.Rp,Zp:h.Zp,a:i.a,kappa:f,deltaU:i.deltaU,deltaL:i.deltaL,alpha:sp(this.li),Ip:this.Ip},x=this.plasmaPsi(g);for(let p=0;p<o;p++)l.psi[p]=a[p]+x[p];l.psiPlasma.set(x),l.plasma={...g,decayIndex:d},l.lost=h.lost,l.lostReason=h.reason;let m=dr(l.psi,this.tables.ctx,{sign:this.Ip>=0?1:-1,hint:{R:h.Rp,Z:h.Zp,r:.5*i.a},F:e.toroidal.F,Ip:this.Ip,betaP:this.betaP,wall:e.wall});return l.axis=m.axis,l.xpoints=m.xpoints,l.psiBoundary=m.psiBoundary,l.limited=m.limited,l.lcfs=m.lcfs,l.shape=m.shape,l.q95Approx=m.q95Approx,l.betaNApprox=m.betaNApprox,l.hasPlasma=m.ok,m.ok?m.shape&&!Ue(e.wall,m.shape.Raxis,m.shape.Zaxis)&&(l.lost=!0,l.lostReason="axis outside the wall"):(l.lost=!0,l.lostReason=l.lostReason||"no closed flux surfaces"),l.shape||(l.shape={Raxis:l.axis.R,Zaxis:l.axis.Z,R0:h.Rp,a:0,kappa:1,deltaU:0,deltaL:0,volume:0}),l.ms=(typeof performance<"u"?performance.now():0)-t,l}};function op(n,t){let e=s=>.5*(1-Math.tanh((s-.965)/.02));if(!(n<1)){let s=.25*e(1),r=Number.isFinite(n)?n:3;return t*s*Math.exp(-(r-1)/.04)}let i=Math.max(0,n);return t*(.75*Math.pow(1-i,1.5)+.25*e(i))}function ap(n,t){let e=s=>.5*(1-Math.tanh((s-.965)/.025));if(!(n<1)){let s=.55*e(1),r=Number.isFinite(n)?n:3;return t*s*Math.exp(-(r-1)/.06)}let i=Math.max(0,n);return t*(.45*(1-i*i)+.55*e(i))}function i_(n,t,e){if(!n||!n.hasPlasma||!n.axis||!n.lcfs||n.lcfs.length<6)return 3;let i=ge(n.psi,n.grid,t,e),s=n.psiBoundary-n.axis.psi;if(!(Math.abs(s)>0))return 3;let r=(i-n.axis.psi)/s;return Number.isFinite(r)?(r<1&&!Ue(n.lcfs,t,e)&&(r=Math.max(r,1+Math.abs(1-r))),r):3}function jh(n,t,{samples:e=160}={}){let i=t.thomson,[s,r]=i.path,o=i.orientation==="vertical",a=(u,d,f)=>{let g={s:new Float32Array(u),R:new Float32Array(u),Z:new Float32Array(u),psiN:new Float32Array(u),Te:new Float32Array(u),ne:new Float32Array(u)};for(let x=0;x<u;x++){let m=u>1?x/(u-1):0,p=d+(f-d)*m,_=o?i.R:p,y=o?p:i.Z,v=i_(n,_,y);g.s[x]=p,g.R[x]=_,g.Z[x]=y,g.psiN[x]=Math.min(v,3),g.Te[x]=n&&n.hasPlasma?op(v,i.Te0):0,g.ne[x]=n&&n.hasPlasma?ap(v,i.ne0):0}return g},l=o?s[1]:s[0],c=o?r[1]:r[0],h=a(e,l,c);return h.orientation=i.orientation,h.coord=o?"Z":"R",h.channels=a(i.channels.count,i.channels.from,i.channels.to),h}var $2=new Float64Array(2);var xe=il;function Wa(n){let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function En(n,t){let[e,i,s]=Wa(n);return`rgba(${e},${i},${s},${t})`}var fr=Wa(xe.plasmaDeep),Ei=Wa(xe.plasma),Qh=Wa(xe.plasmaHot);function r_(n,t){if(n<.55){let e=n/.55;t[0]=fr[0]+(Ei[0]-fr[0])*e,t[1]=fr[1]+(Ei[1]-fr[1])*e,t[2]=fr[2]+(Ei[2]-fr[2])*e}else{let e=Math.min(1,(n-.55)/.45),i=e*e;t[0]=Ei[0]+(Qh[0]-Ei[0])*i,t[1]=Ei[1]+(Qh[1]-Ei[1])*i,t[2]=Ei[2]+(Qh[2]-Ei[2])*i}return t}var tu=3,Ga=class{constructor(t,e,i,s={}){this.canvas=t,this.machine=e,this.ctx=i,this.opts=s,this.g=t.getContext("2d"),this.box=s.view||e.view,this.pad=s.pad===void 0?16:s.pad,this._heat=null,this._fine=null,this._coilGeom=e.coils.map(r=>({id:r.id,coil:r,polys:r.elements.length<=64?r.elements.map(o=>Jh(o)):null,env:[r.R-r.width/2,r.Z-r.height/2,r.R+r.width/2,r.Z+r.height/2]})),this.resize()}resize(){let t=this.ctx.fitCanvas(this.canvas);this.w=t.w,this.h=t.h,this.ratio=t.ratio;let e=this.box,i=(this.w-2*this.pad)/(e.Rmax-e.Rmin),s=(this.h-2*this.pad)/(e.Zmax-e.Zmin);this.s=Math.min(i,s),this.ox=(this.w-this.s*(e.Rmax-e.Rmin))/2-this.s*e.Rmin,this.oy=(this.h-this.s*(e.Zmax-e.Zmin))/2+this.s*e.Zmax}toScreen(t,e){return[this.ox+this.s*t,this.oy-this.s*e]}fromScreen(t,e){return[(t-this.ox)/this.s,(this.oy-e)/this.s]}get scale(){return this.s}hitCoil(t,e){let i=null,s=1/0;for(let r of this._coilGeom){let[o,a,l,c]=r.env,[h,u]=this.toScreen(o,a),[d,f]=this.toScreen(l,c),g=Math.max(0,(16-(d-h))/2)+5,x=Math.max(0,(16-(u-f))/2)+5;if(t>=h-g&&t<=d+g&&e>=f-x&&e<=u+x){let m=Math.hypot(t-(h+d)/2,e-(f+u)/2);m<s&&(s=m,i=r.id)}}return i}coilBox(t){let e=this._coilGeom.find(u=>u.id===t);if(!e)return null;let[i,s,r,o]=e.env,[a,l]=this.toScreen(i,s),[c,h]=this.toScreen(r,o);return{x0:a,y0:h,x1:c,y1:l}}_refine(t,e){let i=(e-1)*tu+1;if(!this._fine||this._fine.N!==i){let l=new Float32Array(i*4),c=new Int32Array(i*4);for(let h=0;h<i;h++){let u=h/tu,d=Math.floor(u);d>e-2&&(d=e-2);let f=u-d,g=f*f,x=g*f,m=[-.5*x+g-.5*f,1.5*x-2.5*g+1,-1.5*x+2*g+.5*f,.5*x-.5*g];for(let p=0;p<4;p++)l[h*4+p]=m[p],c[h*4+p]=Math.max(0,Math.min(e-1,d-1+p))}this._fine={N:i,w:l,ix:c,tmp:new Float32Array(e*i),f:new Float32Array(i*i),psiN:new Float32Array(i*i)}}let{w:s,ix:r,tmp:o,f:a}=this._fine;for(let l=0;l<e;l++){let c=l*e;for(let h=0;h<i;h++){let u=h*4;o[l*i+h]=s[u]*t[c+r[u]]+s[u+1]*t[c+r[u+1]]+s[u+2]*t[c+r[u+2]]+s[u+3]*t[c+r[u+3]]}}for(let l=0;l<i;l++){let c=l*4,h=r[c]*i,u=r[c+1]*i,d=r[c+2]*i,f=r[c+3]*i,g=s[c],x=s[c+1],m=s[c+2],p=s[c+3],_=l*i;for(let y=0;y<i;y++)a[_+y]=g*o[h+y]+x*o[u+y]+m*o[d+y]+p*o[f+y]}return this._fine}_fineGrid(t){let e=t.n,i=(e-1)*tu+1;if(!this._fg||this._fg.N!==i||this._fg.R0!==t.R[0]){let s=new Float32Array(i),r=new Float32Array(i);for(let o=0;o<i;o++)s[o]=t.R[0]+(t.R[e-1]-t.R[0])*o/(i-1),r[o]=t.Z[0]+(t.Z[e-1]-t.Z[0])*o/(i-1);this._fg={N:i,R:s,Z:r,R0:t.R[0]}}return this._fg}_path(t,e){let i=this.g,s=t.length>>1;if(s<2)return;let r=a=>this.ox+this.s*t[2*a],o=a=>this.oy-this.s*t[2*a+1];if(e&&s>=3){i.moveTo((r(s-1)+r(0))/2,(o(s-1)+o(0))/2);for(let a=0;a<s;a++){let l=(a+1)%s;i.quadraticCurveTo(r(a),o(a),(r(a)+r(l))/2,(o(a)+o(l))/2)}i.closePath()}else{i.moveTo(r(0),o(0));for(let a=1;a<s-1;a++)i.quadraticCurveTo(r(a),o(a),(r(a)+r(a+1))/2,(o(a)+o(a+1))/2);i.lineTo(r(s-1),o(s-1))}}_gridClip(t){let e=this.g,[i,s]=this.toScreen(t.R[0],t.Z[t.n-1]),[r,o]=this.toScreen(t.R[t.n-1],t.Z[0]);e.beginPath(),e.rect(i,s,r-i,o-s),e.clip()}draw(t,e={}){let i=this.g,s=this.ratio;if(i.setTransform(s,0,0,s,0,0),e.clear!==!1&&i.clearRect(0,0,this.w,this.h),i.lineJoin="round",i.lineCap="round",!t)return;let r={levels:9,outside:9,vacuumLevels:26,showCoils:!0,showWall:!0,showGrid:!1,showAxis:!0,showX:!0,heat:!0,reveal:1,alpha:1,lcfsColor:xe.flux,fluxColor:xe.flux,lostLabel:"plasma lost",...e},o=t.n,a=this._refine(t.psi,o),l=this._fineGrid(t),c=a.N,h=a.f,u=t.hasPlasma&&t.axis&&r.alpha>.001,d=u?t.psiBoundary<t.axis.psi?1:-1:1,f=t.lost?.35:1;if(r.clear!==!1){let[p,_]=this.toScreen(t.R[0],t.Z[o-1]),[y,v]=this.toScreen(t.R[o-1],t.Z[0]);i.strokeStyle="rgba(255,255,255,0.06)",i.lineWidth=1,i.strokeRect(p+.5,_+.5,y-p-1,v-_-1)}let g=null,x=0,m=0;if(u){x=d*t.axis.psi,m=d*t.psiBoundary;let p=m+.004*(x-m),_=a.psiN;for(let y=0;y<c*c;y++)_[y]=d*h[y];g=this._enclosing(_,c,p,l,t.axis.R,t.axis.Z)||(t.lcfs.length>=6?t.lcfs:null)}if(u&&r.heat&&g&&this._drawHeat(t,a,l,x,m,g,r.alpha*f,r.reveal),i.save(),this._gridClip(t),u?this._plasmaContours(t,a,l,r,d,x,m,g,f):this._vacuumContours(t,a,l,r),i.restore(),r.showWall){let p=this.machine.wall;i.beginPath(),p.forEach(([_,y],v)=>{let[T,S]=this.toScreen(_,y);v?i.lineTo(T,S):i.moveTo(T,S)}),i.closePath(),i.strokeStyle="rgba(214,218,228,0.55)",i.lineWidth=1.5,i.stroke()}r.showGrid&&this._gridDots(t,typeof r.showGrid=="number"?r.showGrid:1),r.probes&&this._probes(r.probes),r.thomson&&this._thomson(typeof r.thomson=="number"?r.thomson:1),r.showCoils&&this._coils(t,r);for(let p of r.overlays||[])!p||!p.lcfs||p.lcfs.length<6||(i.save(),i.beginPath(),this._path(p.lcfs,!0),i.strokeStyle=p.color||xe.plasma,i.lineWidth=p.width||2.2,i.setLineDash(p.dash||[]),i.globalAlpha=p.alpha===void 0?1:p.alpha,i.stroke(),i.restore());if(u&&r.alpha>.05){if(i.save(),i.globalAlpha=r.alpha*f,r.showX)for(let p of t.xpoints){if(!p.active)continue;let[_,y]=this.toScreen(p.R,p.Z);i.strokeStyle=xe.ink,i.lineWidth=1.8,i.beginPath(),i.moveTo(_-6,y-6),i.lineTo(_+6,y+6),i.moveTo(_+6,y-6),i.lineTo(_-6,y+6),i.stroke()}if(r.showAxis){let[p,_]=this.toScreen(t.axis.R,t.axis.Z);i.fillStyle=xe.plasmaHot,i.beginPath(),i.arc(p,_,2.6,0,Math.PI*2),i.fill()}i.restore()}if(t.lost&&r.lostLabel){let[p,_]=this.toScreen(this.machine.plasma.R0,this.machine.plasma.Z0);i.save(),i.font=`600 22px ${xe.fontBody}`,i.textAlign="center",i.textBaseline="middle";let y=i.measureText(r.lostLabel).width+28;i.fillStyle="rgba(6,7,12,0.78)",i.strokeStyle=En(xe.warn,.8),i.lineWidth=1.2,i.beginPath(),i.roundRect(p-y/2,_-20,y,40,20),i.fill(),i.stroke(),i.fillStyle=xe.warn,i.fillText(r.lostLabel,p,_+1),i.restore()}r.bar&&this._coilBar(r.bar.id,r.bar.amps)}rangeInWall(t,e){let i=[],s=e.n;for(let r=1;r<s-1;r+=2)for(let o=1;o<s-1;o+=2)Ue(this.machine.wall,e.R[o],e.Z[r])&&i.push(t[r*s+o]);return i.sort((r,o)=>r-o),i.length?[i[Math.floor(i.length*.01)],i[Math.floor(i.length*.99)]]:[0,1]}_enclosing(t,e,i,s,r,o){let a=vn(t,e,e,i,s),l=null,c=1/0;for(let h of a){if(!h.closed||!Ue(h,r,o))continue;let u=0,d=h.length>>1;for(let f=0,g=d-1;f<d;g=f++)u+=h[2*g]*h[2*f+1]-h[2*f]*h[2*g+1];u=Math.abs(u),u<c&&(c=u,l=h)}return l}_drawHeat(t,e,i,s,r,o,a,l){let c=e.N;if(!this._heat||this._heat.N!==c){let w=typeof OffscreenCanvas<"u"?new OffscreenCanvas(c,c):document.createElement("canvas");w.width=c,w.height=c,this._heat={N:c,c:w,g:w.getContext("2d"),img:new ImageData(c,c)}}let{c:h,g:u,img:d}=this._heat,f=d.data,g=e.psiN,x=s-r,m=[0,0,0],p=Math.max(1e-4,l);for(let w=0;w<c;w++){let R=(c-1-w)*c;for(let b=0;b<c;b++){let M=(s-g[w*c+b])/x,E=(R+b)*4;if(!(M<1.02)||M<-.05){f[E+3]=0;continue}let D=Math.max(0,Math.min(1,1-M));r_(D,m);let k=.2+.62*Math.pow(D,.7);p<1&&(k*=Math.max(0,Math.min(1,(p-M)/.12+1))*p),f[E]=m[0],f[E+1]=m[1],f[E+2]=m[2],f[E+3]=Math.round(255*k)}}u.putImageData(d,0,0);let _=this.g,[y,v]=this.toScreen(i.R[0],i.Z[c-1]),[T,S]=this.toScreen(i.R[c-1],i.Z[0]);_.save(),_.beginPath(),this._path(o,!0),_.clip(),_.globalAlpha=a,_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(h,y,v,T-y,S-v),_.restore(),_.save(),_.globalCompositeOperation="lighter",_.globalAlpha=.5*a*Math.min(1,l*1.2),_.beginPath(),this._path(o,!0);for(let[w,R]of[[14,.05],[7,.09]])_.strokeStyle=En(xe.plasmaDeep,R*2),_.lineWidth=w,_.stroke();_.restore()}_strokeSet(t,e,i,s,r){let o=this.g;o.beginPath();for(let a of t)this._path(a,a.closed);o.strokeStyle=e,o.globalAlpha=s,o.lineWidth=i,o.setLineDash(r||[]),o.stroke(),o.globalAlpha=1,o.setLineDash([])}_vacuumContours(t,e,i,s){let r=e.N,o=e.f,a=[],l=this.machine;if(!s.vacuumRange)for(let x=1;x<t.n-1;x+=2)for(let m=1;m<t.n-1;m+=2)Ue(l.wall,t.R[m],t.Z[x])&&a.push(t.psi[x*t.n+m]);let c,h;if(s.vacuumRange)[c,h]=s.vacuumRange;else{if(a.sort((x,m)=>x-m),!a.length)return;c=a[Math.floor(a.length*.01)],h=a[Math.floor(a.length*.99)]}let u=h-c||1e-6,d=s.vacuumLevels,f=u/d,g=s.signColors?s.signColors===!0?{pos:s.fluxColor,neg:"#c9a7ff"}:s.signColors:null;for(let x=-6;x<=d+6;x++){let m=c+f*(x+.5),p=vn(o,r,r,m,i),_=x>=0&&x<d,y=g?m>=0?g.pos:g.neg:s.fluxColor;this._strokeSet(p,y,_?1.3:1,(_?.62:.28)*(s.vacuumAlpha===void 0?1:s.vacuumAlpha),g&&m<0?[5,5]:null)}}_plasmaContours(t,e,i,s,r,o,a,l,c){let h=e.N,u=e.psiN,d=o-a,f=s.signColors?s.signColors===!0?{pos:s.fluxColor,neg:"#c9a7ff"}:s.signColors:null,g=m=>f?r*m>=0?f.pos:f.neg:s.fluxColor;if(s.outside>0){let m=[],p=1.07;for(let _=0;_<s.outside;_++)m.push(p),p=1+(p-1)*1.55+.04;for(let _ of m){let y=o-_*d,v=vn(u,h,h,y,i);this._strokeSet(v,g(y),1.1,.3*Math.max(.35,1-(_-1)*.12)*s.alpha*c+.12*(1-s.alpha))}}let x=Array.isArray(s.levels)?s.levels:Array.from({length:s.levels},(m,p)=>(p+1)/(s.levels+1));for(let m of x){let p=Math.max(0,Math.min(1,(s.reveal-m)/.1+1))*Math.min(1,s.reveal*1.25);if(p<=.01)continue;let _=o-m*d,y=this._enclosing(u,h,_,i,t.axis.R,t.axis.Z);y&&this._strokeSet([y],g(_),1.25+.5*m,(.3+.45*m)*p*s.alpha*c)}if(l){let m=Math.min(1,s.reveal*1.1)*s.alpha*c,p=this.g;if(p.save(),p.globalCompositeOperation="lighter",this._strokeSet([l],s.lcfsColor,6,.12*m),p.restore(),this._strokeSet([l],s.lcfsColor,2.4,.95*m),!t.limited){let y=vn(u,h,h,a-.002*d,i).filter(v=>!(v.closed&&Ue(v,t.axis.R,t.axis.Z))).filter(v=>t.xpoints.some(T=>T.active&&this._near(v,T.R,T.Z,.12)));this._strokeSet(y,s.lcfsColor,1.4,.55*m)}}}_near(t,e,i,s){for(let r=0;r<t.length;r+=2)if(Math.abs(t[r]-e)<s&&Math.abs(t[r+1]-i)<s)return!0;return!1}_gridDots(t,e){let i=this.g,s=t.n;i.save(),i.globalAlpha=e;for(let r=0;r<s;r++)for(let o=0;o<s;o++){let[a,l]=this.toScreen(t.R[o],t.Z[r]);i.fillStyle="rgba(243,241,234,0.42)",i.fillRect(a-.9,l-.9,1.8,1.8)}i.restore()}_probes(t){let e=this.g,i=t==="struck";e.save();for(let[s,r]of this.machine.probes){let[o,a]=this.toScreen(s,r);e.strokeStyle=i?"rgba(185,182,173,0.45)":En(xe.ink2,.9),e.lineWidth=1.4,e.strokeRect(o-3,a-3,6,6),i&&(e.strokeStyle=En(xe.warn,.85),e.lineWidth=1.4,e.beginPath(),e.moveTo(o-5,a+5),e.lineTo(o+5,a-5),e.stroke())}e.restore()}_thomson(t){let e=this.g,i=this.machine.thomson,[s,r]=i.path,[o,a]=this.toScreen(s[0],s[1]),[l,c]=this.toScreen(r[0],r[1]);e.save(),e.globalAlpha=t,e.globalCompositeOperation="lighter";for(let[u,d]of[[9,.06],[4,.14],[1.6,.9]])e.strokeStyle=En(xe.coil,d),e.lineWidth=u,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke();e.globalCompositeOperation="source-over";let h=i.channels;for(let u=0;u<h.count;u++){let d=h.from+(h.to-h.from)*u/Math.max(1,h.count-1),f=i.orientation==="vertical"?i.R:d,g=i.orientation==="vertical"?d:i.Z,[x,m]=this.toScreen(f,g);e.fillStyle=xe.coil,e.beginPath(),e.arc(x,m,1.9,0,Math.PI*2),e.fill()}e.restore()}_coils(t,e){let i=this.g;for(let s of this._coilGeom){let r=s.coil,o=t.coils?t.coils[r.id]||0:r.default,a=r.group==="solenoid"?o*(t.solenoidFactor===void 0?1:t.solenoidFactor):o,l=e.coilScale&&e.coilScale[r.id]||Math.max(Math.abs(r.range[0]),Math.abs(r.range[1]))*.6,c=Math.min(1,Math.abs(a)/l),h=.18+.82*Math.sqrt(c),u=e.highlight===r.id,d=a>=0,f=d?.2+.75*c:.08+.2*c,g=Math.min(1,h+(u?.3:0));if(i.save(),u&&(i.shadowColor=En(xe.coil,.9),i.shadowBlur=14),i.beginPath(),s.polys)for(let b of s.polys)b.forEach(([M,E],D)=>{let[k,B]=this.toScreen(M,E);D?i.lineTo(k,B):i.moveTo(k,B)}),i.closePath();else{let[b,M,E,D]=s.env,[k,B]=this.toScreen(b,M),[L,P]=this.toScreen(E,D);i.rect(k,P,L-k,B-P)}if(i.fillStyle=En(xe.coil,f),i.fill(),i.shadowBlur=0,i.strokeStyle=En(xe.coil,g),i.lineWidth=u?1.8:1.1,i.stroke(),!s.polys){let[b,M,E,D]=s.env,[k,B]=this.toScreen(b,M),[L,P]=this.toScreen(E,D);i.strokeStyle=En(xe.coil,.35*h),i.lineWidth=1,i.beginPath();for(let z=1;z<4;z++){let W=k+(L-k)*z/4;i.moveTo(W,P+2),i.lineTo(W,B-2)}i.stroke()}let[x,m,p,_]=s.env,[y,v]=this.toScreen(x,m),[T,S]=this.toScreen(p,_),w=T-y,R=v-S;if(c>.04&&Math.min(w,R)>=9){let b=(y+T)/2,M=(S+v)/2,E=Math.min(4,Math.min(w,R)/2-1.5);i.strokeStyle=d?"rgba(20,14,4,0.9)":En(xe.coil,.95),i.lineWidth=1.6,i.beginPath(),i.moveTo(b-E,M),i.lineTo(b+E,M),d&&(i.moveTo(b,M-E),i.lineTo(b,M+E)),i.stroke()}i.restore()}}_coilBar(t,e){let i=this.machine.coils.find(T=>T.id===t),s=this.coilBox(t);if(!i||!s)return;let r=this.g,o=Math.max(Math.abs(i.range[0]),Math.abs(i.range[1])),a=Math.max(-1,Math.min(1,e/o)),l=this.w/2,c=(s.x0+s.x1)/2<l,h=120,u=8,d=c?s.x1+14:s.x0-14-u,f=(s.y0+s.y1)/2;f=Math.max(h/2+8,Math.min(this.h-h/2-30,f)),r.save(),r.fillStyle="rgba(6,7,12,0.7)",r.fillRect(d-3,f-h/2-3,u+6,h+6),r.strokeStyle=En(xe.coil,.45),r.lineWidth=1,r.strokeRect(d+.5,f-h/2+.5,u-1,h-1),r.strokeStyle=En(xe.ink,.5),r.beginPath(),r.moveTo(d-3,f),r.lineTo(d+u+3,f),r.stroke(),r.fillStyle=xe.coil;let g=a*h/2;r.fillRect(d+1,Math.min(f,f-g),u-2,Math.abs(g));let x=Math.max(-1,Math.min(1,i.default/o));r.strokeStyle=xe.ink,r.lineWidth=1.5,r.beginPath(),r.moveTo(d-4,f-x*h/2),r.lineTo(d+u+4,f-x*h/2),r.stroke();let m=e/1e3,p=`${i.label}  ${Math.abs(m)>=1e3?(m/1e3).toFixed(2)+" MA\xB7t":m.toFixed(0)+" kA\xB7t"}`;r.font=`500 18px ${xe.fontMono}`,r.textBaseline="middle";let _=r.measureText(p).width,y=c?d+u+10:d-10-_;y=Math.max(4,Math.min(this.w-_-4,y));let v=f-h/2-16<12?f+h/2+16:f-h/2-16;r.fillStyle="rgba(6,7,12,0.75)",r.fillRect(y-6,v-13,_+12,26),r.fillStyle=xe.coil,r.fillText(p,y,v),r.restore()}};var lp="controlroom-style",o_=`
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
.cr-te{display:block;width:430px;height:200px;margin-top:10px;}
.cr-strip{display:block;width:430px;height:96px;margin-top:10px;}
.cr-toy{position:absolute;left:576px;top:838px;font:400 18px/1.2 var(--font-body);color:var(--ink3);}
.cr-nomag{position:absolute;left:576px;top:52px;font:500 18px/1.2 var(--font-body);color:var(--ink2);display:flex;align-items:center;gap:10px;}
.cr-nomag i{display:inline-block;width:11px;height:11px;border:1.5px solid var(--ink3);position:relative;}
.cr-nomag i::after{content:"";position:absolute;left:-4px;top:4px;width:17px;height:1.5px;background:var(--warn);transform:rotate(-45deg);}
.cr-hint{position:absolute;left:0;font:400 18px/1.35 var(--font-body);color:var(--ink3);}
.cr-hint b{color:var(--coil);font-weight:500;}
.cr-outs{display:flex;gap:28px;margin-top:14px;}
.cr-big{font:500 34px/1.1 var(--font-mono);color:var(--ink);font-variant-numeric:tabular-nums;}
.cr-sub{font:400 18px/1.3 var(--font-body);color:var(--ink3);margin-top:12px;}
`,eu=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,pr=n=>n<0?0:n>1?1:n,mr=()=>performance.now(),gr=class{constructor(t){this.v=t,this.from=t,this.to=t,this.t0=0,this.dur=0}go(t,e){if(e<=0){this.v=this.from=this.to=t,this.dur=0;return}this.from=this.v,this.to=t,this.t0=mr(),this.dur=e}tick(t){if(!this.dur)return!1;let e=pr((t-this.t0)/this.dur);return this.v=this.from+(this.to-this.from)*eu(e),e>=1&&(this.dur=0),!0}},a_=(n,t)=>(n>=0?"+":"\u2212")+Math.abs(n).toFixed(t);function l_({machine:n="d3d",id:t="controlroom"}={}){let e=qi[n];return{id:t,steps:4,layout:"split",mount(s,r){if(this.ctx=r,this.root=s,!document.getElementById(lp)){let a=document.createElement("style");a.id=lp,a.textContent=o_,document.head.appendChild(a)}let o=document.createElement("div");o.className="cr-root",o.innerHTML=`
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
            <span class="cr-tag in cr-intag cr-fade cr-off" style="display:none">inputs</span><span class="cr-ptitle">Thomson laser: T<sub>e</sub> along one line</span>
            <canvas class="cr-te"></canvas>
          </div>
          <div class="cr-panel ui-panel cr-coilsp cr-fade cr-off" style="top:610px">
            <span class="cr-tag in">inputs</span><span class="cr-ptitle">${e.coils.length} coil currents</span>
            <canvas class="cr-strip"></canvas>
          </div>
          <div class="cr-hint cr-hint2 cr-fade cr-off" style="top:620px">
            <b>Drag a coil</b> up or down to change its current.<br>Double-click a coil to reset it.
          </div>
        </div>`,s.appendChild(o),this.el=o,this.canvas=o.querySelector(".cr-flux"),this.teCanvas=o.querySelector(".cr-te"),this.stripCanvas=o.querySelector(".cr-strip"),this.ro={},o.querySelectorAll("[data-k]").forEach(a=>this.ro[a.dataset.k]=a),this.roText={},this.eq=new io(e),this.view=new Ga(this.canvas,e,r),this.sol=this.eq.solve(),this.vacRange=this.view.rangeInWall(this.sol.psiVac,this.sol),this.mix=new Float32Array(this.sol.psi.length),this.step=0,this.k={plasma:new gr(0),thomson:new gr(0),grid:new gr(0),probes:new gr(0)},this.coilTw=new Map,this.dirty=!0,this.drag=null,this.hover=null,this.demoT0=null,this.frameMs=[],this.lite=!1,this._bind(),this.resize()},_bind(){let s=this.canvas,r=o=>{let a=s.getBoundingClientRect();return[(o.clientX-a.left)/a.width*this.view.w,(o.clientY-a.top)/a.height*this.view.h]};this._down=o=>{if(this.step<2)return;let[a,l]=r(o),c=this.view.hitCoil(a,l);if(!c)return;o.preventDefault(),this.demoT0=null,this.coilTw.delete(c);let h=e.coils.find(u=>u.id===c);this.drag={id:c,y0:l,a0:this.eq.getCoil(c),max:Math.max(-h.range[0],h.range[1]),pid:o.pointerId};try{s.setPointerCapture(o.pointerId)}catch{}this.hover=c,this.dirty=!0},this._move=o=>{let[a,l]=r(o);if(this.drag){o.preventDefault();let h=this.drag.a0+(this.drag.y0-l)/260*this.drag.max;this.eq.setCoil(this.drag.id,h),this.dirty=!0;return}if(this.step<2){this.hover&&(this.hover=null,this.dirty=!0),s.style.cursor="default";return}let c=this.view.hitCoil(a,l);c!==this.hover&&(this.hover=c,this.dirty=!0),s.style.cursor=c?"ns-resize":"default"},this._up=o=>{if(this.drag){try{s.releasePointerCapture(this.drag.pid)}catch{}this.drag=null,this.dirty=!0}},this._dbl=o=>{if(this.step<2)return;let[a,l]=r(o),c=this.view.hitCoil(a,l);if(!c)return;o.preventDefault();let h=e.coils.find(u=>u.id===c);this._tweenCoil(c,h.default,450)},this._leaveC=()=>{!this.drag&&this.hover&&(this.hover=null,this.dirty=!0)}},_tweenCoil(s,r,o){if(this.ctx.reducedMotion||o<=0){this.eq.setCoil(s,r),this.coilTw.delete(s),this.dirty=!0;return}this.coilTw.set(s,{from:this.eq.getCoil(s),to:r,t0:mr(),dur:o})},enter(){let s=this.canvas;s.addEventListener("pointerdown",this._down),s.addEventListener("pointermove",this._move),s.addEventListener("pointerup",this._up),s.addEventListener("pointercancel",this._up),s.addEventListener("pointerleave",this._leaveC),s.addEventListener("dblclick",this._dbl),this.running=!0,this.dirty=!0;let r=()=>{this.running&&(this._frame(),this.raf=requestAnimationFrame(r))};this.raf=requestAnimationFrame(r)},leave(){this.running=!1,cancelAnimationFrame(this.raf);let s=this.canvas;if(this.drag)try{s.releasePointerCapture(this.drag.pid)}catch{}this.drag=null,this.demoT0=null,s.removeEventListener("pointerdown",this._down),s.removeEventListener("pointermove",this._move),s.removeEventListener("pointerup",this._up),s.removeEventListener("pointercancel",this._up),s.removeEventListener("pointerleave",this._leaveC),s.removeEventListener("dblclick",this._dbl)},setStep(s,{instant:r=!1}={}){let o=this.step;this.step=s;let a=r||this.ctx.reducedMotion;if(this.el.classList.toggle("cr-instant",a),a&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.el.classList.remove("cr-instant"))),this.demoT0=null,s<2)for(let u of e.coils)a?this.eq.setCoil(u.id,u.default):this.eq.getCoil(u.id)!==u.default&&this._tweenCoil(u.id,u.default,600);let l=o===0&&s===1?1600:700;this.k.plasma.go(s>=1?1:0,a?0:l),this.k.thomson.go(s>=2?1:0,a?0:700),this.k.grid.go(s>=3?1:0,a?0:900),this.k.probes.go(s>=3?1:0,a?0:900);let c=(u,d)=>this.el.querySelectorAll(u).forEach(f=>f.classList.toggle("cr-off",!d));c(".cr-ro",s===1||s===2),c(".cr-toy",s>=1),c(".cr-th",s>=2),c(".cr-hint2",s===2),c(".cr-outs-panel",s===3),c(".cr-coilsp",s===3),c(".cr-nomag",s===3);let h=this.el.querySelector(".cr-intag");h.style.display=s===3?"":"none",h.classList.toggle("cr-off",s!==3),this.dirty=!0,a&&this._frame()},resize(){this.view.resize(),this._teFit=this.ctx.fitCanvas(this.teCanvas),this._stripFit=this.ctx.fitCanvas(this.stripCanvas),this.dirty=!0},demo(){if(this.step<2){this.setStep(this.step===0?1:this.step,{instant:!1}),this.step===1&&(this.k.plasma.go(0,0),this.k.plasma.go(1,1600));return}this.drag=null,this.coilTw.clear();for(let s of e.coils)this.eq.setCoil(s.id,s.default);this.demoT0=mr(),this.dirty=!0},_demoScript(){return n==="mast"?[{t:[.4,2.6],d:{P2L:12e4},show:"P2L"},{t:[3.4,5.6],d:{P2L:12e4,P4U:-6e4,P4L:-6e4},show:"P4U"}]:[{t:[.4,2.6],d:{F8B:2e5,F9B:15e4},show:"F8B"},{t:[3.4,5.6],d:{F8B:2e5,F9B:15e4,F7A:-6e4,F7B:-6e4},show:"F7B"}]},_applyDemo(s){let r=(s-this.demoT0)/1e3,o=this._demoScript(),a=m=>e.coils.find(p=>p.id===m).default,l=new Set(o.flatMap(m=>Object.keys(m.d))),c={},h=null,u=this.ctx.reducedMotion,d=o[0],f=o[1],g=(m,p,_)=>{let y={};for(let v of l)y[v]=(m[v]||0)+((p[v]||0)-(m[v]||0))*_;return y},x=(m,p)=>u?r>=(m+p)/2?1:0:eu(pr((r-m)/(p-m)));r<d.t[1]?(c=g({},d.d,x(d.t[0],d.t[1])),h=r>d.t[0]?d.show:null):r<f.t[0]?(c=d.d,h=d.show):r<f.t[1]?(c=g(d.d,f.d,x(f.t[0],f.t[1])),h=f.show):r<6.4?(c=f.d,h=f.show):(c=g(f.d,{},x(6.4,8)),h=r<7.6?f.show:null);for(let m of l)this.eq.setCoil(m,a(m)+(c[m]||0));if(this.demoShow=h,r>=8.2){for(let m of l)this.eq.setCoil(m,a(m));this.demoT0=null,this.demoShow=null}this.dirty=!0},_frame(){let s=mr(),r=!1;for(let l of Object.values(this.k))r=l.tick(s)||r;for(let[l,c]of this.coilTw){let h=pr((s-c.t0)/c.dur);this.eq.setCoil(l,c.from+(c.to-c.from)*eu(h)),h>=1&&this.coilTw.delete(l),this.dirty=!0}if(this.demoT0!==null&&this._applyDemo(s),!this.dirty&&!r)return;let o=mr();this.dirty&&(this.sol=this.eq.solve()),this.dirty=!1,this._draw();let a=mr()-o;this.frameMs.push(a),this.frameMs.length>40&&this.frameMs.shift(),!this.lite&&this.frameMs.length>=40&&this.frameMs.reduce((l,c)=>l+c,0)/40>24&&(this.lite=!0)},_draw(){let s=this.sol,r=this.view,o=this.k.plasma.v,a=pr(o),l=this.drag?this.drag.id:this.demoShow||this.hover,c=this.drag?{id:this.drag.id,amps:this.eq.getCoil(this.drag.id)}:this.demoShow?{id:this.demoShow,amps:this.eq.getCoil(this.demoShow)}:null,h={thomson:this.k.thomson.v>.01?this.k.thomson.v:!1,showGrid:this.k.grid.v>.01?this.k.grid.v:!1,probes:this.k.probes.v>.5?"struck":!1,highlight:this.step>=2?l:null,levels:this.lite?6:9,outside:this.lite?5:9};if(a>=.999||!s.hasPlasma)if(!s.hasPlasma||a<.001){let u=a<.001?{...s,psi:s.psiVac,hasPlasma:!1,lost:!1}:s;r.draw(u,{...h,vacuumRange:a<.001?this.vacRange:void 0,bar:c})}else r.draw(s,{...h,bar:c});else{let u=this.mix;for(let g=0;g<u.length;g++)u[g]=s.psiVac[g]+a*s.psiPlasma[g];let d=1-pr((a-.35)/.55);r.draw({...s,psi:u,hasPlasma:!1,lost:!1},{...h,vacuumRange:this.vacRange,vacuumAlpha:d});let f=pr((a-.25)/.75);f>.001&&r.draw(s,{...h,clear:!1,alpha:f,reveal:f,showCoils:!1,showWall:!1,showGrid:!1,probes:!1,thomson:!1,outside:0,lostLabel:""})}this._readouts(s,a),this.k.thomson.v>.01&&this._drawTe(s),(this.step===3||this.k.grid.v>.01)&&this._drawStrip(s)},_set(s,r){this.roText[s]!==r&&(this.roText[s]=r,this.ro[s]&&(this.ro[s].innerHTML=r))},_readouts(s,r){let o=s.hasPlasma&&!s.lost,a=s.Ip*r/1e6;this._set("ip",`${a.toFixed(2)}<small>MA</small>`);let l=s.shape,c=o&&r>.98;this._set("kappa",c?l.kappa.toFixed(2):"&ndash;"),this._set("raxis",c?`${l.Raxis.toFixed(2)}<small>m</small>`:"&ndash;"),this._set("zaxis",c?`${a_(l.Zaxis,2)}<small>m</small>`:"&ndash;"),this._set("q95",c?s.q95Approx.toFixed(1):"&ndash;");let h="&ndash;";if(s.lost)h='<span style="color:var(--warn)">lost</span>';else if(c){let u=s.xpoints.filter(d=>d.active);h=s.limited?"limited":u.length>=2?"double null":u[0]&&u[0].Z<0?"lower X-point":"upper X-point"}this._set("cfg",h),this._set("q95b",o?s.q95Approx.toFixed(1):"&ndash;"),this._set("betan",o?s.betaNApprox.toFixed(1):"&ndash;")},_drawTe(s){let r=this.ctx.tokens,o=this.teCanvas,{w:a,h:l,ratio:c}=this._teFit,h=o.getContext("2d");h.setTransform(c,0,0,c,0,0),h.clearRect(0,0,a,l),h.globalAlpha=this.k.thomson.v;let u=jh(this.sol,e,{samples:140}),d=46,f=10,g=10,x=34,m=u.s[0],p=u.s[u.s.length-1],_=e.thomson.Te0*1.08,y=w=>d+(w-m)/(p-m)*(a-d-f),v=w=>l-x-w/_*(l-x-g);h.fillStyle="rgba(255,90,200,0.08)";for(let w=0;w<u.s.length-1;w++)u.psiN[w]<1&&s.hasPlasma&&h.fillRect(y(u.s[w]),g,y(u.s[w+1])-y(u.s[w])+.5,l-x-g);h.strokeStyle="rgba(255,255,255,0.18)",h.lineWidth=1,h.beginPath(),h.moveTo(d,g),h.lineTo(d,l-x),h.lineTo(a-f,l-x),h.stroke(),h.font=`400 18px ${r.fontMono}`,h.fillStyle=r.ink3,h.textBaseline="top",h.textAlign="center";let T=e.thomson.orientation==="vertical"?[-1,0,1]:[.5,1,1.5];for(let w of T)h.fillText(String(w),y(w),l-x+6),h.beginPath(),h.moveTo(y(w),l-x),h.lineTo(y(w),l-x+4),h.stroke();h.textAlign="right",h.fillText(u.coord==="Z"?"Z (m)":"R (m)",a-f,l-x+6),h.textAlign="left",h.textBaseline="top",h.fillText("Te keV",d+8,g),h.textAlign="right",h.textBaseline="middle";for(let w of[1,2,3].filter(R=>R<_))h.fillText(String(w),d-8,v(w));h.strokeStyle="rgba(255,180,84,0.35)",h.lineWidth=1.5,h.beginPath();for(let w=0;w<u.s.length;w++){let R=y(u.s[w]),b=v(u.Te[w]);w?h.lineTo(R,b):h.moveTo(R,b)}h.stroke();let S=u.channels;h.fillStyle=r.coil;for(let w=0;w<S.s.length;w++)h.beginPath(),h.arc(y(S.s[w]),v(S.Te[w]),2.6,0,Math.PI*2),h.fill();h.globalAlpha=1},_drawStrip(s){let r=this.ctx.tokens,o=this.stripCanvas,{w:a,h:l,ratio:c}=this._stripFit,h=o.getContext("2d");h.setTransform(c,0,0,c,0,0),h.clearRect(0,0,a,l);let u=e.coils,d=u.length,f=4,g=(a-f*(d-1))/d,x=l/2;h.strokeStyle="rgba(255,255,255,0.18)",h.lineWidth=1,h.beginPath(),h.moveTo(0,x),h.lineTo(a,x),h.stroke(),u.forEach((m,p)=>{let _=s.coils[m.id]||0,y=Math.max(-m.range[0],m.range[1]),v=Math.max(-1,Math.min(1,_/(.6*y))),T=p*(g+f),S=v*(x-4);h.fillStyle=m.group==="solenoid"?"rgba(255,180,84,0.55)":r.coil,h.fillRect(T,Math.min(x,x-S),g,Math.max(1.5,Math.abs(S)))})}}}var cp=l_();var ri=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;var _e=(n,t,e)=>Math.max(t,Math.min(e,n)),jt=(n,t,e)=>n+(t-n)*e,ni=class{constructor(){this.v=new Map,this.tw=new Map}get(t,e=0){return this.v.has(t)?this.v.get(t):e}target(t,e=0){let i=this.tw.get(t);return i?i.to:this.get(t,e)}set(t,e,{dur:i=700,delay:s=0,instant:r=!1,ease:o=ri}={}){if(r||i<=0){this.tw.delete(t),this.v.set(t,e);return}let a=this.get(t,e);if(a===e&&!this.tw.has(t)){this.v.set(t,e);return}this.tw.set(t,{from:a,to:e,t0:performance.now()+s,dur:i,ease:o})}finish(){for(let[t,e]of this.tw)this.v.set(t,e.to);this.tw.clear()}step(t){let e=!1;for(let[i,s]of this.tw){let r=_e((t-s.t0)/s.dur,0,1);if(t<s.t0){this.v.has(i)||this.v.set(i,s.from),e=!0;continue}this.v.set(i,jt(s.from,s.to,s.ease(r))),r>=1?this.tw.delete(i):e=!0}return e}},ii=class{constructor(t,e){this.draw=t,this.values=e,this.raf=0,this.dirty=!0,this._tick=this._tick.bind(this)}start(){this.raf||(this.raf=requestAnimationFrame(this._tick))}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}_tick(t){this.raf=requestAnimationFrame(this._tick),(this.values.step(t)||this.dirty)&&(this.dirty=!1,this.draw(t))}};function $i(n,t){let e=document.createElement("canvas");e.style.cssText="position:absolute;left:0;top:0;width:1600px;height:900px;touch-action:none;user-select:none;-webkit-user-select:none;",n.appendChild(e);let i=e.getContext("2d"),s={canvas:e,g:i,fit(){let{ratio:r}=t.fitCanvas(e);s.ratio=r},begin(){i.setTransform(s.ratio,0,0,s.ratio,0,0),i.clearRect(0,0,1600,900)},toDesign(r){let o=e.getBoundingClientRect();return{x:(r.clientX-o.left)/o.width*1600,y:(r.clientY-o.top)/o.height*900}}};return s.fit(),s}function V(n,t,e,i=500){let s=t==="mono"?n.fontMono:t==="display"?n.fontDisplay:n.fontBody;return`${i} ${e}px ${s}`}function nt(n,t,e,i,{f:s,color:r,align:o="left",base:a="alphabetic",alpha:l=1}={}){if(l<=.002)return 0;n.save(),n.globalAlpha*=l,s&&(n.font=s),r&&(n.fillStyle=r),n.textAlign=o,n.textBaseline=a,n.fillText(t,e,i);let c=n.measureText(t).width;return n.restore(),c}function c_(n,t,e){n.save(),n.font=e;let i=n.measureText(t).width;return n.restore(),i}function Yt(n,t,e,i,{alpha:s=1,align:r="left",base:o="alphabetic"}={}){let a=0;for(let[c,h]of t)a+=c_(n,c,h);let l=r==="center"?e-a/2:r==="right"?e-a:e;for(let[c,h,u]of t)l+=nt(n,c,l,i,{f:h,color:u,alpha:s,base:o});return l}function bt(n,t,e,i,s,r,o=1.5,a=1,l=null){a<=.002||(n.save(),n.globalAlpha*=a,n.strokeStyle=r,n.lineWidth=o,l&&n.setLineDash(l),n.beginPath(),n.moveTo(t,e),n.lineTo(i,s),n.stroke(),n.restore())}function An(n,t,e,i,s,r){r=Math.min(r,Math.abs(i)/2,Math.abs(s)/2),n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Bt(n,t){let e=parseInt(n.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function Xa(n,t,e=-1/0,i=1/0){let s=n.map((a,l)=>[a,l]).sort((a,l)=>a[0]-l[0]),r=s.map(a=>a[0]);for(let a=0;a<40;a++){for(let l=1;l<r.length;l++){let c=r[l]-r[l-1];if(c<t){let h=(t-c)/2;r[l-1]-=h,r[l]+=h}}r.length&&(r[0]<e&&(r[0]=e),r[r.length-1]>i&&(r[r.length-1]=i))}let o=new Array(n.length);return s.forEach((a,l)=>o[a[1]]=r[l]),o}var si=class{constructor(){this.ids=new Set}after(t,e){let i=setTimeout(()=>{this.ids.delete(i),e()},t);return this.ids.add(i),i}clear(){this.ids.forEach(clearTimeout),this.ids.clear()}};var Za=.99982;var hp=129;function fp(n,t,e=0,i=null){let s=n.shots[e],r=s.psi,[o,a,l]=r.shape,c=s.scorer_truth,h=c.cons_names,u=T=>h.every((S,w)=>c.cons[w][T]!==null&&Number.isFinite(c.cons[w][T])),d=i??Math.floor(o/2);for(let T=0;T<o&&!u(d);T++){let S=Math.floor(o/2)+(T%2?-(T+1)/2:T/2);S>=0&&S<o&&u(S)&&(d=S)}let f=new Int16Array(t,r.byte_offset+d*a*l*2,a*l),g=new Float64Array(a*l);for(let T=0;T<a*l;T++)g[T]=f[T]*r.scale+r.value_offset;let x=c.lcfs,m=x.shape[1],p=new Float32Array(new Float32Array(t,x.byte_offset+d*m*2*4,m*2)),_={};h.forEach((T,S)=>_[T]=c.cons[S][d]);let y=n.grid.R_m,v=n.grid.Z_m;return{grid:hr(y[0],y[y.length-1],v[0],v[v.length-1],l,a),psi:g,lcfs:p,cons:_,shotId:s.id,tMs:s.times_ms[d],frame:d}}function up(n,t,e){let i=new Float64Array(e.n*e.m);for(let s=0;s<e.m;s++)for(let r=0;r<e.n;r++)i[s*e.n+r]=ge(n,t,e.R[r],e.Z[s]);return i}function h_(n,t){let e=0;for(let r=0;r<n.length;r++)e+=n[r];e/=n.length;let i=0,s=0;for(let r=0;r<n.length;r++)i+=(n[r]-e)**2,s+=(t[r]-n[r])**2;return 1-s/i}function pp(n,t,e,i){let s=t.n,r=1/0,o=-1/0,a=1/0,l=-1/0;for(let d=0;d<e.length;d+=2)r=Math.min(r,e[d]),o=Math.max(o,e[d]),a=Math.min(a,e[d+1]),l=Math.max(l,e[d+1]);let c=0;for(let d=1;d<t.m-1;d++){let f=t.Z[d];if(!(f<a||f>l))for(let g=1;g<s-1;g++){let x=t.R[g];if(x<r||x>o||!Ue(e,x,f))continue;let m=d*s+g,p=(n[m+1]-n[m-1])/(2*t.dR),_=(n[m+s]-n[m-s])/(2*t.dZ);c+=(p*p+_*_)/(x*x)*2*Math.PI*x}}c*=t.dR*t.dZ;let h=0,u=e.length>>1;for(let d=0,f=u-1;d<u;f=d++){let g=.5*(e[2*d]+e[2*f]),x=.5*(e[2*d+1]+e[2*f+1]),m=Math.hypot(e[2*d]-e[2*f],e[2*d+1]-e[2*f+1]),p=(g-t.Rmin)/t.dR,_=(x-t.Zmin)/t.dZ,y=Math.max(1,Math.min(s-2,Math.round(p))),T=Math.max(1,Math.min(t.m-2,Math.round(_)))*s+y,S=(n[T+1]-n[T-1])/(2*t.dR),w=(n[T+s]-n[T-s])/(2*t.dZ);h+=Math.hypot(S,w)/g*m}return c/(Math.max(i,.1)*h*h)}function mp(n){let t=n.grid,{n:e,m:i}=t,s=qi.d3d,r=to(t,s),o=n.cons,a={sign:-1,wall:s.wall,hint:{R:o.R_axis,Z:o.Z_axis,r:.35}},l=0,c=n.lcfs.length>>1;for(let w=0;w<c;w++)l+=ge(n.psi,t,n.lcfs[2*w],n.lcfs[2*w+1]);let h=l/c,u=ge(n.psi,t,o.R_axis,o.Z_axis),d=new Float64Array(e*i);for(let w=0;w<i;w++)for(let R=0;R<e;R++){let b=w*e+R,M=R===0?(n.psi[b+1]-n.psi[b])/t.dR:R===e-1?(n.psi[b]-n.psi[b-1])/t.dR:(n.psi[b+1]-n.psi[b-1])/(2*t.dR),E=w===0?(n.psi[b+e]-n.psi[b])/t.dZ:w===i-1?(n.psi[b]-n.psi[b-e])/t.dZ:(n.psi[b+e]-n.psi[b-e])/(2*t.dZ),D=t.R[R],k=t.Z[w],B=Math.exp(-(((D-o.R_axis)/.8)**2)-((k-o.Z_axis)/1.25)**2);d[b]=B*(-(k-o.Z_axis)*E-.3*M)}let f=0;for(let w=0;w<e*i;w++)f+=n.psi[w];f/=e*i;let g=0,x=0;for(let w=0;w<e*i;w++)g+=(n.psi[w]-f)**2,x+=d[w]**2;let m=Math.sqrt((1-Za)*g/x);for(let w=0;w<e*i;w++)d[w]*=m;let p=n.psi.map((w,R)=>w+d[R]),_=h_(n.psi,p),y=hr(t.Rmin,t.Rmax,t.Zmin,t.Zmax,hp,hp),v=up(n.psi,t,y),T=up(d,t,y),S={d:n,g:t,fg:y,actx:r,opts:a,psiA:u,psiB:h,dpsi:d,psiUp:v,dUp:T,r2at1:_,kScale:m,machine:s};return S.aT=dr(n.psi,r,a),S.bT=gp(v,y,h,u,o.R_axis,o.Z_axis),S.liT=pp(v,y,S.bT.c,eo(n.lcfs,null).R0),S}var u_=[5e-4,.001,.002,.004,.008,.016,.03];function gp(n,t,e,i,s,r,o=0){for(let a of u_){if(a<o)continue;let l=e-a*(e-i),c=null,h=1/0;for(let u of vn(n,t.n,t.m,l,t)){if(!u.closed||u.length<24||!Ue(u,s,r))continue;let d=Math.abs(ur(u));d<h&&(h=d,c=u)}if(c)return{c,eps:a}}return null}function dp(n,t,e,i,s){let r=n.length>>1,o=NaN;for(let a=0,l=r-1;a<r;l=a++){let c=n[2*l]-t,h=n[2*l+1]-e,u=n[2*a]-t-c,d=n[2*a+1]-e-h,f=i*d-s*u;if(Math.abs(f)<1e-14)continue;let g=(c*d-h*u)/f,x=(c*s-h*i)/f;g>0&&x>=0&&x<=1&&!(g>o)&&(o=g)}return o}function d_(n,t,e,i,s){let r=new Float32Array(n.length);for(let o=0;o<n.length;o+=2){let a=n[o]-i,l=n[o+1]-s,c=Math.hypot(a,l)||1,h=a/c,u=l/c,d=dp(t,i,s,h,u),f=dp(e,i,s,h,u),g=Number.isFinite(d)&&Number.isFinite(f)?f-d:0;r[o]=n[o]+g*h,r[o+1]=n[o+1]+g*u}return r}function xp(n,t){let{g:e,d:i,dpsi:s,psiUp:r,dUp:o,fg:a}=n,l=i.cons,c=e.n*e.m,h=new Float64Array(c);for(let _=0;_<c;_++)h[_]=i.psi[_]+t*s[_];let u=dr(h,n.actx,n.opts);if(!u.ok)return{ok:!1};let d=new Float64Array(r.length);for(let _=0;_<d.length;_++)d[_]=r[_]+t*o[_];let f=n.bT,g=n.psiB+(u.psiBoundary-n.aT.psiBoundary),x=gp(d,a,g,u.axis.psi,l.R_axis,l.Z_axis,f.eps);if(!x)return{ok:!1};let m=d_(i.lcfs,f.c,x.c,l.R_axis,l.Z_axis),p=eo(m,null);return{ok:!0,lcfs:m,R_axis:l.R_axis+(u.axis.R-n.aT.axis.R),Z_axis:l.Z_axis+(u.axis.Z-n.aT.axis.Z),kappa:p.kappa,tri_top:p.deltaU,tri_bot:p.deltaL,volume:p.volume,li:l.li*(pp(d,a,x.c,p.R0)/n.liT)}}function vs(n,t,e){return e.map(i=>vn(n,t.n,t.m,i,t))}function vp(n){let t=1/0,e=-1/0,i=1/0,s=-1/0,r=0,o=0,a=0,l=0;for(let c=0;c<n.length;c+=2){let h=n[c],u=n[c+1];h<t&&(t=h,a=u),h>e&&(e=h,l=u),u>s&&(s=u,r=h),u<i&&(i=u,o=h)}return{Rmin:t,Rmax:e,Zmin:i,Zmax:s,RatZmax:r,RatZmin:o,ZatRmin:a,ZatRmax:l,R0:.5*(t+e),a:.5*(e-t)}}var wp=40,f_=n=>Math.pow(wp,_e(n,0,1)),yp=n=>Math.log(n)/Math.log(wp),p_=1.676,m_=-.008,qa={s:262,cx:850,cy:450},ys={s:92,cx:642,cy:238},g_=[.1,.2,.3,.4,.5,.6,.7,.8,.9],x_=[.05,.15,.25,.35,.45],v_=[1.04,1.12,1.24,1.4],nu=1140,_p=1560,y_="Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics",iu=[{k:"R_axis",sym:"R",sub:"axis",unit:"m",dp:3,grp:0},{k:"Z_axis",sym:"Z",sub:"axis",unit:"m",dp:3,grp:0},{k:"kappa",sym:"\u03BA",sub:"",unit:"\u2013",dp:3,grp:1},{k:"tri_top",sym:"\u03B4",sub:"top",unit:"\u2013",dp:3,grp:2},{k:"tri_bot",sym:"\u03B4",sub:"bot",unit:"\u2013",dp:3,grp:2},{k:"volume",sym:"V",sub:"",unit:"m\xB3",dp:2,grp:3},{k:"li",sym:"l",sub:"i",unit:"\u2013",dp:3,grp:4}],bp=(n,t)=>(n<0?"\u2212":"")+Math.abs(n).toFixed(t),Mp=n=>n<9.95?n.toFixed(1):String(Math.round(n)),Sp={id:"anatomy",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new ni,this.timers=new si,this.cv=$i(n,t),this.loop=new ii(()=>this.draw(),this.v),this.step=0,this.model=null,this.pinkM=-1,this.v.set("mag",0,{instant:!0}),this.v.set("mp",0,{instant:!0}),this.v.set("ui0",1,{instant:!0});let e=document.createElement("div");return e.className="ui-row",e.style.cssText=`position:absolute;left:${nu-6}px;top:560px;opacity:0;pointer-events:none;z-index:3;transition:opacity .3s var(--ease), top .6s var(--ease);user-select:none;-webkit-user-select:none;touch-action:none;`,e.innerHTML='<input class="ui-slider" type="range" min="0" max="1000" step="1" value="0" aria-label="magnify the difference" style="width:300px;--slider-accent:var(--plasma);touch-action:none"><span class="ui-readout" style="min-width:86px;text-align:right"></span>',n.appendChild(e),this.sliderBox=e,this.slider=e.querySelector("input"),this.readout=e.querySelector(".ui-readout"),this.slider.addEventListener("input",()=>{this.timers.clear(),this.v.set("mag",Number(this.slider.value)/1e3,{instant:!0}),this.loop.dirty=!0}),this.slider.addEventListener("pointerdown",()=>this.dragging=!0),window.addEventListener("pointerup",this._up=()=>this.dragging=!1),this.slider.addEventListener("keydown",i=>{["ArrowLeft","ArrowRight","PageUp","PageDown"," "].includes(i.key)&&(i.preventDefault(),this.slider.blur())}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Promise.all([t.data("replay.json"),t.data("replay.bin")]).then(([i,s])=>{let r=fp(i,s,0);this.model=mp(r),this.prepare(),this.loop.dirty=!0}).catch(i=>{console.warn("anatomy: replay data unavailable",i),this.loop.dirty=!0})},prepare(){let n=this.model,t=n.d,e=n.fg,i=g=>n.psiA+g*(n.psiB-n.psiA);this.wall=n.machine.wall;let s=t.cons.R_axis,r=t.cons.Z_axis,o=g=>g.filter(x=>x.closed&&Ue(x,s,r));this.levIn=g_.map(i),this.levLi=x_.map(i),this.levSol=v_.map(i),this.trueIn=vs(n.psiUp,e,this.levIn).map(o),this.trueLi=vs(n.psiUp,e,this.levLi).map(o),this.trueSol=vs(n.psiUp,e,this.levSol),this.ext=vp(t.lcfs);let a=e.n,l=document.createElement("canvas");l.width=a,l.height=e.m;let c=l.getContext("2d"),h=c.createImageData(a,e.m),[u,d,f]=[98,228,255];for(let g=0;g<e.m;g++)for(let x=0;x<a;x++){let m=(n.psiUp[g*a+x]-n.psiA)/(n.psiB-n.psiA),p=((e.m-1-g)*a+x)*4,_=_e(1-m,0,1);h.data[p]=u,h.data[p+1]=d,h.data[p+2]=f,h.data[p+3]=m<=1.02?Math.round(255*(.05+.2*Math.pow(_,1.4))):0}c.putImageData(h,0,0),this.fillImg=l,this.pink=null,this.pinkM=-1},pinkAt(n){if(this.pink&&Math.abs(n-this.pinkM)<.001)return this.pink;let t=this.model,e=new Float64Array(t.psiUp.length);for(let a=0;a<e.length;a++)e[a]=t.psiUp[a]+n*t.dUp[a];let i=xp(t,n),s=i.ok?i.R_axis:t.d.cons.R_axis,r=i.ok?i.Z_axis:t.d.cons.Z_axis,o=a=>a.filter(l=>l.closed&&Ue(l,s,r));return this.pink={M:n,est:i,inner:vs(e,t.fg,this.levIn).map(o),li:vs(e,t.fg,this.levLi).map(o),sol:vs(e,t.fg,this.levSol)},this.pinkM=n,this.pink},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.dragging=!1},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear();let i=t||this.ctx.reducedMotion,s=(a,l=0)=>({dur:a,delay:l,instant:i});this.v.set("mp",n===1?1:0,s(1100)),this.v.set("ui0",n===0?1:0,s(500,n===0?300:0));let r=n===1;this.v.set("ch",r?1:0,s(r?400:300,r?200:0)),this.v.set("bt",r?1:0,s(r?650:250,r?300:0)),this.v.set("rb",r?1:0,s(r?500:250,r?850:0)),this.v.set("bb",r?1:0,s(r?600:250,r?1e3:0));for(let a=0;a<5;a++)this.v.set(`a${a}`,n===2?1:0,s(n===2?420:250,n===2?300+a*240:0));this.v.set("ui2",n===2?1:0,s(500,n===2?250:0)),t?this.v.set("mag",0,{instant:!0}):n===1&&e!==1&&this.v.set("mag",0,s(700));let o=n!==1;this.sliderBox.style.opacity=o?"1":"0",this.sliderBox.style.pointerEvents=o?"auto":"none",this.sliderBox.style.top=n===2?"672px":"588px",this.loop.dirty=!0},demo(){if(this.step===1)return;this.timers.clear();let n=this.ctx.reducedMotion;this.step===0?(this.v.set("mag",yp(25),{dur:1700,instant:n}),this.timers.after(2300,()=>this.v.set("mag",0,{dur:1700,instant:n}))):(this.v.set("mag",yp(30),{dur:2200,instant:n}),this.timers.after(3e3,()=>this.v.set("mag",0,{dur:1600,instant:n}))),this.loop.dirty=!0},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("mag"),i=f_(e);this.dragging||(this.slider.value=String(Math.round(e*1e3))),this.readout.innerHTML=`<small style="margin:0 2px 0 0">\xD7</small>${Mp(i)}`;let s=this.v.get("mp"),r={s:jt(qa.s,ys.s,s),cx:jt(qa.cx,ys.cx,s),cy:jt(qa.cy,ys.cy,s)};if(this.model){let o=this.pinkAt(i);this.drawMap(n,r,o,s);let a=this.v.get("ui0");a>.01&&this.drawStep0(n,a,i),this.v.get("ch")>.01&&this.drawChart(n),(this.v.get("ui2")>.01||this.v.get("a0")>.01)&&this.drawStep2(n,r,o)}else nt(n,"loading DIII-D frame\u2026",850,450,{f:V(t,"body",20,500),color:t.ink3,align:"center"});nt(n,y_,_p,852,{f:V(t,"body",18,400),color:t.ink3,align:"right",alpha:.85})},X(n,t){return n.cx+(t-p_)*n.s},Y(n,t){return n.cy-(t-m_)*n.s},polyPath(n,t,e,i){n.moveTo(this.X(t,e[0]),this.Y(t,e[1]));for(let s=2;s<e.length;s+=2)n.lineTo(this.X(t,e[s]),this.Y(t,e[s+1]));i&&n.closePath()},wallPath(n,t){let e=this.wall;n.beginPath(),n.moveTo(this.X(t,e[0][0]),this.Y(t,e[0][1]));for(let i=1;i<e.length;i++)n.lineTo(this.X(t,e[i][0]),this.Y(t,e[i][1]));n.closePath()},strokeSet(n,t,e,i,s,r,o=0){n.beginPath();for(let a of e)for(let l of a)this.polyPath(n,t,l,l.closed);o>0&&(n.strokeStyle=Bt(i,r*.22),n.lineWidth=s+o,n.stroke()),n.strokeStyle=Bt(i,r),n.lineWidth=s,n.stroke()},drawMap(n,t,e,i){let s=this.T,r=this.model,o=t.s/qa.s,a=f=>Math.max(1,f*jt(1,.75,i)),l=r.fg;n.save(),n.lineJoin="round",n.lineCap="round",this.wallPath(n,t),n.fillStyle="rgba(255,255,255,0.018)",n.fill(),n.strokeStyle=Bt("#b9b6ad",.55),n.lineWidth=a(1.5),n.stroke(),this.wallPath(n,t),n.clip(),n.save(),n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.clip(),n.globalCompositeOperation="lighter",n.imageSmoothingEnabled=!0;let c=this.X(t,l.Rmin),h=this.Y(t,l.Zmax);n.drawImage(this.fillImg,c,h,(l.Rmax-l.Rmin)*t.s,(l.Zmax-l.Zmin)*t.s),n.restore();let u=this.v.get("a3");u>.01&&(n.save(),n.globalCompositeOperation="lighter",n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.fillStyle=Bt(s.flux,.1*u),n.fill(),n.restore()),n.save(),n.globalCompositeOperation="lighter",this.strokeSet(n,t,this.trueSol,s.flux,a(1.3),.28),this.strokeSet(n,t,this.trueIn,s.flux,a(1.6),.62,4*o);let d=this.v.get("a4");d>.01&&this.strokeSet(n,t,this.trueLi,s.flux,a(1.2),.45*d),n.beginPath(),this.polyPath(n,t,r.d.lcfs,!0),n.strokeStyle=Bt(s.flux,.25),n.lineWidth=a(8)*o+2,n.stroke(),n.strokeStyle=s.flux,n.lineWidth=a(2.6),n.stroke(),n.restore(),n.save(),this.strokeSet(n,t,e.sol,s.plasma,a(1.1),.4),this.strokeSet(n,t,e.inner,s.plasma,a(1.2),.9),d>.01&&this.strokeSet(n,t,e.li,s.plasma,a(1),.6*d),e.est.ok&&(n.globalCompositeOperation="lighter",n.beginPath(),this.polyPath(n,t,e.est.lcfs,!0),n.strokeStyle=Bt(s.plasma,.22),n.lineWidth=a(7)*o+1,n.stroke(),n.globalCompositeOperation="source-over",n.strokeStyle=s.plasma,n.lineWidth=a(1.8),n.stroke()),n.restore(),n.restore()},drawStep0(n,t,e){let i=this.T,s=this.model.d,r=nu,o=(1-t)*12,a=150+o;bt(n,r,a-7,r+34,a-7,i.flux,2.6,t),nt(n,"truth: EFIT flux map",r+48,a,{f:V(i,"body",22,500),color:i.ink,alpha:t}),Yt(n,[["DIII-D, shot file ",V(i,"body",18,400),i.ink3],[`${s.shotId} \xB7 ${Math.round(s.tMs)} ms`,V(i,"mono",18,500),i.ink3]],r+48,a+28,{alpha:t}),nt(n,"bright line: the scorer\u2019s LCFS",r+48,a+54,{f:V(i,"body",18,400),color:i.ink3,alpha:t}),a=280+o,bt(n,r,a-7,r+34,a-7,i.plasma,2,t),nt(n,"illustration",r+48,a,{f:V(i,"body",22,600),color:i.plasma,alpha:t}),nt(n,"truth plus an error scaled to",r+48,a+28,{f:V(i,"body",18,400),color:i.ink2,alpha:t}),Yt(n,[["R\xB2 = ",V(i,"body",18,400),i.ink2],[String(Za),V(i,"mono",18,600),i.ink2],[" (not a model output)",V(i,"body",18,400),i.ink3]],r+48,a+54,{alpha:t}),a=430+o,nt(n,"PIXEL R\xB2 AT \xD71",r,a,{f:V(i,"body",18,600),color:i.ink3,alpha:t}),nt(n,this.model.r2at1.toFixed(5),r-3,a+64,{f:V(i,"mono",64,600),color:i.ink,alpha:t}),a=572+o,nt(n,"MAGNIFY THE DIFFERENCE",r,a,{f:V(i,"body",18,600),color:i.ink3,alpha:t}),Yt(n,[["drawn: truth + ",V(i,"body",18,400),i.ink3],[`${Mp(e)} \xD7 error`,V(i,"mono",18,500),e>1.05?i.plasma:i.ink3]],r,668+o,{alpha:t}),nt(n,"same \u03C8 levels in both maps",r,694+o,{f:V(i,"body",18,400),color:i.ink3,alpha:t})},drawChart(n){let t=this.T,e=this.v.get("ch"),i=this.v.get("bt"),s=this.v.get("rb"),r=this.v.get("bb"),o=800,a=1540,l=a-o,c=3,h=ys.cy+1.36*ys.s+36;nt(n,"flux map",ys.cx,h,{f:V(t,"body",18,500),color:t.ink2,align:"center",alpha:e}),Yt(n,[["R\xB2 ",V(t,"body",18,400),t.ink3],["0.99982",V(t,"mono",20,600),t.flux]],ys.cx,h+26,{align:"center",alpha:e});let u=V(t,"body",22,400),d=V(t,"mono",22,500);Yt(n,[["S = ",u,t.ink2],["0.55",d,t.ink],[" R\xB2",u,t.ink2],["\u03C8",u,t.flux],["  + ",u,t.ink3],["0.15",d,t.ink],[" R\xB2",u,t.ink2],["(q95, \u03B2N)",u,t.ink2],["  + ",u,t.ink3],["0.10",d,t.ink],[" (1 \u2212 D",u,t.ink2],["LCFS",V(t,"body",18,400),t.ink2],[")",u,t.ink2],["  + ",u,t.ink3],["0.20",d,t.ink],[" Consistency",u,t.warn]],o,104,{alpha:e});let f=[{w:.55,name:"\u03C8 map",val:"55%",col:t.flux},{w:.15,name:"q95, \u03B2N",val:"15%",col:t.ink2},{w:.1,name:"LCFS",val:"10%",col:t.ink3},{w:.2,name:"Consistency",val:"20%",col:t.warn}],g=[{w:.01,name:"\u03C8 map",val:"\u22481%",col:t.flux},{w:.26,name:"scalars + boundary",val:"26%",col:t.ink2},{w:.73,name:"Consistency",val:"73%",col:t.warn}],x=E=>{let D=o;return E.map(k=>{let B={...k,x0:D,x1:D+k.w*l};return D=B.x1,B})},m=x(f),p=x(g),_=262,y=46,v=512,T=46;nt(n,"WEIGHT IN THE SCORE",o,168,{f:V(t,"body",18,600),color:t.ink3,alpha:e}),nt(n,"SHARE OF THE POINTS I LOST",o,690,{f:V(t,"body",18,600),color:t.ink3,alpha:e*r}),Yt(n,[["lost: 1 \u2212 ",V(t,"body",18,400),t.ink3],["0.99137",V(t,"mono",18,500),t.ink2],[" = ",V(t,"body",18,400),t.ink3],["0.00863",V(t,"mono",18,600),t.warn],["  \xB7  my first submission, Development phase",V(t,"body",18,400),t.ink3]],o,718,{alpha:e*r});let S=(E,D,k,B,L)=>{let P=Math.min(E.x1,o+l*B);if(P<=E.x0+.5)return;let z=E.x0+(E.x0>o?c/2:0),W=Math.max(z+2,P-(E.x1<a-.5?c/2:0));n.save(),n.globalAlpha=L;let it=n.createLinearGradient(0,D,0,D+k);it.addColorStop(0,Bt(E.col,.95)),it.addColorStop(1,Bt(E.col,.7)),n.fillStyle=it,An(n,z,D,W-z,k,3),n.fill(),n.restore()};if(s>.01){let E=[[m[0].x0,m[0].x1,p[0].x0,p[0].x1,t.flux],[m[1].x0,m[2].x1,p[1].x0,p[1].x1,t.ink2],[m[3].x0,m[3].x1,p[2].x0,p[2].x1,t.warn]],D=_+y+4,k=v-4,B=(D+k)/2;n.save(),n.globalCompositeOperation="lighter";for(let[L,P,z,W,it]of E){let J=n.createLinearGradient(0,D,0,k);J.addColorStop(0,Bt(it,.2*s)),J.addColorStop(1,Bt(it,.34*s)),n.fillStyle=J,n.beginPath(),n.moveTo(L+1.5,D),n.bezierCurveTo(L+1.5,B,z+1.5,B,z+1.5,k),n.lineTo(Math.max(z+3,W-1.5),k),n.bezierCurveTo(Math.max(z+3,W-1.5),B,P-1.5,B,P-1.5,D),n.closePath(),n.fill()}n.restore()}m.forEach(E=>S(E,_,y,i,e)),m.forEach((E,D)=>{let k=e*_e((i*l-(E.x0-o))/Math.max(30,E.x1-E.x0),0,1),B=(E.x0+E.x1)/2;nt(n,E.val,B,_-14,{f:V(t,"mono",34,600),color:D===1||D===2?t.ink:E.col,align:"center",alpha:k}),nt(n,E.name,B,_-58,{f:V(t,"body",18,500),color:t.ink2,align:"center",alpha:k})}),p.forEach(E=>S(E,v,T,r,e));let w=e*_e((r-.3)/.7,0,1);nt(n,"\u22481%",o-14,v+34,{f:V(t,"mono",34,600),color:t.flux,align:"right",alpha:w}),nt(n,"\u03C8 map",o-14,v+66,{f:V(t,"body",18,500),color:t.ink2,align:"right",alpha:w});let R=p[1];nt(n,"26%",(R.x0+R.x1)/2,v+T+42,{f:V(t,"mono",34,600),color:t.ink,align:"center",alpha:w}),nt(n,"scalars + boundary",(R.x0+R.x1)/2,v+T+70,{f:V(t,"body",18,500),color:t.ink2,align:"center",alpha:w});let b=p[2],M=nt(n,"73%",b.x0+18,v+34,{f:V(t,"mono",36,700),color:t.bg,alpha:w});nt(n,"Consistency",b.x0+18+M+14,v+31,{f:V(t,"body",22,600),color:t.bg,alpha:w}),nt(n,"20% of the weight, 73% of the loss",b.x1,v+T+42,{f:V(t,"body",20,500),color:t.warn,align:"right",alpha:w})},drawStep2(n,t,e){let i=this.T,r=this.model.d.cons,o=this.ext,a=v=>this.X(t,v),l=v=>this.Y(t,v),c=[0,1,2,3,4].map(v=>this.v.get(`a${v}`)),h=V(i,"body",20,500),u=(v,T,S,w,R,b,M="left",E=22)=>{let D=[[v,V(i,"body",E,600),R]];return T&&D.push([T,V(i,"body",18,500),R]),Yt(n,D,S,w,{alpha:b,align:M})};if(c[0]>.01){let v=a(r.R_axis),T=l(r.Z_axis),S=c[0],w=a(this.wall.reduce((b,M)=>Math.min(b,M[0]),9))-6,R=l(-1.2);if(bt(n,w,T,v-14,T,i.ink2,1.2,S*.8,[3,5]),bt(n,v,T+14,v,R,i.ink2,1.2,S*.8,[3,5]),bt(n,w-6,T,w+6,T,i.ink2,1.5,S),bt(n,v,R-6,v,R+6,i.ink2,1.5,S),u("Z","axis",w-12,T+7,i.ink,S,"right"),u("R","axis",v+10,R+7,i.ink,S,"left"),n.save(),n.globalCompositeOperation="lighter",n.globalAlpha=S,n.strokeStyle=i.flux,n.lineWidth=2,n.beginPath(),n.arc(v,T,8,0,Math.PI*2),n.moveTo(v-16,T),n.lineTo(v+16,T),n.moveTo(v,T-16),n.lineTo(v,T+16),n.stroke(),n.restore(),e.est.ok){let b=a(e.est.R_axis),M=l(e.est.Z_axis);Math.hypot(b-v,M-T)>1.5&&(n.save(),n.globalAlpha=S,n.strokeStyle=i.plasma,n.lineWidth=2,n.beginPath(),n.moveTo(b-9,M-9),n.lineTo(b+9,M+9),n.moveTo(b+9,M-9),n.lineTo(b-9,M+9),n.stroke(),n.restore())}}if(c[1]>.01){let v=c[1],T=l(o.Zmax)-30,S=a(o.Rmin),w=a(o.Rmax),R=a(o.Rmax)+34,b=l(o.Zmax),M=l(o.Zmin),E=i.ink2;bt(n,S,l(o.ZatRmin)-10,S,T-8,E,1,v*.6,[2,4]),bt(n,w,l(o.ZatRmax)-10,w,T-8,E,1,v*.6,[2,4]),bt(n,a(o.RatZmax)+10,b,R+8,b,E,1,v*.6,[2,4]),bt(n,a(o.RatZmin)+10,M,R+8,M,E,1,v*.6,[2,4]),this.dimArrow(n,S,T,w,T,i.ink,v),this.dimArrow(n,R,b,R,M,i.ink,v);let D=(S+w)/2;n.save(),n.globalAlpha=v,n.fillStyle=i.bg,n.fillRect(D-26,T-14,52,28),n.fillRect(R-22,(b+M)/2-16,44,32),n.restore(),nt(n,"2a",D,T+7,{f:V(i,"body",20,600),color:i.ink,align:"center",alpha:v}),nt(n,"2b",R,(b+M)/2+7,{f:V(i,"body",20,600),color:i.ink,align:"center",alpha:v}),Yt(n,[["\u03BA",V(i,"body",24,600),i.ink],[" = b / a",h,i.ink2]],R+14,(b+M)/2+52,{alpha:v})}if(c[2]>.01){let v=c[2],T=a(o.R0),S=l(o.Zmax),w=l(o.Zmin);bt(n,T,S-2,T,w+2,i.ink3,1.2,v,[5,6]);let R=(b,M,E,D,k)=>{let B=M+(k?22:-14)*0;bt(n,b,B,T,B,i.coil,2.2,v),bt(n,b,B-7,b,B+7,i.coil,2,v),bt(n,T,B-7,T,B+7,i.coil,2,v),n.save(),n.globalAlpha=v,n.fillStyle=i.coil,n.beginPath(),n.arc(b,M,4.5,0,Math.PI*2),n.fill(),n.restore(),u(E,D,(b+T)/2,B+(k?34:-14),i.coil,v,"center")};R(a(o.RatZmax),S,"\u03B4","top",!1),R(a(o.RatZmin),w,"\u03B4","bot",!0)}if(c[3]>.01){let v=a(r.R_axis+.05),T=l(r.Z_axis+.62);u("V","",v,T,i.ink,c[3],"center",24),nt(n,"enclosed volume",v,T+26,{f:V(i,"body",18,500),color:i.ink2,align:"center",alpha:c[3]})}if(c[4]>.01){let v=a(r.R_axis+.05),T=l(r.Z_axis-.5);u("l","i",v,T,i.ink,c[4],"center",24),nt(n,"how peaked the current is",v,T+26,{f:V(i,"body",18,500),color:i.ink2,align:"center",alpha:c[4]})}let d=this.v.get("ui2");if(d<.01)return;let f=e.est,g=nu,x=1420,m=_p,p=120;nt(n,"SCORER\u2019S TRUTH",x,p,{f:V(i,"body",18,600),color:i.flux,align:"right",alpha:d}),nt(n,"PINK MAP",m,p,{f:V(i,"body",18,600),color:i.plasma,align:"right",alpha:d}),bt(n,g,p+16,m,p+16,i.line,1,d),p+=62;let _=56;iu.forEach((v,T)=>{let S=Math.min(d,c[v.grp]),w=p+T*_,R=u(v.sym,v.sub,g,w,i.ink,S);if(nt(n,v.unit,R+10,w,{f:V(i,"body",18,400),color:i.ink3,alpha:S}),nt(n,bp(r[v.k],v.dp),x,w,{f:V(i,"mono",24,500),color:i.flux,align:"right",alpha:S}),f.ok){let b=f[v.k],M=Math.abs(b-r[v.k])>=.5*Math.pow(10,-v.dp);nt(n,bp(b,v.dp),m,w,{f:V(i,"mono",24,M?600:500),color:M?i.plasma:i.ink3,align:"right",alpha:S})}else nt(n,"\u2014",m,w,{f:V(i,"mono",24,500),color:i.ink3,align:"right",alpha:S});T<iu.length-1&&bt(n,g,w+20,m,w+20,"rgba(255,255,255,0.06)",1,S)});let y=p+iu.length*_-6;nt(n,"pink: our geometric estimate from the pink map",g,y,{f:V(i,"body",18,400),color:i.ink3,alpha:d}),nt(n,"MAGNIFY THE DIFFERENCE",g,658,{f:V(i,"body",18,600),color:i.ink3,alpha:d}),Yt(n,[["pink map at \xD71: pixel R\xB2 ",V(i,"body",18,400),i.ink3],[String(Za),V(i,"mono",18,500),i.ink2]],g,748,{alpha:d}),nt(n,"illustration built from truth",g,774,{f:V(i,"body",18,400),color:i.ink3,alpha:d})},dimArrow(n,t,e,i,s,r,o){let a=Math.hypot(i-t,s-e)||1,l=(i-t)/a,c=(s-e)/a,h=9,u=4.5;bt(n,t+l*2,e+c*2,i-l*2,s-c*2,r,1.6,o),n.save(),n.globalAlpha=o,n.fillStyle=r;for(let[d,f,g]of[[t,e,1],[i,s,-1]])n.beginPath(),n.moveTo(d,f),n.lineTo(d+g*(l*h-c*u),f+g*(c*h+l*u)),n.lineTo(d+g*(l*h+c*u),f+g*(c*h-l*u)),n.closePath(),n.fill();n.restore()}};function _s(n){let t;return{id:n,steps:99,mount(e){t=document.createElement("div"),t.className="placeholder",e.appendChild(t)},enter(){},leave(){},setStep(e){t&&(t.innerHTML=`scene \u201C${n}\u201D<br>step ${e+1}<br><span style="font-size:18px">(not built yet)</span>`)}}}var Tp=_s("metric");var Ep=_s("correct");var $a=["F1A","F1B","F2A","F2B","F3A","F3B","F4A","F4B","F5A","F5B","F6A","F6B","F7A","F7B","F8A","F8B","F9A","F9B","ECOILA","Ip","bcoil"],__="Ip",b_="F6A",su=(n,t,e)=>t==="Ip"?n.inputs.Ip_kA[e]:t==="bcoil"?n.inputs.bcoil_kA[e]:n.inputs.coil_currents[t][e];function M_(n){let t=n.inputs.Ip_kA.map(Math.abs),e=Math.max(...t),i=t.map((s,r)=>[s,r]).filter(s=>s[0]>=.95*e).map(s=>s[1]);return i[Math.floor(i.length/2)]}function Ap(n,t){let e=n.grid.R_m.map(Number),i=n.grid.Z_m.map(Number),s=e.length,r=i.length,o={R:e,Z:i},a=n.shots.map(u=>{let d=M_(u),f=u.psi,g=new Int16Array(t,f.byte_offset+d*s*r*2,s*r),x=new Float32Array(s*r);for(let b=0;b<s*r;b++)x[b]=g[b]*f.scale+f.value_offset;let m=u.scorer_truth.lcfs,p=m.shape[1],_=new Float32Array(t,m.byte_offset+d*p*2*4,p*2).slice(),y=(b,M)=>{let E=(b-e[0])/(e[s-1]-e[0])*(s-1),D=(M-i[0])/(i[r-1]-i[0])*(r-1),k=Math.max(0,Math.min(s-2,Math.floor(E))),B=Math.max(0,Math.min(r-2,Math.floor(D))),L=E-k,P=D-B,z=(W,it)=>x[it*s+W];return z(k,B)*(1-L)*(1-P)+z(k+1,B)*L*(1-P)+z(k,B+1)*(1-L)*P+z(k+1,B+1)*L*P},v=0;for(let b=0;b<p;b++)v+=y(_[2*b],_[2*b+1]);v/=p;let T=Number(u.ip_sign)||1,S=new Float32Array(s*r);for(let b=0;b<s*r;b++)S[b]=T*(x[b]-v);let w=$a.map(b=>su(u,b,d)),R=u.times_ms.map((b,M)=>[su(u,__,M),su(u,b_,M)]);return{id:u.id,sign:T,frame:d,t:u.times_ms[d],nFrames:u.n_frames,D:S,lcfs:_,bars:w,pts:R}}),l=$a.map((u,d)=>Math.max(...a.map(f=>Math.abs(f.bars[d])))||1),c=[];for(let u=1;u<=10;u++)c.push(.028*u,-.028*u);for(let u of a)u.lines=c.map(d=>({lv:d,polys:vn(u.D,s,r,d,o)}));let h=n.coil_geometry.coil_name.map((u,d)=>({name:u,R:n.coil_geometry.coil_R[d],Z:n.coil_geometry.coil_Z[d],w:n.coil_geometry.coil_width[d],h:n.coil_geometry.coil_height[d]}));return{grid:o,n:s,m:r,shots:a,barScale:l,coils:h}}function Cp(n){let t=Object.fromEntries(n.groups.map(l=>[l.block,l])),e=[{name:"coil history",blocks:["mag"]},{name:"currents now",blocks:["v1"]},{name:"slow drivers",blocks:["drv"]},{name:"coils \xF7 Ip",blocks:["ipn"]},{name:"time",blocks:["time"]},{name:"Thomson",blocks:["th1","tsc","tscm","tse","tsem","tsv"]},{name:"other",blocks:["phys","rec"]}],i=new Set(e.flatMap(l=>l.blocks)),s=n.groups.filter(l=>!i.has(l.block)).map(l=>l.block);s.length&&e[e.length-1].blocks.push(...s);let r=n.kept_raw_flag?String(n.kept_raw_flag).split(" ")[0]:"v1_sign_ip",o=e.map(l=>{let c=[],h=0,u=0;for(let d of l.blocks){let f=t[d];if(!f)continue;h+=f.n,u+=f.odd;for(let x of f.odd_columns||[])c.push(x===r?1:2);let g=f.n-(f.odd_columns||[]).length;for(let x=0;x<g;x++)c.push(0)}return{...l,n:h,odd:u,cells:c}}),a=n.training_set||{};return{bands:o,nFeatures:n.n_features,nOdd:n.n_odd,nFlipped:n.n_flipped_by_canonicalisation,flag:r,nShots:a.n_shots,nRev:a.n_reversed_ip,fracRev:a.fraction_reversed}}var w_="#7a2cff",bs="#a07cff",S_="Data: Sophelio/fusion-equilibrium-challenge, CC BY 4.0 \xB7 DIII-D data courtesy of General Atomics",Rp=430,Pp=98,xr=[770,1350],Ip=384,T_=646,so=54,Vn=580,Lp=176,vr=11,Ai=9,Ya=24,Up=8,ro={x:1100,y:128,s:440},ru={x:1316,y:484,s:224},kp=1250,Dp=260,Ae=600,ou=1540,au=n=>Math.round(n).toLocaleString("en-US"),Fp={id:"mirror",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new ni,this.timers=new si,this.cv=$i(n,t),this.loop=new ii(()=>this.draw(),this.v),this.step=0,this.rep=null,this.mir=null,this.caches=null;let e=document.createElement("div");e.className="ui-toggle",e.style.cssText=`position:absolute;left:${xr[0]}px;top:770px;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;`,e.innerHTML='<button type="button" data-m="0" aria-pressed="true">as recorded</button><button type="button" data-m="1" aria-pressed="false">reverse all currents</button>',e.addEventListener("mousedown",o=>o.preventDefault()),e.addEventListener("click",o=>{let a=o.target.closest("button");a&&(a.blur(),this.timers.clear(),this.setMirror(a.dataset.m==="1"))}),n.appendChild(e),this.toggle=e;let i=this.cv.canvas;this._down=o=>{if(this.step!==1)return;let a=this.cv.toDesign(o),l=ro;a.x<l.x-20||a.x>l.x+l.s+20||a.y<l.y-20||a.y>l.y+l.s+20||(this.timers.clear(),this.drag={x:a.x,f:this.v.get("fold")},i.setPointerCapture(o.pointerId),o.preventDefault())},this._move=o=>{let a=this.cv.toDesign(o);if(this.drag)this.v.set("fold",_e(this.drag.f+(a.x-this.drag.x)/320,0,1),{instant:!0}),this.loop.dirty=!0;else if(this.step===1){let l=ro,c=a.x>l.x&&a.x<l.x+l.s&&a.y>l.y&&a.y<l.y+l.s;i.style.cursor=c?"grab":"default"}else i.style.cursor="default"},this._up=o=>{if(this.drag){this.drag=null;try{i.releasePointerCapture(o.pointerId)}catch{}}},i.addEventListener("pointerdown",this._down),i.addEventListener("pointermove",this._move),i.addEventListener("pointerup",this._up),i.addEventListener("pointercancel",this._up);let s=document.createElement("canvas");s.width=s.height=12;let r=s.getContext("2d");r.strokeStyle=Bt(this.T.warn,.85),r.lineWidth=2,r.beginPath();for(let o=-12;o<=24;o+=6)r.moveTo(o,12),r.lineTo(o+12,0);return r.stroke(),this.hatchSrc=s,this.v.set("s0",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),Promise.all([t.data("replay.json"),t.data("replay.bin"),t.data("mirror.json")]).then(([o,a,l])=>{this.rep=Ap(o,a),this.mir=Cp(l),this.layoutMatrix(),this.buildCaches(),this.loop.dirty=!0}).catch(o=>console.warn("mirror: data failed",o))},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.drag=null},resize(){this.cv.fit(),this.buildCaches(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear(),this.drag=null;let i=t||this.ctx.reducedMotion,s=(r,o=0)=>({dur:r,delay:o,instant:i});this.v.set("s0",n===0?1:0,s(500,n===0?250:0)),this.v.set("s1",n>=1?1:0,s(600,n===1&&e===0?300:0)),n===0?this.v.set("fold",0,{instant:!0}):n===1&&e===0&&!i?(this.v.set("fold",0,{instant:!0}),this.v.set("fold",1,{dur:1600,delay:900})):this.v.set("fold",1,s(900)),this.v.set("compact",n===2?1:0,s(1e3)),this.v.set("bars",n===2?1:0,s(1100,n===2&&!i?400:0)),this.v.set("gains",n===2?1:0,s(700,n===2&&!i?1300:0)),n!==0?this.setMirror(!1,!0):this.setMirror(!1,i),this.toggle.style.transitionDelay=n===0&&!i?"0.4s":"0s",this.toggle.style.opacity=n===0?"1":"0",this.toggle.style.pointerEvents=n===0?"auto":"none",this.loop.dirty=!0},setMirror(n,t=!1){this.mirrored=n,this.toggle.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.m==="1"===n))),this.v.set("mir",n?1:0,{dur:650,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},demo(){this.timers.clear();let n=this.ctx.reducedMotion;this.step===0?(this.setMirror(!0),this.timers.after(1850,()=>this.setMirror(!1))):this.step===1?(this.v.set("fold",0,{dur:600,instant:n}),this.timers.after(1100,()=>this.v.set("fold",1,{dur:1600,instant:n}))):this.step===2&&(this.v.set("bars",0,{instant:!0}),this.v.set("gains",0,{instant:!0}),this.v.set("bars",1,{dur:1100,delay:200,instant:n}),this.v.set("gains",1,{dur:700,delay:1200,instant:n})),this.loop.dirty=!0},csBox(n){let{grid:t}=this.rep,e=t.R[0],i=t.R[t.R.length-1],s=t.Z[0],r=t.Z[t.Z.length-1],o=Rp/(r-s),a=(i-e)*o,l=xr[n]-a/2;return{x:l,y:Pp,w:a,h:Rp,s:o,R0:e,Z1:r,X:c=>l+(c-e)*o,Y:c=>Pp+(r-c)*o}},layoutMatrix(){let n=Lp;this.bandRects=this.mir.bands.map(e=>{let i=Math.ceil(e.cells.length/Ya),s={y0:n,y1:n+i*vr-(vr-Ai),rows:i};return n+=i*vr+Up,s}),this.matrixBottom=n-Up;let t=0;this.cellOrder=this.mir.bands.map(e=>e.cells.map(i=>i===2?t++:-1)),this.nFlipCells=t},buildCaches(){if(!this.rep)return;let n=this.cv.ratio,t=this.T,{n:e,m:i}=this.rep,s=qi.d3d&&qi.d3d.wall;this.caches=this.rep.shots.map((r,o)=>{let a=this.csBox(o),l=24;return[1,-1].map(c=>{let h=document.createElement("canvas");h.width=Math.ceil((a.w+2*l)*n),h.height=Math.ceil((a.h+2*l)*n);let u=h.getContext("2d");u.setTransform(n,0,0,n,l*n-a.x*n,l*n-a.y*n);let d=new ImageData(e,i),f=[98,228,255],g=[122,44,255];for(let m=0;m<i;m++)for(let p=0;p<e;p++){let _=c*r.D[m*e+p],y=Math.tanh(Math.abs(_)/.1),v=_>=0?f:g,T=((i-1-m)*e+p)*4;d.data[T]=v[0],d.data[T+1]=v[1],d.data[T+2]=v[2],d.data[T+3]=Math.round(255*(.05+(_>=0?.16:.3)*y))}let x=document.createElement("canvas");x.width=e,x.height=i,x.getContext("2d").putImageData(d,0,0),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(x,a.x,a.y,a.w,a.h),u.strokeStyle=t.line,u.lineWidth=1,u.strokeRect(a.x,a.y,a.w,a.h),u.globalCompositeOperation="lighter",u.lineJoin="round";for(let m of[0,1])for(let p of r.lines){let y=c*p.lv>=0?t.flux:bs,v=1-Math.min(.6,Math.abs(p.lv)*2);u.strokeStyle=Bt(y,m?.85*v:.18*v),u.lineWidth=m?1.3:4;for(let T of p.polys){u.beginPath();for(let S=0;S<T.length;S+=2){let w=a.X(T[S]),R=a.Y(T[S+1]);S?u.lineTo(w,R):u.moveTo(w,R)}T.closed&&u.closePath(),u.stroke()}}u.globalCompositeOperation="source-over",s&&s.length&&(u.strokeStyle="rgba(255,255,255,0.32)",u.lineWidth=1.5,u.beginPath(),s.forEach((m,p)=>p?u.lineTo(a.X(m[0]),a.Y(m[1])):u.moveTo(a.X(m[0]),a.Y(m[1]))),u.closePath(),u.stroke()),u.strokeStyle=Bt(t.coil,.55),u.fillStyle=Bt(t.coil,.1),u.lineWidth=1.2;for(let m of this.rep.coils){let p=a.X(m.R-m.w/2),_=a.Y(m.Z+m.h/2),y=m.w*a.s,v=m.h*a.s;u.fillRect(p,_,y,v),u.strokeRect(p,_,y,v)}return{cvs:h,x:a.x-l,y:a.y-l,w:a.w+2*l,h:a.h+2*l}})})},draw(){let{g:n}=this.cv,t=this.T;if(this.cv.begin(),!this.rep||!this.caches){nt(n,"loading DIII-D frames\u2026",1060,450,{f:V(t,"body",22,500),color:t.ink3,align:"center"});return}let e=this.v.get("s0"),i=this.v.get("s1");e>.01&&this.drawStep0(n,e),i>.01&&this.drawStep1(n,i);let s=this.v.get("bars"),r=this.v.get("gains");(this.v.get("compact")>.01||s>.01)&&this.drawStep2(n,s,r),nt(n,S_,1560,860,{f:V(t,"body",18,400),color:t.ink3,align:"right",alpha:.85})},drawStep0(n,t){let e=this.T,i=this.v.get("mir"),s=this.rep.shots,r=(1-t)*12;n.save(),n.globalAlpha=t,n.translate(0,r);for(let f=0;f<2;f++){let g=s[f],x=this.csBox(f),m=this.caches[f],p=f===0?i:0;1-p>.002&&(n.save(),n.globalAlpha*=1-p,n.drawImage(m[0].cvs,m[0].x,m[0].y,m[0].w,m[0].h),n.restore()),p>.002&&(n.save(),n.globalAlpha*=p,n.drawImage(m[1].cvs,m[1].x,m[1].y,m[1].w,m[1].h),n.restore());let _=g.lcfs;n.save(),n.globalCompositeOperation="lighter",n.lineJoin="round",n.beginPath();for(let E=0;E<_.length;E+=2){let D=x.X(_[E]),k=x.Y(_[E+1]);E?n.lineTo(D,k):n.moveTo(D,k)}n.closePath(),n.strokeStyle="rgba(255,255,255,0.16)",n.lineWidth=7,n.stroke(),n.strokeStyle=e.ink,n.lineWidth=2.2,n.stroke(),n.restore();let y=g.sign<0,v=f===0&&i>.5,T=y?bs:e.flux,S=y?"reversed Ip":v?"normal Ip, mirrored":"normal Ip",w=V(e,"body",22,600),R=V(e,"mono",18,500),b=[[S,w,v?e.coil:e.ink],[`   ${g.id} \xB7 ${au(g.t)} ms`,R,e.ink3]];Yt(n,b,xr[f]+8,70,{align:"center"});let M=0;n.font=w,M+=n.measureText(S).width,n.font=R,M+=n.measureText(b[1][0]).width,n.fillStyle=T,n.beginPath(),n.arc(xr[f]+8-M/2-14,63,5,0,Math.PI*2),n.fill(),this.drawStrip(n,f,f===0?1-2*ri(i):1)}this.drawLegend0(n),n.restore();let o=xr[1],a=790,l=V(e,"mono",20,600),c=V(e,"body",20,500),h=`${(100*this.mir.fracRev).toFixed(1)}%`,u=[[au(this.mir.nRev),l,e.ink],[" of ",c,e.ink2],[au(this.mir.nShots),l,e.ink],[" training shots  \xB7  ",c,e.ink2],[h,l,bs]],d=0;n.save();for(let[f,g]of u)n.font=g,d+=n.measureText(f).width;n.restore(),n.save(),n.globalAlpha=t,An(n,o-d/2-22,a-22,d+44,44,22),n.fillStyle="rgba(255,255,255,0.04)",n.fill(),n.strokeStyle=e.line,n.lineWidth=1,n.stroke(),n.restore(),Yt(n,u,o,a+7,{align:"center",alpha:t})},drawStrip(n,t,e){let i=this.T,s=this.rep.shots[t],r=xr[t]-Ip/2,o=T_,a=[];for(let d=0;d<18;d++)a.push(r+8+d*17);let l=r+8+18*17+14;for(let d=0;d<3;d++)a.push(l+d*26);let c=11;bt(n,r,o,r+Ip,o,i.lineStrong,1.5),nt(n,"coil currents at this frame",r,o-so-14,{f:V(i,"body",18,500),color:i.ink3}),nt(n,"+",r-6,o-so+14,{f:V(i,"mono",18,500),color:i.ink3,align:"right"}),nt(n,"\u2212",r-6,o+so,{f:V(i,"mono",18,500),color:i.ink3,align:"right"}),n.save(),n.globalCompositeOperation="lighter",$a.forEach((d,f)=>{let x=s.bars[f]/this.rep.barScale[f]*e*so,m=a[f]-c/2,p=Math.min(o,o-x),_=Math.max(1.5,Math.abs(x)),v=d==="Ip"?i.ink:i.coil,T=n.createLinearGradient(0,o,0,o-x);T.addColorStop(0,Bt(v,.25)),T.addColorStop(1,Bt(v,.9)),n.fillStyle=T,n.fillRect(m,p,c,_)}),n.restore();let h=V(i,"body",18,500),u=o+so+30;nt(n,"F1 \u2026 F9 (A, B)",(a[0]+a[17])/2,u,{f:h,color:i.coil,align:"center"}),bt(n,a[0]-5,u-22,a[17]+5,u-22,Bt(i.coil,.4),1),nt(n,"E",a[18],u,{f:h,color:i.coil,align:"center"}),nt(n,"Ip",a[19],u,{f:h,color:i.ink,align:"center"}),nt(n,"Bt",a[20],u,{f:h,color:i.coil,align:"center"})},drawLegend0(n){let t=this.T,e=1060,i=196,s=V(t,"body",18,500);nt(n,"sign(Ip) \xB7 (\u03C8 \u2212 \u03C8",e-6,i,{f:V(t,"mono",18,500),color:t.ink2,align:"center"});let r=this.textW("sign(Ip) \xB7 (\u03C8 \u2212 \u03C8",V(t,"mono",18,500));nt(n,"b",e-6+r/2+1,i+5,{f:V(t,"mono",18,500),color:t.ink2}),nt(n,")",e-6+r/2+13,i,{f:V(t,"mono",18,500),color:t.ink2}),i+=46;let o=(c,h,u)=>{h(e-98,c-6),nt(n,u,e-58,c,{f:s,color:t.ink2})};o(i,(c,h)=>bt(n,c,h,c+28,h,t.flux,2.2),"> 0"),o(i+36,(c,h)=>bt(n,c,h,c+28,h,bs,2.2),"< 0"),o(i+72,(c,h)=>bt(n,c,h,c+28,h,t.ink,2.4),"boundary (LCFS)"),o(i+108,(c,h)=>{n.save(),n.strokeStyle=Bt(t.coil,.7),n.fillStyle=Bt(t.coil,.15),n.fillRect(c+8,h-8,12,16),n.strokeRect(c+8,h-8,12,16),n.restore()},"coils");let a=V(t,"body",18,400),l=i+172;["EFIT ships both maps with the","axis at the \u03C8 minimum; the","sign(Ip) factor puts back","the physical polarity"].forEach((c,h)=>nt(n,c,e,l+h*25,{f:a,color:t.ink3,align:"center"}))},textW(n,t){let e=this.cv.g;e.save(),e.font=t;let i=e.measureText(n).width;return e.restore(),i},scRect(){let n=ri(this.v.get("compact"));return{x:jt(ro.x,ru.x,n),y:jt(ro.y,ru.y,n),s:jt(ro.s,ru.s,n),c:n}},drawStep1(n,t){let e=this.T,i=this.v.get("fold"),s=this.scRect(),r=t*(1-s.c),o=(1-t)*12;r>.01&&(n.save(),n.translate(0,o),this.drawMatrix(n,r,i),n.restore()),this.drawScatter(n,t,i,s)},drawMatrix(n,t,e){let i=this.T,s=this.mir,r=nt(n,String(s.nFlipped),Vn,112,{f:V(i,"mono",56,600),color:i.coil,alpha:t});Yt(n,[["odd",V(i,"body",24,600),i.ink],["  \xD7 sign(Ip)",V(i,"mono",24,600),i.coil]],Vn+r+14,92,{alpha:t}),Yt(n,[["of ",V(i,"body",20,400),i.ink3],[String(s.nFeatures),V(i,"mono",20,500),i.ink2],[" input features",V(i,"body",20,400),i.ink3]],Vn+r+14,120,{alpha:t});let o=e*1.25;n.save(),n.globalAlpha=t;let a=[];s.bands.forEach((d,f)=>{let g=this.bandRects[f];d.cells.forEach((x,m)=>{let p=Vn+m%Ya*vr,_=g.y0+Math.floor(m/Ya)*vr;if(x===0)n.fillStyle="rgba(255,255,255,0.07)",n.fillRect(p,_,Ai,Ai);else if(x===1)n.strokeStyle=Bt(i.coil,.9),n.lineWidth=1.5,n.strokeRect(p+.75,_+.75,Ai-1.5,Ai-1.5);else{let y=this.cellOrder[f][m]/this.nFlipCells,v=_e((o-y)/.25,0,1),T=e>0&&e<1?Math.sin(Math.PI*v):0;n.fillStyle=Bt(i.coil,.72+.28*T),n.fillRect(p,_,Ai,Ai),T>.02&&(n.save(),n.globalCompositeOperation="lighter",n.fillStyle=Bt("#fff6e0",.75*T),n.fillRect(p-1,_-1,Ai+2,Ai+2),n.restore())}}),a.push(g.y0+13)}),n.restore();let l=Xa(a,23,Lp+4,this.matrixBottom+20),c=Vn+Ya*vr+14;s.bands.forEach((d,f)=>{let g=this.bandRects[f],x=l[f],m=g.y0+5;Math.abs(x-6-m)>3&&bt(n,c-10,m,c-3,x-6,i.line,1,t),Yt(n,[[d.name+"  ",V(i,"body",18,500),d.odd?i.ink2:i.ink3],[`${d.odd}/${d.n}`,V(i,"mono",18,500),d.odd?i.coil:i.ink3]],c,x,{alpha:t})});let h=this.matrixBottom+52,u=V(i,"body",18,400);n.save(),n.globalAlpha=t,n.fillStyle=Bt(i.coil,.8),n.fillRect(Vn,h-13,12,12),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(Vn,h+17,12,12),n.strokeStyle=Bt(i.coil,.9),n.lineWidth=1.5,n.strokeRect(Vn+.75,h+47.75,10.5,10.5),n.restore(),Yt(n,[["odd: changes sign with the currents",u,i.ink2]],Vn+24,h,{alpha:t}),Yt(n,[["even: unchanged (Thomson, timing)",u,i.ink3]],Vn+24,h+30,{alpha:t}),Yt(n,[["the raw sign flag, odd, kept as is",u,i.ink3]],Vn+24,h+60,{alpha:t})},drawScatter(n,t,e,i){let s=this.T,r=this.rep.shots,o=i.c,a=i.x+i.s/2,l=i.y+i.s/2,c=i.s/2,h=jt(1,.55,o),u=t*h,d=1-o;bt(n,i.x,l,i.x+i.s,l,s.lineStrong,1.5,u),bt(n,a,i.y,a,i.y+i.s,s.lineStrong,1.5,u),n.save(),n.globalAlpha=u*.6,n.strokeStyle=s.line,n.lineWidth=1,n.strokeRect(i.x,i.y,i.s,i.s),n.restore();let f=V(s,"mono",18,500),g=u*d;if(g>.01){for(let P of[-1e3,1e3]){let z=a+P/kp*c;bt(n,z,l-5,z,l+5,s.lineStrong,1.5,g),nt(n,P>0?"+1000":"\u22121000",z,l+26,{f,color:s.ink3,align:"center",alpha:g})}for(let P of[-200,200]){let z=l-P/Dp*c;bt(n,a-5,z,a+5,z,s.lineStrong,1.5,g),nt(n,P>0?"+200":"\u2212200",a-10,z+6,{f,color:s.ink3,align:"right",alpha:g})}let S=V(s,"body",18,500),w=_e((e-.6)/.4,0,1),R="Ip  (kA)",b="sign(Ip) \xB7 Ip  (kA)",M="F6A  (kA\xB7turn)",E="sign(Ip) \xB7 F6A";nt(n,R,i.x+i.s,l-12,{f:S,color:s.ink2,align:"right",alpha:g*(1-w)}),nt(n,b,i.x+i.s,l-12,{f:S,color:s.coil,align:"right",alpha:g*w}),nt(n,M,a+12,i.y+22,{f:S,color:s.ink2,alpha:g*(1-w)}),nt(n,E,a+12,i.y+22,{f:S,color:s.coil,alpha:g*w});let D=i.y-26,k=V(s,"body",18,500),B=(P,z)=>{n.save(),n.globalAlpha=g,n.fillStyle=z,n.beginPath(),n.arc(P,D-6,5,0,Math.PI*2),n.fill(),n.restore()};B(i.x+6,s.flux);let L=Yt(n,[["normal Ip  ",k,s.ink2],[String(r[0].nFrames),f,s.ink],[" frames",k,s.ink3]],i.x+18,D,{alpha:g});B(L+28,bs),Yt(n,[["reversed Ip  ",k,s.ink2],[String(r[1].nFrames),f,s.ink],[" frames",k,s.ink3]],L+40,D,{alpha:g})}let x=Math.PI*ri(_e(e,0,1)),m=Math.cos(x),p=Math.sin(x),_=jt(3.4,2.4,o);if(n.save(),n.beginPath(),n.rect(i.x-8,i.y-8,i.s+16,i.s+16),n.clip(),n.globalCompositeOperation="lighter",r.forEach((S,w)=>{let R=w===0?s.flux:bs,b=S.sign<0;for(let[M,E]of S.pts){let D=M/kp,k=E/Dp;if(b){let P=D*m-k*p,z=D*p+k*m;D=P,k=z}let B=a+D*c,L=l-k*c;n.fillStyle=Bt(R,.16*u),n.beginPath(),n.arc(B,L,_*2.6,0,Math.PI*2),n.fill(),n.fillStyle=Bt(R,.9*u),n.beginPath(),n.arc(B,L,_,0,Math.PI*2),n.fill()}}),n.restore(),d>.01&&e<.98){let S=c*.34,w=Math.PI*.82,R=w+Math.PI*Math.max(.05,1-e)*.9;n.save(),n.globalAlpha=u*d*.7*(1-e),n.strokeStyle=s.ink2,n.lineWidth=1.5,n.setLineDash([4,5]),n.beginPath(),n.arc(a,l,S,-R,-w,!1),n.stroke(),n.restore()}let y=i.y+i.s+jt(50,34,o),v=_e((e-.85)/.15,0,1),T=V(s,"body",jt(20,18,o),500);nt(n,"real frames of two shots",i.x,y,{f:T,color:s.ink3,alpha:t*(1-o)}),v>.01?nt(n,"one world",i.x+i.s,y,{f:V(s,"display",jt(30,24,o),500),color:s.good,align:"right",alpha:t*v*jt(1,.8,o)}):d>.01&&nt(n,"two worlds",i.x+i.s,y,{f:V(s,"display",30,500),color:s.ink2,align:"right",alpha:t*d*(1-e)}),this.step===1&&d>.5&&nt(n,"drag to fold",i.x+i.s,i.y+i.s+82,{f:V(s,"body",18,400),color:s.ink3,align:"right",alpha:t*.8})},drawStep2(n,t,e){let i=this.T;if(t<.005)return;let s=ou-Ae,r=this.mir.fracRev,o=`${(100*r).toFixed(1)}%`,a=`${(100*(1-r)).toFixed(1)}%`,l=ri(_e(t*1.2,0,1)),c=ri(_e(t*1.6-.6,0,1)),h=46,u=122,d=300,f=V(i,"body",22,500);nt(n,"share of training shots",Ae,u-16,{f,color:i.ink2,alpha:t}),Yt(n,[["share of squared \u03C8 error",f,i.ink2],["   time-blocked fold, before the fix",V(i,"body",20,400),i.ink3]],Ae,d-16,{alpha:t});let g=s*r*l;if(n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(Ae+g,u,s*l-g,h),n.fillStyle=Bt(w_,.95),n.fillRect(Ae,u,g,h),n.restore(),nt(n,o,Ae+g+12,u+32,{f:V(i,"mono",26,600),color:bs,alpha:t*l}),nt(n,"reversed Ip",Ae+g+104,u+31,{f:V(i,"body",20,500),color:i.ink2,alpha:t*l}),nt(n,`${a} normal`,ou-14,u+31,{f:V(i,"mono",20,500),color:i.ink3,align:"right",alpha:t*l}),c>.01){let y=Ae+g,v=Ae+s*.68*c;n.save(),n.globalAlpha=t*c;let T=n.createLinearGradient(0,u+h,0,d);T.addColorStop(0,Bt(i.warn,.04)),T.addColorStop(1,Bt(i.warn,.2)),n.fillStyle=T,n.beginPath(),n.moveTo(Ae,u+h+4),n.lineTo(y,u+h+4),n.lineTo(v,d-44),n.lineTo(Ae,d-44),n.closePath(),n.fill(),n.restore()}let x=s*.6*c,m=s*.68*c;n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(Ae+m,d,s-m,h),n.fillStyle=Bt(i.warn,.92),n.fillRect(Ae,d,x,h),m>x&&(this.hatch||(this.hatch=n.createPattern(this.hatchSrc,"repeat")),n.fillStyle=this.hatch,n.fillRect(Ae+x,d,m-x,h),n.strokeStyle=Bt(i.warn,.9),n.lineWidth=1.5,n.strokeRect(Ae+x+.75,d+.75,m-x-1.5,h-1.5)),n.restore();let p=t*c;nt(n,"60\u201368%",Ae+16,d+34,{f:V(i,"mono",30,600),color:i.bg,alpha:p}),nt(n,"reversed Ip",Ae+172,d+31,{f:V(i,"body",20,600),color:i.bg,alpha:p}),nt(n,"normal",ou-14,d+31,{f:V(i,"body",20,500),color:i.ink3,align:"right",alpha:p});let _=V(i,"mono",18,500);if(nt(n,"60%",Ae+x,d+h+26,{f:_,color:i.warn,align:"center",alpha:p}),nt(n,"68%",Ae+m,d+h+26,{f:_,color:i.warn,align:"center",alpha:p}),nt(n,"range over the fold",Ae+m+34,d+h+26,{f:V(i,"body",18,400),color:i.ink3,alpha:p}),e>.01){let y=(1-e)*16;nt(n,"AFTER THE FIX",Ae,470+y,{f:V(i,"body",18,600),color:i.ink3,alpha:e});let v=(T,S,w)=>{let R=nt(n,S,Ae,T,{f:V(i,"mono",72,600),color:i.good,alpha:e});nt(n,"\xD710\u207B\u2074",Ae+R+14,T-36,{f:V(i,"body",20,500),color:i.ink2,alpha:e}),nt(n,w,Ae+R+14,T-8,{f:V(i,"body",22,500),color:i.ink,alpha:e})};v(566+y,"+13.7","time-blocked fold"),v(682+y,"+2.6","public board")}}};var Np=-100,Bp=150,E_=-300,A_=300,Ja=-500,Ka=900;function C_(n){if(!n||typeof n!="object")return null;let t=u=>Array.isArray(u)?u.map(Number):null;if(n.traces&&n.rule&&n.traces.Ip_corrected_axis){let u=n.traces,d=u.ECOILA||Object.values(u).find(v=>v.time_axis==="magnetics_time"),f=Number(n.ip_sign??1)||1,g=t(u.Ip_corrected_axis.value).map(v=>v*f),x=t(d.value),m=v=>{let T=Math.max(...v.map(Math.abs))||1;return v.map(S=>S/T)},p=g.map(Math.abs).sort((v,T)=>v-T),_=p[Math.min(p.length-1,Math.floor(.995*(p.length-1)))]||1,y=t(n.window_ms)||[-300,1500];return{source:"real",shot:n.id??null,credit:"DIII-D data: General Atomics, CC BY 4.0",coil:{t:t(d.t_ms),y:m(x),label:`ohmic E-coil current${u.ECOILA?" (ECOILA)":""}`},ip:{t:t(u.Ip_corrected_axis.t_ms),y:g.map(v=>v/_)},shipped:-Number(n.rule.offset_ms),cross:n.rule.breakdown_corrected_ms!==void 0?Number(n.rule.breakdown_corrected_ms):null,range:[Math.max(y[0],-400),Math.min(y[1],1500)]}}let e,i,s,r,o,a;if(n.coil&&n.ip&&!Array.isArray(n.coil)?(e=t(n.coil.t_ms),i=t(n.coil.value??n.coil.values??n.coil.y),a=n.coil.name,s=t(n.ip.t_ms_corrected??n.ip.t_ms),r=t(n.ip.value??n.ip.values??n.ip.y),o=t(n.ip.t_ms_shipped)):(e=t(n.t_ms),i=t(n.coil),s=t(n.ip_t_ms_corrected??n.ip_t_ms),r=t(n.ip),o=t(n.ip_t_ms_shipped)),!e||!i||!s||!r||e.length!==i.length||s.length!==r.length)return null;let l=Number(n.t0_ms??0),c=n.offset_ms!==void 0?Number(n.offset_ms):o&&o.length?o[0]-s[0]:180,h=u=>{let d=Math.max(...u.map(Math.abs))||1;return u.map(f=>f/d)};return{source:"real",shot:n.shot??null,coil:{t:e.map(u=>u-l),y:h(i),label:a||"ohmic coil current"},ip:{t:s.map(u=>u-l),y:h(r)},shipped:c,cross:null,range:[Ja,Ka]}}function R_(){let t=[],e=[],i=[],s=[];for(let r=0;r<=600;r++){let o=jt(Ja-200,Ka+400,r/600);t.push(o),e.push(-Math.tanh(o/230)*.92-.04*(o/1e3)),i.push(o);let a=_e(o/400,0,1);s.push(o<=0?0:1-Math.pow(1-a,2.2))}return{source:"schematic",shot:null,credit:null,coil:{t,y:e,label:"ohmic coil current"},ip:{t:i,y:s},shipped:180,cross:null,range:[Ja,Ka]}}function P_(n){let e=.1*Math.max(...n.y);for(let i=1;i<n.t.length;i++)if(n.y[i-1]<e&&n.y[i]>=e){let s=(e-n.y[i-1])/(n.y[i]-n.y[i-1]);return{t:jt(n.t[i-1],n.t[i],s),lvl:e}}return{t:0,lvl:e}}var Re=640,an=1530,Gn=[Ja,Ka],Ci=n=>Re+(n-Gn[0])/(Gn[1]-Gn[0])*(an-Re),Op={id:"timeaxis",steps:3,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new ni,this.timers=new si,this.cv=$i(n,t),this.loop=new ii(()=>this.draw(),this.v),this.step=0,this.setData(R_());let e=document.createElement("div");return e.className="ui-row",e.style.cssText="position:absolute;left:640px;top:790px;opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",e.innerHTML=`<span class="ui-label">Ip offset</span><input class="ui-slider" type="range" min="${E_}" max="${A_}" step="1" value="0" style="width:340px;--slider-accent:var(--plasma)"><span class="ui-readout" style="min-width:96px;text-align:right"></span>`,n.appendChild(e),this.sliderBox=e,this.slider=e.querySelector("input"),this.readout=e.querySelector(".ui-readout"),this.slider.addEventListener("input",()=>{this.timers.clear(),this.v.set("shift",Number(this.slider.value),{instant:!0}),this.loop.dirty=!0}),this.slider.addEventListener("keydown",i=>{["ArrowLeft","ArrowRight","PageUp","PageDown"," "].includes(i.key)&&(i.preventDefault(),this.slider.blur())}),this.v.set("shift",this.data.shipped,{instant:!0}),this.v.set("ann0",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0),t.data("timeaxis.json").then(i=>{let s=C_(i);s?this.setData(s):console.warn("timeaxis.json: unrecognised schema, using schematic traces")}).catch(()=>{})},setData(n){this.data=n,Gn[0]=n.range[0],Gn[1]=n.range[1];let t=P_(n.ip);this.cross=n.cross!==null&&n.cross!==void 0?{t:n.cross,lvl:.1}:t,this.v&&this.step===0&&this.v.set("shift",n.shipped,{instant:!0}),this.loop&&(this.loop.dirty=!0)},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish()},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){this.step=n,this.timers.clear();let e=t||this.ctx.reducedMotion,i=(s,r=0)=>({dur:s,delay:r,instant:e});this.v.set("shift",n===0?this.data.shipped:0,i(1400,n===1?250:0)),this.v.set("ann0",n===0?1:0,i(500)),this.v.set("ann1",n===1?1:0,i(600,n===1?500:0)),this.v.set("win",n>=1?1:0,i(600,n===1?200:0)),this.v.set("compact",n===2?1:0,i(1100)),this.v.set("consq",n===2?1:0,i(700,n===2&&!e?600:0)),this.sliderBox.style.opacity=n===1?"1":"0",this.sliderBox.style.pointerEvents=n===1?"auto":"none",this.loop.dirty=!0},demo(){this.step===1&&(this.timers.clear(),this.v.set("shift",this.data.shipped,{dur:500}),this.timers.after(900,()=>this.v.set("shift",0,{dur:1600})))},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("compact"),i=this.v.get("shift"),s=this.v.get("ann0"),r=this.v.get("ann1"),o=this.v.get("win"),a=this.v.get("consq"),l=this.data;document.activeElement!==this.slider&&(this.slider.value=String(Math.round(i)));let c=this.cross.t+i,h=c>=Np&&c<=Bp;this.readout.innerHTML=`${i>=0?"+":"\u2212"}${Math.abs(Math.round(i))}<small>ms</small>`;let u={y0:jt(118,70,e),y1:jt(292,156,e)},d={y0:jt(350,214,e),y1:jt(566,330,e)},f=jt(598,356,e);if(o>.01){let w=Ci(Np),R=Ci(Bp),b=h?t.good:t.ink3;n.save(),n.globalAlpha=o;let M=n.createLinearGradient(0,d.y0,0,d.y1);M.addColorStop(0,Bt(b,h?.05:.02)),M.addColorStop(1,Bt(b,h?.16:.06)),n.fillStyle=M,n.fillRect(w,d.y0-10,R-w,d.y1-d.y0+10),n.restore(),bt(n,w,d.y0-10,w,d.y1,b,1.5,o*.9),bt(n,R,d.y0-10,R,d.y1,b,1.5,o*.9);let E=o*(1-e);Yt(n,[["accept  ",V(t,"body",18,500),b],["[\u2212100, +150] ms",V(t,"mono",18,500),b]],R+12,d.y0-14,{alpha:E})}let g=(w,R,b)=>jt(R,w,(b+1)/2),x=(w,R,b)=>jt(R,w,b);bt(n,Re,g(u.y0,u.y1,0),an,g(u.y0,u.y1,0),t.line,1,1,[3,5]),nt(n,l.coil.label,Re,u.y0-14,{f:V(t,"body",20,500),color:t.coil}),this.trace(n,l.coil.t,l.coil.y,0,w=>g(u.y0,u.y1,w),t.coil),bt(n,Re,d.y1,an,d.y1,t.line,1),nt(n,"plasma current Ip",Re,d.y0-14,{f:V(t,"body",20,500),color:t.plasma});let m=this.step===0||i>30?"shipped Ip axis":i<-30?"shifted by hand":"repaired Ip axis";nt(n,m,an,d.y0-14,{f:V(t,"body",18,500),color:t.ink3,align:"right"}),this.trace(n,l.ip.t,l.ip.y,i,w=>x(d.y0,d.y1,w),t.plasma,!0),bt(n,Re,f,an,f,t.lineStrong,1.5);let p=Gn[1]-Gn[0]>1500?300:200;for(let w=Math.ceil(Gn[0]/p)*p;w<=Gn[1]-40;w+=p)bt(n,Ci(w),f,Ci(w),f+6,t.lineStrong,1.5),nt(n,w>0?`+${w}`:w<0?`\u2212${-w}`:"0",Ci(w),f+28,{f:V(t,"mono",18,500),color:t.ink3,align:"center"});nt(n,"ms",an,f+28,{f:V(t,"body",18,500),color:t.ink3,align:"right"});let _=Ci(0);bt(n,_,u.y0-4,_,d.y0-36,t.ink,1.5,.85),bt(n,_,d.y0-6,_,f,t.ink,1.5,.85),nt(n,l.source==="real"?"magnetics clock t = 0":"magnetics breakdown",_+10,u.y0+22,{f:V(t,"body",18,500),color:t.ink,alpha:1-e});let y=x(d.y0,d.y1,this.cross.lvl),v=Ci(c);bt(n,Re,y,an,y,t.plasma,1,.22,[2,5]),nt(n,"10%",an,y-8,{f:V(t,"mono",18,500),color:t.plasma,align:"right",alpha:.7*(1-e)}),n.save(),n.globalCompositeOperation="lighter",n.fillStyle=h&&o>.5?t.good:t.plasmaHot,n.shadowColor=Bt(h&&o>.5?t.good:t.plasma,.8),n.shadowBlur=14,n.beginPath(),n.arc(v,y,5.5,0,Math.PI*2),n.fill(),n.restore();let T=i,S=s*(1-e);if(Math.abs(T)>6&&S>.01){let w=d.y0+50,R=Ci(this.cross.t);bt(n,R,w,v,w,t.warn,2,S),bt(n,R,w-7,R,w+7,t.warn,2,S),bt(n,v,w-7,v,w+7,t.warn,2,S),bt(n,v,w+7,v,y-8,t.warn,1,S*.6,[2,4]),bt(n,R,w+7,R,y,t.warn,1,S*.6,[2,4]);let b=`${T>=0?"+":"\u2212"}${Math.abs(Math.round(T))} ms`;Yt(n,[["offset ",V(t,"body",20,500),t.warn],[b,V(t,"mono",22,600),t.warn]],Math.min(R,v)-14,w+7,{align:"right",alpha:S})}l.source==="schematic"?nt(n,"schematic",an,u.y0-14,{f:V(t,"body",18,500),color:t.ink3,align:"right"}):(Yt(n,[["DIII-D shot file ",V(t,"body",18,500),t.ink3],[String(l.shot??""),V(t,"mono",18,500),t.ink3]],an,u.y0-14,{align:"right"}),l.credit&&nt(n,l.credit,an,jt(40,30,e)+0,{f:V(t,"body",18,400),color:t.ink3,align:"right",alpha:.8*(1-e)})),s>.01&&this.drawProblem(n,s*(1-e),f),r>.01&&this.drawRule(n,r*(1-e),f,h,c),a>.01&&this.drawConsequence(n,a)},trace(n,t,e,i,s,r,o=!1){n.save(),n.beginPath(),n.rect(Re,0,an-Re,900),n.clip();let a=[];for(let l=0;l<t.length;l++){let c=t[l]+i;c<Gn[0]-50||c>Gn[1]+50||a.push([Ci(c),s(e[l])])}if(a.length<2){n.restore();return}if(o){let l=s(0),c=n.createLinearGradient(0,s(1),0,l);c.addColorStop(0,Bt(r,.18)),c.addColorStop(1,Bt(r,0)),n.fillStyle=c,n.beginPath(),n.moveTo(a[0][0],l),a.forEach(h=>n.lineTo(h[0],h[1])),n.lineTo(a[a.length-1][0],l),n.closePath(),n.fill()}n.beginPath(),a.forEach((l,c)=>c?n.lineTo(l[0],l[1]):n.moveTo(l[0],l[1])),n.lineJoin="round",n.strokeStyle=Bt(r,.28),n.lineWidth=6,n.stroke(),n.strokeStyle=r,n.lineWidth=2.2,n.stroke(),n.restore()},drawProblem(n,t,e){let i=this.T,s=e+92;Yt(n,[["offset ",V(i,"body",26,500),i.ink2],["54\u2013291 ms",V(i,"mono",34,600),i.warn],["  on  ",V(i,"body",26,500),i.ink2],["2,111",V(i,"mono",34,600),i.ink],[" of ",V(i,"body",26,500),i.ink2],["7,041",V(i,"mono",34,600),i.ink],[" training shots",V(i,"body",26,500),i.ink2]],Re,s,{alpha:t});let r=an-Re,o=2111/7041,a=s+30;n.save(),n.globalAlpha=t,n.fillStyle="rgba(255,255,255,0.07)",An(n,Re,a,r,10,5),n.fill(),n.fillStyle=Bt(i.warn,.85),An(n,Re,a,r*o,10,5),n.fill(),n.restore(),nt(n,"older data-acquisition era: the shipped Ip clock runs late against the magnetics",Re,a+44,{f:V(i,"body",20,400),color:i.ink3,alpha:t})},drawRule(n,t,e,i,s){let r=this.T,o=e+66,a=Re,l=Re+240,c=1040;nt(n,"magnetics record",a,o,{f:V(r,"body",18,500),color:r.coil,alpha:t}),n.save(),n.globalAlpha=t,n.fillStyle=Bt(r.coil,.75),An(n,a,o+12,c-a,10,3),n.fill(),n.fillStyle=Bt(r.plasma,.75),An(n,l,o+40,c-l,10,3),n.fill(),n.restore(),nt(n,"Ip record",l-12,o+50,{f:V(r,"body",18,500),color:r.plasma,align:"right",alpha:t});let h=o+74;bt(n,a,o+24,a,h+6,r.ink2,1.5,t),bt(n,l,o+52,l,h+6,r.ink2,1.5,t),bt(n,a,h,l,h,r.ink2,1.5,t);let u=a+56;n.save(),n.globalAlpha=t,n.fillStyle=r.bg,n.fillRect(u-12,h-8,24,16),n.restore(),bt(n,u-12,h+8,u-4,h-8,r.ink2,1.5,t),bt(n,u-2,h+8,u+6,h-8,r.ink2,1.5,t),nt(n,"8,192 ms",a+150,h+28,{f:V(r,"mono",20,600),color:r.ink,align:"center",alpha:t}),nt(n,"not to scale",c,h+28,{f:V(r,"body",18,400),color:r.ink3,align:"right",alpha:t});let d=1090,f=V(r,"body",20,400),g=V(r,"mono",20,600);nt(n,"RULE",d,o,{f:V(r,"body",18,600),color:r.ink3,alpha:t}),Yt(n,[["Ip start = magnetics start + ",f,r.ink2],["8,192 ms",g,r.ink]],d,o+30,{alpha:t}),Yt(n,[["kept if the 10% crossing",f,r.ink2]],d,o+58,{alpha:t}),Yt(n,[["lands in ",f,r.ink2],["[\u2212100, +150] ms",g,i?r.good:r.ink2]],d,o+86,{alpha:t});let x=`${s>=0?"+":"\u2212"}${Math.abs(Math.round(s))} ms`;Yt(n,[["crossing ",V(r,"body",20,400),r.ink3],[x,V(r,"mono",20,600),i?r.good:r.warn],[i?"  inside":"  outside",V(r,"body",20,500),i?r.good:r.warn]],an,812,{align:"right",alpha:t})},drawConsequence(n,t){let e=this.T,i=(1-t)*18,s=520+i;nt(n,"WHAT IT BOUGHT",Re,440+i,{f:V(e,"body",18,600),color:e.ink3,alpha:t});let r=(a,l,c)=>{let h=nt(n,l,a,s,{f:V(e,"mono",76,600),color:e.good,alpha:t});nt(n,"\xD710\u207B\u2074",a+h+10,s-38,{f:V(e,"body",20,500),color:e.ink2,alpha:t}),nt(n,c,a+h+10,s-12,{f:V(e,"body",20,500),color:e.ink,alpha:t})};r(Re,"+6.8","time-blocked fold"),r(Re+470,"+1.1","Development board"),["reads inputs only","identical for training and inference rows","disclosed to the organisers before the Final phase"].forEach((a,l)=>{let c=640+l*50+i,h=t*_e((t-.2-l*.12)/.5,0,1);bt(n,Re,c-7,Re+22,c-7,e.good,2.5,h),nt(n,a,Re+40,c,{f:V(e,"body",26,500),color:e.ink,alpha:h})})}};var Se=[{n:1,short:"metric loss",name:"Metric-weighted loss (instead of coefficient MSE)",H:"12",fam:"score"},{n:2,short:"789 features",name:"789 history features (instead of 91)",H:"11",fam:"inputs"},{n:3,short:"dropout + aux",name:"Dropout 0.3 + auxiliary scalar head",H:"4.5",fam:"ens"},{n:4,short:"11-bag + nets",name:"11-member bag + separate q95, \u03B2N nets",H:"6.3",fam:"ens"},{n:5,short:"window mean",name:"Mean with temporal-window members",H:"1.6",fam:"ens"},{n:6,short:"GN step",name:"Consistency correction, one Gauss\u2013Newton step",H:"2.8",fam:"score"},{n:7,short:"iterated GN",name:"Iterated Gauss\u2013Newton with prior M",H:"1.4",B:"2.7",fam:"score"},{n:8,short:"mirror currents",name:"Mirror-canonical currents",H:"1.4",B:"13.7",Dev:"2.6",fam:"inputs"},{n:9,short:"Ip time axis",name:"Ip time axis + heads retrained",H:"0.52",B:"6.8",Dev:"1.1",fam:"inputs"},{n:10,short:"1024\xD78 heads",name:"Correction heads 1024\xD78, 24 seeds",H:"0.05",B:"2.7",Dev:"0.33",fam:"score"},{n:11,short:"contour tune",name:"Contour fine-tune of the map members",H:"0.69",B:"0.74",fam:"score"}],I_=.99598,L_="0.99982",zp="0.99137",U_="0.99700",Hp="0.997253",k_=77e-6,oo=[{id:"score",label:"score-aware",sub:"loss \xB7 correction \xB7 fine-tune",tok:"plasma"},{id:"inputs",label:"inputs",sub:"features \xB7 currents \xB7 time axis",tok:"coil"},{id:"ens",label:"ensemble",sub:"bag \xB7 dropout \xB7 windows",tok:"ink2"}];for(let n of Se)n.h=parseFloat(n.H),n.b=n.B!==void 0?parseFloat(n.B):null;var Vp=(n,t)=>Se.filter(e=>e.fam===n).reduce((e,i)=>e+(i[t]??0),0),Gp=Se.reduce((n,t)=>n+t.h,0),Xp=668,D_=78,lu=42,Wn=150,F_=6.2,yr=1540,_r=(1-I_)*1e4+Se.slice(0,4).reduce((n,t)=>n+t.h,0),oi=n=>Wn+n*F_,ja=n=>Xp+D_*(n+.5),ai=636,cu=14,Wp=[688,988,1288],hu=72,Zp={id:"ladder",steps:4,mount(n,t){this.root=n,this.ctx=t,this.T=t.tokens,this.v=new ni,this.timers=new si,this.cv=$i(n,t),this.loop=new ii(()=>this.draw(),this.v),this.step=0,this.hover=-1,this.pinned=-1,this.demoIdx=-1,this.mode="H",this.rects=[];let e=document.createElement("div");e.className="ui-panel",e.style.cssText="position:absolute;box-sizing:border-box;width:370px;pointer-events:none;opacity:0;transition:opacity .22s var(--ease);z-index:3;",n.appendChild(e),this.card=e;let i=document.createElement("div");i.className="ui-toggle",i.style.cssText="position:absolute;left:1060px;top:798px;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .3s var(--ease);z-index:3;",i.innerHTML='<button type="button" data-m="H" aria-pressed="true">holdout \xB7 150 shots</button><button type="button" data-m="B" aria-pressed="false">time-blocked fold \xB7 500 shots</button>',i.addEventListener("mousedown",r=>r.preventDefault()),i.addEventListener("click",r=>{let o=r.target.closest("button");o&&(o.blur(),this.timers.clear(),this.setMode(o.dataset.m))}),n.appendChild(i),this.toggle=i;let s=this.cv.canvas;this._move=r=>{let o=this.cv.toDesign(r),a=this.hit(o);a!==this.hover&&(this.hover=a,this.demoIdx=-1,this.loop.dirty=!0),s.style.cursor=a>=0?"pointer":"default"},this._leaveC=()=>{this.hover=-1,this.loop.dirty=!0},this._down=r=>{let o=this.cv.toDesign(r),a=this.hit(o);this.timers.clear(),this.demoIdx=-1,this.pinned=a===this.pinned?-1:a,r.pointerType!=="mouse"&&(this.hover=a),this.loop.dirty=!0},s.addEventListener("pointermove",this._move),s.addEventListener("pointerleave",this._leaveC),s.addEventListener("pointerdown",this._down),Se.forEach((r,o)=>this.v.set(`r${o}`,0,{instant:!0})),this.v.set("callout",1,{instant:!0}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.loop.dirty=!0)},enter(){this.loop.dirty=!0,this.loop.start()},leave(){this.loop.stop(),this.timers.clear(),this.v.finish(),this.hover=-1,this.demoIdx=-1},resize(){this.cv.fit(),this.loop.dirty=!0},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=n,this.timers.clear(),this.demoIdx=-1,this.pinned=-1;let i=this.ctx.reducedMotion,s=t||i,r=(a,l=0)=>({dur:a,delay:l,instant:s});this.v.set("callout",n===0?1:0,r(n===0?600:450,n===0?200:0));let o=n>=1&&e<1&&!s;Se.forEach((a,l)=>{n>=1?this.v.set(`r${l}`,1,r(o?520:600,o?250+180*l:0)):this.v.set(`r${l}`,0,r(500))}),this.v.set("legend",n===1?1:0,r(500,n===1&&o?300:0)),this.v.set("regroup",n>=2?1:0,r(1300)),this.v.set("fin",n>=3?1:0,r(1100,(n>=3,0))),n!==2&&this.setMode("H",s),this.toggle.style.transitionDelay=n===2&&!s?"0.9s":"0s",this.toggle.style.opacity=n===2?"1":"0",this.toggle.style.pointerEvents=n===2?"auto":"none",this.loop.dirty=!0},setMode(n,t=!1){this.mode=n,this.toggle.querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.m===n))),this.v.set("bmode",n==="B"?1:0,{dur:900,instant:t||this.ctx.reducedMotion}),this.loop.dirty=!0},demo(){this.timers.clear(),this.step===1?(Se.forEach((n,t)=>this.timers.after(t*700,()=>{this.demoIdx=t,this.loop.dirty=!0})),this.timers.after(Se.length*700+600,()=>{this.demoIdx=-1,this.loop.dirty=!0})):this.step===2&&(this.timers.after(200,()=>this.setMode("B")),this.timers.after(4200,()=>this.setMode("H")))},stairRect(n,t){let e=_r;for(let a=0;a<n;a++)e-=Se[a].h;let i=e-Se[n].h*t,s=oi(i),r=oi(e),o=Math.max(r-s,t>0?3*Math.min(1,t*2):0);return{x:ja(n)-lu/2,y:r-o,w:lu,h:o}},stackRect(n,t){let e=Se[n],i=oo.findIndex(l=>l.id===e.fam),s=0;for(let l=0;l<n;l++)Se[l].fam===e.fam&&(s+=jt(Se[l].h,Se[l].b??0,t));let r=jt(e.h,e.b??0,t),o=e.b===null?jt(2,0,t):2,a=Math.max(r*cu,o);return{x:Wp[i]-hu/2,y:ai-s*cu-a,w:hu,h:a}},barRect(n){let t=this.v.get(`r${n}`),e=this.v.get("regroup"),i=this.v.get("bmode"),s=this.stairRect(n,t);if(e<=0)return s;let r=this.stackRect(n,i),o=ri(_e(e*1.35-n/(Se.length-1)*.35,0,1));return{x:jt(s.x,r.x,o),y:jt(s.y,r.y,o),w:jt(s.w,r.w,o),h:jt(s.h,r.h,o),t:o}},hit(n){if(this.step<1||this.step>2)return-1;for(let t=0;t<Se.length;t++){let e=this.rects[t];if(!e)continue;let i=Math.max(0,14-e.h/2);if(n.x>=e.x-8&&n.x<=e.x+e.w+8&&n.y>=e.y-i-30&&n.y<=e.y+e.h+i)return t}return-1},famColor(n){let t=oo.find(e=>e.id===n);return this.T[t.tok]},draw(){let{g:n}=this.cv,t=this.T;this.cv.begin();let e=this.v.get("regroup"),i=this.v.get("fin"),s=_e(1-i*2,0,1),r=this.v.get("callout"),o=this.demoIdx>=0?this.demoIdx:this.pinned>=0?this.pinned:this.hover,a=_e(1-e*2.2,0,1)*s;if(a>.01){for(let v=10;v<_r;v+=10)bt(n,612,oi(v),1540,oi(v),t.line,1,a*.55);bt(n,612,Wn,1540,Wn,t.ink2,1.5,a),nt(n,"perfect",612,Wn-16,{f:V(t,"body",20,500),color:t.ink,alpha:a}),Yt(n,[["1 \u2212 S = 0",V(t,"mono",19,500),t.ink3]],700,Wn-16,{alpha:a});let u=600,d=oi(40),f=oi(50);bt(n,u,d,u,f,t.ink2,2,a),bt(n,u-6,d,u+6,d,t.ink2,2,a),bt(n,u-6,f,u+6,f,t.ink2,2,a),n.save(),n.translate(u-14,(d+f)/2),n.rotate(-Math.PI/2),nt(n,"10 \xD7 10\u207B\u2074",0,0,{f:V(t,"body",18,500),color:t.ink2,align:"center",alpha:a}),n.restore(),n.save(),n.translate(586,oi(20)),n.rotate(-Math.PI/2),nt(n,"gap to perfect, 1 \u2212 S",0,0,{f:V(t,"body",18,500),color:t.ink3,align:"center",alpha:a}),n.restore();let g=oi(_r);bt(n,612,g,Xp+14,g,t.ink,2,a),nt(n,"first file",680,g-14,{f:V(t,"body",20,500),color:t.ink2,align:"right",alpha:a});let x=_r;Se.forEach((v,T)=>x-=v.h*this.v.get(`r${T}`));let m=oi(x);n.save(),n.globalAlpha=a,n.strokeStyle=t.warn,n.lineWidth=2,n.beginPath(),n.moveTo(yr-8,Wn),n.lineTo(yr,Wn),n.lineTo(yr,m),n.lineTo(yr-8,m),n.stroke();let p=n.createLinearGradient(0,Wn,0,m);p.addColorStop(0,Bt(t.warn,0)),p.addColorStop(1,Bt(t.warn,.1)),n.fillStyle=p,n.fillRect(yr-3,Wn,6,m-Wn),n.restore();let y=(_r-x)/Gp>.5?"remaining gap":"gap to perfect";nt(n,y,yr-16,(Wn+m)/2+7,{f:V(t,"body",20,500),color:t.warn,align:"right",alpha:a});for(let v=0;v<Se.length-1;v++){let T=this.v.get(`r${v}`),S=this.v.get(`r${v+1}`);if(T<.99||S<=0)continue;let w=this.stairRect(v,1);bt(n,w.x+w.w,w.y,ja(v+1)-lu/2,w.y,t.lineStrong,1,a*Math.min(1,S*3),[3,4])}}if(r>.01){let u=r*s,d=660,f=300+(1-r)*14;nt(n,"FIRST FILE \xB7 DEVELOPMENT BOARD",d,f-66,{f:V(t,"body",18,600),color:t.ink3,alpha:u}),Yt(n,[["R\xB2",V(t,"body",30,500),t.ink2],["\u03C8",V(t,"body",22,500),t.ink2]],d,f,{alpha:u}),nt(n,L_,d+64,f,{f:V(t,"mono",58,500),color:t.ink,alpha:u}),nt(n,"yet",d+340,f-2,{f:`italic 400 34px ${t.fontDisplay}`,color:t.ink3,alpha:u}),nt(n,"S",d+412,f,{f:V(t,"body",30,500),color:t.ink2,alpha:u}),nt(n,zp,d+446,f,{f:V(t,"mono",58,500),color:t.warn,alpha:u}),nt(n,"pixels were already right; the score was not.",d,f+50,{f:V(t,"body",22,400),color:t.ink2,alpha:u}),nt(n,"Everything that follows happens in the third decimal.",d,f+84,{f:V(t,"body",22,400),color:t.ink3,alpha:u})}let l=this.v.get("legend")*s;if(l>.01){let u=660,d=214;nt(n,"paired gains, \xD710\u207B\u2074 of S, 150-shot holdout",u,d-34,{f:V(t,"body",20,500),color:t.ink2,alpha:l});for(let f of oo)n.save(),n.globalAlpha=l,n.fillStyle=t[f.tok],An(n,u,d-13,14,14,3),n.fill(),n.restore(),u+=22+nt(n,f.label,u+22,d,{f:V(t,"body",20,500),color:t.ink,alpha:l})+28;nt(n,"click a bar for H / B / Dev",660,d+34,{f:V(t,"body",18,400),color:t.ink3,alpha:l})}this.rects=[];let c=this.v.get("bmode");for(let u=0;u<Se.length;u++){let d=Se[u],f=this.v.get(`r${u}`);if(f<=.001&&e<=0){this.rects[u]=null;continue}let g=this.barRect(u);this.rects[u]=g;let x=this.famColor(d.fam),m=o>=0&&o!==u?.4:1,p=d.b===null?c:0,_=s*Math.min(1,f*2.5+e)*m*(1-p*.92);if(_<.005)continue;n.save(),n.globalAlpha=_,o===u&&(n.globalCompositeOperation="lighter",n.shadowColor=Bt(x,.55),n.shadowBlur=22);let y=n.createLinearGradient(0,g.y,0,g.y+g.h);y.addColorStop(0,Bt(x,.95)),y.addColorStop(1,Bt(x,.62)),n.fillStyle=y,An(n,g.x,g.y,g.w,Math.max(g.h,.5),Math.min(3,g.h/2)),n.fill(),n.restore(),e>.5&&bt(n,g.x,g.y+g.h,g.x+g.w,g.y+g.h,t.bg,2,s*e)}let h=_e(1-e*3,0,1)*s;if(h>.01){let u=oi(_r)+34;for(let d=0;d<Se.length;d++){let f=Se[d],g=this.v.get(`r${d}`),x=_e((g-.35)/.65,0,1)*h*(o>=0&&o!==d?.45:1);if(x<.01)continue;let m=this.stairRect(d,1);nt(n,`+${f.H}`,ja(d),m.y-12,{f:V(t,"mono",21,600),color:o===d?t.ink:this.famColor(f.fam),align:"center",alpha:x}),n.save(),n.translate(ja(d)+8,u),n.rotate(-Math.PI*.22),nt(n,f.short,0,0,{f:V(t,"body",19,500),color:o===d?t.ink:t.ink2,align:"right",alpha:x}),n.restore()}}e>.01&&this.drawFamilies(n,e*s,c,o),i>.01&&this.drawFinal(n,i),this.updateCard(o)},drawFamilies(n,t,e,i){let s=this.T,r=_e((t-.72)/.28,0,1);bt(n,640,ai,1520,ai,s.lineStrong,1.5,t),oo.forEach((l,c)=>{let h=Wp[c],u=s[l.tok],d=h-hu/2;nt(n,l.label,d,ai+36,{f:V(s,"body",24,600),color:u===s.ink2?s.ink:u,alpha:r}),nt(n,l.sub,d,ai+64,{f:V(s,"body",18,400),color:s.ink3,alpha:r});let f=Vp(l.id,"h"),g=Vp(l.id,"b"),x=Se.some(E=>E.fam===l.id&&E.b!==null),m=jt(f,x?g:0,e),p=ai-m*cu,_=Se.map((E,D)=>({r:E,k:D})).filter(E=>E.r.fam===l.id&&(E.r.b!==null||e<.5)),y=_.map(E=>{let D=this.stackRect(E.k,e);return D.y+D.h/2}),v=26,T=Math.min(p+4,ai-10-(_.length-1)*v),S=Xa(y,v,T,ai-10),w=Math.min(...S)-12,R=Math.min(p,w)-58,b=r*(1-e),M=r*e;Yt(n,[[f.toFixed(1),V(s,"mono",44,600),s.ink]],d,R,{alpha:b}),nt(n,`\u2248 ${Math.round(100*f/Gp)}% of the gain`,d,R+32,{f:V(s,"body",20,500),color:s.ink2,alpha:b}),x?(Yt(n,[[g.toFixed(1),V(s,"mono",44,600),s.ink]],d,R,{alpha:M}),nt(n,"on the fold",d,R+32,{f:V(s,"body",20,500),color:s.ink2,alpha:M})):(nt(n,"not measured",d,ai-44,{f:V(s,"body",20,500),color:s.ink3,alpha:M}),nt(n,"on the fold",d,ai-18,{f:V(s,"body",20,500),color:s.ink3,alpha:M})),_.forEach((E,D)=>{let k=this.stackRect(E.k,e),B=jt(E.r.h,E.r.b??0,e),L=E.r.b===null?1-e:1,P=r*L*(i>=0&&i!==E.k?.45:1);if(P<.01||B<=0)return;let z=k.x+k.w+6,W=z+18;n.save(),n.globalAlpha=P*.6,n.strokeStyle=s.lineStrong,n.lineWidth=1,n.beginPath(),n.moveTo(z,y[D]),n.lineTo(W,S[D]),n.lineTo(W+6,S[D]),n.stroke(),n.restore();let it=e>.5&&E.r.B?E.r.B:E.r.H,J=Yt(n,[[`+${it}`,V(s,"mono",19,600),s.ink]],W+10,S[D]+7,{alpha:P});nt(n,E.r.short,J+8,S[D]+7,{f:V(s,"body",18,400),color:s.ink2,alpha:P})})});let o="sums of paired gains, \xD710\u207B\u2074 of S, 150-shot holdout",a="far from the training period, fixing the inputs mattered most";nt(n,o,1060,760,{f:V(s,"body",20,400),color:s.ink3,align:"center",alpha:r*(1-e)}),nt(n,a,1060,760,{f:V(s,"body",20,500),color:s.coil,align:"center",alpha:r*e})},drawFinal(n,t){let e=this.T,i=ri(_e((t-.25)/.75,0,1)),s=(1-i)*24;nt(n,"BLIND FINAL \xB7 CHALLENGE 1",640,150+s,{f:V(e,"body",18,600),color:e.ink3,alpha:i}),Yt(n,[["S",V(e,"body",40,500),e.ink2]],640,250+s,{alpha:i});let r=nt(n,Hp,684,250+s,{f:V(e,"mono",100,500),color:e.ink,alpha:i}),o=nt(n,"2nd",684+r+44,250+s,{f:`400 72px ${e.fontDisplay}`,color:e.plasma,alpha:i});nt(n,"place",684+r+44+o+12,250+s,{f:V(e,"body",24,500),color:e.ink2,alpha:i});let a=500+s,l=.7,c=1400,h=c-k_*1e6*l,u=c-1e3*l;n.save(),n.globalAlpha=i;let d=n.createLinearGradient(u,0,c,0);d.addColorStop(0,"rgba(255,255,255,0.025)"),d.addColorStop(1,"rgba(255,255,255,0.07)"),n.fillStyle=d,n.fillRect(u,a-56,c-u,112),n.restore(),bt(n,620,a,1530,a,e.lineStrong,1.5,i),n.save(),n.globalAlpha=i,n.fillStyle=e.lineStrong,n.beginPath(),n.moveTo(1540,a),n.lineTo(1528,a-6),n.lineTo(1528,a+6),n.fill(),n.restore(),nt(n,"S",1540,a+34,{f:V(e,"body",20,500),color:e.ink3,align:"right",alpha:i});let f=a-78;bt(n,u,f,c,f,e.ink3,1.5,i),bt(n,u,f-7,u,f+7,e.ink3,1.5,i),bt(n,c,f-7,c,f+7,e.ink3,1.5,i),Yt(n,[["top ten within 1 \xD7 10\u207B\xB3",V(e,"body",20,500),e.ink2]],(u+c)/2,f-14,{align:"center",alpha:i});let g=[.996843,.996785,.996741,.996611,.996504,.996465,.996453,.996411];g.forEach((m,p)=>{let _=c-(.99733-m)*1e6*l,y=i*_e((t-.4-p*.03)/.3,0,1);bt(n,_,a-22,_,a+22,e.ink3,2,y)}),nt(n,"3rd",c-(.99733-g[0])*1e6*l,a+50,{f:V(e,"body",18,500),color:e.ink3,align:"center",alpha:i}),nt(n,"10th",c-(.99733-g[7])*1e6*l,a+50,{f:V(e,"body",18,500),color:e.ink3,align:"center",alpha:i}),nt(n,"public final leaderboard, places 1 to 10",u,a+92,{f:V(e,"body",18,400),color:e.ink3,alpha:i}),bt(n,c,a-34,c,a+34,e.ink,2.5,i),nt(n,"1st",c,a-44+0,{f:V(e,"body",20,600),color:e.ink,align:"center",alpha:i*0}),nt(n,"1st",c+12,a+56,{f:V(e,"body",22,600),color:e.ink,alpha:i}),n.save(),n.globalAlpha=i,n.globalCompositeOperation="lighter",n.shadowColor=Bt(e.plasma,.8),n.shadowBlur=18,bt(n,h,a-40,h,a+40,e.plasma,3,1),n.restore(),nt(n,"2nd",h-12,a+56,{f:V(e,"body",22,600),color:e.plasma,align:"right",alpha:i}),nt(n,Hp,h-12,a+84,{f:V(e,"mono",20,500),color:e.plasma,align:"right",alpha:i});let x=a+128;bt(n,h,a+42,h,x+8,e.plasma,1,i*.5,[2,3]),bt(n,c,a+66,c,x+8,e.ink,1,i*.5,[2,3]),bt(n,h,x,c,x,e.ink2,1.5,i),nt(n,"0.000077",(h+c)/2,x+32,{f:V(e,"mono",22,600),color:e.ink,align:"center",alpha:i}),nt(n,"behind 1st",(h+c)/2,x+58,{f:V(e,"body",18,400),color:e.ink2,align:"center",alpha:i}),Yt(n,[["Development board  ",V(e,"body",20,500),e.ink3],[zp,V(e,"mono",22,500),e.ink2],[" first file  \u2192  ",V(e,"body",20,400),e.ink3],[U_,V(e,"mono",22,500),e.ink]],640,800+s,{alpha:i})},updateCard(n){let t=this.card;if(!(n>=0&&this.step>=1&&this.step<=2&&this.rects[n])){t.style.opacity="0";return}let i=Se[n],s=this.rects[n];if(this._cardFor!==n){this._cardFor=n;let a=oo.find(h=>h.id===i.fam),l=this.T[a.tok],c=(h,u)=>`<div style="flex:1"><div class="ui-label" style="color:var(--ink3);font-size:18px">${h}</div><div class="ui-readout" style="font-size:26px;margin-top:6px;color:${u?"var(--ink)":"var(--ink3)"}">${u?"+"+u:"\u2014"}</div></div>`;t.innerHTML=`<div style="display:flex;align-items:center;gap:10px;font:600 18px var(--font-body);color:${l};letter-spacing:.04em;text-transform:uppercase"><span style="font-family:var(--font-mono)">#${i.n}</span><span>${a.label}</span></div><div style="font:500 21px/1.25 var(--font-body);color:var(--ink);margin:10px 0 14px">${i.name}</div><div style="display:flex;gap:10px">${c("holdout",i.H)}${c("fold",i.B)}${c("Dev board",i.Dev)}</div><div class="ui-hint" style="margin-top:12px">\xD710\u207B\u2074 \xB7 fold = time-blocked, 500 shots</div>`}let r=1180,o=this.step===1?392:64;t.style.left=`${r}px`,t.style.top=`${o}px`,t.style.opacity="1"}};var qp=_s("mast");var Qa={agents:{title:"One student, many agents",nodes:{me:{label:"me",chip:"one PhD student"},lead:{label:"lead agent",chip:"coding agent (Claude Code)"},workers:{label:"worker agents"},cluster:{label:"cluster",chip:"Isambard-AI \xB7 GH200 nodes"},reviewer:{label:"second model",chip:"a second model family, as reviewer"},gate:{label:"rules gate"},handoff:{label:"handoff file",sub:"read on start \xB7 written on finish"},leaderboard:{label:"leaderboard",chip:"Codabench"}},flows:{out:"questions \xB7 rules of evidence \xB7 decisions",in:"tables of results"},scores:["0.99137","0.99700","0.997253"],fanout:{counter:"round 1 \xB7 1 September \xB7 7 variants in one night",tableHeader:"variant \xB7 local S \xB7 verdict",rows:[["conv decoder","0.9754","drop"],["loss sweep","0.9766","drop"],["U-Net refiner","0.9608","drop"],["bag of 5 seeds","0.9834","keep"],["MAST: conv","0.5335","drop"],["MAST: well fit","0.5746","drop"],["MAST: q95 heads","no gain","drop"]],keepWord:"keep",pick:3},attack:{caught:["loss: normalisation error","MAST: Thomson bias sign","MAST: control Jacobian"],blocked:["blocked: label guard missing",'blocked: "fix" changed 19% of frames']},incidents:{title:"what went wrong",caughtPrefix:"caught",cards:[{when:"day 1",what:"plasma current read in A; the data are in kA",caught:"a 14\xD7 mismatch in a sanity plot"},{when:"week 1",what:"local scorer left on the wrong machine setting",caught:"a conclusion did not survive a re-check and was retracted"},{when:"October",what:"solenoid modelled with 656 turns; the convention is 328",caught:"flux-map R\xB2 stuck at 0.63 until the factor 0.5"},{when:"often",what:"sessions died at usage limits mid-run",caught:"cluster jobs survive; agents restart from the handoff file"}]},roles:{me:{title:"I did",items:["set the goal: where is the score lost?","asked for an independent audit of every plan","chose between candidates","decided what to submit and what to disclose"]},agents:{title:"the agents did",items:["wrote and reviewed the code","ran and watched the experiments","traced the error to the reversed shots; found the clock rule","checked every file against the rules"]},rules:{title:"rules of evidence",items:["official scorer only","paired shot bootstrap","time-blocked fold as a veto","one factor at a time on the board","re-run and retrained from scratch by the organisers"]}}},close:{title:"What I would tell you over coffee",takeaways:["Decompose the metric before you model.","Put the scorer in the loss, and again after the model.","Fix the data before the network.","Agents multiply throughput. The rules of evidence stay yours."],score:"0.997253",scoreCaption:"2nd of Challenge 1 \xB7 blind Final",links:[{label:"code",value:"github.com/zhouyi-xiaoxiao/fusion-equilibrium-challenge-2026",mono:!0},{label:"this talk",value:"fusion.zhouyixiaoxiao.com",mono:!0},{label:"name",value:"Xiaoxiao Zhouyi \xB7 University of Bristol",mono:!1}],qrUrl:"https://fusion.zhouyixiaoxiao.com",qrCaption:"this talk, live",thanks:"Thanks: the FusionEC-26 organisers, General Atomics, UKAEA, and Isambard-AI."}};var li=(n,t=0,e=1)=>n<t?t:n>e?e:n,br=(n,t,e)=>n+(t-n)*e,Yi=n=>(n=li(n),n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2),ao=n=>1-Math.pow(1-li(n),3),Zn=(n,t,e)=>Yi((n-t)/e),tl=(n,t,e)=>ao((n-t)/e),$p=n=>n-Math.floor(n);function lo(n){let t=Math.imul(n^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}function N_(n,t,e,i,s){let r=1-s;return[r*r*r*n[0]+3*r*r*s*t[0]+3*r*s*s*e[0]+s*s*s*i[0],r*r*r*n[1]+3*r*r*s*t[1]+3*r*s*s*e[1]+s*s*s*i[1]]}var Xn=class{constructor(t,e=48){let i=[];for(let s of t)if(s.c)for(let r=i.length?1:0;r<=e;r++)i.push(N_(...s.c,r/e));else i.length||i.push(s.l[0]),i.push(s.l[1]);this.pts=i,this.cum=[0];for(let s=1;s<i.length;s++)this.cum.push(this.cum[s-1]+Math.hypot(i[s][0]-i[s-1][0],i[s][1]-i[s-1][1]));this.len=this.cum[this.cum.length-1]}at(t){let e=li(t)*this.len,i=this.cum,s=0,r=i.length-1;for(;r-s>1;){let h=s+r>>1;i[h]<e?s=h:r=h}let o=i[r]-i[s]||1,a=(e-i[s])/o,l=this.pts[s],c=this.pts[r];return[l[0]+(c[0]-l[0])*a,l[1]+(c[1]-l[1])*a]}tAtX(t){for(let e=1;e<this.pts.length;e++){let i=this.pts[e-1],s=this.pts[e];if((i[0]-t)*(s[0]-t)<=0&&i[0]!==s[0]){let r=(t-i[0])/(s[0]-i[0]);return(this.cum[e-1]+r*(this.cum[e]-this.cum[e-1]))/this.len}}return 1}trace(t,e=0,i=1){let s=e*this.len,r=i*this.len;t.beginPath();let o=!1;for(let a=0;a<this.pts.length;a++){let l=this.cum[a];if(!(l<s)){if(!o){let c=this.at(e);t.moveTo(c[0],c[1]),o=!0}if(l>r){let c=this.at(i);t.lineTo(c[0],c[1]);return}t.lineTo(this.pts[a][0],this.pts[a][1])}}}};function co(n,t,e=.45){let i=(t[0]-n[0])*e;return new Xn([{c:[n,[n[0]+i,n[1]],[t[0]-i,t[1]],t]}])}var uu=new Map;function B_(n){if(uu.has(n))return uu.get(n);let t=64,e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),s=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);return s.addColorStop(0,n),s.addColorStop(.18,n),s.addColorStop(.4,$e(n,.35)),s.addColorStop(1,$e(n,0)),i.fillStyle=s,i.fillRect(0,0,t,t),uu.set(n,e),e}function $e(n,t){if(n.startsWith("rgba")||n.startsWith("rgb"))return n;let e=parseInt(n.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function ln(n,t,e,i,s,r=1){if(r<=.001)return;let o=B_(s),a=n.globalCompositeOperation,l=n.globalAlpha;n.globalCompositeOperation="lighter",n.globalAlpha=l*r,n.drawImage(o,t-i*2,e-i*2,i*4,i*4),n.globalAlpha=l,n.globalCompositeOperation=a}function wr(n,t,e,i,s,{alpha:r=1,core:o=.55,pulse:a=0,hot:l=null}={}){r<=.001||(n.save(),n.globalAlpha*=r,ln(n,t,e,i*1.5,s,.22+.25*a),n.fillStyle=$e(s,.1),n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.fill(),n.lineWidth=2,n.strokeStyle=s,n.stroke(),n.fillStyle=l||s,n.beginPath(),n.arc(t,e,i*o*.5,0,Math.PI*2),n.fill(),a>0&&(n.globalAlpha*=a,n.lineWidth=1.5,n.beginPath(),n.arc(t,e,i+6+10*(1-a),0,Math.PI*2),n.stroke()),n.restore())}function Mr(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Ri(n,t,e,i,{font:s,color:r="#b9b6ad",accent:o=null,anchor:a="c",alpha:l=1,size:c=18,fill:h="rgba(12,14,23,0.86)",border:u="rgba(255,255,255,0.14)"}={}){n.save(),n.font=s;let d=n.measureText(t).width,f=14,g=o?16:0,x=d+f*2+g,m=c+16,p=a==="c"?e-x/2:a==="r"?e-x:e,_=i-m/2;return n.globalAlpha*=l,Mr(n,p,_,x,m,m/2),n.fillStyle=h,n.fill(),n.lineWidth=1,n.strokeStyle=o?$e(o,.55):u,n.stroke(),o&&(n.fillStyle=o,n.beginPath(),n.arc(p+f+4,i,4,0,Math.PI*2),n.fill()),n.fillStyle=r,n.textBaseline="middle",n.textAlign="left",n.fillText(t,p+f+g,i+1),n.restore(),{x:p,y:_,w:x,h:m}}function Ge(n,t,e,i,{font:s,color:r,align:o="left",baseline:a="alphabetic",alpha:l=1}={}){l<=.001||(n.save(),n.globalAlpha*=l,n.font=s,n.fillStyle=r,n.textAlign=o,n.textBaseline=a,n.fillText(t,e,i),n.restore())}function Yp(n,t,e,i,s,r,{color:o,ink3:a,good:l,alpha:c=1}){n.save(),n.globalAlpha*=c,n.lineWidth=2,n.strokeStyle=o,n.fillStyle=$e(o,.05),Mr(n,t,e,i,s,6),n.fill(),n.stroke(),n.beginPath(),n.moveTo(t+10,e+s),n.lineTo(t+10,e+s+8),n.moveTo(t+i-10,e+s),n.lineTo(t+i-10,e+s+8),n.moveTo(t+8,e+12),n.lineTo(t+i-8,e+12),n.stroke();for(let h of r){let u=h.y,d=t+10,f=i-32;n.globalAlpha=c*(.35+.65*h.alpha),n.strokeStyle=$e(o,.45),n.lineWidth=1,Mr(n,t+6,u-15,i-12,30,4),n.stroke(),n.fillStyle="rgba(255,255,255,0.07)",n.fillRect(d,u-4,f,8),h.fill>0&&(n.fillStyle=o,n.fillRect(d,u-4,f*h.fill,8),h.fill<1&&ln(n,d+f*h.fill,u,5,o,.9)),n.fillStyle=h.done?l:h.fill>0?o:a,n.beginPath(),n.arc(t+i-13,u,3.5,0,Math.PI*2),n.fill(),h.done&&ln(n,t+i-13,u,4,l,.6)}n.restore()}function el(n,t,e,i,s,r,{alpha:o=1,lines:a=3,lw:l=2,fill:c="rgba(6,7,12,0.9)"}={}){if(o<=.001)return;let h=Math.min(i,s)*.32,u=t-i/2,d=e-s/2;n.save(),n.globalAlpha*=o,n.lineWidth=l,n.strokeStyle=r,n.fillStyle=c,n.beginPath(),n.moveTo(u,d),n.lineTo(u+i-h,d),n.lineTo(u+i,d+h),n.lineTo(u+i,d+s),n.lineTo(u,d+s),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(u+i-h,d),n.lineTo(u+i-h,d+h),n.lineTo(u+i,d+h),n.stroke(),n.lineWidth=Math.max(1,l*.75);for(let f=0;f<a;f++){let g=d+s*(.45+f*.17);n.beginPath(),n.moveTo(u+i*.2,g),n.lineTo(u+i*(f===a-1?.55:.8),g),n.stroke()}n.restore()}function Jp(n,t,e,i,{alpha:s=1,open:r=0,h:o=64}={}){if(s<=.001)return;n.save(),n.globalAlpha*=s,n.lineWidth=2,n.strokeStyle=i;let a=e-o/2;n.beginPath(),n.moveTo(t-14,a),n.lineTo(t-14,e+o/2),n.moveTo(t+14,a),n.lineTo(t+14,e+o/2),n.moveTo(t-20,e+o/2),n.lineTo(t+20,e+o/2),n.moveTo(t-20,a),n.lineTo(t+20,a),n.stroke(),n.lineWidth=1.5,n.strokeStyle=$e(i,.5+.5*r),n.beginPath(),n.moveTo(t,a+6),n.lineTo(t,e+o/2-6),n.stroke(),n.restore()}function Kp(n,t,e,i,s,r,o,{alpha:a=1,flash:l=0}={}){if(a<=.001)return;n.save(),n.globalAlpha*=a,l>0&&ln(n,t,e,i*.6,o,.35*l),n.lineWidth=2,n.strokeStyle=r,n.fillStyle="rgba(6,7,12,0.9)",Mr(n,t-i/2,e-s/2,i,s,6),n.fill(),n.stroke();let c=[.78,.62,.46];for(let h=0;h<3;h++){let u=e-s/2+s*(.28+h*.24);n.fillStyle=h===1?o:"rgba(243,241,234,0.45)",n.fillRect(t-i/2+12,u-3,(i-24)*c[h],6)}n.restore()}var Ie=Qa.agents,du=30,O_=`
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
`;function z_(){let n=Ie.fanout.rows,t=Math.max(1,n.length),e={me:{x:110,y:380,r:22},lead:{x:620,y:440,r:30},rev:{x:700,y:112,r:22},rack:{x:1235,y:146,w:84,h:468},gate:{x:1396,y:720},board:{x:1528,y:720,w:76,h:58},handoff:{x:950,y:806,w:36,h:46},table:{x:206,y:82},pathY:720,workers:[]},i=182,s=578;for(let u=0;u<t;u++){let d=t===1?.5:u/(t-1),f=2*d-1;e.workers.push({x:1068-16*f*f,y:br(i,s,d),r:13})}let{me:r,lead:o,rev:a,rack:l,board:c,handoff:h}=e;return e.paths={out:new Xn([{c:[[r.x+r.r+6,r.y-7],[330,r.y-7],[420,o.y-9],[o.x-o.r-6,o.y-9]]}]),in:new Xn([{c:[[o.x-o.r-6,o.y+9],[420,o.y+9],[330,r.y+7],[r.x+r.r+6,r.y+7]]}]),direct:co([o.x+o.r+6,o.y],[l.x-6,l.y+l.h/2],.5),directBack:co([l.x-6,l.y+l.h/2+10],[o.x+o.r+6,o.y+10],.5),rev:new Xn([{c:[[a.x,a.y+a.r+6],[a.x,250],[o.x+4,300],[o.x+4,o.y-o.r-6]]}]),submit:new Xn([{c:[[o.x+o.r+6,o.y+12],[800,o.y+30],[770,e.pathY],[930,e.pathY]]},{l:[[930,e.pathY],[c.x-c.w/2-8,e.pathY]]}]),handoff:new Xn([{c:[[h.x-8,h.y-h.h/2-8],[h.x-30,600],[800,o.y+40],[o.x+o.r+4,o.y+22]]}]),handoffW:new Xn([{c:[[h.x+8,h.y-h.h/2-8],[h.x+8,640],[e.workers[t-1].x,660],[e.workers[t-1].x,e.workers[t-1].y+20]]}]),wIn:e.workers.map(u=>co([o.x+o.r+6,o.y],[u.x-u.r-6,u.y],.5)),wBack:e.workers.map(u=>co([u.x-u.r-6,u.y+4],[o.x+o.r+6,o.y+4],.5)),wOut:e.workers.map(u=>new Xn([{l:[[u.x+u.r+6,u.y+6],[l.x-6,u.y+6]]}]))},e.gateT=e.paths.submit.tAtX(e.gate.x-26),e}function H_(n){let t=String(n).replace("\u2212","-"),e=(t.split(".")[1]||"").length;return{v:parseFloat(t),d:e}}var V_={id:"agents",steps:5,mount(n,t){this.ctx=t,this.T=t.tokens,this.root=n,this.L=z_(),this.step=0,this.stepStart=performance.now()/1e3,this.tauOffset=du,this.hover=null,this.pinned=null,this.quality=1,this.slow=0,this.dim={from:1,to:1,t0:0},this.entered=!1,this.raf=0;let e=document.createElement("style");e.textContent=O_,n.appendChild(e);let i=document.createElement("div");i.className="ag-root",n.appendChild(i),this.wrap=i;let s=document.createElement("canvas");s.className="ag-canvas",i.appendChild(s),this.canvas=s,this.g=s.getContext("2d"),this._buildPanels(i),this._onMove=r=>{if(!this.entered)return;let o=this._toDesign(r);this.hover=this._hit(o),s.style.cursor=this.hover?"pointer":"default",this._requestRender()},this._onDown=r=>{if(!this.entered)return;r.preventDefault();let o=this._hit(this._toDesign(r));this.pinned=o&&o!==this.pinned?o:null,this._requestRender()},this._onLeave=()=>{this.hover=null,this._requestRender()},s.addEventListener("pointermove",this._onMove),s.addEventListener("pointerdown",this._onDown),s.addEventListener("pointerleave",this._onLeave),this.resize(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this._requestRender())},_buildPanels(n){let t=a=>String(a).replace(/[&<>]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[l]),e=a=>{let l=document.createElement("div");return l.className="ag-veil",l.style.background=`linear-gradient(90deg, rgba(6,7,12,0) ${a-90}px, rgba(6,7,12,.86) ${a-10}px, rgba(6,7,12,.9) 100%)`,n.appendChild(l),l};this.veil3=e(820),this.veil3.style.bottom="236px",this.veil3.style.maskImage=this.veil3.style.webkitMaskImage="linear-gradient(180deg, #000 85%, transparent)",this.veil4=e(640);let i=document.createElement("div");i.className="ag-panel",i.style.cssText="left:820px;top:78px;width:740px;",i.innerHTML=`<div class="ag-kicker">${t(Ie.incidents.title)}</div>`+Ie.incidents.cards.map((a,l)=>`<div class="ag-card" style="transition-delay:${(.15+l*.22).toFixed(2)}s"><div class="ag-when">${t(a.when)}</div><div><div class="ag-what">${t(a.what)}</div><div class="ag-caught"><b>${t(Ie.incidents.caughtPrefix)}</b>${t(a.caught)}</div></div></div>`).join(""),n.appendChild(i),this.incPanel=i;let s=Ie.roles,r=a=>`<ul>${a.map(l=>`<li>${t(l)}</li>`).join("")}</ul>`,o=document.createElement("div");o.className="ag-panel",o.style.cssText="left:640px;top:84px;width:920px;",o.innerHTML=`<div class="ag-cols"><div class="ag-col is-me" style="transition-delay:.1s"><h3>${t(s.me.title)}</h3>${r(s.me.items)}</div><div class="ag-col is-agents" style="transition-delay:.35s"><h3>${t(s.agents.title)}</h3>${r(s.agents.items)}</div></div><div class="ag-rules" style="transition-delay:.65s"><div class="ag-kicker">${t(s.rules.title)}</div>${r(s.rules.items)}</div>`,n.appendChild(o),this.rolesPanel=o},enter(){this.entered=!0,this.t0=performance.now()/1e3,this.ctx.reducedMotion?this._requestRender():this._loop()},leave(){this.entered=!1,cancelAnimationFrame(this.raf),this.raf=0,this.hover=null,this.pinned=null},setStep(n,{instant:t=!1}={}){let e=this.step;this.step=li(n|0,0,this.steps-1),t=t||this.ctx.reducedMotion,this.stepStart=performance.now()/1e3,this.tauOffset=t?du:0;let i=this.stepStart,s=this._dimNow(i),r=this.step>=3?.35:1;this.dim=t||e===this.step?{from:r,to:r,t0:i}:{from:s,to:r,t0:i},this._panels(t),this._requestRender()},demo(){this.stepStart=performance.now()/1e3,this.tauOffset=this.ctx.reducedMotion?du:0,this._panels(this.ctx.reducedMotion,!0),this._requestRender()},resize(){let n=this.ctx.fitCanvas(this.canvas);this.ratio=n.ratio,this._requestRender()},_panels(n,t=!1){let e=(i,s)=>{n&&i.classList.add("ag-instant"),t&&s&&(i.classList.add("ag-instant"),i.classList.remove("is-on"),i.offsetWidth,i.classList.remove("ag-instant")),i.classList.toggle("is-on",s),n&&(i.offsetWidth,i.classList.remove("ag-instant"))};e(this.veil3,this.step===3),e(this.veil4,this.step===4),e(this.incPanel,this.step===3),e(this.rolesPanel,this.step===4)},_dimNow(n){let t=this.dim;return br(t.from,t.to,Zn(n-t.t0,0,.6))},_toDesign(n){let t=this.canvas.getBoundingClientRect();return[(n.clientX-t.left)/t.width*1600,(n.clientY-t.top)/t.height*900]},_hit([n,t]){if(this.step>=3)return null;let e=this.L,i=(s,r)=>Math.hypot(n-s.x,t-s.y)<r;if(i(e.me,46))return"me";if(i(e.lead,52))return"lead";if(this.step>=2&&i(e.rev,44))return"rev";if(n>e.rack.x-10&&n<e.rack.x+e.rack.w+10&&t>e.rack.y-10&&t<e.rack.y+e.rack.h+10)return"cluster";if(this.step>=1){for(let s=0;s<e.workers.length;s++)if(i(e.workers[s],26))return"w"+s}return this.step>=2&&i(e.gate,40)?"gate":i(e.board,50)?"board":this.step>=1&&i(e.handoff,40)?"handoff":null},_requestRender(){if(this.ctx.reducedMotion||!this.raf){if(this._pending)return;this._pending=requestAnimationFrame(()=>{this._pending=0,this._render()})}},_loop(){let n=performance.now(),t=e=>{if(!this.entered)return;let i=e-n;n=e,i>24?this.slow=Math.min(120,this.slow+1):this.slow=Math.max(0,this.slow-.5),this.slow>60&&(this.quality=Math.max(.4,this.quality-.1),this.slow=0),this._render(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)},_render(){let n=this.g,t=this.T,e=this.L,i=performance.now()/1e3,s=i-this.stepStart+this.tauOffset,r=this.ctx.reducedMotion?2.3:i-(this.t0||i),o=this.step,a=this.ratio||1;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.setTransform(a,0,0,a,0,0);let l=this._dimNow(i),c=o<3?this.pinned||this.hover:null,h=(q,rt=0,U=.5)=>o>q?1:o===q?Zn(s,rt,U):0,u={body:(q,rt)=>`${q} ${rt}px ${t.fontBody}`,mono:(q,rt)=>`${q} ${rt}px ${t.fontMono}`,disp:(q,rt)=>`${q} ${rt}px ${t.fontDisplay}`},d=e.workers.length,f=e.workers.map((q,rt)=>h(1,.05+.06*rt,.4)),g=h(1,.1,.5),x=o===0?1:o===1?1-Zn(s,0,.45):0,m=h(2,0,.45),p=h(2,.5,.4),_=h(1,.1,.4),y=[],v=(q,rt,U,G,Q)=>G>.001&&y.push({path:q,color:rt,ends:U,vis:G,flow:Q});v(e.paths.out,t.ink,["me","lead"],1,{n:3,period:3.6,size:3.2}),v(e.paths.in,t.ink2,["lead","me"],1,{n:2,period:4.4,size:3}),v(e.paths.direct,t.plasma,["lead","cluster"],x,{n:3,period:3,size:3}),v(e.paths.directBack,t.coil,["cluster","lead"],x,{n:2,period:3.4,size:2.6});for(let q=0;q<d;q++){let rt=f[q];v(e.paths.wIn[q],t.plasma,["lead","w"+q],rt,{n:1,period:2.6+.37*lo(q),size:2.6}),v(e.paths.wOut[q],t.plasma,["w"+q,"cluster"],rt,{n:1,period:1.6+.5*lo(q+11),size:2.4})}v(e.paths.handoff,t.ink2,["handoff","lead"],g,{n:1,period:5.5,size:2.6,dash:!0}),v(e.paths.handoffW,t.ink2,["handoff","workers"],g,{n:1,period:6.5,size:2.4,dash:!0}),v(e.paths.rev,t.flux,["rev","lead"],m,{n:1,period:2.6,size:3}),v(e.paths.submit,t.ink,["lead","board"],1,o<2?{n:2,period:4.2,size:3}:null);let T=q=>{if(!c)return 1;let rt=q.ends;return rt.includes(c)||c.startsWith("w")&&rt.includes("workers")||c==="gate"&&rt.includes("board")?1.8:.25},S=q=>{if(!c||q===c)return 1;for(let rt of y)if(T(rt)>1&&rt.ends.includes(q))return 1;return c.startsWith("w")&&q==="cluster"?1:.4};n.save(),n.globalAlpha=l;for(let q of y){let rt=T(q);n.save(),n.lineWidth=rt>1?2.2:1.5,n.strokeStyle=$e(q.color,Math.min(.75,.2*rt)*q.vis),q.flow&&q.flow.dash&&n.setLineDash([5,7]),q.path.trace(n),n.stroke(),n.restore()}for(let q of y){if(!q.flow)continue;let rt=T(q),U=Math.max(1,Math.round(q.flow.n*this.quality));for(let G=0;G<U;G++){let Q=$p(r/q.flow.period+G/U+lo(q.path.len|0)),O=q.path.at(Q),Y=Math.min(1,Q*6,(1-Q)*6);ln(n,O[0],O[1],q.flow.size,q.color,.85*Y*q.vis*Math.min(1,rt))}}let w=e.workers.map((q,rt)=>{let U=.25+.04*rt,G=.35+.4*lo(rt*3+1);return{st:U,du:G,fin:U+G,row:U+G+.3}}),R=Math.max(...w.map(q=>q.row))+.05,b=q=>o>1?1:o===1?li((s-w[q].st)/w[q].du):0;if(o===1)for(let q=0;q<d;q++){let rt=(s-.02-.06*q)/.4;if(rt>0&&rt<1){let G=e.paths.wIn[q].at(Yi(rt));ln(n,G[0],G[1],4.5,t.plasmaHot,1)}let U=s-w[q].fin;if(U>0&&U<.3){let G=U<.14?e.paths.wBack[q].at(Yi(U/.14)):e.paths.in.at(Yi((U-.14)/.16));ln(n,G[0],G[1],4.2,t.coil,1)}}let M=Ie.attack.caught;if(o===2){let q=M.length+2;for(let rt=0;rt<q;rt++){let U=(s-.15-.18*rt)/.45;if(U>0&&U<1){let G=e.paths.rev.at(Yi(U));ln(n,G[0],G[1],5,t.flux,1)}}}o>=2&&this._drawFiles(n,s,p,o);let E=e.lead,D=0;if(o===2)for(let q=0;q<M.length+2;q++){let rt=s-.15-.18*q-.45;rt>0&&rt<.4&&(D=Math.max(D,1-rt/.4))}let k=1,B=null;o===3&&(B=this._restartState(s)),B&&(k=B.lead),wr(n,e.me.x,e.me.y,e.me.r,t.ink,{alpha:S("me"),hot:"#ffffff"}),o!==3&&wr(n,E.x,E.y,E.r,t.plasma,{alpha:S("lead")*k,pulse:D,hot:t.plasmaHot});for(let q=0;q<d;q++){let rt=e.workers[q],U=f[q];if(U<=0)continue;let G=.4+.6*ao(U);wr(n,rt.x,rt.y,rt.r*G,t.plasma,{alpha:U*S("w"+q),hot:t.plasmaHot,core:.7}),Ge(n,Ie.fanout.rows[q][0],rt.x+rt.r+11,rt.y-6,{font:u.body(500,18),color:t.ink2,alpha:U*S("w"+q)})}let L=e.workers.map((q,rt)=>({y:q.y+6,fill:b(rt),done:b(rt)>=1,alpha:o>=1?f[rt]:0}));if(Yp(n,e.rack.x,e.rack.y,e.rack.w,e.rack.h,L,{color:t.coil,ink3:t.ink3,good:t.good,alpha:S("cluster")}),m>0&&wr(n,e.rev.x,e.rev.y,e.rev.r*(.5+.5*m),t.flux,{alpha:m*S("rev"),hot:"#e6fbff"}),p>0){let q=this._gateColor(s);Jp(n,e.gate.x,e.gate.y,q,{alpha:p*S("gate"),open:.5})}Kp(n,e.board.x,e.board.y,e.board.w,e.board.h,t.ink,t.plasma,{alpha:S("board"),flash:this._boardFlash(s,o)}),g>0&&el(n,e.handoff.x,e.handoff.y,e.handoff.w,e.handoff.h,t.ink2,{alpha:g*S("handoff")});let P=Ie.nodes,z=(q,rt,U,G={})=>Ge(n,q,rt,U,{font:u.body(600,22),color:t.ink,align:"center",...G}),W=u.body(500,18);if(z(P.me.label,e.me.x,e.me.y-38,{alpha:S("me")}),Ri(n,P.me.chip,e.me.x,e.me.y+50,{font:W,alpha:S("me")}),z(P.lead.label,E.x,E.y+E.r+28,{alpha:S("lead")}),Ri(n,P.lead.chip,E.x,E.y+E.r+58,{font:W,accent:t.plasma,alpha:S("lead")}),z(P.cluster.label,e.rack.x+e.rack.w/2,e.rack.y-16,{alpha:S("cluster")}),Ri(n,P.cluster.chip,e.rack.x+e.rack.w/2,e.rack.y-58,{font:W,accent:t.coil,alpha:S("cluster")}),z(P.leaderboard.label,e.board.x,e.board.y-e.board.h/2-18,{alpha:S("board")}),Ri(n,P.leaderboard.chip,e.board.x,e.board.y+e.board.h/2+76,{font:W,alpha:S("board")}),this._drawScore(n,s,o,R,u),g>0){let q=e.handoff.x-e.handoff.w/2-16;Ge(n,P.handoff.label,q,e.handoff.y-4,{font:u.body(600,22),color:t.ink,align:"right",alpha:g*S("handoff")}),Ge(n,P.handoff.sub,q,e.handoff.y+24,{font:u.body(400,18),color:t.ink3,align:"right",alpha:g*S("handoff")})}let it=e.paths.out.at(.5),J=e.paths.in.at(.5);Ge(n,Ie.flows.out,it[0]+16,it[1]-24,{font:u.body(500,18),color:t.ink2,align:"center",alpha:S("me")}),Ge(n,Ie.flows.in,J[0]-40,J[1]+32,{font:u.body(500,18),color:t.ink3,align:"center",alpha:S("me")});let ht=h(1,.35,.5);if(ht>0){let q=(e.workers[0].x+e.rack.x+e.rack.w)/2-40;z(P.workers.label,q,e.workers[d-1].y+52,{alpha:ht*S("w0")}),Ri(n,Ie.fanout.counter,q,e.workers[d-1].y+86,{font:u.body(500,20),size:20,color:t.ink,accent:t.plasma,alpha:ht})}if(_>0&&this._drawTable(n,s,o,w,R,_,u),m>0){Ge(n,P.reviewer.label,e.rev.x+36,e.rev.y+2,{font:u.body(600,22),color:t.ink,alpha:m*S("rev")}),Ri(n,P.reviewer.chip,e.rev.x+36,e.rev.y+38,{font:W,anchor:"l",accent:t.flux,alpha:m*S("rev")});let q=M.length;for(let rt=0;rt<q;rt++){let U=o>2?1:tl(s,.5+.22*rt,.35);if(U<=0)continue;let G=.3+.52*(rt+.5)/q,Q=e.paths.rev.at(G),O=732;n.save(),n.globalAlpha*=U*S("rev"),n.strokeStyle=$e(t.flux,.7),n.lineWidth=1.5,n.beginPath(),n.moveTo(Q[0]+5,Q[1]),n.lineTo(O,Q[1]),n.stroke(),n.fillStyle=t.flux,n.beginPath(),n.arc(Q[0],Q[1],3.5,0,Math.PI*2),n.fill(),n.restore(),Ri(n,M[rt],O+(1-U)*14,Q[1],{font:u.body(500,20),size:20,anchor:"l",color:t.ink,accent:t.flux,alpha:U*S("rev"),fill:"rgba(8,10,16,0.95)"})}}if(p>0){z(P.gate.label,e.gate.x,e.gate.y+64,{alpha:p*S("gate")});let q=Ie.attack.blocked;for(let rt=0;rt<q.length;rt++){let U=this._fileBirth(this._bounceK(rt))+1.3+.1,G=o>2?1:tl(s,U,.35);G<=0||Ri(n,q[rt],e.gate.x-58,e.pathY+48+42*rt+(1-G)*10,{font:u.body(500,20),size:20,anchor:"r",color:t.ink,accent:t.warn,alpha:G*S("gate"),fill:"rgba(8,10,16,0.95)"})}}if(n.restore(),o===3){let q=B;if(n.save(),n.globalAlpha=1,n.lineWidth=2,n.setLineDash([5,7]),n.strokeStyle=$e(t.ink2,.25+.5*q.link),e.paths.handoff.trace(n),n.stroke(),n.setLineDash([]),el(n,e.handoff.x,e.handoff.y,e.handoff.w,e.handoff.h,t.ink,{alpha:.6+.4*q.link}),q.link>0&&ln(n,e.handoff.x,e.handoff.y,22,t.ink,.25*q.link),q.pulse!==null){let U=e.paths.handoff.at(q.pulse);ln(n,U[0],U[1],5,t.ink,1)}wr(n,E.x,E.y,E.r,t.plasma,{alpha:q.lead,hot:t.plasmaHot,pulse:q.ring});let rt=e.handoff.x-e.handoff.w/2-16;Ge(n,Ie.nodes.handoff.label,rt,e.handoff.y-4,{font:`600 22px ${t.fontBody}`,color:t.ink,align:"right",alpha:.6+.4*q.link}),Ge(n,Ie.nodes.handoff.sub,rt,e.handoff.y+24,{font:`400 18px ${t.fontBody}`,color:t.ink2,align:"right"}),q.lead<.3&&(n.strokeStyle=$e(t.plasma,.4),n.lineWidth=1.5,n.setLineDash([3,5]),n.beginPath(),n.arc(E.x,E.y,E.r,0,Math.PI*2),n.stroke()),n.restore()}},_restartState(n){let t=n<6.9?n:.9+(n-.9)%6,e=1,i=null,s=0,r=0;return t>=.9&&t<1.2?e=Math.sin(t*70)>0?.85-(t-.9)*2:.12:t>=1.2&&t<1.3?e=.06:t>=1.3&&t<1.6?(e=.06,i=Yi((t-1.3)/.3),s=1):t>=1.6&&t<2.4&&(e=Zn(t,1.6,.3)*.94+.06,r=1-li((t-1.6)/.8),s=1-li((t-1.6)/.8)),{lead:e,pulse:i,link:s,ring:r}},_fileBirth(n){return n<=4?-.6+.3*n:.6+(n-4)*.85},_bounceK(n){return[1,3][n]!==void 0?[1,3][n]:5+5*(n-2)+2},_bounces(n){let t=Ie.attack.blocked.length;for(let e=0;e<t;e++)if(this._bounceK(e)===n)return!0;return n>=5&&(n-5)%5===2},_gateColor(n){let t=this.T;for(let e=this._kMax(n);e>=Math.max(0,this._kMax(n)-6);e--){let i=n-this._fileBirth(e)-1.3;if(i>=0&&i<.45)return this._bounces(e)?t.warn:t.good}return t.ink2},_kMax(n){return n<.6?4:4+Math.max(0,Math.ceil((n-.6)/.85))},_boardFlash(n,t){if(t<2)return 0;let e=0;for(let i=this._kMax(n);i>=Math.max(0,this._kMax(n)-6);i--){if(this._bounces(i))continue;let s=n-this._fileBirth(i)-1.3-.45;s>=0&&s<.6&&(e=Math.max(e,1-s/.6))}return e},_drawFiles(n,t,e,i){if(e<=0)return;let s=this.T,r=this.L.paths.submit,o=this.L.gate.x,a=this._kMax(t);for(let l=Math.max(0,a-6);l<=a;l++){let c=t-this._fileBirth(l);if(c<0)continue;let h,u,d=s.ink2,f=e;if(c<1.3){let g=r.at(ao(c/1.3)*this.L.gateT);h=g[0],u=g[1],f*=Math.min(1,c*5)}else if(this._bounces(l)){let g=c-1.3;if(g>.75)continue;let x=ao(g/.75);h=o-26-46*x,u=this.L.pathY+34*x*x,d=s.warn,f*=1-g/.75}else{let g=c-1.3;if(g>.45)continue;let x=r.at(br(this.L.gateT,1,Yi(g/.45)));h=x[0],u=x[1],d=s.good,f*=1-Math.max(0,(g-.3)/.15)}el(n,h,u,20,26,d,{alpha:f,lines:2,lw:1.6})}},_drawScore(n,t,e,i,s){let r=this.T,o=Ie.scores.map(H_),a=h=>o[Math.min(h,o.length-1)],l;e===0?l=a(0).v:e===1?l=br(a(0).v,a(1).v,Zn(t,i,.5)):e===2?l=br(a(1).v,a(2).v,Zn(t,1,.9)):l=a(2).v;let c=a(Math.min(e,2)).d;Ge(n,l.toFixed(c),this.L.board.x,this.L.board.y+this.L.board.h/2+38,{font:s.mono(500,24),color:r.ink,align:"center"})},_drawTable(n,t,e,i,s,r,o){let a=this.T,{x:l,y:c}=this.L.table,h=Ie.fanout.rows,u=Ie.fanout.tableHeader.split(" \xB7 ");n.save(),n.globalAlpha*=r;let d=o.body(500,20),f=o.mono(500,20);n.font=d;let g=0;for(let S of h)g=Math.max(g,n.measureText(S[0]).width);n.font=o.body(500,18),g=Math.max(g,n.measureText(u[0]||"").width);let x=n.measureText(u[1]||"").width;n.font=f;let m=x;for(let S of h)m=Math.max(m,n.measureText(S[1]||"").width);let p=l+g+28+m,_=p+26,y=31;Ge(n,u[0]||"",l,c,{font:o.body(500,18),color:a.ink3}),Ge(n,u[1]||"",p,c,{font:o.body(500,18),color:a.ink3,align:"right"}),Ge(n,u[2]||"",_,c,{font:o.body(500,18),color:a.ink3}),n.font=o.body(500,18);let v=_+Math.max(60,n.measureText(u[2]||"").width)-l;n.strokeStyle=a.line,n.lineWidth=1,n.beginPath(),n.moveTo(l-10,c+11),n.lineTo(l+v+10,c+11),n.stroke();let T=e>1?1:e===1?Zn(t,s,.4):0;h.forEach((S,w)=>{let R=e>1?1:i[w]?tl(t,i[w].row,.25):1;if(R<=0)return;let b=c+14+y*(w+1)-8;w===Ie.fanout.pick&&T>0&&(n.save(),n.globalAlpha*=T,Mr(n,l-12,b-22,v+24,y-1,6),n.fillStyle=$e(a.good,.1),n.fill(),n.strokeStyle=$e(a.good,.6),n.lineWidth=1.2,n.stroke(),n.restore());let M=(S[2]||"")===Ie.fanout.keepWord,E=R*(w===Ie.fanout.pick?1:1-.25*T);Ge(n,S[0],l+(1-R)*-10,b,{font:d,color:a.ink,alpha:E}),Ge(n,S[1]||"",p,b,{font:f,color:M?a.ink:a.ink2,align:"right",alpha:E}),Ge(n,S[2]||"",_,b,{font:o.body(500,20),color:M?a.good:a.ink3,alpha:E})}),n.restore()}},jp=V_;function Qp(n,t,e,i,s,r,o,a){let l=s*r;return[n+a*(1-r*r)+r*e*Math.cos(o+l*Math.sin(o)),t-r*i*e*Math.sin(o)]}function t0(n,t,e){let{cx:i,cy:s,a:r,kappa:o=1.8,delta:a=.5,levels:l=9,color:c,alpha:h=1,particles:u=40}=e,d=.14*r;n.save(),n.lineWidth=1.5;for(let f=1;f<=l;f++){let g=f/l,x=1+.018*Math.sin(t*.55-g*1.6),m=o+.035*Math.sin(t*.4+g),p=r*x;n.strokeStyle=$e(c,h*(.1+.24*g)*(f===l?1.6:1)),n.beginPath();let _=160;for(let y=0;y<=_;y++){let v=y/_*Math.PI*2,T=Qp(i,s,p,m,a,g,v,d);y===0?n.moveTo(T[0],T[1]):n.lineTo(T[0],T[1])}n.stroke()}ln(n,i+d,s,10,c,.35*h);for(let f=0;f<u;f++){let x=(1+f%l)/l,m=(.06+.05*(f*7%5)/5)*(f%2?1:-1),p=f*2.399%(Math.PI*2)+t*m/(.4+x),_=1+.018*Math.sin(t*.55-x*1.6),y=Qp(i,s,r*_,o+.035*Math.sin(t*.4+x),a,x,p,d);ln(n,y[0],y[1],2.2+1.2*x,c,h*(.35+.4*x))}n.restore()}var ho=new Uint8Array(512),fu=new Uint8Array(256);{let n=1;for(let t=0;t<255;t++)ho[t]=n,fu[n]=t,n<<=1,n&256&&(n^=285);for(let t=255;t<512;t++)ho[t]=ho[t-255]}var n0=(n,t)=>n&&t?ho[fu[n]+fu[t]]:0;function G_(n){let t=[1];for(let e=0;e<n;e++){let i=new Array(t.length+1).fill(0);for(let s=0;s<t.length;s++)i[s]^=t[s],i[s+1]^=n0(t[s],ho[e]);t=i}return t}function W_(n,t){let e=t.length-1,i=new Array(e).fill(0);for(let s of n){let r=s^i.shift();i.push(0);for(let o=0;o<e;o++)i[o]^=n0(t[o+1],r)}return i}var e0=[null,[10,1,16,0,0],[16,1,28,0,0],[26,1,44,0,0],[18,2,32,0,0],[24,2,43,0,0],[16,4,27,0,0],[18,4,31,0,0],[22,2,38,2,39],[22,3,36,2,37],[26,4,43,1,44]],X_=[null,[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]],Z_=0;function q_(n){return Array.from(new TextEncoder().encode(n))}function i0(n){let t=q_(n),e=0;for(let L=1;L<=10;L++){let P=e0[L],z=P[1]*P[2]+P[3]*P[4];if(4+(L<=9?8:16)+8*t.length<=z*8){e=L;break}}if(!e)throw new Error("QR: text too long for versions 1-10 at level M");let[i,s,r,o,a]=e0[e],l=s*r+o*a,c=l*8,h=[],u=(L,P)=>{for(let z=P-1;z>=0;z--)h.push(L>>>z&1)};u(4,4),u(t.length,e<=9?8:16);for(let L of t)u(L,8);u(0,Math.min(4,c-h.length)),u(0,(8-h.length%8)%8);let d=[];for(let L=0;L<h.length;L+=8){let P=0;for(let z=0;z<8;z++)P=P<<1|h[L+z];d.push(P)}for(let L=236;d.length<l;L^=253)d.push(L);let f=G_(i),g=[],x=0;for(let L=0;L<s+o;L++){let P=L<s?r:a,z=d.slice(x,x+P);x+=P,g.push({d:z,e:W_(z,f)})}let m=[],p=Math.max(r,a);for(let L=0;L<p;L++)for(let P of g)L<P.d.length&&m.push(P.d[L]);for(let L=0;L<i;L++)for(let P of g)m.push(P.e[L]);let _=17+4*e,y=Array.from({length:_},()=>new Array(_).fill(!1)),v=Array.from({length:_},()=>new Array(_).fill(!1)),T=(L,P,z)=>{y[P][L]=z,v[P][L]=!0};for(let L=0;L<_;L++)T(6,L,L%2===0),T(L,6,L%2===0);let S=(L,P)=>{for(let z=-4;z<=4;z++)for(let W=-4;W<=4;W++){let it=L+W,J=P+z;if(it<0||J<0||it>=_||J>=_)continue;let ht=Math.max(Math.abs(W),Math.abs(z));T(it,J,ht!==2&&ht!==4)}};S(3,3),S(_-4,3),S(3,_-4);let w=X_[e];for(let L=0;L<w.length;L++)for(let P=0;P<w.length;P++)if(!(L===0&&P===0||L===0&&P===w.length-1||L===w.length-1&&P===0))for(let z=-2;z<=2;z++)for(let W=-2;W<=2;W++)T(w[L]+W,w[P]+z,Math.max(Math.abs(W),Math.abs(z))!==1);let R=L=>{let P=Z_<<3|L,z=P;for(let J=0;J<10;J++)z=z<<1^(z>>>9)*1335;let W=(P<<10|z)^21522,it=J=>(W>>>J&1)===1;for(let J=0;J<=5;J++)T(8,J,it(J));T(8,7,it(6)),T(8,8,it(7)),T(7,8,it(8));for(let J=9;J<15;J++)T(14-J,8,it(J));for(let J=0;J<8;J++)T(_-1-J,8,it(J));for(let J=8;J<15;J++)T(8,_-15+J,it(J));T(8,_-8,!0)};if(R(0),e>=7){let L=e;for(let z=0;z<12;z++)L=L<<1^(L>>>11)*7973;let P=e<<12|L;for(let z=0;z<18;z++){let W=(P>>>z&1)===1,it=_-11+z%3,J=Math.floor(z/3);T(it,J,W),T(J,it,W)}}let b=0;for(let L=_-1;L>=1;L-=2){L===6&&(L=5);for(let P=0;P<_;P++)for(let z=0;z<2;z++){let W=L-z,J=(L+1&2)===0?_-1-P:P;!v[J][W]&&b<m.length*8&&(y[J][W]=(m[b>>>3]>>>7-(b&7)&1)===1,b++)}}let M=[(L,P)=>(L+P)%2===0,(L,P)=>P%2===0,L=>L%3===0,(L,P)=>(L+P)%3===0,(L,P)=>(Math.floor(L/3)+Math.floor(P/2))%2===0,(L,P)=>L*P%2+L*P%3===0,(L,P)=>(L*P%2+L*P%3)%2===0,(L,P)=>((L+P)%2+L*P%3)%2===0],E=L=>{for(let P=0;P<_;P++)for(let z=0;z<_;z++)!v[P][z]&&M[L](z,P)&&(y[P][z]=!y[P][z])},D=()=>{let L=0,P=it=>{let J=1;for(let ht=1;ht<=_;ht++)ht<_&&it(ht)===it(ht-1)?J++:(J>=5&&(L+=J-2),J=1);for(let ht=0;ht+7<=_;ht++){if(![1,0,1,1,1,0,1].every((G,Q)=>it(ht+Q)===(G===1)))continue;let rt=[1,2,3,4].every(G=>ht-G<0||!it(ht-G)),U=[0,1,2,3].every(G=>ht+7+G>=_||!it(ht+7+G));(rt||U)&&(L+=40)}};for(let it=0;it<_;it++)P(J=>y[it][J]);for(let it=0;it<_;it++)P(J=>y[J][it]);let z=0;for(let it=0;it<_;it++)for(let J=0;J<_;J++)if(y[it][J]&&z++,J<_-1&&it<_-1){let ht=y[it][J];ht===y[it][J+1]&&ht===y[it+1][J]&&ht===y[it+1][J+1]&&(L+=3)}let W=_*_;return L+=Math.floor(Math.abs(z*20-W*10)/W)*10,L},k=0,B=1/0;for(let L=0;L<8;L++){E(L),R(L);let P=D();P<B&&(B=P,k=L),E(L)}return E(k),R(k),{size:_,version:e,mask:k,get:(L,P)=>y[P][L]}}function s0(n,t,e,i,s,{dark:r="#06070c",light:o="#f3f1ea",quiet:a=4,reveal:l=1,radius:c=10}={}){let h=t.size+a*2,u=s/h;n.save(),n.fillStyle=o,n.beginPath(),n.roundRect?n.roundRect(e,i,s,s,c):n.rect(e,i,s,s),n.fill(),n.fillStyle=r;let d=(t.size-1)/2,f=Math.hypot(d,d);for(let g=0;g<t.size;g++)for(let x=0;x<t.size;x++)t.get(x,g)&&(l<1&&Math.hypot(x-d,g-d)/f>l||n.fillRect(e+(x+a)*u,i+(g+a)*u,u+.35,u+.35));n.restore()}var Ms=Qa.close,pu=30,$_=`
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
`,ws=n=>String(n).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),Y_=n=>String(n).split("/").map((t,e,i)=>`<span>${ws(t)}${e<i.length-1?"/":""}</span>`).join("<wbr>"),J_={id:"close",steps:2,mount(n,t){this.ctx=t,this.T=t.tokens,this.step=0,this.stepStart=performance.now()/1e3,this.tauOffset=pu,this.entered=!1,this.raf=0,this.qr=i0(Ms.qrUrl);let e=document.createElement("style");e.textContent=$_,n.appendChild(e);let i=document.createElement("div");i.className="cl-root",n.appendChild(i);let s=document.createElement("canvas");s.className="cl-canvas",i.appendChild(s),this.canvas=s,this.g=s.getContext("2d");let r=document.createElement("div");r.className="cl-block",r.style.cssText="left:600px;top:150px;width:930px;",r.innerHTML='<ul class="cl-take">'+Ms.takeaways.map((l,c)=>`<li style="transition-delay:${(.1+c*.36).toFixed(2)}s"><span>${String(c+1).padStart(2,"0")}</span><p>${ws(l)}</p></li>`).join("")+"</ul>",i.appendChild(r),this.take=r,this.takeList=r.firstChild;let o=document.createElement("div");o.className="cl-block cl-fin",o.style.cssText="left:600px;top:96px;width:940px;height:780px;";let a=270;o.innerHTML=`<div style="position:absolute;left:0;top:0;transition-delay:.05s"><div class="cl-score">${ws(Ms.score)}</div><div class="cl-cap">${ws(Ms.scoreCaption)}</div></div><dl class="cl-links" style="position:absolute;left:0;top:300px;width:650px;margin:0;transition-delay:.35s">`+Ms.links.map(l=>`<dt>${ws(l.label)}</dt><dd class="${l.mono?"mono":""}">${Y_(l.value)}</dd>`).join("")+`</dl><div style="position:absolute;left:${940-a}px;top:286px;width:${a}px;transition-delay:.55s"><canvas class="cl-qr" style="width:${a}px;height:${a}px;display:block"></canvas><div class="cl-qrcap">${ws(Ms.qrCaption||"")}</div></div><div class="cl-thanks" style="position:absolute;left:0;top:676px;width:940px;padding-top:20px;border-top:1px solid var(--line);transition-delay:.8s">${ws(Ms.thanks)}</div>`,i.appendChild(o),this.fin=o,this.qrCanvas=o.querySelector(".cl-qr"),this.qrG=this.qrCanvas.getContext("2d"),this.resize()},enter(){this.entered=!0,this.t0=performance.now()/1e3,this.ctx.reducedMotion?this._render():this._loop()},leave(){this.entered=!1,cancelAnimationFrame(this.raf),this.raf=0},setStep(n,{instant:t=!1}={}){this.step=li(n|0,0,this.steps-1),t=t||this.ctx.reducedMotion,this.stepStart=performance.now()/1e3,this.tauOffset=t?pu:0,this._dom(t,!1),this.raf||this._render()},demo(){this.stepStart=performance.now()/1e3,this.tauOffset=this.ctx.reducedMotion?pu:0,this._dom(this.ctx.reducedMotion,!0),this.raf||this._render()},resize(){this.ratio=this.ctx.fitCanvas(this.canvas).ratio,this.qrRatio=this.ctx.fitCanvas(this.qrCanvas).ratio,this._render()},_dom(n,t){let e=[this.take,this.fin,this.takeList];(n||t)&&e.forEach(i=>i.classList.add("cl-instant")),t&&(this.take.classList.remove("cl-on"),this.fin.classList.remove("cl-on"),this.take.offsetWidth,n||e.forEach(i=>i.classList.remove("cl-instant"))),this.take.classList.toggle("cl-on",this.step===0||this.step===1),this.takeList.classList.toggle("cl-gone",this.step===1),this.fin.classList.toggle("cl-on",this.step===1),n&&(this.take.offsetWidth,e.forEach(i=>i.classList.remove("cl-instant")))},_loop(){let n=()=>{this.entered&&(this._render(),this.raf=requestAnimationFrame(n))};this.raf=requestAnimationFrame(n)},_render(){let n=this.g,t=this.ratio||1,e=performance.now()/1e3,i=this.ctx.reducedMotion?4:e-(this.t0||e),s=e-this.stepStart+this.tauOffset;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.setTransform(t,0,0,t,0,0);let r=this.step===0?1:1-.35*Zn(s,0,.8);t0(n,i,{cx:300,cy:352,a:150,kappa:1.8,delta:.5,levels:9,color:this.T.flux,alpha:.9*r,particles:36});let o=this.qrG,a=this.qrRatio||1;if(o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,this.qrCanvas.width,this.qrCanvas.height),this.step===1){o.setTransform(a,0,0,a,0,0);let l=Zn(s,.55,.9);l>0&&s0(o,this.qr,0,0,270,{reveal:l<1?l*1.05:1})}}},r0=J_;var o0={tokamak:Lf,controlroom:cp,anatomy:Sp,metric:Tp,correct:Ep,mirror:Fp,timeaxis:Op,ladder:Zp,mast:qp,agents:jp,close:r0};var a0=document.getElementById("app"),K_=new URLSearchParams(location.search);function l0(){K_.has("presenter")?gu(a0):window.__deck=new go(a0,o0)}document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(n=>setTimeout(n,1200))]).then(l0):l0();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
