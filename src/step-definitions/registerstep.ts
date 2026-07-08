import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";
Given('the user is on demo web shop register page',async function (this:CustomWorld) {
    console.log(process.env.BASEURL);
    await this.page.goto(process.env.BASEURL!);
});

When('the user fills the credentials', async function (this:CustomWorld,dataTable) {
    const data = dataTable.hashes()[0];
    await this.registerPage.enteringDetails(data.fname,data.lname,data.email);
});

When('fills the password and confirm password', async function (this:CustomWorld,dataTable) {
  // Write code here that turns the phrase above into concrete actions
  const data = dataTable.hashes()[0];
  await this.registerPage.enteringpassword(data.pass,data.cpass);
});

When('then user clicks the register button and then continue', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.registerPage.register();
});

Then('the user should be directed to the home page successfully', async function (this:CustomWorld) {
  await expect(this.registerPage.books).toBeVisible();
});