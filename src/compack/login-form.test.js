import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import LoginForm from "./login-form"

describe('login-form', () => {
    test('sign-in', async () => {
        const mockSigned = jest.fn()
        render(<LoginForm onLogin={mockSigned} />)
        const username = screen.getByLabelText('户名')
        const password = screen.getByLabelText('密码')
        const buttonode = screen.getByTitle('sign')

        expect(username).toBeInTheDocument()
        expect(password).toBeInTheDocument()
        expect(buttonode).toBeInTheDocument()
        expect(buttonode).toBeDisabled()

        fireEvent.change(username, { target: { value: 'one' } })
        expect(buttonode).toBeDisabled()
        fireEvent.change(password, { target: { value: 'password of one' } })
        expect(buttonode).toBeEnabled()

        fireEvent.click(buttonode)
        expect(username).toBeDisabled()
        expect(password).toBeDisabled()
        expect(buttonode).toBeDisabled()
        await waitFor(() => expect(mockSigned).toHaveBeenCalled())
    })
})