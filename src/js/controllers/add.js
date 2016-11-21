import { ContactService } from '../services/contact-server';

function AddController ($state, ContactService) {
  console.log("Add Controller ran");

  let vm = this;

  this.addContact = addContact;

  function addContact (contact) {
    ContactService.addContact(contact).then((resp) => {
      $state.go('root.home');

    })
  }


}

AddController.$inject = ['$state', 'ContactService'];
export { AddController };