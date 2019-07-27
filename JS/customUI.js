class XAlert extends HTMLElement{
    // 相当于v0中的createdCallback，但要注意的是v0中的createdCallback仅元素处于resolved状态时才触发，而v1中的constructor就是即使元素处于undefined状态也会触发，因此尽量将操作延迟到connectedCallback里执行
    constructor(){
      super() // 必须调用父类的构造函数
  
      const raw = this.innerHTML
      if(raw!="")return;
      this.innerHTML = `<div class="alert alert-warning alert-dismissible fade in">
                          <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <div class="content">${raw}</div>
                        </div>`
      this.querySelector('button.close').addEventListener('click', _ => this.close())
    }
    // 相当于v0中的attachedCallback
    connectedCallback(){
      console.log('invoked connectedCallback!')
    }
    // 相当于v0中的detachedCallback
    disconnectedCallback(){
      console.log('invoked disconnectedCallback!')
    }
    // 相当于v0中的attributeChangedCallback,但新增一个可选的observedAttributes属性来约束所监听的属性数目
    attributeChangedCallback(attrName, oldVal, newVal){
      console.log(`attributeChangedCallback-change ${attrName} from ${oldVal} to ${newVal}`)
    }
    // 缺省时表示attributeChangedCallback将监听所有属性变化，若返回数组则仅监听数组中的属性变化
    static get observedAttributes(){ return ['disabled'] }
    // 新增事件回调，就是通过document.adoptNode方法修改元素ownerDocument属性时触发
    adoptedCallback(){
      console.log('invoked adoptedCallback!')
    }
    get textContent(){
      return this.querySelector('.content').textContent
    }
    set textContent(val){
      this.querySelector('.content').textContent = val
    }
    close(){
      this.style.display = 'none'
    }
    show(){
      this.style.display = 'block'
    }
  }
  customElements.define('x-alert', XAlert)