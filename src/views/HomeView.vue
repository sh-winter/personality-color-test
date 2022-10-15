<script setup lang="ts">
import Questions from "@/assets/test-questions.json";
import * as echarts from "echarts";
import type { ElForm, FormValidateFailure } from "element-plus";
import { nextTick, reactive, ref } from "vue";

interface State {
  answers: Record<string, string | undefined>;
  visible: boolean;
}

const formRef = ref<typeof ElForm>();
const chartRef = ref<HTMLDivElement>();
const state: State = reactive({
  answers: Object.fromEntries(Questions.map((_, i) => [i, "A"])),
  // answers: Object.fromEntries(Questions.map((_, i) => [i, undefined])),
  visible: false,
});

async function submit() {
  try {
    await formRef.value?.validate();
  } catch (err) {
    console.log("🚀 ~ file: HomeView.vue ~ line 19 ~ submit ~ err", err);
    const firstField = (
      err as NonNullable<FormValidateFailure["errors"]>[]
    )[0]?.[0]?.field;
    console.log(
      "🚀 ~ file: HomeView.vue ~ line 20 ~ submit ~ firstField",
      firstField
    );
    if (firstField) formRef.value?.scrollToField(firstField);
    return;
  }

  state.visible = true;
  nextTick(genChart);
}

function groupByValue(values: string[]) {
  const res: Record<string, number> = {};
  values.forEach((v) => ((res[v] ??= 0), res[v]++));
  return res;
}

function genChart() {
  const first15Questions = groupByValue(
    Array.from({ length: 15 }, (_, i) => state.answers[i] as string)
  );
  const last15Questions = groupByValue(
    Array.from({ length: 15 }, (_, i) => state.answers[i + 15] as string)
  );

  const redCount = (first15Questions["A"] ?? 0) + (last15Questions["D"] ?? 0);
  const blueCount = (first15Questions["B"] ?? 0) + (last15Questions["C"] ?? 0);
  const yellowCount =
    (first15Questions["C"] ?? 0) + (last15Questions["B"] ?? 0);

  const chart = echarts.init(chartRef.value!);

  chart.setOption({
    title: {
      text: "基本图形",
      // subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "性格色彩报告",
        type: "pie",
        radius: "50%",
        label: {
          normal: {
            show: true,
            formatter: "{b} {d}%",
          },
        },
        data: [
          { value: redCount, name: "红色(red)" },
          { value: blueCount, name: "蓝色(blue)" },
          { value: yellowCount, name: "黄色(yellow)" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    color: ["red", "blue", "yellow"],
  });
}
</script>
<template>
  <el-form
    ref="formRef"
    :model="state.answers"
    style="width: 980px; margin: 0 auto"
  >
    <h1>色彩性格测试</h1>
    <br />
    <hr />
    <br />
    <el-form-item
      v-for="({ title, options }, i) of Questions"
      :key="title"
      :prop="`${i}`"
      :rules="[{ required: true, message: `题目 ${i + 1} 未填写` }]"
    >
      <template #label>
        <div style="font-weight: bold">
          {{ title }}
        </div>
      </template>
      <el-radio-group v-model="state.answers[i]">
        <el-radio
          v-for="{ value, label } of options"
          :key="value"
          :label="value"
          >{{ label }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
  <el-dialog v-model="state.visible" title="性格色彩报告">
    <div class="chart" ref="chartRef"></div>
  </el-dialog>
</template>

<style scoped>
.el-form-item {
  display: block;
}
:deep(.el-form-item__content) {
  margin-left: 30px;
  margin-top: 20px;
}
:deep(.el-radio-group) {
  display: block;
}
.el-radio {
  display: flex;
  height: auto;
  align-items: flex-start;
}
:deep(.el-radio__input) {
  transform: translateY(0.7em);
}
:deep(.el-radio__label) {
  max-width: 700px;
  white-space: normal;
}
.chart {
  height: 600px;
  width: 600px;
}
</style>
