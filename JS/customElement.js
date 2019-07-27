class WordCount extends HTMLParagraphElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // count words in element's parent element
      var wcParent = this.parentNode;
  
      function countWords(node){
        var text = node.innerText || node.textContent
        return text.split(/\s+/g).length;
      }
  
      var count = 'Words: ' + countWords(wcParent);
  
      // Create a shadow root
      var shadow = this.attachShadow({mode: 'open'});
  
      // Create text node and add word count to it
      var text = document.createElement('span');
      text.textContent = count;
  
      // Append it to the shadow root
      shadow.appendChild(text);
  
  
      // Update count when element content changes
      setInterval(function() {
        var count = 'Words: ' + countWords(wcParent);
        text.textContent = count;
      }, 200)
  
    }
  }
  
  // Define the new element
  customElements.define('word-count', WordCount, { extends: 'p' });




class XBtn extends HTMLElement{
    static get observedAttributes(){ return ['disabled'] }
    constructor(){
      super()
  
      this.addEventListener('keydown', e => {
        if (!~[13, 32].indexOf(e.keyCode)) return  
  
        this.dispatchEvent(new MouseEvent('click', {
          cancelable: true,
          bubbles: true
        }))
      })
  
      this.addEventListener('click', e => {
        if (this.disabled){
          e.stopPropagation()
          e.preventDefault()
        }
      })
    }
    connectedCallback(){
      this.setAttribute('tabindex', 0)
      this.setAttribute('role', 'button')
    }
    get disabled(){
      return this.hasAttribute('disabled')
    }
    set disabled(val){
      if (val){
        this.setAttribute('disabled','')
      }
      else{
        this.removeAttribute('disabled')
      }
    }
    attributeChangedCallback(attrName, oldVal, newVal){
      this.setAttribute('aria-disabled', !!this.disabled)
      if (this.disabled){
        this.removeAttribute('tabindex')
      }
      else{
        this.setAttribute('tabindex', '0')
      }
    }
  }
  customElements.define('x-btn', XBtn)