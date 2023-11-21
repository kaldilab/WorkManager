<template>
  <div v-frag>
    <Wrap>
      <div class="auth">
        <form @submit.prevent="handleSubmitAuth">
          <div class="form-set">
            <h3 class="form-title">인증번호</h3>
            <div class="form-addon">
              <div class="form-inputbox" :class="`form-feedback feedback-${validateInputNumber}`">
                <input
                  v-model="inputNumber"
                  class="form-control input-s48"
                  type="password"
                  placeholder="인증번호를 입력하세요"
                  aria-label="인증번호"
                  required
                />
              </div>
              <button class="btn btn-s48 btn-basic" type="submit">확인</button>
            </div>
            <p v-if="validateInputNumber === 'invalid'" class="form-message message-invalid">인증번호 틀렸다리...🐒</p>
          </div>
        </form>
      </div>
    </Wrap>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      validation: 0,
      inputNumber: '',
      validateInputNumber: '',
    }
  },
  head() {
    return {
      title: '인증 | 워크매니저',
    }
  },
  computed: {
    authNumber() {
      return this.$store.state.common.auth
    },
  },
  methods: {
    handleSubmitAuth() {
      if (this.inputNumber === this.authNumber) {
        this.$setLocalStore('auth', this.inputNumber)
        this.$router.push('/')
      } else {
        this.validateInputNumber = 'invalid'
      }
    },
  },
}
</script>
