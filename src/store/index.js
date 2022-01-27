//create multi slice
//1 for manage the cart, one for user interface logic like toggling the cart
import { configureStore} from '@reduxjs/toolkit';

import uiSlice from './uiSlice';

const store = configureStore({
    reducers: {ui: uiSlice.reducer}
});

export default store;