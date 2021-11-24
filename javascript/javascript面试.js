// for (var i = 0; i < 5; i++) {
//     (function(i){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000)
//     })(i);
// }

const { default: Axios } = require("_axios@0.18.1@axios");

function Person(name, age, job){ 
    this.name = name; 
    this.age = age; 
    this.job = job; 
    this.sayName = function() { 
        console.log(this.name); 
    }; 
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
console.log(person1 instanceof Object);
console.log(person2 instanceof Object);


console.log(['1', '2', '3'].map(parseInt));

// 数组去重
function unique (arr) {
    return Array.from(new Set(arr))
}

function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}

function unique(arr){            
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}

// 12. 原因
// 首页需要加载比较大的js文件, 解决方法是 在路由返回前添加loading
// 这类问题不仅是vue。因为是spa，而且所有的渲染都在脚本上，js执行需要时间。另外加载js也要时间，所以页面越大，加载时间越长，而且js执行的时间也长，dcl发生的时间点就更晚，所以会白屏

// 办法
// 优化 webpack 减少模块打包体积，code-split 按需加载
// 服务端渲染，在服务端事先拼装好首页所需的 html
// 首页加 loading 或 骨架屏 （仅仅是优化体验）
// 服务端开启gzip压缩
// 打包文件分包，提取公共文件包

// 解析 URL
var url="http://www.baidu.com/we/index.html?id=&aaa=123&ccc=456";

function transform (str){
    const query = {};
    const data = str.slice(str.indexOf("?"), str.length);
    const params = data.substr(1).split("&");
    for (i = 0; i < params.length; i++) {
        
　　    const val = params[i].split("=");
        
　　    query[val[0]] = val[1]
    }
    console.log(query);
}
transform(url);

// 利用Promise 和 async/await 现有一个接口 https://test.com/get?id=1, 需要发起id 从1~200 的get 请求,
// 要求分20次发出, 前一轮全部完成才能进行下一轮, 每轮并发10次
const getPromise = (current) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`OK${current+1}`)
        }, 500)
    })
}
const test = async (count = 0) => {
    let fns = [];
    for (let i = 0; i < 10; i++) {
        fns.push(getPromise(count * 10 + i))
    }
    Promise.all(fns).then((datas) => {
        console.log(datas);
        if(count < 19){
            count++
            test(count)
        }
    })
}
// test()

Object.prototype.toString = () => {
    console.log(123, this, Object);
    let str = '{'
    for (const key in this) {
        str += `${key}: ${this[key]}`
    }
    return `${str} }`
};

let a = {a: 'a'};
console.log(
    a.toString()
);
