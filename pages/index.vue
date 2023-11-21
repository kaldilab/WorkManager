<template>
  <div v-frag>
    <Wrap>
      <Header />
      <Main>
        <ul class="nav nav-tabs main__nav">
          <li class="nav-item">
            <button class="nav-link active" @click="handleNavLinkClick($event, 0)">이벤트</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 1)">업무</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 2)">다이어리</button>
          </li>
        </ul>
        <div class="home">
          <client-only>
            <div v-if="!comCommonLoading" v-frag>
              <h2>
                이벤트
                <a class="fs-4 co-brand" :href="$apiEdit().urlEvent" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 35%" />
                  <col style="width: 15%" />
                  <col style="width: 15%" />
                  <col style="width: 30%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이벤트</th>
                    <th scope="col">날짜</th>
                    <th scope="col">시간</th>
                    <th scope="col">메모</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonEvent" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.title"></td>
                    <td v-html="item.start"></td>
                    <td v-html="item.time"></td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                업무
                <a class="fs-4 co-brand" :href="$apiEdit().urlWorks" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 5%" />
                  <col style="width: 15%" />
                  <col style="width: 25%" />
                  <col style="width: 10%" />
                  <col style="width: 10%" />
                  <col style="width: 10%" />
                  <col style="width: 20%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">기본 업무</th>
                    <th scope="col">오늘 뭐해?</th>
                    <th scope="col">시작</th>
                    <th scope="col">종료</th>
                    <th scope="col">진행률</th>
                    <th scope="col">다음엔 뭐해?</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonWorks" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.name"></td>
                    <td class="fs-5" v-html="item.work"></td>
                    <td class="bg-c1" v-html="item.ongoing"></td>
                    <td v-html="item.start"></td>
                    <td v-html="item.end"></td>
                    <td>
                      <div class="progress">
                        <div
                          :class="`progress-bar bg-${item.progressBadge}`"
                          role="progressbar"
                          :style="`width: ${item.progress}%`"
                          :aria-valuenow="item.progress"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {{ item.progress }}%
                        </div>
                      </div>
                    </td>
                    <td class="bg-c1" v-html="item.plan"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                다이어리
                <a class="fs-4 co-brand" :href="$apiEdit().urlDiary" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 20%" />
                  <col style="width: 40%" />
                  <col style="width: 35%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">메모, 일기, 공유...</th>
                    <th scope="col">댓글</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonDiary" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>
                      <div class="profile">
                        <figure>
                          <img alt="이미지" :src="item.image" />
                        </figure>
                        <span v-html="item.name"></span>
                      </div>
                    </td>
                    <td class="bg-c1" v-html="item.desc"></td>
                    <td v-html="item.comment"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <LoadingType1 v-else />
          </client-only>
        </div>
      </Main>
    </Wrap>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: '워크매니저',
    }
  },
  computed: {
    comCommon() {
      return this.$store.state.common
    },
    comCommonWorks() {
      return this.comCommon.works
    },
    comCommonEvent() {
      return this.comCommon.event
    },
    comCommonDiary() {
      return this.comCommon.diary
    },
    comCommonLoading() {
      return this.comCommon.loading
    },
  },
  beforeMount() {
    this.$getWorks()
    this.$getEvent()
    this.$getDiary()
  },
  methods: {
    handleNavLinkClick(event, index) {
      this.$utilNaviLink(event, index)
    },
  }
}
</script>
