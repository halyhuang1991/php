class DateString extends HTMLElement {
    constructor() {
      super()
      return
    }
  
    // 返回需要监听的属性，当属性值改变的时候会调用 attributeChangedCallback 这个方法
    static get observedAttributes () {
      return ['ln','test']
    }
  
    attributeChangedCallback (name, oldValue, newValue) {
      console.log(name, oldValue, newValue);
      this.updateRendering (newValue);
    }
  
    // 元素插入到文档中时调用
    connectedCallback() {
      const ln = this.getAttribute('ln')
      this.updateRendering(ln)
    }
  
    // 元素从文档中移除时调用
    disconnectedCallback () {
      window.clearInterval(this.interval)
    }
  
    updateRendering (ln = 'zh') {
      // 一个比较好的实践就是在渲染时，检查元素的 ownerDocument.defaultView, 如果不存在则什么都不干
      if (!this.ownerDocument.defaultView) {
        return
      }
      if (this.interval) {
        window.clearInterval(this.interval)
      }
      this.interval = setInterval(() => {
        if (ln === 'zh') {
          this.innerHTML = new Date().toLocaleString()
        } else {
          this.innerHTML = new Date().toString()
        }
      }, 1000)
    }
  }

  customElements.define('x-ds', DateString)