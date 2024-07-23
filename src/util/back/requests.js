// import axios from "axios";

// const URL = "https://whalefederation.tech:6028/";
// const URL = "http://localhost:6028/";
// export const PAYMENT_URL = "https://checkout.whalefederation.tech";
// export const PAYMENT_URL = "https://crypto-payment-psi.vercel.app/";

// export const getToken = async ({ login, password }) => {
//   const authHeader = "Basic " + btoa(`${login}:${password}`);

//   try {
//     const response = await axios.post(
//       URL + "api/auth/token",
//       {},
//       {
//         headers: {
//           Authorization: authHeader,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getUserInfo = async (token) => {
//   try {
//     const response = await axios.get(URL + "api/users/by-token", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getTopUsers = async (token) => {
// try {
//   const response = await axios.get(URL + "api/users/top ", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// } catch (error) {
//   throw new Error(error);
// }
// };

// export const buyLottery = async (token, lottery) => {
// try {
//   const response = await axios.patch(
//     URL + "api/tables",
//     {
//       investModelLevel: level,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   if (response.status == 200) {
//     return true;
//   }
// } catch (error) {
//   return false;
// }

// };

//
export const getToken = async () => {
  return "test";
};

export const getUserInfo = async () => {
  return {
    transactions: [
      { name: "Name User", type: "plus", price: 100 },
      { name: "Name User", type: "plus", price: 100 },
      { name: "Name User", type: "minus", price: 200 },
      { name: "Name User", type: "plus", price: 100 },
      { name: "Name User", type: "minus", price: 100 },
      { name: "Name User", type: "plus", price: 40 },
      { name: "Name User", type: "plus", price: 100 },
      { name: "Name User", type: "minus", price: 200 },
      { name: "Name User", type: "plus", price: 100 },
      { name: "Name User", type: "minus", price: 100 },
      { name: "Name User", type: "plus", price: 40 },
      { name: "Name User", type: "plus", price: 100 },
    ],
    balance: 100,
    lottery: [
      { status: "locked", name: "Lottery 01", prize: 1480, price: 10 },
      { status: "open", name: "Lottery 02", prize: 2200, price: 20 },
      { status: "locked", name: "Lottery 03", prize: 2400, price: 30 },
      { status: "open", name: "Lottery 04", prize: 2800, price: 40 },
    ],
    url: "t.me/dsdasdasdasdsdssdsdssddddddddddddddddddddddddddddddd",
  };
};

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс виконано через 2 секунди");
    }, 1500);
  });
}

export const getTopUsers = async () => {
  await delayedPromise();
  return [
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
    { name: "Name User", price: 100 },
  ];
};

export const buyLottery = async () => {
  const test = await delayedPromise();
  return test;
};
