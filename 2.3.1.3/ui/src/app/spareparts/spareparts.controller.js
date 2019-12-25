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
import './spareparts.scss';

/*@ngInject*/
export default function SparepartsController($scope, userService,$state, $log) {

    var vm = this;
    vm.redirectTo = redirectTo;

    redirectTo();

    function redirectTo() {
        var user = userService.getCurrentUser();
        var customerId = user.customerId;
        if(customerId === '983203d0-7867-11e9-947b-67b440b74b92') {
            $log.info('cdbc97e0-940f-11e9-861b-b37f131f29a9');
            $state.go('home.dashboards.dashboard', {dashboardId: 'cdbc97e0-940f-11e9-861b-b37f131f29a9'});
        }

        //STE
        if(user.customerId === '670021f0-942a-11e9-b6d9-99de8b6afd61') {
            $state.go('home.dashboards.dashboard', {dashboardId: '9feb01b0-95ec-11e9-889b-57587fd5ea78'});
        }

    }


}
