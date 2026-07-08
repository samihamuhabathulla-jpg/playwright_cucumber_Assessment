import {Page, Locator} from "@playwright/test";
export class Registerpage{
    private page:Page;
    private fname:Locator;
    private lname:Locator;
    private email:Locator;
    private pass:Locator;
    private cpass:Locator;
    private registerbtn:Locator;
    private continue:Locator;
    readonly books:Locator;

    constructor(page:Page){
        this.page = page;
        this.fname = page.getByRole('textbox', { name: 'First name:' });
        this.lname = page.getByRole('textbox', { name: 'Last name:' });
        this.email = page.getByRole('textbox', { name: 'Email:' });
        this.pass = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.cpass = page.getByRole('textbox', { name: 'Confirm password:' });
        this.registerbtn = page.getByRole('button', { name: 'Register' });
        this.continue = page.locator("input[value='Continue']");
        this.books = page.locator("div[class='block block-category-navigation'] li:nth-child(1) a:nth-child(1)");
    }
    async enteringDetails(fname:string,lname:string,email:string){
        await this.fname.fill(fname);
        await this.lname.fill(lname);
        await this.email.fill(email);
    }
    async enteringpassword(pass:string,cpass:string){
        await this.pass.fill(pass);
        await this.cpass.fill(cpass);
    }
    async register(){
        await this.registerbtn.click();
        await this.continue.click();
    }
}