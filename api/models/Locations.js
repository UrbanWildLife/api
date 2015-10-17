/**
* Locations.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
      type: {
          type: 'string',
          enum: [
              'cow',
              'cat',
              'oak',
              'bat',
              'bird',
              'deer',
              'dog',
              'elephant',
              'turlte',
              'rabbit',
              'sheep',
              'fish',
              'other'
          ],
          required: true
      },
      description: {
          type: 'string'
      },
      lat: {
          type: 'float',
          required: true
      },
      lng: {
          type: 'float',
          required: true
      },
      dist: {
          type: 'float'
      }
  }
};
