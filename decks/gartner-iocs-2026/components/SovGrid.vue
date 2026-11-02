<!-- EU Cloud Sovereignty Framework objectives as a 4×2 grid. `focus` outlines objectives and mutes the rest. -->
<script setup lang="ts">
const props = defineProps<{ focus?: number[] }>()

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

function tone(id: number, base: string) {
  if (!props.focus) return base
  // SOV-2 and SOV-3 stay lit; they are the AI-specific objectives
  return [2, 3].includes(id) ? 'jungle' : 'card'
}
</script>

<template>
  <div v-for="(o, i) in objectives" :key="o.id" class="sov"
    :class="[`tone-${tone(o.id, o.tone)}`, { focused: focus?.includes(o.id) }]"
    :style="{ left: `${[31, 198, 364, 531][i % 4]}px`, top: `${i < 4 ? 88 : 190}px` }">
    <div class="sov-id">SOV-{{ o.id }}</div>
    <div>{{ o.name }}</div>
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
}
.sov-id {
  font-weight: 700;
  margin-bottom: 7px;
}
.tone-card { background: var(--suse-card); color: #fff; }
.tone-forest { background: var(--suse-forest); color: #fff; }
.tone-jungle { background: var(--suse-jungle); color: var(--suse-pine); }
.tone-mint { background: var(--suse-mint); color: var(--suse-pine); }
.tone-card .sov-id, .tone-forest .sov-id { color: var(--suse-jungle); }
.focused { border: 1.5px solid var(--suse-mint); }
</style>
