const { Builder, By, Key, until } = require("selenium-webdriver");
// var {assert} = require('assert').equal;


async function googling() {
  //buka browser
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");
  // buka url google
  // await driver.get("http://facebook.com");
  // await driver.findElement(By.name("email")).sendKeys("taufik.bustomi");
  // await driver.findElement(By.name("pass")).sendKeys("vita123");
  // await driver.findElement(By.id("u_0_b")).click();
  try{
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log");
    // await driver.findElement(By.name("une")).click();
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.id("btnLogin")).click();

    const welcome = await driver.findElement(By.xpath('//li')).getText();
    assert.equal(welcome, "Welcome Admin", "Gagal");
    console.log("sukses");
  } catch(error) {
    console.log(error)
  }



  // $('ul#someList li:first')



  // await driver.findElement(By.linkText("login")).click();

  // await driver.findElement(By.id("login")).click();
  // await driver.findElement(By.name("username")).sendKeys("cobaaja");
  
  // await driver.findElement(By.id("username")).click();
  // await driver.findElement(By.name("username")).sendKeys("admin", Key.RETURN);
  // await driver.findElement(By.name("username")).sendKeys("aji", Key.RETURN);
  // await driver.findElement(By.id("tentang")).click();
  // await driver.findElement(By.id("try")).click();
  // await driver.findElement(By.name("login")).click();
  // await driver.findElement(By.linkText("Login")).click();
  // await driver.findElement(By.name("register")).click();
  // await driver.findElement(By.linkText("Login")).click();
  // driver.find_element_by_id("login").click();
}


googling();
