import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/page/Home.vue';
import Student from '@/page/Student.vue';
import Teacher from '@/page/Teacher.vue';
import Admin from '@/page/Admin.vue';
import Login from '@/page/user/login.vue';
import Register from '@/page/user/register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Student',
      name: 'Student',
      component: Student
    },
    {
      path: '/Teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
});
