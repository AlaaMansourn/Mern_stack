const express = require("express");
const faker = require('faker');

const app = express();



class User {
  constructor()
    {
    this._id=faker.random.number();
    this.firstname=faker.name.firstName();
    this.lastname=faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();

  }
  


}

const newuser=new User();

class Address{
constructor(){
this.city=faker.address.city();
this.zipcode=faker.address.zipCode();
this.streetName=faker.address.streetName();

this.country=faker.address.country();

}





}

const newadd=new Address();
class Company{
constructor(){
this._id=faker.random.number();
this.companyName=faker.company.companyName();
this.address=newadd;

}






}
 const newcomp = new Company(); 


  















// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  
  res.send(`first_name=${newuser.firstname}`);
});
app.get("/api/companies/new", (req, res) => {
  
  res.send(`company_name=${newcomp.companyName}`);
});
app.get("/api/user/company", (req, res) => {
  
  res.send(`company_name=${newcomp.companyName},first_name=${newuser.firstname}`);
});




const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
