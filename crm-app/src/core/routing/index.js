/*
 * register routes
 */
const Routes = Object.freeze({
    Projects: '/projects',
    ProjectsDetail: '/projects/:id',
    // clients
    Clients: '/clients',
    ClientsDetail: '/clients/:id',
    ClientsCreate: '/clients/create',
    ClientsEdit: '/clients/:id/edit',
    ClientsDelete: '/clients/:id/delete',
    Invoices: '/invoices',
    InvoicesDetail: '/invoices/:id',
    InvoicesDetailAddTime: '/invoices/:id/add',
    Login: '/login',
});

/* 
 * replaces : values with object values
 * route('/projects/:id', { id: 9 });
 */
const route = (path, options = {}) => {
    Object.keys(options).forEach(key => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export {
    Routes,
    route
};