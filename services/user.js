import { BASE_PATH } from '../utils/constants'


//* REGISTER USER

export async function registerApi (formData){

  try {

    const url = `${BASE_PATH}/api/auth/local/register`;
    
    const params = {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) //envia la data en texto json y no objeto
    }

    const response = await fetch(url, params);
    const result = await response.json();

    return result;


  } catch (error) {
    console.log(error)
    return null;
  }
}



//* LOGIN USER

export async function loginApi (formData){

  try {

    const url = `${BASE_PATH}/api/auth/local`
    
    const params = {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    const response = await fetch(url, params);
    const result = await response.json();

    return result;

  } catch (error) {
    console.log(error)
    return null;
  }

}