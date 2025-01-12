import Calendar from '@event-calendar/core';
import DayGrid from '@event-calendar/day-grid';
import CustomGrid from '@event-calendar/custom-grid';
import List from '@event-calendar/list';
import TimeGrid from '@event-calendar/time-grid';
import ResourceTimeGrid from '@event-calendar/resource-time-grid';
import Interaction from '@event-calendar/interaction';
import '@event-calendar/core/index.css';

export default class extends Calendar {
    constructor(el, options) {
        super({
            target: el,
            props: {
                plugins: [CustomGrid, DayGrid, List, TimeGrid, ResourceTimeGrid, Interaction],
                options
            }
        });
    }

    get view() {
        return this.getView();
    }
}
