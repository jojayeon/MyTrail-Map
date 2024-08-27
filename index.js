import { parseStringPromise } from "xml2js";

fetch(
  "https://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&pageNo=2&numOfRows=100&"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  })
  .then((xmlString) => {
    return parseStringPromise(xmlString);
  })
  .then((jsonData) => {
    const data = jsonData.ServiceResult.MsgBody[0].items; //MsgBody[0] []이부분에 순서대로 숫자 대입
    console.log(data[0]); // data 첫 항목
    const a = data[0].address[0];
    console.log(a);
  })
  .catch((error) => {
    console.error(error);
  });
