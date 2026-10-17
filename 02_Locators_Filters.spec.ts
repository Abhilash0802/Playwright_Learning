import {test,expect} from "@playwright/test";

/* 
 Hook methods: are special methods that run before or after tests.
They help you perform setup and cleanup tasks without repeating code in every test.

*/

test.beforeEach(async({page}) =>{
    await page.goto("https://sdetqa.vercel.app/filters_practice.html")

})

test.afterAll(async({page})=>{
   await page.close()

})


/* 
Playwright Locator Filters
 
1. Verify "Add to cart" for Product 2
2. Count items not having "Out of stock"
3. Find items with "In stock"
4. Verify elements using data-testid
5. Count all elements with test ids
6. Find "Say goodbye" button for John
7. Find "Say hello" button for Mary
8. Find "Subscribe" buttons using multiple conditions
9. Find "details" buttons for done tasks

*/

// 1. Verify "Add to cart" for Product 2 -- " hasText "

test ("Verify Add to cart for Product 2",async({page})=>{

// capture all listitems
// Filter the items with having " Product 2"
// From that item find the button "Add to cart"
const Productitem = page.getByRole("listitem")
                    .filter({hasText:'Product 2'})
                    .getByRole("button",{name:'Add to cart'})
// Verify the button is visible.     
    await expect(Productitem).toBeVisible();
// Click()
    await Productitem.click()
})

// 2. Count items not having "Out of stock" -- Means find the count of Instock (-Ve) -- hasNotText

test ("Count items not having Out of stock",async({page})=>{

    const outstockitems = page.locator(".card").nth(1) // CSS locator - Go to second card element then find list item
                        .getByRole("listitem")
                        .filter({hasNotText:'Out of stock'})

    const outstockcount = await outstockitems.count()
    console.log('outstockitems:',outstockcount) // o/p = Instock = 3
   
})

/* 
test ("Count items not having Out of stock",async({page})=>{

    const outstockitems = page.locator(".card").nth(1) // CSS locator - Go to second card element then find list item
                        .getByRole("listitem")
                        .filter({hasText:'Out of stock'})

    const outstockcount = await outstockitems.count()
    console.log('outstockitems:',outstockcount) // o/p = outstock = 2
   
}) 
*/

// 3. Find items with "In stock"

test ("Find items with In stock",async({page})=>{

    const Instockitems = page.getByRole("listitem")
                        .filter({hasText:"In stock"})

        
        const Instockcount = await Instockitems.count()
        console.log('Instockitems:',Instockcount)

})

// 4. Verify elements using data-testid

test ('Verify elements using data-testid',async({page})=>{
    const apple = page.getByTestId("apple")
     await expect(apple).toBeVisible()
     await expect(apple).toContainText('apple') // no need to mention full text
})

// 5. Count all elements with test ids -- first(), nth(), last()

test ("Count all elements with test ids",async({page})=>{

const testid= page.locator('[data-testid]'); // get the all elements

const First= testid.first()
const Last = testid.last()
const nth= testid.nth(2)

const fruits = [
   await First.innerText(),
   await Last.innerText(),
   await nth.innerText()
]; 

const counts = await testid.count()
 for (let i = 0; i < counts ; i ++)
    console.log(await testid.nth(i).innerText()) // o/p: all text inside testid

console.log("Countsoftestid:",counts) // total count = 5
console.log("Fruits:",fruits); // Fruits: [ '🍏 apple', '🥭 mango', '🍊 orange' ]
console.log("Count:",fruits.length); // 3 

})


// 6. Find "Say goodbye" button for John

test ("Find Say goodbye button for John",async({page})=>{

    const Goodbye = page.getByRole("listitem")
                    .filter({hasText: "Jhon"})
                    .getByRole("button",{name:"Say goodbye"})

        await expect(Goodbye).toBeVisible()

})

// 7. Find "Say hello" button for Mary

test ("7. Find 'Say hello' button for Mary", async({page})=>{

    const sayhello = page.getByRole('listitem')
    .filter({hasText:"Mary"})
    .getByRole("button",{name:"Say hello"})

    await expect(sayhello).toBeVisible()

})

//8. Find "Subscribe" buttons using multiple conditions

test ("Find 'Subscribe' buttons using multiple conditions", async({page})=>{

    const subscribe = page.getByRole("button")
    .and (page.getByTitle('Subscribe',{exact:true}))
    console.log("Subscribe button count:",await subscribe.count())

    await expect(subscribe.last()).toBeVisible()
    await expect(subscribe.first()).toBeVisible()

})

//9. Find "details" buttons for done tasks

test ('Find "details" buttons for done tasks',async({page})=>{

    const Detailsbutton= page.getByRole("listitem")
    .filter({hasText:"done"})
    .getByRole("button",{name:"details"})

    console.log("Detailsbuttoncount:",await Detailsbutton.count())

})

// 10. Verify stock status count

test ("Verify stock status count",async({page})=>{

    const Stockstatus = page.getByRole("listitem")
    .filter({hasText:"In stock"})

    const Outstockstatus = page.getByRole("listitem")
    .filter({hasText:"Out of stock"})

    console.log("Instock count:", await Stockstatus.count())
    console.log("outof stock count:", await Outstockstatus.count())

})