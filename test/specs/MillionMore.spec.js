const HomePage = require('../pageobjects/home.page');

describe('Volvo - Test Automation', () => {
    it('Verify the a-million-more page displays all the required sections', () => {
        HomePage.open();
        HomePage.veifyHomePageLoaded();
        HomePage.clickOnbtnWatchStory();
        HomePage.verifyWatchTheStoryVideoPlayed();
        HomePage.verifyOneOfAMillionSection();
        HomePage.verifyExploreModelSection();
    });
  
});


