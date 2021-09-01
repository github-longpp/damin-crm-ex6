import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
    
        if (token) {
            console.log("token", token)
            config.headers["Auth-token"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


api.interceptors.response.use(res => {
    console.log("response", res.data)
    return res
}, async (error) => {

    const originalConfig = error.config;

    if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const rs = await refreshToken();
                console.log("rs", rs)
                const { accessToken } = rs.data;
                localStorage.setItem("accessToken", accessToken);
                api.defaults.headers["Auth-token"] = accessToken;

                return api(originalConfig);
            } catch (_error) {
                if (_error.response && _error.response.data) {
                    return Promise.reject(_error.response.data);
                }

                return Promise.reject(_error);
            }
        }

        if (error.response.status === 403 && error.response.data) {
            return Promise.reject(error.response.data);
        }
    }

    return Promise.reject(error);
}
);


async function refreshToken() {
    return await api.post('/auth/refreshToken', {
        'refreshToken': localStorage.getItem('refreshToken')
    })
}

export default api