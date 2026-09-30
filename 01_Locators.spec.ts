import {test,expect} from "@playwright/test";
/*  
test ("Playwright locators", async ({page}) =>{

   await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")

 
// 1. getByRole() - Find the semantic role and accessible name.  
 /*  
 Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C specifications 
 for ARIA role.
 Prefer interactive elements like buttons, checkboxes, headings, links, lists, tables etc.
 */
/* 
   const projectslink= page.getByRole('link', { name: 'Projects' })
   await expect(projectslink).toBeVisible()

   const SignIn_Button = page.getByRole('button',{name:'Sign In'})
   await expect(SignIn_Button).toBeVisible
   await SignIn_Button.click()
 */
// 2. getByText() -- Find an element by the text it contains.
/* 
When to use text locators:
We recommend using text locators to find non interactive elements like div, span, p, etc. 
For interactive elements like button, a, input, etc. use role locators.
*/

  //const Text= page.getByText('Welcome to the Dashboard') // Extact Match
 /*  
    const Text= page.getByText('Welcome to the Dashboard',{exact:true}) // Extact Match
   await expect(Text).toBeVisible()
*/
  //await expect(page.getByText('Welcome to the Dashboard',{exact:true})).toBeVisible // another way
  
// 3. getByLabel: Locate a form field using its label text.When to use: Ideally for form fields with visible lables.
 
/* const email= page.getByLabel('First Name')
await expect(email).toBeVisible()
await email.fill('Abhi')
 */

// 4. page.getByPlaceholder() to locate an input by placeholder.

/* const placeholder = page.getByPlaceholder('Enter your username')
await expect(placeholder).toBeVisible()
 */


// 5. page.getByAltText() to locate an element, usually image, by its text alternative.

/* const altext = page.getByAltText('Puppy on a boat')
await expect(altext).toBeVisible()
await altext.click() */

// 6. page.getByTitle() to locate an element by its title attribute.

//await page.getByTitle('Schedule automated run').click()

//})

// Practice: 

test ("Playwright locators", async ({page}) =>{

    await page.goto("https://sdetqa.vercel.app/pw-locators-practice-app")

// 1. getByRole()

/*
   await expect(page.getByRole("button",{name:'Primary Action'})).toBeVisible();
   await page.getByRole("textbox",{name:'Username'}).fill("Text")
   await page.getByRole("checkbox",{name:'Accept terms'}).check()
   await page.getByRole("checkbox",{name:'Accept terms'}).uncheck()
   await page.getByRole("link",{name:'Home'}).click()
   
*/

// 2. getByText()

/* 
    await expect(page.getByText('List item 1')).toBeVisible()
    await expect(page.getByText('Submit Form')).toBeVisible()
 */

// 3. getByLabel()

   //await page.getByLabel('Email Address:').fill('abhilash@gmail.com')

// 4. getByPlaceholder()

   //await page.getByPlaceholder('Enter your full name').fill('ABHILASH')

// 5. getByAltText()

   //await page.getByAltText('logo image').click()

// 6. getByTitle()

await expect(page.getByTitle('Home page link')).toHaveText('Home')
await page.getByTitle('Home page link').click()



})