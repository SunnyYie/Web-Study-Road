let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: 'jack',
  age: 19,
  sayHi() {
    console.log('Hello')
  },
  greet(name) {
    console.log(name)
  },
}

person.greet('sxc')

// 对象可选属性
function myAxios(config: { url: string; method?: string }) {
  console.log('url:', config.url, 'method:', config.method)
}

myAxios({
  url: 'www.baidu.com',
  method: 'get',
})
