import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/motos';

export const getAll = () => request.get(baseUrl);

export const getOne = (motoId) => request.get(`${baseUrl}/${motoId}`);

export const addMoto = (data) => request.post(baseUrl, data);

export const deleteMoto = (motoId) => request.del(`${baseUrl}/${motoId}`);

export const editMoto = (data, motoId) => request.patch(`${baseUrl}/${motoId}`, data);
