import { Screen } from "mobilewright";

export default class SignUpPage {
    constructor(readonly screen: Screen, readonly platform: 'ios' | 'android' | undefined) { }

    get signUpTab() { return this.screen.getByText('Sign up', { exact: true }) }

    get confirmPasswordInput() {
        return this.platform === 'android'
            ? this.screen.getByLabel('input-repeat-password')
            : this.screen.getByPlaceholder('Confirm password');
    }

    get signUpButton() {
        return this.platform === 'android'
            ? this.screen.getByLabel('button-SIGN UP')
            : this.screen.getByText('SIGN UP', { exact: true });
    }

    get successMessage() {
        return this.platform === 'android'
            ? this.screen.getByText('Signed Up!', { exact: true })
            : this.screen.getByLabel('Signed Up!', { exact: true })
    }

    get successMessageDescription() {
        return this.screen.getByText('You successfully signed up!', { exact: true })
    }

}