import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const Token = process.env.NEXT_PUBLIC_API_TOKEN;
const clienteId = process.env.NEXT_PUBLIC_CLIENTE_ID;

const getClient = {
  getClientData: async () => {
    const getUrl = `${baseUrl}/client`;
    const params = {
      CLIENTEID: clienteId,
      TABLA: 1,
    };

    const headers = {
      Authorization: `Bearer ${Token}`,
    };

    try {
      const response = await axios.get(getUrl, { params, headers });
      return response.data;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      throw error;
    }
  },
};

export default getClient;
