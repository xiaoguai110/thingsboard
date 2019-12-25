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

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.thingsboard.server.common.data.UUIDConverter;
import org.thingsboard.server.common.data.alarm.AlarmRecipient;
import org.thingsboard.server.common.data.id.CustomerId;
import org.thingsboard.server.common.data.id.TenantId;
import org.thingsboard.server.dao.DaoUtil;
import org.thingsboard.server.dao.alarm.AlarmRecipientDao;
import org.thingsboard.server.dao.model.nosql.AlarmRecipientEntity;
import org.thingsboard.server.dao.relation.RelationDao;
import org.thingsboard.server.dao.sql.JpaAbstractDao;
import org.thingsboard.server.dao.util.SqlDao;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.thingsboard.server.common.data.UUIDConverter.fromTimeUUID;

/**
 * Created by Valerii Sosliuk on 5/19/2017.
 */
@Slf4j
@Component
@SqlDao
public class JpaAlarmRecipientDao extends JpaAbstractDao<AlarmRecipientEntity, AlarmRecipient> implements AlarmRecipientDao {

    @Autowired
    private AlarmRecipientRepository alarmRecipientRepository;

    @Autowired
    private RelationDao relationDao;

    @Override
    public List<AlarmRecipient> findByTelephoneAndSeverity(UUID tenantId, UUID deviceId, UUID customerId, String type) {
            List<AlarmRecipient> latest = new ArrayList<>();
        List<AlarmRecipientEntity> entityList = alarmRecipientRepository.findByTelephoneAndSeverity(
                UUIDConverter.fromTimeUUID(tenantId),
                UUIDConverter.fromTimeUUID(deviceId),
                UUIDConverter.fromTimeUUID(customerId),
                type,
                new PageRequest(0, 15));

        return DaoUtil.convertDataList(entityList);
    }

    @Override
    public List<AlarmRecipient> findAllByCustomerId(TenantId tenantId, CustomerId customerId) {
        List<AlarmRecipientEntity> recipientList = alarmRecipientRepository.findAllByCustomerId(
                fromTimeUUID(tenantId.getId()),
                fromTimeUUID(customerId.getId()),
                new PageRequest(0, 15)
        );
        return DaoUtil.convertDataList(recipientList);
    }

    @Override
    public AlarmRecipient findByCustomerId(TenantId tenantId, CustomerId customerId, UUID id) {
        AlarmRecipientEntity recipientEntity = alarmRecipientRepository.findByCustomerId(
                fromTimeUUID(tenantId.getId()),
                fromTimeUUID(customerId.getId()),
                fromTimeUUID(id),
                new PageRequest(0, 15)
        );
        return DaoUtil.getData(recipientEntity);
    }

    @Override
    protected Class<AlarmRecipientEntity> getEntityClass() {
        return null;
    }

    @Override
    protected CrudRepository<AlarmRecipientEntity, String> getCrudRepository() {
        return null;
    }


}
