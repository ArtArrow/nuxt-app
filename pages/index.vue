<script lang="ts" setup>
definePageMeta({
    title: 'pages.title.home',
})
const { t } = useI18n()

useSeoMeta({
    description: t('pages.home.description'),
})
</script>

<template>
  <div>
    {{ $t('welcome') }}
  </div>
</template>

<style lang="scss" scoped>

</style>
