import { Screen } from "mobilewright";

export type MenuOption = "Home" | "Webview" | "Login" | "Forms" | "Swipe" | "Drag" | "Menu";

export default class MenuPage {
    constructor(readonly screen: Screen) { }

    getHomeMenu(option: MenuOption) {
        return this.screen.getByRole('button', { name: option });
    }

}