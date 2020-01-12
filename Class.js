
class Parent {
    
    static call () {
        console.log('i am a Parent')
    }

    constructor (age, male, job, children) {
        this.age = age
        this.sex = male
        this.job = job
        this.children = children
    }

    work () {                                       // 挂在Parent 的原型上   obj.prototype.work = func..
        console.log( 'out for fucking working' )
    }


}

class Father extends Parent {
    constructor(age, job, children, skill) {
        super(age,'male', job, children)                                //将 Parent 构造器里面的this绑定在当前类的构造器中
        this.indentify = 'father'                                       //
        this.skill = skill
    }

    work () {                                                           //重写父类方法 
        this.skill()
    }

    call () {
        console.log('this is Fathers call')
    }

    static showThis () {                                                // static 实例访问不到  class的method   类似于构造函数返回一个函数变量
        console.log(this)                                               //Father.showThis   static 内部的this 指向的是该class 不会指向实例
        this.call()                                                     //this.call() 指向的是哪个？  static call
        return this
    }

    static call () {
        super.call()                                                    // 访问父类的静态方法 / 表明子类会继承父类的静态方法                  
    }
}
new Father().call()
