<template>
  <div v-frag>
    <Wrap>
      <Header />
      <Main>
        <ul class="nav nav-tabs main__nav">
          <li class="nav-item">
            <button class="nav-link active" @click="handleNavLinkClick($event, 0)">프로젝트</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 1)">URL</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 2)">계정</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="handleNavLinkClick($event, 3)">팀원</button>
          </li>
        </ul>
        <div class="business">
          <client-only>
            <div v-if="!comCommonLoading" v-frag>
              <h2>
                프로젝트
                <a class="fs-4 co-brand" :href="$apiEdit().urlBusinessProject" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 30%" />
                  <col style="width: 10%" />
                  <col style="width: 10%" />
                  <col style="width: 15%" />
                  <col style="width: 5%" />
                  <col style="width: 25%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">프로젝트</th>
                    <th scope="col">시작</th>
                    <th scope="col">종료</th>
                    <th scope="col">진행률</th>
                    <th scope="col">링크</th>
                    <th scope="col">메모</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonBusinessProject" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="bg-c1" v-html="item.project"></td>
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
                    <td>
                      <a v-if="item.link" :href="item.link" target="_blank" title="보기">🚀</a>
                    </td>
                    <td v-html="item.memo"></td>
                  </tr>
                </tbody>
              </table>
              <h2>
                URL
                <a class="fs-4 co-brand" :href="$apiEdit().urlBusinessUrl" target="_blank" title="편집">✏️</a>
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
                  <tr v-for="(item, index) in comCommonBusinessUrl" :key="index">
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
                <a class="fs-4 co-brand" :href="$apiEdit().urlBusinessAccount" target="_blank" title="편집">✏️</a>
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
                  <tr v-for="(item, index) in comCommonBusinessAccount" :key="index">
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
                팀원
                <a class="fs-4 co-brand" :href="$apiEdit().urlBusinessMember" target="_blank" title="편집">✏️</a>
              </h2>
              <table class="table table-bordered">
                <colgroup>
                  <col style="width: *" />
                  <col style="width: 30%" />
                  <col style="width: 30%" />
                  <col style="width: 30%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">업무</th>
                    <th scope="col">담당자</th>
                  </tr>
                </thead>
                <tbody class="fs-4">
                  <tr v-for="(item, index) in comCommonBusinessMember" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td v-html="item.role"></td>
                    <td v-html="item.work"></td>
                    <td class="bg-c1" v-html="item.member"></td>
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
  name: 'BusinessPage',
  data() {
    return {
      showAccountPw: false,
    }
  },
  head() {
    return {
      title: '팀명 | 워크매니저',
    }
  },
  computed: {
    comCommon() {
      return this.$store.state.common
    },
    comCommonBusinessMember() {
      return this.comCommon.businessMember
    },
    comCommonBusinessProject() {
      return this.comCommon.businessProject
    },
    comCommonBusinessAccount() {
      return this.comCommon.businessAccount
    },
    comCommonBusinessUrl() {
      return this.comCommon.businessUrl
    },
    comCommonLoading() {
      return this.comCommon.loading
    },
  },
  beforeMount() {
    this.$getBusinessMember()
    this.$getBusinessProject()
    this.$getBusinessAccount()
    this.$getBusinessUrl()
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
