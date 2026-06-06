import { Screen } from "mobilewright";

export default class LoginPage {
    constructor(readonly screen: Screen, readonly platform: "ios" | "android" | undefined) { }

    get loginSignUpHeading() { return this.screen.getByText('Login / Sign up Form', { exact: true }) }
    get loginTab() { return this.screen.getByText('Login', { exact: true }) }
    get biometricLoginInfo() { return this.screen.getByText('When the device has Touch/FaceID (iOS)', { exact: false }) }

    get emailInput() {
        return this.platform === 'android'
            ? this.screen.getByLabel('input-email')
            : this.screen.getByRole('textbox', { name: 'Email' });
    }

    get passwordInput() {
        return this.platform === 'android'
            ? this.screen.getByLabel('input-password')
            : this.screen.getByRole('textbox', { name: 'Password' });
    }

    get signInButton() {
        return this.platform === 'android'
            ? this.screen.getByLabel('button-LOGIN')
            : this.screen.getByRole('button', { name: 'LOGIN' });
    }

}