const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

console.log(process.env.TG_CHAT_ID);
/* Atreides-1 */
async function atrAPR() {
  try {
    //데이터받아서 map
    const atrAxios = await axios.get(`${process.env.GOA_URL}`);
    const newData = atrAxios.data.map((data) => {
      return {
        destBlockchain: data.destBlockchain,
        allianceAssetSymbol: data.allianceAssetSymbol,
        apr: Number(data.apr),
      };
    });

    //내림차순
    newData.sort((a, b) => {
      return b.apr - a.apr;
    });

    //체인이름 필터링
    const atr = newData.filter((data) => {
      return data.destBlockchain == "Atreides";
    });

    console.log("atr순위", atr);

    //파일쓰기는 string만 가능
    const atrJson = "atrTest.json";
    fs.writeFileSync(atrJson, JSON.stringify(atr[0]));

    const atrData = fs.readFileSync("atrTest.json", "utf8");
    const atrData2 = fs.readFileSync("atrTest2.json", "utf8");

    //json 데이터 조건문
    const atrdataJson = JSON.parse(atrData);
    const atrdataJson2 = JSON.parse(atrData2);

    if (atrdataJson.allianceAssetSymbol != atrdataJson2.allianceAssetSymbol) {
      //파일 다르면 2번에 덮어쓰기
      const atrJson2 = "atrTest2.json";
      fs.writeFileSync(atrJson2, atrData);
      console.log("덮어쓰기완료");

      //TG params
      const cardTG = {
        chat_id: `${process.env.TG_CHAT_ID}`,
        photo: "https://station-assets.terra.money/img/coins/Atreides.png",
        caption: `*Atreides' APR ranking changed* \ndestBlockchain : *${atrData.substr(19, 8)}*\nAsset : *${atrData.substr(52, 4)}*\nAPR : *${atrData.slice(63, atrData.length - 8)}%*`,
        parse_mode: "Markdown",
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: "Show APR",
                url: "https://game-of-alliance.terra.money/staking?destBlockchain=atreides-1",
              },
            ],
          ],
        }),
      };

      //TG FormData
      const formData = new FormData();
      formData.append("photo", "https://station-assets.terra.money/img/coins/Atreides.png");

      axios
        .post(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendPhoto`, formData, {
          params: cardTG,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } else {
      console.log("equal");
    }
  } catch (err) {
    console.log(err);
  }
}
//
//

/* Corrino-1*/
async function corAPR() {
  try {
    //데이터받아서 map
    const corAxios = await axios.get("https://goa.terra.dev/summary/alliances");
    const newData = corAxios.data.map((data) => {
      return {
        destBlockchain: data.destBlockchain,
        allianceAssetSymbol: data.allianceAssetSymbol,
        apr: Number(data.apr),
      };
    });

    //내림차순
    newData.sort((a, b) => {
      return b.apr - a.apr;
    });

    //체인이름 필터링
    const cor = newData.filter((data) => {
      return data.destBlockchain == "Corrino";
    });

    console.log("cor순위", cor);

    //파일쓰기는 string만 가능
    const corJson = "corTest.json";
    fs.writeFileSync(corJson, JSON.stringify(cor[0]));

    const corData = fs.readFileSync("corTest.json", "utf8");
    const corData2 = fs.readFileSync("corTest2.json", "utf8");

    //json 데이터 조건문
    const cordataJson = JSON.parse(corData);
    const cordataJson2 = JSON.parse(corData2);

    if (cordataJson.allianceAssetSymbol != cordataJson2.allianceAssetSymbol) {
      //파일 다르면 2번에 덮어쓰기
      const corJson2 = "corTest2.json";
      fs.writeFileSync(corJson2, corData);
      console.log("덮어쓰기완료");

      //TG params
      const cardTG = {
        chat_id: `${process.env.TG_CHAT_ID}`,
        photo: "https://station-assets.terra.money/img/coins/Corrino.png",
        caption: `*Corrino' APR ranking changed* \ndestBlockchain : *${corData.substr(19, 7)}*\nAsset : *${corData.substr(51, 4)}*\nAPR : *${corData.slice(63, corData.length - 8)}%*`,
        parse_mode: "Markdown",
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: "Show APR",
                url: "https://game-of-alliance.terra.money/staking?destBlockchain=corrino-1",
              },
            ],
          ],
        }),
      };

      //TG FormData
      const formData = new FormData();
      formData.append("photo", "https://station-assets.terra.money/img/coins/Corrino.png");

      axios
        .post(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendPhoto`, formData, {
          params: cardTG,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } else {
      console.log("equal");
    }
  } catch (err) {
    console.log(err);
  }
}
//
//

async function harAPR() {
  try {
    //데이터받아서 map
    const harAxios = await axios.get("https://goa.terra.dev/summary/alliances");
    const newData = harAxios.data.map((data) => {
      return {
        destBlockchain: data.destBlockchain,
        allianceAssetSymbol: data.allianceAssetSymbol,
        apr: Number(data.apr),
      };
    });

    //내림차순
    newData.sort((a, b) => {
      return b.apr - a.apr;
    });

    //체인이름 필터링
    const har = newData.filter((data) => {
      return data.destBlockchain == "Harkonnen";
    });

    console.log("har순위", har);

    //파일쓰기는 string만 가능
    const harJson = "harTest.json";
    fs.writeFileSync(harJson, JSON.stringify(har[0]));

    const harData = fs.readFileSync("harTest.json", "utf8");
    const harData2 = fs.readFileSync("harTest2.json", "utf8");

    //json 데이터 조건문
    const hardataJson = JSON.parse(harData);
    const hardataJson2 = JSON.parse(harData2);

    if (hardataJson.allianceAssetSymbol != hardataJson2.allianceAssetSymbol) {
      //파일 다르면 2번에 덮어쓰기
      const harJson2 = "harTest2.json";
      fs.writeFileSync(harJson2, harData);
      console.log("덮어쓰기완료");

      //TG params
      const cardTG = {
        chat_id: `${process.env.TG_CHAT_ID}`,
        photo: "https://explorer.runeterra.info/logos/harkonnen.png",
        caption: `*Harkonnen' APR ranking changed* \ndestBlockchain : *${harData.substr(19, 9)}*\nAsset : *${harData.substr(53, 4)}*\nAPR : *${harData.slice(65, harData.length - 8)}%*`,
        parse_mode: "Markdown",
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: "Show APR",
                url: "https://game-of-alliance.terra.money/staking?destBlockchain=harkonnen-1",
              },
            ],
          ],
        }),
      };

      //TG FormData
      const formData = new FormData();
      formData.append("photo", "https://explorer.runeterra.info/logos/harkonnen.png");

      axios
        .post(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendPhoto`, formData, {
          params: cardTG,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } else {
      console.log("equal");
    }
  } catch (err) {
    console.log(err);
  }
}
//
//

async function ordAPR() {
  try {
    //데이터받아서 map
    const ordAxios = await axios.get("https://goa.terra.dev/summary/alliances");
    const newData = ordAxios.data.map((data) => {
      return {
        destBlockchain: data.destBlockchain,
        allianceAssetSymbol: data.allianceAssetSymbol,
        apr: Number(data.apr),
      };
    });

    //내림차순
    newData.sort((a, b) => {
      return b.apr - a.apr;
    });

    //체인이름 필터링
    const ord = newData.filter((data) => {
      return data.destBlockchain == "Ordos";
    });

    console.log("ord순위", ord);

    //파일쓰기는 string만 가능
    const ordJson = "ordTest.json";
    fs.writeFileSync(ordJson, JSON.stringify(ord[0]));

    const ordData = fs.readFileSync("ordTest.json", "utf8");
    const ordData2 = fs.readFileSync("ordTest2.json", "utf8");

    //json 데이터 조건문
    const cordataJson = JSON.parse(ordData);
    const cordataJson2 = JSON.parse(ordData2);

    if (cordataJson.allianceAssetSymbol != cordataJson2.allianceAssetSymbol) {
      //파일 다르면 2번에 덮어쓰기
      const ordJson2 = "ordTest2.json";
      fs.writeFileSync(ordJson2, ordData);
      console.log("덮어쓰기완료");

      //TG params
      const cardTG = {
        chat_id: `${process.env.TG_CHAT_ID}`,
        photo: "https://explorer.runeterra.info/logos/Ordos.png",
        caption: `*Ordos' APR ranking changed* \ndestBlockchain : *${ordData.substr(19, 5)}*\nAsset : *${ordData.substr(49, 4)}*\nAPR : *${Number(ordData.slice(61, ordData.length - 8).toLocaleString("en-us"))}%*`,
        parse_mode: "Markdown",
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: "Show APR",
                url: "https://game-of-alliance.terra.money/staking?destBlockchain=ordos-1",
              },
            ],
          ],
        }),
      };

      //TG FormData
      const formData = new FormData();
      formData.append("photo", "https://explorer.runeterra.info/logos/Ordos.png");

      axios
        .post(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendPhoto`, formData, {
          params: cardTG,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } else {
      console.log("equal");
    }
  } catch (err) {
    console.log(err);
  }
}

async function total() {
  await atrAPR();
  await corAPR();
  await harAPR();
  await ordAPR();
}
//함수실행

total();
