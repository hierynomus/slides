<!-- EU Cloud Sovereignty Framework objectives as a 4×2 grid. `focus` picks objectives out with an orange outline and glow; colours stay the same.
     `labels` maps an objective id to a pill that fades in while it is focused (default: SOV-1 "Ownership"). -->
<script setup lang="ts">
withDefaults(defineProps<{ focus?: number[], labels?: Record<number, string> }>(), {
  // A focused objective with a label gets a pill that fades in on it
  labels: () => ({ 1: 'Ownership' }),
})

const objectives = [
  { id: 1, name: 'Strategic', tone: 'card' },
  { id: 2, name: 'Legal and jurisdictional', tone: 'mint' },
  { id: 3, name: 'Data and AI', tone: 'jungle' },
  { id: 4, name: 'Operational', tone: 'forest' },
  { id: 5, name: 'Supply chain', tone: 'mint' },
  { id: 6, name: 'Technology', tone: 'forest' },
  { id: 7, name: 'Security and compliance', tone: 'card' },
  { id: 8, name: 'Environmental sustainability', tone: 'card' },
]

</script>

<template>
  <div v-for="(o, i) in objectives" :key="o.id" class="sov"
    :class="[`tone-${o.tone}`, { focused: focus?.includes(o.id) }]"
    :style="{ transitionDelay: '0s', left: `${[31, 198, 364, 531][i % 4]}px`, top: `${i < 4 ? 88 : 190}px` }">
    <div class="sov-id">SOV-{{ o.id }}</div>
    <div>{{ o.name }}</div>
    <Pill v-if="labels[o.id]" :tone="o.tone === 'card' ? 'jungle' : 'pine'" :w="84" class="sov-pill" :class="{ shown: focus?.includes(o.id) }">{{ labels[o.id] }}</Pill>
  </div>
</template>

<style scoped>
.sov {
  position: absolute;
  width: 157px;
  height: 92px;
  padding: 7px 7px;
  font-size: 16px;
  line-height: 1.2;
  border: 0.75px solid #2a6354;
  border-radius: 8px;
  /* the highlight pops in with a little overshoot; the second box follows slightly later */
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease-out, border-color 0.5s ease-out;
}
.sov-id {
  /* same small tracked header as the cards on the other slides */
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-top: 3px;
  margin-bottom: 9px;
}
.tone-card { background: var(--suse-card); color: var(--suse-fog); }
.tone-forest { background: var(--suse-forest); color: var(--suse-fog); }
.tone-jungle { background: var(--suse-jungle); color: var(--suse-pine); }
.tone-mint { background: var(--suse-mint); color: var(--suse-pine); }
.tone-card .sov-id, .tone-forest .sov-id { color: var(--suse-mint); }
.sov-pill {
  position: absolute;
  left: 7px;
  bottom: 7px;
  opacity: 0;
  transition: opacity 0.5s ease-out 0.3s;
}
.sov-pill.shown { opacity: 1; }
.focused {
  /* the existing border turns orange and is thickened inward (inset shadow), so nothing extra
     is added outside the box; only a soft glow fades out beyond it */
  border-color: var(--suse-persimmon);
  box-shadow: inset 0 0 0 1.5px var(--suse-persimmon), 0 0 12px rgba(254, 124, 63, 0.5);
  transform: scale(1.045);
  z-index: 1;
}
</style>
