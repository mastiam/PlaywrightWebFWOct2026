import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {


   private readonly logout: Locator;
   private readonly headers: Locator;
   private readonly searchbox: Locator;
   private readonly searchbtn: Locator;

   constructor(page: Page) {
      super(page);
      this.logout = page.getByRole('link', { name: 'Logout' });
      this.headers = page.getByRole('heading', { level: 2 });
      this.searchbox = page.getByRole('textbox', { name: 'search' });
      this.searchbtn = page.locator('#search button');



   }

   async getHomePageTitle(): Promise<string> {

      return await this.page.title();
   }



   async logoutIsVisible(): Promise<boolean> {
      await this.logout.waitFor({ state: "visible" });
      return await this.logout.isVisible();
   }


   async getpageHeaderslist(): Promise<string[]> {
      //await this.page.waitForTimeout(5000)
      await this.logout.waitFor({ state: "visible" })
      return await this.headers.allInnerTexts()
   }

   async searchProduct(productname: string): Promise<void> {
      await this.searchbox.fill(productname);
      await this.searchbtn.click();
   }







}