import { ElementContainer } from "./elementContainer"
type AsyncCallback = () => Promise<any>;

export class CypressElementAdapter extends ElementContainer {
  handle: any
  ctx: any

  constructor(handle, ctx = {}) {
    super(ctx)
    this.handle = handle
  }

  get cy() {
    return this.ctx.cy
  }

  focus() {
    return this.handle.focus()
  }

  async within(cb: AsyncCallback) {
    const oldBaseElement = this.cy.baseElement()
    this.cy.setBaseElement(this)
    await cb()
    this.cy.setBaseElement(oldBaseElement)
    return this
  }

  as(alias) {    
    this.aliases[alias] = this.handle
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
