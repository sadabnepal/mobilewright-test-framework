import { Screen } from "mobilewright";

export default class LandingPage {
    constructor(readonly screen: Screen) { }

    get appLogo() { return this.screen.getByText('WEBDRIVER') }
    get aboutApp() { return this.screen.getByText('Demo app for the appium-boilerplate') }
}