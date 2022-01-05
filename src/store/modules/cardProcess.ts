// createStandardAction 최신 버전에선 deprecated 됨
import { createAction, createReducer, ActionType } from 'typesafe-actions';

//typesafe-actions를 사용하면 as const를 안붙여도됨
export const ADD_CARD = 'cardProcess/ADD_CARD';
export const DELETE_CARD = 'cardProcess/DELETE_CARD';
export const UPDATE_CARD = 'cardProcess/UPDATE_CARD';

export const add = createAction(ADD_CARD)();
export const remove = createAction(DELETE_CARD)();
export const update = createAction(UPDATE_CARD)();

const actions = { add, remove, update };
type TodoListActions = ActionType<typeof actions>;

interface TodoState {
  processes: {
    todo: Card[];
    ongoing: Card[];
    done: Card[];
  };
  card: Card;
}
// reducer
const initialState: TodoState = {
  processes: {
    todo: [],
    ongoing: [],
    done: [],
  },
  card: {
    status: '',
    CardId: 0,
    Conentes: '',
  },
};

const cardProcessReducer = createReducer<TodoState, TodoListActions>(initialState, {
  [ADD_CARD]: (state) => {
    console.log('ADD_CARD', state.card);
    return { ...state };
  },
  [DELETE_CARD]: (state) => {
    return { ...state };
  },
  [UPDATE_CARD]: (state) => {
    return { ...state };
  },
});

//   .handleAction(add, (state, action) => {
//     return state.card;
//   })
//   .handleAction(remove, () => {
//     console.log('remove');
//     ({});
//   })
//   .handleAction(update, () => {
//     console.log('remove');
//     ({});
//   });

export default cardProcessReducer;
