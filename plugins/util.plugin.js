export default ({ app }, inject) => {
  const cloneDeep = process.client ? require('lodash.clonedeep') : null
  const debounce = process.client ? require('lodash.debounce') : null
  const throttle = process.client ? require('lodash.throttle') : null
  const queryString = process.client ? require('query-string') : null

  // Resource Url
  // Session Storage
  inject('setSessionStore', (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value))
  })
  inject('getSessionStore', (key) => {
    return JSON.parse(sessionStorage.getItem(key))
  })
  inject('removeSessionStore', (key) => {
    return sessionStorage.removeItem(key)
  })
  inject('clearSessionStore', () => {
    return sessionStorage.clear()
  })
  // Local Storage
  inject('setLocalStore', (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
  })
  inject('getLocalStore', (key) => {
    return JSON.parse(localStorage.getItem(key))
  })
  inject('removeLocalStore', (key) => {
    return localStorage.removeItem(key)
  })
  inject('clearLocalStore', () => {
    return localStorage.clear()
  })
  // Cookie
  inject('setCookie', (cname, cvalue, exdays) => {
    let expires = ''
    if (exdays) {
      const d = new Date()
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
      expires = 'expires=' + d.toUTCString()
    } else {
      expires = ''
    }
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  })
  inject('getCookie', (cname) => {
    if (!process.client) {
      return null
    }
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    const foundCookie = ca.find((c) => c.trim().indexOf(name) === 0)
    if (foundCookie) {
      return foundCookie.substring(name.length)
    } else {
      return ''
    }
  })
  inject('deleteCookie', (cname) => {
    document.cookie = cname + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  })
  // Get Deepcopy
  inject('utilDeepcopy', (data) => {
    return cloneDeep(data)
  })
  // Get Dom
  inject('utilDom', (string) => {
    return new DOMParser().parseFromString(string, 'text/html')
  })
  // Get String
  inject('utilString', (dom) => {
    const doctype = new XMLSerializer().serializeToString(dom.doctype)
    const lang = '<html lang="ko">'
    const html = dom.documentElement.innerHTML
    const result = doctype + lang + html
    return result
  })
  // Time Stamp
  inject('utilTimeStamp', (value = 0) => {
    const now = new Date().getTime() + value
    const result = now.toString(36)
    return result
  })
  // Id Stamp
  inject('utilIdStamp', (value = 0) => {
    return app.$utilTimeStamp(0, value)
  })
  // Comment Stamp
  inject('utilCommentStamp', (page, value = 0) => {
    return page + app.$utilTimeStamp(value)
  })
  // Random Stamp
  inject('utilRandomStamp', (max, value = 0) => {
    let random = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    for (let i = 0; i < max; i++) {
      random += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    const timestamp = app
      .$utilTimeStamp(value)
      .split('')
      .map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
      .join('')
    const result = random + timestamp
    return result
  })
  // Project Stamp
  inject('utilProjectStamp', (value = 0) => {
    return app.$utilRandomStamp(8, value)
  })
  // Page Stamp
  inject('utilPageStamp', (value = 0) => {
    return app.$utilRandomStamp(4, value)
  })
  // Block Stamp
  inject('utilBlockStamp', (value = 0) => {
    return app.$utilRandomStamp(2, value)
  })
  // Asset Stamp
  inject('utilAssetStamp', (value = 1) => {
    return app.$utilRandomStamp(2, value)
  })
  // Basic Stamp
  inject('utilBasicStamp', (value = 0) => {
    return app.$utilRandomStamp(1, value)
  })
  // Hour Stamp
  inject('utilHourStamp', () => {
    const now = new Date()
    now.setMinutes(0, 0, 0)
    const result = Math.floor(now.getTime() / 1000)
    return result
  })
  // Include Url
  inject('utilIncludeUrl', (type, url) => {
    if (type === 'link') {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = url
      return link
    }
    if (type === 'script') {
      const script = document.createElement('script')
      script.src = url
      return script
    }
  })
  // Include Code
  inject('utilIncludeCode', (type, code) => {
    if (type === 'style') {
      const style = document.createElement('style')
      style.textContent = code
      return style
    }
    if (type === 'script') {
      const script = document.createElement('script')
      script.textContent = code
      return script
    }
  })
  // Include Comment
  inject('utilIncludeComment', (comment) => {
    const result = document.createComment(comment)
    return result
  })
  // Get Ellipsis
  inject('utilEllipsis', (text, length, lastText) => {
    if (length === '' || length === null) {
      length = 100
    }
    if (lastText === '' || lastText === null) {
      lastText = '...'
    }
    if (text.length > length) {
      text = text.substr(0, length) + lastText
    }
    return text
  })
  // Get Parse
  inject('utilParse', (type, data) => {
    if (type === 'query') {
      return queryString.parse(data)
    } else if (type === 'json') {
      return JSON.parse(data)
    }
  })
  // Get Stringfy
  inject('utilStringfy', (type, data) => {
    if (type === 'query') {
      return queryString.stringify(data)
    } else if (type === 'json') {
      return JSON.stringify(data)
    }
  })
  // Get Parse Google
  inject('utilParseGoogle', (data) => {
    const from = data.indexOf('{')
    const to = data.lastIndexOf('}') + 1
    const jsonText = data.slice(from, to)
    const result = app.$utilParse('json', jsonText)
    return result
  })
  // Get Float
  inject('utilFloat', (value, digit = 0) => {
    const result = parseFloat(value.toFixed(digit))
    return result
  })
  // Get Two Digit
  inject('utilTwoDigit', (value) => {
    const result = ('0' + value).slice(-2)
    return result
  })
  // Get Is Object
  inject('utilLengthObject', (objectName) => {
    const result = Object.keys(objectName).length
    return result
  })
  // New Data
  inject('utilNewDate', () => {
    const date = new Date()
    const now = new Date(date.getTime())
    return now
  })
  // New Data
  inject('utilToday', () => {
    const date = new Date()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    const result = `${month}월 ${day}일`
    return result
  })
  // Elapsed Time
  inject('utilElapsedTime', (date) => {
    const start = new Date(date)
    const end = new Date()
    const diff = end - start
    const times = [
      { time: '분', milliSeconds: 1000 * 60 },
      { time: '시간', milliSeconds: 1000 * 60 * 60 },
      { time: '일', milliSeconds: 1000 * 60 * 60 * 24 },
      { time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30 },
      { time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365 },
    ].reverse()
    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds)
      if (betweenTime > 0) {
        return `${betweenTime}${value.time} 전`
      }
    }
    return '방금 전'
  })
  // Sort Date
  inject('utilSortDate', (array) => {
    const result = array.sort((a, b) => new Date(b.date) - new Date(a.date))
    return result
  })
  // Sort Modified
  inject('utilSortModified', (array) => {
    const result = array.sort((a, b) => new Date(b.modified) - new Date(a.modified))
    return result
  })
  // Replace Blank
  inject('utilReplaceBlank', (value) => {
    const result = value.replace(/\s/g, '')
    return result
  })
  // Replace Number
  inject('utilReplaceNumber', (value) => {
    const result = value.replace(/\D/g, '')
    return result
  })
  // Replace Name
  inject('utilReplaceName', (value, maxLength = 30) => {
    const checkSpecChar = /[{}[\]/?.,;:|) *~`!^+┼<>@#$%&'"\\(=|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi
    let result = checkSpecChar.test(value) ? value.substring(0, value.length - 1) : value
    if (result.length > maxLength) {
      result = result.substr(0, maxLength)
    }
    return result
  })
  // Replace Title
  inject('utilReplaceTitle', (value, maxLength = 60) => {
    const checkSpecChar = /[{}[\]/?.,;:|) *~`!^\-+┼<>@#$%&'"\\(=]/gi
    let result = checkSpecChar.test(value) ? value.substring(0, value.length - 1) : value
    if (result.length > maxLength) {
      result = result.substr(0, maxLength)
    }
    return result
  })
  // Replace Paragraph
  inject('utilReplaceParagraph', (value, maxLength = 100) => {
    const checkSpecChar = /[/?.,;:*~`!^&'"\\=]/gi
    let result = checkSpecChar.test(value) ? value.substring(0, value.length - 1) : value
    if (result.length > maxLength) {
      result = result.substr(0, maxLength)
    }
    return result
  })
  // Replace Classtitle
  inject('utilReplaceClasstitle', (value) => {
    const checkValidCharacters = /^[A-Za-z_-][A-Za-z0-9_-]*$/
    const removeInvalidCharacters = value && value.replace(/[^A-Za-z0-9_-]/g, '')
    const result = checkValidCharacters.test(removeInvalidCharacters) ? removeInvalidCharacters : ''
    return result
  })
  // Replace Ext
  inject('utilReplaceExt', (value) => {
    const result = value.replace(/^.*\./, '.')
    return result
  })
  // Validate Email
  inject('utilValidateEmail', (value) => {
    const checkEmail = /^[a-zA-Z0-9](?:[-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9](?:[-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/gi
    const result = checkEmail.test(value)
    return result
  })
  // Validate Phone
  inject('utilValidatePhone', (value) => {
    const checkPhone = value.replace(/\D/gi, '')
    const result = checkPhone.length >= 9 && checkPhone.length <= 11
    return result
  })
  // Validate Nickname
  inject('utilValidateNickname', (value) => {
    const checkSpecChar = /[{}[\]/?.,;:|) *~`!^\-+┼<>@#$%&'"\\(=]/gi
    const result = checkSpecChar.test(value) ? value.substring(0, value.length - 1) : value
    return result
  })
  // Validate Password
  inject('utilValidatePassword', (value) => {
    const checkPassword = /(?=.*\d)(?=.*[a-z]).{8,}/gi
    const result = checkPassword.test(value)
    return result
  })
  // Validate Authnum
  inject('utilValidateAuthnum', (value) => {
    const checkNumber = /\d{6}/gi
    const result = checkNumber.test(value)
    return result
  })
  // Validate Expire
  inject('utilValidateExpire', (value) => {
    const checkNumber = value.replace(/\D/g, '')
    const month = checkNumber.slice(0, 2)
    const year = checkNumber.slice(2, 4)
    if (checkNumber.length !== 4) {
      return false
    }
    const numericMonth = parseInt(month, 10)
    const numericYear = parseInt(year, 10)
    const result = numericMonth > 0 && numericMonth < 13 && numericYear >= 0 && numericYear < 100
    return result
  })
  // Validate Number
  inject('utilValidateNumber', (value, limit) => {
    const checkNumber = value.replace(/\D/g, '')
    if (checkNumber.length !== limit) {
      return false
    }
    const numericValue = parseInt(checkNumber, 10)
    const result = numericValue >= 0 && numericValue <= Math.pow(10, limit) - 1
    return result
  })
  // Format Bytes
  inject('utilFormatBytes', (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  })
  // Format Money
  inject('utilFormatMoney', (value) => {
    return value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  })
  // Format Date
  inject('utilFormatDate', (yyyyMMdd, type = 1) => {
    const year = yyyyMMdd.slice(0, 4)
    const month = yyyyMMdd.slice(4, 6)
    const day = yyyyMMdd.slice(6, 8)
    let result = ''
    if (type === 1) {
      result = `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`
    } else if (type === 2) {
      result = `${year}-${month}-${day}`
    }
    return result
  })
  inject('utilFormatDateTime', (yyyyMMddHHMmss) => {
    const year = yyyyMMddHHMmss.slice(0, 4)
    const month = yyyyMMddHHMmss.slice(4, 6)
    const day = yyyyMMddHHMmss.slice(6, 8)
    const hour = yyyyMMddHHMmss.slice(8, 10)
    const minute = yyyyMMddHHMmss.slice(10, 12)
    const second = yyyyMMddHHMmss.slice(12, 14)
    const result = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    return result
  })
  // Replace Last
  inject('utilReplaceLast', (string, pattern, replacement) => {
    const match = typeof pattern === 'string' ? pattern : (string.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0]
    if (!match) return string
    const last = string.lastIndexOf(match)
    return last !== -1 ? `${string.slice(0, last)}${replacement}${string.slice(last + match.length)}` : string
  })
  // Cowork Auth
  inject('utilCoworkAuth', (auth) => {
    return auth === 'OWNER' ? '소유자' : auth === 'EDITOR' ? '편집자' : '관람자'
  })
  // Remove Dataset
  inject('utilRemoveDataset', (dom, key) => {
    Object.keys(dom.dataset).forEach((item) => {
      if (item.startsWith(key)) {
        delete dom.dataset[item]
      }
    })
  })
  // Compare Array
  inject('utilCompareArray', (array1, array2) => {
    const stringArray1 = JSON.stringify(array1)
    const stringArray2 = JSON.stringify(array2)
    return stringArray1 === stringArray2
  })
  // Debounce
  inject('utilDebounce', (callback, delay) => {
    return debounce(callback, delay)
  })
  // Throttle
  inject('utilThrottle', (callback, delay) => {
    return throttle(callback, delay)
  })
  // Title Case
  inject('utilTitleCase', (string) => {
    return string.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  })
  // Is Mobile
  inject('utilIsMobile', () => {
    let isMobile = ''
    isMobile = window.matchMedia('(pointer:coarse)').matches
    if (isMobile) {
      const userAgent = navigator.userAgent.toLowerCase()
      const isIpad = /macintosh|ipad/.test(userAgent)
      const isSmTablet = /sm-t|gt-p/.test(userAgent)
      if (isIpad || isSmTablet) {
        isMobile = false
      }
    }
    return isMobile
  })
  // Reorder
  inject('utilReorder', (array, prop, firstValue, lastValue) => {
    const first = []
    const last = []
    const rest = []
    for (const item of array) {
      const itemProp = prop ? item[prop] : item
      if (itemProp === firstValue) {
        first.push(item)
      } else if (itemProp === lastValue) {
        last.push(item)
      } else {
        rest.push(item)
      }
    }
    return first.concat(rest, last)
  })
  // Clipboard
  inject('utilClipboard', (text) => {
    navigator.clipboard.writeText(text).then(() => app.$eventPopupAlert('URL이 클립보드에 복사되었습니다.'))
  })
  // Discount
  inject('utilDiscount', (value1, value2) => {
    const result = ((value1 - value2) / value1) * 100
    return result
  })
  // Stronger
  inject('utilStronger', (text) => {
    const result = text.replace(/\n/g, '<br>').replace(/\{/g, '<strong>').replace(/\}/g, '</strong>')
    return result
  })
  // Unique Key
  inject('utilUniqueKey', () => {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  })
  // D-day
  inject('utilDday', (day) => {
    const today = new Date()
    const targetDate = new Date(parseInt(day.substring(0, 4)), parseInt(day.substring(4, 6)) - 1, parseInt(day.substring(6, 8)))
    const timeDifference = targetDate - today
    const result = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
    return result
  })
  // Cal Progress
  inject('utilCalProgress', (startValue, endValue) => {
    const start = new Date(startValue)
    const prevStart = new Date(start.setDate(start.getDate() - 1))
    const end = new Date(endValue)
    const nextEnd = new Date(end.setDate(end.getDate() + 1))
    const now = new Date()
    const gapEndStart = nextEnd.getTime() - prevStart.getTime()
    const gapEndNow = nextEnd.getTime() - now.getTime()
    const cal = 1000 * 60 * 60 * 24
    const dayTotal = Math.floor(gapEndStart / cal)
    const dayRest = Math.ceil(gapEndNow / cal)
    const dayProg = Math.floor(100 - (dayRest / dayTotal) * 100)
    const dayProgPer = dayProg > 100 ? 100 : dayProg < 0 || isNaN(dayProg) ? 0 : dayProg
    return dayProgPer
  })
  // Nav Link
  inject('utilNaviLink', (event, index) => {
    const currentNavLink = event.target
    const navLinkList = document.querySelectorAll('.nav-link')
    const h2Elements = document.querySelectorAll('h2')
    navLinkList.forEach((element) => element.classList.remove('active'))
    currentNavLink.classList.add('active')
    requestAnimationFrame(() => {
      const elementRect = h2Elements[index].getBoundingClientRect()
      const scrollY = window.scrollY
      const scrollTo = elementRect.top + scrollY - 120
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      })
    })
  })
}
