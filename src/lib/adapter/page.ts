import { CypressElementAdapter } from './element';
export class CypressPageAdapter {
  page: any
  ctx: any

  constructor(page, ctx = {}) {
    this.page = page
    this.ctx = ctx
  }

  async get(selector): Promise<CypressElementAdapter> {
    const handle = await this.page.$(selector);
    return this.createElement(handle)
  }  

  createElement(handle): CypressElementAdapter {
    return new CypressElementAdapter(handle, this.ctx)
  }
}
