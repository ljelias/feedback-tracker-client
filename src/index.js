import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

/*
const ROSTER = [
  { 'id': '1', 'first_name': 'Sue', 'last_name': 'Student', 'phone': '651-777-2222', 'email': 's.student@email.com', 'misc_info': 'skype: SSSkyper'},
  { 'id': '2', 'first_name': 'Joe', 'last_name': 'Estudiante', 'phone': '612-888-3333', 'email': 'joee@email.com', 'misc_info': 'alt phone: 612-888-3334'},
  { 'id': '3', 'first_name': 'Bob', 'last_name': 'Roberts', 'phone': '507-444-5555', 'email': 'bobr@email.com', 'misc_info': 'send invoices to supervisor j.doe@email.com'},
  { 'id': '4', 'first_name': 'Amy', 'last_name': 'Anders', 'phone': '218-333-7777', 'email': 'a.anders@email.com', 'misc_info': 'on leave June 2020'},
  { 'id': '5', 'first_name': 'Ana', 'last_name': 'Manzana', 'phone': '763-555-6666', 'email': 'manzana7@email.com', 'misc_info': 'monthly progress reports to HR@email.com'},
];
*/


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
  
//same as: document.querySelector('#root')

