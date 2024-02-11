import React, { useState }  from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

// 외부 라이브러리 react-native-calendars 를 사용하여 달력 컴포넌트를 만듬
// https://github.com/wix/react-native-calendars

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월",],

  dayNames: [
    "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일",],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kr";
function CalendarComponent() {
  return (
    // 달력 컴포넌트
    <Calendar
        // 달력의 날짜를 누르면 해당 날짜의 정보를 가져옴
        onDayPress={(day) => {
            console.log("selected day", day);
        }}
        // 달력의 날짜를 길게 누르면 해당 날짜의 정보를 가져옴
        onDayLongPress={(day) => {
            console.log("selected day", day);
        }}
        // 달력의 날짜를 누르고 드래그하면 해당 날짜의 정보를 가져옴
        onMonthChange={(month) => {
            console.log("month changed", month);
        }}
        monthFormat={"yyyy년 M월"}
        // 달력의 날짜의 스타일을 설정
        // 달력의 날짜의 색상을 설정
        theme={{
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd", // 상단 요일표시 색상
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#ffa600",
            monthTextColor: "#0A4A9B",
            indicatorColor: "blue",
            // textDayFontFamily: "monospace",
            // textMonthFontFamily: "monospace",
            // textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
        }}/>


  )

}
export default CalendarComponent;
