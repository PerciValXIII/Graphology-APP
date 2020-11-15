const Users = document.querySelector('.users');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (client) => {
  if (client) {
    db.collection('users').doc(client.uid).get().then(doc => {
    const html = `
    <div>Logged in as ${client.email}</div>
    <div>${doc.data().bio}</div>
    `;
    accountDetails.innerHTML = html;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
// const showData = (data) => {

//   if (data.length) {
//   let html = `<h4>Hello User, Please make a choice</h4>`;
  

//   Users.innerHTML = html;}
//   else{
//     Users.innerHTML = '<h3 class="center-align" style="padding-top: 130px;">Login to access the APP</h3>';
//   }
// };



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });