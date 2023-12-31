import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';
// const baseUrl = 'https://sell-moto-mania-server.onrender.com/users';


export const login = async (email, password) =>
    request.post(`${baseUrl}/login`, { email, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;

    } catch (error) {
        console(error)
    }
}

export const register = async (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })