---
theme: none
title: Your AI, Your Kingdom, Someone Else's Keys?
info: |
  Gartner IOCS 2026 — Jeroen van Erp, SUSE
author: Jeroen van Erp
canvasWidth: 720
aspectRatio: 16/9
fonts:
  sans: SUSE
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
  <div class="text-[40px] font-bold leading-[44px] text-jungle">25</div>
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

# Sovereignty has moved into the boardroom

<template v-for="(s, i) in [
  { n: '70%', t: 'say technology sovereignty is an important issue to the CEO & exCo', src: 'Gartner Inc., Digital Sovereignty Is a CEO Priority: A CIO’s Playbook for Competitive Advantage, July 2026' },
  { n: '86%', t: 'of European organizations believe that it is plausible that the U.S. could restrict Europe’s access to digital services', src: 'Gartner Inc., Analyst Take: Digital Sovereignty Breaks the Age of Technological Dominance in Europe, May 2026' },
  { n: '60%', t: 'of respondents already indicated they expected geopolitics to increase their use of local and regional clouds', src: 'Gartner Inc., Hype Cycle for Digital Sovereignty, 2026' },
]" :key="s.n">
  <At :x="26 + i * 226" :y="92" :w="215" :h="229" class="rounded-[12px] bg-[var(--suse-fog)]">
    <div class="text-center text-[60px] font-bold leading-[72px] mt-[12px] text-[var(--suse-stat)]">{{ s.n }}</div>
    <p class="mx-[18px] mt-[8px] text-[14px] leading-[23.5px] text-[#353c3b]">{{ s.t }}</p>
  </At>
  <At :x="33 + i * 226" :y="325" :w="205" class="text-[10px] leading-[12px] italic text-[#9e9e9e]" style="font-family: Arial, sans-serif">{{ s.src }}</At>
</template>


---
tone: fog
source: SUSE, Hybrid Cloud Survey 2026 (611 IT leaders in the US, UK, France, Germany and Japan), September 2026
---

# In AI, owning your data is not controlling it

<At :x="25" :y="83" :w="247" :h="258" class="rounded-[8px] bg-[var(--suse-card)] text-[var(--suse-fog)] px-[16px]">
  <div class="mt-[16px] text-[10px] font-bold uppercase tracking-[0.12em] text-mint">Start at home</div>
  <div class="text-[64px] font-medium leading-[72px] mt-[6px] text-jungle">91%</div>
  <p class="text-[14px] font-medium leading-[17px] mt-[8px]">of IT leaders say employees bypass security and compliance controls to deploy AI workloads faster.</p>
  <p class="text-[12px] leading-[16px] mt-[10px] text-[#d5e0dd]">85% worry about data loss and no visibility into running models.</p>
</At>

<At :x="297" :y="83" :w="175" :h="52" class="rounded-[8px] bg-[var(--suse-pine)] text-[#f7f8f8] px-[12px] pt-[8px]">
  <div class="text-[16px] font-bold leading-[20px]">Your data</div>
  <div class="text-[11px] leading-[16px]">prompts, documents, records</div>
</At>

<ArrowRight class="absolute left-[472px] top-[102px]" :w="36" :h="14" :line-end="30" :head-base="26" :head-tip="34" :head-half="6" :stroke="2.5" />

<At :x="521" :y="83" :w="174" :h="52" class="rounded-[8px] bg-[var(--suse-forest)] text-[#f7f8f8] px-[12px] pt-[8px]">
  <div class="text-[16px] font-bold leading-[20px]">An AI service</div>
  <div class="text-[11px] leading-[16px]">run by someone else</div>
</At>

<At :x="297" :y="147" class="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--suse-forest)]">Three questions to ask any AI provider</At>

<At v-for="(q, i) in [
  { t: 'Who holds the keys?', d: 'Customer-only control of the encryption keys' },
  { t: 'Whose law can compel it?', d: 'Jurisdiction follows the provider, not the region' },
  { t: 'Can you audit the AI?', d: 'Who accessed your data, and what the AI did with it' },
]" :key="q.t" :x="297" :y="167 + i * 59" :w="398" :h="52"
  class="bg-[#f8f9f9] border border-[#d6d9d8] rounded-[8px] px-[12px] pt-[7px] text-black">
  <div class="text-[16px] font-medium leading-[20px] text-[var(--suse-pine)]">{{ q.t }}</div>
  <div class="text-[12px] leading-[16px] text-[#353c3b]">{{ q.d }}</div>
</At>

---

# The model is easy to swap. The rest is not.

<At :x="30" :y="66" class="text-[12px]" style="font-family: Arial, sans-serif">Lock-in is built, not bought: it grows with everything you put around the model.</At>

<!-- Clicks: the dependencies appear in pairs, each with its arc label -->
<LockInHex :clicks="$clicks" />

---
tone: dark
clicks: 1
---

# Sovereignty becomes something you can score

The EU Cloud Sovereignty Framework

<!-- Click: SOV-1 pops out and glows, and its "Ownership" pill fades in -->
<SovGrid :focus="$clicks > 0 ? [1, 4, 5, 6] : []" :labels="{1: 'Ownership', 4: 'Control', 5: 'Control', 6: 'Control'}" />
<At :x="38" :y="293" class="text-[18px] text-mint">Each objective is scored from SEAL-0 to SEAL-4</At>

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

---
tone: fog
source: Gartner Inc., The Shift Toward VMware Alternatives — Mitigating Risks and Costs, April 2026
---

# Three lessons from the Virtualization Shake-up

<VmwareChart title="Negative sentiment among CIOs and IT leaders regarding Broadcom ownership of VMware" />

<ThreeLessons />

---
tone: dark
source: Gartner Inc., The Paradox of Sovereignty and Open Source Exposes Service Providers, April 2026
---

# Open Source gives you the master key

From blind trust to visibility

<At :x="31" :y="108" class="text-[60px] font-bold leading-[72px] text-jungle">80%</At>
<At :x="31" :y="182" :w="225" class="text-[14px] leading-[17px] text-[var(--suse-mist)]">
  of respondents believe geopolitical concerns have made open-source a more important criterion when selecting new cloud solutions for their organizations.
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
  <Pill :w="120" :h="36" style="font-size: 16px;">Booth #117</Pill>
  <div class="text-[15px] leading-[22px] mt-[10px] whitespace-nowrap">Come talk to us about your keys.</div>
</At>

<At :x="341" :y="0" :w="379"><img src="/images/castle.png" /></At>
<At :x="458" :y="104" :w="354"><img src="/images/king-keys.png" /></At>

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
  <div class="text-[60px] leading-[72px] mt-[2px] text-[var(--suse-stat)]">35%</div>
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
---

# Three lessons from the Virtualization Shake-up

<VmwareChart title="Negative outlook on the platform’s new ownership" :top="104" />

<ThreeLessons :ys="[104, 184, 264]" />
