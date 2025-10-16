// src/utils/json.ts
export function jsonSafe(value: unknown) {
  return JSON.parse(
    JSON.stringify(value, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
  );
}
