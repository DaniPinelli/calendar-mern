import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/es'
import Navbar from "../ui/Navbar"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-messages-es'
import CalendarEvent from './CalendarEvent'
import { useState } from 'react'
import CalendarModal from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events'
import AddNewFab from '../ui/AddNewFab'

moment.locale('es')

const localizer = momentLocalizer(moment)

const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events } = useSelector(state => state.calendar);


    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');


    const onDoubleClick = (e) => {
        dispatch(uiOpenModal())

    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e))
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }


    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            opcaity: 0.8,
            display: 'block',
        }
        return {
            style
        }
    }

    return (
        <div className='calendar-screen' >
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen