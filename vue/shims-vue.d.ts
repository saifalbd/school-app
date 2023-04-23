

declare module '*.vue' {
    import type { App, DefineComponent } from 'vue'
 
    const component: DefineComponent<{}, {}, any>
    const route:route;
    export default route;
    export default component
 }


 declare module 'vue3-select2-component' {
   const component: DefineComponent<{}, {}, any>
   export default component
 }

 declare var app:App<Element>

 declare var dateFormat:string;
 declare var axios:{get:(url:string)=>Promise,
  post:(url:string,params:Object)=>Promise,
  delete:Function,put:Function,[prop:string]:any};

 declare function $(selector:string|Object|any):any;
 declare function route( name?: string,
    params?: RouteParamsWithQueryOverload | RouteParam):Router;


declare function dropdowns(slug:string,callBack:Function):void