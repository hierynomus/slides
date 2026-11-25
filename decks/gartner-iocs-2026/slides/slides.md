---
theme: none
routerMode: hash
title: Your AI, Your Kingdom, Someone Else's Keys?
info: |
  Gartner IOCS 2026 — Jeroen van Erp, SUSE
author: Jeroen van Erp
canvasWidth: 720
aspectRatio: 16/9
fonts:
  sans: SUSE
  mono: SUSE Mono
  weights: '300,400,500,600,700,800'
  italic: true
colorSchema: light
transition: fade
defaults:
  layout: suse
layout: suse-cover
---

<div class="text-[37px] font-medium leading-[44px]">
  Your AI, Your Kingdom,<br><span class="text-jungle">Someone Else’s Keys?</span>
</div>
<div class="mt-[24px] text-[20px] font-light italic leading-[24px] text-[#efefef]">
  Jeroen van Erp<br>Technology Advocate
</div>

<!--
**The title.** "Your AI, Your Kingdom, Someone Else's Keys?" I start with a question, not a product: whose keys are they? And let me say what this talk is not. It is not about distrusting cloud or AI vendors. Many of them are partners in this hall. It is about knowing where your keys are, and who else can turn them. To get there, we first need to agree on what "sovereign AI" actually means.
-->

---
hide: true
---

# Abstract

<At :x="31" :y="62" :w="460" class="text-[18px] leading-[25px] text-black">
Sovereign AI isn't about distrusting cloud or AI vendors. It's about knowing where your keys are, and who else can turn them. Ownership and control are not the same thing, and many solution providers conflate them. Open source gives <em>you</em> the master key, replacing blind trust with full visibility. Drawing on lessons from the virtualization shakeup, this talk helps you map dependencies, build exit paths, and maintain true control over your AI stack.
</At>

<At :x="498" :y="0" :w="222"><img src="/images/remove-before-flight.png" /></At>

---

<At :x="-1" :y="0" :w="540" :h="405"><img src="/images/speaker-sheep.png" class="w-full h-full" /></At>

<At :x="309" :y="18" :w="400">
  <div class="text-[36px] font-bold leading-[46px]">Jeroen van Erp</div>
  <div class="text-[14px] leading-[18px] mt-[4px]"><b class="text-jungle">SUSE</b> <b>|</b> <span class="text-jungle">Principal Technology Advocate</span></div>
  <div class="text-[14px] leading-[18px] italic text-[#9e9e9e]">“Connecting platform engineering to business outcomes”</div>
</At>

<At :x="548" :y="128" :w="147" :h="104" class="rounded-[12px] bg-[var(--suse-pine)] text-[var(--suse-fog)] px-[14px]">
  <div class="mt-[10px] text-[10px] font-bold uppercase tracking-[0.12em] text-mint">Experience</div>
  <div class="font-mono text-[40px] font-bold leading-[44px] text-jungle">25</div>
  <div class="text-[11px] leading-[14px]">years across Engineering, Operations and Product</div>
</At>

<At :x="548" :y="244" :w="147" :h="122" class="rounded-[12px] bg-[var(--suse-jungle)] text-[var(--suse-pine)] px-[14px]">
  <div class="mt-[10px] text-[10px] font-bold uppercase tracking-[0.12em]">At home</div>
  <div class="mt-[4px] text-[19px] leading-[24px]">👦🏼👧🏼👦🏼👦🏼<br>🐑🐑🐑🐑</div>
  <div class="mt-[4px] text-[11px] font-medium leading-[14px]">complexity doesn’t stop after work</div>
</At>

---
clicks: 1
---

# Sovereign AI means…

<At :x="25" :y="121" :w="268" :h="163" class="flex flex-col rounded-[16px] bg-[var(--suse-card)] text-[var(--suse-fog)] px-[20px] pt-[18px] pb-[18px]">
  <div class="text-[10px] font-bold uppercase tracking-[0.12em] text-mint">What many assume</div>
  <div class="mt-[12px] text-[24px] font-bold leading-[29px]">My AI runs in my region.</div>
  <div class="mt-[12px] h-px bg-current opacity-25"></div>
  <Pill class="mt-auto">Where it runs</Pill>
</At>

<!-- Click: the arrow draws itself, then the head and the second box fade in -->
<ArrowRight class="absolute left-[300px] top-[191px]" :w="120" :h="22" :line-end="104" :head-base="100" :head-tip="118" :head-half="10" :stroke="4" :active="$clicks > 0" />

<At :x="427" :y="121" :w="268" :h="163" class="flex flex-col rounded-[16px] bg-[var(--suse-jungle)] text-[var(--suse-pine)] px-[20px] pt-[18px] pb-[18px] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks < 1 }" :style="{ transitionDelay: $clicks > 0 ? '0.8s' : '0s' }">
  <div class="text-[10px] font-bold uppercase tracking-[0.12em]">What it takes</div>
  <div class="mt-[12px] text-[24px] font-bold leading-[29px]">I control access to my AI.</div>
  <div class="mt-[12px] h-px bg-current opacity-25"></div>
  <Pill tone="pine" class="mt-auto">Who holds the keys</Pill>
</At>

<!--
**Sovereign AI means…** Ask most people and you hear this: "my AI runs in my region." That is where most of the room stands, and it is mostly what data protection rules like GDPR give you. They govern where and how personal data moves. They say very little about who controls the AI.

[click]

What it takes is something else: I control access to my AI. The shift is from where it runs to who holds the keys. I say "access to the model" on purpose, so nobody hears it as access to their data. That is abstract, so let me give you a picture.
-->

---
tone: dark
clicks: 1
---

<!-- One slide, one click: the king and the key-guy fade out, the Sovereignty box, caption and the
     new king fade in. The castle and the two cards stay put. -->
<At :x="22" :y="23" :w="368" :h="310" class="rounded-[24px] bg-[var(--suse-card)] text-mint transition-opacity duration-700"
  :class="{ 'opacity-0': $clicks < 1 }">
  <div class="mx-[12px] mt-[12px] text-[24px] font-bold leading-[30px]">Sovereignty</div>
</At>

