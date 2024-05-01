import { useDispatch } from 'react-redux';

import { AppDispatch } from 'api';

export const useAppDispatch = () => useDispatch<AppDispatch>();
