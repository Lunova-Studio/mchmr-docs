<template>
  <div
    class="relative overflow-hidden rounded-2xl border backdrop-blur-xl mt-5
           bg-white/30 dark:bg-white/10 border-white/30 dark:border-white/10
           shadow-[inset_0_0_8px_rgba(255,255,255,0.15),_0_4px_20px_rgba(0,0,0,0.1)]
           dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.05),_0_4px_20px_rgba(0,0,0,0.6)]"
  >
    <!-- 模糊层：仅模糊 slot 内容 -->
    <div class="px-8 py-2 absolute inset-0 scale-105 blur-lg select-none pointer-events-none rounded-2xl">
      <slot />
    </div>

    <!-- 上方文字和图标（不会被模糊） -->
    <div
      v-if="content" class="absolute inset-0 flex items-center justify-center z-20
             text-lg font-medium tracking-wide gap-2
             text-gray-800 dark:text-white drop-shadow-sm"
    >
      <SmartIcon v-if="icon" :name="icon" :size="20" />
      {{ content }}
    </div>

    <!-- 实际 slot 内容（保持布局撑开高度） -->
    <div class="relative opacity-0 pointer-events-none select-none">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { icon, content = '' } = defineProps<{
  icon?: string;
  content?: string;
}>();
</script>
