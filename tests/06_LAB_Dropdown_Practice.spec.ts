import {test,expect} from '@playwright/test';

const pageurl = 'https://www.bstackdemo.com/'

test.describe('product sorting functionality and extract product details',() =>{

    test.beforeEach(async({page})=>{

        await page.goto(pageurl)
        await expect (page.getByAltText("logo")).toBeVisible()
    });

    test.afterAll(async({page})=>{

       await page.close()
    })

});