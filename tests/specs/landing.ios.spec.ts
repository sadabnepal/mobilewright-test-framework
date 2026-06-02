import { test, expect } from '@mobilewright/test';
import MenuPage, { MenuOption } from '../pages/menu.page';
import LandingPage from '../pages/landing.page';

test('app launches and shows home screen', async ({ screen }) => {
    const landingPage = new LandingPage(screen);

    await expect(landingPage.appLogo).toBeVisible();
    await expect(landingPage.aboutApp).toBeVisible();
});

test('validates presence of menu buttons', async ({ screen }) => {
    const menuOptions: MenuOption[] = ["Home", "Webview", "Login", "Forms", "Swipe", "Drag", "Menu"];

    const menuPage = new MenuPage(screen);

    for (const menu of menuOptions) {
        await expect(menuPage.getHomeMenu(menu)).toBeVisible();
    }
});