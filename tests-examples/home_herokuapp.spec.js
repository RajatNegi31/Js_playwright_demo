const {test, expect}=require('@playwright/test')


test('Login test', async ({browser})=>{

   const Context=await browser.newContext();
   const page=await Context.newPage();

   await page.goto("https://the-internet.herokuapp.com/");
   



});