import React, { Component } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import { DayGridView } from "@fullcalendar/daygrid";
import "./event-calender.css"
import { Container } from "@material-ui/core";
// import interactionPlugin from "@fullcalendar/interaction";

export default class EventCalendar extends Component
{
  render()
  {
      return(
          
            <div>
                <Container maxWidth="sm">
                        <FullCalendar 
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        weekends={true}
                        events={[
                            { title: 'appotment-1', date: '2021-10-23' },
                            { title: 'appotment-2', date: '2021-10-25' },
                            { title: 'appotment-2', date: '2021-10-27' }

                          ]}
                          // dateClick={this.handeleDateClick}
                        />
                </Container>
            </div>
      )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
}