<At v-for="(c, i) in [
  { t: 'Ownership', dark: false, q: 'Who holds the title?', items: ['The asset', 'The contract', 'The data in your region'] },
  { t: 'Control', dark: true, q: 'Who holds the keys?', items: ['Restrict it?', 'Switch it off?', 'Can you leave?'] },
]" :key="c.t" :x="34 + i * 177" :y="76" :w="167" :h="181"
  class="rounded-[16px]" :class="c.dark ? 'bg-[var(--suse-forest)] text-[var(--suse-fog)]' : 'bg-[var(--suse-jungle)] text-[var(--suse-pine)]'">
  <div class="mt-[14px] mx-[14px] text-[10px] font-bold uppercase tracking-[0.06em] whitespace-nowrap" :class="c.dark ? 'text-mint' : ''">{{ c.q }}</div>
  <div class="mx-[14px] text-[25px] font-bold mt-[6px] leading-[30px]">{{ c.t }}</div>
  <div class="mx-[14px] mt-[12px] h-px bg-current opacity-25"></div>
  <ul class="dots mt-[12px] mx-[14px] text-[14px] leading-[17px]">
    <li v-for="it in c.items" :key="it">{{ it }}</li>
  </ul>
</At>

<At :x="34" :y="277" :w="344" class="text-[16px] leading-[21px] text-mint transition-opacity duration-700"
  :class="{ 'opacity-0': $clicks < 1 }">
  Ownership alone is not sovereignty. Control makes it real.
</At>

<!-- The scared king hides behind the main tower; his lower body fades so nothing is cut off beside it -->
<At :x="465" :y="15" :w="140" class="transition-opacity duration-700" :class="{ 'opacity-0': $clicks >= 1 }">
  <img src="/images/king-scared.png" style="mask-image: linear-gradient(to bottom, #000 42%, transparent 58%)" />
</At>
<At :x="341" :y="8" :w="379"><img src="/images/castle.png" /></At>
<At :x="454" :y="76" :w="354" class="transition-opacity duration-700" :class="{ 'opacity-0': $clicks < 1 }">
  <img src="/images/king-keys.png" />
</At>
<At :x="464" :y="41" :w="337" class="transition-opacity duration-700" :class="{ 'opacity-0': $clicks >= 1 }">
  <img src="/images/man-walking-keys.png" />
</At>

<!--
**The castle.** The king owns the castle, and someone else walks off with the keys. Ownership is who holds the title: the asset, the contract, the data in your region. Control is who holds the keys: can you restrict it, switch it off, leave? Those are not the same thing. And note that the person walking away is "someone else", not a vendor. This is about structure, not about any company.

[click]

Same castle, but now the king holds his own keys. That is sovereignty: ownership plus control. And look at what this does not say. You do not have to own everything. You can rent the ground under the castle, a cloud, and still hold the keys. One line matters most, "can you leave?", because lock-in is what happens when the answer is no. We will come back to that. But first, is this a real risk, or just a nice picture? Let me show you what happens when someone is asked under oath.
-->

---
clicks: 1
source: https://www.senat.fr/compte-rendu-commissions/20250609/ce_commande_publique.html
---

# The US Cloud Act

A Remote-access API You Cannot Close

<At :x="288" :y="51" :w="559" :h="312"><img src="/images/server-dome.png" class="w-full h-full" /></At>

<At :x="31" :y="98" :w="372" class="text-[15px] font-medium leading-[21px]">
  US authorities can compel disclosure of data a company controls, including data held in an EU region.
</At>

<!-- Click: the Senate testimony fades in -->
<At :x="25" :y="164" :w="384" :h="178" class="rounded-[16px] bg-[var(--suse-pine)] text-[var(--suse-fog)] px-[20px] pt-[16px] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks < 1 }">
  <div class="text-[10px] font-bold uppercase tracking-[0.12em] text-mint">Asked under oath · French Senate, June 2025</div>
  <p class="mt-[10px] text-[14px] leading-[18px] text-[#c4d3cf]">
    Could data held on its <b class="text-persimmon">EU infrastructure</b> be guaranteed never to reach <b class="text-persimmon">US authorities</b> without French government consent?
  </p>
  <div class="mt-[10px] h-px bg-white/15"></div>
  <div class="mt-[10px] text-[22px] font-bold leading-[26px] text-mint">“No, I cannot guarantee that”</div>
  <div class="mt-[4px] text-[11px] leading-[14px] text-[#c4d3cf]">A US hyperscaler France’s director of public and legal affairs</div>
</At>

<!--
**A remote-access API you cannot close.** The US CLOUD Act lets US authorities compel a company to disclose data it controls, including data held in an EU region. It follows the company, not the location of the data, so the region logo is not a firewall. Jurisdiction follows the provider, not the data centre. Keep that in mind, because the next question is whether a provider will say so out loud.

[click]

In June 2025, in the French Senate, the director of public and legal affairs at a US hyperscaler's French subsidiary was asked under oath whether data on its EU infrastructure could be guaranteed never to reach US authorities without French government consent. He said he could not guarantee that. For fairness: he noted it had never actually happened, and the provider points to its EU data boundary commitments. But the question was about a US legal order, and that is the point. This is the law, not one company. And you are not the only ones who noticed.
-->

---
trademarks: [GARTNER, Hype Cycle]
---

# Sovereignty has moved into the boardroom

<template v-for="(c, i) in [
  { nums: ['70%'], q: 'According to Gartner®, “Seventy percent of CEOs rank technology sovereignty (i.e., AI, cloud infrastructure) as important or very important”<sup>1</sup>', src: '<sup>1</sup>Gartner Report, Digital Sovereignty Is a CEO Priority: A CIO’s Playbook for Competitive Advantage, by David Furlonger, Brook Selassie, 6 July 2026' },
  { nums: ['60%', '52%'], q: 'Gartner states, “In the 2025 Gartner Cloud End-User Buying Behavior Survey, 60% of respondents already indicated they expected geopolitics to increase their use of local and regional clouds, and 52% said open source is becoming more important due to geopolitical concerns.”<sup>2</sup>', src: '<sup>2</sup>Gartner Report, Hype Cycle™ for Digital Sovereignty, 2026, by Gregor Petri, Rene Buest, Nader Henein and Bart Willemsen, 25 June 2026' },
]" :key="i">
  <At :x="26 + i * 342" :y="88" :w="326" :h="258" class="rounded-[12px] bg-[var(--suse-pine)] text-[var(--suse-fog)] px-[20px]">
    <div class="relative flex items-center justify-between mt-[10px] h-[68px]">
      <template v-for="(n, j) in c.nums" :key="n">
        <div v-if="j > 0" class="absolute left-1/2 -ml-px h-[48px] w-[2px] bg-[#3b7a69]"></div>
        <div class="font-mono text-[52px] font-bold leading-[68px] text-jungle">{{ n }}</div>
      </template>
    </div>
    <p class="mt-[6px] text-[13px] leading-[18px]" v-html="c.q"></p>
    <div class="absolute left-[20px] right-[20px] bottom-[10px] h-[46px] border-t border-white/15 pt-[7px] text-[9px] leading-[11.5px] italic text-[#a9bdb8]" style="font-family: Arial, sans-serif"><p v-html="c.src" /></div>
  </At>
