// 第一种写法
const aLink = document.getElementById('link') as HTMLAnchorElement
// 第二种写法 不常用
// const aLink = <HTMLAnchorElement>document.getElementById('link')
aLink.href = 'www.baidu.com'
