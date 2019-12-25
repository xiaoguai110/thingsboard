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
package org.thingsboard.server.dao.model.sql;

import com.datastax.driver.mapping.annotations.Column;
import com.datastax.driver.mapping.annotations.PartitionKey;
import com.datastax.driver.mapping.annotations.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.TypeDef;
import org.thingsboard.server.common.data.alarm.AlarmRecipient;
import org.thingsboard.server.common.data.alarm.AlarmRecipientId;
import org.thingsboard.server.common.data.id.CustomerId;
import org.thingsboard.server.common.data.id.DeviceId;
import org.thingsboard.server.common.data.id.TenantId;
import org.thingsboard.server.dao.model.BaseEntity;
import org.thingsboard.server.dao.model.BaseSqlEntity;
import org.thingsboard.server.dao.util.mapping.JsonStringType;

import javax.persistence.Entity;
import java.util.UUID;

import static org.thingsboard.server.dao.model.ModelConstants.*;

@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = ALARM_RECIPIENT_COLUMN_FAMILY_NAME)
@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
public final class AlarmRecipientEntity extends BaseSqlEntity<AlarmRecipient> implements BaseEntity<AlarmRecipient> {

    @PartitionKey(value = 0)
    @Column(name = ID_PROPERTY)
    private UUID id;

    @PartitionKey(value = 1)
    @Column(name = ALARM_RECIPIENT_TENANT_ID_PROPERTY)
    private UUID tenantId;

    @PartitionKey(value = 2)
    @Column(name = ALARM_RECIPIENT_DEVICE_ID_PROPERTY)
    private UUID deviceId;

    @PartitionKey(value = 3)
    @Column(name = ALARM_RECIPIENT_CUSTOMER_ID_PROPERTY)
    private UUID customerId;

    @Column(name = ALARM_RECIPIENT_TYPE_PROPERTY)
    private String type;

    @PartitionKey(value = 4)
    @Column(name = ALARM_RECIPIENT_SEVERITY_PROPERTY)
    private String severity;

    @Column(name = ALARM_RECIPIENT_NAME_PROPERTY)
    private String name;

    @Column(name = ALARM_RECIPIENT_TELEPHONE_PROPERTY)
    private String telephone;

    @Column(name = ALARM_RECIPIENT_STATUS_PROPERTY)
    private int status;

    @Column(name = ALARM_RECIPIENT_EMAIL_PROPERTY)
    private String email;

    public AlarmRecipientEntity() {
        super();
    }

    public AlarmRecipientEntity(AlarmRecipient alarmRecipient) {
        if (alarmRecipient.getId() != null) {
            this.id = alarmRecipient.getId().getId();
        }
        if (alarmRecipient.getTenantId() != null) {
            this.tenantId = alarmRecipient.getTenantId().getId();
        }
        if (alarmRecipient.getDeviceId() != null) {
            this.deviceId = alarmRecipient.getDeviceId().getId();
        }
        if (alarmRecipient.getCustomerId() != null) {
            this.customerId = alarmRecipient.getCustomerId().getId();
        }
        this.type = alarmRecipient.getType();
        this.name = alarmRecipient.getName();
        this.telephone = alarmRecipient.getTelephone();
        this.severity = alarmRecipient.getSeverity();
        this.status=alarmRecipient.getStatus();
        this.email=alarmRecipient.getEmail();
    }

    @Override
    public AlarmRecipient toData() {
        AlarmRecipient alarmRecipient = new AlarmRecipient(new AlarmRecipientId(id));
        if (id != null) {
            alarmRecipient.setId(new AlarmRecipientId(id));
        }
        if (tenantId != null) {
            alarmRecipient.setTenantId(new TenantId(tenantId));
        }
        if (deviceId != null) {
            alarmRecipient.setDeviceId(new DeviceId(deviceId));
        }
        if (customerId != null) {
            alarmRecipient.setCustomerId(new CustomerId(customerId));
        }
        alarmRecipient.setType(type);
        alarmRecipient.setSeverity(severity);
        alarmRecipient.setName(name);
        alarmRecipient.setTelephone(telephone);
        alarmRecipient.setStatus(status);
        alarmRecipient.setEmail(email);
        return alarmRecipient;
    }

}