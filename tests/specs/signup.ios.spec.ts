import { test, expect } from '@mobilewright/test';
import { faker } from '@faker-js/faker';
import MenuPage from '../pages/menu.page';
import LoginPage from '../pages/login.page';
import SignUpPage from '../pages/signup.page';


test.beforeEach('open sign up screen', async ({ screen }) => {
    const menuPage = new MenuPage(screen);
    await menuPage.getHomeMenu('Login').tap();

    const loginPage = new LoginPage(screen);
    await expect(loginPage.loginSignUpHeading).toBeVisible();

    const singUpPage = new SignUpPage(screen);
    await expect(singUpPage.signUpTab).toBeVisible();
    await singUpPage.signUpTab.tap();
})

test("sign up form fields", async ({ screen }) => {
    const loginPage = new LoginPage(screen);
    const singUpPage = new SignUpPage(screen);

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(singUpPage.confirmPasswordInput).toBeVisible();
    await expect(singUpPage.signUpButton).toBeVisible();
});

test('sign up user', async ({ screen }) => {
    const loginPage = new LoginPage(screen);
    const singUpPage = new SignUpPage(screen);

    await singUpPage.signUpTab.tap();

    const userData = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    await loginPage.emailInput.fill(userData.email);
    await loginPage.passwordInput.fill(userData.password);
    await singUpPage.confirmPasswordInput.fill(userData.password);
    await loginPage.passwordInput.fill(userData.password);
    await singUpPage.signUpButton.tap();

    await expect(singUpPage.successMessage).toBeVisible();
    await expect(singUpPage.successMessageDescription).toBeVisible();
})
