<!-- Content slide with SUSE footer. Frontmatter: tone: light | fog | dark, source: citation shown bottom right, gartner: true adds the Gartner trademark line bottom right and moves the source to the bottom left; trademarks: [Name] adds a matching line for other Gartner marks (stacked, and the colour bar is hidden) -->
<template>
  <div class="slidev-layout suse" :class="`tone-${$frontmatter.tone ?? 'light'}`">
    <slot />
    <div v-if="$frontmatter.source" class="source" :class="{ 'source-left': $frontmatter.gartner }">
      <template v-if="$frontmatter.gartner"><sup>1</sup>{{ $frontmatter.source }}</template>
      <template v-else>Source: {{ $frontmatter.source }}</template>
    </div>
    <div v-if="$frontmatter.gartner" class="source" :class="{ 'source-stack': $frontmatter.trademarks?.length }">
      <div>GARTNER is a trademark of Gartner, Inc. and/or its affiliates.</div>
      <div v-for="t in $frontmatter.trademarks ?? []" :key="t">{{ t }} is a trademark of Gartner, Inc. and/or its affiliates.</div>
    </div>
    <SlideFooter />
  </div>
</template>
