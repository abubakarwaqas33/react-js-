import React from 'react';
const DefaultLayout = React.lazy(() => import('../components/DefaultLatout/DefaultLayout'));
const SignUp = React.lazy(() => import('../components/SignUp/SignUp'));


const appRoutes = [
    {
        path: '/',
        component: DefaultLayout,
        className: 'login-page',
        access: 'public',
        exact: true
    },

    {
        path: '/register',
        component: SignUp,
        className: 'signup-page',
        access: 'public',
        exact: true
    },
];

export default appRoutes;

