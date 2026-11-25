<!-- EU Cloud Sovereignty Framework: objectives next to assurance levels. `focus` highlights objectives. -->
<script setup lang="ts">
defineProps<{ focus?: number[] }>()

const objectives = [
  'Strategic',
  'Legal and jurisdictional',
  'Data and AI',
  'Operational',
  'Supply chain',
  'Technology',
  'Security and compliance',
  'Environmental sustainability',
]
// The AI-specific objectives
const emphasised = [2, 3]
const levels = [
  'No sovereignty',
  'Jurisdictional',
  'Data sovereignty',
  'Technological sovereignty',
  'Full digital sovereignty',
]
</script>

<template>
  <div v-for="(panel, p) in [
    { x: 26, heading: 'Eight objectives', rows: objectives.map((o, i) => `SOV-${i + 1} · ${o}`) },
    { x: 373, heading: 'Five assurance levels', rows: levels.map((l, i) => `SEAL-${i} · ${l}`) },
  ]" :key="panel.heading" class="panel" :style="{ left: `${panel.x}px` }">
    <div class="heading">{{ panel.heading }}</div>
    <div v-for="(row, i) in panel.rows" :key="row" class="row"
      :class="{ emph: p === 0 && emphasised.includes(i + 1), focus: p === 0 && focus?.includes(i + 1) }">
      {{ row }}
    </div>
  </div>
</template>

<style scoped>
.panel {
  position: absolute;
  top: 90px;
  width: 322px;
  height: 262px;
  padding: 7px 8px;
  background: var(--suse-card);
}
.heading {
  color: var(--suse-jungle);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 0 8px;
}
.row {
  height: 27.5px;
  padding: 2px 8px 0;
  font-size: 15.5px;
  line-height: 24px;
}
.emph {
  color: var(--suse-persimmon);
  font-weight: 700;
}
.focus {
  background: var(--suse-jungle);
  color: #f7f8f8;
  font-weight: 400;
  height: 24px;
  margin: 2px 0 1.5px;
  padding-top: 0;
}
</style>
