<template>
  <div v-frag>
    <Wrap>
      <Header />
      <Main>
        <div class="calendar">
          <client-only>
            <h2>
              캘린더
              <a class="fs-4 co-brand" href="https://calendar.google.com/" target="_blank" title="편집">✏️</a>
            </h2>
            <div class="calendar-table">
              <iframe
                v-show="!loading"
                class="calendar-iframe"
                src="구글 캘린더 공유 URL"
                @load="handleLoad"
              ></iframe>
              <LoadingType1 v-if="loading" />
            </div>
          </client-only>
        </div>
      </Main>
    </Wrap>
  </div>
</template>

<script>
export default {
  name: 'CalendarPage',
  data() {
    return {
      loading: true,
    }
  },
  head() {
    return {
      title: '캘린더 | 워크매니저',
    }
  },
  methods: {
    handleLoad() {
      this.loading = false
    },
  },
}
</script>
