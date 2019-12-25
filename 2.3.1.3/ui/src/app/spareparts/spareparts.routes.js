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

import sparepartsTemplate from './spareparts.tpl.html';
/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function SparepartsRoutes($stateProvider) {

    $stateProvider
        .state('home.spareparts', {
            url: '/spareparts',
            module: 'private',
            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
            data: {
                pageTitle: 'spareparts.spareparts'
            },
            views: {
                "content@home": {
                    templateUrl: sparepartsTemplate,
                    controllerAs: 'vm',
                    controller: 'SparepartsController'
                }
            },
            ncyBreadcrumb: {
                label: '{"icon": "dashboard", "label": "spareparts.spareparts"}',
                icon: 'dashboard'
            }
        });
}
