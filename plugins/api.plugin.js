export default ({ app }, inject) => {
  const SHEET_ID_AUTH = '인증번호 파일'
  const SHEET_ID_WM = '매니저 파일'
  const GID_EVENT = '742906448'
  const GID_DIARY = '1689023582'
  const GID_MENU_OPENFIELD = '654433702'
  const GID_MENU_SERVICE = '1812662618'
  const GID_MENU_BUSINESS = '966076346'
  const GID_OPENFIELD_TEAM = '953371323'
  const GID_OPENFIELD_FM = '1522834329'
  const GID_OPENFIELD_ACCOUNT = '1142503846'
  const GID_OPENFIELD_URL = '476852813'
  const GID_OPENFIELD_INFO = '1341887210'
  const GID_SERVICE_MEMBER = '1715800110'
  const GID_SERVICE_PROJECT = '650994132'
  const GID_SERVICE_ACCOUNT = '357419700'
  const GID_SERVICE_URL = '195647514'
  const GID_BUSINESS_MEMBER = '859253314'
  const GID_BUSINESS_PROJECT = '902242344'
  const GID_BUSINESS_ACCOUNT = '927497097'
  const GID_BUSINESS_URL = '906212814'
  // 인증번호
  const ApiAuth = `https://docs.google.com/spreadsheets/d/${SHEET_ID_AUTH}/gviz/tq`
  // 홈
  const ApiWorks = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq`
  const ApiEvent = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_EVENT}`
  const ApiDiary = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_DIARY}`
  const ApiMenuOpenfield = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_MENU_OPENFIELD}`
  const ApiMenuService = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_MENU_SERVICE}`
  const ApiMenuBusiness = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_MENU_BUSINESS}`
  // 회사명
  const ApiOpenfieldTeam = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_OPENFIELD_TEAM}`
  const ApiOpenfieldFm = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_OPENFIELD_FM}`
  const ApiOpenfieldAccount = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_OPENFIELD_ACCOUNT}`
  const ApiOpenfieldUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_OPENFIELD_URL}`
  const ApiOpenfieldInfo = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_OPENFIELD_INFO}`
  // 팀명
  const ApiServiceMember = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_SERVICE_MEMBER}`
  const ApiServiceProject = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_SERVICE_PROJECT}`
  const ApiServiceAccount = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_SERVICE_ACCOUNT}`
  const ApiServiceUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_SERVICE_URL}`
  // 팀명
  const ApiBusinessMember = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_BUSINESS_MEMBER}`
  const ApiBusinessProject = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_BUSINESS_PROJECT}`
  const ApiBusinessAccount = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_BUSINESS_ACCOUNT}`
  const ApiBusinessUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/gviz/tq?gid=${GID_BUSINESS_URL}`

  // ==========
  inject('api', async (url) => {
    return await app.$axios.get(url)
  })
  inject('apiAuth', async () => {
    return await app.$axios.get(ApiAuth)
  })
  inject('apiEdit', () => {
    return {
      urlWorks: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=0`,
      urlEvent: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_EVENT}`,
      urlDiary: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_DIARY}`,
      urlMenuOpenfield: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_MENU_OPENFIELD}`,
      urlMenuService: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_MENU_SERVICE}`,
      urlMenuBusiness: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_MENU_BUSINESS}`,
      urlOpenfieldTeam: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_OPENFIELD_TEAM}`,
      urlOpenfieldFm: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_OPENFIELD_FM}`,
      urlOpenfieldAccount: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_OPENFIELD_ACCOUNT}`,
      urlOpenfieldUrl: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_OPENFIELD_URL}`,
      urlOpenfieldInfo: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_OPENFIELD_INFO}`,
      urlServiceMember: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_SERVICE_MEMBER}`,
      urlServiceProject: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_SERVICE_PROJECT}`,
      urlServiceAccount: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_SERVICE_ACCOUNT}`,
      urlServiceUrl: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_SERVICE_URL}`,
      urlBusinessMember: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_BUSINESS_MEMBER}`,
      urlBusinessProject: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_BUSINESS_PROJECT}`,
      urlBusinessAccount: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_BUSINESS_ACCOUNT}`,
      urlBusinessUrl: `https://docs.google.com/spreadsheets/d/${SHEET_ID_WM}/edit#gid=${GID_BUSINESS_URL}`,
    }
  })
  inject('apiWorks', async () => {
    return await app.$axios.get(ApiWorks)
  })
  inject('apiEvent', async () => {
    return await app.$axios.get(ApiEvent)
  })
  inject('apiDiary', async () => {
    return await app.$axios.get(ApiDiary)
  })
  inject('apiMenuOpenfield', async () => {
    return await app.$axios.get(ApiMenuOpenfield)
  })
  inject('apiMenuService', async () => {
    return await app.$axios.get(ApiMenuService)
  })
  inject('apiMenuBusiness', async () => {
    return await app.$axios.get(ApiMenuBusiness)
  })
  inject('apiOpenfieldTeam', async () => {
    return await app.$axios.get(ApiOpenfieldTeam)
  })
  inject('apiOpenfieldFm', async () => {
    return await app.$axios.get(ApiOpenfieldFm)
  })
  inject('apiOpenfieldAccount', async () => {
    return await app.$axios.get(ApiOpenfieldAccount)
  })
  inject('apiOpenfieldUrl', async () => {
    return await app.$axios.get(ApiOpenfieldUrl)
  })
  inject('apiOpenfieldInfo', async () => {
    return await app.$axios.get(ApiOpenfieldInfo)
  })
  inject('apiServiceMember', async () => {
    return await app.$axios.get(ApiServiceMember)
  })
  inject('apiServiceProject', async () => {
    return await app.$axios.get(ApiServiceProject)
  })
  inject('apiServiceAccount', async () => {
    return await app.$axios.get(ApiServiceAccount)
  })
  inject('apiServiceUrl', async () => {
    return await app.$axios.get(ApiServiceUrl)
  })
  inject('apiBusinessMember', async () => {
    return await app.$axios.get(ApiBusinessMember)
  })
  inject('apiBusinessProject', async () => {
    return await app.$axios.get(ApiBusinessProject)
  })
  inject('apiBusinessAccount', async () => {
    return await app.$axios.get(ApiBusinessAccount)
  })
  inject('apiBusinessUrl', async () => {
    return await app.$axios.get(ApiBusinessUrl)
  })
}
