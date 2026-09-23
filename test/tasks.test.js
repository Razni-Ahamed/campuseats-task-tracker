const test = require("node:test");
const assert = require("node:assert");
const { tasks, calculateTotal } = require("../src/tasks");

test("task list has the initial tasks", () => {
  assert.strictEqual(tasks.length, 3);
});

test("regular customer pays the full subtotal", () => {
  assert.strictEqual(calculateTotal(200, 3, "regular"), 600);
});

test("vip customer gets a 10% discount", () => {
  assert.strictEqual(calculateTotal(200, 3, "vip"), 540);
});

test("negative price or quantity is rejected", () => {
  assert.throws(() => calculateTotal(-1, 2, "vip"));
  assert.throws(() => calculateTotal(10, -2, "regular"));
});

test("non-numeric input is rejected", () => {
  assert.throws(() => calculateTotal("200", 3, "vip"), TypeError);
});
