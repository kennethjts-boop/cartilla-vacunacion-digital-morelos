
import { encrypt, decrypt } from './lib/auth'

async function testAuth() {
    console.log('Testing Auth logic...')
    try {
        const payload = { user: { id: '1', email: 'test@example.com', role: 'ADMIN' } }
        const token = await encrypt(payload)
        console.log('Encryption successful. Token length:', token.length)

        const decrypted = await decrypt(token)
        console.log('Decryption successful. Payload match:', JSON.stringify(decrypted) === JSON.stringify(payload))
    } catch (error) {
        console.error('Auth test failed:', error)
    }
}

testAuth()
