import { test, expect } from "@mobilewright/test";
import LoginPage from "../pages/login.page";
import MenuPage from "../pages/menu.page";

test.beforeEach('open login screen', async ({ screen }) => {
    const menuPage = new MenuPage(screen);
    await menuPage.getHomeMenu('Login').tap();

    const loginPage = new LoginPage(screen);
    await expect(loginPage.loginSignUpHeading).toBeVisible();
    await expect(loginPage.loginTab).toBeVisible();
});


test("login form fields", async ({ screen }) => {
    const loginPage = new LoginPage(screen);

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
    await expect(loginPage.biometricLoginInfo).toHaveText('When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.');
});



test('login with invalid email and less than allowed char password', async ({ screen }) => {
    const loginPage = new LoginPage(screen);

    await loginPage.emailInput.fill('invalid-email');
    await loginPage.passwordInput.fill('invalid');
    await loginPage.signInButton.tap();

    await expect(screen.getByText('Please enter a valid email address')).toBeVisible();
    await expect(screen.getByText('Please enter at least 8 characters')).toBeVisible();
});