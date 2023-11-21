export const state = () => ({
  auth: '',
  works: [],
  event: [],
  diary: [],
  menuOpenfield: [],
  menuService: [],
  menuBusiness: [],
  openfieldTeam: [],
  openfieldFm: [],
  openfieldAccount: [],
  openfieldUrl: [],
  openfieldInfo: [],
  serviceMember: [],
  serviceProject: [],
  serviceAccount: [],
  serviceUrl: [],
  businessMember: [],
  businessProject: [],
  businessAccount: [],
  businessUrl: [],
  loading: false,
})

export const mutations = {
  mutationAuth(state, payload) {
    state.auth = payload
  },
  mutationWorks(state, payload) {
    state.works = payload
  },
  mutationEvent(state, payload) {
    state.event = payload
  },
  mutationDiary(state, payload) {
    state.diary = payload
  },
  mutationMenuOpenfield(state, payload) {
    state.menuOpenfield = payload
  },
  mutationMenuService(state, payload) {
    state.menuService = payload
  },
  mutationMenuBusiness(state, payload) {
    state.menuBusiness = payload
  },
  mutationOpenfieldTeam(state, payload) {
    state.openfieldTeam = payload
  },
  mutationOpenfieldFm(state, payload) {
    state.openfieldFm = payload
  },
  mutationOpenfieldAccount(state, payload) {
    state.openfieldAccount = payload
  },
  mutationOpenfieldUrl(state, payload) {
    state.openfieldUrl = payload
  },
  mutationOpenfieldInfo(state, payload) {
    state.openfieldInfo = payload
  },
  mutationServiceMember(state, payload) {
    state.serviceMember = payload
  },
  mutationServiceProject(state, payload) {
    state.serviceProject = payload
  },
  mutationServiceAccount(state, payload) {
    state.serviceAccount = payload
  },
  mutationServiceUrl(state, payload) {
    state.serviceUrl = payload
  },
  mutationBusinessMember(state, payload) {
    state.businessMember = payload
  },
  mutationBusinessAccount(state, payload) {
    state.businessAccount = payload
  },
  mutationBusinessProject(state, payload) {
    state.businessProject = payload
  },
  mutationBusinessUrl(state, payload) {
    state.businessUrl = payload
  },
  mutationLoading(state, payload) {
    state.loading = payload
  },
}
