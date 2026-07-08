import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly logoutLink: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.loginLink = page.locator(".ico-login");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.loginButton = page.locator("input.button-1.login-button");
        this.logoutLink = page.locator(".ico-logout");
        this.errorMessage = page.locator(".validation-summary-errors");
    }

    async openLoginPage() {

        await this.page.goto("https://demowebshop.tricentis.com/");
        await this.loginLink.click();

    }

    async login(email: string, password: string) {

        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();

    }

    async verifySuccessfulLogin() {

        await expect(this.logoutLink).toBeVisible();

    }

    async verifyFailedLogin() {

        await expect(this.errorMessage).toContainText("Login was unsuccessful.");

    }

    async logout() {

        if (await this.logoutLink.isVisible()) {
            await this.logoutLink.click();
        }

    }

}