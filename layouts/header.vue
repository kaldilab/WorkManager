<template>
  <div v-frag>
    <header class="header">
      <div class="header__container">
        <div class="header__top">
          <h1 class="header__title">
            <NuxtLink class="btn" to="/">
              <img src="@/assets/images/logo.png" alt="워크매니저" />
              <span>워크매니저</span>
            </NuxtLink>
          </h1>
        </div>
        <nav class="header__nav">
          <ul class="header__menu">
            <li>
              <NuxtLink class="btn" to="/openfield">🏢 <span>회사명</span></NuxtLink>
              <ul v-if="comCommonMenuOpenfield.length" class="header__submenu">
                <li v-for="(item, index) in comCommonMenuOpenfield" :key="index">
                  <a :href="item.link" target="_blank">{{ item.menu }} ⚡️</a>
                </li>
                <li class="edit">
                  <a class="fs-4 co-brand" :href="$apiEdit().urlMenuOpenfield" target="_blank" title="편집">✏️</a>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink class="btn" to="/service">🍧 <span>팀명</span></NuxtLink>
              <ul v-if="comCommonMenuService.length" class="header__submenu">
                <li v-for="(item, index) in comCommonMenuService" :key="index">
                  <a :href="item.link" target="_blank">{{ item.menu }} ⚡️</a>
                </li>
                <li class="edit">
                  <a class="fs-4 co-brand" :href="$apiEdit().urlMenuService" target="_blank" title="편집">✏️</a>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink class="btn" to="/business">🍭 <span>팀명</span></NuxtLink>
              <ul v-if="comCommonMenuBusiness.length" class="header__submenu">
                <li v-for="(item, index) in comCommonMenuBusiness" :key="index">
                  <a :href="item.link" target="_blank">{{ item.menu }} ⚡️</a>
                </li>
                <li class="edit">
                  <a class="fs-4 co-brand" :href="$apiEdit().urlMenuBusiness" target="_blank" title="편집">✏️</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="header__bottom">
          <p class="header__copy">OpenField @2023</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderLayout',
  computed: {
    comCommon() {
      return this.$store.state.common
    },
    comCommonMenuOpenfield() {
      return this.comCommon.menuOpenfield
    },
    comCommonMenuService() {
      return this.comCommon.menuService
    },
    comCommonMenuBusiness() {
      return this.comCommon.menuBusiness
    },
    comCommonLoading() {
      return this.comCommon.loading
    },
  },
  beforeMount() {
    this.$getMenuOpenfield()
    this.$getMenuService()
    this.$getMenuBusiness()
  },
}
</script>
