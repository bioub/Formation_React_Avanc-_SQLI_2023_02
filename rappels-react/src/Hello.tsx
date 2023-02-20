// function Hello() {
//   const rootEl = document.createElement('div');
//   rootEl.className = 'Hello';
//   rootEl.addEventListener('click', () => {})
//   const spanEl = document.createElement('span');
//   spanEl.role = 'button';
//   spanEl.append('Romain');
//   rootEl.append('Hello ', spanEl);
//   return rootEl;
// }

// import React from 'react';

// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello', onClick: () => {} },
//     'Hello',
//     React.createElement('span', { role: 'button' }, 'Romain'),
//   );
// }

// import React from 'react';

function Hello() {
  return (
    <div className="Hello" onClick={() => {}}>
      Hello <span role="button">Romain</span>, il est {(new Date()).toLocaleTimeString()}
    </div>
  );
}

export default Hello;