</template>

<!--
**Sovereignty has moved into the boardroom.** It is not one hearing, and it is not one voice. Gartner's research: seventy percent of CEOs rank technology sovereignty, so AI and cloud infrastructure, as important or very important. And in the 2025 Gartner Cloud End-User Buying Behavior Survey, 60% of respondents already expected geopolitics to increase their use of local and regional clouds, and 52% said open source is becoming more important because of geopolitical concerns. This used to be an IT checklist item. It is now a business continuity question. The answer is not to leave the cloud. It is to know where the keys are. So let us bring that question to AI, where it gets harder.
-->


---
tone: fog
clicks: 4
source: SUSE, Hybrid Cloud Survey 2026 (611 IT leaders in the US, UK, France, Germany and Japan), September 2026
---

# In AI, owning your data is not controlling it

<!-- Start: the two boxes sit big in the middle. Click 1: they glide to the top and the "Start at home" card fades in -->
<At :x="25" :y="83" :w="247" :h="258" class="rounded-[8px] bg-[var(--suse-card)] text-[var(--suse-fog)] px-[16px] transition-opacity duration-700"
  :class="{ 'opacity-0': $clicks < 1 }" :style="{ transitionDelay: $clicks > 0 ? '1.2s' : '0s' }">
  <div class="mt-[16px] text-[10px] font-bold uppercase tracking-[0.12em] text-mint">Start at home</div>
  <div class="font-mono text-[64px] font-medium leading-[64px] mt-[4px] text-jungle">91%</div>
  <p class="text-[14px] font-medium leading-[17px] mt-[6px]">of IT leaders say employees bypass security and compliance controls to deploy AI workloads faster.</p>
  <p class="text-[12px] leading-[16px] mt-[10px] w-[132px] text-[#d5e0dd]">85% worry about data loss and no visibility into running models.</p>
  <img src="/images/qr-suse-survey.svg" class="absolute right-[12px] bottom-[12px] w-[78px] h-[78px] rounded-[4px]" />
</At>

<div class="absolute rounded-[8px] bg-[var(--suse-pine)] text-[#f7f8f8] whitespace-nowrap transition-all duration-[1600ms] ease-in-out"
  :style="$clicks < 1
    ? { left: '35px', top: '140px', width: '260px', height: '110px', padding: '26px 20px 0' }
    : { left: '297px', top: '83px', width: '175px', height: '52px', padding: '8px 12px 0' }">
  <div class="font-bold transition-all duration-[1600ms] ease-in-out" :style="{ fontSize: $clicks < 1 ? '30px' : '16px', lineHeight: $clicks < 1 ? '36px' : '20px' }">Your data</div>
  <div class="transition-all duration-[1600ms] ease-in-out" :style="{ fontSize: $clicks < 1 ? '15px' : '11px', lineHeight: $clicks < 1 ? '24px' : '16px' }">prompts, documents, records</div>
</div>

<ArrowRight class="absolute transition-all duration-[1600ms] ease-in-out" :w="36" :h="14" :line-end="30" :head-base="26" :head-tip="34" :head-half="6" :stroke="2.5"
  :style="{ transformOrigin: 'top left', ...($clicks < 1
    ? { left: '317px', top: '178px', transform: 'scale(2.4)' }
    : { left: '479.5px', top: '102px', transform: 'scale(1)' }) }" />

<div class="absolute rounded-[8px] bg-[var(--suse-forest)] text-[#f7f8f8] whitespace-nowrap transition-all duration-[1600ms] ease-in-out"
  :style="$clicks < 1
    ? { left: '425px', top: '140px', width: '260px', height: '110px', padding: '26px 20px 0' }
    : { left: '521px', top: '83px', width: '174px', height: '52px', padding: '8px 12px 0' }">
  <div class="font-bold transition-all duration-[1600ms] ease-in-out" :style="{ fontSize: $clicks < 1 ? '30px' : '16px', lineHeight: $clicks < 1 ? '36px' : '20px' }">An AI service</div>
  <div class="transition-all duration-[1600ms] ease-in-out" :style="{ fontSize: $clicks < 1 ? '15px' : '11px', lineHeight: $clicks < 1 ? '24px' : '16px' }">run by someone else</div>
</div>

<At :x="297" :y="147" class="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--suse-forest)] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks < 2 }">Three questions to ask any AI provider</At>

<!-- Clicks 2-4: the heading comes in with the first question, then one question per click -->
<At v-for="(q, i) in ['Who holds the keys?', 'Whose law can compel it?', 'Can you audit the AI?']" :key="q"
  :x="297" :y="167 + i * 62" :w="398" :h="50"
  class="flex items-center gap-[14px] bg-[#f8f9f9] border border-[#d6d9d8] rounded-[8px] px-[14px] text-[var(--suse-pine)] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks <= i + 1 }">
  <span class="badge w-[26px] h-[26px] shrink-0 bg-[var(--suse-jungle)] text-[var(--suse-pine)]">{{ i + 1 }}</span>
  <span class="text-[20px] font-medium leading-[24px]">{{ q }}</span>
</At>

<!--
**In AI, owning your data is not controlling it.** Your data goes into an AI service, run by someone else, on their terms and under their jurisdiction. That is the whole picture: your data, and a service that is not yours.

[click]

Before we ask anything of providers, I want to start at home. In a survey of 611 IT leaders that we ran in September, 91% said employees bypass security and compliance controls to deploy AI workloads faster, and 85% are worried, about data loss and about having no visibility into the models that are running. You cannot hold the keys to AI you cannot see. So what do you ask? Three questions, for any provider.

[click]

First: who holds the keys? Can only you control the encryption keys?

[click]

Second: whose law can compel it? Jurisdiction follows the provider, not the region. We just saw that.

[click]

Third: can you audit the AI? Who accessed your data, and what did the AI do with it? That is a checklist, not an accusation. (The QR code takes people to the survey. I mention only the survey.) Now, an engineer will say: fine, but if I do not like a provider, I will just swap the model.
-->

---
clicks: 3
---

# The model is easy to swap. The rest is not.

