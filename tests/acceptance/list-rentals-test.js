import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function(assert){
    visit('/');
    andThen(function(){
        assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
});

test('should link to the information about the company.', function(assert){
    visit('/');
    click('a:contains("About")');
    andThen(function(){
        assert.equal(currentURL(), '/about', 'should navigate to about');
    });
});

test('should link to contact information.', function(assert){
    visit('/');
    click('a:contains("Contact")');
    andThen(function(){
        assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
});

test('should list available rentals', function(assert){

});

test('should filter the list of rentals bt city', function(assert){

});

test('should show details of a selected rental', function(assert){

});