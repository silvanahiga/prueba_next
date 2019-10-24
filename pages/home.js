import React from "react"
import Link from "next/link"


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:""

    }
  }

  handleChange(e) {
    console.log(e.target.value)
    const data = e.target.value
    this.setState({
      value:data
    })

  }

  handleClick(e) {
    console.log('click')

  }

  render() {
    return (
      <div>
        <p>home</p>
        
        <input onChange={(e) => this.handleChange(e)}></input>
        <Link href={`/movies?id=${this.state.value}`} as={`/movies/${this.state.value}`}><button onClick={() => this.handleClick()}>click</button></Link>
      </div>
    )
  }
}

export default Home