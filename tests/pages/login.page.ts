import { Screen } from "mobilewright";

export default class LoginPage {
    constructor(readonly screen: Screen) { }

    get loginSignUpHeading() { return this.screen.getByText('Login / Sign up Form', { exact: true }) }
    get loginTab() { return this.screen.getByText('Login', { exact: true }) }
    get emailInput() { return this.screen.getByPlaceholder('Email') }
    get passwordInput() { return this.screen.getByPlaceholder('Password') }
    get signInButton() { return this.screen.getByText('LOGIN', { exact: true }) }
    get biometricLoginInfo() { return this.screen.getByText('When the device has Touch/FaceID (iOS)', { exact: false }) }
}