function formatName(user) { return user.firstName + ' ' + user.lastName;}


const user = {
  firstName: 'Debasisha',
  lastName: 'Bhanja'
};

const headingElement = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
ReactDOM.render(headingElement,document.getElementById('root')	);