export class CypressElementAdapter {
  handle: any
  ctx: any

  constructor(handle, ctx = {}) {
    this.handle = handle
    this.ctx = ctx
  }

  as(alias) {    
    this.ctx[alias] = this.handle
    return this
  }

  async hover(opts) {
    return this.handle.hover(opts)
  }

  async click(opts) {
    return this.handle.click(opts)
  }

  async dblclick(opts) {
    return this.handle.dblclick(opts)
  }
  
  async input(text) {
    return this.handle.fill(text)
  }

  async type(text) {
    return this.handle.type(text)
  }

  async check() {
    return this.handle.check()
  }

  async uncheck() {
    return this.handle.uncheck()
  }  

  async select(option) {
    return this.handle.selectOption(option)
  }    
}
