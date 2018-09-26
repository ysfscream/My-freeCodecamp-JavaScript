var Person = function(firstAndLast) {
  let firstName = ''
  let lastName = ''
  this.getFullName = function() {
    return `${firstName} ${lastName}`
  }
  this.getFirstName = function() {
    return firstName
  }
  this.getLastName = function() {
    return lastName
  }
  this.setFirstName = function(first) {
    firstName = first
  }
  this.setLastName = function(last) {
    lastName = last
  }
  this.setFullName = function(firstAndLast) {
    const fullName = firstAndLast.split(' ')
    firstName = fullName[0]
    lastName = fullName[1]
  }
  this.setFullName(firstAndLast)
};

var bob = new Person('Bob Ross');
console.log(bob.getLastName())
