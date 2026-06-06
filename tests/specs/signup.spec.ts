import { test, expect } from '@mobilewright/test';
import { faker } from '@faker-js/faker';
import MenuPage from '../pages/menu.page';
import LoginPage from '../pages/login.page';
import SignUpPage from '../pages/signup.page';

test.beforeEach('open sign up screen', async ({ screen, platform }) => {
    const menuPage = new MenuPage(screen, platform);
    await menuPage.getHomeMenu('Login').tap();

    const loginPage = new LoginPage(screen, platform);
    await expect(loginPage.loginSignUpHeading).toBeVisible();

    const singUpPage = new SignUpPage(screen, platform);
    await expect(singUpPage.signUpTab).toBeVisible();
    await singUpPage.signUpTab.tap();
})

test("sign up form fields", async ({ screen, platform }) => {
    const loginPage = new LoginPage(screen, platform);
    const singUpPage = new SignUpPage(screen, platform);

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(singUpPage.confirmPasswordInput).toBeVisible();
    await expect(singUpPage.signUpButton).toBeVisible();
});

test('sign up user', async ({ screen, platform }) => {
    const loginPage = new LoginPage(screen, platform);
    const singUpPage = new SignUpPage(screen, platform);

    await singUpPage.signUpTab.tap();

    const userData = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    await loginPage.emailInput.fill(userData.email);
    await loginPage.passwordInput.fill(userData.password);
    await singUpPage.confirmPasswordInput.fill(userData.password);

    if (platform === 'ios') await loginPage.passwordInput.fill(userData.password);

    await singUpPage.signUpButton.tap();

    await expect(singUpPage.successMessage).toBeVisible();
    await expect(singUpPage.successMessageDescription).toBeVisible();
})
