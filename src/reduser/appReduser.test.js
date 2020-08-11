import reducer from './appReducer';

describe('app reducer', () => { 
  it('sets a ceareal with the SET_CEREAL action type', () => {
    const state = {
      cereal:null
  }

    const action = {
      type: 'SET_CEREAL',
      payload: {
        name: "name",
        thoughts: "the best seceal thoghtsesult.thoughts",
        scale: "10",
        tags: ['cereals' , 'milk']
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      cereal: {
        name: "name",
        thoughts: "the best seceal thoghtsesult.thoughts",
        scale: "10",
        tags: ['cereals' , 'milk']
      }
    });
  });
})
