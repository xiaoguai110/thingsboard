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

export default angular.module('thingsboard.cmenu', [])
    .factory('cmenuService', MenuCustomized)
    .name;

/*@ngInject*/
function MenuCustomized() {

    var CUSTOMER_KKT = '983203d0-7867-11e9-947b-67b440b74b92';
    var CUSTOMER_STE = '670021f0-942a-11e9-b6d9-99de8b6afd61';
    var CUSTOMER_JSH = 'fb027e40-abac-11e9-bf42-77b3c09eead2';

    var sections = [];
    var homeSections = [];

    var service = {
        getHomeSections: getHomeSections,
        getSections: getSections
    }

    return service;

    function getSections(customerId) {
        if(customerId === CUSTOMER_KKT) {
            sections = [
                {
                    name: 'device.monitor',
                    type: 'link',
                    state: 'home.devstatus',
                    icon: 'devices_other'
                },
                {
                    name: 'tools.menu',
                    type: 'toggle',
                    state: 'home.tools',
                    height: '200px',
                    icon: 'dashboard',
                    pages: [
                        {
                             name: 'portrait.kingtech',
                             type: 'link',
                             state: 'home.tdevice',
                             icon:  'home'
                         },
                         {
                             name: 'tools.kingtech',
                             type: 'link',
                             state: 'home.tparams',
                             icon: 'devices_other'
                         },
                         {
                             name: 'smart.kingtech',
                             type: 'link',
                             state: 'home.tcurve',
                             icon: 'dashboard'
                         },
                         {
                             name: 'oee.kingtech',
                             type: 'link',
                             state: 'home.tefficiency',
                             icon: 'dashboard'
                         },
                         {
                             name: 'tools.life',
                             type: 'link',
                             state: 'home.tlife',
                             icon: 'dashboard'
                         }

                    ]
                },
                {
                    name: 'oee.oee',
                    type: 'link',
                    state: 'home.oee',
                    icon: 'dashboard'
                },
                {
                    name: 'maintenance.maintenance',
                    type: 'link',
                    state: 'home.maintenance',
                    icon: 'dashboard'
                }
            ];
        }

        if(customerId === CUSTOMER_STE) {
            sections = [
                {
                    name: 'portrait.portrait',
                    type: 'link',
                    state: 'home.portrait',
                    icon: 'home'
                },
                {
                    name: 'device.monitor',
                    type: 'link',
                    state: 'home.devstatus',
                    icon: 'devices_other'
                },
                {
                    name: 'tools.menu',
                    type: 'toggle',
                    state: 'home.tools',
                    height: '200px',
                    icon: 'dashboard',
                    pages: [
                        {
                            name: 'portrait.kingtech',
                            type: 'link',
                            state: 'home.tdevice',
                            icon:  'home'
                        },
                        {
                            name: 'tools.kingtech',
                            type: 'link',
                            state: 'home.tparams',
                            icon: 'devices_other'
                        },
                        {
                            name: 'smart.kingtech',
                            type: 'link',
                            state: 'home.tcurve',
                            icon: 'dashboard'
                        },
                        {
                            name: 'oee.kingtech',
                            type: 'link',
                            state: 'home.tefficiency',
                            icon: 'dashboard'
                        },
                        {
                            name: 'tools.life',
                            type: 'link',
                            state: 'home.tlife',
                            icon: 'dashboard'
                        }

                    ]
                },
                {
                    name: 'oee.oee',
                    type: 'link',
                    state: 'home.oee',
                    icon: 'dashboard'
                },
                {
                    name: 'maintenance.maintenance',
                    type: 'link',
                    state: 'home.maintenance',
                    icon: 'dashboard'
                },
                {
                    name: 'alarm.alarms',
                    type: 'link',
                    state: 'home.alarms',
                    icon: 'alarm'
                },
               {
                    name: 'spareparts.spareparts',
                    type: 'link',
                    state: 'home.spareparts',
                    icon: 'dashboard'
                },
                {
                    name: 'work-order.work-order',
                    type: 'link',
                    state: 'home.workorder',
                    icon: 'dashboard'
                },
                {
                    name: 'video.video',
                    type: 'link',
                    state: 'home.video',
                    icon: 'dashboard'
                }
            ];
        }

        if(customerId === CUSTOMER_JSH) {
            sections = [
                {
                    name: 'device.monitor',
                    type: 'link',
                    state: 'home.devstatus',
                    icon: 'devices_other'
                },
                {
                    name: 'device.monitor-pressure-temp',
                    type: 'link',
                    state: 'home.tparams',
                    icon: 'home'
                },
                {
                    name: 'portrait.jushtech',
                    type: 'link',
                    state: 'home.tdevice',
                    icon: 'home'
                },
                {
                    name: 'oee.kingtech',
                    type: 'link',
                    state: 'home.tefficiency',
                    icon: 'home'
                },
                {
                    name: 'oee.oee',
                    type: 'link',
                    state: 'home.oee',
                    icon: 'dashboard'
                },
                {
                    name: 'maintenance.maintenance',
                    type: 'link',
                    state: 'home.maintenance',
                    icon: 'dashboard'
                },
                {
                    name: 'alarm.alarms',
                    type: 'link',
                    state: 'home.alarms',
                    icon: 'alarm'
                }/*,
                /*
               {
                    name: 'spareparts.spareparts',
                    type: 'link',
                    state: 'home.spareparts',
                    icon: 'dashboard'
                },
                {
                    name: 'work-order.work-order',
                    type: 'link',
                    state: 'home.workorder',
                    icon: 'dashboard'
                },
                {
                    name: 'video.video',
                    type: 'link',
                    state: 'home.video',
                    icon: 'dashboard'
                }*/
            ];
        }


        return sections;
    }

    function getHomeSections(customerId) {
        if(customerId === CUSTOMER_KKT) {
               homeSections =
                    [
                    {
                        name: 'tools.menu',
                        places: [
                            {
                                 name: 'portrait.kingtech',
                                 state: 'home.tdevice',
                                 icon:  'home'
                             },
                             {
                                 name: 'tools.kingtech',
                                 state: 'home.tparams',
                                 icon: 'devices_other'
                             },
                             {
                                 name: 'smart.kingtech',
                                 state: 'home.tcurve',
                                 icon: 'dashboard'
                             },
                             {
                                 name: 'oee.kingtech',
                                 state: 'home.tefficiency',
                                 icon: 'dashboard'
                             },
                             {
                                 name: 'tools.life',
                                 state: 'home.tlife',
                                 icon: 'dashboard'
                             }

                        ]
                    },
                    {
                        name: 'device.monitor',
                        places: [
                            {
                                name: 'device.monitor',
                                icon: 'home',
                                state: 'home.devstatus'
                            }
                        ]
                    },
                    {
                        name: 'oee.oee',
                        places: [
                            {
                                name: 'oee.oee',
                                icon: 'dashboard',
                                state: 'home.oee'
                            }
                        ]
                    },
                   {
                        name: 'maintenance.maintenance',
                        places: [
                            {
                                name: 'maintenance.maintenance',
                                icon: 'dashboard',
                                state: 'home.maintenance'
                            }
                        ]
                    }/*,
                    {
                        name: 'alarm.alarms',
                        places: [
                            {
                                name: 'alarm.alarms',
                                icon: 'dashboard',
                                state: 'home.alarms'
                            }
                        ]
                    }*/


                    ];
        }


        if(customerId === CUSTOMER_STE) {
            homeSections =
            [
                {
                    name: 'portrait.view-portrait',
                    places: [
                        {
                            name: 'portrait.portrait',
                            icon: 'home',
                            state: 'home.portrait'
                        }
                    ]
                },
                {
                    name: 'device.monitor',
                    places: [
                        {
                            name: 'device.monitor',
                            icon: 'dashboard',
                            state: 'home.devstatus'
                        }
                    ]
                },
                {
                    name: 'tools.menu',
                    places: [
                        {
                            name: 'portrait.kingtech',
                            state: 'home.tdevice',
                            icon:  'home'
                        },
                        {
                            name: 'tools.kingtech',
                            state: 'home.tparams',
                            icon: 'devices_other'
                        },
                        {
                            name: 'smart.kingtech',
                            state: 'home.tcurve',
                            icon: 'dashboard'
                        },
                        {
                            name: 'oee.kingtech',
                            state: 'home.tefficiency',
                            icon: 'dashboard'
                        },
                        {
                            name: 'tools.life',
                            state: 'home.tlife',
                            icon: 'dashboard'
                        }

                    ]
                },
                {
                    name: 'oee.oee',
                    places: [
                        {
                            name: 'oee.oee',
                            icon: 'dashboard',
                            state: 'home.oee'
                        }
                    ]
                },
                {
                    name: 'maintenance.maintenance',
                    places: [
                        {
                            name: 'maintenance.maintenance',
                            icon: 'dashboard',
                            state: 'home.maintenance'
                        }
                    ]
                },
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
                    name: 'spareparts.spareparts',
                    places: [
                        {
                            name: 'spareparts.spareparts',
                            icon: 'dashboard',
                            state: 'home.spareparts'
                        }
                    ]
                },
               {
                    name: 'work-order.work-order',
                    places: [
                        {
                            name: 'work-order.work-order',
                            icon: 'dashboard',
                            state: 'home.work-order'
                        }
                    ]
                },
                {
                     name: 'video.video',
                     places: [
                         {
                             name: 'video.video',
                             icon: 'dashboard',
                             state: 'home.video'
                         }
                     ]
                 }
             ];
        }

        if(customerId === CUSTOMER_JSH) {
            homeSections =
            [
                {
                    name: 'device.monitor',
                    places: [
                        {
                            name: 'device.monitor',
                            icon: 'home',
                            state: 'home.devstatus'
                        }
                    ]
                },
                {
                    name: 'device.monitor-pressure-temp',
                    places: [
                        {
                            name: 'device.monitor-pressure-temp',
                            icon: 'dashboard',
                            state: 'home.tparams'
                        }
                    ]
                },
                {
                    name: 'portrait.jushtech',
                    places: [
                        {
                            name: 'portrait.jushtech',
                            icon: 'dashboard',
                            state: 'home.tdevice'
                        }
                    ]
                },
                {
                    name: 'oee.kingtech',
                    places: [
                        {
                            name: 'oee.kingtech',
                            icon: 'dashboard',
                            state: 'home.tefficiency'
                        }
                    ]
                },
                {
                    name: 'oee.oee',
                    places: [
                        {
                            name: 'oee.oee',
                            icon: 'dashboard',
                            state: 'home.oee'
                        }
                    ]
                },
                {
                    name: 'maintenance.maintenance',
                    places: [
                        {
                            name: 'maintenance.maintenance',
                            icon: 'dashboard',
                            state: 'home.maintenance'
                        }
                    ]
                },
                {
                    name: 'alarm.alarms',
                    places: [
                        {
                            name: 'alarm.alarms',
                            icon: 'dashboard',
                            state: 'home.alarms'
                        }
                    ]
                }
            ];
        }

        return homeSections;
    }

}