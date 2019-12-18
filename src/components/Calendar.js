import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";


import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import "@fullcalendar/timegrid/main.css";



  function Calendar() {

    

    return(
   <div>
      
      

      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin ]}
      timeZone = 'UTC'
      header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      }}
      events= {
            {url: 'https://customerrest.herokuapp.com/gettrainings'}
           
          }
      
     
      />
     
     </div>
    );
  };
 
  export default Calendar;