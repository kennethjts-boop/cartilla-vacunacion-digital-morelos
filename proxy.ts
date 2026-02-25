import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/auth'

// Protected routes (require valid JWT)
// Protected routes (require valid JWT)
const protectedRoutes = ['/']
const publicRoutes = ['/login', '/registro']

export async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some(route => path === route || path.startsWith(`${route}/`))

    // Redirect to login if accessing any protected route without session
    // (Assuming all routes except login, public pages and api are protected)
    const isPublicRoute = publicRoutes.includes(path) || path.startsWith('/inicio') || path.startsWith('/recuperacion') || path.startsWith('/registro')

    const session = await getSession()

    if (!isPublicRoute && !session) {
        if (path === '/') {
            return NextResponse.redirect(new URL('/inicio', req.nextUrl))
        }
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // Redirect to dashboard if logged in and trying to access login page
    if (isPublicRoute && path === '/login' && session && !req.nextUrl.searchParams.has('fromLogout')) {
        const role = (session.user as any)?.role;
        if (role === 'PADRE') {
            return NextResponse.redirect(new URL('/cartilla', req.nextUrl))
        }
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    // RBAC Logic (Role-Based Access Control)
    if (session) {
        const role = (session.user as any)?.role;

        // 1. PADRE only has access to /cartilla and /certificado
        if (role === 'PADRE') {
            if (path !== '/cartilla' && !path.startsWith('/certificado') && !isPublicRoute) {
                return NextResponse.redirect(new URL('/cartilla', req.nextUrl))
            }
        }

        // 2. MEDICO cannot access Admin state metrics and configs
        if (role === 'MEDICO') {
            const adminRoutes = ['/reportes', '/roles', '/auditoria', '/vigilancia'];
            const isAdminRoute = adminRoutes.some(route => path === route || path.startsWith(`${route}/`));

            if (isAdminRoute) {
                return NextResponse.redirect(new URL('/', req.nextUrl)) // Redirect back to their dashboard (or /registro)
            }
        }
    }

    return NextResponse.next()
}

// Ensure the middleware is only called for relevant paths
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|logos|hero|screens).*)',
    ],
}
