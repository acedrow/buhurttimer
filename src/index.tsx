import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import GlobalStyle from './styles/globalStyle'
import MainPage from './mainPage'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
)
