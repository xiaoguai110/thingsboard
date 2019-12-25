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
import thingsboardApiUser from '../api/user.service';
import thingsboardCustomizedMenu from './menu-customized.service';

export default angular.module('thingsboard.menu', [thingsboardApiUser, thingsboardCustomizedMenu])
    .factory('menu', Menu)
    .name;

/*@ngInject*/
function Menu(userService, cmenuService, $state, $rootScope, $log) {

    var authority = '';
    var sections = [];
    var homeSections = [];

    if (userService.isUserLoaded() === true) {
        buildMenu();
    }

    var authenticatedHandle = $rootScope.$on('authenticated', function () {
        buildMenu();
    });

    var service = {
        authenticatedHandle: authenticatedHandle,
        getHomeSections: getHomeSections,
        getSections: getSections,
        sectionHeight: sectionHeight,
        sectionActive: sectionActive
    }

    return service;

    function getSections() {
        return sections;
    }

    function getHomeSections() {
        return homeSections;
    }

    function buildMenu() {
        var user = userService.getCurrentUser();
        if (user) {
            if (authority !== user.authority) {
                sections = [];
                authority = user.authority;
                if (authority === 'SYS_ADMIN') {
                    sections = [
                        {
                            name: 'home.home',
                            type: 'link',
                            state: 'home.links',
                            icon: 'home'
                        },
                        {
                            name: 'tenant.tenants',
                            type: 'link',
                            state: 'home.tenants',
                            icon: 'supervisor_account'
                        },
                        {
                            name: 'widget.widget-library',
                            type: 'link',
                            state: 'home.widgets-bundles',
                            icon: 'now_widgets'
                        },
                        {
                            name: 'admin.system-settings',
                            type: 'toggle',
                            state: 'home.settings',
                            height: '80px',
                            icon: 'settings',
                            pages: [
                                {
                                    name: 'admin.general',
                                    type: 'link',
                                    state: 'home.settings.general',
                                    icon: 'settings_applications'
                                },
                                {
                                    name: 'admin.outgoing-mail',
                                    type: 'link',
                                    state: 'home.settings.outgoing-mail',
                                    icon: 'mail'
                                }
                            ]
                        }];
                    homeSections =
                        [{
                            name: 'tenant.management',
                            places: [
                                {
                                    name: 'tenant.tenants',
                                    icon: 'supervisor_account',
                                    state: 'home.tenants'
                                }
                            ]
                        },
                        {
                            name: 'widget.management',
                            places: [
                                {
                                    name: 'widget.widget-library',
                                    icon: 'now_widgets',
                                    state: 'home.widgets-bundles'
                                }
                            ]
                        },
                        {
                            name: 'admin.system-settings',
                            places: [
                                {
                                    name: 'admin.general',
                                    icon: 'settings_applications',
                                    state: 'home.settings.general'
                                },
                                {
                                    name: 'admin.outgoing-mail',
                                    icon: 'mail',
                                    state: 'home.settings.outgoing-mail'
                                }
                            ]
                        }];
                } else if (authority === 'TENANT_ADMIN') {
                    sections = [
                        {
                            name: 'home.home',
                            type: 'link',
                            state: 'home.links',
                            icon: 'home'
                        },
                       {
                            name: 'rulechain.rulechains',
                            type: 'link',
                            state: 'home.ruleChains',
                            icon: 'settings_ethernet'
                        },
                        {
                            name: 'customer.customers',
                            type: 'link',
                            state: 'home.customers',
                            icon: 'supervisor_account'
                        },

                        {
                            name: 'asset.assets',
                            type: 'link',
                            state: 'home.assets',
                            icon: 'domain'
                        },
                        {
                            name: 'device.devices',
                            type: 'link',
                            state: 'home.devices',
                            icon: 'devices_other'
                        },
                        /*
                        {
                            name: 'entity-view.entity-views',
                            type: 'link',
                            state: 'home.entityViews',
                            icon: 'view_quilt'
                        },*/
                        {
                            name: 'widget.widget-library',
                            type: 'link',
                            state: 'home.widgets-bundles',
                            icon: 'now_widgets'
                        },
                        {
                            name: 'dashboard.dashboards',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboards'
                        },
                        {
                            name: 'audit-log.audit-logs',
                            type: 'link',
                            state: 'home.auditLogs',
                            icon: 'track_changes'
                        }];

                    homeSections =
                        [{
                            name: 'rulechain.management',
                            places: [
                                {
                                    name: 'rulechain.rulechains',
                                    icon: 'settings_ethernet',
                                    state: 'home.ruleChains'
                                }
                            ]
                        },
                        {
                            name: 'customer.management',
                            places: [
                                {
                                    name: 'customer.customers',
                                    icon: 'supervisor_account',
                                    state: 'home.customers'
                                }
                            ]
                        },

                            {
                                name: 'asset.management',
                                places: [
                                    {
                                        name: 'asset.assets',
                                        icon: 'domain',
                                        state: 'home.assets'
                                    }
                                ]
                            },

                            {
                                name: 'device.management',
                                places: [
                                    {
                                        name: 'device.devices',
                                        icon: 'devices_other',
                                        state: 'home.devices'
                                    }
                                ]
                            },
                            /*
                            {
                                name: 'entity-view.management',
                                places: [
                                    {
                                        name: 'entity-view.entity-views',
                                        icon: 'view_quilt',
                                        state: 'home.entityViews'
                                    }
                                ]
                            },*/
                            {
                                name: 'dashboard.management',
                                places: [
                                    {
                                        name: 'widget.widget-library',
                                        icon: 'now_widgets',
                                        state: 'home.widgets-bundles'
                                    },
                                    {
                                        name: 'dashboard.dashboards',
                                        icon: 'dashboard',
                                        state: 'home.dashboards'
                                    }
                                ]
                            },
                            {
                                name: 'audit-log.audit',
                                places: [
                                    {
                                        name: 'audit-log.audit-logs',
                                        icon: 'track_changes',
                                        state: 'home.auditLogs'
                                    }
                                ]
                            }];

                } else if (authority === 'CUSTOMER_USER') {
                    sections = [
                       /*
                        {
                            name: 'home.home',
                            type: 'link',
                            state: 'home.links',
                            icon: 'home'
                        },

                        {
                            name: 'asset.assets',
                            type: 'link',
                            state: 'home.assets',
                            icon: 'domain'
                        },*/
                        {
                            name: 'portrait.portrait',
                            type: 'link',
                            state: 'home.dashboards',
                            icon:  'home'
                        },
                        {
                            name: 'device.monitor',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'devices_other'
                        },
                        /*
                        {
                            name: 'entity-view.entity-views',
                            type: 'link',
                            state: 'home.entityViews',
                            icon: 'view_quilt'
                        },
                        {
                            name: 'dashboard.dashboards',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },*/
                        {
                            name: 'alarm.alarms',
                            type: 'link',
                            state: 'home.alarms',
                            icon: 'alarm'
                        },
                        {
                            name: 'tools.tools',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },
                        {
                            name: 'maintenance.maintenance',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },
                        {
                            name: 'spareparts.spareparts',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },
                        {
                            name: 'oee.oee',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },
                        {
                            name: 'smart.smart',
                            type: 'link',
                            state: 'home.dashboards',
                            icon: 'dashboard'
                        },
                        {
                            name: 'video.video',
                            type: 'link',
                            state: 'home.video',
                            icon: 'dashboard'
                        }
                        ];

                    homeSections =
                        [

                        /*{
                            name: 'asset.view-assets',
                            places: [
                                {
                                    name: 'asset.assets',
                                    icon: 'domain',
                                    state: 'home.assets'
                                }
                            ]
                        },*/

                        {
                            name: 'portrait.view-portrait',
                            places: [
                                {
                                    name: 'portrait.portrait',
                                    icon: 'home',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                        {
                            name: 'device.view-devices',
                            places: [
                                {
                                    name: 'device.monitor',
                                    icon: 'devices_other',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                        /*
                        {
                            name: 'entity-view.management',
                            places: [
                                {
                                    name: 'entity-view.entity-views',
                                    icon: 'view_quilt',
                                    state: 'home.entityViews'
                                }
                            ]
                        },*/
                        {
                            name: 'alarm.alarms',
                            places: [
                                {
                                    name: 'alarm.alarms',
                                    icon: 'dashboard',
                                    state: 'home.alarms'
                                }
                            ]
                        },
                        {
                            name: 'tools.tools',
                            places: [
                                {
                                    name: 'tools.tools',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                       {
                            name: 'maintenance.maintenance',
                            places: [
                                {
                                    name: 'maintenance.maintenance',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                       {
                            name: 'spareparts.spareparts',
                            places: [
                                {
                                    name: 'spareparts.spareparts',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                       {
                            name: 'oee.oee',
                            places: [
                                {
                                    name: 'oee.oee',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                       {
                            name: 'smart.smart',
                            places: [
                                {
                                    name: 'smart.smart',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        },
                       {
                            name: 'video.video',
                            places: [
                                {
                                    name: 'video.video',
                                    icon: 'dashboard',
                                    state: 'home.dashboards'
                                }
                            ]
                        }

                        ];

                    $log.info('ccccciiiiidddddd=====' + user.customerId);

                    sections = cmenuService.getSections(user.customerId);
                    homeSections = cmenuService.getHomeSections(user.customerId);

                } //end authority
            } //end curr authority
        } //end if user
    } //end func

    function sectionHeight(section) {
//        if ($state.includes(section.state)) {
//            return section.height;
//        } else {
//            return '0px';
//        }

        $log.info("secondMenu:::" + angular.element('.tb-side-menu').attr('secondMenu'));

        if ($state.includes(section.state)) {
            return section.height;
        } else if(angular.element('.tb-side-menu').attr('secondMenu') === 'true') {
            $log.info("secondMenu:::====" + angular.element('.tb-side-menu').attr('secondMenu'));
            return section.height;
        } else {
             return '0px';
        }
//        return section.height;
    }

    function sectionActive(section) {
        //return $state.includes(section.state);
        var active = $state.includes(section.state) || (angular.element('.tb-side-menu').attr('secondMenu') === 'true');
        return active;

//        return section === section;
    }

}