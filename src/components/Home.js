import Tabs from "./Tabs"

export const  Home = (props) => {
  const {showAlert} = props

  return (
    <div>

      <Tabs showAlert={showAlert} />
      
    </div>
  )
}
