import { CypressElementAdapter } from './element';
export abstract class ElementContainer {
  ctx: any

  constructor(ctx = {}) {
    this.ctx = ctx    
  }

  children() {
    return this.getBySelector('*')
  }

  get page() {
    return this.ctx.page
  }

  get aliases() {
    return this.ctx.aliases
  }

  async get(selectorOrAlias) {
    return await this.aliases[selectorOrAlias] || this.getBySelector(selectorOrAlias)
  }

  protected async getBySelector(selector): Promise<CypressElementAdapter> {
    const handle = await this.page.$(selector);
    return this.createElement(handle)
  }

  protected createElement(handle): CypressElementAdapter {
    return new CypressElementAdapter(handle, this.ctx)
  }

}