 import {test, expect} from '@playwright/test';

const PageURL = 'https://sdetqa.vercel.app/autoplay';


test.describe("Additional (Recommended) Test Cases",() => {

    test.beforeEach(async ({ page }) => {
    await page.goto(PageURL);

});

/*     test.afterEach(async({page})=>{
      await page.close()
}); */

// 6. Additional (Recommended) Test Cases--- 

 test('1. Input Fields Validation',async({page})=>{

    const namefiled = page.getByLabel('Full name')
    const emailfiled = page.getByLabel('Email')
    const phonefiled = page.getByLabel('Phone')
    const addressfield = page.getByLabel('Address')
    const submitbutton = page.getByRole('button',{name:'Submit'}).first()
    const errormsge = page.locator('#formErrors')


    await namefiled.fill('')
    await emailfiled.fill('')
    await phonefiled.fill('')
    await addressfield.fill('')

    await submitbutton.click()
    await expect(errormsge).toBeVisible()
    await expect(errormsge).toContainText('Please fix the following:')

});

// Enter invalid email format Error should be shown
// Enter more than 15 chars in name Input should be restricted
// Enter alphabets in phone field Should be restricted (if validation exists)

test('2. Enter invalid format',async({page})=>{

    const namefiled = page.getByLabel('Full name')
    const emailfiled = page.getByLabel('Email')
    const phonefiled = page.getByLabel('Phone')
    const addressfield = page.getByLabel('Address')
    const submitbutton = page.getByRole('button',{name:'Submit'}).first()
    const errormsge = page.locator('#formErrors')
    const Malebutton = page.getByLabel('Male',{exact:true})
    const Checkbox = page.getByLabel('Fri')


    await namefiled.fill('Jhonertpjutfgbnmkjfs')
    await emailfiled.fill('Jhon123@gmail')
    await phonefiled.fill('123abc5678dfrg456')
    await addressfield.fill('1-123, Thimmanagaripalem village,Kadivedu post')
    await Malebutton.check()
    await Checkbox.check()
    await expect(phonefiled).toHaveText(/^[^A-Za-z]*$/)

    await submitbutton.click()
    await expect(errormsge).toBeVisible()
    await expect(errormsge).toContainText('Please fix the following:')

}); 

});

// Regular Expersion

/* 
1. / data /
these are the just delimeters use in many languages(Js/TS) to define a regex

2. ^ ( Start Anchor) : Ensure the match starting from the begining of the string.

3. [^A-Za-z]
this is negated character class
A-Za-z --> all uppercase and lowercase english letters
[^A-Za-z] --> anything that is not a letter

Matches: numbers (0-9), Symbols (@ #,$,%), Spaces, Special Characters

Not Match : Alphabets ( A-Z, a-Z)


*/

//Icons

test('3. Icons', async ({ page }) => {

    await page.goto('https://sdetqa.vercel.app/autoplay');

   await expect(page.getByRole('heading', { name: 'File Upload' })).toBeVisible()

});