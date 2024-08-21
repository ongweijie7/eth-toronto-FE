import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
})

export const fetchGuns = async (address) => {
  try {
    const response = await httpClient.get('/weapons/guns', {
      params: {
        ownerAddress: address
      }
    })
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const registerGun = async (serialNum, address) => {
  try {
    const response = await httpClient.post('/weapons/register-gun', {
      serialNum,
      address
    })
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchHistory = async (serialNum) => {
  try {
    const response = await httpClient.get('/weapons/history', {
      params: {
        serialNum: serialNum
      }
    })
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchRegisteredGuns = async (address) => {
  try {
    const response = await httpClient.get('/weapons/registered-guns')
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const transferOwnership = async (serialNumber, oldAddress, newAddress) => {
  try {
    const response = await httpClient.put('/weapons/transfer-ownership', {
      serialNumber,
      oldAddress,
      newAddress
    })
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

