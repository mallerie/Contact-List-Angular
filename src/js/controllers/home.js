function HomeController (ContactService) {

  let vm = this;

  function init () {
    console.log("Home Controller ran succesfully");
    ContactService.allContacts().then((resp) => {
      vm.contacts = resp.data;
      console.log(resp.data);

      vm.contacts.sort(function(a, b){
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }

      })

    });
  
  }

  init();

}

HomeController.$inject = ['ContactService'];
export { HomeController };