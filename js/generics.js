"use strict";
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const s = useState();
s.setState('foo');
console.log(s.getState());
