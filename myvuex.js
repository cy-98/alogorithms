

class Store {
    constructor(options) {
        this.state = options.state

        // getters
        let getters = options.getters

        this.getters = {}

        Object.keys(getters).forEach(getterName => {
            Object.defineProperties(this.getters, getterName, {
                get:() => getters[getterName](state)
            } )
        })
        
        // mutations
        let mutations = options.mutations
        this.mutations = {}

        Object.keys(mutations).forEach(mutationsName => {
            this.mutations[mutationsName] = (payload) => {
                mutations[mutationsName](this.state.payload)
            }
        })

        // commit
        this.commit = (mutation, payload)=>{
            this.mutations[mutationsName](payload)
        }

        // actions
        let actions = options.actions || {}
        this.actions = {}

        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = (payload, value)=>{
                setTimeout(() => {
                    value(this, payload)   
                })
            }
        })

        this.dispatch=(actionName, payload) => {
            this.actions[actionName](payload)
        }
    }
    get state() {
        return this.state
    }
}

const install = (Vue) => {
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            } else {
                this.$store =this.$parent && this.$parent.$store
            }
        }
    })
}


export default {
    install,
    Store
}