<At :x="30" :y="66" class="text-[12px]" style="font-family: Arial, sans-serif">Lock-in is built, not bought: it grows with everything you put around the model.</At>

<!-- Clicks: the dependencies appear in pairs, each with its arc label -->
<LockInHex :clicks="$clicks" />

<!--
**The model is easy to swap. The rest is not.** I concede that point first, because it is fair. Swapping one provider's model for another is often easy. So where does lock-in come from? From everything built around the model. Six dependencies, in three pairs.

[click]

What it knows. The indexes built over your documents only work with the model that built them, and what the AI learns about you can stay in the provider's store.

[click]

How you work. Workflows and agents built on an interface the provider can retire, and prompts tuned to one model that can change under you.

[click]

Where it runs. Compute and capacity, and whose law applies to your prompts. And providers keep widening the bundle: agents, connectors, memory. So since swapping the model is easy, make it deliberately easy, by owning the layer in between: your gateway, your index, your keys. Which raises the obvious question: how do you measure any of this?
-->

---
tone: dark
clicks: 1
---

# Sovereignty becomes something you can score

The EU Cloud Sovereignty Framework

<!-- Click: SOV-1 pops out and glows, and its "Ownership" pill fades in -->
<SovGrid :focus="$clicks > 0 ? [1, 4, 5, 6] : []" :labels="{1: 'Ownership', 4: 'Control', 5: 'Control', 6: 'Control'}" />
<At :x="38" :y="293" class="text-[18px] text-mint">Each objective is scored from SEAL-0 to SEAL-4</At>

<!--
**Sovereignty becomes something you can score.** Every vendor in this hall will tell you they are sovereign. How do you check without reading a marketing slide? The European Commission built a framework for exactly that, and first used it in a tender in April 2026. Eight objectives, each scored on five assurance levels, from SEAL-0 to SEAL-4. And it connects to what we just walked through: the colours match the six dependencies. What it knows maps to data and AI, how you work to operations and technology, where it runs to legal and supply chain. Two things to say aloud. No certification exists; the levels apply within a procurement assessment. And the ownership and control labels you will see are our reading of it.

[click]

Now look at the grey boxes. Ownership of the provider is one objective out of eight. Operations, supply chain and technology are all control, and so is most of the rest. A vendor can do well on the first and badly on the others. That is our thesis, written down by the EU. Keep SOV-4, 5 and 6 in mind, because next I will show you what happens when they fail.
-->

---
tone: fog
clicks: 4
---

# Lock-in is what Ownership without Control looks like

<At v-for="(e, i) in [
  { when: 'Over the years', title: 'Built around one platform', body: 'Workloads, tooling and skills built around a proprietary stack.', sov: 'SOV-6 · Technology' },
  { when: '22 Nov 2023', title: 'The owner changes', body: 'Broadcom completes its acquisition of VMware.', sov: 'SOV-1 · Strategic' },
  { when: '11 Dec 2023', title: 'The terms change', body: 'Perpetual licences stay usable, but new perpetual sales and support renewals end.', sov: 'SOV-5 · Supply chain' },
  { when: 'Now', title: 'The exit is the hard part', body: 'Customers look at alternatives. Moving a platform takes time.', sov: 'SOV-4 · Operational' },
]" :key="e.when" :x="[27, 158, 290, 422][i]" :y="90" :w="125" :h="229"
  class="rounded-[8px] bg-[var(--suse-pine)] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks <= i }">
  <div class="mx-[10px] mt-[14px] text-[10px] font-bold uppercase tracking-[0.08em] text-mint whitespace-nowrap">{{ e.when }}</div>
  <div class="mx-[10px] mt-[8px] text-[14px] font-bold leading-[17px] text-[var(--suse-fog)] h-[34px]">{{ e.title }}</div>
  <div class="mx-[10px] mt-[12px] h-px bg-white/15"></div>
  <div class="mx-[10px] mt-[12px] text-[12px] font-light leading-[15px] text-[#c4d3cf]">{{ e.body }}</div>
  <Pill :w="105" class="absolute left-[10px] bottom-[10px]">{{ e.sov }}</Pill>
</At>

<At :x="447" :y="83" :w="363" :h="242">
  <!-- The chains go on when the terms change (third click) -->
  <img src="/images/server-rack.png" class="absolute inset-0 w-full h-full" />
  <img src="/images/server-rack-locked.png" class="absolute inset-0 w-full h-full transition-opacity duration-700"
    :class="{ 'opacity-0': $clicks < 3 }" />
</At>

<!--
**Lock-in is what ownership without control looks like.** Remember the framework we just saw? Here is one real case that touched four of its objectives, in four stages. Watch the pill at the bottom of each card, because each stage lands on a different SOV. This mapping is our reading of the framework, not the EU's.

[click]

One: over the years, workloads, tooling and skills get built around one platform. Nobody forces this, and it feels like good engineering at the time. In the framework that is SOV-6, technology: lock-in to a proprietary stack. It is the quiet one, and it is the reason everything after it hurts.

[click]

Two: on 22 November 2023 the owner changes. Broadcom completes its acquisition of VMware. That is SOV-1, strategic: who owns your provider. Note that this is the only stage that is about ownership, and the customer had no say in it.

[click]

Three: 19 days later, on 11 December, the terms change. Perpetual licences stay usable, but new perpetual sales and support renewals end. That is SOV-5, supply chain: the terms on which something you depend on is supplied. You keep what you bought, and someone else sets the terms around it. That is ownership without control in one sentence.

[click]

Four: the exit is the hard part. Pause on the rack in chains. This is SOV-4, operational: can you migrate without being locked in? Customers look at alternatives, and moving a platform takes time. For balance: the company describes this as completing a move to subscription, as much of the industry has done. The point is not the pricing. The point is that the customer had no say.

Step back and look at the four pills. One change of ownership was the trigger, and three objectives about control did the damage. If you had scored this platform on the framework before 2023, the technology and operational objectives would already have told you where it would hurt. And that is where the market learned something.
-->

---
tone: fog
source: "Gartner Report, The Shift Toward VMware Alternatives: Mitigating Risks and Costs, by Mike Cisek, Julia Palmer, 16 April 2026"
trademarks: [GARTNER]
---

# Three lessons from the Virtualization Shake-up

<VmwareQuote>
Gartner states, “Negative sentiment among CIOs and IT leaders regarding Broadcom ownership of VMware has continued to grow. In 2024, 33% of CIOs reported a negative sentiment. In 2025, that number grew to 64%, and it now sits at 76% in 2026”<sup>1</sup>
</VmwareQuote>

