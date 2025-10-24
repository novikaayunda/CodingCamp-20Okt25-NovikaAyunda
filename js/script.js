// welcomeSpeech()

function WelcomeSpeech(){
    /// show promt to ask for user's name
    let name = prompt("enter your name:");

    // greet the user with their name
    document.getElementById('greet-name').innerHTML ='helo ${name},';
}
/// function to validate form inputs
function validateForm() {
    /// get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// check if any field is empty
    if (name === '' || email === '' || message === '') {
        /// show alert if any field is empty
        alert('all fields are required.');
    } else {
        /// show success message 
        alert(`thank you ${name}, your message has been submitted successfully!`);
    }
}