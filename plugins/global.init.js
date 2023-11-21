import Vue from 'vue'
import frag from 'vue-frag'
import ClientOnly from 'vue-client-only'

// directive
Vue.directive('frag', frag)

// component
Vue.component('ClientOnly', ClientOnly)
