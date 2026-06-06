import { test, expect } from '@mobilewright/test';
import MenuPage, { MenuOptionAndroid, MenuOptionIos } from '../pages/menu.page';
import LandingPage from '../pages/landing.page';


test('app launches and shows home screen', async ({ screen }) => {
    const landingPage = new LandingPage(screen);

    await expect(landingPage.appLogo).toBeVisible();
    await expect(landingPage.aboutApp).toBeVisible();
});


test('validates presence of menu buttons', async ({ screen, platform }) => {

    const menuOptions = {
        ios: ["Home", "Webview", "Login", "Forms", "Swipe", "Drag", "Menu"] as MenuOptionIos[],
        android: ["Home", "Web", "Login", "Forms", "Swipe", "Drag", "Menu"] as MenuOptionAndroid[]
    }

    const platFormBasedMenuOptions = menuOptions[platform as 'ios' | 'android'];

    const menuPage = new MenuPage(screen, platform);

    for (const menu of platFormBasedMenuOptions) {
        await expect(menuPage.getHomeMenu(menu)).toBeVisible();
    }
});