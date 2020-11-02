export class BrowserType {
  browserType: any

  constructor(browserType) {
    this.browserType = browserType
  }

  launch() {
    this.browserType.launch()
  }
}