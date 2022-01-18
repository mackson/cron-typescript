import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from 'Pages/Home'

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      {/** BrowserRouter Provides a History Context*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}