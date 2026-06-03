import { fail, Result } from "./result"

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 500,
  ) {
    super(message)
    this.name = this.constructor.name
  }
}

//401 — no valid session
export class UnauthenticatedError extends AppError {
  constructor(message = "Authentication required") {
    super(message, "UNAUTHENTICATED", 401)
  }
}

//403 — authenticated but not allowed
export class ForbiddenError extends AppError {
  constructor(message = "You do not have permission to do this") {
    super(message, "FORBIDDEN", 403)
  }
}

//404
export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, "NOT_FOUND", 404)
  }
}

//400 — bad input, business rule violation
export class ValidationError extends AppError {
  constructor(
    message: string,
    public readonly fields?: Record<string, string>,
  ) {
    super(message, "VALIDATION_ERROR", 400)
  }
}

//409 — conflict (e.g. email already in use, invite already accepted)
export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, "CONFLICT", 409)
  }
}

//401 — bad credentials specifically (separate from generic unauthenticated
export class InvalidCredentialsError extends AppError {
  constructor() {
    super("Invalid email or password", "INVALID_CREDENTIALS", 401)
  }
}

export function mapErrorToResult<T>(e: unknown): Result<T> {
  if (e instanceof AppError) {
    return {
      success: false,
      error: e.message,
      fieldErrors: "fields" in e ? (e as any).fields : undefined,
    }
  }
  console.error("[action] unexpected error:", e)
  return { success: false, error: "Something went wrong. Try again." }
}

export async function safe<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    const data = await fn()
    return { success: true, data }
  } catch (e) {
    if (e instanceof AppError) {
      const fieldErrors =
        "fields" in e
          ? (e as { fields?: Record<string, string> }).fields
          : undefined
      return fail(e.message, fieldErrors)
    }
    console.error("[safe] unexpected error:", e)
    return fail("Something went wrong. Try again.")
  }
}