<ThreeLessons />

<!--
**Three lessons.** Gartner measured the mood: negative sentiment among CIOs and IT leaders about this ownership went from 33% in 2024, to 64% in 2025, to 76% in 2026. People learned three lessons the hard way. Map your dependencies, because you cannot plan around a change you cannot see. Build exit paths, because switching costs show up on the way out, so plan before the terms change. Keep control, because negotiating strength comes from options you can actually use. And the same question now applies to AI. Hold on to these three lessons, because they come back. First, though: how do you actually get hold of the keys?
-->

---
tone: dark
source: Gartner Report, The Paradox of Sovereignty and Open Source Exposes Service Providers, by Fernando Pereiro, Rene Buest, 29 April 2026
trademarks: [GARTNER]
---

# Open Source gives you the master key

From blind trust to visibility

<At :x="31" :y="108" class="font-mono text-[60px] font-bold leading-[72px] text-jungle">80%</At>
<At :x="31" :y="182" :w="225" class="text-[14px] leading-[17px] text-[var(--suse-mist)]">
  Gartner states, "80% of respondents believe geopolitical concerns have made open-source a more important criterion when selecting new cloud solutions for their organizations."<sup>1</sup>
</At>

<At v-for="(r, i) in [
  { t: 'Code Transparency', d: 'Verify function and security directly', l: '1 · Map your dependencies' },
  { t: 'No arbitrary restrictions', d: 'No licence limits or feature removals on a whim', l: '2 · Build exit paths' },
  { t: 'Modifiability and control', d: 'Patch in an emergency without waiting for a vendor', l: '3 · Keep control' },
]" :key="r.t" :x="329" :y="[96, 178, 260][i]" :w="362" :h="76"
  class="rounded-[8px] bg-[var(--suse-card)] border border-[#2a6354] px-[14px] pt-[11px]">
  <div class="text-[10px] font-bold uppercase tracking-[0.12em] text-mint">{{ r.l }}</div>
  <div class="mt-[5px] text-[16px] font-bold leading-[20px] text-[var(--suse-fog)]">{{ r.t }}</div>
  <div class="mt-[3px] text-[13px] font-light leading-[16px] text-[#c4d3cf]">{{ r.d }}</div>
</At>

<!--
**Open source gives you the master key.** Open source is the mechanism here, not an ideology. It takes you from blind trust to visibility. And its three payoffs line up with the three lessons. Code transparency lets you map your dependencies, because you can see what the code does and what it is made of. No arbitrary restrictions lets you build exit paths, because nothing in the licence traps you. Modifiability keeps control in your hands, because in an emergency you can patch it yourself. Gartner found that 80% of respondents say geopolitical concerns have made open source a more important criterion when choosing new cloud solutions. Two honest caveats: this means a recognised open source licence, and the keys are only yours if you also run it on infrastructure you control. So what does that look like for AI models?
-->

---

# Bringing AI home: the master key comes in steps

<Tower v-for="(t, i) in [
  { title: ['1 · Model as a service'], items: [['Runs on their infrastructure', 'lock'], ['Provider controls access', 'lock'], ['You see nothing inside', 'lock']], bg: 'var(--suse-fog)', fg: 'var(--suse-pine)', y: 228 },
  { title: ['2 · Closed model on', 'your infrastructure'], items: [['Runs on yours', 'key'], ['Vendor controls access', 'lock'], ['You see nothing inside', 'lock']], bg: 'var(--suse-mist)', fg: 'var(--suse-pine)', y: 186 },
  { title: ['3 · Open weights'], items: [['Runs where you choose', 'key'], ['You control access', 'key'], ['You see the model, not its training', 'lockkey']], bg: 'var(--suse-jungle)', fg: 'var(--suse-pine)', y: 140 },
  { title: ['4 · Fully open'], note: 'rare today', items: [['Runs where you choose', 'key'], ['You control access', 'key'], ['You see everything', 'key']], bg: 'var(--suse-pine)', fg: 'var(--suse-fog)', y: 99 },
]" :key="i" :x="25 + i * 166" :y="t.y" :w="148" :h="354 - t.y" :bg="t.bg" :fg="t.fg">
  <div class="mx-[6px] mt-[10px] text-[12px] font-bold leading-[14px]">
    <div v-for="line in t.title" :key="line">{{ line }}</div>
    <div v-if="t.note" class="italic text-mint">{{ t.note }}</div>
  </div>
  <ul class="mx-[6px] mt-[12px] text-[12px] leading-[14.5px] space-y-[5px]">
    <li v-for="[text, icon] in t.items" :key="text" class="flex gap-[6px]">
      <Ico :name="icon" class="mt-[2px] shrink-0" /><span>{{ text }}</span>
    </li>
  </ul>
</Tower>

<!--
**Bringing AI home.** For AI models, the master key comes in steps, and the castle lights up as you collect keys. A quick word on weights: they are what the model learned in training, the finished product, not the recipe. There are three keys to collect: where it runs, who controls access, and what you can see.

Step one, a model as a service. It runs on their infrastructure, they control access, and you see nothing inside. No keys. Step two, a closed model on your own infrastructure. It runs on yours, which is real, but the vendor still controls access through licence and updates, and you still see nothing inside. One key. Step three, open weights. You run it where you choose and you control access, because you hold your own copy, but you cannot see what it was trained on. Two and a half keys. Step four, fully open: weights, training data information and code, so you can inspect and rebuild everything. Three keys, and rare today. Say that plainly. Now, does everything need to be at step four? No.
-->

---

# Not every AI workload needs to be in the keep

<PlacementRings />

<At v-for="(l, i) in [
  { t: 'Standard AI', d: 'Public cloud and global LLM platforms, for non-sensitive work', y: 92, bg: 'var(--suse-fog)', fg: 'var(--suse-pine)', dashed: true },
  { t: 'Regulated AI', d: 'Sovereign cloud with customer managed keys', y: 155, bg: 'var(--suse-mist)', fg: 'var(--suse-pine)', dashed: true },
  { t: 'Sovereignty-sensitive AI', d: 'Regional providers and local open-weight models', y: 209, bg: 'var(--suse-jungle)', fg: 'var(--suse-fog)' },
  { t: 'Strategic sovereign AI', d: 'Air-gapped or private on-premises infrastructure for core IP', y: 279, bg: 'var(--suse-pine)', fg: 'var(--suse-fog)' },
]" :key="l.t" :x="324" :y="l.y" :w="340" class="flex gap-[18px]">
  <span class="badge w-[24px] h-[24px] shrink-0 mt-[5px]"
    :style="{ background: l.bg, color: l.fg, border: l.dashed ? '1px dashed var(--suse-pine)' : 'none' }">{{ i + 1 }}</span>
  <div>
    <div class="text-[18px] font-bold leading-[22px]">{{ l.t }}</div>
    <div class="text-[14px] leading-[17px] w-[280px]">{{ l.d }}</div>
  </div>
