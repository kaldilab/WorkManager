<template>
  <div v-frag>
    <Wrap>
      <Header />
      <Main>
        <ul class="nav nav-tabs main__nav">
          <li class="nav-item">
            <button class="nav-link active" @click="handleNavLinkClick($event, 0)">팀</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 1)">오픈FM</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 2)">URL</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 3)">계정</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 3)">부가정보</button>
          </li>
        </ul>
        <div class="openfield">
          <client-only>
            <div v-if="!comCommonLoading" v-frag>
              <h2>
                팀
                <a class="fs-4 co-brand" :href="$apiEdit().urlOpenfieldTeam" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 10%" />
                  <col style="width: 35%" />
                  <col style="width: 30%" />
                  <col style="width: 20%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">팀명</th>
                    <th scope="col">임무</th>
                    <th scope="col">정원(T/O)</th>
                    <th scope="col">메모</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonOpenfieldTeam" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td v-html="item.team"></td>
                    <td class="bg-c1" v-html="item.work"></td>
                    <td v-html="item.to"></td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                오픈FM <small>(Open Field-Manual)</small>
                <a class="fs-4 co-brand" :href="$apiEdit().urlOpenfieldFm" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 20%" />
                  <col style="width: 45%" />
                  <col style="width: 30%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">구분</th>
                    <th scope="col">그라운드룰</th>
                    <th scope="col">비고</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonOpenfieldFm" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td v-html="item.cat"></td>
                    <td class="bg-c1" v-html="item.rule"></td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                URL
                <a class="fs-4 co-brand" :href="$apiEdit().urlOpenfieldUrl" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 25%" />
                  <col style="width: 35%" />
                  <col style="width: 35%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">사이트</th>
                    <th scope="col">URL</th>
                    <th scope="col">메모</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonOpenfieldUrl" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.name"></td>
                    <td>
                      <a class="co-brand" :href="item.link" target="_blank" title="보기">{{ item.link }}</a>
                    </td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                계정
                <a class="fs-4 co-brand" :href="$apiEdit().urlOpenfieldAccount" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 20%" />
                  <col style="width: 20%" />
                  <col style="width: 20%" />
                  <col style="width: 5%" />
                  <col style="width: 30%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">계정</th>
                    <th scope="col">ID</th>
                    <th scope="col">
                      PW
                      <button class="btn" title="보기" @click="handleToggleAccountPw">🔐</button>
                    </th>
                    <th scope="col">링크</th>
                    <th scope="col">메모</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonOpenfieldAccount" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.account"></td>
                    <td v-html="item.id"></td>
                    <td v-html="showAccountPw ? `<input class='form-control' type='text' value='${item.pw}' disabled>` : '🙈'"></td>
                    <td>
                      <a v-if="item.link" :href="item.link" target="_blank" title="보기">🚀</a>
                    </td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                부가정보
                <a class="fs-4 co-brand" :href="$apiEdit().urlOpenfieldInfo" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 30%" />
                  <col style="width: 65%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">제목</th>
                    <th scope="col">내용</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonOpenfieldInfo" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.title"></td>
                    <td v-html="item.info"></td>
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
  name: 'OpenfieldPage',
  data() {
    return {
      showAccountPw: false,
    }
  },
  head() {
    return {
      title: '회사명 | 워크매니저',
    }
  },
  computed: {
    comCommon() {
      return this.$store.state.common
    },
    comCommonOpenfieldTeam() {
      return this.comCommon.openfieldTeam
    },
    comCommonOpenfieldFm() {
      return this.comCommon.openfieldFm
    },
    comCommonOpenfieldAccount() {
      return this.comCommon.openfieldAccount
    },
    comCommonOpenfieldUrl() {
      return this.comCommon.openfieldUrl
    },
    comCommonOpenfieldInfo() {
      return this.comCommon.openfieldInfo
    },
    comCommonLoading() {
      return this.comCommon.loading
    },
  },
  beforeMount() {
    this.$getOpenfieldTeam()
    this.$getOpenfieldFm()
    this.$getOpenfieldAccount()
    this.$getOpenfieldUrl()
    this.$getOpenfieldInfo()
  },
  methods: {
    handleToggleAccountPw() {
      this.showAccountPw = !this.showAccountPw
    },
    handleNavLinkClick(event, index) {
      this.$utilNaviLink(event, index)
    },
  },
}
</script>
