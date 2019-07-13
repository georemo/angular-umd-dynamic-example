# Angular Dynamic UMD Module Loading
This is an experimental branch from https://github.com/lmeijdam/angular-umd-dynamic-example.
Dynamic module loading in Angular has been subject has attracted several developers. 
Having looked at several efforts and ideas, I have forked this particular one to try and extend it further with some useful features.
## Target Features:
1. Side Menu with a menu item holding link to dashboard for managing modules
2. Enabled Modules should be displayed in the menu list
3. Interface for downloading remote modules in a secure and procedural way. 
IDE plugin interfaces are inspiring
 
## How to start
Clone or download this repository;
> git clone https://github.com/lmeijdam/angular-umd-dynamic-example

Navigate to the folder and install all dependencies;

> npm install

By default I've added the UMD bundles from ModuleA, ModuleB, ModuleC and ModuleD. Also modules A and C are registered by default. This means they will get loaded when the app gets initialized.

## Updating a module/library
When you want to make updates to one of the existing modules you can just update the source files in 'projects/(moduletoedit)/src/lib' and rebuilding that specific module with the Angular CLI;
> cd <module-directory>/moduleName
> ng build libraryName

After build you're able to replace the contents of that module in the 'assets' folder in either the dist folder or on the hosted environment. If you've added new dependencies like third party libraries and want to use them in the library. Make sure to update the 'modules' array in the module.service.ts and recompile.

## Adding a new module/library
When you want to add a new library/module please make use of the Angular CLI command;
> ng generate library (libraryName)

Edit the modules.json file with the correct module information and also make sure to have the RouterModule.forChild([]) configuration done in the module of the library.

In the original [source](https://github.com/kirjs/angular-dynamic-module-loading) you'll find an example to load up component dynamically and instantiate them in a ViewChild instead of extending the Router.

Now build the module with 
>ng build LibraryName

and copy the umd bundle to the 'assets' folder.

## AOT and SystemJS
The app now supports AOT compilation by typing;
> ng build --aot

Next to that I've changed the use of eval to the use of SystemJS to load the modules. 

## Running the application
For the application I've used [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server) which let your application run on port 8080 by default. After install you're able to run this application locally
> npm install -g http-server
>
> http-server ./dist/angular-dynamic-demo


## Notes
- Angular 6 uses RxJs 6. Install rxjs-compat before you can make use of the rxjs operators; [https://github.com/shlomiassaf/ngx-modialog/issues/426](https://github.com/shlomiassaf/ngx-modialog/issues/426)
- This demo makes use of eval(). Something that is not really recommended to use due to security risks. Still a safe way is provided to make use of eval();[https://www.owasp.org/index.php?title=JavaScript_Closure_Within_Eval&setlang=en](https://www.owasp.org/index.php?title=JavaScript_Closure_Within_Eval&setlang=en)
- Lazy Loading is not yet possible within the libraries as no chunk files are generated for the lazy loaded modules.
