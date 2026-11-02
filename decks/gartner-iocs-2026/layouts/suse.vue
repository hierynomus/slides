<!-- Content slide with SUSE footer. Frontmatter: tone: light | fog | dark, source: citation shown bottom right -->
<template>
  <div class="slidev-layout suse" :class="`tone-${$frontmatter.tone ?? 'light'}`">
    <slot />
    <div v-if="$frontmatter.source" class="source">Source: {{ $frontmatter.source }}</div>
    <SlideFooter />
  </div>
</template>
