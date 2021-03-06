const axios = require("axios");
require("dotenv").config();
const AUTHORIZATION = process.env.AUTHORIZATION;
const retriveNFTByWallet = async () => {
  try {
    const requestParams = {
      method: "GET",
      url: "https://api.nftport.xyz/v0/accounts/0xf448B04Dc6675c4450e1cb74548e42b477777384",
      params: {
        chain: "rinkeby",
        account_address: "0xf448B04Dc6675c4450e1cb74548e42b477777384",
        page_size: "23",
        include: "metadata",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
    };

    const response = await axios.request(requestParams);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const retriveNFTByContract = async () => {
  try {
    const requestParams = {
      method: "GET",
      url: "https://api.nftport.xyz/v0/nfts/0xc9136243110c61f4b3d97c6f266f02e2e6bce13c",
      params: { chain: "rinkeby", page_size: "10", include: "metadata" },
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
    };

    const response = await axios.request(requestParams);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// retriveNFTByWallet();
retriveNFTByContract();
