import { SERVER } from '../server';

function ContactService ($http) {

  this.allContacts = function () {
    return $http.get(SERVER);
  }

  this.addContact = function (contact) {
    return $http.post(SERVER, contact);
  };

  this.getContact = function (id) {
    let url = SERVER + "/" + id;
    return $http.get(url);
  }

  this.deleteContact = function (contact) {
    let url = SERVER + "/" + id;
    return $http.delete(url);
    console.log("deleteContact ran")
  }  

}

ContactService.$inject = ['$http'];
export { ContactService };
