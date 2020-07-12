import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'

const URL = 'http://localhost:3000/db.json'

const App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get(URL)
      .then(({ data }) => {
        setPizzas(data.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} />
      </main>
    </div>
  )
}

export default App
