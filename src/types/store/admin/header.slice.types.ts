import { PayloadAction } from '@reduxjs/toolkit';

export interface ISidebarState {
  isShowSidebar: boolean;
}

export type ISidebarAction = PayloadAction<boolean>;
