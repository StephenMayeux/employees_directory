// only executed on the server
import _ from 'lodash';
import { image, helpers } from 'faker';
import { Meteor } from 'meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // generate data if none exists
  const numRecords = Employees.find({}).count();
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
});
