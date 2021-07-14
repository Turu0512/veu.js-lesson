new Vue ({
el:'#app',
data: {
    message:'hello world!!'
},
methods:{
    reverseMessage:function(){
        this.message=
        this.message.split('').reverse().join('')
    }
}
})