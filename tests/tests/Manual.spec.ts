
import {test, expect} from "@playwright/test"; 
// using test we will add test cases and using expect we will add verifications or validations.

/* 

// Fixture - global variable : page, browser

test("title", async({page}) => {

// Step 1 : Navigate to URL
// Step 2 : Verify thr title of the page
})

*/

test("Verify the title of the page", async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveTitle("Demo Web Shop")

    
})

