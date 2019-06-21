// import React from 'react';
// class Courses extends React.Component{
//     render(){
//         return(
//             <ul>
//                 <li>React</li>
//                 <li>Angular</li>
//                 <li>Java</li>
//                 <li>Javascript</li>
//                 <li>React</li>
//             </ul>
//         );
//     }
// }
// export default Courses;




// import React from 'react';
// class Courses extends React.Component{
//     constructor(props){
//         super(props)
//     }
// handle()
// {
//     console.log(event.target.id);
// }

//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                 {this.props.data.length>0 ? (
//                 <ul>
//                     {
//                         this.props.data.map(course=><li key={course.name}> Course Name:{course.name}  <br/>
//                             Course price:{course.price}  <br/>
//                             Course Duration:{course.duration}</li>)
//                     }
//                     </ul>
//                     ): <h1> there are no elements</h1>}
        
//                     </div>
//                     )}
                    
        
//     }
// export default Courses;


import React from 'react';

class Courses extends React.Component {
   
    constructor(props){
        super(props);
        //this.handleCourseClick = this.handleCourseClick.bind(this);
    }


    render(){
        console.log(this.props);
        return (
            <div>
                {
                    this.props.data.length > 0 ? (
                        <ul>
                        {
                            this.props.data.map(course => <li id={course}
                                    key={course} 
                                    onClick={(event)=> this.props.handleClick(event)}>{course}</li>)
                        }
                        </ul>
                    ): <h1> There are no Courses for Display </h1>
                }
            </div>  
        );
    }
}

export default Courses;