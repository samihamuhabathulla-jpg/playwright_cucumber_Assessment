import {Page,Locator} from "@playwright/test";

export class LoginPage{
    private page:Page;
    private loginclick:Locator;
    private email:Locator;
    private pass:Locator;
    private loginbtn:Locator;
    readonly books:Locator;
    readonly errormsg:Locator;

    constructor(page:Page){
        this.page = page;
        this.loginclick = page.getByRole('link', { name: 'Log in' });
        this.email = page.getByRole('textbox', { name: 'Email:' });
        this.pass = page.getByRole('textbox', { name: 'Password:' });
        this.loginbtn = page.getByRole('button', { name: 'Log in' });
        this.books = page.locator("div[class='block block-category-navigation'] li:nth-child(1) a:nth-child(1)");
        this.errormsg = page.getByText('Login was unsuccessful. Please correct the errors and try again. The')
    }
    async clickLogin(){
        await this.loginclick.click();
    }
    async enteringDetails(email:string,pass:string){
        await this.email.fill(email);
        await this.pass.fill(pass);
    }
    async login(){
        await this.loginbtn.click();
    }
}