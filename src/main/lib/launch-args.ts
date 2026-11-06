import { fileURLToPath } from 'node:url'

/**
 * Desktop launchers may pass a local file as a `file://` URI instead of a path,
 * for example when the desktop entry uses the `%U` field code.
 *
 * Returns the local filesystem path for a launch argument, or `null` when the
 * URI cannot be converted, such as one naming a remote host.
 */
export function launchArgToPath(arg: string): string | null {
    if (!/^file:\/\//i.test(arg)) {
        return arg
    }

    try {
        return fileURLToPath(arg)
    } catch {
        return null
    }
}
