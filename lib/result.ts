export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string; fieldErrors?: Record<string, string> }

export function ok<T>(data: T): Result<T> {
  return { success: true, data }
}

export function fail(
  error: string,
  fieldErrors?: Record<string, string>,
): Result<never> {
  return { success: false, error, fieldErrors }
}
