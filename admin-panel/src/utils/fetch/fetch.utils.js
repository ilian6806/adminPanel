import 'unfetch/polyfill'

function send(endpoint, { data, ...customConfig} = {}) {

    const headers = { 'content-type': 'application/json' };
    const config = {
        method: data ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (data) {
        config.body = JSON.stringify(data)
    }

    return window
        .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                const errorMessage = await response.text();
                return Promise.reject(new Error(errorMessage))
            }
        });
}

export default send;