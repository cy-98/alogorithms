// 原型式继承
function Cars () {
    this.wheels = []
}

function extend (proto){
    
    function Sub(){}

    Sub.prototype = new proto

    return new Sub
}

const bwm = Object.create(new Cars) // const bwm = Object.create(new Cars)
const yq = Object.create(new Cars) // const yq = Object.create(new Cars)

bwm.wheels.push('red')

console.log(
    bwm.wheels,
    yq.wheels
)


// function Socket () {
//     this.sendMessage = ()=>{  }
// }

// function SocketSDK () {
//     Socket.call(this)
//     this.module = {}
// }

// const webIMApp = new SocketSDK()
// const wxIMApp = new SocketSDK()

// webIMApp.sendMessage = ()=>2
// wxIMApp.sendMessage = ()=>3

// console.log(webIMApp.sendMessage(), wxIMApp.sendMessage())



// //原型继承

// function Father(){

// }

// Father.prototype.foo = 'come from Father!'
// Father.prototype.cars = []

// function Son(){}

// Son.prototype = new Father

// const son = new Son
// const grandSon = Object.create(son)


// grandSon.cars.push('bwm')
// console.log(grandSon.cars, son.cars)
// grandSon.cars.push('bwm2')
// console.log(grandSon.cars, son.cars)


