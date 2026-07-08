import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";
import { RegisterPage } from "../pages/registerPage";
import {LoginPage} from "../pages/loginPage";

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {

    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);

});

After(async function (this: CustomWorld, scenario) {

    if (scenario.result?.status === "FAILED") {
        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${Date.now()}.png`,
            fullPage: true
        });

        await this.attach(screenshot, "image/png");
    }

    await this.page.close();
    await this.context.close();

});

AfterAll(async () => {
    await browser.close();
});