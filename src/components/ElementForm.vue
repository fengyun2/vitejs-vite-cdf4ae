<template>
  <el-form :model="form" label-width="120px">
    <el-form-item :label="$t('commons.activityName')">
      <el-input
        v-model="form.name"
        :placeholder="$t('commons.activityNamePlaceholder')"
      />
    </el-form-item>
    <el-form-item :label="$t('commons.activityZone')">
      <el-select
        v-model="form.region"
        :placeholder="$t('commons.activityZonePlaceholder')"
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('commons.activityTime')">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          :placeholder="$t('commons.pickADate')"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          :placeholder="$t('commons.pickATime')"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item :label="$t('commons.instantDelivery')">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item :label="$t('commons.activityType')">
      <el-checkbox-group v-model="form.type">
        <el-checkbox :label="$t('commons.onlineActivities')" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="$t('commons.resources')">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="$t('commons.activityForm')">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{
        $t('commons.create')
      }}</el-button>
      <el-button>{{ $t('commons.cancel') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const onSubmit = () => {
  console.log('submit!');
};
</script>
