<template>
  <footer class="slide-footer">
    <SuseLogo :size="17" class="logo" />
    <span class="page">{{ $nav.currentPage }}</span>
    <div v-if="($frontmatter.trademarks?.length ?? 0) < 2" class="bar">
      <span style="flex: 130; background: var(--suse-mint)" />
      <span style="flex: 50; background: var(--suse-waterhole)" />
      <span style="flex: 27; background: var(--suse-persimmon)" />
      <span style="flex: 153; background: var(--suse-jungle)" />
    </div>
  </footer>
</template>

<style scoped>
.logo {
  position: absolute;
  left: 17px;
  top: 372px;
}
.page {
  position: absolute;
  left: 335px;
  top: 376px;
  font-size: 6px;
  font-weight: 600;
}
.bar {
  position: absolute;
  left: 360px;
  right: 0;
  top: 378px;
  height: 5px;
  display: flex;
}
</style>
