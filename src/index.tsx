import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepagetest from './homepagetest'
//import BuhurtTimekeeper from './buhurtTimekeeper'
//import PageNotFound from './home/PageNotFound'
//import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <Router>
    {/* <GlobalStyle /> */}
    <Routes>
      <Route path="/" element={<Homepagetest/>}></Route>
      {/* <Route path="*">
        <PageNotFound />
      </Route> */}
    </Routes>
  </Router>,
  document.getElementById('root')
)
