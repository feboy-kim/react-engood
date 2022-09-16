import { render, getByLabelText, getByTitle, screen, fireEvent, waitForElementToBeRemoved, queryByTitle, waitFor } from "@testing-library/react"
import WordefinForm from "./wordefin-form"

describe('wordefin-form', () => {
    test('insert item', async () => {
        const mockSaved = jest.fn()
        render(<WordefinForm onSaved={mockSaved} />)
        const container = document.querySelector('#wordefin')
        const wordNode = getByLabelText(container, '单词')
        const definNode = getByLabelText(container, '释义')
        const buttonode = getByTitle(container, 'save')

        expect(wordNode).toBeInTheDocument()
        expect(definNode).toBeInTheDocument()
        expect(buttonode).toBeInTheDocument()
        expect(buttonode).toBeDisabled()

        fireEvent.change(wordNode, { target: { value: 'one' } })
        expect(buttonode).toBeDisabled()
        fireEvent.change(definNode, { target: { value: 'definition of one' } })
        expect(buttonode).toBeEnabled()

        fireEvent.click(buttonode)
        expect(wordNode).toBeDisabled()
        expect(definNode).toBeDisabled()
        expect(buttonode).toBeDisabled()
        await waitFor(() => expect(mockSaved).toHaveBeenCalled())
    })
    test('update item', async () => {
        const wd = { w: 'logo', d: '商标；标识；图形' }
        const mockStore = jest.fn().mockReturnValue(wd)
        const mockSaved = jest.fn()
        render(<WordefinForm onSaved={mockSaved} wId={1} getOriginal={mockStore} />)
        const container = document.querySelector('#wordefin')
        const wordNode = getByLabelText(container, '单词')
        const definNode = getByLabelText(container, '释义')
        const buttonode = getByTitle(container, 'save')

        expect(wordNode).toBeInTheDocument()
        expect(definNode).toBeInTheDocument()
        expect(buttonode).toBeInTheDocument()
        expect(buttonode).toBeDisabled()

        const word = await screen.findByDisplayValue(wd.w)
        expect(word).not.toBeNull()
        const defin = await screen.findByDisplayValue(wd.d)
        expect(defin).not.toBeNull()
        expect(mockStore).toBeCalled()
        expect(buttonode).toBeDisabled()

        fireEvent.change(wordNode, { target: { value: 'one' } })
        expect(buttonode).toBeEnabled()
        fireEvent.change(definNode, { target: { value: 'definition of one' } })
        expect(buttonode).toBeEnabled()

        fireEvent.click(buttonode)
        expect(wordNode).toBeDisabled()
        expect(definNode).toBeDisabled()
        expect(buttonode).toBeDisabled()
        await waitFor(() => expect(mockSaved).toHaveBeenCalled())
    })
})
