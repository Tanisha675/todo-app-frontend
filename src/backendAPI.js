import axios from 'axios';
const host = "https://todo-app-backend-cz08.onrender.com";

async function callCreateApi(apipath, body) {
  try {
    const response = await axios.post(host + apipath, body);
    console.log(`callCreateApi response ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    alert(`api call got failed, error: ${error}`);
    return null;
  }
}

async function callAllApi(apipath) {
  try {
    const response = await axios.get(host + apipath);
    console.log(`callApi response ${JSON.stringify(response.data)}`);
    return response.data;   
  } catch (error) {
    alert(`callApi call got failed, error ${error}`);
    return [];
  }
}

async function callUpdateApi(apipath, params, body) {
  return await axios.patch(host + apipath, body, { params })
    .then(response => {
      console.log(`callUpdateApi response ${JSON.stringify(response.data)}`);
      return response.data;
    })
    .catch(error => {
      alert(`api call got failed, error: ${error}`);
      return null;
    });
}


async function callDeleteApi(apipath, params) {
  try {
    const response = await axios.delete(host + apipath, { params });
    console.log(`callDeleteApi response ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    alert(`api call failed, error: ${error}`);
    return null;
  }
}

export { callCreateApi, callAllApi, callUpdateApi, callDeleteApi };
