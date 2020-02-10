import { takeLatest, all, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export function* fetchCollectionAsync() {
    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.errorMessage));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}