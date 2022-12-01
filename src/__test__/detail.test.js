import store from '../redux/Store';
import { fetchDetail } from '../Redux/Covid/covidSlice';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      covid: {
        covid: [],
        status: 'idel',
      },
    });
  });

  it('should fetch All Data', async () => {
    await store.dispatch(fetchDetail('ethiopia'));
    expect(store.getState().covid.covid.length).toEqual(1);
  });
});
