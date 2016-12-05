function  ContactController (ContactService, $stateParams) {
  console.log("Contact Controller ran succesfully");

  let vm = this;

  vm.user = {};

  function init() {
    ContactService.getContact($stateParams.id).then((resp) => {
      vm.user = resp.data;
    })
  }

  init();

  function deleteContact() {
    console.log("remove func is running");
    // ContactService.deleteContact(contact).then((resp) => {
    //   $state.go('root.home');
    // })
  };


}

ContactController.$inject = ['ContactService', '$stateParams'];
export { ContactController };