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

import toolsParamsTemplate from './tools-params.tpl.html';
/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function ToolsParamsRoutes($stateProvider) {

    $stateProvider
        .state('home.tparams', {
            url: '/tparams',
            module: 'private',
            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
            data: {
                pageTitle: 'tools.kingtech'
            },
            views: {
                "content@home": {
                    templateUrl: toolsParamsTemplate,
                    controllerAs: 'vm',
                    controller: 'ToolsParamsController'
                }
            },
            ncyBreadcrumb: {
                label: '{"icon": "dashboard", "label": "tools.kingtech"}',
                icon: 'dashboard'
            }
        });
}
