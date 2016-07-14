// only executed on the server
import _ from 'lodash';
//import { Meteor } from 'meteor/meteor'; // why ??
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // generate data if none exists
  const numRecords = Employees.find({}).count();
  console.log(numRecords);

  if (!numRecords) {
    // generate data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
  // publish, aka responses, are only on the server
  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });

});
