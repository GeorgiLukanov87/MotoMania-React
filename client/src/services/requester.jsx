import formatDate from "../utils/formatData";

export const request = async (method, url, data) => {
    const createdAt = formatDate(new Date());

    try {
        const user = localStorage.getItem('auth');
        const auth = user ? JSON.parse(user) : {};

        let headers = {}

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ ...data, auth, createdAt })
            })
        }

        const response = await buildRequest;
        const result = await response.json();

        console.log(result);
        return result;

    } catch (error) {
        console.log(error)
    }
};

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const patch = request.bind({}, "PATCH");
export const put = request.bind({}, "PUT");
export const del = request.bind({}, "DELETE");
