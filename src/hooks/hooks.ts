import { Before, After, Status,setDefaultTimeout,} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld"; 
import dotenv from "dotenv";
import { Registerpage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
dotenv.config({
    path: "./env/.env.qa"
});
setDefaultTimeout(60000);
Before(async function(this:CustomWorld){
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.registerPage = new Registerpage(this.page);
    this.loginPage = new LoginPage(this.page);
});

After(async function(this:CustomWorld,{pickle,result}){
    console.log(result?.status);
    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({
            path: `Reports/screenshots/${pickle.name}.png`,
            type: "png",
        });
    }
    await this.page.close();
    await this.browser.close();
})