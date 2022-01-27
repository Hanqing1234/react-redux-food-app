//create multi slice
//1 for manage the cart, one for user interface logic like toggling the cart
import { configureStore} from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
});

export default store;