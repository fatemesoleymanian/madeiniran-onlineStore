import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    products: [],
    cart: [],
    wishlist: [],
    compare: [],
    blogs: [],
    latestBlogs:[],
    flag : true,
    newUser:false,
    categories:[],
    tags:[],
    states:[],
    oneCategory:'',
    oneProductStates:[]
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },
    getStates(state) {
        return state.states
    },
    getOneCategory(state){
        return state.oneCategory
    },
    getOneProductStates(state){
        return state.oneProductStates
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

    categoryList(state) {
        return state.categories
    },
    tagList: state => {
        return state.tags
    },

    stateList: state => {
        return state.states
    },
}


// contains your mutations
export const mutations = {

    SET_PRODUCT(state, product) {
        state.products = product
    },
    SET_STATE(state, states) {
        state.states = states
    },
    SET_BLOG(state, blog) {
        state.blogs = blog
    },
    SET_ONE_CATEGORY(state, category) {
        state.oneCategory = category
    },
    SET_ONE_PRODUCT_STATES(state, states) {
        state.oneProductStates = states
    },
    SET_CART(state,cart)
    {
        state.cart = cart
    },
    SET_WISHLIST(state,wishlist)
    {
        state.wishlist = wishlist
    },
    SET_TAG(state,tag){
        state.tags = tag
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
    SET_Category(state,category)
    {
        state.categories = category
    },
    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)

        if (item) {
            item.cartQuantity++
            item.count++
            //////////////////
            // const price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            // item.cartQuantity = item.cartQuantity + payload.cartQuantity
            // item.total = item.cartQuantity * price
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
        if (found)
        {
            found.cartQuantity--
            found.count--
        }
        // const price = found.discount ? found.price - (found.price *(found.discount)/100) : found.price;
        // found.cartQuantity = found.cartQuantity - payload.cartQuantity
        // found.total = found.cartQuantity * price
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

    setProduct({commit},product){
        commit('SET_PRODUCT',product)
    },
    setState({commit},state){
        commit('SET_STATE',state)
    },
    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },
    setOneProductStates({commit}, payload) {
        commit('SET_ONE_PRODUCT_STATES', payload)
    },
    setOneCategoryProduct({commit}, payload) {
        commit('SET_ONE_CATEGORY', payload)
    },

    initCart({commit},cart)
    {
        commit('SET_CART',cart)
    },
    initWishlist({commit},wishlist)
    {
        commit('SET_WISHLIST',wishlist)
    },
    setTags({commit},tag){
        commit('SET_TAG',tag)
    },
    setFlag({commit},flag)
    {
        commit('SET_FLAG',flag)
    },
    setCategory({commit},category)
    {
        commit('SET_Category',category)
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

