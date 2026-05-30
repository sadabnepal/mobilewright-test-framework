import { test, expect } from "@mobilewright/test";

test.beforeEach('open login screen', async ({ screen }) => {
    await screen.getByRole('button', { name: 'Login' }).tap();

    const loginSignUpHeading = screen.getByText('Login / Sign up Form', { exact: true });
    await expect(loginSignUpHeading).toBeVisible();

    const loginTab = screen.getByText('Login', { exact: true });
    await expect(loginTab).toBeVisible();
});


test("login form fields", async ({ screen }) => {
    const emailInput = screen.getByPlaceholder('Email');
    const passwordInput = screen.getByPlaceholder('Password');
    const signInButton = screen.getByText('LOGIN', { exact: true });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(signInButton).toBeVisible();

    await expect(screen.getByText('When the device has Touch/FaceID (iOS)', { exact: false })).toHaveText('When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.');
});



test('login with invalid email and less than allowed char password', async ({ screen }) => {
    const emailInput = screen.getByPlaceholder('Email');
    const passwordInput = screen.getByPlaceholder('Password');
    const signInButton = screen.getByText('LOGIN', { exact: true });

    await emailInput.fill('invalid-email');
    await passwordInput.fill('invalid');
    await signInButton.tap();

    await expect(screen.getByText('Please enter a valid email address')).toBeVisible();
    await expect(screen.getByText('Please enter at least 8 characters')).toBeVisible();
});