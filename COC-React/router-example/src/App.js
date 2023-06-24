import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from './pages/Navigation';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import Form from './form/App';
import TimeTable from './time-table/src/App';
import NotFound from './pages/NotFound';
import POS from './pos/App';
import StudentCard from './student-card/App'

const navLinks = [
  { "title": "Not Found", "url": "/404" },
  { "title": "Home", "url": "/" },
  { "title": "Products", "url": "/products" },
  { "title": "Form", "url": "/form" },
  { "title": "Time Table", "url": "/time-table" },
  { "title": "Student Card", "url": "/student-card" },
  { "title": "Grocery Shop", "url": "/pos" }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation navLinks={navLinks} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="form" element={<Form />} />
          <Route path="student-card" element={<StudentCard />} />
          <Route path="time-table" element={<TimeTable />} />
          <Route path="pos" element={<POS />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
