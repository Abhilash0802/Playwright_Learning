/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').dblclick();
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  
  
}); */


import {test,expect} from '@playwright/test';

const pageurl = 'https://testautomationpractice.blogspot.com/';

test.describe("Practice",()=>{

  test.beforeEach(async({page})=>{
   await page.goto(pageurl)
  });

  test.afterEach(async({page})=>{
   await page.close()
  })

// 1. Input Fields Validation: Full name & Value should be entered correctly

test('1. Input Fields Validation',async({page})=>{

const NameFiled = page.locator('#name')
await NameFiled.fill("Abhilash")
await expect(NameFiled).toBeVisible()
await expect(NameFiled).toHaveValue("Abhilash")

// Email
const EmailField = page.locator('#email')
await EmailField.fill("Abhilash@gmail.com")
await expect(EmailField).toBeVisible()
await expect(EmailField).toHaveValue("Abhilash@gmail.com")

// Phone Number
const Phonenumber = page.locator('#phone')
await Phonenumber.fill("9876543211")
await expect(Phonenumber).toBeVisible()
await expect(Phonenumber).toHaveValue("9876543211")

// Address
const Address = page.locator('#textarea')
await Address.fill("1-123,Gudur,\n Nellore,AP")
await expect(Address).toBeVisible()
await expect(Address).toHaveValue("1-123,Gudur,\n Nellore,AP")

// Radio Buttons.

const maleradiobutton = page.locator('#male')
await maleradiobutton.check()
await expect(maleradiobutton).toBeChecked();
console.log(await maleradiobutton.isChecked());
const label= await maleradiobutton.getAttribute('value')
console.log("Selected radio Button:",label)


})

});