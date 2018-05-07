//========== Wes Bos - JS 30 Course - My Drumkit Code ==========//
// ES6 style vanilla javascript! woot!
// keycode.info

/* If you're intrested in supporting Wes Bos or taking one of his
awesome courses, click here:  www.courses.wesbos.com   */

//=========== ACTUAL CODE ===========//

// adding an event listener for key press
window.addEventListener('keydown', function(e){
    // testing that event listener is working
    console.log(e); // woot! it works!
    // adding var to hold the query selector for audio tags when key is pressed

    /* Data Attribute review - CSS:
    [attr]
    Represents an element with an attribute name of attr.

    [attr=value]
    Represents an element with an attribute name of attr whose value is exactly value.

    [attr~=value]
    Represents an element with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.

    [attr|=value]
    Represents an element with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode matches.

    [attr^=value]
    Represents an element with an attribute name of attr whose value is prefixed (preceded) by value.

    [attr$=value]
    Represents an element with an attribute name of attr whose value is suffixed (followed) by value.

    [attr*=value]
    Represents an element with an attribute name of attr whose value contains at least one occurrence of value within the string.

    [attr operator value i]
    Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).
     */
    const audio = document.querySelector('audio[data-key=65]')
});