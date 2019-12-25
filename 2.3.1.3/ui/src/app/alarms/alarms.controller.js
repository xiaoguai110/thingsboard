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
import './alarms.scss';

/*@ngInject*/
export default function AlarmsController($scope, userService,$state) {

    var vm = this;
    vm.redirectTo = redirectTo;

    redirectTo();

    function redirectTo() {
        var user = userService.getCurrentUser();
        var customerId = user.customerId;
        if(customerId === '983203d0-7867-11e9-947b-67b440b74b92') {
            $state.go('home.dashboards.dashboard', {dashboardId: 'c1790810-7867-11e9-947b-67b440b74b92'});
        }

        if(customerId === 'f6a7ec90-93d8-11e9-b592-b1a83fed10a9') {
            $state.go('home.dashboards.dashboard', {dashboardId: '3ba3b370-95a4-11e9-b091-6b74ef1f005d'});
        }

        //STE
        if(user.customerId === '670021f0-942a-11e9-b6d9-99de8b6afd61') {
            $state.go('home.dashboards.dashboard', {dashboardId: 'd628e420-a868-11e9-bb6b-e9c83d3221f1'});
        }

        //JUSHENG
        if(user.customerId === 'fb027e40-abac-11e9-bf42-77b3c09eead2') {
            $state.go('home.dashboards.dashboard', {dashboardId: 'eecdcf20-ac2a-11e9-bf42-77b3c09eead2'});
        }
    }


}
