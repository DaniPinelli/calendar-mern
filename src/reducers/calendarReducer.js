import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        title: 'All Day Event very long title',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        user: {
            _id: '1',
            name: 'Dani',
        }
    }],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.eventSetActive:

            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        default:
            return state;
    }
}