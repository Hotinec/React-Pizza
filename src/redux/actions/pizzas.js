import axios from 'axios'

export const setPizzas = (payload) => ({
  type: 'SET_PIZZAS',
  payload
})

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`
    http://localhost:3004/pizzas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}
  `).then(({ data }) => {
    dispatch(setPizzas(data))
  })
}
