import {test , expect} from '@playwright/test';

const PageURL= ('https://demowebshop.tricentis.com/')
// let ProductDetails : Locator

test.describe("Demo Work Shop",() => {

    test.beforeEach(async({page}) =>{
    await page.goto(PageURL)
   // ProductDetails = page.locator('.product-title a');
});

    test.afterAll(async({page})=>{
      await page.close()
});



// 1. Open Application

// Steps:  1.Launch the browser , 2.Navigate to the application URL

test ('Open Application',async({page}) =>{

    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')

});

// Test 2: Verify Logo Visibility.

// Steps:1. Locate the logo using a CSS attribute selector , 2. Validate that the logo is visible

test('Verify Logo Visibility',async({page})=>{

   const logo = page.locator("[alt = 'Tricentis Demo Web Shop']")
   await expect(logo).toBeVisible()

});

// Test 3: Find Products Containing "computer"

// Steps: 1. Locate elements using [href*="computer"] , 2.Count the number of matching products

 test("Find Products Containing 'computer'",async({page})=>{

    const computer = page.locator("h2 > a[href*='computer']")
    const count = await computer.count()
    console.log("List of computer count:", count) // List of computer count: 4
 });

// Test 4: Print Product computer Details

// Steps: 1.Print the first productname, 2.Print the second productname, 3.Print all productnames

test ("4.Print Product computer Details", async({page})=>{
     const computer = page.locator("h2 > a[href*='computer']")
    console.log("First product:",await computer.first().textContent()) // First product: Build your own cheap computer
    console.log("Second product:",await computer.nth(2).textContent()) // Second product: Build your own cheap computer

    const count = await computer.count();
    console.log("Total count:", count) // 4 
    for (let i = 0; i < count; i++){
    console.log(await computer.nth(i).textContent()) // 
   
    }
  });

// Test 5: Find Products Starting with "/build".
 
// Steps: 1.Use the [href^="/build"] selector, 2.Count matching elements

 test('Find Products Starting with "/build"',async({page})=>{

    const computer = page.locator("h2 > a[href^='/build']")
    const count = await computer.count()
    console.log("List of count:", count) // List of computer count: 3
 });


// Test 6: Verify Register Link

// Steps: 1.Locate the element using a[href="/register"], 2.Verify visibility

 test('Verify Register Link',async({page})=>{

    const Register = page.locator('a[href="/register"]')
    await expect(Register).toBeVisible()
 });

// Test 7: Verify Last Social Media Link

// Steps: 1.Use :last-child, 2. Capture the text content , Expected Result: The text should be Google+


 test('7. Verify Last Social Media Link',async({page})=>{

    const SocialMediaLink = page.locator('.follow-us ul li:last-child') // find
    const text = await SocialMediaLink.textContent()
    console.log("Social Media Link text:", text) // print the text
    await expect(SocialMediaLink).toHaveText('Google+') // verify

 });

 test('8. Verify Second Social Media Link',async({page})=>{

    const ScecondSocialMediaLink = page.locator('.follow-us ul li:nth-child(2)') // find
    const text = await ScecondSocialMediaLink.textContent()
    console.log("Second Social Media Link text:", text) // print the text
    await expect(ScecondSocialMediaLink).toHaveText('Twitter') // verify

 });


});