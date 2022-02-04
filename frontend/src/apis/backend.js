const BASE_URL = process.env.REACT_APP_BACKEND_APP_URL;
const STORE_ID = localStorage.getItem('store_id')
export function getStoreProducts() {
    return fetch(`${BASE_URL}/catalog/products/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'id': STORE_ID
        }
    })
        .then(res => res.json())
}

export function searchMasterProducts(searchText) {
    return fetch(`${BASE_URL}/catalog/master/search?query=${searchText}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export function addProductToStore(products) {
    return fetch(`${BASE_URL}/catalog/products/add`, {
        method: 'POST',
        body: JSON.stringify(products),
        headers: {
            'Content-Type': 'application/json',
            'id': STORE_ID
        }
    });
}

export function addStore(store) {
    return fetch(`${BASE_URL}/store/create`, {
        method: 'POST',
        body: JSON.stringify(store),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text());
}

export function getStore(store_id) {
    return fetch(`${BASE_URL}/store/get?id=${store_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}
