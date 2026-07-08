import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";

Given("User launches the Demo Web Shop login page",async function (this: CustomWorld) {
        await this.loginPage.openLoginPage();
    });

When("User logs in with {string} and {string}",async function (this: CustomWorld,email: string,password: string) {
        await this.loginPage.login(email, password);
    });

Then("Login should be {string}",async function (this: CustomWorld,result: string) {
        if (result === "success") {
            await this.loginPage.verifySuccessfulLogin();
            await this.loginPage.logout();
        } else {
            await this.loginPage.verifyFailedLogin();

        }

    }
);