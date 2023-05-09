import axios from "axios";

const api = 'https://order-automation-debug-server.onrender.com/api'

export async function getMainPageHeader() {
    return await axios.get(`${api}/get-header-data`)
}

export async function getSliderData() {
    return await axios.get(`${api}/get-slider-data`)
}

export async function getDishById(uuid) {
    return await axios.post(`${api}/get-dish/${uuid}`);
}

export async function getDishesByCategory(categoryId) {
    return await axios.get(`${api}/get-dish-by-category/${categoryId}`)
}

export async function getDishesByEvent(eventUuid) {
    return await axios.post(`${api}/get-dish-by-event/${eventUuid}`)
}

export async function getDishesByFilter(searchText, limit = 10, offset = 0, direction = 'asc') {
    return await axios.post(`${api}/get-dish-by-filter`,
        {
            "limit": limit,
            "offset": offset,
            "searchText": searchText,
            "direction": direction
        })
}

export async function getCategories() {
    return await axios.get(`${api}/categories`);
}


export async function getEventById(uuid) {
    return await axios.get(`${api}/get-event-by-id/${uuid}`)
}


