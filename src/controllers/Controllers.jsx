import instance from "./instance";

export async function getMainPageHeader() {
    return await instance.get(`/get-header-data`)
}

export async function getSliderData() {
    return await instance.get(`/get-slider-data`)
}

export async function getDishById(uuid) {
    return await instance.post(`/get-dish/${uuid}`);
}

export async function getDishesByCategory(categoryId) {
    return await instance.get(`/get-dish-by-category/${categoryId}`)
}

export async function getDishesByEvent(eventUuid) {
    return await instance.post(`/get-dish-by-event/${eventUuid}`)
}

export async function getDishesByFilter(searchText, limit = 10, offset = 0, direction = 'asc') {
    return await instance.post(`/get-dish-by-filter`,
        {
            "limit": limit,
            "offset": offset,
            "searchText": searchText,
            "direction": direction
        })
}

export async function getCategories() {
    return await instance.get(`/categories`);
}

export async function getCategoryById(id) {
    return await instance.get(`/get-category-by-id/${id}`)
}

export async function getEventById(uuid) {
    return await instance.get(`/get-event-by-id/${uuid}`)
}

