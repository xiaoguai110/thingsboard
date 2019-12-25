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

import maintenanceTemplate from './maintenance.tpl.html';
/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function MaintenanceRoutes($stateProvider) {

    $stateProvider
        .state('home.maintenance', {
            url: '/maintenance',
            module: 'private',
            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
            data: {
                pageTitle: 'maintenance.maintenance'
            },
            views: {
                "content@home": {
                    templateUrl: maintenanceTemplate,
                    controllerAs: 'vm',
                    controller: 'MaintenanceController'
                }
            },
            ncyBreadcrumb: {
                label: '{"icon": "dashboard", "label": "maintenance.maintenance"}',
                icon: 'dashboard'
            }
        });
}
