const initialState = {
  password: '',
  text: 'PASSWORD',
};

const PASSWORD = '1307';

const reducer = (state = initialState, action) => {
  if (action.type === 'LOG_IN') {
    if (state.password.length < 4) {
      return { ...state, password: state.password + action.value };
    }
  }
  if (action.type === 'CLEAR') {
    if (state.password.length > 0) {
      return { ...state, password: state.password.slice(0, -1) };
    }
  }
  if (action.type === 'VERIFY') {
    if (state.password === PASSWORD) {
      const verify = document.querySelector('input');
      verify.style.border = '3px solid green';
      const green = document.querySelector('.txt');
      green.style.color = 'green';
      return verify, green, { ...state, text: state.text = 'ACCESS GRANTED' };
    } else {
      const verify = document.querySelector('input');
      verify.style.border = '3px solid red';
      const red = document.querySelector('.txt');
      red.style.color = 'red';
      return verify, red, { ...state, text: state.text = 'ACCESS DENIED' };
    }
  }
  return state;
};

export default reducer;