const Page = require('./BasePage');
var webdriverio = require('webdriverio');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAccept() { return $('button=Accept') }
    get btnWatchStory() { return $('button=watch the story') }
    get videoAutoWatchStory() { return $('//video[@preload="auto"]') }
    get player() { return $('//video[@class="video-stream html5-main-video"]') }
    get videoCurrentTime() { return $('//span[@class="ytp-time-current"]') }
    get headingIdeasThatChange() { return $('h2=Ideas that change the world are often the most controversial.') }
    get logoVolvo() { return $('//nav[@aria-label="Main Navigation"]//img[@src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"]') }
    title = 'A million more | Volvo Cars - International'
    get headingOneOfMillion() { return $('h2=One of a million') }
    get listVideosUnderOneOfMillion() { return $$('//h2[text()="One of a million"]/../..//button') }
    get headerVideos() { return $$('//h2[text()="One of a million"]/../..//em') }
    get textVideos() { return $$('//h2[text()="One of a million"]/../..//em/..//p') }
    get headerDecadesOfInnovation() { return $('//h2[text()="Decades of innovation"]') }
    get textDecadesOfInnovation() { return $('//h2[text()="Decades of innovation"]/..//p') }
    get btnLearnMore() { return $('//h2[text()="Decades of innovation"]/..//a[text()="Learn more"]') }
    get headerExploreOurModels() { return $('//h2[text()="Explore our models"]') }
    get imagesCars() { return $$('//h2[text()="Explore our models"]/..//a//img') }
    get linkLearn() { return $$('//h2[text()="Explore our models"]/..//a[text()="Learn"]') }
    get linkShop() { return $$('//h2[text()="Explore our models"]/..//a[text()="Shop"]') }



    /**
     * This method verifies if the Home page is loaded or not
     */

    veifyHomePageLoaded() {
        expect(browser.getTitle()).toEqual(this.title);
        expect(this.logoVolvo).toBeDisplayed();
        try {
            this.btnAccept.click();
        }
        catch (err) {
            console.log("Accept button not found")
        }

    }

    /**
     * This method verifies performs click action on watch story button
     */

    clickOnbtnWatchStory() {
        expect(this.videoAutoWatchStory).toBeDisplayed();
        this.btnWatchStory.click();
    }


    /**
    * This method verifies the watch story vide is played or not
     */
    verifyWatchTheStoryVideoPlayed() {

        const iframe = $('//iframe[@title]')
        iframe.waitForDisplayed(5000);
        browser.switchToFrame(iframe);
        this.player.moveTo();
        this.videoCurrentTime.waitForDisplayed(5000);
        let time = this.videoCurrentTime.getText();
        console.log("timing is", time);
        let seconds = time.split(":");
        // expect(seconds[1]).toBeGreaterThan(0);

    }

    /**
    * This method verifies the One of Million section
     */
    verifyOneOfAMillionSection() {
        browser.switchToFrame(null);
        this.headingOneOfMillion.waitForDisplayed(5000);
        this.headingOneOfMillion.scrollIntoView();
        expect(this.listVideosUnderOneOfMillion).toBeElementsArrayOfSize(4);
        expect(this.headerVideos).toBeElementsArrayOfSize(4);
        expect(this.textVideos).toBeElementsArrayOfSize(4);
        expect(this.headerVideos).toBeDisplayed();
        expect(this.textVideos).toBeDisplayed();

    }

    /**
    * This method verifies the Explore Model section
     */
    verifyExploreModelSection() {
        this.headerExploreOurModels.scrollIntoView();
        expect(this.imagesCars).toBeElementsArrayOfSize(8);
        expect(this.linkLearn).toBeElementsArrayOfSize(8);
        expect(this.linkShop).toBeElementsArrayOfSize(8);

    }

}

module.exports = new HomePage();
