import {test, expect} from '@playwright/test';

const PageURL= ('https://sdetqa.vercel.app/autoplay')

test.describe("CheckBoxes",() => {

    test.beforeEach(async({page}) =>{
    await page.goto(PageURL)
   // ProductDetails = page.locator('.product-title a');
});

/*     test.afterEach(async({page})=>{
      await page.close()
}); */

// 4. Checkbox (Days) Validation

// 15. Verify user select SUNDAY checkbox and Sunday should be checked

 test('Sunday Checkbox',async({page})=>{

    const sunday = page.getByLabel('Sun')
    await sunday.check()
    await expect(sunday).toBeChecked()
    //sunday.setChecked(true) // true = check , false = unchecked
    // await page.waitForTimeout(3000)

 });
 // 16. Select all checkboxes (Mon–Sun)

test('All Checkboxes',async({page})=>{

/* const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] */

// with out Map()
/* 
 for (const day of days) {
     const checkbox= page.getByLabel(day)
     await checkbox.check()
     await expect(checkbox).toBeChecked()
}
 */
// Using Map()
/* 
const allcheckboxes = days.map((day)=>{
    return  page.getByLabel(day)
})
for (const checkbox of allcheckboxes){
    await checkbox.check()
    await expect(checkbox).toBeChecked()
}   
await page.waitForTimeout(2000)
 */


// Uncheck Fri, Tue, Sun and verify
/* 
for (const day of ['Tue','Sun','Sat']) {
     const checkbox= page.getByLabel(day)
     await checkbox.uncheck()
     await expect(checkbox).not.toBeChecked()
   };
 await page.waitForTimeout(2000)

  */
// 17. Toggle all checkboxes - Checked → unchecked, unchecked →checked
/* 
 for (const day of days) {
     const checkbox= page.getByLabel(day)
     if (await checkbox.isChecked()){
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
     }
     else{
        await checkbox.check()
        await expect(checkbox).toBeChecked()
     }
     await page.waitForTimeout(2000)   
     
}
 */

// 18. Select checkboxes using index (1,3,6 → Tue, Thu,Sun) Only those indexes should be checked

//If the UI contains multiple checkboxes and only specific indexes need to be selected,
// store the required indexes in an array and use nth() to access and check only those elements.

const indexs= [1,3,6];

    for(const index of indexs){
        await page.locator("[type = 'checkbox']").nth(index).check()
    }
await page.waitForTimeout(2000)

// Select checkbox with label "Fri" Friday checkbox should be checked

const Fridaycheckbox = page.getByLabel('Fri')
await Fridaycheckbox.check()
await expect(Fridaycheckbox).toBeChecked()

});

// 5. Submit Button Validation

test('5. Submit Button Validation',async({page})=>{

    const submitbutton = page.getByRole('button', {name:'Submit'}).first()
    // Visibilty 
    await expect(submitbutton).toBeVisible()
    // Click
    await submitbutton.click()
    //Enable
    await expect(submitbutton).toBeEnabled()
})



});