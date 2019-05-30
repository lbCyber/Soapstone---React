import React from 'react';
import firebase from './firebase.js';

const words = (response) => {
        for (item in response) {
          $('select').append(`<option value="${response[item]}">${item}</option>`);
        }
        $('select').append(`<option style="display:none" selected disabled>Choose a word</option>`);
      }

export default messageData;