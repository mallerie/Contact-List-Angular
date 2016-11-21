import { ContactService } from '../services/contact-server';

function AddController ($state, ContactService) {
  console.log("Add Controller ran");

  let vm = this;

  this.addContact = addContact;

  function addContact (contact) {
    ContactService.addContact.then((resp) => {
      console.log(resp);
      $state.go('home');

    })
  }


}

AddController.$inject = ['$state', 'ContactService'];
export { AddController };