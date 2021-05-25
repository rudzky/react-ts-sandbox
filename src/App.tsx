import './style.css'
import './customStyles.scss'
import Peter from './peter.jpg'
import FlutterLogo from './flutter.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const person = 'Piotr'
  return (
    <>
      <h1>Hello World! {person}</h1>
      <h2>
        What a wonderful day!! {process.env.NODE_ENV} {process.env.name}
      </h2>
      <img src={Peter} alt="Just Peter Griffin" width="300" height="200" />
      <img src={FlutterLogo} alt="Just flutter logo" width="200" height="200" />
      <ClickCounter />
    </>
  )
}
