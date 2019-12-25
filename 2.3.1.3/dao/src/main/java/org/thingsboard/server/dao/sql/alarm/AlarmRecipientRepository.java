/**
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
package org.thingsboard.server.dao.sql.alarm;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.thingsboard.server.dao.model.nosql.AlarmRecipientEntity;
import org.thingsboard.server.dao.util.SqlDao;

import java.util.List;

/**
 * Created by Valerii Sosliuk on 5/21/2017.
 */
@SqlDao
public interface AlarmRecipientRepository extends CrudRepository<AlarmRecipientEntity, String> {

    @Query("SELECT a FROM AlarmRecipientEntity a WHERE a.tenantId = :tenantId AND a.deviceId = :deviceId " +
            "AND a.customerId= :customerId AND a.type = :alarmRecipientType ORDER BY a.type ASC, a.id DESC")
    List<AlarmRecipientEntity> findByTelephoneAndSeverity(@Param("tenantId") String tenantId,
                                                    @Param("deviceId") String deviceId,
                                                    @Param("customerId") String customerId,
                                                    @Param("alarmRecipientType") String alarmRecipientType,
                                                    Pageable pageable);

    //查询全部(根据客户id)
    @Query("SELECT a FROM AlarmRecipientEntity a WHERE a.tenantId = :tenantId " +
            "AND a.customerId = :customerId ")
    List<AlarmRecipientEntity> findAllByCustomerId(@Param("tenantId") String tenantId,
                                             @Param("customerId") String customerId,
                                             Pageable pageable);

    //查询详情(根据客户id)
    @Query("SELECT a FROM AlarmRecipientEntity a WHERE a.tenantId = :tenantId " +
            "AND a.customerId = :customerId AND a.id = :id")
    AlarmRecipientEntity findByCustomerId(@Param("tenantId") String tenantId,
                                    @Param("customerId") String customerId,
                                    @Param("id") String id,
                                    Pageable pageable);
}
