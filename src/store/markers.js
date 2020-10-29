import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators';
import { getURL } from '../api';
import { TODAY } from '../constants';

const INITIAL_STATE = {
  currentDate: TODAY(),
  markers: [],
};

const subject$ = new BehaviorSubject(INITIAL_STATE);

let state = INITIAL_STATE;

const getMarkers = () => {
  return ajax.getJSON(getURL( state.currentDate ))
    .pipe(map(({ ukraine }) => ukraine ));
}

const setDate = ( date ) => {
  state = { ...state, currentDate: date };
  getMarkers().subscribe(( ukraine ) => {
    state = { ...state, markers: ukraine };
    subject$.next({ ...state });
  });
}

const markersStore = {
  INITIAL_STATE,
  setDate,
  subscribe: ( subscriber ) => subject$.subscribe( subscriber )
};

subject$.next({ ...state });

export default markersStore;