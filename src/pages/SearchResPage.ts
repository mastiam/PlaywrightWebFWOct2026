import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResPage extends BasePage {


   private readonly searchResHeader: Locator;
   private readonly searchResList: Locator;

   constructor(page: Page) {
      super(page);
      this.searchResHeader = page.getByRole('heading', { name: 'Products meeting the search criteria' })
      this.searchResList = page.locator('.product-layout.product-grid');




   }

   async getSearchResPageHeader(): Promise<boolean> {

      await this.searchResHeader.waitFor({ state: "visible" });
      return await this.searchResHeader.isVisible();
   }



   async searchResListCount(): Promise<number> {

      return await this.searchResList.count();
   }

async selectProduct(productName:string){
   
}










}