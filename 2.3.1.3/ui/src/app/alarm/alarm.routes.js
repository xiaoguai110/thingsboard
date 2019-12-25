m/*
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

import alarmTemplate from './alarm-table.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function AlarmRoutes($stateProvider) {

    $stateProvider
        .state('home.alarm', {
            url: '/alarm',
            module: 'private',
            auth: ['TENANT_ADMIN', 'CUSTOMER_USER'],
            views: {
                "content@home": {
                    templateUrl: alarmTemplate,
                    controllerAs: 'vm',
                    controller: 'AlarmDetailsDialogController'
                }
            },
            data: {
                pageTitle: 'alarm.alarms'
            },

            ncyBreadcrumb: {
                label: '{"icon": "alarm", "label": "alarm.alarms"}',
                icon: 'alarm'
            }
        });
}
