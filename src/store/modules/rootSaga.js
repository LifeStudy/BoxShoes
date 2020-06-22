import { all } from 'redux-saga/effects';

import cart from './cart/saga';

export default function* rootSagaa() {
  return yield all([cart]);
}
