// const a = `https://api.vworld.kr/req/data?service=data&version=2.0
// &request=GetFeature
// &key=C57375E1-100F-354A-AB6A-CC027494E877//!인증키
//   &format=json//json형식으로 변환
//   &errorformat=json//josn형식으로 변환
//   &size=10//사이즈
//   &page=10//페이지
//   &data=LT_C_UPISUQ153//
//   &geomfilter=POINT(129.2109404768834%2036.97561863039715)//없으면 안불러와짐
//   &attrfilter=present_sn:like:47930UQ153PS201404240016//없으면 안되네;;
//   &geometry=true//!기본값 //이걸 false로 하면 주소가 나오지 않음
//   &attribute=true//!기본값
//   &columns=,dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam//!데이터 정보 무엇을 사용할지
//   //!고민인게 다 가져온 다음에 처리 할지 아니면 원하는 값만 가져올지 정해야 한다
//   &crs=EPSG:4326//!좌표계-기본값으로 되어있음 우선 사용하고 나중에 변경
//   &domain=https://www.naver.com/`; //! 임시 주소
// const a2 = `https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&key=C57375E1-100F-354A-AB6A-CC027494E877&format=json&errorformat=json&size=10&page=1&data=LT_C_UPISUQ153&geomfilter=POINT(129.2109404768834%2036.97561863039715)&attrfilter=present_sn:like:47930UQ153PS201404240016&columns=,dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/`;
// const a3 =
//   "https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&key=C57375E1-100F-354A-AB6A-CC027494E877&format=json&errorformat=json&size=10&page=1&data=LT_C_UPISUQ153&geomfilter=POINT(129.2109404768834%2036.97561863039715)&attrfilter=present_sn:like:47930UQ153PS201404240016&columns=dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/";

// const a4 =
//   "https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&key=C57375E1-100F-354A-AB6A-CC027494E877&format=json&errorformat=json&size=100&page=1&data=LT_C_UPISUQ153&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=lcl_nam:like:공원&columns=dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam&geometry=false&attribute=false&crs=EPSG:4326&domain=https://www.naver.com/";

// const a5 =
//   "https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&key=C57375E1-100F-354A-AB6A-CC027494E877&format=json&errorformat=json&size=100&page=1&data=LT_C_UPISUQ153&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=lcl_nam:like:산책&columns=dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/";
// // 바로가기 주소로 들어가면 디지털트윈국토 사이트의 데이터 목록이 나오게 되어있습니다 어떤 데이터에 산책로 데이터가 들어가 있는지 찾을 수 없습니다. 주소를 수정 해주거나 어떤 데이터에 있는지 표기를 해주시면 좋겠습니다.

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&key= C57375E1-100F-354A-AB6A-CC027494E877&format=xml&errorformat=xml&size=10&page=1&data=LT_C_WGISNPDO&geomfilter=BOX(124.0,33.0,132.0,43.0)&columns=park_name,ag_geom&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/
// // attrfilter=park_name:like:공원

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=100&page=1&data=LT_C_WGISNPDO&geomfilter=BOX(124.0,33.0,132.0,43.0)&columns=park_name,ag_geom&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=100&page=1&data=LT_C_WGISNPDO&geomfilter=BOX(124.0,33.0,132.0,43.0)&columns=park_name&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=1000&page=1&data=LT_C_WGISNPDO&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=park_name:like:공&columns=park_name&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=10&page=1&data=LT_C_UPISUQ153&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=present_sn:like: &columns=dgm_nm,sig_nam,lcl_nam,mls_nam,atr_nam&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=10&page=1&data=LT_L_FRSTCLIMB&geomfilter=BOX(124.0,33.0,132.0,43.0)&columns=mntn_nm&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=1000&page=10&data=LT_L_FRSTCLIMB&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=mntn_nm:like:%공원&columns=mntn_nm&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=1000&page=10&data=LT_L_FRSTCLIMB&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=mntn_nm:like:공원%&columns=mntn_nm&geometry=false&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877














//! 다듬어서 사용하기
// * 디지털 트윈국토
// *  -도시자연공원구역 api
// https://api.vworld.kr/req/data?service=data&version=2.0&request=GetFeature&format=xml&errorformat=xml&size=1000&page=1&data=LT_C_UQ162&geomfilter=BOX(124.0,33.0,132.0,43.0)&attrfilter=uname:like:공공공지&columns=uname,dnum,dyear,sido_name,sigg_name,ag_geom&geometry=true&attribute=true&crs=EPSG:4326&domain=https://www.naver.com/&key=C57375E1-100F-354A-AB6A-CC027494E877

//계룡시 도시공원 api
`https://apis.data.go.kr/5580000/ctyparkSttusService/getctyparkSttus?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D
&currentPage=1
&perPage=10
&CTPRVN_NM=%EA%B3%84%EB%A3%A1%EC%8B%9C
&FCLTY_KND=%EA%B3%B5%EC%9B%90`;

//대전 도시공원
https://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&

https://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&
pageNo=2&numOfRows=100&