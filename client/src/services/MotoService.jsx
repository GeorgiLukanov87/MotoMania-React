import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/motos';

export const getAll = () => request.get(baseUrl);
