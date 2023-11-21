export default {
  actions: {
    actionCommonAuth({ commit }, { data }) {
      commit('common/mutationAuth', data)
    },
    actionCommonWorks({ commit }, { data }) {
      commit('common/mutationWorks', data)
    },
    actionCommonEvent({ commit }, { data }) {
      commit('common/mutationEvent', data)
    },
    actionCommonDiary({ commit }, { data }) {
      commit('common/mutationDiary', data)
    },
    actionCommonMenuOpenfield({ commit }, { data }) {
      commit('common/mutationMenuOpenfield', data)
    },
    actionCommonMenuService({ commit }, { data }) {
      commit('common/mutationMenuService', data)
    },
    actionCommonMenuBusiness({ commit }, { data }) {
      commit('common/mutationMenuBusiness', data)
    },
    actionCommonOpenfieldTeam({ commit }, { data }) {
      commit('common/mutationOpenfieldTeam', data)
    },
    actionCommonOpenfieldFm({ commit }, { data }) {
      commit('common/mutationOpenfieldFm', data)
    },
    actionCommonOpenfieldAccount({ commit }, { data }) {
      commit('common/mutationOpenfieldAccount', data)
    },
    actionCommonOpenfieldUrl({ commit }, { data }) {
      commit('common/mutationOpenfieldUrl', data)
    },
    actionCommonOpenfieldInfo({ commit }, { data }) {
      commit('common/mutationOpenfieldInfo', data)
    },
    actionCommonServiceMember({ commit }, { data }) {
      commit('common/mutationServiceMember', data)
    },
    actionCommonServiceProject({ commit }, { data }) {
      commit('common/mutationServiceProject', data)
    },
    actionCommonServiceAccount({ commit }, { data }) {
      commit('common/mutationServiceAccount', data)
    },
    actionCommonServiceUrl({ commit }, { data }) {
      commit('common/mutationServiceUrl', data)
    },
    actionCommonBusinessMember({ commit }, { data }) {
      commit('common/mutationBusinessMember', data)
    },
    actionCommonBusinessProject({ commit }, { data }) {
      commit('common/mutationBusinessProject', data)
    },
    actionCommonBusinessAccount({ commit }, { data }) {
      commit('common/mutationBusinessAccount', data)
    },
    actionCommonBusinessUrl({ commit }, { data }) {
      commit('common/mutationBusinessUrl', data)
    },
    actionCommonLoading({ commit }, { data }) {
      commit('common/mutationLoading', data)
    },
  },
}
