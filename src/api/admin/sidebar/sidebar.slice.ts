import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISidebarAction, ISidebarState } from 'types/store/admin/header.slice.types';
import { leadApi } from '../leads/endpoints/lead';

const initialState: ISidebarState = {
  isShowSidebar: true,
  isOpenEdgeModal: false,
  isNewDeal: false,
  column_id: ''
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setChangeSidebarVisible: (state, action: ISidebarAction) => {
      state.isShowSidebar = action.payload;
    },
    setChangeOpenEdgeModal: (state, action: ISidebarAction) => {
      state.isOpenEdgeModal = action.payload;
    },
    setIsNewDeal: (state, action: ISidebarAction) => {
      state.isNewDeal = action.payload;
    },
    setColumnId: (state, action: PayloadAction<string>) => {
      state.column_id = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addMatcher(leadApi.endpoints.createLead.matchFulfilled, (state) => {
      state.isOpenEdgeModal = false;
      state.column_id = '';
    });
  }
});

export const { setChangeSidebarVisible, setChangeOpenEdgeModal, setIsNewDeal, setColumnId } = sidebarSlice.actions;
