/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has url', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
            });
         });

         it('has name', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
            });
         });
    });

    describe("The menu", function() {

          it("hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });


          it("changes visibility when the menu icon is clicked", function() {
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
     });

      describe("Initial Entries", function() {
       beforeEach(function(done) {
            loadFeed(0,function() {
              done();
            });
        });

        it("feed container has single entry element", function() {
          expect($('.feed .entry').size()).not.toBe(0);
         });
       });

      describe("New Feed Selection", function() {
            let oldFeed,newFeed;
            beforeEach(function(done) {
              loadFeed(0, function() {
                oldFeed = $('.feed .entry').html();
                  loadFeed(1, function() {
                     newFeed = $('.feed .entry').html();
                     done();
                  });
               });
             });

            it("content changes", function() {
              // console.log(`newOne : ${newFeed}`);
              // console.log(`oldOne : ${oldFeed}`);
               expect(oldFeed).not.toEqual(newFeed);
             });
        });

}());