</At>

<!--
**Not every workload needs to be in the keep.** So which step is right for which workload? Look at the castle from above. The outer ring is standard AI: public cloud and global platforms, perfectly right for non-sensitive work. Then regulated AI: a sovereign cloud with customer-managed keys. Then sovereignty-sensitive AI: regional providers and local open-weight models. And in the centre, the keep: strategic AI on air-gapped or private infrastructure, for your core intellectual property. The keep is the most expensive place to be, so most workloads do not need it. Score each workload on three things, data and model governance, infrastructure and operations, strategic and legal compliance, and then place it. But a placement is a decision for today, not forever.
-->

---
clicks: 4
---

# Placement is not permanent

<PlacementChanges :clicks="$clicks" />

<At v-for="(l, i) in [
  { t: 'A provider revokes model access', d: 'No control, you need a new model for your workload', y: 92, bg: '#9e9e9e', fg: '#efefef' },
  { t: 'The regulations change', d: 'Model needs to be brought under control', y: 166, bg: 'var(--suse-pine)', fg: 'var(--suse-fog)' },
  { t: 'A new version is released', d: 'Workload needs to be updated for the new model', y: 236, bg: 'var(--suse-persimmon)', fg: 'var(--suse-pine)' },
  { t: 'A new frontier model arrives', d: 'Move workload out to utilize, if the risk allows', y: 306, bg: 'var(--suse-jungle)', fg: '#efefef' },
]" :key="l.t" :x="311" :y="l.y" :w="390" class="flex gap-[15px] transition-opacity duration-500"
  :class="{ 'opacity-0': $clicks <= i }">
  <span class="badge w-[21px] h-[21px] shrink-0 mt-[6px]" :style="{ background: l.bg, color: l.fg }">{{ i + 1 }}</span>
  <div>
    <div class="text-[18px] font-bold leading-[22px]">{{ l.t }}</div>
    <div class="text-[14px] leading-[17px]">{{ l.d }}</div>
  </div>
</At>

<!--
**Placement is not permanent.** Where a workload sits will change, and for four reasons.

[click]

A provider revokes model access. The model is gone, with no direct replacement, so you need a new one.

[click]

The regulations change. You tighten, and the workload moves inward.

[click]

A new version is released. You adapt the workload in place.

[click]

A new frontier model arrives. You can expand outward to use it, if the risk allows. Inward is more control, outward is more capability. So you will move, which is why the exit has to exist from day one. And I should be honest about what that costs.
-->

---
tone: fog
clicks: 2
---

# What it costs and what it buys

<!-- Click 1: the trade is made (arrow + what you keep); click 2: the punchline -->
<At v-for="(c, i) in [
  { label: 'What you give up', dark: false, mark: '−', items: [
    ['The single-provider default', 'One vendor for everything is easy.'],
    ['Some speed on day one', 'Your own gateway and keys take setup.'],
    ['The comfort of “they handle it”', 'Someone else carries the risk, and the decisions.'],
  ] },
  { label: 'What you keep', dark: true, mark: '✓', items: [
    ['A real exit', 'You can move a workload in a number of days you chose.'],
    ['Negotiating strength', 'Options you can actually use.'],
    ['Control of your data and your roadmap', 'Decisions about your AI stay with you.'],
  ] },
]" :key="c.label" :x="[31, 349][i]" :y="92" :w="[292, 340][i]" :h="190"
  class="rounded-[8px] px-[16px] transition-opacity duration-700"
  :class="[c.dark ? 'bg-[var(--suse-pine)] text-[var(--suse-fog)]' : 'bg-[#f7f9f8] border border-[#ccc] text-[#555]', c.dark && $clicks < 1 ? 'opacity-0' : '']">
  <div class="mt-[15px] text-[10px] font-bold uppercase tracking-[0.12em]" :class="c.dark ? 'text-mint' : 'text-[#777]'">{{ c.label }}</div>
  <div v-for="[t, d] in c.items" :key="t" class="mt-[10px] first:mt-[12px] flex gap-[9px]">
    <CheckDot v-if="c.dark" :size="16" class="mt-[2px]" />
    <span v-else class="shrink-0 mt-[2px] w-[16px] h-[16px] rounded-full text-center text-[11px] leading-[16px] font-bold bg-[#ddd] text-[#777]">{{ c.mark }}</span>
    <div>
      <div :class="c.dark ? 'text-[16px] leading-[20px] font-medium whitespace-nowrap' : 'text-[15px] leading-[20px]'">{{ t }}</div>
      <div class="mt-[4px] text-[11px] leading-[12px] whitespace-nowrap font-light" :class="c.dark ? 'text-[#efefef]' : 'text-[#666]'">{{ d }}</div>
    </div>
  </div>
</At>

<At :x="318" :y="164" :w="34" :h="34" class="rounded-full bg-[var(--suse-jungle)] text-[var(--suse-pine)] text-center text-[20px] leading-[34px] font-bold shadow transition-opacity duration-700"
  :class="{ 'opacity-0': $clicks < 1 }">→</At>

<At :x="31" :y="304" :w="658" class="text-center text-[22px] font-bold text-[var(--suse-pine)] transition-opacity duration-700"
  :class="{ 'opacity-0': $clicks < 2 }">
  A little friction now. <span class="text-[var(--suse-teal)]">A real exit later.</span>
</At>

<!--
**What it costs, and what it buys.** I will be honest about the price. You give up the single-provider default, some speed on day one, and the comfort of "they handle it".

[click]

What you keep is a real exit, negotiating strength, and control of your data and your roadmap. You may be thinking: switching is easy, we trust our provider, open models are not good enough. The model is easy to swap and the rest is not. Trust is not control. And you choose by risk, not by ideology. A little friction now, a real exit later. So what do you do on Monday?
-->

---
tone: dark
---

# Three things to do on Monday

