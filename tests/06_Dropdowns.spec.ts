// While working with dropdowns mostly we are using CSS selector.


import {test, expect} from '@playwright/test';

const pageurl = 'https://sdetqa.vercel.app/autoplay.html';

// 1. Launch the URL -- Page should load successfully
test.describe('Handling Dropdown',() => {

    test.beforeEach(async({page}) =>{

        await page.goto(pageurl);
        await expect(page.getByText('AutoPlay')).toBeVisible()   
    });

    test.afterAll(async({page})=>{

       await page.close()
    })

// 2. Locate Country dropdown -- Dropdown should be visible
    test('single dropdown (Countries)', async({page})=>{

      const selectcountry = page.locator('#country')
      await expect(selectcountry).toBeVisible()

// 3. Get default selected value -- Default should be India (india)

      await expect(selectcountry).toHaveValue('india')


// 4. 3 ways we can select option from dropdown
      // 1. By using label -- most prefarable
      // 2. By using attribute ( if it is available in DOM)
      // 3. by using index
      // 4. By using selectoption() method we can select option from dropdown.

    // Select option using label "USA" -- Value should change to usa

     await selectcountry.selectOption({label: 'USA'});
     await expect(selectcountry).toHaveValue('usa')

// 5. Select option using value "uk" -- Value should change to uk
     
      await selectcountry.selectOption({value:'uk'})
      await expect(selectcountry).toHaveValue('uk')

// 6. Select option using index (3) -- Value should be germany

      await selectcountry.selectOption({index: 3})
      await expect(selectcountry).toHaveValue('germany')

// 7. Select option using value(france) + label (France) -- Value should be france

     await selectcountry.selectOption({label:'France', value:'france'})
     await expect(selectcountry).toHaveValue('france')

// 8. Count total dropdown options -- Count should be 5

    // Method 1: direct
    const countdrpdwn = page.locator('#country option')
    const count = await countdrpdwn.count()
    for (let i =0; i < count; i++)
    console.log( await countdrpdwn.nth(i).innerText()) // print all text
    console.log("Total Count:", count ) // Total count = 5

    // or

    const AllText = await page.locator('#country option').allTextContents()
    /* for(const ListofText of AllText){
        console.log(ListofText) 
    } */
    for(const [index,text] of AllText.entries()){
        console.log(`${index}: ${text}`) // print index and text
    }

    // Method 2: Chaining

    const options = selectcountry.locator('option')
    await expect(options).toHaveCount(5)
    
// 9. Validate text contains Germany

    // Method 1:
    const Text = await options.allTextContents()
    expect(Text).toContain('Germany') // tocontain()- we have multiple values to verify in a list

    // Method 2: single value to verify

    if (Text.includes('Germany')){

        console.log("Germany is present")
    }
    else{
        console.log("Germany is not present")
    }

    // Method 3: Multiple values to verify

    const expectedCountries = ["India", "USA", "Germany"];
    for (const countries of expectedCountries){
        expect(expectedCountries).toContain(countries);
    }

});

test('Multi Select Dropdown (Colors)', async({page})=>{

// 10. Locate Colors dropdown -- Dropdown should be visible

   const Colours = page.locator('#colors')
   await expect(Colours).toBeVisible()

// 11. Get default selected value -- Default should be blue

   await expect(Colours).toHaveValue('blue')

// 12. Select multiple options using labels (Red, Green, Yellow) -- All should be selected

  await Colours.selectOption([{label:'Red'}, {label:'Green'},{label:'Yellow'}])

// 13. Select multiple options using values (red, green, yellow)-- All should be selected

   await Colours.selectOption([{value:'red'}, {value:'green'},{value:'yellow'}])

// 14. Select multiple options using index (0,2,3) Correct options should be selected

  await Colours.selectOption([{index: 0}, {index: 2}, {index:3}])

});


test('Sorted options in Dropdown', async({page})=>{

/* const fruitsdrpdwn = await page.locator('#sorted option').allTextContents() //-- sorted list
console.log("Dropdown options:", fruitsdrpdwn)  // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Orignal Array

const OriginalArray = fruitsdrpdwn

// Sort the list
const sortedlist = [...fruitsdrpdwn].sort() // spread operator

console.log("Originallist:",OriginalArray)
console.log("Sortedlist:", sortedlist)

expect(OriginalArray).toEqual(sortedlist)
 */

const Colors = page.locator('#colors option')  // unsorted list
const alltext= await Colors.allTextContents()
console.log("Dropdown options:", alltext)  

// Orignal Array

const OriginalArray = alltext

// Sort the list
const sortedlist = [...alltext].sort() // spread operator

console.log("Originallist:",OriginalArray)
console.log("Sortedlist:", sortedlist)

expect(OriginalArray).toEqual(sortedlist) // it will fail
expect(OriginalArray).not.toEqual(sortedlist) // it will pass


});



});