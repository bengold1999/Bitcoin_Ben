import { createStore } from 'vuex'

import contact from './modules/contact.js'

export default createStore({
    strict: true,
    modules: {
        contact,
    }
})
