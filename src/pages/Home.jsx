import React, { Component, useEffect, useState } from 'react'

// export default class Home extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "Carlos"
//     }
//     console.log("Contructor");
//   }

//   componentDidMount() {
//     console.log("ohpho");
//   }

//   change() {
//     this.setState({
//       name: "Hanane"
//     })
//   }

//   componentDidUpdate() {
//     console.log("mis a jour");
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>{this.state.name}</p>
//         <button onClick={this.change.bind(this)} >modifier</button>
//       </div>
//     )
//   }
// }


export default function Home() {
  const [name, setName] = useState("Carlos")

  useEffect(() => {
    console.log("Bonjour");
  }, [name])

  function change() {
    setName("Hanane")
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={change} >modifier</button>
    </div>)
}
