import instance from "./instance";

export async function getMainPageHeader(tableId) {
    return await instance.get(`/get-header-data/${tableId}`)
}

export async function getSliderData(tableId) {
    return await instance.get(`/get-slider-data/${tableId}`)
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

export async function getOrderById(uuid) {
    return await instance.get(`/get-order-by-id/${uuid}`)
}

export function addOrder(order) {
    instance.post(`/add-order`, order).then();
}

export function deleteOrderById(orderId) {
    instance.post(`/delete-order-by-id/${orderId}`)
}

export async function getBasketById(basketId) {
    return await instance.get(`/get-basket-by-id/${basketId}`);
}

export function addBasket(basket) {
    instance.post(`add-basket`, basket).then();
}

export function deleteBasketById(basketId) {
    instance.post(`delete-basket-by-id/${basketId}`).then();
}