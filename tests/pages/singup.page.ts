import { Screen } from "mobilewright";

export default class SignUpPage {
    constructor(readonly screen: Screen) { }

    get signUpTab() { return this.screen.getByText('Sign up', { exact: true }) }
    get confirmPasswordInput() { return this.screen.getByPlaceholder('Confirm password') }
    get signUpButton() { return this.screen.getByText('SIGN UP', { exact: true }) }
    get successMessage() { return this.screen.getByLabel('Signed Up!', { exact: true }) }
    get successMessageDescription() { return this.screen.getByText('You successfully signed up!', { exact: true }) }

}