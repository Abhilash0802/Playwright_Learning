import {test, expect} from '@playwright/test';

const PageURL= ('https://sdetqa.vercel.app/autoplay')


test.describe("CheckBoxes",() => {

    test.beforeEach(async({page}) =>{
    await page.goto(PageURL)
   // ProductDetails = page.locator('.product-title a');
});

    test.afterAll(async({page})=>{
      await page.close()
});

// 4. Checkbox (Days) Validation

// 1. Verify user select SUNDAY checkbox and Sunday should be checked

 test('Sunday Checkbox',async({page})=>{

    const sunday = page.getByLabel('Sun')
    await sunday.check()
    await expect(sunday).toBeChecked()
 })




});