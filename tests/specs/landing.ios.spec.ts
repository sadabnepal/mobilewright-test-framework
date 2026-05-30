import { test, expect } from '@mobilewright/test';

test('app launches and shows home screen', async ({ screen }) => {
    const appLogo = screen.getByText('WEBDRIVER');
    await expect(appLogo).toBeVisible();

    const homeScreenElement = screen.getByText('Demo app for the appium-boilerplate');
    await expect(homeScreenElement).toBeVisible();
});

test('validates presence of menu buttons', async ({ screen }) => {
    const menuOptions = ["Home", "Webview", "Login", "Forms", "Swipe", "Drag", "Menu"];

    for (const menu of menuOptions) {
        const menuOptionElement = screen.getByRole('button', { name: menu });
        await expect(menuOptionElement).toBeVisible();
    }
});