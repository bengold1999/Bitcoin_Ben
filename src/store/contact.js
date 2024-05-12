import { contactService } from '@/services/contact.service'

export default {
    state() {
        return {
            contacts: []
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(c => c._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }, { filterBy }){
            try{
            const contacts = await contactService.query(filterBy)
            commit({type:'setContacts',contacts})
            }catch (err){
                console.log(err)  
                throw `Couldn't load contacts` 
            }
        },
        async removeContact({ commit }, { contactId }) {
            try {
                await contactService.remove(contactId)
                commit({ type: 'removecontact', contactId })
            } catch(err) {
                console.log(err)
                throw `Couldn't remove contact`
            }
        }
    },
    getters: {
        contacts(state, getters, rootGetters) { return state.contacts }
    }
    
}