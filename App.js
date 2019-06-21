// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import Courses from "./Courses";

// let courses=[
//     {id:1,name:"React", price:20000, duration:20},
//     {id:2,name:"Angular", price:230000, duration:20},
//     {id:3,name:"Java", price:20000, duration:20},
//     {id:4,name:"JavaScript", price:230000, duration:20},
   
// ]

// function app(){
//     return(
//       <div>
//         <Courses data={courses}/>
//         <Courses data={[]}/>
//       </div>
//     );
// }
// export default app

// import React from 'react';
// import './App.css';
// import Courses from './Courses';

// const courses=[
//   'React',
//   'Angular',
//   'Java 8',
//   'Spring',
//   'Hibernate'
// ]

// function App() {
//   return (
//       <div>
//          <Courses data={courses}/>
//       </div>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import Courses from './Courses';

class App extends React.Component {

  constructor(props){ 
    super(props)
    this.courses=[
      'React',
      'Angular',
      'Java 8',
      'Spring',
      'Hibernate'
    ];
    this.handleCourseClick = this.handleCourseClick.bind(this);
  }
  
  handleCourseClick(event){
    console.log('came inside the parent method of handle click ', event.target.id);
  }
  render(){ 
    return (
        <div>
          <Courses data={this.courses} handleClick={this.handleCourseClick}/>
        </div>
    );
  }
}

export default App;