import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SaleModel } from '../../model/models'


const sales = createSlice({
  name: 'sales',
  initialState: [] as SaleModel[],
  reducers: {
    addSale: (state, { payload }: PayloadAction<SaleModel>) => {
      state.push(payload);
    },
    clearSales: (state) => {
      state = [];
    }
  }
});

export const { addSale, clearSales } = sales.actions;
export default sales.reducer;
