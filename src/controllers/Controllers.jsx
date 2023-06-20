import instance from "./instance";

export async function getMainPageHeader(tableId) {
    return await instance.get(`/get-header-data`, {params: {
            temporaryKey: tableId
        }})
}

export async function getSliderData(tableId) {
    return await instance.get(`/get-slider-data`, {params: {
            temporaryKey: tableId
        }} )
}

export async function getDishById(uuid) {
    return await instance.post(`/get-dish/${uuid}`);
}

export async function getDishesByCategory(categoryId) {
    return await instance.get(`/get-dish-by-category/${categoryId}`)
}

export async function getBranchIdByTempKey(tempKey) {
    return await instance.post(`/get-branch-id`, {}, {params: {temporaryKey: tempKey}});
}

export async function getTableUuidByTempKey(tempKey) {
    return await instance.post(`/get-table-uuid`, {}, {params: {temporaryKey: tempKey}});
}

export async function getDishesByEvent(eventUuid) {
    return await instance.post(`/get-dish-by-event/${eventUuid}` )
}

export async function getDishesByFilter(branchUuid, searchText, limit = 20, offset = 0, direction = 'asc') {
    return await instance.post(`/get-dish-by-filter`,
        {
            "limit": limit,
            "offset": offset,
            "searchText": searchText,
            "direction": direction
        }, {params: {branchUuid: branchUuid}})
}

export async function getCategories(branchUuid) {
    return await instance.post(`/categories`, {}, {params: {branchUuid: branchUuid}});
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
   return instance.post(`/add-order`, order).then();
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