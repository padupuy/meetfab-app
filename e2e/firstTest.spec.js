describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login and travel the app', async () => {
    //Login
    await expect(element(by.id('username'))).toBeVisible();

    await element(by.id('username')).replaceText('Pax@adfab.fr');
    await element(by.id('password')).replaceText('adfabl');
    // await element(by.id('loginButton')).tap();

    //Ensure it is well the home page
    await expect(element(by.id('username'))).toNotExist();
    await expect(element(by.id('homescreen'))).toBeVisible();
    //And navigate to detail screen
    await expect(element(by.id('ICELAND'))).toBeVisible();
    await element(by.id('ICELAND')).tap();

    //and to finish, check if the title is
    await expect(element(by.id('detailscreen'))).toBeVisible();
  });
});
