<template>
    <div>
        <!-- 在标签显示区显示变量内容，要加双大括号包裹 -->
        <span>这是子组件1,收到的数据：{{msg1}}</span>
        <button v-on:click='sendBack1'>child1点击回传234字符串</button>
        <ol>
            <template>
                    <!-- v-for循环的用法，把testArray数组每一项取出来放到item里面，index是索引 -->
                    <div v-for="(item,index) in testArray" :key=index>
                         {{item}}
                    </div>              
            </template>
        </ol>
        <div>
            <input v-model="a" type="text">
            <input v-model="b" type="text"><br>
            <!-- 调用计算属性，用双大括号包裹，里面写方法名即可，不用小括号 -->
            <span>a+b={{addAB}}</span><br>
            <span>a*b={{plusAB}}</span>
        </div>
        <input v-model="c" type="text">
    </div>
</template>

<script>
    export default {
        name:'child1',
        //props放的是父组件传过来的值，变量名要跟父组件传过来的完全一致，且定义好变量类型
        props:{
            //这里的要接收的变量，要定义类型，类型都是大写开头，数字类型为Number
            msg1:String,
        },
        methods:{
            sendBack1(){
                //触发某个事件，用this.$emit方法，里面第一个参数是事件名称，后面的是要传的参数，可以有多个，
                // 在接收的时候，按顺序对应接收
                this.$emit('child1','234','456');
            }
        },
        //数据属性是方法形式，里面return包裹定义的变量，要指定一个初始值
        data(){
            return{
                testArray:[123,456,789],
                a:0,
                b:0,
                c:0,
            }
        },
        //计算属性
        computed:{
            addAB(){
                return Number(this.a)+Number(this.b);
            },
            plusAB(){
                return Number(this.a)*Number(this.b);
            }
        },
        //侦听器，侦听c变量，一旦c发生变化，就触发方法体
        watch:{
            c(newvalue,oldvalue){
                console.log(newvalue);
            }
        }

    }
</script>

<style scoped>

</style>