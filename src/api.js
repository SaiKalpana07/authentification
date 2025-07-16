import axios from "axios";

export const saveData = async (payload) => {alert('hI')
  const URL = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await axios(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: payload,
    });
    console.log('response',response)
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const getResponse = await axios
    .get(URL)
    .then((response) =>
      console.log(response.data, "abcd")
    );
    console.log(getResponse,'get response')
  return getResponse;

  // const URL = "https://jsonplaceholder.typicode.com/users";
  // try {
  //   const response = axios.get(URL).then((response) => {
  //     console.log(response.data, "response get");
  //   });
  //   console.log('check working', axios.get(URL).then((response) => {
  //     console.log(response.data, "response get");
  //   }))
  //   console.log(response,'check response')
  //   return response
  // } catch (error) {
  //   throw error;
  // }
};

// export const getUsers = async () => {
//   const URL = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const response = axios.get(URL).then((response) => {
//       console.log(response.data, "response get");
//     });
//     console.log('check working', axios.get(URL).then((response) => {
//       console.log(response.data, "response get");
//     }))
//     console.log(response,'check response')
//     return response
//   } catch (error) {
//     throw error;
//   }
// };