<At v-for="(c, i) in [
  { k: 'Map your dependencies', t: 'Ask the three questions', d: 'Keys, law, audit: ask every AI provider. Then map the six dependencies for your most important AI workload.' },
  { k: 'Build exit paths', t: 'Put a number on your exit', d: 'How many days to move this workload? Answer in a unit, not a plan. Then rehearse it once a year.' },
  { k: 'Keep control', t: 'Bring one model home', d: 'Place each workload where its risk belongs. Run one open-weight model on an open platform you control.' },
]" :key="c.k" v-click :x="26 + i * 226.5" :y="92" :w="215" :h="229"
  class="rounded-[10px] bg-[var(--suse-card)] px-[15px]">
  <div class="mt-[14px] text-[40px] font-bold leading-[40px] text-jungle">{{ i + 1 }}</div>
  <div class="mt-[4px] text-[10px] font-bold uppercase tracking-[0.12em] text-mint">{{ c.k }}</div>
  <div class="mt-[14px] h-px bg-white/15"></div>
  <div class="mt-[14px] text-[16px] font-bold leading-[21px] text-[var(--suse-fog)] whitespace-nowrap">{{ c.t }}</div>
  <p class="mt-[12px] text-[12.5px] font-light leading-[18px] text-[#a9bdb8]">{{ c.d }}</p>
</At>

<!--
**Three things to do on Monday.** They are the three lessons again, now as actions.

[click]

One, map your dependencies. Ask every AI provider the three questions, then map the six dependencies for your most important AI workload, starting with what your own teams already run.

[click]

Two, build exit paths. Put a number on it: how many days to move this workload? Answer in a unit, not a plan, then rehearse it once a year.

[click]

Three, keep control. Place each workload where its risk belongs, and run one open-weight model on an open platform you control, with keys you hold. A small pilot beats a strategy document. And if you do those three things, here is where you are a year from now.
-->

---
tone: dark
---

# A year from now

<At :x="31" :y="72" class="text-[36px] font-medium leading-[44px] text-mint">You know…</At>

<At v-for="(t, i) in [
  'where your keys are, and who else can turn them.',
  'how many days it takes to move an AI workload.',
  'that switching AI providers is a decision, not a rebuild.',
]" :key="t" :x="31" :y="139 + i * 42" :w="658" class="flex items-center gap-[14px] transition-opacity duration-700">
  <CheckDot />
  <span class="text-[17px] leading-[22px]">{{ t }}</span>
</At>

<At :x="31" :y="262" :w="658" class="text-[12px] text-[#9fb5af] transition-opacity duration-700">
  The alternative: find out later which decisions were made for you.
</At>

<!--
**A year from now.** Picture the result. You know where your keys are, and who else can turn them. You know how many days it takes to move an AI workload. You know that switching AI providers is a decision, not a rebuild. The alternative is to find out later which decisions were made for you. Which brings me back to the title.
-->

---
tone: dark
---

<At :x="31" :y="96" class="text-[40px] font-medium leading-[48px]">
  Your AI.<br>Your Kingdom.<br><span class="text-jungle">Your Keys.</span>
</At>

<At :x="31" :y="262" :w="92" :h="92" class="rounded-[8px] overflow-hidden bg-white">
  <img src="/images/qr-linkedin.png" class="w-full h-full" />
</At>
<At :x="139" :y="270" :w="300">
  <Pill :w="120" :h="36" style="font-size: 16px;">Booth #115</Pill>
  <div class="text-[15px] leading-[22px] mt-[10px] whitespace-nowrap">Come talk to us about your keys.</div>
</At>

<At :x="341" :y="0" :w="379"><img src="/images/castle.png" /></At>
<At :x="458" :y="104" :w="354"><img src="/images/king-keys.png" /></At>

<!--
**The answer to the title.** Your AI. Your kingdom. Your keys. Not because anyone is the enemy, but because owning is not controlling. If you want to talk about your own keys, come and find us at booth 115. Thank you, and I would love your questions.
-->

---
layout: brand
---

---
tone: dark
---

<At :x="21" :y="70" :w="268" :h="268" class="rounded-full overflow-hidden border-[2px] border-[#efefef]">
  <img src="/images/speaker.png" class="absolute left-[7px] top-[-53px] w-[253px] max-w-none" />
</At>

<At :x="305" :y="146" :w="400">
  <div class="text-[36px] font-extrabold leading-[46px] text-jungle">Jeroen van Erp</div>
  <div class="text-[14px] mt-[4px] text-[#efefef]"><b class="text-jungle">SUSE</b> <b>|</b> Principal Technology Advocate</div>
</At>
<At :x="305" :y="309" class="text-[14px] italic text-[#9e9e9e]">“Connecting platform engineering to business outcomes”</At>

---
tone: dark
---

<At :x="31" :y="150">
  <div class="text-[14px] font-bold uppercase text-jungle tracking-wide">Backup</div>
  <div class="text-[40px] font-medium leading-[48px]">Appendix</div>
</At>

---
source: https://www.senat.fr/compte-rendu-commissions/20250609/ce_commande_publique.html
---

# The US Cloud Act

A Remote-access API You Cannot Close

<At :x="288" :y="51" :w="559" :h="312"><img src="/images/server-dome.png" class="w-full h-full" /></At>

<At :x="31" :y="112" :w="360" class="text-[14px] font-medium leading-[24px]">
  US authorities can compel disclosure of data a company controls, including data held in an EU region.
</At>

<At :x="25" :y="180" :w="384" :h="156" class="rounded-[18px] bg-[var(--suse-pine)] text-[var(--suse-fog)]">
  <p class="mx-[14px] mt-[16px] text-[16px] leading-[19.5px]">
    Asked under oath whether data held on its <b class="text-persimmon">EU infrastructure</b> could be guaranteed never to reach <b class="text-persimmon">US authorities</b> without French government consent, A US Hyperscaler France's director of public and legal affairs said “<b class="text-mint">No, I cannot guarantee that</b>”
  </p>
</At>

---

# A Remote-access API You Cannot Close

The Region logo is not a firewall.

<At :x="261" :y="59" :w="559" :h="312"><img src="/images/server-dome.png" class="w-full h-full" /></At>

<At :x="31" :y="117" :w="360" class="text-[14px] font-medium leading-[24px]">
  US authorities can compel disclosure of data a company controls, including data held in an EU region.
</At>

<At :x="25" :y="192" :w="360" :h="144" class="rounded-[18px] bg-[var(--suse-pine)] text-[var(--suse-fog)] px-[13px] pt-[13px]">
  <div class="text-[16px] font-bold leading-[19.5px]">No, I cannot guarantee data sovereignty against US authorities… Even for data in France</div>
  <div class="text-[14px] italic leading-[17px] mt-[19px]">– A US Hyperscaler French subsidiary, under oath, French Senate, June 2025 (<b>paraphrased</b>)</div>
