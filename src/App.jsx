// import AuthInputs from './components/AuthInputs.jsx';
// import Header from './components/Header.jsx';

// export default function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <AuthInputs />
//       </main>
//     </>
//   );
// }

import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <div>
            <p style={{color: `${isClicked ? 'red' : 'white'}`}}>Style me!</p>
            <button onClick={setIsClicked(prevState => !prevState)}>Toggle style</button>
        </div>
    );
}
