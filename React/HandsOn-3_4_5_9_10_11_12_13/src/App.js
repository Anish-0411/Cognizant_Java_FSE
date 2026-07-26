// import "./App.css";
// import Posts from "./Post";

// function App() {
//   return (
//     <div className="App">
//       <Posts />
//     </div>
//   );
// }

// export default App;




// import ListofPlayers from "./ListofPlayers";
// import IndianPlayers from "./IndianPlayers";
// import "./App.css";

// function App() {

//   const flag = true;

//   if (flag) {
//     return (
//       <div className="App">
//         <ListofPlayers />
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <IndianPlayers />
//       </div>
//     );
//   }
// }

// export default App;




// import "./App.css";
// import officeImage from "./office.jpg";

// function App() {

//     const office = {
//         name: "Smart Business Center",
//         rent: 55000,
//         address: "Hyderabad"
//     };

//     const officeList = [
//         {
//             name: "Smart Business Center",
//             rent: 55000,
//             address: "Hyderabad"
//         },
//         {
//             name: "Tech Park",
//             rent: 70000,
//             address: "Bangalore"
//         },
//         {
//             name: "Cyber Towers",
//             rent: 85000,
//             address: "Chennai"
//         },
//         {
//             name: "Innovation Hub",
//             rent: 45000,
//             address: "Pune"
//         }
//     ];

//     return (
//         <div>

//             <h1>Office Space Rental App</h1>

//             <img src={officeImage} alt="Office Space"/>

//             <h2>Single Office Details</h2>

//             <p><b>Name:</b> {office.name}</p>

//             <p>
//                 <b>Rent:</b>{" "}
//                 <span
//                     style={{
//                         color: office.rent < 60000 ? "red" : "green",
//                         fontWeight: "bold"
//                     }}
//                 >
//                     ₹{office.rent}
//                 </span>
//             </p>

//             <p><b>Address:</b> {office.address}</p>

//             <hr/>

//             <h2>Available Office Spaces</h2>

//             {
//                 officeList.map((item,index)=>(
//                     <div className="office" key={index}>

//                         <img src={officeImage} alt="Office"/>

//                         <h3>{item.name}</h3>

//                         <p>
//                             <b>Rent:</b>{" "}
//                             <span
//                                 style={{
//                                     color:item.rent<60000?"red":"green",
//                                     fontWeight:"bold"
//                                 }}
//                             >
//                                 ₹{item.rent}
//                             </span>
//                         </p>

//                         <p>
//                             <b>Address:</b> {item.address}
//                         </p>

//                     </div>
//                 ))
//             }

//         </div>
//     );
// }

// export default App;



// import { Component } from "react";
// import "./App.css";
// import CurrencyConvertor from "./CurrencyConvertor";

// class App extends Component{

//     constructor(props){

//         super(props);

//         this.state={
//             count:0
//         };

//     }

//     increment=()=>{

//         this.setState({
//             count:this.state.count+1
//         });

//     }

//     decrement=()=>{

//         this.setState({
//             count:this.state.count-1
//         });

//     }

//     sayHello=()=>{

//         alert("Hello!! Have a Nice Day");

//     }

//     increase=()=>{

//         this.increment();
//         this.sayHello();

//     }

//     welcome=(msg)=>{

//         alert(msg);

//     }

//     onPress=()=>{

//         alert("I was clicked");

//     }

//     render(){

//         return(

//             <div>

//                 <h1>Event Examples App</h1>

//                 <h2>Counter : {this.state.count}</h2>

//                 <button onClick={this.increase}>
//                     Increment
//                 </button>

//                 <button onClick={this.decrement}>
//                     Decrement
//                 </button>

//                 <br/>

//                 <button
//                     onClick={()=>this.welcome("Welcome")}
//                 >
//                     Say Welcome
//                 </button>

//                 <br/>

//                 <button
//                     onClick={this.onPress}
//                 >
//                     OnPress
//                 </button>

//                 <hr/>

//                 <CurrencyConvertor/>

//             </div>

//         );

//     }

// }

// export default App;



// import { useState } from "react";
// import "./App.css";
// import Guest from "./Guest";
// import User from "./User";

// function App(){

//     const [loggedIn,setLoggedIn]=useState(false);

//     return(

//         <div>

//             <h1>Ticket Booking App</h1>

//             {
//                 loggedIn
//                 ?
//                 <>
//                     <button onClick={()=>setLoggedIn(false)}>
//                         Logout
//                     </button>

//                     <User/>
//                 </>
//                 :
//                 <>
//                     <button onClick={()=>setLoggedIn(true)}>
//                         Login
//                     </button>

//                     <Guest/>
//                 </>
//             }

//         </div>

//     );

// }

// export default App;

import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App(){

    const showBooks=true;
    const showBlogs=true;
    const showCourses=true;

    let bookComponent;

    if(showBooks){
        bookComponent=<BookDetails/>;
    }

    return(

        <div>

            <h1>Blogger App</h1>

            <div className="container">

                {bookComponent}

                {showBlogs ? <BlogDetails/> : null}

                {showCourses && <CourseDetails/>}

            </div>

        </div>

    );

}

export default App;