import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"

type CardProps = {
    title: string,
    paragraph: string
  }

  const Card: React.FunctionComponent<CardProps> = 
  ({ title, paragraph }) => (
    <>
        <h2>{ title }</h2>
        <p>
            { paragraph }
        </p>
        <button type="button" className="btn btn-primary">Say Hello</button>
    </>  
  )
const el = <Card title="Welcome!" paragraph="To this example" />
ReactDOM.render(<React.StrictMode>{el}</React.StrictMode>,document.getElementById("root"))
//ReactDOM.render(<div><h1>Hello, world</h1></div>,document.getElementById("root"))