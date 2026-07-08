import { Page, Locator, expect } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;

    readonly registerLink: Locator;
    readonly genderFemale: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.registerLink = page.locator(".ico-register");
        this.genderFemale = page.locator("#gender-female");  
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        this.registerButton = page.locator("#register-button");
        this.successMessage = page.locator(".result");
        this.continueButton = page.locator(".register-continue-button");
    }

    async openRegisterPage() {

        await this.page.goto("https://demowebshop.tricentis.com/");
        await this.registerLink.click();
    }

    async selectGender() {
        await this.genderFemale.check();
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.fill(confirmPassword);
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async registerUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string
    ){

        await this.selectGender();
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
        await this.clickRegister();
    }

    async verifyRegistrationSuccess() {
        await expect(this.successMessage).toHaveText("Your registration completed");
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}