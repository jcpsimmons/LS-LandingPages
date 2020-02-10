const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(
      "https://www.livingspaces.com/Util/login.aspx?ReturnUrl=%2fEPiServer%2fCms%2f#context=epi.cms.contentdata:///6&viewsetting=viewlanguage:///en"
    );
    await driver.sleep(500);

    await driver
      .findElement(By.id("LoginControl_UserName"))
      .sendKeys("josh.simmons@livingspaces.com");
    await driver
      .findElement(By.id("LoginControl_Password"))
      .sendKeys("tesasdfasdft", Key.ENTER);
  } catch (err) {
    console.error(err);
  } finally {
    // await driver.quit();
  }
})();
