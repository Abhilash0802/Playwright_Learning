import {test , expect} from '@playwright/test';

const PageURL= ('https://demowebshop.tricentis.com/')

test.describe("Demo Work Shop",() => {

    test.beforeEach(async({page}) =>{
    await page.goto(PageURL)
});

    test.afterAll(async({page})=>{
      await page.close()
});


// tag with id --> tag#id  or #id

test ("tag with id",async({page})=> {

    const searchbox = page.locator("#small-searchterms")
    searchbox.fill("14.1-inch Laptop")
    await page.locator('[value="Search"]').click()

// Verify "14.1-inch Laptop" product dispalyed post click the search button

    await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")

});

// tag with class --> tag.class  or .class

test ("CSS with class",async({page})=> {

    const searchbox = page.locator(".search-box-text")
    searchbox.fill("14.1-inch Laptop")
    await page.locator('[value="Search"]').click()
    //await page.waitForTimeout (5000)

// Verify "14.1-inch Laptop" product dispalyed post click the search button
    await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")

});


// tag with attribute  --> tag[attribute = value ]  or [attribute = value ]

test ("CSS with Attribute",async({page})=> {

    const searchbox = page.locator("[value='Search store']")
// single attribute : [value='Search store']
// Multiple attributes : [value='Search store'][name='q']

    searchbox.fill("14.1-inch Laptop")
    await page.locator('[value="Search"]').click()
    //await page.waitForTimeout (5000)

// Verify "14.1-inch Laptop" product dispalyed post click the search button
    await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")

});


// tag with class + attribute  --> tag.class[attribute = value ]  or .class[attribute = value ]

test ("CSS with class + attribute",async({page})=> {

    const searchbox = page.locator(".search-box-text[value='Search store']")

    searchbox.fill("14.1-inch Laptop")
    await page.locator('[value="Search"]').click()
    //await page.waitForTimeout (5000)

// Verify "14.1-inch Laptop" product dispalyed post click the search button
    await expect(page.locator("h2[class='product-title'] a")).toHaveText("14.1-inch Laptop")

});








});