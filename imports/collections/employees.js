// declare a collection
import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

// we exclude the default keyword so that we can export multiple objects
// using the default keyword allows us to only export a single object
