import Vue from 'vue'
import Vuex from 'vuex'

import products from "../data/product.json";

Vue.use(Vuex)

export const state = () => ({
    products: products,
    cart: [],
    wishlist: [],
    compare: [],
    blogs: [],
    latestBlogs:[],
    flag : false,
    newUser:false
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },

    getNewUser(state)
    {
        return state.newUser
    },
    getFlag(state)
    {
        return state.flag
    },
    getBlogs(state) {
        return state.blogs
    },
    getLatestBlogs(state) {
        return state.latestBlogs
    },
    getCart: state => {
        return state.cart
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            total += price * item.cartQuantity
        })

        return total;
    },

    getNewProducts: state => {
        return state.products.filter(item => {
            return item.new
        })
    },
    getBestProducts: state => {
        return state.products.filter(item => {
            return item.best
        })
    },
    getSaleProducts: state => {
        return state.products.filter(item => {
            return item.discount
        })
    },

    categoryList: state => {
        return ["all categories",...new Set(state.products.map((list) => list.category).flat())]
    },
    tagList: state => {
        return [...new Set(state.products.map((list) => list.tag).flat())]
    },
    sizeList: state => {
        return ["all sizes",...new Set(state.products.map((list) => list.variation?.sizes).flat())].filter(Boolean)
    },
    colorList: state => {
        return ["all colors",...new Set(state.products.map((list) => list.variation?.color).flat())].filter(Boolean)
    },
}


// contains your mutations
export const mutations = {

    SET_PRODUCT(state, product) {
        state.products = product
    },
    SET_BLOG(state, blog) {
        state.blogs = blog
    },

    SET_NEW_USER(state,newUser)
    {
        state.newUser = newUser
    },
    SET_LATEST_BLOG(state, blogs) {
        state.latestBlogs = blogs
    },
    SET_FLAG(state,flag)
    {
        state.flag = flag
    },
    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            const price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity
            item.total = item.cartQuantity * price
        } else {
            const price = payload.discount ? payload.price - (payload.price *(payload.discount)/100) : payload.price;
            state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: price })
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        const price = found.discount ? found.price - (found.price *(found.discount)/100) : found.price;
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        found.total = found.cartQuantity * price
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
}


// contains your actions
export const actions = {
    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },

    setFlag({commit},flag)
    {
        commit('SET_FLAG',flag)
    },
    setNewUser({commit},newUser)
    {
        commit('SET_NEW_USER',newUser)
    },
    removeProductFromCart({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },
    updateBlogs({commit}, blog) {
        commit('SET_BLOG', blog)
    },
    updateLatestBlogs({commit}, blogs) {
        commit('SET_LATEST_BLOG', blogs)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },
}

