function HomeController (ContactService) {

  let vm = this;

  function init () {
    console.log("Home Controller ran succesfully");
    ContactService.allContacts().then((resp) => {
      vm.contacts = resp.data;
      console.log(resp.data);
    });

    
  }

  init();

}

HomeController.$inject = ['ContactService'];
export { HomeController };