function useState<S extends number | string = string>() {
  let state: S;
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}
const s = useState();

s.setState('foo');
console.log(s.getState());
