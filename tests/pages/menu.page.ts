import { Screen } from "mobilewright";

export type MenuOptionIos = "Home" | "Webview" | "Login" | "Forms" | "Swipe" | "Drag" | "Menu";
export type MenuOptionAndroid = "Home" | "Web" | "Login" | "Forms" | "Swipe" | "Drag" | "Menu";

export default class MenuPage {

    constructor(readonly screen: Screen, readonly platform: 'ios' | 'android' | undefined) { }

    getHomeMenu(option: MenuOptionIos | MenuOptionAndroid) {
        return this.platform === 'ios'
            ? this.screen.getByRole('button', { name: option })
            : this.screen.getByText(option);
    }

}