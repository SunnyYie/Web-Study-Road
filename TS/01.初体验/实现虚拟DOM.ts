interface Options {
  el: string | HTMLElement
}

interface VueCls {
  options: Options
  init(): void
}

interface VNode {
  tag: string
  text?: string
  children?: VNode[]
}

class Dom {
  createElement(el: string) {
    return document.createElement(el)
  }
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  // 渲染函数
  render(data: VNode) {
    let root = this.createElement(data.tag)
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((child) => {
        let item = this.render(child)
        root.appendChild(item)
      })
    } else {
      this.setText(root, data.text!)
    }
    return root
  }
}

class Vue extends Dom implements VueCls {
  options: Options
  constructor(options: Options) {
    super()
    this.options = options
    this.init()
  }
  init(): void {
    let data: VNode = {
      tag: 'div',
      children: [
        { tag: 'section', text: '节点1' },
        { tag: 'section', text: '节点2' },
      ],
    }
    let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el
    app?.appendChild(this.render(data))
  }
}

new Vue({ el: '#app' })
