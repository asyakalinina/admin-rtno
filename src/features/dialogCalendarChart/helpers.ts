import {DialogData} from "../../entities/dialog/types";
import {ChatData} from "./ChatCalendarChart";

export function transformToChartData(dialogs: DialogData[]): ChatData[] {
    const countMap = new Map<string, number>();

    dialogs.forEach(dialog => {
        // Parse startTime string into a Date object
        const startTime = new Date(dialog.startTime);
        // Extract only the date part without the time and format as "dd/mm/yyyy"
        const formattedDate = startTime.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        // Update count for the extracted date
        countMap.set(formattedDate, (countMap.get(formattedDate) || 0) + 1);
    });

    // Convert the map into an array of objects suitable for the chart
    return Array.from(countMap, ([date, count]) => ({ date, count }));
}


