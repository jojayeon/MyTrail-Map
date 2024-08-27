fetch(
  "https://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&pageNo=2&numOfRows=100&"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  })
  .then((xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    console.log(xmlDoc);
  })
  .catch((error) => {
    console.error(error);
  });
