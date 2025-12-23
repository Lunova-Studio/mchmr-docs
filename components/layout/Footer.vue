<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0 my-12">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <div class="py-1">
        <p class="text-sm">
          <a
            href="https://beian.miit.gov.cn/" target="_blank"
            class="underline hover:text-foreground"
          >陇ICP备2022000263号</a> | <img
            src="/gongan.png" class="inline-block mr-1"
            style="width: 16px; height: 16px;"
          ><a
            href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62011102000239" target="_blank"
            class="underline hover:text-foreground"
          ><span>甘公网安备62011102000239号</span></a>
        </p>
        <MDC :value="$t(footer.credits)" class="text-sm" />
        <!-- @vue-ignore -->
        <MDC :value="$t(footer.credits2)" class="text-sm" />
        <!-- @vue-ignore -->
        <MDC :value="$t(footer.credits3)" class="text-sm" />
      </div>
      <span class="flex-1" />
      <div class="flex flex-wrap gap-2 justify-center md:justify-end">
        <NuxtLinkLocale v-for="(link, i) in footer.links" :key="i" :to="link?.to" :target="link?.target">
          <UiButton variant="ghost" :size="link?.icon && !link?.title ? 'icon' : 'default'" class="flex gap-2">
            <SmartIcon v-if="link?.icon" :name="link.icon" :size="20" />
            <span v-if="link?.title">{{ $t(link.title) }}</span>
          </UiButton>
        </NuxtLinkLocale>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
