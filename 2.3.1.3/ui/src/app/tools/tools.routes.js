/*
 * Copyright © 2016-2019 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable import/no-unresolved, import/default */

/* eslint-enable import/no-unresolved, import/default */
import toolsTemplate from './tools.tpl.html';
/*@ngInject*/
export default function ToolsRoutes($stateProvider) {

//    $stateProvider
//        .state('home.tools', {
//            url: '/tools',
//            module: 'private',
//            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
//            redirectTo: 'home.tparams',
//            ncyBreadcrumb: {
//                label: '{"icon": "dashboard", "label": "tools.menu"}',
//                icon: 'dashboard'
//            }
//        });

    $stateProvider
        .state('home.tools', {
            url: '/tools',
            module: 'private',
            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
            data: {
                pageTitle: 'tools.menu'
            },
            views: {
                "content@home": {
                    templateUrl: toolsTemplate,
                    controllerAs: 'vm',
                    controller: 'ToolsController'
                }
            },
            ncyBreadcrumb: {
                label: '{"icon": "dashboard", "label": "tools.menu"}',
                icon: 'dashboard'
            }
        });

}
