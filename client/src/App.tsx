import { Toaster } from 'react-hot-toast'
import './styles/global.css'
import AppRoutes from './app/routes/Approutes'

function App() {

  return (
    <>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 5000,
          style: {
            background: "",
            color: "",
          },
        }}
      />
      <AppRoutes />
    </>
  )
}

export default App
