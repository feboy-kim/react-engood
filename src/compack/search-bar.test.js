import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import SearchBar from "./search-bar"

describe('searching-bar', () => {
    test('initial selected', async () => {
        const initialSelected = jest.fn()
        render(<SearchBar kwSelected={initialSelected} />)
        const initial = screen.getByLabelText('首字符')
        const tailine = screen.getByLabelText('尾字符')
        const buttonode = screen.getByTitle('search')

        expect(initial).toBeInTheDocument()
        expect(tailine).toBeInTheDocument()
        expect(buttonode).toBeInTheDocument()
        expect(buttonode).toBeDisabled()

        fireEvent.change(initial, { target: { value: 'i' } })
        expect(initial).toHaveValue('i')
        expect(buttonode).toBeEnabled()

        fireEvent.click(buttonode)
        expect(buttonode).toBeDisabled()
        expect(initial).toHaveValue('')
        await waitFor(() => expect(initialSelected).toHaveBeenCalledWith("i", ""))
    })
    test('tailine selected', async () => {
        const tailineSelected = jest.fn()
        render(<SearchBar kwSelected={tailineSelected} />)
        const initial = screen.getByLabelText('首字符')
        const tailine = screen.getByLabelText('尾字符')
        const buttonode = screen.getByTitle('search')

        expect(initial).toBeInTheDocument()
        expect(tailine).toBeInTheDocument()
        expect(buttonode).toBeInTheDocument()
        expect(buttonode).toBeDisabled()

        fireEvent.change(tailine, { target: { value: 't' } })
        expect(tailine).toHaveValue("t")
        expect(buttonode).toBeEnabled()

        fireEvent.click(buttonode)
        expect(buttonode).toBeDisabled()
        expect(tailine).toHaveValue("")
        await waitFor(() => expect(tailineSelected).toHaveBeenCalledWith("", "t"))
    })
})
