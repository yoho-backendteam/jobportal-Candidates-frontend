import { Routes } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"
import { appRoutes } from "./routes/AppRoutes"

const App = () => {
  return (
    <>
      <AuthProvider>
				<Routes>{appRoutes}</Routes>
			</AuthProvider>
    </>
  )
}

export default App