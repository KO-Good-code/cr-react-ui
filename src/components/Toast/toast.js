class Toast {
  constructor(duration = 2000){
    this.body = document.querySelector('body');
    this.div = document.createElement('div');
    this.div.classList.add('cr-toast')
    this.duration = duration;
  }

  success(info) {
    this.enter(info, 'success')
  }

  warning(info) {
    this.enter(info, 'warning')
  }

  error(info) {
    this.enter(info, 'error')
  }

  close (div1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        div1.classList.add('leave');
        resolve(true)
      }, this.duration)
    })
    
  }

  enter(info, type) {
    const svgType = {
      success: '#icon-check-circle-fill',
      error: '#icon-close-circle-fill',
      warning: '#icon-warning-circle-fill'
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const content = document.createElement('span');
    const div1 = document.createElement('div');
    this.div.appendChild(div1)
    div1.classList.add('cr-toast-notice')
    div1.classList.add('enter')
    svg.setAttribute('class', 'icon')
    svg.setAttribute('aria-hidden', 'true')
    svg.appendChild(use)
    div1.appendChild(svg);
    div1.appendChild(content);
    content.innerText = info;
    div1.classList.add(type);
    use.setAttributeNS('http://www.w3.org/1999/xlink' ,'xlink:href', svgType[type]);
    this.body.append(this.div);
    setTimeout(() => {
      div1.classList.add('enter-active');
    },10)
    this.close(div1).then( res => {
      setTimeout(() => {
        this.div.removeChild(div1)
      },300)
    })
  }


}

export default Toast;