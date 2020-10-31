import { CypressElementAdapter } from './element';
import { ElementContainer } from './elementContainer';
export class CypressPageAdapter extends ElementContainer {
  constructor(page, ctx = {}) {
    super(ctx)
    this.ctx.page = page
  }

  async get(selector): Promise<CypressElementAdapter> {
    const handle = await this.page.$(selector);
    return this.createElement(handle)
  }  
}
