import getConfig from "next/config";
export const { publicRuntimeConfig } = getConfig();

export const apiUrl = publicRuntimeConfig.API_URL;
export const bearerToken = publicRuntimeConfig.BEARER_TOKEN;
export const clienteId = publicRuntimeConfig.CLIENTE_ID;