import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/motos';

export const getAll = () => request.get(baseUrl);

export const addMoto = (data) => request.post(baseUrl,data);

export const deleteMoto = (motoId) => request.del(`${baseUrl}/${motoId}`);