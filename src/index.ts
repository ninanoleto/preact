import counterComponent from './Counter';
import filmsComponent from './Films';
import memberProfileComponent from './MemberProfile';

// Start here, simple statful React component
counterComponent();

// Component with server side data, updated on the client side
memberProfileComponent();

// Component using JSON data from the server side
filmsComponent();
