import { default as CalendarParent } from './Calendar';
import { default as CalendarDay } from './CalendarDay';
import { default as CalendarDays } from './CalendarDays';
import { default as CalendarHeader } from './CalendarHeader';
import { default as CalendarLeft } from './CalendarLeft';
import { default as CalendarRight } from './CalendarRight';
import { default as CalendarTitle } from './CalendarTitle';
import { default as CalendarWeekday } from './CalendarWeekday';
import { default as CalendarWeekdays } from './CalendarWeekdays';

declare const Calendar: typeof CalendarParent & {
    Day: typeof CalendarDay;
    Days: typeof CalendarDays;
    Header: typeof CalendarHeader;
    Left: typeof CalendarLeft;
    Right: typeof CalendarRight;
    Title: typeof CalendarTitle;
    Weekday: typeof CalendarWeekday;
    Weekdays: typeof CalendarWeekdays;
};
export default Calendar;
//# sourceMappingURL=index.d.ts.map