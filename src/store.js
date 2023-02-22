import { createStore } from "redux"
import theuserDetails from "./Redux/Reduse";

const store = createStore(theuserDetails, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store