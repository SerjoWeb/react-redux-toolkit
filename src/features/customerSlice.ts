import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  id: number,
  name: string,
  food: string[]
};

interface AddFoodPayload {
  id: number,
  food: string
};

interface CustomerState {
  value: Customer[]
};

const initialState: CustomerState = {
  value: []
};

export const CustomersSlice = createSlice({
  name: 'Customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodPayload>) => {
      state.value.forEach(customer => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    }
  }
});

export const { addCustomer, addFood } = CustomersSlice.actions;
export default CustomersSlice.reducer;
