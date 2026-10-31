import {test, expect} from '@playwright/test';

const PageURL= ('https://sdetqa.vercel.app/autoplay')


test.describe("InputBox & Radio Buttons",() => {

    test.beforeEach(async({page}) =>{
    await page.goto(PageURL)
   // ProductDetails = page.locator('.product-title a');
});

    test.afterAll(async({page})=>{
      await page.close()
});

// 1. Page Load Validation

// Steps : 1. Open the URL https://sdetqa.vercel.app/autoplay.html
// 2. Verify text "AutoPlay" is visible

test('Page Load Validation',async({page})=>{
    await expect(page).toHaveURL('https://sdetqa.vercel.app/autoplay')
    expect(page.getByText('AutoPlay',{exact:true}))
});

// 2. Input Fields Validation

test('2. Input Fields Validation',async({page})=>{

    const namefiled = page.getByLabel('Full name')
    const emailfiled = page.getByLabel('Email')
    const phonefiled = page.getByLabel('Phone')
    const addressfield = page.getByLabel('Address')

// Verify the Full name field should be  visible & Enabled

await expect(namefiled).toBeVisible()
await expect(namefiled).toBeEnabled()

// Check maxlength attribute of Full name = Max length should be 15

await expect(namefiled).toHaveAttribute('maxlength','15')

// Enter "John Canedy" in Full name & Value should be entered correctly

await namefiled.fill('Jhon')
await expect(namefiled).toHaveValue('Jhon')

// Verify the email field is visible and enabled and Value should be entered correctly

await expect(emailfiled).toBeVisible()
await expect(emailfiled).toBeEnabled()
await emailfiled.fill('Jhon123@gmail.com')
await expect(emailfiled).toHaveValue('Jhon123@gmail.com')

// verify the phone field is visible and enabled and Value should be entered correctly

await expect(phonefiled).toBeVisible()
await expect(phonefiled).toBeEnabled()
await phonefiled.fill('+91 1234567890')
await expect(phonefiled).toHaveValue('+91 1234567890')

// verify the address field is visible and enabled and Value should be entered correctly

await expect(addressfield).toBeVisible()
await expect(addressfield).toBeEnabled()
await addressfield.fill('1-123, Thimmanagaripalem village,Kadivedu post,\n Chillakur Mandal,Nellore,AP-524410')
await expect(addressfield).toHaveValue('1-123, Thimmanagaripalem village,Kadivedu post,\n Chillakur Mandal,Nellore,AP-524410')

await page.waitForTimeout(2000)
});

// 3. Radio Button (Gender) Validation

// 1. Locate Male & Female radio buttons is Visible
// 2. Female button is selected or unselected
// 3. Male button is selected or unselected

test('Radio Button (Gender) Validation',async({page})=>{

    const Malebutton = page.getByLabel('Male',{exact:true})
    const Femalebutton = page.getByLabel('Female',{exact:true})

    await expect(Malebutton).toBeVisible()
    await expect(Femalebutton).toBeVisible()

await Femalebutton.check()
await expect(Femalebutton).toBeChecked()
await expect(Malebutton).not.toBeChecked()

await page.waitForTimeout(2000)

   });

});