suite('pandora-color-picker', function(){
    var colorPicker = document.querySelector("pandora-color-picker");

    test('should open the menu when user click the button.', function(){
        var dropdown = document.querySelector("#dropdown");
        assert.equal(dropdown.style.display, "none", "dropdown should be invisible.");
    });
});