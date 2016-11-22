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
}

ContactController.$inject = ['ContactService', '$stateParams'];
export { ContactController };