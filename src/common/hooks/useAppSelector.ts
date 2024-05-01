import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'api';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
