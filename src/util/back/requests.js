import axios from "axios";

const URL = "https://utilitywhalefederation.site:6034/";
// const URL = "http://localhost:6028/";
// export const PAYMENT_URL = "https://checkout.utilitywhalefederation.site";
export const PAYMENT_URL = "https://lottery-payment.vercel.app/";

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
//     return response.data.accessToken;
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
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getTopUsers = async (token) => {
//   try {
//     const response = await axios.get(URL + "api/users/top ", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const buyLottery = async (token, lottery) => {
//   try {
//     const response = await axios.patch(
//       URL + "api/tables",
//       {
//         investModelLevel: lottery,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     if (response.status == 200) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }
// };

//
export const getToken = async () => {
  return "test";
};

export const getUserInfo = async () => {
  return {
    id: 3,
    login: "u1",
    name: "Name Test1",
    username: "u1",
    reflink: null,
    balanceAmount: 0.01,
    investModels: [
      {
        id: 11,
        naming: "Private",
        priceAmount: 10,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "AVAILABLE",
        investModelLevel: "LEVEL_1",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:46.874446",
      },
      {
        id: 12,
        naming: "Lvl 1",
        priceAmount: 200,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_2",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:46.98856",
      },
      {
        id: 13,
        naming: "Lvl 2",
        priceAmount: 170,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_3",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.106525",
      },
      {
        id: 14,
        naming: "Lvl 3",
        priceAmount: 130,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_4",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.21934",
      },
      {
        id: 15,
        naming: "Lvl 4",
        priceAmount: 110,
        trendingStatus: "MEDIUM",
        partnerBonusAmount: 0,
        mainBonusAmount: 0,
        lostRefIncomeAmount: 0,
        totalPrizeAmount: 0,
        investModelStatus: "LOCKED",
        investModelLevel: "LEVEL_5",
        unlockDate: null,
        createdAt: "2024-07-24T17:58:47.346111",
      },
    ],
    transactions: [
      {
        transactionAmount: 0.01,
        description: "Encouraging bonus",
        transactionType: "INCOME",
        incomeType: "ADMIN",
        createdAt: "2024-07-24T17:58:47.836026",
      },
    ],
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
    {
      id: 1,
      name: "marko200",
      username: "glendale",
      investedAmount: 168.56,
      earnedAmount: 2517.23,
      createdAt: "2024-07-24T18:27:09.648736",
    },
    {
      id: 2,
      name: "s_i_m_is",
      username: "harrogate",
      investedAmount: 141.34,
      earnedAmount: 2312.48,
      createdAt: "2024-07-24T18:27:09.817368",
    },
    {
      id: 3,
      name: "Cortland",
      username: "linton",
      investedAmount: 123.9,
      earnedAmount: 2125.87,
      createdAt: "2024-07-24T18:27:09.951701",
    },
    {
      id: 4,
      name: "danny_samo",
      username: "orchard",
      investedAmount: 107.53,
      earnedAmount: 1911.66,
      createdAt: "2024-07-24T18:27:10.065779",
    },
    {
      id: 5,
      name: "joshua__",
      username: "quintrell",
      investedAmount: 93.12,
      earnedAmount: 1719.22,
      createdAt: "2024-07-24T18:27:10.183415",
    },
    {
      id: 6,
      name: "semoni",
      username: "ridgemont",
      investedAmount: 76.87,
      earnedAmount: 1513.45,
      createdAt: "2024-07-24T18:27:10.38343",
    },
    {
      id: 7,
      name: "laoc0020",
      username: "sterling",
      investedAmount: 61.43,
      earnedAmount: 1331.19,
      createdAt: "2024-07-24T18:27:10.502126",
    },
    {
      id: 8,
      name: "cryptopros",
      username: "thurston",
      investedAmount: 46.29,
      earnedAmount: 1127.78,
      createdAt: "2024-07-24T18:27:10.611769",
    },
    {
      id: 9,
      name: "Ivara",
      username: "upton",
      investedAmount: 34.67,
      earnedAmount: 924.56,
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 10,
      name: "Jorvik",
      username: "vesper",
      investedAmount: 23.12,
      earnedAmount: 731.89,
      createdAt: "2024-07-24T18:27:10.84265",
    },
  ];
};

export const buyLottery = async () => {
  const test = await delayedPromise();
  return test;
};
