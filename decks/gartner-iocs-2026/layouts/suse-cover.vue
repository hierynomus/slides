<template>
  <div class="slidev-layout suse-cover tone-dark">
    <SuseLogo :size="31" class="cover-logo" />
    <img src="/images/geeko.png" class="cover-geeko" alt="" />
    <div class="cover-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.suse-cover {
  background: radial-gradient(circle at 20% 10%, #0f5a48 0%, var(--suse-pine) 70%);
}
.cover-logo {
  position: absolute;
  top: 37px;
  left: 43px;
}
.cover-geeko {
  position: absolute;
  left: 451px;
  top: 86px;
  width: 627px;
  max-width: none;
  transform: scaleX(-1);
}
.cover-body {
  position: absolute;
  left: 40px;
  top: 146px;
  z-index: 1;
}
</style>
