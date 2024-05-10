'use strict'

import { dbService } from './db.service.js'

const KEY = 'contacts'

export const contactService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
}

async function query(filterBy = {}) {
    var contacts = await dbService.query(KEY)

    if (!contacts || !contacts.length) {
        contacts = _createDefaultcontacts()
        await dbService.insert(KEY, contacts)
    }

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        contacts = contacts.filter(contact => regex.test(contact.name))
    }

    if (filterBy.minSpeed) {
        contacts = contacts.filter(contact => contact.speed >= filterBy.minSpeed)
    }
    return contacts
}

function get(id) {
    return dbService.get(KEY, id)
}

function remove(id) {
    return dbService.remove(KEY, id)
}

function save(contact) {
    if (contact._id) return dbService.put(KEY, contact)
    else return dbService.post(KEY, contact)
}

function getEmptyContact() {
    return {
        vendor: '',
        speed: 0,
    }
}

function _createDefaultcontacts() {
    return [
        _createcontact('bobo', '@bbb', '334'),
        _createcontact('koko', '@bbb', '4234'),
        _createcontact('lala', '@bbb', '3424'),
        _createcontact('shalom', '@bbb', '656565'),
    ]
}

function _createcontact(name, email, phone) {
    return {
        name,
        email,
        phone,
    }
}
