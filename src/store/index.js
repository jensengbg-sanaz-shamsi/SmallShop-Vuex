import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      {
        name: 'Tiny tea pot', 
        price: 50
      },
      {
        name: 'Tiny machine', 
        price: 90
      },
      {
        name: 'Tiny gun', 
        price: 100
      },
      {
        name: 'Tiny book', 
        price: 60
      },
    ]
  },
  getters:
  //getters is for returning staff 
  {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
          return {
              name: '*' + product.name + '*',
              price: product.price / 2
          }
      });
      return saleProducts
    }
  },
    mutations: 
    //mutation is for changing
    {
      reducePrice: state => {
        state.products.forEach( product => {
          product.price -= 1;
        })
      }
    }
  }
)
