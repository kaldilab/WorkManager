export default ({ app }, inject) => {
  // 인증번호
  inject('getAuth', async () => {
    await app
      .$apiAuth()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = dataTable[0].c[0].f
            app.store.dispatch('actionCommonAuth', { data: result })
          }
        }
      })
      .catch((error) => console.log(error))
  })

  // 업무
  inject('getWorks', async () => {
    app.$commonLoading(true)
    await app
      .$apiWorks()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              const itemName = item.c[0] ? item.c[0].v : '-'
              const itemWork = item.c[1] ? item.c[1].v : '-'
              const itemOngoing = item.c[2] ? item.c[2].v : '-'
              const itemStart = item.c[3] ? item.c[3].f : ''
              const itemEnd = item.c[4] ? item.c[4].f : ''
              const itemProgPer = itemStart && itemEnd ? app.$utilCalProgress(itemStart, itemEnd) : 0
              const itemProgPerBadge = itemProgPer === 100 ? 'secondary' : itemProgPer === 0 ? 'light' : 'warning'
              const itemPlan = item.c[5] ? item.c[5].v : '-'
              result.push({
                name: itemName,
                work: itemWork && app.$utilStronger(itemWork),
                ongoing: itemOngoing && app.$utilStronger(itemOngoing),
                start: itemStart,
                end: itemEnd,
                progress: itemProgPer,
                progressBadge: itemProgPerBadge,
                plan: itemPlan && app.$utilStronger(itemPlan),
              })
            })
            app.store.dispatch('actionCommonWorks', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 이벤트
  inject('getEvent', async () => {
    app.$commonLoading(true)
    await app
      .$apiEvent()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              const itemTitle = item.c[0] ? item.c[0].v : '-'
              const itemDate = item.c[1] ? item.c[1].f : ''
              const itemTime = item.c[2] ? item.c[2].f : ''
              const itemMemo = item.c[3] ? item.c[3].v : '-'
              result.push({
                title: itemTitle,
                start: itemDate,
                time: itemTime,
                memo: itemMemo && app.$utilStronger(itemMemo),
              })
            })
            app.store.dispatch('actionCommonEvent', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 다이어리
  inject('getDiary', async () => {
    app.$commonLoading(true)
    await app
      .$apiDiary()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemName = item.c[0] ? item.c[0].v : '-'
                const itemDesc = item.c[1] ? item.c[1].v : '-'
                const itemComment = item.c[2] ? item.c[2].v : '-'
                const itemImage = item.c[3] ? item.c[3].v : ''
                result.push({
                  name: itemName,
                  desc: itemDesc && app.$utilStronger(itemDesc),
                  comment: itemComment && app.$utilStronger(itemComment),
                  image: itemImage,
                })
              }
            })
            app.store.dispatch('actionCommonDiary', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 메뉴 회사명
  inject('getMenuOpenfield', async () => {
    app.$commonLoading(true)
    await app
      .$apiMenuOpenfield()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemMenu = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : ''
                result.push({
                  menu: itemMenu,
                  link: itemLink,
                })
              }
            })
            app.store.dispatch('actionCommonMenuOpenfield', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 메뉴 팀명
  inject('getMenuService', async () => {
    app.$commonLoading(true)
    await app
      .$apiMenuService()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemMenu = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : ''
                result.push({
                  menu: itemMenu,
                  link: itemLink,
                })
              }
            })
            app.store.dispatch('actionCommonMenuService', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 메뉴 팀명
  inject('getMenuBusiness', async () => {
    app.$commonLoading(true)
    await app
      .$apiMenuBusiness()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemMenu = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : ''
                result.push({
                  menu: itemMenu,
                  link: itemLink,
                })
              }
            })
            app.store.dispatch('actionCommonMenuBusiness', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 회사명 팀
  inject('getOpenfieldTeam', async () => {
    app.$commonLoading(true)
    await app
      .$apiOpenfieldTeam()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemTeam = item.c[0] ? item.c[0].v : '-'
                const itemWork = item.c[1] ? item.c[1].v : '-'
                const itemTo = item.c[2] ? item.c[2].v : '-'
                const itemMemo = item.c[3] ? item.c[3].v : '-'
                result.push({
                  team: itemTeam,
                  work: itemWork && app.$utilStronger(itemWork),
                  to: itemTo && app.$utilStronger(itemTo),
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonOpenfieldTeam', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 회사명 FM
  inject('getOpenfieldFm', async () => {
    app.$commonLoading(true)
    await app
      .$apiOpenfieldFm()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemCat = item.c[0] ? item.c[0].v : '-'
                const itemRule = item.c[1] ? item.c[1].v : '-'
                const itemMemo = item.c[2] ? item.c[2].v : '-'
                result.push({
                  cat: itemCat,
                  rule: itemRule && app.$utilStronger(itemRule),
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonOpenfieldFm', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 회사명 계정
  inject('getOpenfieldAccount', async () => {
    app.$commonLoading(true)
    await app
      .$apiOpenfieldAccount()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemAccount = item.c[0] ? item.c[0].v : '-'
                const itemId = item.c[1] ? item.c[1].v : '-'
                const itemPw = item.c[2] ? item.c[2].v : '-'
                const itemLink = item.c[3] ? item.c[3].v : ''
                const itemMemo = item.c[4] ? item.c[4].v : '-'
                result.push({
                  account: itemAccount,
                  id: itemId,
                  pw: itemPw,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonOpenfieldAccount', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 회사명 URL
  inject('getOpenfieldUrl', async () => {
    app.$commonLoading(true)
    await app
      .$apiOpenfieldUrl()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemName = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : '-'
                const itemMemo = item.c[2] ? item.c[2].v : '-'
                result.push({
                  name: itemName,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonOpenfieldUrl', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 회사명 부가정보
  inject('getOpenfieldInfo', async () => {
    app.$commonLoading(true)
    await app
      .$apiOpenfieldInfo()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemTitle = item.c[0] ? item.c[0].v : '-'
                const itemInfo = item.c[1] ? item.c[1].v : '-'
                result.push({
                  title: itemTitle,
                  info: itemInfo && app.$utilStronger(itemInfo),
                })
              }
            })
            app.store.dispatch('actionCommonOpenfieldInfo', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명
  inject('getServiceMember', async () => {
    app.$commonLoading(true)
    await app
      .$apiServiceMember()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemRole = item.c[0] ? item.c[0].v : '-'
                const itemWork = item.c[1] ? item.c[1].v : '-'
                const itemMember = item.c[2] ? item.c[2].v : '-'
                result.push({
                  role: itemRole,
                  work: itemWork && app.$utilStronger(itemWork),
                  member: itemMember && app.$utilStronger(itemMember),
                })
              }
            })
            app.store.dispatch('actionCommonServiceMember', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 프로젝트
  inject('getServiceProject', async () => {
    app.$commonLoading(true)
    await app
      .$apiServiceProject()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              const itemProject = item.c[0] ? item.c[0].v : '-'
              const itemStart = item.c[1] ? item.c[1].f : ''
              const itemEnd = item.c[2] ? item.c[2].f : ''
              const itemProgPer = itemStart && itemEnd ? app.$utilCalProgress(itemStart, itemEnd) : 0
              const itemProgPerBadge = itemProgPer === 100 ? 'secondary' : itemProgPer === 0 ? 'light' : 'warning'
              const itemLink = item.c[3] ? item.c[3].v : ''
              const itemMemo = item.c[4] ? item.c[4].v : '-'
              result.push({
                project: itemProject && app.$utilStronger(itemProject),
                start: itemStart,
                end: itemEnd,
                progress: itemProgPer,
                progressBadge: itemProgPerBadge,
                link: itemLink,
                memo: itemMemo && app.$utilStronger(itemMemo),
              })
            })
            app.store.dispatch('actionCommonServiceProject', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 계정
  inject('getServiceAccount', async () => {
    app.$commonLoading(true)
    await app
      .$apiServiceAccount()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemAccount = item.c[0] ? item.c[0].v : '-'
                const itemId = item.c[1] ? item.c[1].v : '-'
                const itemPw = item.c[2] ? item.c[2].v : '-'
                const itemLink = item.c[3] ? item.c[3].v : ''
                const itemMemo = item.c[4] ? item.c[4].v : '-'
                result.push({
                  account: itemAccount,
                  id: itemId,
                  pw: itemPw,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonServiceAccount', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 URL
  inject('getServiceUrl', async () => {
    app.$commonLoading(true)
    await app
      .$apiServiceUrl()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemName = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : '-'
                const itemMemo = item.c[2] ? item.c[2].v : '-'
                result.push({
                  name: itemName,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonServiceUrl', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명
  inject('getBusinessMember', async () => {
    app.$commonLoading(true)
    await app
      .$apiBusinessMember()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemRole = item.c[0] ? item.c[0].v : '-'
                const itemWork = item.c[1] ? item.c[1].v : '-'
                const itemMember = item.c[2] ? item.c[2].v : '-'
                result.push({
                  role: itemRole,
                  work: itemWork && app.$utilStronger(itemWork),
                  member: itemMember && app.$utilStronger(itemMember),
                })
              }
            })
            app.store.dispatch('actionCommonBusinessMember', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 프로젝트
  inject('getBusinessProject', async () => {
    app.$commonLoading(true)
    await app
      .$apiBusinessProject()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              const itemProject = item.c[0] ? item.c[0].v : '-'
              const itemStart = item.c[1] ? item.c[1].f : ''
              const itemEnd = item.c[2] ? item.c[2].f : ''
              const itemProgPer = itemStart && itemEnd ? app.$utilCalProgress(itemStart, itemEnd) : 0
              const itemProgPerBadge = itemProgPer === 100 ? 'secondary' : itemProgPer === 0 ? 'light' : 'warning'
              const itemLink = item.c[3] ? item.c[3].v : ''
              const itemMemo = item.c[4] ? item.c[4].v : '-'
              result.push({
                project: itemProject && app.$utilStronger(itemProject),
                start: itemStart,
                end: itemEnd,
                progress: itemProgPer,
                progressBadge: itemProgPerBadge,
                link: itemLink,
                memo: itemMemo && app.$utilStronger(itemMemo),
              })
            })
            app.store.dispatch('actionCommonBusinessProject', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 계정
  inject('getBusinessAccount', async () => {
    app.$commonLoading(true)
    await app
      .$apiBusinessAccount()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemAccount = item.c[0] ? item.c[0].v : '-'
                const itemId = item.c[1] ? item.c[1].v : '-'
                const itemPw = item.c[2] ? item.c[2].v : '-'
                const itemLink = item.c[3] ? item.c[3].v : ''
                const itemMemo = item.c[4] ? item.c[4].v : '-'
                result.push({
                  account: itemAccount,
                  id: itemId,
                  pw: itemPw,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonBusinessAccount', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 팀명 URL
  inject('getBusinessUrl', async () => {
    app.$commonLoading(true)
    await app
      .$apiBusinessUrl()
      .then((response) => {
        const responseData = response.data
        const parseData = app.$utilParseGoogle(responseData)
        if (parseData.status === 'ok') {
          const dataTable = parseData.table.rows
          if (dataTable.length) {
            const result = []
            dataTable.forEach((item, index) => {
              if (index > 0) {
                const itemName = item.c[0] ? item.c[0].v : '-'
                const itemLink = item.c[1] ? item.c[1].v : '-'
                const itemMemo = item.c[2] ? item.c[2].v : '-'
                result.push({
                  name: itemName,
                  link: itemLink,
                  memo: itemMemo && app.$utilStronger(itemMemo),
                })
              }
            })
            app.store.dispatch('actionCommonBusinessUrl', { data: result })
          }
        }
      })
      .finally(() => app.$commonLoading(false))
      .catch((error) => console.log(error))
  })

  // 로딩
  inject('commonLoading', (value) => {
    app.store.dispatch('actionCommonLoading', { data: value })
  })
}
