$(document).ready(function(){
  getCustomers();
})

function getCustomers() {
  var  url = "https://api.hubapi.com/crm/v3/objects/contacts";

  $.ajax(url,{success: function(data) {
    console.log(data);
}})
}