import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { readCSV } from "../utils/csvReader";

let registerData: any;

Given("User opens the Demo Web Shop registration page", async function (this: CustomWorld) {
    await this.registerPage.openRegisterPage();
});

When("User registers using CSV data", async function (this: CustomWorld) {
    const data = await readCSV("test-data/register.csv");
    registerData = data[0];

    await this.registerPage.registerUser(
        registerData.firstname,
        registerData.lastname,
        registerData.email,
        registerData.password,
        registerData.confirmPassword
    );

});

Then("Registration should be successfull", async function (this: CustomWorld) {
    await this.registerPage.verifyRegistrationSuccess();
    await this.registerPage.clickContinue();

});