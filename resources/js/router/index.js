import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = require('../containers/DefaultContainer.vue');

// Views
const Dashboard = require('../views/Dashboard.vue');

const Colors = require('../views/theme/Colors.vue');
const Typography = require('../views/theme/Typography.vue');

const Charts = require('../views/Charts.vue');
const Widgets = require('../views/Widgets.vue');

// Views - Components
const Cards = require('../views/base/Cards.vue');
const Forms = require('../views/base/Forms.vue');
const Switches = require('../views/base/Switches.vue');
const Tables = require('../views/base/Tables.vue');
const Tabs = require('../views/base/Tabs.vue');
const Breadcrumbs = require('../views/base/Breadcrumbs.vue');
const Carousels = require('../views/base/Carousels.vue');
const Collapses = require('../views/base/Collapses.vue');
const Jumbotrons = require('../views/base/Jumbotrons.vue');
const ListGroups = require('../views/base/ListGroups.vue');
const Navs = require('../views/base/Navs.vue');
const Navbars = require('../views/base/Navbars.vue');
const Paginations = require('../views/base/Paginations.vue');
const Popovers = require('../views/base/Popovers.vue');
const ProgressBars = require('../views/base/ProgressBars.vue');
const Tooltips = require('../views/base/Tooltips.vue');

// Views - Buttons
const StandardButtons = require('../views/buttons/StandardButtons.vue');
const ButtonGroups = require('../views/buttons/ButtonGroups.vue');
const Dropdowns = require('../views/buttons/Dropdowns.vue');
const BrandButtons = require('../views/buttons/BrandButtons.vue');

// Views - Icons
const Flags = require('../views/icons/Flags.vue');
const FontAwesome = require('../views/icons/FontAwesome.vue');
const SimpleLineIcons = require('../views/icons/SimpleLineIcons.vue');
const CoreUIIcons = require('../views/icons/CoreUIIcons.vue');

// Views - Notifications
const Alerts = require('../views/notifications/Alerts.vue');
const Badges = require('../views/notifications/Badges.vue');
const Modals = require('../views/notifications/Modals.vue');

// Views - Pages
const Page404 = require('../views/pages/Page404.vue');
const Page500 = require('../views/pages/Page500.vue');
const Login = require('../views/pages/Login.vue');
const Register = require('../views/pages/Register.vue');

// Users
const Users = require('../views/users/Users.vue');
const User = require('../views/users/User.vue');

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      meta: { middlewareAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
