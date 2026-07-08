import { IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { RegisterPage } from "../pages/registerPage";
import {LoginPage} from "../pages/loginPage";

export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    registerPage!: RegisterPage;
    loginPage!: LoginPage;

    constructor(options: IWorldOptions) {
        super(options);
    }
}