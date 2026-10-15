import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {


   private readonly emailid: Locator;
   private readonly password: Locator;
   private readonly loginbtn: Locator;
   private readonly forgotpswdlink: Locator;
   private readonly logo: Locator;
   private readonly errormsglogin: Locator;

   constructor(page: Page) {
      super(page);
      this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
      this.password = page.getByLabel('Password');
      this.loginbtn = page.getByRole('button', { name: 'Login' })
      this.forgotpswdlink = page.getByRole('link', { name: 'Forgotten Password' }).first();
      this.logo = page.getByRole('img', { name: 'naveenopencart' });
      this.errormsglogin = page.locator('.alert.alert-danger.alert-dismissible');



   }


   async gotoLoginPage(): Promise<void> {
      await this.page.goto(`opencart/index.php?route=account/login`);
      await this.page.waitForLoadState('load');

   }

   async getLoginPageTitle(): Promise<string> {
      await this.page.waitForLoadState('load')
      return await this.page.title();
   }

   async getforgotLinkisVisible(): Promise<boolean> {

      return await this.forgotpswdlink.isVisible();
   }


   async doLogin(username: string, password: string) {

      await this.emailid.fill(username);
      await this.password.fill(password);
      await this.loginbtn.click();
      await this.page.waitForLoadState('load');
   }

   async verifyinvalidLoginerror() {
      await expect(this.errormsglogin).toBeVisible();
   }


}