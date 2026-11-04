<template>
  <div class="slidev-layout suse-cover tone-dark">
    <SuseLogo :size="31" class="cover-logo" />
    <Geeko class="cover-geeko" />
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
  left: 293px;
  top: -224px;
  width: 960px;
  height: 960px;
  transform: scaleX(-1);
}
.cover-body {
  position: absolute;
  left: 40px;
  top: 146px;
  z-index: 1;
}
</style>
