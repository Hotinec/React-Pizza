import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from './pages'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
      </main>
    </div>
  )
}

export default App


//===== Do not delete! =====

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps =  {setPizzas}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
