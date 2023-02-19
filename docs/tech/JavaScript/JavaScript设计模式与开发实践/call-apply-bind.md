# call apply bind 与 this


## 什么是this？
this是一个指针，指向某一个对象，而这个对象时再运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境

## this的指向
* 作为对象的方法调用，this指向该对象
  * ```js
      var obj = {
        a: 1,
        getA: function() {
          alert(this === obj) // true
          alert(this.a) // 1
        }
      }
      obj.getA()
    ```
* 作为普通函数调用， this指向全局对象
  * ```js
      window.name = 'globalName'

      var obj = {
        name: 'sevn',
        getName: function() {
          return this.name
        }
      }

      var getName = obj.getName
      console.log( getName() ) // globalName
    ```
* 构造器调用，如果构造器函数返回值类型的话，就会返回创建的对象，如果是引用类型，返回引用类型的对象
  * ```js
      function MyClass() {
        this.name = 'sevn'
        return {
          name: 'anne'
        }
      }
      var obj = new MyClass()
      alert(obj.name)  // anne
    ```
* call apply bind 调用，动态改变传入函数的this，第一个参数指定函数体内的this指向，null则指向window
  * apply 第二个参数接收一个带下标的集合，可以是数组，类数组
    * ```js
        Function.prototype.myApply = function(context, args) {
          if (!context || context == null) {
            context = window
          }

          let fn = Symbol()
          context[fn] = this
          
          let res = context[fn](...args)
          delete fn
          return res
        }
      ```
    * call 可以看作包装在apply上的一颗语法糖，call从第二个参数往后，每个参数依次传入函数
      * ```js
          Function.prototype.myCall = function(context, ...args) {
            if (!context || context == null) {
              context = window
            }
            let fn = Symbol()
            context[fn] = this

            let res = context[fn](...args)
            delete fn
            return res
          }
        ```
    * bind返回新的函数
      * ```js
          Function.prototype.myBind = function() {
            let self = this,
            context = [].shift.call(arguments), // this对象
            args = [].slice.call(arguments) // 剩余参数转成数组
            return function() {
              return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
              // 执行新的函数的时候，会将之前传入的context当做新函数体内的this
              // 并且组合两次分别传入的参数，作为新函数的参数
            }
          }
        ```
* `Array.prototype.push`实际上一个属性复制的过程，把参数按照下标一次添加到被push的对象上，并顺便修改了这个对象的`length`属性
  * push方法的对象需要满足两个条件
    * 对象本身要可以存取属性
    * 对象的length属性可读写
  * ```js
      let a = {}
      Array.prototype.push.call(a, 'first')

      alert(a.length) // 1
      alert(a[0]) // first

      let a = 1
      Array.prototype.push.call(a, 'first')
      alert(a.length) // undefined
      alert(a[0]) // undefined

      function func() {}
      Array.prototype.push.call(func, 'first')

      alert(func.length) // 报错，cannot assign to read only property 'length' of function(){}
    ```