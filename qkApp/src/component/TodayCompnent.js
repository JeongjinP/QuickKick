// 오늘 날짜를 2024-05-31 형식으로 가져올 컴포넌트

function TodayComponent() {
    let today = new Date();

    // 년, 월, 일을 가져옵니다.
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
    let date = today.getDate();

    // 월과 일이 한 자리수일 경우 앞에 0을 붙입니다.
    if (month < 10) month = '0' + month;
    if (date < 10) date = '0' + date;

    // 년, 월, 일을 결합하여 'YYYY-MM-DD' 형식의 문자열을 만듭니다.
    let formattedToday = `${year}-${month}-${date}`;

    return formattedToday;
}

export default TodayComponent;