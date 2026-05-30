import { test, expect } from '@mobilewright/test';
import { faker } from '@faker-js/faker';


test.beforeEach('open sign up screen', async ({ screen }) => {
    await screen.getByRole('button', { name: 'Login' }).tap();

    const loginSignUpHeading = screen.getByText('Login / Sign up Form', { exact: true });
    await expect(loginSignUpHeading).toBeVisible();

    const signUpTab = screen.getByText('Sign up', { exact: true });
    await expect(signUpTab).toBeVisible();
    await signUpTab.tap();
})

test("sign up form fields", async ({ screen }) => {
    const emailInput = screen.getByPlaceholder('Email');
    const passwordInput = screen.getByPlaceholder('Password');
    const confirmPasswordInput = screen.getByPlaceholder('Confirm password');
    const signUpButton = screen.getByText('SIGN UP', { exact: true });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(confirmPasswordInput).toBeVisible();
    await expect(signUpButton).toBeVisible();
});

test('sign up user', async ({ screen }) => {
    const signUpTab = screen.getByText('Sign up', { exact: true });
    await signUpTab.tap();

    const userData = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    const emailInput = screen.getByPlaceholder('Email');
    const passwordInput = screen.getByPlaceholder('Password');
    const confirmPasswordInput = screen.getByPlaceholder('Confirm password');
    const signUpButton = screen.getByText('SIGN UP', { exact: true });

    await emailInput.fill(userData.email);
    await passwordInput.fill(userData.password);
    await confirmPasswordInput.fill(userData.password);
    await passwordInput.fill(userData.password);
    await signUpButton.tap();

    const successMessage = screen.getByLabel('Signed Up!', { exact: true });
    const successMessageDescription = screen.getByText('You successfully signed up!', { exact: true });

    await expect(successMessage).toBeVisible();
    await expect(successMessageDescription).toBeVisible();
})
