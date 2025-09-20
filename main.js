const date = "202310";
const time_period = "q";

let mainUrl = new URL("NBUStatService/v1/statdirectory/basindbank", "https://bank.gov.ua/",);

mainUrl.searchParams.append("date", date);
mainUrl.searchParams.append("period", time_period);
mainUrl.searchParams.append("json", "");

console.log(mainUrl.toString());
