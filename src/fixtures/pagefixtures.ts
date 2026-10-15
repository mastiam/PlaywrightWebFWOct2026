import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { test as basetest, expect } from "@playwright/test"
import { csvHelper } from "../utils/csvHelper";
import { SearchResPage } from "../pages/SearchResPage";
type pagefixtures = {
    loginpage: LoginPage,
    homepage: HomePage,
    testdata: Record<string, string>[],
    searchrespage: SearchResPage
};

export let test = basetest.extend<pagefixtures>({

    loginpage: async ({ page }, use) => {

        let loginpage = new LoginPage(page);
        await use(loginpage);
        //another way
        //await  use(new LoginPage(page));
    },


    homepage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    testdata: async ({ }, use) => {
        await use(csvHelper.readCsv(`src/data/logindata.csv`))
    },



    searchrespage: async ({ page }, use) => {
        await use(new SearchResPage(page));
    }

}

)

export { expect } from "@playwright/test"