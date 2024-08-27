import { parseStringPromise } from "xml2js";

fetch(
  "https://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&pageNo=2&numOfRows=100&"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
    scrollY;
  })
  .then((xmlString) => {
    return parseStringPromise(xmlString);
  })
  .then((jsonData) => {
    const data = jsonData.ServiceResult.MsgBody[0].items;
    const data1 = jsonData.ServiceResult.comMsgHeader;
    const data2 = jsonData.ServiceResult.msgHeader;
    console.log(data[0]);
    console.log(data1);
    console.log(data2);
  })
  .catch((error) => {
    console.error(error);
  });
