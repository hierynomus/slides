<!-- Small line icons used in the "master key comes in steps" towers.
     `lockkey` is half padlock, half key: access you partly control. -->
<script setup lang="ts">
defineProps<{ name: 'lock' | 'key' | 'lockkey' }>()
</script>

<template>
  <svg v-if="name === 'lock'" viewBox="0 0 12 12" class="inline-block w-[10px] h-[10px]" fill="none" stroke="currentColor" stroke-width="1.2">
    <rect x="2" y="5.5" width="8" height="5.5" rx="1" />
    <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" />
  </svg>
  <svg v-else-if="name === 'key'" viewBox="0 0 14 8" class="inline-block w-[12px] h-[8px]" fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="3.5" cy="4" r="2.5" />
    <path d="M6 4h7M10.5 4v2.5M12.5 4v2" />
  </svg>
  <svg v-else viewBox="0 0 12 18" class="inline-block w-[12px] h-[18px]" fill="none" stroke="currentColor">
    <!-- the same lock and key as above, stacked so the icon is no wider than the others -->
    <g transform="translate(1 0) scale(.833)" stroke-width="1.2">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1" />
      <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" />
    </g>
    <g transform="translate(0 10.5) scale(.857)" stroke-width="1.4">
      <circle cx="3.5" cy="4" r="2.5" />
      <path d="M6 4h7M10.5 4v2.5M12.5 4v2" />
    </g>
  </svg>
</template>
