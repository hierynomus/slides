<!-- Content slide with SUSE footer. Frontmatter: tone: light | fog | dark, source: citation shown bottom right; trademarks: [GARTNER, Hype Cycle] adds the Gartner trademark line bottom right and moves the source to the bottom left (more than one mark stacks the line and hides the colour bar) -->
<template>
  <div class="slidev-layout suse" :class="`tone-${$frontmatter.tone ?? 'light'}`">
    <slot />
    <div v-if="$frontmatter.source" class="source" :class="{ 'source-left': $frontmatter.trademarks?.length }">
      <template v-if="$frontmatter.trademarks?.length"><sup>1</sup>{{ $frontmatter.source }}</template>
      <template v-else>Source: {{ $frontmatter.source }}</template>
    </div>
    <div v-if="$frontmatter.trademarks?.length" class="source" :class="{ 'source-stack': $frontmatter.trademarks.length > 1 }">
      {{ $frontmatter.trademarks.join(' & ') }} {{ $frontmatter.trademarks.length > 1 ? 'are the trademark' : 'is a trademark' }} of Gartner, Inc. and/or its affiliates.
    </div>
    <SlideFooter />
  </div>
</template>
