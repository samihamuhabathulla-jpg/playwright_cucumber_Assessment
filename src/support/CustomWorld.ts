import { Browser, BrowserContext, Page } from "@playwright/test";
import { Registerpage } from "../pages/registerPage"; 
import {LoginPage} from "../pages/loginPage";

export class CustomWorld {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    registerPage!: Registerpage;
    loginPage!: LoginPage;

    
}

