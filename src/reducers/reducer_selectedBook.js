import { SELECT_BOOK } from '../actions';
export default function (state = null,action) {
  switch (action.type) {
  case SELECT_BOOK:
    return action.payload;
  }
  return state;
}