</At>

---

# Lock-in Is Moving Up the Stack

<At v-for="(l, i) in [
  { t: 'Foundation models', c: 'var(--suse-pine)' },
  { t: 'Vector stores and data', c: 'var(--suse-forest)' },
  { t: 'Orchestration and tooling', c: 'var(--suse-teal)' },
  { t: 'Compute and virtualization', c: 'var(--suse-jungle)' },
]" :key="l.t" :x="25" :y="86 + i * 60" :w="386" :h="54"
  class="flex items-center px-[18px] text-[20px] font-bold text-[#f7f8f8]" :style="{ background: l.c }">{{ l.t }}</At>

<At :x="452" :y="80" :w="230" class="text-[20px] leading-[29px]">The same dependency pattern, one layer higher.</At>

---
tone: fog
---

# In AI, owning your data is not controlling it

<At :x="25" :y="64" :w="149" :h="83" class="rounded-[8px] bg-[var(--suse-pine)] text-[#f7f8f8] px-[18px] pt-[12px]">
  <div class="text-[16px] font-bold">Your data</div>
  <div class="text-[12px] font-medium leading-[17px] mt-[3px]">Prompts, documents, customer records</div>
</At>

<ArrowRight class="absolute left-[182px] top-[95px]" :w="66" :h="20" :line-end="52" :head-base="50" :head-tip="64" :head-half="8" :stroke="3" />

<At :x="254" :y="64" :w="149" :h="83" class="rounded-[8px] bg-[var(--suse-forest)] text-[#f7f8f8] px-[18px] pt-[12px]">
  <div class="text-[16px] font-bold">An AI Service</div>
  <div class="text-[12px] font-medium leading-[17px] mt-[3px]">Run by someone else</div>
</At>

<At :x="29" :y="165" class="text-[18px] font-bold">3 Questions for your AI provider</At>

<At v-for="(q, i) in [
  { t: 'Who can see it?', d: 'Logged reviewed or shared by the provider' },
  { t: 'Is it kept or learned from?', d: 'Depends on the contract and service tier' },
  { t: 'Whose law can compel it?', d: 'Jurisdiction follows the provider not the region' },
]" :key="q.t" :x="25" :y="201 + i * 52.5" :w="378" :h="45"
  class="bg-white border border-[#ccc] rounded-[8px] px-[8px] pt-[5px] text-[14px] leading-[16.5px] text-black">
  <b>{{ q.t }}</b><br>{{ q.d }}
</At>

<At :x="444" :y="147" :w="252" :h="206" class="rounded-[8px] bg-[#f7f8f8] border border-[#ccc] px-[12px]">
  <div class="font-mono text-[60px] leading-[72px] mt-[2px] text-[var(--suse-stat)]">35%</div>
  <p class="text-[16px] leading-[27px] text-[#353c3b] mt-[2px]">of countries will be locked into region-specific AI platforms using proprietary contextual data by 2027</p>
</At>

---
tone: fog
---

# Engineer exit paths into the design

<At v-for="(c, i) in [
  { t: 'Provider-independent abstraction', d: 'An open control plane, such as Kubernetes, above the providers: run models on your own GPUs, and route between them and any provider.' },
  { t: 'Keys that stay yours', d: 'Customer-managed encryption keys and local hardware security modules, independent of any cloud provider.' },
  { t: 'Rehearsed reversibility', d: 'An annual exit exercise proving data and models can move within [90 days].' },
]" :key="c.t" :x="[25, 252, 485][i]" :y="100" :w="[217, 220, 210][i]" :h="230"
  class="rounded-[10px] bg-white border border-[#ccc] px-[13px] pt-[13px]">
  <div class="text-[18px] font-bold leading-[21px] h-[42px]">{{ c.t }}</div>
  <p class="text-[14px] leading-[17px] mt-[25px]" style="font-family: Arial, sans-serif">{{ c.d }}</p>
</At>

---
tone: dark
---

# Sovereignty becomes something you can score

The EU Cloud Sovereignty Framework

<SovLevels />

---
tone: dark
---

# Sovereignty becomes something you can score

The EU Cloud Sovereignty Framework

<SovLevels :focus="[4, 6]" />

---
tone: fog
---

# Lock-in is what Ownership without Control looks like

<At v-for="(c, i) in [
  { k: 'SOV-4 · Operational', d: 'Ease of migrating without vendor lock-in' },
  { k: 'SOV-6 · Technology', d: 'No lock-in to foreign proprietary systems' },
]" :key="c.k" :x="34" :y="123 + i * 84" :w="192" :h="75"
  class="rounded-[4px] bg-[var(--suse-pine)] text-[var(--suse-fog)] px-[14px] pt-[12px]">
  <div class="text-[12px] font-bold uppercase text-mint">{{ c.k }}</div>
  <div class="text-[14px] leading-[17px] mt-[3px]">{{ c.d }}</div>
</At>

<ArrowRight class="absolute left-[236px] top-[192px]" :w="50" :h="16" :line-end="42" :head-base="36" :head-tip="46" :head-half="6" :stroke="2.5" open />

<At :x="292" :y="140" :w="226" :h="122" class="rounded-[4px] bg-[var(--suse-pine)] px-[14px] pt-[9px]">
  <div class="text-[16px] font-bold leading-[20px] text-[var(--suse-fog)]">The Virtualization<br>Shake-up</div>
  <div class="text-[14px] leading-[17px] mt-[4px] text-mint" style="font-family: Arial, sans-serif">A recent, real-world test of depending on one infrastructure vendor.</div>
</At>

<At :x="405" :y="90" :w="419" :h="279"><img src="/images/server-rack-locked.png" class="w-full h-full" /></At>

---

# AI lock-in sits around the model

<LockInHex :offset-y="-33" />

---
tone: fog
source: Gartner Inc., The Shift Toward VMware Alternatives — Mitigating Risks and Costs, April 2026
trademarks: [GARTNER]
---

# Three lessons from the Virtualization Shake-up

<VmwareQuote>
Gartner states, “Negative sentiment among CIOs and IT leaders regarding Broadcom ownership of VMware has continued to grow. In 2024, 33% of CIOs reported a negative sentiment. In 2025, that number grew to 64%, and it now sits at 76% in 2026”<sup>1</sup>
</VmwareQuote>

<ThreeLessons />
