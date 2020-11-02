export class Browser {
  browser: any

  constructor(browser) {
    this.browser = browser
  }

  newPage() {
    return this.browser.newPage()
  }

  close() {
    this.browser.close()
  }
}