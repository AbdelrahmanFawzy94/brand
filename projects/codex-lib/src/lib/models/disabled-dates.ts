export interface DisabledDates {
  years: number[]; // like [2020, 2021]
  yearMonths: number[]; // like [Month_Enum.February, Month_Enum.May]
  weekDay: number[]; // like [Day_Enum.Monday, Day_Enum.Friday]
  days: string[]; // like ['1/1/2024', '4/1/2024']
}
