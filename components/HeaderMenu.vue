<script lang="ts" setup>
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const { loggedIn } = useUserSession()

const components = computed((): { title: string, href: string, description: string }[] => [
    {
        title: useI18n().t('brandStory'),
        href: '/docs/components/alert-dialog',
        description:
      '***********************',
    },
    {
        title: useI18n().t('companyProfile'),
        href: '/docs/components/hover-card',
        description:
      '***********************',
    },
])
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-if="loggedIn">
        <NavigationMenuLink :href="$localePath({ path: '/' })">
          {{ $t('headerTab.home') }}
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="bg-transparent">
          {{ $t('headerTab.about') }}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink :href="$localePath({ path: '/help' })">
          {{ $t('headerTab.help') }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </navigationmenu>
</template>
