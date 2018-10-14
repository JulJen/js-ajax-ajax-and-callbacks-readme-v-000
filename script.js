// We should wait for the page to load before running our Ajax request
$(document).ready(function() {
    // Now we start the Ajax GET request
    //The first parameter is the URL with the data.
    // The second parameter is a function that handles the response.
    $.get('sentence.html', function(response) {
        // getting the element on the page with the id of sentences and
        // inserting the response
        $('#sentences').html(response);
    });

    // In the callback to get()
    // the first argument is going to be the data that the server sent back
    // so it makes sense to call it data — but we could just as well call it response.
    $.get('this_doesnt_exist.html', function(data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();

    // chained an additional call to fail on the end of our request
    // passed a callback function to the method that will run only if an error occurs
    // Similarly, the first argument to fail()'s callback is an error object
    // so we should probably give it a descriptive name like error (but we don't have to).
    }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error.statusText);
});


// another example of how we could use jQuery to perform an Ajax request.

var url =
    'https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078';

// data represents the response returned from the API
// callback that gets passed into .done gets data as an argument.
// jQuery handles passing in that data object to the callbacks
// tell jQuery that when it receives a response to please pass it along to our callbacks so they can handle it accordingly.
$.get(url).done(function(data) {
    console.log('Done');
    console.log(data);
});
